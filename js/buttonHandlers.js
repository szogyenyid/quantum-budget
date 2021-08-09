// Budget -> Settings
var budgetSettingsModal = new BulmaModal("#budgetSettings")
document.querySelector("#settingsIcon").addEventListener("click", function (e){
	budgetSettingsModal.show()
})

// Budget -> Settings -> Save
document.querySelector("#saveBudgetSettings").addEventListener("click",function(e){
	console.log("Todo: save budget settings");
})