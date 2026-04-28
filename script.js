const patrickQuotes = [
  '"No, this is Patrick."',
  '"Is mayonnaise an instrument?"',
  '"The inner machinations of my mind are an enigma."',
  '"I can\'t see my forehead."',
  '"We should take Bikini Bottom and push it somewhere else!"',
  '"I have an idea... why don\'t we leave now?"',
  '"Knowledge can never replace friendship. I prefer to be an idiot!"',
  '"Firmly grasp it!"',
  '"Leedle leedle leedle lee!"',
  '"I know, I\'ll make a fashion statement with this banana peel!"'
];

const form = document.getElementById('question-form');
const questionInput = document.getElementById('question');
const answerEl = document.getElementById('answer');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const question = questionInput.value.trim();
  if (!question) {
    answerEl.textContent = 'Ask a question first, bestie.';
    return;
  }

  const randomIndex = Math.floor(Math.random() * patrickQuotes.length);
  answerEl.textContent = patrickQuotes[randomIndex];
});
