# Blue Jays Score

A lightweight, single-file web app that shows whether the Toronto Blue Jays are playing today and what the current score is.

**[Live demo](https://timtomnow.github.io/bluejays-score/)**

## Features

- Today's game status: scheduled, live, or final
- Live score with inning indicator
- Base runner diamond (occupied bases highlighted)
- Out indicators (red dots)
- Auto-refreshes every 30 seconds during live games
- Handles off days and doubleheaders

## How it works

Fetches data from the free [MLB Stats API](https://statsapi.mlb.com) — no API key or backend required. Open `index.html` directly in any browser, or host it as a static site.

## Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Your app will be live at `https://<your-username>.github.io/<repo-name>/`

## License

MIT
