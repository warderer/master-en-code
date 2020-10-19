class QuestionCard{
    constructor(number,question,answers){
        this._number = number; //current question
        this._question = question;
        this._answers = answers; //array
    }

    answersList(){
        let options = "";
        this._answers.forEach((element,index) => {
            const html = `
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="${index}" value="${element}">
                        <label class="form-check-label" for="${index}">
                            ${element}
                        </label>
                </div>
            `;
            options = options + html;
        });
        return options;
    }

    generate(){
        const answersHTML = this.answersList();
        const html=`
        <h1 class="cover-heading">${this._number+1}</h1>
        <p class="lead">${this._question}</p>
        <div class="container mt-5">
            <form role="form" data-toggle="validator">
                <div class="row">
                    <div class="column col-md-12">
                        <div class="input-group mb-5 mr-sm-2">
                            <fieldset class="form-group text-left" id="questionSelect">
                                ${answersHTML}
                            </fieldset>
                        </div>
                    </div>

                    <div class="column col-md-12">
                        <button type="submit" class="btn btn-info btn-lg" id="nextButton">Next</button>
                    </div>
                </div>
        `
        return html;
    }
}

export default QuestionCard;