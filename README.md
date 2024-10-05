# Network Quiz Master

Welcome to **Network Quiz Master**! This is a quiz application designed to help students and enthusiasts of computer networking test their knowledge of the book **"Computer Networks: A Top-Down Approach"** by James F. Kurose and Keith W. Ross. The quiz currently includes questions and answers covering the first five chapters of the book, with plans to expand it further.

## Features

- 📚 **Chapter-Based Quizzes:** Test your understanding chapter-by-chapter with carefully curated questions.
- 💯 **Beautiful Score Display:** Get instant feedback with a clean, user-friendly score visualization.
- ❌ **Review Incorrect Answers:** After each quiz, easily view the problems you got wrong.
- 🕒 **History of Mistakes:** Your incorrect answers are saved in history, allowing you to review and learn from them at any time. - 🎯

## Contributing

We encourage everyone to contribute by adding new questions from any chapter or by improving the functionality of the app. Whether you're fixing bugs, enhancing the UI, or adding new features, your contributions make this project better for the entire community. Feel free to fork this project and submit a pull request!

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

This is a simple web project built using HTML, CSS, and JavaScript. However, since modern browsers may restrict some features (like loading local files via JavaScript), you'll need to run it using a local server.

### How to Run the Project

1. **Clone the repository** to your local machine: ```bash git clone https://github.com/yourusername/network-quiz-master.git cd network-quiz-master
2. - **Run a local server** to host the files. Here are a few ways you can do this:

   - **Using VS Code's Live Server Extension**:

     1. Install the Live Server extension in VS Code.
     2. Open the project folder in VS Code.
     3. Right-click on `index.html` and select "Open with Live Server."

   - **Using Python (if installed)**

     ```bash
     python -m http.server 8000
     ```

     Then, visit `http://localhost:8080`.

- **Start Quizzing!** Once the server is running, open your browser and navigate to `http://localhost:8000` (or the appropriate port for your server).
- in the script.js file you will find the list of all chapters questions change it if you want to be quizzed on one chapter or more
  ```js
  const ChaptersData = [
    ...CHAPTER1,
    ...CHAPTER2,
    ...CHAPTER3,
    ...CHAPTER4,
    ...CHAPTER5,
  ];
  ```
- the quiz questions are shuffeld if you want them to be in order change the shuffle parameter in the quizhandler (change the third parameter from true to false)
  ```js
  const Quiz = new QuizHandler(ChaptersData, ui, true);
  ```
