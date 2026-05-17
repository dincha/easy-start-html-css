## Preview larger logo, then rebuild

### Step 1 — Edit only (so you can preview live)
In `src/components/Header.tsx`, change the logo `<img>` className:
- From: `h-11 flex-shrink-0`
- To: `h-14 md:h-16 flex-shrink-0`

And bump nav row padding `py-2.5` → `py-3` for breathing room.

That's it — the Lovable preview will update immediately. You can then tell me:
- "good, rebuild" → I run step 2
- "bigger" / "smaller" → I adjust the height value and you re-check

### Step 2 — Rebuild (only after you approve the size)
`npm run build` → add `.htaccess` → zip to `/mnt/documents/kepl-build_v4.zip` for Hostinger upload.

### Note on the `.ai` file
Adobe Illustrator files can't be used by the browser and the sandbox can't reliably convert them. The PNG you already uploaded (1240×1750) has plenty of resolution — sizing it bigger in CSS is the right fix.