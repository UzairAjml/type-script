var row:any=null;

interface Form{
  fname:string,
  email:string,
  number:string,
  package:string,
}
function onFormSubmit() { 
  let data:any = formData();
  if (validateForm()) {
    if (row == null) {
      insertData(data);
    } else {
      updateForm(data);
    }
  }
}
function formData():object {
 let form:Form={
  fname:(document.getElementById("name") as HTMLInputElement).value ,
  email:(document.getElementById("email") as HTMLInputElement).value,
  number:(document.getElementById("number") as HTMLInputElement).value,
  package:(document.getElementById("package") as HTMLInputElement).value,
 
 };
 return form;
}  
 function insertData (data:Form):void { 
  let table = document
    .getElementById("bookingList")
    .getElementsByTagName("tbody")[0] as HTMLTableSectionElement; 
  let newRow = table.insertRow(table.rows.length);
  newRow.insertCell(0).innerHTML = data.fname;
  newRow.insertCell(1).innerHTML = data.email;
  newRow.insertCell(2).innerHTML = data.number;
  newRow.insertCell(3).innerHTML = data.package;
  newRow.insertCell(4).innerHTML = `<a onClick="onEdit(this)"> <button class="modification" > Edit </button> </a> <a onClick="onDelete(this)"> <button  class="modification1" > delete </button> </a>`; 
  resetForm();
}
function onEdit(th:any):void {
  row = th.parentElement.parentElement;
  (document.getElementById("name")as HTMLInputElement).value = row.cells[0].innerHTML;
  (document.getElementById("email")as HTMLInputElement).value = row.cells[1].innerHTML;
  (document.getElementById("number")as HTMLInputElement).value = row.cells[2].innerHTML;
  (document.getElementById("package")as HTMLInputElement).value = row.cells[3].innerHTML;
 
}
 function updateForm(data:Form):void {
  row.cells[0].innerHTML = data.fname;
  row.cells[1].innerHTML = data.email;
  row.cells[2].innerHTML = data.number;
  row.cells[3].innerHTML = data.package;
  resetForm();
}
 function  resetForm():void {
 (document.getElementById("name") as HTMLInputElement).value="" ;
  (document.getElementById("email") as HTMLInputElement).value=""; 
  (document.getElementById("number") as HTMLInputElement ).value="";
 (document.getElementById("package") as HTMLInputElement).value=""; 
  row=null;
 }

function onDelete(th:any ) {
  if (confirm("Are you Sure?")) {
    row = th.parentElement.parentElement.rowIndex;
    (document.getElementById("bookingList") as HTMLTableSectionElement).deleteRow(row) ; 
    resetForm();
  }
}
function validateForm():Boolean {
  let uName = (document.getElementById("name")as HTMLInputElement).value;
  let email = (document.getElementById("email")as HTMLInputElement).value;
  let phono = (document.getElementById("number")as HTMLInputElement).value;
  let pack = ( (document.getElementById("package")as HTMLInputElement)).value; 

  if (uName == "" || email == "" || phono == "" || pack == "" ) {
    alert("Invalid Input");
    return false;
  }
  return true;
}