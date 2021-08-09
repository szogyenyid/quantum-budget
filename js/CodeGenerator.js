class CodeGenerator{
    constructor(){
        this.date = new Date();
    }

    // Private helpers from here
    getYearAndMonth(){ return "" + this.date.getFullYear() + "-" + ( this.date.getMonth()+1 < 10 ? "0" + (this.date.getMonth()+1) : (this.date.getMonth()+1)); }

    // Public methods from here
    GetMonthInput(){
        return `
            <input class="input" type="month" id="start" name="start" min="2020-02" value="`+ this.getYearAndMonth() +`" style="width:auto;">
        `;
    }
}