class Game {
    constructor(countries) {
        this.countries = countries;
        this.isOK = false; //va a validar si el resultado es correcto o no
        this.selectedCountries = [];
        this.winner = null;
    }

    generateRandomNumber(length){
        //Genera un número aleatorio
        return Math.floor(Math.random()*length);
    }

    //Si se utiliza el get, se manda a llamar como atributos, no como método.
    get oneCountry(){
        //Va a devolver un pais
        const random = this.generateRandomNumber(this.countries.length);
        return this.countries[random];
    }

    choiceCountries(){
        //Regresar los 3 paises que van a estar en el juego
        for (let index = 0; index < 3; index++) {
            const pais = this.oneCountry;
            this.selectedCountries.push(pais);
        }
        return this.selectedCountries;
    }

    get choiceWinner(){
        //Me devuelve el pais correcto y/o ganador
        const random = this.generateRandomNumber(this.selectedCountries.length);
        return this.selectedCountries[random];
    }

    buildFlag(info, cb) {
        //info: información del país
        //cb: es un callback que me va a ayudar ejecutar el listener en las  imagenes
        const img = document.createElement('img');
        img.setAttribute('src',info.flag);
        img.setAttribute('id',info.name);
        img.addEventListener('click',cb);
        return img;
    }

    start(){
        this.choiceCountries();
        this.winner = this.choiceWinner;
        const banderas = document.querySelector('.flags');
        const respuesta = document.getElementById('answer');
        const poblacion = document.getElementById('population');
        const capital = document.getElementById('capital');
        const textoPais = document.getElementById('country-name');
        banderas.innerHTML = "";
        respuesta.innerHTML = "";
        poblacion.innerHTML = "";
        capital.innerHTML = "";
        textoPais.innerHTML = this.winner.translations.es;

        const clickFlag = (event) => {
            if(this.winner.name === event.target.id){
                //El usuario dio clic a la bandera ganadora
                respuesta.innerHTML = "Correcto!";
                poblacion.innerHTML = "Población: " + this.winner.population;
                capital.innerHTML = "Capital: " + this.winner.capital;

            } else {
                respuesta.innerHTML = "Incorrecto!";
            }
        }

        this.selectedCountries.forEach(country => {
            const flag = this.buildFlag(country, clickFlag);
            banderas.appendChild(flag);
        })
    }
}

export default Game;