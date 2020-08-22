(function(){
    'use strict'

    var make;
    var model;
    var budget;
    var transmision;

    var results = [];

    function filterCars(make, model, budget, transmision){
        for(var i=0; i<carsList.length; i++){
            var downPayment = carsList[i].price * 0.20;
            if(make === carsList[i].make && carsList[i].model.includes(model) && 
                transmision === carsList[i].transmision && budget > downPayment){
                results.push(carsList[i]);
            }
        }
        return results;
    }

    //Cambia los valores de entrada aquí para probar
    console.log(filterCars("Chevrolet", "Silverado", 20000, "manual"));

})();