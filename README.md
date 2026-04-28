# CAP Decision Matrix 9,000

A lightweight browser app that gives playful, random "command guidance" for Civil Air Patrol–themed questions.

## What this project is

The **CAP Decision Matrix 9,000** is a tiny static web app:

- No build step
- No backend
- No external dependencies
- Runs directly in your browser

Type a question, click a button, and the app returns a randomly selected response.

## Quick start

From the project folder, run:

```bash
python3 -m http.server 8000
```

Then open:

- <http://localhost:8000>

## How to use

1. Enter any question in the input box.
2. Click **Consult the 9,000**.
3. Read your randomly generated recommendation.
4. Click again for another result.

## Project structure

- `index.html` – page layout and UI
- `style.css` – visual styling
- `script.js` – response logic and button interaction

## Notes

- This app is intentionally humorous and not official operational guidance.
- Because responses are randomized, repeated prompts can return different answers.

## Troubleshooting

- If the page does not load, confirm the server is running on port `8000`.
- If another process is using port `8000`, use a different one, for example:

  ```bash
  python3 -m http.server 8080
  ```

  Then open <http://localhost:8080>.
