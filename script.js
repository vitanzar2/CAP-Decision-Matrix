const outlandishResponses = [
  '"Proceed only if your left sock agrees."',
  '"Affirmative. The moon has filed your paperwork."',
  '"Negative. A goose has claimed airspace priority."',
  '"Yes, but only while humming the national anthem backwards."',
  '"The forecast predicts 87% chance of dramatic success."',
  '"Decision delayed: consulting the council of caffeinated owls."',
  '"Absolutely. Triple-check your shoelaces for tactical advantage."',
  '"No. The clipboard spirits are unsettled today."',
  '"Outcome unclear. Spin once and ask again at 14:32 Zulu."',
  '"Approved, provided you salute the nearest houseplant."'
];

const form = document.getElementById('question-form');
const questionInput = document.getElementById('question');
const answerEl = document.getElementById('answer');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const question = questionInput.value.trim();
  if (!question) {
    answerEl.textContent = 'Please enter a question for the Decision Maker 9,000.';
    return;
  }

  const randomIndex = Math.floor(Math.random() * outlandishResponses.length);
  answerEl.textContent = outlandishResponses[randomIndex];
});
