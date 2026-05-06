## Fix logo + menu fonts in the build

### Findings
- `src/components/Header.tsx` line 42 loads the logo from `https://keplepcinfra.in/Asset3.png`. That URL is **not a real image** — it returns the SPA's HTML (verified). So the `<img>` always breaks in production.
- The project has no webfont declared, so Tailwind falls back to whatever default sans the visitor's browser ships. On Hostinger this is typically Arial/Times, which differs from the Lovable preview.
- Memory rule: all assets must be local — no Google Fonts CDN, no external images.

### Changes

1. **Create local logo** at `src/assets/kepl-logo.svg` — clean SVG wordmark "KEPL EPC INFRA" in brand colors (dark blue `#0B2E5B` + orange `#F26B1F`) with the DSE tagline beneath.
2. **Update `src/components/Header.tsx`**:
   - `import keplLogo from "@/assets/kepl-logo.svg";`
   - Replace the external `src` with `src={keplLogo}`.
3. **Self-host Inter font** (matches corporate aesthetic, fully local):
   - `bun add @fontsource/inter`
   - In `src/main.tsx` add: `import "@fontsource/inter/400.css"; import "@fontsource/inter/500.css"; import "@fontsource/inter/600.css"; import "@fontsource/inter/700.css";`
   - In `tailwind.config.ts` extend `theme.fontFamily.sans = ["Inter", "system-ui", "sans-serif"]`.
4. **Rebuild & repackage**:
   - `npm run build`
   - Re-create `.htaccess` in `dist/`
   - Zip to `/mnt/documents/kepl-build_v2.zip` and deliver as a downloadable artifact.

### Result
- Logo bundled into `dist/assets/` with a hashed filename — works without any external dependency.
- Menu typography renders in Inter consistently across all browsers and hosts, matching the Lovable preview.
- Drop-in replacement: delete old `public_html/` contents and upload the new zip (same `.htaccess` rewrite rules).
