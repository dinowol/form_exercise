const dataList = document.getElementById("dataList");
var docRef = db.collection("contacts"); // Reference of the "document", thus the data in your firestore

docRef
  .get()
  .then((data) => {
    // if (data && data.length > 0) {
    data.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      const item = doc.data();
      const listElement = document.createElement("li");
      listElement.textContent = `Name: ${item.name}, Email: ${item.email}`;
      dataList.appendChild(listElement);
    });
    // } else { //TODO: check
    //   const noDataText = document.createElement("p");
    //   noDataText.textContent = "No data available.";
    //   dataList.appendChild(noDataText);
    // }
  })
  .catch((error) => {
    console.log("Error getting document:", error);
  });
