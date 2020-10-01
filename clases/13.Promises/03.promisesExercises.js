// CONVERTIR LOS EJERCICIOS DE API EN PROMISES

//EJERCICIO
// 1.- Hacer una petición a cualquier pokemon y mostrar sus tipos. (FOR)

const request = require("request");
const URI = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonTypeByName = (name) => {
    return new Promise((resolve, reject) => {
        request.get(URI+name, (error, response, body) =>{
            if (response.statusCode===200){
                const bodyEnFormatoJSON = JSON.parse(body);
                const types = bodyEnFormatoJSON.types.map((objeto) => {
                    return objeto.type.name;
                });
                resolve(types);
            } else {
                //ERROR
                reject(`Petición No Éxitosa: ${response.statusCode} ${response.statusMessage} ${error}`);
            }
        });
    });
}

getPokemonTypeByName("bulbasaur")
    .then((pokeType) => console.log(pokeType))
    .catch((err) => console.log("Error",err));



// 2.- Hacer una función que haga una petición     (Ejemplo: peticionLibro("i robot");
//     Buscar el primer libro e imprimir la lista de author_name   (FOR) y el title_suggest
//     http://openlibrary.org/search.json?q=i+robot)
const URIOpenLibrary = "http://openlibrary.org/search.json?";

const getFirstBookByName = (bookName) => {
    return new Promise((resolve, reject) => {
        bookName = bookName.replace(' ', '+'); //Replace spaces with plus in Book name
        // encodeURIComponent(bookName);
        request.get(URIOpenLibrary+"q="+bookName, (error, response, body) => {
            if (response.statusCode === 200){
                const bodyEnFormatoJSON = JSON.parse(body);
                const firstTitle = bodyEnFormatoJSON.docs[0].title_suggest;
                const authors = bodyEnFormatoJSON.docs[0].author_name;
                resolve({firstTitle, authors});
            } else {
                //ERROR
                console.log(`Petición No Éxitosa: ${response.statusCode} ${response.statusMessage} ${error}`);
            }
        });
    });
};

getFirstBookByName("I robot")
    .then((book) => {
        console.log("--- EJERCICIO 02 ---");
        console.log("El Libro es:",book.firstTitle);
        console.log("Los Autores son:",book.authors);
    })
    .catch((err) => {
        console.log(err);
    });



// 3.- Hacer una petición por author y devolver la lista de
//     sus libros
//     http://openlibrary.org/search.json?author=asimov
const getAuthorBooks = (author) => {
    return new Promise((resolve, reject) => {
        request.get(URIOpenLibrary+"author="+author, (error, response, body) =>{
            if (response.statusCode===200){
                const bodyEnFormatoJSON = JSON.parse(body);
                const books = bodyEnFormatoJSON.docs.map((objeto) => {
                    return objeto.title;
                });
                resolve(books);
            } else {
                //ERROR
                reject(`Petición No Éxitosa: ${response.statusCode} ${response.statusMessage}`);
            }
        });
    });
}

getAuthorBooks("asimov")
    .then((book) =>{
        console.log("--- EJERCICIO 03 ---");
        console.log(book);
    })
    .catch((err) =>{
        console.log(err);
    });



// 4.- Hacer una peticion y devolver el género de la banda deseada
//     http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse
const URIAudioDb = "http://www.theaudiodb.com/api/v1/json/1/search.php?";

const getBandGenre = (bandName) => {

    return new Promise((resolve, reject) => {
        bandName = encodeURIComponent(bandName);
        request.get(URIAudioDb+"s="+bandName, (error, response, body) => {
            console.log(URIAudioDb+"s="+bandName);
            if (response.statusCode === 200){
                const bodyEnFormatoJSON = JSON.parse(body);
                const bandGenre = bodyEnFormatoJSON.artists[0].strGenre;
                resolve(bandGenre);
            } else {
                //ERROR
                reject(`Petición No Éxitosa: ${response.statusCode} ${response.statusMessage}`);
            }
        });
    });
};

getBandGenre("muse")
    .then((bandGenre) => console.log(bandGenre))
    .catch((err) => console.log(err));


// 5.- Hacer una petición a la swapi a un personaje y obtener
//    el titulo de la primera pelicula.
//    https://swapi.dev/

const URISwapi = "https://swapi.dev/api/";

const getMovieTitleByPeopleId = (id) => {
    request.get(`${URISwapi}people/${id}`, (error, response, body) => {
        if (response.statusCode === 200){
            const bodyEnFormatoJSON = JSON.parse(body);
            console.log(bodyEnFormatoJSON.name);
            console.log(bodyEnFormatoJSON.films[0]);
            request.get(bodyEnFormatoJSON.films[0], (errorDos, responseDos, bodyDos) => {
                const bodyMovieEnFormatoJSON = JSON.parse(bodyDos);
                console.log(bodyMovieEnFormatoJSON.title);
            })
        } else {

        }
    });
}

//getMovieTitleByPeopleId(1);