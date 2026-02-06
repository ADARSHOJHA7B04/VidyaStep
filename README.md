# VidyaStep

VidyaStep is a simple educational web app for Class 5–10 learners.
It creates structured, confidence-building lesson content in this order:

- A) Concept explanation (free)
- B) Practice section (paid / lockable)
- C) Encouraging feedback
- D) Soft paywall message
- E) Parent progress message

## Run locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Files

- `index.html` - app layout
- `styles.css` - styling
- `app.js` - lesson generation logic and paywall unlock flow
