const Database = {
    "responses": [
        {
            "question": "¿te gusta el pan?",
            "answers": {
                "2020-01-01": [{
                    "answer": "SI",
                    "selected": true
                }, {
                    "answer": "SI",
                    "selected": true
                }, {
                    "answer": "SI",
                    "selected": true
                }, {
                    "answer": "NO",
                    "selected": true
                }],
                "2020-02-02": [{
                    "answer": "NO",
                    "selected": true
                }, {
                    "answer": "SI",
                    "selected": true
                }, {
                    "answer": "SI",
                    "selected": true
                }]
            }
        },
        {
            "question": "¿te gusta el queso?",
            "answers": {
                "2020-01-01": [{
                    "answer": "SI",
                    "selected": true
                }, {
                    "answer": "NO",
                    "selected": true
                }, {
                    "answer": "NO",
                    "selected": true
                }, {
                    "answer": "NO",
                    "selected": true
                }],
                "2020-02-02": [{
                    "answer": "SI",
                    "selected": true
                }, {
                    "answer": "NO",
                    "selected": true
                }, {
                    "answer": "SI",
                    "selected": true
                }]
            }
        }
    ]
}

// 1. Hacer una función que devuelva un objeto por fecha solo con el numero de repuestas si
// {
//     "responses": [
//         {
//             "question": "¿te gusta el pan?",
//             "answers": {
//                 "2020-01-01": 3,
//                 "2020-02-02": 2
//             }
//         },
//         {
//             "question": "¿te gusta el queso?",
//             "answers": {
//                 "2020-01-01": 1,
//                 "2020-02-02": 2
//             }
//         }
//     ]
// }
//var iteracion = 0;
// const responses = Object.entries(Database["responses"][0]["answers"]);
// for (const response of responses){
//     const pan = response[1].filter((element)=>{
//         return element.answer === "SI";
//     });
//     console.log(response[0]); //fecha
//     console.log(Object.keys(pan).length); //cuenta
// }
const questions = Object.entries(Database["responses"]);
for (const question of questions){
    console.log(question);
    //console.log(question[1]);
    const responses = Object.entries(question[1]["answers"]);
    for (const response of responses){
      //iteracion++;
      // console.log(iteracion);
       //console.log(response);
        const pan = response[1].filter((element)=>{
            return element.answer === "SI";
        });
        console.log(response[0]); //fecha
        console.log(Object.keys(pan).length); //cuenta
    }
}



// 2. Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.