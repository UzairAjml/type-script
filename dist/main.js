var row = null;
function onFormSubmit() {
    var data = formData();
    if (validateForm()) {
        if (row == null) {
            insertData(data);
        }
        else {
            updateForm(data);
        }
    }
}
function formData() {
    var form = {
        fname: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        package: document.getElementById("package").value
    };
    return form;
}
function insertData(data) {
    var table = document
        .getElementById("bookingList")
        .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.rows.length);
    newRow.insertCell(0).innerHTML = data.fname;
    newRow.insertCell(1).innerHTML = data.email;
    newRow.insertCell(2).innerHTML = data.number;
    newRow.insertCell(3).innerHTML = data.package;
    newRow.insertCell(4).innerHTML = "<a onClick=\"onEdit(this)\"> <button class=\"modification\" > Edit </button> </a> <a onClick=\"onDelete(this)\"> <button  class=\"modification1\" > delete </button> </a>";
    resetForm();
}
function onEdit(th) {
    row = th.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("email").value = row.cells[1].innerHTML;
    document.getElementById("number").value = row.cells[2].innerHTML;
    document.getElementById("package").value = row.cells[3].innerHTML;
}
function updateForm(data) {
    row.cells[0].innerHTML = data.fname;
    row.cells[1].innerHTML = data.email;
    row.cells[2].innerHTML = data.number;
    row.cells[3].innerHTML = data.package;
    resetForm();
}
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("package").value = "";
    row = null;
}
function onDelete(th) {
    if (confirm("Are you Sure?")) {
        row = th.parentElement.parentElement.rowIndex;
        document.getElementById("bookingList").deleteRow(row);
        resetForm();
    }
}
function validateForm() {
    var uName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phono = document.getElementById("number").value;
    var pack = document.getElementById("package").value;
    if (uName == "" || email == "" || phono == "" || pack == "") {
        alert("Invalid Input");
        return false;
    }
    return true;
}
