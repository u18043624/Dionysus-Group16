//remmeber to work out age from date of birth

//loads wine on page startup
//for intial display of wines
window.onload = function() {
    loadAllTable("events")
        .then(AllTableValues => {
            displayWines(AllTableValues);
        })
        .catch(error => {
            console.error(error);
        });
}

function displayWines(wineList) {
    if (wineList) {
        document.getElementById('wineList').textContent = JSON.stringify(wineList, null, 2);
    } else {
        console.error('wineList is not defined');
    }
}

// window.onload = function() 
// {
//     loadWines();
//     displayWines();
// }