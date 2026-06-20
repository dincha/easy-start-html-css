## Plan: Update Bangalore Office Address

1. Update the Bangalore office address block in `src/pages/Index.tsx` (lines 619-624) to the new address:
   - S3, Block A, 2nd Floor, Shivaganga Silverline
   - 3rd Cross Road, Opposite KSIT College, Raghuvanahalli
   - Bangalore City Municipal Corporation Layout, Bangalore -560 109
   - Phone: +91-99000 13567
   - Email: blr@keplepcinfra.in (unchanged)

2. Run `npm run build` to generate the production bundle.

3. Add `.htaccess` with React Router rewrite rules to the `dist/` folder.

4. Package `dist/` contents into `kepl-build_v5.zip` for Hostinger upload.

## Why rebuild is necessary
The address text is embedded inside minified JS chunk files after build. Editing minified files directly on the server risks breaking the site with a single wrong character. A rebuild + redeploy is the safe approach and takes under 2 minutes.