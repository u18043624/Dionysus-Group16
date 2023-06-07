// //remmeber to work out age from date of birth
// /* --------------------objects------------------------ */


// /* ----------------------------------------------------- */

// //loads wine on page startup
// //for intial display of wines

// //display whole table
// var tableName = "Wine";

// function displayWines(wineList) {
//     if (wineList) 
//     {
//         document.getElementById('wineList').textContent = JSON.stringify(wineList, null, 2);
//     } else 
//     {
//         console.error('wineList is not defined');
//     }
// }

// var userData = [
//     {
//         Email: "sample.email@domain.com",
//         First_Name: "Sample",
//         Last_Name: "User",
//         Birthday: "1980-01-01",
//         Country: "Sample Country",
//         Can_Manage: "N",
//         Password: "securepassword"
//     }    
// ];
// var wineData = [
//     {
//         Wine_ID: 27,
//         Name: "Sample Wine",
//         Winery: 8223,
//         Description: "This is a sample description of the wine.",
//         Year: 2018,
//         Region: "Sample Region",
//         Price: "R15.99",
//         Image: "url_to_image",
//         Quality: 2,
//         Subtype: "Red",
//         Category: "Dry",
//         Pairing: "Beef, Lamb"
//     } 
// ];
// var updatedData= [
//     {
//         Name: "Sample Wine",
//         Winery: 8223,
//         Description: "This is a sample description of the wine.",
//         Year: 2018,
//         Region: "Sample Region",
//         Price: "R15.99",
//         Image: "url_to_image",
//         Quality: 2,
//         Subtype: "Red",
//         Category: "Dry",
//         Pairing: "Beef, Lamb"
//     } 
// ]
// window.onload = function() {

//     getAllTable(tableName)
//     .then(AllTableValues => {
//         displayWines(AllTableValues);
//     })
//     .catch(error => {
//         console.error(error);
//     });

//     document.getElementById('createEntryButton').addEventListener('click', function() {
//         var tableName = "Users";
//         createTableEntryOnServer(tableName, userData);

//         console.log(userData[0].Email);
//         var customerData = [
//             {
//                 Email: userData[0].Email,
//                 Can_Manage: "N"
//             }    
//         ];

//         tableName = "Customer";
//         createTableEntryOnServer(tableName, customerData);
//     });

//     document.getElementById('deleteEntryButton').addEventListener('click', function() {
//         var tableName = "Wine";
//         var wineID = 27;
        
//         deleteTableEntry(tableName, wineID);
//     });

//     document.getElementById('updateEntryButton').addEventListener('click', function() {
//         var tableName = "Wine";
//         var wineID = 29;
        
//         updateTableEntry(tableName, wineID, updatedData) 
//     });
// };

// //get by ID

// // // Function to get data by ID
// // function getById(tableName, ID, cb) {
// //     // Your logic to retrieve data by ID goes here
// //     // Once the data is retrieved, you can invoke the callback function

// //     // For example, if you have an array of wines and you want to retrieve the wine with a specific ID
// //     var wine = wineData.find(function(wine) {
// //         return wine.Wine_ID === ID;
// //     });

// //     // Invoke the callback function with the retrieved data
// //     cb(wine);
// // }

// // // ...

// // window.onload = function() {
// //     // ...

// //     // Example usage of getById function
// //     var wineID = 27;
// //     getById(tableName, wineID, function(wine) {
// //         // Handle the retrieved wine data here
// //         console.log(wine); //this wine variable will have the wine object array(the same set up as the)
// //     });

// //     // ...
// // };

document.addEventListener('DOMContentLoaded', () => {
    // Function to check if username and password match
    const checkLogin = (email, password, cb) => {
      getById('Users', email, (user) => {
        console.log(user.Password);
        if (!user || user.Password !== password) {
          return cb(false, null);
        }
  
        cb(true, user.Can_Manage);
      });
    };
  
    // Function to handle login button click
    const handleLogin = (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      checkLogin(email, password, (isAuthenticated, canManage) => {
        if (isAuthenticated) {
          if (canManage === 'N') {
            // Redirect customer to home.html (Replace with your own implementation)
            window.location.href = 'home.html';
          } else if (canManage === 'Y') {
            // Redirect owner to owners.html (Replace with your own implementation)
            window.location.href = 'owners.html';
          } else {
            console.error('Invalid Can_Manage attribute');
          }
        } else {
            alert('Invalid email or password');
          console.error('Invalid email or password');
        }
      });
    };
  
    // Add event listener to the login form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', handleLogin);
  });



