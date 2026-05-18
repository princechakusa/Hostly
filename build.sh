#!/usr/bin/env bash
# Hostly JS bundler - concatenates all modules for production
# Usage: ./build.sh
# Output: www/js/bundle.js (reference this single file instead of 30+ script tags)
set -euo pipefail

OUT="www/js/bundle.js"
TS=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

echo "/* Hostly bundle — built ${TS} */" > "$OUT"

# app.js must come first — it defines window.H
# auth.js must come second — boots the login flow on page load
# All other modules register onto H and can load in any order
ORDERED=(
  www/js/app.js
  www/js/auth.js
  www/js/home.js
  www/js/browse.js
  www/js/post.js
  www/js/detail.js
  www/js/messages.js
  www/js/notifications.js
  www/js/saved.js
  www/js/admin.js
  www/js/verify.js
  www/js/jobs.js
  www/js/vehicles.js
  www/js/property.js
  www/js/electronics.js
  www/js/fashion.js
  www/js/furniture.js
  www/js/services.js
  www/js/rooms.js
  www/js/account.js
  www/js/profile.js
  www/js/wallet.js
  www/js/settings.js
  www/js/security_pages.js
  www/js/help.js
  www/js/moderation.js
  www/js/categories.js
  www/js/agriculture.js
  www/js/kids.js
  www/js/pets.js
  www/js/other.js
  www/js/supabase.js
)

for f in "${ORDERED[@]}"; do
  if [ -f "$f" ]; then
    printf '\n;/* === %s === */\n' "$f" >> "$OUT"
    cat "$f" >> "$OUT"
  fi
done

BYTES=$(wc -c < "$OUT")
echo "Bundle created: $OUT (${BYTES} bytes / $(( BYTES / 1024 )) KB)"
echo ""
echo "To use the bundle, replace individual <script> tags in index.html with:"
echo "  <script src=\"js/bundle.js\"></script>"
