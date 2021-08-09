class QuantumLoader{
    reader = new FileReader();

    constructor(debug = false){
        // Do everything in the constructor, so loading will be automatic on instantiation
        if(debug) console.log("QuantumLoader is instantiated.");

        // Load templates
        this.templateGenerator = new TemplateGenerator();
        console.log((this.templateGenerator == undefined ? "TemplateGenerator failed to instantiate" : "TemplateGenerator instantiated"));

        // Load stuff into the right place
        Array.from($('[data-include]')).forEach(element => {
            element.innerHTML = this.templateGenerator["Get" + element.getAttribute("data-include")]();
        });
    }
}