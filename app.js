const form = document.getElementById('lessonForm');
const outputCard = document.getElementById('outputCard');
const unlockBtn = document.getElementById('unlockBtn');

const practiceContent = document.getElementById('practiceContent');
const paywall = document.getElementById('paywall');

let lesson = null;

function makeLessonData({ className, subject, topic, language }) {
  return {
    title: `Class ${className} ${subject}: ${topic} (${language})`,
    concept:
      `${topic} means understanding one small idea at a time. ` +
      `We will learn it in simple steps and connect it to daily life.`,
    steps: [
      `First, learn what ${topic} is in one sentence.`,
      `Next, see how ${topic} works using a simple situation.`,
      `Then, connect ${topic} with ${subject} problems from class ${className}.`,
      `Finally, answer one small check question to build confidence.`
    ],
    example:
      `Think of saving pocket money in a box. You add small amounts every day. ` +
      `${topic} is similar: small steps together make full understanding.`,
    checkQuestion: `In your own words, what is one thing you understood about ${topic}?`,
    practiceQuestions: [
      `1) (Very Easy) Write one line explaining ${topic}.`,
      `2) (Very Easy) Give one daily-life example of ${topic}.`,
      `3) (Medium) Why is learning ${topic} step-by-step helpful?`,
      `4) (Medium) How can ${topic} help you in ${subject}?`,
      `5) (Application) A friend is confused about ${topic}. How will you explain it in 3 steps?`
    ],
    answers: [
      `1) ${topic} is a concept in ${subject} that we can understand in small parts.`,
      `2) Example: using coins or games to understand the idea.`,
      `3) Step-by-step learning removes confusion and grows confidence.`,
      `4) It helps solve class ${className} questions with better understanding.`,
      `5) Start with meaning, show a daily example, then ask one check question.`
    ],
    feedback:
      `Great effort! If your answer matches the idea, celebrate your progress. ` +
      `If it needs improvement, no worry—take one step again and try with confidence.`,
    parentMessage:
      `Your child is improving by learning ${topic} in small steps. ` +
      `Confidence is growing. Next, practice 1–2 questions daily to make understanding stronger.`
  };
}

function renderLesson(data) {
  document.getElementById('lessonTitle').textContent = data.title;
  document.getElementById('conceptText').textContent = data.concept;
  document.getElementById('exampleText').textContent = data.example;
  document.getElementById('checkQuestion').textContent = data.checkQuestion;
  document.getElementById('feedbackText').textContent = data.feedback;
  document.getElementById('parentMessage').textContent = data.parentMessage;

  const stepList = document.getElementById('stepList');
  stepList.innerHTML = '';
  data.steps.forEach((step) => {
    const li = document.createElement('li');
    li.textContent = step;
    stepList.appendChild(li);
  });

  const practiceList = document.getElementById('practiceList');
  practiceList.innerHTML = '';
  data.practiceQuestions.forEach((question) => {
    const li = document.createElement('li');
    li.textContent = question;
    practiceList.appendChild(li);
  });

  const answerList = document.getElementById('answerList');
  answerList.innerHTML = '';
  data.answers.forEach((answer) => {
    const li = document.createElement('li');
    li.textContent = answer;
    answerList.appendChild(li);
  });

  outputCard.hidden = false;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const className = document.getElementById('classInput').value.trim();
  const subject = document.getElementById('subjectInput').value.trim();
  const topic = document.getElementById('topicInput').value.trim();
  const language = document.getElementById('languageInput').value.trim();

  lesson = makeLessonData({ className, subject, topic, language });
  renderLesson(lesson);

  practiceContent.hidden = true;
  paywall.hidden = false;
});

unlockBtn.addEventListener('click', () => {
  if (!lesson) {
    alert('Please generate content first.');
    return;
  }

  practiceContent.hidden = false;
  paywall.hidden = true;
});
