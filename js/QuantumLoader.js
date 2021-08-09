class QuantumLoader{
    constructor(debug = false){

        // Do everything in the constructor, so loading will be automatic on instantiation
        if(debug) console.log("QuantumLoader is instantiated.");

        // Read data from Database
        this.dummy = {
            "Cat1": {
                "Item1": [1400, 1000],
                "Item2": [0, 0],
                "Item3": [250000, 264123]
            },
            "Category 2":{
                "First item": [100, 80],
                "Second item": [800, 120]
            },
            "Third category":{

            }
        }

        // Load templates
        // Later on, the whole DB should be passed as a constructor parameter
        this.codeGenerator = new CodeGenerator();
        console.log((this.codeGenerator == undefined ? "CodeGenerator failed to instantiate" : "CodeGenerator instantiated"));

        // Load stuff into the right place
        Array.from($('[data-include]')).forEach(element => {
            var params = (element.getAttribute("data-params") != undefined ? element.getAttribute("data-params").split('¤') : null);
            element.innerHTML = this.codeGenerator["Get" + element.getAttribute("data-include")](params);
        });
    }
}