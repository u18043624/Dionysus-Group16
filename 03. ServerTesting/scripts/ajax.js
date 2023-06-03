
/* need to check objects if same as database !!! */
/*--------------------------Objects-------------------------------------*/

//for new user
var userData = {
    user_ID: "1",          // check if from other table or auto generate
    username: "JaneDoe456",
    first_name: "jane",
    last_name: "doe",
    date_of_birth: "1990-01-01",
    age: 33,
    location_id: null,      // change (for testing purposes). check if from other table or auto generate
    email: "jane@yahhoo.com",
    password: "password" // must hash before crpyt or byrpt
};

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

/*--------------------------Gets----------------------------------*/
//All get from tables

function loadAllTable(tableName) 
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

// window.wineList;
// function loadAllTable(tableName) 
// {

//     let link = "http://localhost:3030/"+ tableName;

//     return new Promise((resolve, reject) => {
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', link, true);
//         xhr.onload = function() {
//             if (this.status === 200) {
//                 resolve(JSON.parse(this.responseText));
//             } else {
//                 reject('error:', this.status);
//             }
//         };
//         xhr.onerror = function() 
//         {
//             reject('Request failed.');
//         };
//         xhr.send();
//     });
// }

//events

//wines



//wineries



//users
function loadData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3030/users/0', true);
    xhr.onload = function() {
        if (this.status === 200) {
            var user = JSON.parse(this.responseText);
            document.getElementById('userData').innerHTML = 
                `username: ${user.username} <br> birthday: ${user.date_of_birth}`;
        } else 
        {
            console.error('error:', this.status);
        }
    };
    xhr.onerror = function() {
        console.error('Request failed.');
    };
    xhr.send();
}

//owner


//reviews

//



/*-------------------------Posts---------------------------------------*/

/*functions to do

s

*/

function setData(data) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3030/users', true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function() {
        if (this.status === 200) {
            var user = JSON.parse(this.responseText);
            console.log(user); //testing
        } 
        else {
            //check here adds it but throws error // maybe trying to add user more than once ? dont think so though
            //console.error('User not added \n');
            console.error('error: ', this.status);
        }
    };
    xhr.onerror = function() {
        console.error('Request failed.');
    };
    xhr.send(JSON.stringify(data));
}

setData(userData);

/* -------------------Javascript page manipulation----------------------------- */