## Crop logo whitespace and restore h-11

### Steps
1. Use ImageMagick to auto-trim transparent/white borders from `src/assets/kepl-logo.png` → overwrite in place. Add a small uniform padding (~2% of height) so the mark doesn't touch the frame.
2. Revert `src/components/Header.tsx` logo class back to `h-11 flex-shrink-0` and padding to `py-2.5` (matches original Nov design).
3. Verify in preview, then rebuild and package as `/mnt/documents/kepl-build_v4.zip`.