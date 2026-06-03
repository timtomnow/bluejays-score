# Blue Jays Score

A lightweight web app for tracking the Toronto Blue Jays — or any of the 30 MLB teams — with live scores, game situation, standings, and more. Installable as a home screen app on Android and iPhone.

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

**Player stats**
- Collapsible player stats section for any live or completed game
- Toggle between away and home team
- Batting stats: AB, R, H, RBI, BB, K with team totals
- Pitching stats: IP, H, ER, BB, K per pitcher in appearance order

**Play-by-play**
- Live games show the last 5 plays inline (collapsible)
- "See all plays" opens a full play-by-play overlay for any game
- Filter plays by type: All, Hits, Strikeouts, Walks, Scoring
- Multi-select inning filter to focus on specific innings

**Season context**
- Season record, winning %, and current streak
- Full division standings with games back and streak
- Last 5 completed games (W/L, score, opponent) — each clickable for full game stats and play-by-play
- Next 3 upcoming scheduled games with date, time, and probable starters

**Auto-refresh**
- Every 30 seconds during live games
- Every 60 seconds when a game is scheduled (to catch first pitch)
- Every 5 minutes on off days

## Settings & switching teams

Tap the **gear** icon in the footer to open Settings, which has three cards:

- **About** — app description and links.
- **Team** — pick any of the 30 MLB teams from the dropdown. The whole app
  recolors to that team's brand colors (background, accents, highlights), swaps
  the header logo and title, and repoints scores, standings (to the team's
  division), and recent/upcoming games. Your choice is saved on the device and
  restored on the next visit — no rebuild or redeploy needed.
- **Help guide** — in-app, process-focused how-to guides.

## In-app help

The Help card in Settings reads guides from `docs/help/` — an `index.json`
listing guide slugs, plus one Markdown file per slug with `title / category /
order / summary` frontmatter. Guides are grouped by category and browsable as
individual pages, per-section pages, or a single full-docs view. Drop new
Markdown guides into `docs/help/` (and list them in `index.json`) and they
appear automatically. Until any are published, the Help card shows an empty
state.

## Offline support

A service worker precaches the app shell (and the help docs) so the app keeps
working offline and qualifies as an installable PWA. Live score data is always
fetched fresh from the network and never cached.

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

MIT — © 2026 timtomnow
