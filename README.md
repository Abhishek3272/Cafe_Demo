# Cafe Nova Akluj — React Version

A React (Vite) conversion of the original static Cafe Nova Akluj website. Same design,
same content, same interactions — rebuilt as reusable components with proper state
management instead of direct DOM manipulation.

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  main.jsx              Entry point
  App.jsx                Top-level layout + context providers
  index.css               Original design system (copied from styles.css)
  data/                  Menu items, packages, gallery, blog posts, nav links
  context/
    CartContext.jsx       Cart items, quantities, checkout, order confirmation
    ModalContext.jsx      Birthday / Reserve / Blog modal state
    ToastContext.jsx       Toast notifications
  hooks/
    useScrollSpy.js        Header shrink-on-scroll + active nav-link tracking
  components/
    Header.jsx, MobileDrawer.jsx
    Hero.jsx, SignatureDish.jsx, BirthdayPackages.jsx
    Menu.jsx, Gallery.jsx, Blog.jsx, Reservation.jsx, Footer.jsx
    CartDrawer.jsx
    BirthdayModal.jsx, ReserveModal.jsx, BlogModal.jsx, ModalShell.jsx
    Lightbox.jsx, ToastContainer.jsx
public/
  images/                 All original site images
```

## Notes

- All 49 menu items (7 categories × 7 items), the 3 birthday packages, 6 gallery
  photos, and 3 blog posts are defined as data in `src/data/`, so the components
  simply map over them instead of repeating markup.
- Cart, modals, and toasts are each their own React context so any component can
  open the cart, trigger the reserve modal, etc. without prop drilling.
- The original `styles.css` was carried over unchanged — same CSS variables, same
  pista-green palette, same animations — so the visual result matches the original.
