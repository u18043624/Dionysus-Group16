/*---------------------------------Gets-------------------------------------*/
//All get values from table ,you need to pass the table name as a parameter

function getAllTable(tableName) 
{
    let link = "http://localhost:3030/"+ tableName;

    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', link, true);
        xhr.onload = function() {
            if (this.status === 200) {
                resolve(JSON.parse(this.responseText));
            } else {
                reject('error:', this.status);
            }
        };
        xhr.onerror = function() 
        {
            reject('Request failed.');
        };
        xhr.send();
    });
}
//All get values from table ,you need to pass the table name and (ID or email) as a parameters
function getById(tableName, ID, cb) 
{
    let link = `http://localhost:3030/${tableName}/${ID}`
    var xhr = new XMLHttpRequest();
    xhr.open('GET', link, true);
    xhr.onload = function() {
        if (this.status === 200) {
            var data = JSON.parse(this.responseText);
            cb(data);  // Call the callback with the fetched data row
        } else {
            console.error('error:', this.status); //this swould return if the ID is invalid
        }
    };
    xhr.onerror = function() {
        console.error('Request failed.'); //this is for a server issue
    };
    xhr.send();
}

/*-----------------------------Creates------------------------------------------*/ 

function createTableEntryOnServer(tableName, data) {
    return new Promise((resolve, reject) => {
        let link = `http://localhost:3030/${tableName}`;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', link, true); 
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onload = function() 
        {
            if (this.status === 200) 
            {
                var newData = JSON.parse(this.responseText);
                console.log(newData); 
                resolve(newData); 
            } 
            else 
            {
                console.error('error:', this.status);
                reject('Error: ' + this.status); 
            }
        };
        xhr.onerror = function() {
            console.error('Request failed.');
            reject('Request failed.'); 
        };
        xhr.send(JSON.stringify(data));
    });
}

// function createTableEntryOnServer(tableName, data) 
// {
//     let link = `http://localhost:3030/${tableName}`;
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', link, true); 
//     xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     xhr.onload = function() 
//     {
//         if (this.status === 200) //succesfull
//         {
//             var newData = JSON.parse(this.responseText);
//             console.log(newData); //testing
//         } 
//         else 
//         {
//             console.error('error:', this.status);
//         }
//     };
//     xhr.onerror = function() {
//         console.error('Request failed.');
//     };
//     xhr.send(JSON.stringify(data));
// }

/*-------------------------Update---------------------------------------*/
//wine

function updateTableEntry(tableName, ID, updatedTableData) {
    getById(tableName, ID, function(updatedTable) {
        //perform updates
        if(tableName == "Wine") {
            updatedTable = wineUpdate(updatedTableData, updatedTable);
            updateOnServer(tableName, ID, updatedTable);
        }
        else {
            console.log("invalid table name");
        }
    });
}

// need one for each table that update
// function userUpdate(updatedTableData, updatedTable)
// {
//     updatedTable.Email = updatedTableData.Email;
//     updatedTable.First_Name = updatedTableData.First_Name;
//     updatedTable.Last_Name = updatedTableData.Last_Name;
//     updatedTable.Birthday = updatedTableData.Birthday;
//     updatedTable.Country = updatedTableData.Country;
//     updatedTable.Can_Manage = updatedTableData.Can_Manage;
//     updatedTable.Password = updatedTableData.Password; //remember to hash
// }

function wineUpdate(updatedTableData, updatedTable) {
    // Access the first element of the array
    var data = updatedTableData[0];

    updatedTable.Wine_ID = data.Wine_ID;
    updatedTable.Name = data.Name;
    updatedTable.Winery = data.Winery;
    updatedTable.Description = data.Description;
    updatedTable.Year = data.Year;
    updatedTable.Region = data.Region;
    updatedTable.Price = data.Price;
    updatedTable.Image = data.Image;
    updatedTable.Quality = data.Quality;
    updatedTable.Subtype = data.Subtype;
    updatedTable.Category = data.Category;
    updatedTable.Pairing = data.Pairing;

    return updatedTable;
}

function updateOnServer(tableName, ID, updatedTableData) 
{
    let link = `http://localhost:3030/${tableName}/${ID}`;
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', link, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function() {
        if (this.status === 200) {
            var data = JSON.parse(this.responseText);
            console.log(data); //testing
        } else {
            console.error('error:', this.status);
        }
    };
    xhr.onerror = function() {
        console.error('Request failed.');
    };
    xhr.send(JSON.stringify(updatedTableData));
}


/*-------------------------Delete---------------------------------------*/

function deleteTableEntry(tableName, ID)
{
    deleteTableEntryOnServer(tableName, ID); 
}

function deleteTableEntryOnServer(tableName, ID) 
{
    let link = `http://localhost:3030/${tableName}/${ID}`
    var xhr = new XMLHttpRequest();
    xhr.open('DELETE', link, true); 
    xhr.onload = function() {
        if (this.status === 200) {
            console.log('Data successfully deleted.'); 
        } 
        else {
            console.error('error:', this.status);
        }
    };
    xhr.onerror = function() {
        console.error('Request failed.');
    };
    xhr.send();
}


