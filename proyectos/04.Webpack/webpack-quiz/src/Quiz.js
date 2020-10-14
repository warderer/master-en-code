import axios from 'axios';

//Genera la URI, Consulta la API y obtiene la lista de preguntas
class Quiz {
    constructor(questionsNumber, catId, difficultyLevel, answersType){
        this._URI = `https://opentdb.com/api.php?amount=${questionsNumber}&category=${catId}&difficulty=${difficultyLevel}&type=${answersType}`;
        this._QuestionsArray = [];
    };

    QuestionList() {
            const URI = this._URI;
            return axios.get(URI)
                .then((response) => {
                    if (response.data.response_code === 0)
                        return response.data;
                    else return null;
                }).catch((error) => {
                    console.log("Error:",error);
                    return error;
                });
    }

    init(){
        return this.QuestionList()
            .then((questionList) => {
                this._QuestionsArray = questionList;
            })
            .catch((err) => {
                console.log("Error:",error);
                return error;
            });
    };
};

export default Quiz;