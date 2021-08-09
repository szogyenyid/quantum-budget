class QuantumLoader{
    constructor(debug = false){

        // Do everything in the constructor, so loading will be automatic on instantiation
        if(debug) console.log("QuantumLoader is instantiated.");

        // Read data from Database
        dummy = {
            
        }

        // Load templates
        this.codeGenerator = new CodeGenerator();
        console.log((this.codeGenerator == undefined ? "CodeGenerator failed to instantiate" : "CodeGenerator instantiated"));

        // Load stuff into the right place
        Array.from($('[data-include]')).forEach(element => {
            var params = (element.getAttribute("data-params") != undefined ? element.getAttribute("data-params").split('¤') : null);
            element.innerHTML = this.codeGenerator["Get" + element.getAttribute("data-include")](params);
        });
    }
}