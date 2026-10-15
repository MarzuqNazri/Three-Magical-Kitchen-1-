/* ============================================================
   EDITABLE QUESTION BANK
   Topic: French, Italian and Malay vegetable cutting styles
   Audience: introductory culinary arts / diploma students
   Correct answers are identified by the "correct" option index.
   The final question is a transfer question using a new example.
   ============================================================ */
const QUESTION_BANK = [
  {
    room: "france", category: "FRENCH CUTS",
    question: "Chef Amir needs thin, matchstick-shaped carrot strips. Which cut should he choose?",
    context: "Think about the name used in classical French knife skills.",
    options: ["Brunoise", "Julienne", "Tourné", "Paysanne"], correct: 1,
    explanation: "Julienne produces thin matchstick-shaped strips. Brunoise makes small cubes, tourné creates a shaped barrel-like form, and paysanne creates thin, flat pieces."
  },
  {
    room: "france", category: "FRENCH CUTS",
    question: "The chef wants tiny, even cubes of carrot for a refined garnish. What is the best match?",
    context: "The cut is smaller than a regular small dice.",
    options: ["Brunoise", "Rondelle", "Bâtonnet", "Chiffonade"], correct: 0,
    explanation: "Brunoise is a fine dice, traditionally made from julienne strips. Rondelle means round slices, bâtonnet means sticks, and chiffonade makes ribbons from leafy ingredients."
  },
  {
    room: "france", category: "FRENCH CUTS",
    question: "A soup needs thin, flat vegetable pieces that keep some of the vegetable's natural shape. Which cut fits?",
    context: "Uniformity still matters, but the pieces do not have to be cubes or sticks.",
    options: ["Tourné", "Paysanne", "Brunoise", "Noisette"], correct: 1,
    explanation: "Paysanne cuts are thin, flat pieces that can follow the vegetable's natural shape. Tourné is a shaped, barrel-like cut; noisette is a small ball."
  },
  {
    room: "france", category: "FRENCH CUTS",
    question: "A leafy herb needs to become fine ribbons for a garnish. Which technique should Danial use?",
    context: "The ingredient is leafy, not a firm root vegetable.",
    options: ["Macédoine", "Mirepoix", "Chiffonade", "Large dice"], correct: 2,
    explanation: "Chiffonade turns suitable leafy vegetables or herbs into fine ribbons. Mirepoix is a rough aromatic vegetable cut, while macédoine is diced vegetables."
  },
  {
    room: "italy", category: "ITALIAN PREPARATION",
    question: "An Italian cook chops onion, carrot and celery to begin a sauce. What is this flavour base commonly called?",
    context: "The vegetables are prepared to release flavour as they cook gently.",
    options: ["Soffritto", "Chiffonade", "Tourné", "Kerabu"], correct: 0,
    explanation: "Soffritto is an Italian aromatic base often made with finely chopped onion, carrot and celery, gently cooked to build flavour. Its ingredients and proportions can vary."
  },
  {
    room: "italy", category: "ITALIAN PREPARATION",
    question: "A recipe asks for round slices of zucchini. Which descriptive Italian term may be used?",
    context: "The shape is circular, like a coin.",
    options: ["A dadini", "A rondelle", "A julienne", "A chiffonade"], correct: 1,
    explanation: "Rondelle describes round slices and is also used in Italian kitchen language. A dadini refers to diced pieces; julienne describes thin strips."
  },
  {
    room: "italy", category: "ITALIAN PREPARATION",
    question: "A rustic family soup uses vegetables cut into rough, practical pieces. What should guide the cook?",
    context: "The dish is about a suitable result, not decorative knife work.",
    options: ["Every piece must be a tiny cube", "All vegetables must be turned into seven sides", "The cut should suit the dish and cooking time", "Every vegetable must be sliced paper-thin"], correct: 2,
    explanation: "Italian regional cooking includes many practical and rustic preparations. The cut should suit the dish, ingredient, cooking time and intended texture; not every preparation needs a formal classical shape."
  },
  {
    room: "italy", category: "ITALIAN PREPARATION",
    question: "Why does a cook try to cut vegetables of the same type into similar sizes?",
    context: "Imagine pieces cooking together in the same pan.",
    options: ["It guarantees the same flavour in every vegetable", "It helps them cook more evenly", "It removes the need for seasoning", "It makes every cut a French cut"], correct: 1,
    explanation: "Similar-sized pieces tend to cook at a more similar rate. This supports texture and consistency, although the ingredient and cooking method still matter."
  },
  {
    room: "malay", category: "MALAY PREPARATION",
    question: "A cook prepares shallots in very thin slices for a local dish. Which Malay term is commonly associated with this style?",
    context: "Local usage can vary with region and household.",
    options: ["Mayang", "Tourné", "Macédoine", "Noisette"], correct: 0,
    explanation: "Mayang commonly refers to slicing ingredients thinly, especially items such as shallots or onions. Exact usage can vary by region, ingredient and kitchen practice."
  },
  {
    room: "malay", category: "MALAY PREPARATION",
    question: "A cook cuts cabbage into fine, narrow shreds for a dish. Which term may describe this preparation?",
    context: "The result is a pile of thin strips rather than cubes.",
    options: ["Potong dadu", "Racik", "Tourné", "Rondelle"], correct: 1,
    explanation: "Racik can describe cutting or shredding ingredients into fine, narrow pieces. Potong dadu means cutting into cubes. Malay preparation terms can vary by context."
  },
  {
    room: "malay", category: "MALAY PREPARATION",
    question: "Long beans are cut at an angle before stir-frying. What is this cut called in Malay?",
    context: "Look at the slanted face created by the knife.",
    options: ["Potong dadu", "Mayang", "Potong serong", "Cincang halus"], correct: 2,
    explanation: "Potong serong means cutting diagonally or at an angle. It creates slanted pieces and can expose a larger cut surface."
  },
  {
    room: "malay", category: "TRANSFER CHALLENGE",
    question: "NEW KITCHEN CHALLENGE: A cook is preparing carrot for a quick stir-fry and wants slanted pieces that look attractive and cook at a similar rate. What is the most suitable choice?",
    context: "Use what you learned. Choose a cut based on the intended shape and cooking purpose.",
    options: ["Potong serong, keeping the pieces a similar thickness", "Brunoise, because tiny cubes are always best", "Tourné, because every stir-fry needs shaped vegetables", "Chiffonade, because carrots are leafy vegetables"], correct: 0,
    explanation: "Potong serong creates diagonal slices. Keeping them a similar thickness supports more even cooking. The best cut depends on the ingredient, dish and intended result; no single cut is always best."
  }
];

const ROOM_INFO = {
  france: { kicker:"ROOM 1 OF 3", title:"The French Kitchen", cardTitle:"French Kitchen", description:"Precision is the secret ingredient.", emoji:"🥕", status:"French door unlocked", theme:"france" },
  italy: { kicker:"ROOM 2 OF 3", title:"The Italian Kitchen", cardTitle:"Italian Kitchen", description:"Let preparation build flavour.", emoji:"🍅", status:"Italian door unlocked", theme:"italy" },
  malay: { kicker:"ROOM 3 OF 3", title:"The Malay Kitchen", cardTitle:"Malay Kitchen", description:"Every cut can carry a tradition.", emoji:"🌶️", status:"Malay door unlocked", theme:"malay" }
};

const screens = ["home-screen","instructions-screen","game-screen","results-screen"];
let currentIndex = 0;
let firstTryScore = 0;
let attemptsForCurrent = 0;
let questionLocked = false;
let completed = [];
let firstTryResults = [];
let feedbackVisible = false;

const $ = id => document.getElementById(id);
function showScreen(id) {
  screens.forEach(screenId => $(screenId).classList.toggle("hidden", screenId !== id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function startInstructions() { showScreen("instructions-screen"); }
function startGame() {
  currentIndex = 0;
  firstTryScore = 0;
  attemptsForCurrent = 0;
  questionLocked = false;
  completed = [];
  firstTryResults = Array(QUESTION_BANK.length).fill(false);
  feedbackVisible = false;
  showScreen("game-screen");
  renderQuestion();
}
function currentQuestion() { return QUESTION_BANK[currentIndex]; }
function renderQuestion() {
  const q = currentQuestion();
  const room = ROOM_INFO[q.room];
  attemptsForCurrent = 0;
  questionLocked = false;
  feedbackVisible = false;
  $("room-kicker").textContent = room.kicker;
  $("room-title").textContent = room.title;
  $("room-card-title").textContent = room.cardTitle;
  $("room-description").textContent = room.description;
  $("room-illustration").textContent = room.emoji;
  $("room-status-text").textContent = room.status;
  $("question-category").textContent = q.category;
  $("question-number").textContent = `${String(currentIndex+1).padStart(2,"0")} / ${QUESTION_BANK.length}`;
  $("question-text").textContent = q.question;
  $("question-context").textContent = q.context;
  $("progress-label").textContent = `Challenge ${currentIndex+1} of ${QUESTION_BANK.length}`;
  $("score-label").textContent = `First-try score: ${firstTryScore}`;
  $("progress-fill").style.width = `${(currentIndex / QUESTION_BANK.length) * 100}%`;
  $("progress-bar").setAttribute("aria-valuenow", currentIndex);
  $("feedback").classList.add("hidden");
  $("feedback").classList.remove("wrong");
  $("answer-options").innerHTML = "";
  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.type = "button";
    button.dataset.index = index;
    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = String.fromCharCode(65 + index);
    const text = document.createElement("span");
    text.textContent = option;
    button.append(letter, text);
    button.addEventListener("click", () => selectAnswer(index));
    $("answer-options").appendChild(button);
  });
}
function selectAnswer(selectedIndex) {
  if (questionLocked || feedbackVisible) return;
  const q = currentQuestion();
  const buttons = [...$("answer-options").querySelectorAll("button")];
  attemptsForCurrent++;
  if (selectedIndex === q.correct) {
    questionLocked = true;
    completed[currentIndex] = true;
    const firstTry = attemptsForCurrent === 1;
    firstTryResults[currentIndex] = firstTry;
    if (firstTry) firstTryScore++;
    buttons.forEach((button, index) => {
      button.disabled = true;
      if (index === q.correct) button.classList.add("correct");
    });
    showFeedback(true, firstTry
      ? `Correct on your first try! ${q.explanation}`
      : `Correct — you recovered after another attempt. ${q.explanation}`);
  } else {
    buttons[selectedIndex].classList.add("incorrect");
    buttons[selectedIndex].disabled = true;
    showFeedback(false, `Not quite. Read the clue and try another option. ${q.explanation}`);
  }
}
function showFeedback(correct, message) {
  feedbackVisible = true;
  $("feedback").classList.remove("hidden");
  $("feedback").classList.toggle("wrong", !correct);
  $("feedback-icon").textContent = correct ? "✓" : "↻";
  $("feedback-title").textContent = correct ? "Kitchen clue solved!" : "Try another answer";
  $("feedback-text").textContent = message;
  $("continue-button").textContent = correct
    ? (currentIndex === QUESTION_BANK.length - 1 ? "See my results →" : "Continue →")
    : "Try again";
  $("continue-button").onclick = () => {
    if (!correct) {
      feedbackVisible = false;
      $("feedback").classList.add("hidden");
      return;
    }
    if (currentIndex < QUESTION_BANK.length - 1) {
      currentIndex++;
      renderQuestion();
    } else {
      showResults();
    }
  };
}
function showResults() {
  showScreen("results-screen");
  const total = QUESTION_BANK.length;
  const percent = Math.round((firstTryScore / total) * 100);
  $("final-first-try").textContent = `${firstTryScore}/${total}`;
  $("final-completed").textContent = `${completed.filter(Boolean).length}/${total}`;
  $("final-accuracy").textContent = `${percent}%`;
  $("result-heading").textContent = percent >= 80 ? "The royal dinner is saved!" : "The royal dinner is served — keep practising!";
  $("result-lead").textContent = percent >= 80
    ? "Strong work. You recognised the cuts and connected them to their purpose."
    : "You completed the quest. Review the clues below to strengthen your knife-skills knowledge.";
  $("review-list").innerHTML = "";
  QUESTION_BANK.forEach((q, index) => {
    const details = document.createElement("details");
    details.className = "review-item";
    const summary = document.createElement("summary");
    const status = document.createElement("span");
    status.className = `review-status ${firstTryResults[index] ? "got-it" : ""}`;
    status.textContent = firstTryResults[index] ? "FIRST TRY" : "REVIEW";
    summary.append(status, document.createTextNode(`${index+1}. ${q.question}`));
    const p = document.createElement("p");
    p.textContent = `Answer: ${q.options[q.correct]}. ${q.explanation}`;
    details.append(summary, p);
    $("review-list").appendChild(details);
  });
}
$("play-button").addEventListener("click", startInstructions);
$("start-game").addEventListener("click", startGame);
$("back-home").addEventListener("click", () => showScreen("home-screen"));
$("brand-home").addEventListener("click", event => { event.preventDefault(); showScreen("home-screen"); });
$("home-during-game").addEventListener("click", () => showScreen("home-screen"));
$("return-home").addEventListener("click", () => showScreen("home-screen"));
$("play-again").addEventListener("click", startGame);
document.addEventListener("keydown", event => {
  if ($("game-screen").classList.contains("hidden")) return;
  if (["1","2","3","4"].includes(event.key)) selectAnswer(Number(event.key)-1);
});
