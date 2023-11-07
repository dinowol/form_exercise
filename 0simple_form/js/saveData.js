//When the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  const dataForm = document.getElementById("dataForm"); //We get the element with the id dataForm

  //"Listen" for the submission of the form (see html input submit)
  //The submission causes an event
  dataForm.addEventListener("submit", function (event) {
    event.preventDefault(); //Prevent that the page is refreshed

    const name = document.getElementById("name").value; //Get what the user entered in name field
    const email = document.getElementById("email").value; //Get what the user entered in email field
    const phone = document.getElementById("phone").value; //Get what the user entered in email field

    //Create a data object from these two inputs for your database
    const newData = {
      name: name,
      email: email,
      phone: phone,
    };

    let database = []; // Simulate a simple "database" using an array

    //If we already have some items in our localStorage data we take them and put them back in our database
    if (localStorage.getItem("data")) {
      database = JSON.parse(localStorage.getItem("data"));
    }

    // Also add our new data to the "database"
    database.push(newData);

    // Store the updated data (old and new) in local storage again
    localStorage.setItem("data", JSON.stringify(database));

    // Clear form fields so you can fill in new stuff
    dataForm.reset();

    //Alert the user that we submitted our data
    alert("Data submitted successfully!");
  });
});

