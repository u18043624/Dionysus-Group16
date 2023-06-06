
/* need to check objects if same as database !!! */
/*--------------------------Objects-------------------------------------*/

//for new user
// var userData = {
//     user_ID: "1",          // check if from other table or auto generate
//     username: "JaneDoe456",
//     first_name: "jane",
//     last_name: "doe",
//     date_of_birth: "1990-01-01",
//     age: 33,
//     location_id: null,      // change (for testing purposes). check if from other table or auto generate
//     email: "jane@yahhoo.com",
//     password: "password" // must hash before crpyt or byrpt
// };

const wine = [
    {
        name: "",
        year: "",
        region: "",
        imageSrc: ""
    }
  
];

const winetype =[{
        subType: "",
        category: "",
        foodPairing: "",
}
]

const wineries = [
    {
        name: "",
        verification: "",
        image: "",
        description: ""
    }
  
];

const wineLocation =[
    {
        address:"",
        city: "",
        provine:"",
        code:"",
        country:"",
    }
]

const event=[
    {
        title:"",
        date:"",
        description:"",
        location :"",
        winery:"",
    }
]

/*---------------------------------Gets-------------------------------------*/
//All get from tables Works

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

function createTableEntryOnServer(tableName, data) 
{
    let link = `http://localhost:3030/${tableName}`;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', link, true); 
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function() 
    {
        if (this.status === 200) //succesfull
        {
            var newData = JSON.parse(this.responseText);
            console.log(newData); //testing
        } 
        else 
        {
            console.error('error:', this.status);
        }
    };
    xhr.onerror = function() {
        console.error('Request failed.');
    };
    xhr.send(JSON.stringify(data));
}

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

/* -------------------Javascript page manipulation----------------------------- */

//to do still
//create user

//create the controllers modules and routes for CRUD methods 
//think of way to display success or failure messages on clientSide
//ie when a delete or get ID fails
// or when a user is successfully deleted(Admin side) or added(client and admin) or updated(client and Admin)
//write updates for specific data object ir user, wine winery ...

// need to add customer entry when user is added


/*
    owner
    crud wines

    user add review
*/

/*
    Users
    -> create //done
        ->also add customer //done
    -> read //done
        -> all //done
        -> single //done
    -> update ?

    Reviews
    -> create ****
    -> read //done
        -> all //done
        -> single //done

    Wine
    -> create//done
    -> read //done
        -> all //done
        -> single //done
    -> update ****
    -> delete //done


*/