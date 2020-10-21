/**
 * Example store structure
 */
const store = {
    // 5 or more questions are required
    questions: [
      {
        question: 'What color is broccoli?',
        answers: [
          'red',
          'orange',
          'pink',
          'green'
        ],
        correctAnswer: 'green'
      },
      {
        question: 'What is the current year?',
        answers: [
          '1970',
          '2015',
          '2019',
          '2005'
        ],
        correctAnswer: '2019'
      }
    ],
    quizStarted: false,
    questionNumber: 0,
    score: 0
  };
  
  /**
   * 
   * Technical requirements:
   * 
   * Your app should include a render() function, that regenerates the view each time the store is updated. 
   * See your course material, consult your instructor, and reference the slides for more details.
   *
   * NO additional HTML elements should be added to the index.html file.
   *
   * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
   *
   * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
   * 
   */
  
  /********** TEMPLATE GENERATION FUNCTIONS **********/
  
  // These functions return HTML templates
  
  /********** RENDER FUNCTION(S) **********/
  
  // This function conditionally replaces the contents of the <main> tag based on the state of the store
  
  /********** EVENT HANDLER FUNCTIONS **********/
  
  // These functions handle events (submit, click, etc)
  
  
  function startPage(){
    let startPage = `
    <div class="card">
      <h2>Welcome to my quiz</h2>
      <p>It's going to be great</p>
      <button id="start">Start Quiz</button>
    </div>`;
    return startPage;
  }
  
  function questionPage(){
    let question = store.questions[store.questionNumber];
  
    console.log(question);
    let questionPage = `
    <div class="card">
      <h2>${question.question}</h2>
     <form>
          <label> ${question.answers[0]}</label>
          <input type="radio" name="answer" value="${question.answers[0]}">
          <label> ${question.answers[1]}</label>
          <input type="radio" name="answer" value="${question.answers[1]}">
          <button type="submit">Submit your answer</button>
      </form>
    </div>`;
    return questionPage;
  
  }
  
  function handleStartQuiz(){
      $('main').on('click','#start',function(){
            store.quizStarted=true;
            render();
  
      })
  
  }
  
  function handleAnswerSubmit(){
      $("main").on("submit", "form", function(evt){
        evt.preventDefault();
          store.questionNumber++;
          render();
  
      })
  
  
  
  }
  
  function render(){
    console.log
        if(store.quizStarted ===false){
          $('main').html(startPage());
        } else if(store.quizStarted){
          $('main').html(questionPage());
        
        }
  }
  
  function main(){
      render();
      handleStartQuiz();
      handleAnswerSubmit();
  
  }
  
  
  $(main);