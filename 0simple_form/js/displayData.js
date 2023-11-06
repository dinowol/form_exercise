//When the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  const dataList = document.getElementById("dataList"); //Find the element with the id dataList

  const data = JSON.parse(localStorage.getItem("data")); // Retrieve data from local storage

  //If there is data
  if (data && data.length > 0) {
    //do this for each datapoint that you have
    data.forEach(function (item, index) {
      const listElement = document.createElement("li"); //Make a list element
      listElement.textContent = `Name: ${item.name}, Email: ${item.email}`; //Put the name and the email inside the datapoint (item) as a nice text
      dataList.appendChild(listElement); // Put it in the dataList
    });
  } else {
    //If there is no data
    const noDataText = document.createElement("p"); //Make a paragraph element
    noDataText.textContent = "No data available."; //set the text of the paragraph element
    dataList.appendChild(noDataText); //put the paragraph into the datalist
  }
});
