import Quiz from './Quiz';
import QuestionCard from './components/QuestionCard';

class Game {
    constructor(quantity, catId, difficultyLevel, answersType) {
        this._singleAnswerScore = 100; //config: puntaje de cada respuesta
        this._score = 0;
        this._currentQuestion = 0;
        this._currentAnswers = [];
        this._QuizQuestionsNumber = quantity;
        this._QuizCategoryId = catId; //from Form
        this._QuizDifficulty = difficultyLevel; //from Form
        this._QuizAnswersType = answersType; //from Form
        this._Responses = []; //true si correcto, false si incorrecto
        this._quizContent = null; //Almacena la respuesta de la API
    }

    set quizContent(APIresponse){
        this._quizContent = APIresponse;
    }

    get quizContent(){
        return this._quizContent;
    }

    get currentQuestion() {
        return this._currentQuestion;
    }

    set currentQuestion(actualQuestion) {
        this._currentQuestion = actualQuestion;
    }

    get score() {
        return this._score;
    }

    set score(answer){
        this._score = answer === true ? this._score+this._singleAnswerScore : this._score;
    }

    set response(answer){
        this._Responses.push(answer);
        this.score = answer;
    }

    nextQuestion() {
        if (this._currentQuestion < this._QuizQuestionsNumber) {
            this.currentQuestion = this._currentQuestion + 1;
        }
    }

    get currentAnswers(){
        return this._currentAnswers;
    }

    set currentAnswers(singleQuestion){
        const incorrectAnswers = singleQuestion.incorrect_answers;
        const correctAnswer = singleQuestion.correct_answer;
        let list = [correctAnswer, ...incorrectAnswers];
        this._currentAnswers = list.sort(() => Math.random() - 0.5);
    }

    continue(){

        this.currentAnswers = this.quizContent[this._currentQuestion];
        document.getElementById('mainContent').innerHTML="";
        let questionElement = document.getElementById('mainContent');
        let questionCard = new QuestionCard(this.currentQuestion, this.quizContent[this.currentQuestion].question, this.currentAnswers);
        questionElement.innerHTML=questionCard.generate();
        this.nextQuestion();

        document.getElementById("nextButton").addEventListener("click", function(){
            event.preventDefault();
            this.continue();
        }.bind(this)); //Uso Bind para poder traer el this del quiz dentro del Event Listener
    }

    init(){
        const quiz = new Quiz(this._QuizQuestionsNumber, this._QuizCategoryId,this._QuizDifficulty,this._QuizAnswersType);
        quiz.init()
            .then(() => {
                if (quiz._QuestionsArray!== null) {
                    window.$('.alert').hide();
                    // console.log(quiz._QuestionsArray);
                    // console.log('----');
                    // //Test Sigle Question Pick
                    // console.log(quiz._QuestionsArray.results[this._currentQuestion]);
                    // this.currentAnswers = quiz._QuestionsArray.results[this._currentQuestion];
                    // console.log(this._currentAnswers);
                    // this.nextQuestion();
                    // console.log('----');
                    // console.log(quiz._QuestionsArray.results[this._currentQuestion]);
                    // this.currentAnswers = quiz._QuestionsArray.results[this._currentQuestion];
                    // console.log(this._currentAnswers);
                    // //this.nextQuestion();
                    // console.log('----');
                    // //Set Score Simulation
                    // this.response = true;
                    // this.response = false;
                    // this.response = true;
                    // this.response = true;
                    // console.log(this._Responses);
                    // console.log(this._score);

                    this.quizContent = quiz._QuestionsArray.results;
                    this.continue();
                    
                } else {
                    window.$('.alert').show();
                    console.log("No existen preguntas en esa categoría, por favor selecciona otra");
                }
            })
            .catch((err) => console.log(err));
    };
}

export default Game;