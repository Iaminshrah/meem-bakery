"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  getSizePrice,
  isPricedByPound,
  products,
  type CakeSizeId,
  type Product,
} from "./data";

export type CartItem = {
  product: Product;
  quantity: number;
  sizeId?: CakeSizeId;
};

type StoredCartItem = {
  id: string;
  quantity: number;
  sizeId?: CakeSizeId;
};

type CartContextValue = {
  ready: boolean;
  items: CartItem[];
  wishlist: string[];
  addToCart: (productId: string, sizeId?: CakeSizeId) => void;
  removeFromCart: (productId: string, sizeId?: CakeSizeId) => void;
  updateQuantity: (productId: string, quantity: number, sizeId?: CakeSizeId) => void;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  cartCount: number;
  cartTotal: number;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const CART_KEY = "meem-bakers-cart";
const WISHLIST_KEY = "meem-bakers-wishlist";
const MAX_QUANTITY = 20;

function sameItem(item: CartItem, productId: string, sizeId?: CakeSizeId) {
  return item.product.id === productId && item.sizeId === sizeId;
}

function unitPrice(item: CartItem) {
  if (item.sizeId && isPricedByPound(item.product)) {
    return getSizePrice(item.sizeId);
  }
  return item.product.price;
}

function clampQuantity(value: number) {
  return Math.min(Math.max(Math.floor(value) || 1, 1), MAX_QUANTITY);
}

function readStoredCart(): CartItem[] {
  try {
    const raw = window.localStorage.getItem(CART_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as StoredCartItem[];
    if (!Array.isArray(parsed)) return [];
    return parsed.flatMap((entry) => {
      const product = products.find((item) => item.id === entry.id);
      if (!product) return [];
      const sizeId = isPricedByPound(product) ? (entry.sizeId ?? "1lb") : undefined;
      return [{ product, quantity: clampQuantity(entry.quantity), sizeId }];
    });
  } catch {
    return [];
  }
}

function readStoredWishlist(): string[] {
  try {
    const raw = window.localStorage.getItem(WISHLIST_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as string[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((id) => products.some((product) => product.id === id));
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Restore after hydration so the first client render matches the server HTML.
    const storedItems = readStoredCart();
    const storedWishlist = readStoredWishlist();
    queueMicrotask(() => {
      setItems(storedItems);
      setWishlist(storedWishlist);
      setReady(true);
    });
  }, []);

  useEffect(() => {
    if (!ready) return;
    const stored: StoredCartItem[] = items.map((item) => ({
      id: item.product.id,
      quantity: item.quantity,
      sizeId: item.sizeId,
    }));
    window.localStorage.setItem(CART_KEY, JSON.stringify(stored));
  }, [items, ready]);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist, ready]);

  const addToCart = useCallback((productId: string, sizeId?: CakeSizeId) => {
    const product = products.find((entry) => entry.id === productId);
    if (!product) return;
    const nextSize = isPricedByPound(product) ? (sizeId ?? "1lb") : undefined;

    setItems((current) => {
      const existing = current.find((item) => sameItem(item, productId, nextSize));
      if (existing) {
        return current.map((item) =>
          sameItem(item, productId, nextSize)
            ? { ...item, quantity: clampQuantity(item.quantity + 1) }
            : item,
        );
      }
      return [...current, { product, quantity: 1, sizeId: nextSize }];
    });
  }, []);

  const removeFromCart = useCallback((productId: string, sizeId?: CakeSizeId) => {
    setItems((current) =>
      current.filter((item) => !sameItem(item, productId, sizeId)),
    );
  }, []);

  const updateQuantity = useCallback(
    (productId: string, quantity: number, sizeId?: CakeSizeId) => {
      setItems((current) => {
        if (quantity <= 0) {
          return current.filter((item) => !sameItem(item, productId, sizeId));
        }
        return current.map((item) =>
          sameItem(item, productId, sizeId)
            ? { ...item, quantity: clampQuantity(quantity) }
            : item,
        );
      });
    },
    [],
  );

  const toggleWishlist = useCallback((productId: string) => {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    );
  }, []);

  const isWishlisted = useCallback(
    (productId: string) => wishlist.includes(productId),
    [wishlist],
  );

  const cartCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const cartTotal = useMemo(
    () => items.reduce((sum, item) => sum + unitPrice(item) * item.quantity, 0),
    [items],
  );

  const clearCart = useCallback(() => setItems([]), []);

  const value = useMemo(
    () => ({
      ready,
      items,
      wishlist,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleWishlist,
      isWishlisted,
      cartCount,
      cartTotal,
      clearCart,
    }),
    [
      ready,
      items,
      wishlist,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleWishlist,
      isWishlisted,
      cartCount,
      cartTotal,
      clearCart,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}

export function getCartItemPrice(item: CartItem) {
  return unitPrice(item);
}
