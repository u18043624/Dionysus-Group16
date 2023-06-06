//remmeber to work out age from date of birth
/* --------------------objects------------------------ */


/* ----------------------------------------------------- */

//loads wine on page startup
//for intial display of wines

//display whole table
var tableName = "Wine";

function displayWines(wineList) {
    if (wineList) 
    {
        document.getElementById('wineList').textContent = JSON.stringify(wineList, null, 2);
    } else 
    {
        console.error('wineList is not defined');
    }
}

var userData = [
    {
        Email: "sample.email@domain.com",
        First_Name: "Sample",
        Last_Name: "User",
        Birthday: "1980-01-01",
        Country: "Sample Country",
        Can_Manage: "N",
        Password: "securepassword"
    }    
];
var wineData = [
    {
        Wine_ID: 27,
        Name: "Sample Wine",
        Winery: 8223,
        Description: "This is a sample description of the wine.",
        Year: 2018,
        Region: "Sample Region",
        Price: "R15.99",
        Image: "url_to_image",
        Quality: 2,
        Subtype: "Red",
        Category: "Dry",
        Pairing: "Beef, Lamb"
    } 
];
var updatedData= [
    {
        Name: "Sample Wine",
        Winery: 8223,
        Description: "This is a sample description of the wine.",
        Year: 2018,
        Region: "Sample Region",
        Price: "R15.99",
        Image: "url_to_image",
        Quality: 2,
        Subtype: "Red",
        Category: "Dry",
        Pairing: "Beef, Lamb"
    } 
]
window.onload = function() {

    getAllTable(tableName)
    .then(AllTableValues => {
        displayWines(AllTableValues);
    })
    .catch(error => {
        console.error(error);
    });

    document.getElementById('createEntryButton').addEventListener('click', function() {
        var tableName = "Users";
        createTableEntryOnServer(tableName, userData);

        console.log(userData[0].Email);
        var customerData = [
            {
                Email: userData[0].Email,
                Can_Manage: "N"
            }    
        ];

        tableName = "Customer";
        createTableEntryOnServer(tableName, customerData);
    });

    document.getElementById('deleteEntryButton').addEventListener('click', function() {
        var tableName = "Wine";
        var wineID = 27;
        
        deleteTableEntry(tableName, wineID);
    });

    document.getElementById('updateEntryButton').addEventListener('click', function() {
        var tableName = "Wine";
        var wineID = 29;
        
        updateTableEntry(tableName, wineID, updatedData) 
    });
};

/////delete wine ------------------------------------------------------------------------------



