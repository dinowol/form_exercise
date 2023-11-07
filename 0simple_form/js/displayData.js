const dataList = document.getElementById("dataList");
var docRef = db.collection("contacts"); // Reference of the "document", thus the data in your firestore

docRef
  .get()
  .then((data) => {
    data.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      const item = doc.data();
      const listElement = document.createElement("li");
      listElement.textContent = `Name: ${item.name}, Email: ${item.email}`;
      dataList.appendChild(listElement);
    });
  })
  .catch((error) => {
    console.log("Error getting document:", error);
  });
