//EJERCICIO
// 1.- Hacer una petición a cualquier pokemon y mostrar sus tipos. (FOR)

const request = require("request");
const URI = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonTypeByName = (name) => {
    request.get(URI+name, (error, response, body) =>{
        if (response.statusCode===200){
            const bodyEnFormatoJSON = JSON.parse(body);
            //console.log(bodyEnFormatoJSON.types);
            const types = bodyEnFormatoJSON.types.map((objeto) => {
                return objeto.type.name;
            });
            console.log(types);
        } else {
            //ERROR
            console.log(`Petición No Éxitosa: ${response.statusCode} ${response.statusMessage}`);
        }
    });
}
getPokemonTypeByName("bulbasaur");


// 2.- Hacer una función que haga una petición     (Ejemplo: peticionLibro("i robot");
//     Buscar el primer libro e imprimir la lista de author_name   (FOR) y el title_suggest
//     http://openlibrary.org/search.json?q=i+robot)
const URIOpenLibrary = "http://openlibrary.org/search.json?";

const getFirstBookByName = (bookName) => {
    bookName = bookName.replace(' ', '+'); //Replace spaces with plus in Book name
    // encodeURIComponent(bookName);
    request.get(URIOpenLibrary+"q="+bookName, (error, response, body) => {
        if (response.statusCode === 200){
            const bodyEnFormatoJSON = JSON.parse(body);
            const firstTitle = bodyEnFormatoJSON.docs[0].title_suggest;
            console.log(firstTitle);
            const authors = bodyEnFormatoJSON.docs[0].author_name;
            console.log(authors);
        } else {
            //ERROR
            console.log(`Petición No Éxitosa: ${response.statusCode} ${response.statusMessage}`);
        }
    });

};

getFirstBookByName("I robot");


// 3.- Hacer una petición por author y devolver la lista de
//     sus libros
//     http://openlibrary.org/search.json?author=asimov
const getAuthorBooks = (author) => {
    request.get(URIOpenLibrary+"author="+author, (error, response, body) =>{
        if (response.statusCode===200){
            const bodyEnFormatoJSON = JSON.parse(body);
            const books = bodyEnFormatoJSON.docs.map((objeto) => {
                return objeto.title;
            });
            console.log(books);
        } else {
            //ERROR
            console.log(`Petición No Éxitosa: ${response.statusCode} ${response.statusMessage}`);
        }
    });
}
getAuthorBooks("asimov");



// 4.- Hacer una peticion y devolver el género de la banda deseada
//     http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse
const URIAudioDb = "http://www.theaudiodb.com/api/v1/json/1/search.php?";

const getBandGenre = (bandName) => {
    bandName = encodeURIComponent(bandName);
    request.get(URIAudioDb+"s="+bandName, (error, response, body) => {
        console.log(URIAudioDb+"s="+bandName);
        if (response.statusCode === 200){
            const bodyEnFormatoJSON = JSON.parse(body);
            const bandGenre = bodyEnFormatoJSON.artists[0].strGenre;
            console.log(bandGenre);
        } else {
            //ERROR
            console.log(`Petición No Éxitosa: ${response.statusCode} ${response.statusMessage}`);
        }
    });

};
getBandGenre("muse");

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

getMovieTitleByPeopleId(1);