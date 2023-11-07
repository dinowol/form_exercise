const dataForm = document.getElementById("dataForm"); //We get the element with the id dataForm

dataForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  //This is to make a "collection" in firestore -> see it as a folder where only data of one type is stored
  db.collection("contacts").doc().set({
    name: name,
    email: email,
  });

  dataForm.reset();
  alert("Data submitted successfully!");
});
