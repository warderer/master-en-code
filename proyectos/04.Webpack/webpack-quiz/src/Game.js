import Quiz from './Quiz';
import QuestionCard from './components/QuestionCard';

class Game {
    constructor(quantity, catId, difficultyLevel, answersType) {
        this._singleAnswerScore = 100; //config: puntaje de cada respuesta
        this._score = 0;
        this._currentQuestion = 0; //index
        this._currentAnswers = []; //Almacena lista de respuestas en orden aleatorio de la pregunta actual
        this._quizQuestionsNumber = quantity;
        this._quizCategoryId = catId; //from Form
        this._quizDifficulty = difficultyLevel; //from Form
        this._quizAnswersType = answersType; //from Form
        this._responses = []; //true si correcto, false si incorrecto
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
        this._responses.push(answer);
        this.score = answer;
    }

    nextQuestion() {
        if (this.currentQuestion < this._quizQuestionsNumber) {
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

    getSelectedOptionId() {
        for (let index = 0; index < this.currentAnswers.length; index++) {
            if (document.getElementById(index).checked === true){
                return index;
            }
        }
    }

    checkAnswer(){
        const answer = this.getSelectedOptionId();
        //if a response is selected
        if (answer !== undefined) {
            const selectedAnswer = this.currentAnswers[answer];
            const correctAnswer = this.quizContent[this.currentQuestion].correct_answer;
            selectedAnswer === correctAnswer ? this.response = true : this.response = false;
        } else {
            //no renponse selected
            console.log("No Response Selected")
            this.response = false;
        }
    }

    continue(){
        if (this.currentQuestion < this._quizQuestionsNumber){
            this.currentAnswers = this.quizContent[this._currentQuestion]; //Generate current answers Array
            console.log("Respuesta Correcta:", this.quizContent[this.currentQuestion].correct_answer);
            document.getElementById('mainContent').innerHTML="";
            let questionElement = document.getElementById('mainContent');
            let questionCard = new QuestionCard(this.currentQuestion, this.quizContent[this.currentQuestion].question, this.currentAnswers);
            questionElement.innerHTML=questionCard.generate(); //Fill Page with new question

            document.getElementById("nextButton").addEventListener("click", function(){
                event.preventDefault();
                this.checkAnswer();
                console.log(this._responses);
                this.nextQuestion();
                this.continue();
            }.bind(this)); //Uso Bind para poder traer el this del quiz dentro del Event Listener
        } else this.showResults();
    }

    showResults(){
        console.log("End of Game");
        console.log("Score",this.score);
    };


    init(){
        const quiz = new Quiz(this._quizQuestionsNumber, this._quizCategoryId,this._quizDifficulty,this._quizAnswersType);
        quiz.init()
            .then(() => {
                if (quiz._QuestionsArray!== null) {
                    window.$('.alert').hide();
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