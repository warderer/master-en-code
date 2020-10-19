function generateResults(data,answers,score){
    const html=`
    <h1 class="cover-heading">SCORE: ${score} POINTS</h1>
    <p class="lead">Good Job. Here is the Quiz summary:</p>
    <div class="container mt-5">
        <form role="form" data-toggle="validator">
            <div class="row">
                <div class="column col-md-12 mb-5">
                    <ul class="list-group text-left" id="questionListResults">
                            ${questionList(data,answers)}
                    </ul>
                </div>

                <div class="column col-md-12">
                    <button type="submit" class="btn btn-info btn-lg" id="tryAgainButton">Try Again</button>
                </div>
            </div>
    `
    return html;
}

function questionList(data,answers){
    let htmlList = "";
    data.forEach((element,index) => {
        const currentAnswer = answers[index];
        const singleHTML = `
            <li class="list-group-item ${currentAnswer ? "list-group-item-info": "list-group-item-warning"}">
                ${element.question}
            </li>
        `;
        htmlList = htmlList + singleHTML;
    });
    return htmlList;
}

export default generateResults;