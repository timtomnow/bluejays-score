# Blue Jays Score

A lightweight web app for tracking the Toronto Blue Jays — live score, game situation, standings, and more. Installable as a home screen app on Android and iPhone.

**[Live demo](https://timtomnow.github.io/bluejays-score/)**

## Features

**Game tracking**
- Live score with inning indicator (▲/▼)
- Base runner diamond — occupied bases highlighted in blue
- Ball/strike count dots (green/amber) and out indicators (red)
- Current batter vs. pitcher matchup with handedness
- Last play description (live feed)
- Per-inning line score with R/H/E totals
- Probable starting pitchers with ERA (scheduled games)
- Win/Loss/Save decisions (final games)
- TV/radio broadcast listings
- Handles off days and doubleheaders

**Season context**
- Season record, winning %, and current streak
- Last 10 game results (W/L dots)
- Full AL East standings with games back and streak
- Next 3 upcoming scheduled games with date, time, and probable starters

**Auto-refresh**
- Every 30 seconds during live games
- Every 60 seconds when a game is scheduled (to catch first pitch)
- Every 5 minutes on off days

## Install on your phone

On **Android** (Chrome): visit the site and tap the "Add to Home Screen" banner that appears at the bottom of the screen.

On **iPhone** (Safari): tap the Share button → "Add to Home Screen".

The app installs with a custom icon and opens full-screen without a browser address bar.

## How it works

Fetches data from the free [MLB Stats API](https://statsapi.mlb.com) — no API key, backend, or build step required. Open `index.html` directly in any browser, or host it as a static site.

## Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Your app will be live at `https://<your-username>.github.io/<repo-name>/`

## License

MIT
