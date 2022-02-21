// @ts-check

import CHAPTER1 from "./Data/Chapter1.js";
import CHAPTER2 from "./Data/Chapter2.js";
import CHAPTER3 from "./Data/Chapter3.js";
import CHAPTER4 from "./Data/Chapter4.js";
import CHAPTER5 from "./Data/Chapter5.js";
import IMPORTANT from "./Data/Important.js";

class Ui {
  constructor() {
    this.total_questions = 0;

    this.finished_section = document.getElementsByClassName("finished")[0];
    this.finished_body = document.getElementsByClassName("finished__body")[0];
    this.container = document.getElementsByClassName("container")[0];
    this.question = document.getElementsByClassName("quiz__question")[0];

    this.button_correct = document.getElementsByClassName("button__correct")[0];
    this.button_wrong = document.getElementsByClassName("button__wrong")[0];

    this.quiz__textarea = document.getElementsByClassName("quiz__textarea")[0];
    this.button_view = document.getElementsByClassName("quiz__view_answer")[0];
    this.answer = document.getElementsByClassName("quiz__answer")[0];

    this.quiz_number = document.getElementsByClassName("quiz__number")[0];

    this.score = document.getElementsByClassName("quiz__score")[0];
    this.section = document.getElementsByClassName("quiz__section")[0];

    this.reset_button_wrong =
      document.getElementsByClassName("reset__button")[0];
    this.reset_button_all = document.getElementsByClassName("reset__button")[1];

    this.hideAnswer();

    this.button_view.addEventListener("click", () => {
      this.viewAnswer();
    });
  }

  hideAnswer() {
    this.answer.classList.add("hidden");
    this.button_view.classList.remove("hidden");
  }

  viewAnswer() {
    this.answer.classList.remove("hidden");
    this.button_view.classList.add("hidden");
  }

  onCorrect(notifider) {
    this.button_correct.addEventListener("click", () => notifider());
  }

  onResetWrong(notifider) {
    this.reset_button_wrong.addEventListener("click", () => notifider());
  }
  onResetAll(notifider) {
    this.reset_button_all.addEventListener("click", () => notifider());
  }

  onWrong(notifider) {
    this.button_wrong.addEventListener("click", () => notifider());
  }

  load(obj, question_number = null) {
    this.quiz_number.innerHTML = `${question_number}/${this.total_questions}`;
    this.question.innerHTML = obj.question;
    this.answer.innerHTML = obj.answer;
    this.section.innerHTML = `Section : ${obj.section}`;
    // @ts-ignore
    this.quiz__textarea.value = "";
  }
  set_score(score, final) {
    this.score.innerHTML = `Score : ${score}/${final}`;
  }

  finish_quiz(score, final_score, history) {
    // alert(`the exam finished your score is ${score}/${final_score}`);

    // TODO update with group
    const list = history.history.map((obj) => {
      return `<div class="wrong_answers">
        <h2>${obj.section}</h2>    
        <p>${obj.question}</p>
            <p>${obj.answer}</p>
        </div>`;
    });
    localStorage.setItem("quiz",JSON.stringify(history.history))

    this.finished_body.innerHTML = `your score is ${score}/${final_score}</div> ${list.join(
      ""
    )}
    
    `;
    console.error(score == final_score);
    console.error(this.reset_button_wrong);

    if (score == final_score) {
      this.reset_button_wrong.classList.add("hide_button");
    } else {
      this.reset_button_wrong.classList.remove("hide_button");
    }

    this.finished_section.classList.remove("hidden");
    this.container.classList.add("hidden");
  }

  reset() {
    this.finished_section.classList.add("hidden");
    this.container.classList.remove("hidden");
  }
}

class History {
  constructor() {
    this.history = [];
  }

  add(obj) {
    this.history.push(obj);
  }

  group() {
    const output = {};
    this.history.forEach((item) => {
      if (item.section in output) {
        output[item.section].push(item);
      } else {
        output[item.section] = [item];
      }
    });
    return output;
  }
}

class QuizHandler {
  /**
   *
   * @param {Array} data the list of data
   * @param {ui} ui the ui component
   * @param {Boolean} shuffle to shuffle teh array
   */
  constructor(data, ui, shuffle) {
    this.data = data;
    this.ui = ui;
    this.init();
    if (shuffle) {
      this.shuffleArray();
    }
  }

  init() {
    this.score = 0;
    this.current_question = -1;

    this.ui.total_questions = this.data.length;
    this.history = new History();
  }

  inc_score() {
    this.set_score(this.score + 1);
  }

  set_score(score) {
    this.score = score;
    ui.set_score(score, this.data.length);
  }

  next_question(difficult) {
    if (difficult) {
      this.history.add({
        ...this.data[this.current_question],
        num: this.current_question + 1,
      });
    }

    this.ui.hideAnswer();
    this.ui.set_score(this.score, this.data.length);
    this.current_question++;
    this.load_question(this.current_question);
  }

  load_question(question_num) {
    if (question_num < this.data.length && question_num >= 0) {
      this.ui.load(this.data[question_num], question_num + 1);
    } else {
      ui.finish_quiz(this.score, this.data.length, this.history);
      this.current_question = 0;
      this.ui.load(this.data[0], 1);
      this.set_score(0);
    }
  }

  shuffleArray() {
    for (let i = this.data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }
  }

  reset(data) {
    if (data) {
      this.data = data;
    } else {
      this.data = this.history.history;
    }

    this.init();
    this.next_question();
  }
}

// Constant objects
// const ChaptersData = [...CHAPTER4, ...CHAPTER4];
const ChaptersData = [
  // ...CHAPTER1,
  // ...CHAPTER2,
  // ...CHAPTER3,
  // ...CHAPTER4,
  // ...CHAPTER5,
  ...IMPORTANT,
];

const ui = new Ui();
const Quiz = new QuizHandler(ChaptersData, ui, false); // data , ui components , shuffle questions
const storage_items = localStorage.getItem('quiz')
if(storage_items){
  const data = JSON.parse(storage_items)
  if(data.length >0){
    Quiz.data = data;
    Quiz.init()  
  }
  
}


// first time it will call the first question
Quiz.next_question();

ui.onCorrect(() => {
  Quiz.inc_score();
  Quiz.next_question();
});

ui.onWrong(() => {
  Quiz.next_question(true);
});

ui.onResetWrong(() => {
  ui.reset();
  Quiz.reset();
});
ui.onResetAll(() => {
  ui.reset();
  Quiz.reset(ChaptersData);
});
