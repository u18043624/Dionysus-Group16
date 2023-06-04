//remmeber to work out age from date of birth
/* --------------------objects------------------------ */

var userData = [
{
    Email: "",
    First_Name: "",
    Last_Name: "",
    Birthday: "",
    Country: -1,
    Can_Manage: -1,
    Password: "" // must hash before crpyt or byrpt
}
];

var wineData = [
    {
        name: "",
        year: "",
        region: "",
        imageSrc: ""
    }
  
];

var winetypeData =[
    {
        subType: "",
        category: "",
        foodPairing: "",
}
];

var wineryData = [
    {
        name: "",
        verification: "",
        image: "",
        description: ""
    }
  
];

var wineLocationData =[
    {
        address:"",
        city: "",
        provine:"",
        code:"",
        country:"",
    }
];
//note event var is taken by JS
var eventData=[
    {
        title:"",
        date:"",
        description:"",
        location :"",
        winery:"",
    }
];

/* ----------------------------------------------------- */

//loads wine on page startup
//for intial display of wines

//display whole table
var tableName = "wine";
window.onload = function() 
{
    getAllTable(tableName)
    .then(AllTableValues => {
        displayWines(AllTableValues);
    })
    .catch(error => {
        console.error(error);
    });
}

function displayWines(wineList) {
    if (wineList) 
    {
        document.getElementById('wineList').textContent = JSON.stringify(wineList, null, 2);
    } else 
    {
        console.error('wineList is not defined');
    }
}

//user

//will need to check if user exists
let user = "This will be assigned the return object";
let inputEmail = "examples@example.com";
//let tableName = "Wine";

getUser(tableName,inputEmail, function(returnedUser) 
{
    user = returnedUser;
});

//must check if email exists already with getUser
//then pass the newUsers details
let newUser;
addUser(newUser);

//owner

//once update is picked need to go getUser (by email)
//then need to make changes to that return object and send it as updatedUserData fro example
let selectedEmail = "examples@example.com";
updateUser(selectedEmail, updatedUserData);

//must check if email exists with getUser
//owner
deleteUser(selectedEmail);

