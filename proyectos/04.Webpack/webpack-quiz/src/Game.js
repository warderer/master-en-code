import Quiz from './Quiz';

class Game {
    constructor(quantity, catId, difficultyLevel, answersType) {
        this._singleAnswerScore = 100; //config: puntaje de cada respuesta
        this._score = 0;
        this._currentQuestion = 0;
        this._QuizQuestionsNumber = quantity;
        this._QuizCategoryId = catId; //from Form
        this._QuizDifficulty = difficultyLevel; //from Form
        this._QuizAnswersType = answersType; //from Form
        this._Responses = []; //true si correcto, false si incorrecto
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

    init(){
        const quiz = new Quiz(this._QuizQuestionsNumber, this._QuizCategoryId,this._QuizDifficulty,this._QuizAnswersType);
        quiz.init()
            .then(() => {
                if (quiz._QuestionsArray!== null) {
                    console.log(quiz._QuestionsArray);
                    console.log('----')
                    //Test Sigle Question Pick
                    console.log(quiz._QuestionsArray.results[this._currentQuestion]);
                    this.nextQuestion();
                    console.log('----')
                    console.log(quiz._QuestionsArray.results[this._currentQuestion]);
                    this.nextQuestion();
                    console.log('----')
                    //Set Score Simulation
                    this.response = true;
                    this.response = false;
                    this.response = true;
                    this.response = true;
                    console.log(this._Responses);
                    console.log(this._score);
                } else {
                    console.log("No existen preguntas en esa categoría, por favor selecciona otra");
                }
            })
            .catch((err) => console.log(err));
    };
}

export default Game;