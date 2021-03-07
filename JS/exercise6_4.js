const newTable = document.createElement("table");
newTable.id = "numberTable";
newTable.class = "numberTableClass";
//newTable.textContent = "Number Table";

document.getElementById("output").appendChild(newTable);




for (i = 1; i < 13; i++) {
  const tableElement = document.createElement("tr");
  tableElement.id = "Number";
  tableElement.textContent = i;

  if (i % 4 === 0) {
    tableElement.setAttribute("class", "divisibleByFour");
  };

  document.getElementById("numberTable").appendChild(tableElement);


};

document.getElementById("numberTable").style.borderStyle = "solid double";

console.log(document.getElementById("output").innerHTML);
