## Replace temp logo with uploaded KEPL PNG and rebuild

### Steps
1. Copy `user-uploads://Company_Logo_page-0001.png` → `src/assets/kepl-logo.png`.
2. Delete old `src/assets/kepl-logo.svg`.
3. Update `src/components/Header.tsx`: change import to `import keplLogo from "@/assets/kepl-logo.png";` (no other changes — `<img src={keplLogo}>` already in place).
4. Run `npm run build`, add `.htaccess` (React Router rewrite) into `dist/`, zip to `/mnt/documents/kepl-build_v3.zip`.

### Result
Header shows the real KEPL logo (orange X + blue "KEPL" wordmark), bundled locally with a hashed `.png` filename. Drop-in replacement for Hostinger `public_html/`.