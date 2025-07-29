# STATUS OF THE DAY: 27/07/2025
Frontend (Night)

Client Name: akashpatel002
Project: AP Tax Advisor

## Project Progress Update
Here’s what has been added to the website so far today:

*   **Font Consistency & Hydration Fixes**
    *   Removed all Geist font usage and applied Poppins font globally across the entire project for a consistent look.
    *   Standardized the use of `poppins.className` in all layouts to resolve hydration mismatch errors.
    *   Audited the codebase for sources of hydration errors (e.g., Date.now(), Math.random(), invalid HTML nesting, external changing data) and removed or fixed any problematic code.
    *   Deleted the unused SmoothCursor component to prevent potential hydration issues.

*   **UI Improvements**
    *   Reduced the size of the "Our Mission" image for better visual balance.
    *   Ensured all images use appropriate width/height and responsive sizing for performance and consistency.

*   **General Maintenance**
    *   Cleaned up and refactored layout and footer components for clarity and maintainability.

Github URL: https://github.com/fiamanillah/ap_tax_advisor_cleintSide

# AP Tax Advisor Client Side

AP Tax Advisor is a modern web application for UK tax services, providing professional tax advice, returns, and consultation for individuals and businesses. This is the client-side (frontend) codebase, built with Next.js, TypeScript, Tailwind CSS, and GSAP for smooth animations.

## Features

- Responsive, mobile-friendly design
- Animated smooth scrolling and transitions
- Tax advice, personal tax, and corporate tax service pages
- FAQ, testimonials, and contact form
- Accessible and SEO-friendly

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- GSAP (GreenSock Animation Platform)
- Sonner (toast notifications)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- Bun (or npm/yarn)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/fiamanillah/ap_tax_advisor_cleintSide.git
   cd ap_tax_advisor_cleintSide
   ```
2. Install dependencies:
   ```sh
   bun install
   # or
   npm install
   # or
   yarn install
   ```

### Running the Development Server

```sh
bun run dev
# or
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```sh
bun run build
# or
npm run build
# or
yarn build
```

### Linting & Formatting

```sh
bun run lint
# or
npm run lint
# or
yarn lint
```

## Folder Structure

- `src/app/` — Next.js app directory
- `src/components/` — Reusable React components
- `src/types/` — TypeScript types
- `public/` — Static assets (images, icons, videos)

## Customization

- Update content and assets in the `public/` and `src/components/` folders.
- Modify styles in `src/app/globals.css` and Tailwind config.

## License

This project is licensed under the MIT License.

## Author

- [fiamanillah](https://github.com/fiamanillah)

---

For any questions or support, please open an issue on GitHub.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
