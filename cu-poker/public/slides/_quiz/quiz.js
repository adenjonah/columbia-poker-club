/* Shared quiz component for reveal.js decks.
 * Paired with quiz.css.
 *
 * HTML contract (authors write only this):
 *
 *   <div class="quiz" data-answer="B">
 *     <div class="quiz-label">Check your understanding</div>
 *     <div class="quiz-question">What is...?</div>
 *     <div class="quiz-options">
 *       <button class="quiz-option" data-choice="A"><span class="quiz-letter">A</span> First option</button>
 *       <button class="quiz-option" data-choice="B"><span class="quiz-letter">B</span> Second option</button>
 *       <button class="quiz-option" data-choice="C"><span class="quiz-letter">C</span> Third option</button>
 *     </div>
 *     <div class="quiz-feedback" data-for="correct">Great — explanation here.</div>
 *     <div class="quiz-feedback" data-for="incorrect">Not quite — explanation here.</div>
 *   </div>
 *
 * Rules:
 *  - data-answer on the .quiz element is the correct letter (matches data-choice).
 *  - A single .quiz-feedback[data-for="incorrect"] is reused for any wrong answer.
 *  - Optional per-choice feedback: .quiz-feedback[data-for="A"], etc.
 *  - Keyboard navigation of the deck is suppressed while a quiz is unanswered
 *    so arrow keys don't accidentally advance the slide.
 */
(function () {
  'use strict';

  function wireQuiz(quizEl) {
    if (quizEl.dataset.wired === '1') return;
    quizEl.dataset.wired = '1';

    const correctLetter = (quizEl.dataset.answer || '').trim().toUpperCase();
    const options = Array.from(quizEl.querySelectorAll('.quiz-option'));
    const feedbacks = Array.from(quizEl.querySelectorAll('.quiz-feedback'));

    const genericCorrect = feedbacks.find(f => (f.dataset.for || '').toLowerCase() === 'correct');
    const genericIncorrect = feedbacks.find(f => (f.dataset.for || '').toLowerCase() === 'incorrect');

    function hideAllFeedback() {
      feedbacks.forEach(f => f.classList.remove('visible', 'correct', 'incorrect'));
    }

    function showFeedback(choice, isCorrect) {
      hideAllFeedback();
      const specific = feedbacks.find(f => (f.dataset.for || '').toUpperCase() === choice);
      const target = specific || (isCorrect ? genericCorrect : genericIncorrect);
      if (target) {
        target.classList.add('visible', isCorrect ? 'correct' : 'incorrect');
      }
    }

    function handleChoice(btn) {
      const choice = (btn.dataset.choice || '').trim().toUpperCase();
      const isCorrect = choice === correctLetter;

      options.forEach(o => {
        o.classList.remove('correct', 'incorrect', 'dim');
        o.disabled = true;
        if (o === btn) {
          o.classList.add(isCorrect ? 'correct' : 'incorrect');
        } else if ((o.dataset.choice || '').toUpperCase() === correctLetter && !isCorrect) {
          o.classList.add('correct');
        } else {
          o.classList.add('dim');
        }
      });

      showFeedback(choice, isCorrect);
      appendResetButton();
      quizEl.dataset.answered = '1';
    }

    function appendResetButton() {
      if (quizEl.querySelector('.quiz-reset')) return;
      const btn = document.createElement('button');
      btn.className = 'quiz-reset';
      btn.type = 'button';
      btn.textContent = 'Try again';
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        reset();
      });
      quizEl.appendChild(btn);
    }

    function reset() {
      options.forEach(o => {
        o.classList.remove('correct', 'incorrect', 'dim');
        o.disabled = false;
      });
      hideAllFeedback();
      const resetBtn = quizEl.querySelector('.quiz-reset');
      if (resetBtn) resetBtn.remove();
      quizEl.dataset.answered = '';
    }

    options.forEach(opt => {
      opt.type = 'button';
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        if (quizEl.dataset.answered === '1') return;
        handleChoice(opt);
      });
      // Prevent reveal.js from treating clicks on the button as "advance".
      opt.addEventListener('keydown', (e) => {
        if (['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown'].includes(e.key)) {
          e.stopPropagation();
        }
      });
    });
  }

  function wireAll(root) {
    const quizzes = (root || document).querySelectorAll('.quiz');
    quizzes.forEach(wireQuiz);
  }

  function init() {
    wireAll(document);
    // Re-wire on slide change in case reveal.js clones or replaces sections.
    if (window.Reveal && typeof window.Reveal.on === 'function') {
      window.Reveal.on('slidechanged', () => wireAll(document));
      window.Reveal.on('ready', () => wireAll(document));
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
