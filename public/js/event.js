//querySelector for different elements. Need to go back and insert element id where appropriate, and maybe move to function scope to limit globally declared variables
const loginSelect = document.querySelector('#insertID');
const addSelect = document.querySelector('#addBtn');
const searchGo = document.querySelector('#insertID');
const searchInput = document.querySelector('#userSearchInput');
const saveSelect = document.querySelector('#insertID');
const logIn = document.querySelector('#login');
const logOut = document.querySelector('#insertID');

//edit Profile IDs
//need to add IDs to all fields edit-profilehbs
const editPic = document.querySelector('#insertID');
const editName = document.querySelector('#insertID');
const editPronouns = document.querySelector('#insertID');
const editBio = document.querySelector('#insertID');

/* REDUNDANT WITH DIFFERENT FILE
//login IDs
const userLogin = document.quertySelector('#username-login');
const pwLogin = document.querySelector('#password-login');
const pwInput = document.querySelector('#password-input');
//need one for submit btn file signuphbs, add id to loginhbs
*/

//signup IDs
const emailInput = document.quertySelector('#eamil-input');
const nameInput = document.querySelector('#username-input');
const pwInput = document.querySelector('#password-input');
//need one for submit btn file signuphbs, add id to signuphbs

//submit button code
function submitForm (func) {
    func.submit();
}

//generic click EventLister
// /*element selector variable*/.addEventListener('click', /*function to perform*/);

//generic mouseover EventLister, will probably use for searchInput
// /*element selector variable*/.addEventListener('mouseover', /*function to perform*/);

//Things to  do: find ID elements if already defined OR define ID elements in HTML/Handlebar elements if not already defined
//THEN create/define functions to perform after each event

// when user clicks login, they should be prompted asking for username and password

//when user clicks add button they should be taking somewhere to upload art

//when user clicks searchbutton database should be searched 

// when user mouses over or clicks search text box, they should be able to type a search parameter then either click search button or hit enter and be taken to search results

//when user clicks save button their changes should be saved to appropriate database

//when user clicks log out button they should be logged out of app

//when user clicks edit pic they should be able to change their profile picture

//when user clicks edit name they should be able to change their name

//when user clicks edit pronouns they should be able to change their pronouns

//when user clicks edit bio they should be able to change their bio

// example function 
/*function functionName() {
  
  querySelectorVariable.value = userInputVariable;
} */
