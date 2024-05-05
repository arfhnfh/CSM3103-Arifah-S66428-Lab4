// create table tbody ...
var tableBody = document.querySelector("table tbody");

// create the row in the table ...
var newRow = document.createElement("tr");

// new row for new data ...
newRow.innerHTML = `
    <td>4</td>
    <td>Mukhriz Jamil Asoka</td>
    <td>mukriz@corp.jo</td>
    <td>651181187223</td>
`;

tableBody.appendChild(newRow);

var rows = document.querySelectorAll("table tbody tr");

// create click event listener ...
rows.forEach(function(row) {
    row.addEventListener("click", function() {
        this.remove(); // delete the row when click it ...
    });
});
