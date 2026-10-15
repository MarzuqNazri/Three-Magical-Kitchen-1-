# The Mystery of the Three Magical Kitchens

A self-contained educational game for introductory culinary arts students. Students travel through French, Italian and Malay kitchen rooms, answer knife-skills questions, receive explanations, and complete a transfer question using a new scenario.

## Learning assumptions

- **Subject:** Culinary Arts / Basic Culinary Skills
- **Topic:** French classical, Italian and Malay vegetable cutting styles
- **Audience:** Introductory diploma-level culinary arts students
- **Learning outcome:** Identify selected vegetable cuts and explain how cutting choices support cooking consistency, preparation purpose and culinary tradition.
- **Language:** English
- **Game type:** Three-room quiz adventure / escape-room-inspired learning game
- **Question count:** 12, including a final transfer question
- **Timing:** Untimed

## Files

```text
three-magical-kitchens-game/
├── index.html
├── style.css
├── script.js
└── README.md
```

No build tools, libraries, API keys, server, or installation are required. The only external resource is Google Fonts; the page falls back to system fonts if it cannot load.

## Test locally

1. Download or unzip the project.
2. Open `index.html` in a current desktop or mobile browser.
3. Select **Enter the kitchens**, read the instructions, and select **Start the quest**.
4. Try correct and incorrect answers. Incorrect answers show feedback and allow another attempt.
5. Complete all 12 questions. Check the results and expand the review items.
6. Select **Play again** and confirm the score resets.
7. Resize the browser or use mobile device emulation to check the responsive layout.
8. Disconnect from the internet and verify that gameplay still works; the font may fall back to a system font.

## Publish with GitHub Pages

1. Sign in to GitHub and create a new repository, for example `three-magical-kitchens-game`.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the **root** of the repository.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then save.
6. Wait for GitHub Pages to publish. The site URL appears in the Pages settings and normally follows `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

Use relative paths (`style.css` and `script.js`) so the project works as a GitHub Pages project site.

## Edit the question bank

Open `script.js`. The clearly labelled `QUESTION_BANK` array near the top contains every question. Each question has:

- `room`: `france`, `italy`, or `malay`
- `category`: the label shown above the question
- `question`: the question text
- `context`: an optional hint or scenario
- `options`: four answer choices
- `correct`: the zero-based index of the correct option (`0` = first option, `1` = second, etc.)
- `explanation`: feedback shown after an answer

To add or remove questions, update `QUESTION_BANK`. The progress bar, question count and result totals are calculated from the array. Keep the final question as a new example that checks whether students can transfer the concept to a different situation.

The `ROOM_INFO` object controls each room's title, description, emoji and status label.

## Scoring behaviour

- The game is untimed.
- First-attempt correct answers contribute to the learning score.
- Incorrect answers do not end the question; students can read the explanation and retry.
- Each question can be completed and scored only once.
- Final results separate first-attempt performance from completion.

## Content accuracy note

French terms such as *julienne*, *brunoise*, *paysanne* and *chiffonade* are classical culinary vocabulary. *Soffritto* is an Italian aromatic base. Malay terms such as *mayang*, *racik* and *potong serong* can vary by regional and kitchen usage. Review the wording against the terminology taught in your institution before formal assessment.

## Manual testing checklist

- [ ] Home page loads and Play button opens instructions.
- [ ] Home and Start buttons navigate correctly.
- [ ] Each answer can be selected by mouse/touch or keyboard keys 1–4.
- [ ] Correct answer gives positive feedback and enables Continue.
- [ ] Incorrect answer shows explanation and allows another choice.
- [ ] Repeated clicks cannot add multiple points for one question.
- [ ] Progress and first-try score update as expected.
- [ ] All 12 questions are completed, including the transfer question.
- [ ] Results show first-try score, completion and accuracy.
- [ ] Review list shows correct answers and explanations.
- [ ] Play again resets the game.
- [ ] Layout remains usable on desktop and mobile.
