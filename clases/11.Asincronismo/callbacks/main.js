//Ejemplo simple de como funciona una función que recibe un parametro
function ejemploDeCb(x){
    console.log(x)
};

ejemploDeCb("esto es un string");


// Puedo enviar una función dentro de otra función.
function ejemploDeCb2(x){
    console.log(typeof(x));
};

ejemploDeCb2(()=>{});

/* La función ejemploDeCb3 recibe una función anonima y la ejecuta*/
function ejemploDeCb3(x){
    x();
};
// Un Callback es una función anonima que se pasa como parametro.
// Los Callback estan diseñados para funcionar en "tiempos" diferentes
// Los Callback muy comunmente regresan información.
ejemploDeCb3(()=>{
    console.log(3+3);
});


// Aquí la función también recibe una función anonima que ademas recibe un parametro adentro
function ejemploDeCb4(cb){
    cb('String que regresa el CB');
};

ejemploDeCb4((parametro) => {
    console.log(parametro);
});