# Meem Bakers

Royal bakery website for [Meem Bakers](https://www.instagram.com/meembakers.official/). Orders go to WhatsApp at +92 316 7737208.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your live domain before building for production.

## Production

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

On a Node host that needs a custom server:

```bash
NODE_ENV=production npm run start:node
```

## Notes

- Cakes are priced by the pound. Bakery items and sundaes use a fixed price.
- Cart and wishlist stay in the browser until the customer places an order.
- There is no email inbox on this site. Contact, checkout, custom orders, and updates all open WhatsApp.
