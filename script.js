let selectedRow = null;

function onFormSubmit(e) {
  e.preventDefault();
  const data = readFormData();
  if (!selectedRow) insertNewRecord(data);
  else updateRecord(data);
  resetForm();
}

function readFormData() {
  return {
    productCode: document.getElementById("productCode").value,
    productName: document.getElementById("productName").value,
    qty: document.getElementById("Qty").value,
    perPrice: document.getElementById("PerPrice").value
  };
}

function insertNewRecord(d) {
  const tbody = document.querySelector("#storelist tbody");
  const row = tbody.insertRow();
  row.insertCell().innerHTML = d.productCode;
  row.insertCell().innerHTML = d.productName;
  row.insertCell().innerHTML = d.qty;
  row.insertCell().innerHTML = d.perPrice;
  const cell5 = row.insertCell();
  cell5.innerHTML = `<button onclick="onEdit(this)">Edit</button> <button onclick="onDelete(this)">Delete</button>`;
}

function onEdit(btn) {
  selectedRow = btn.closest("tr");
  document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
  document.getElementById("productName").value = selectedRow.cells[1].innerHTML;
  document.getElementById("Qty").value = selectedRow.cells[2].innerHTML;
  document.getElementById("PerPrice").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(d) {
  selectedRow.cells[0].innerHTML = d.productCode;
  selectedRow.cells[1].innerHTML = d.productName;
  selectedRow.cells[2].innerHTML = d.qty;
  selectedRow.cells[3].innerHTML = d.perPrice;
}

function onDelete(btn) {
  if (confirm('Delete this record?')) {
    btn.closest("tr").remove();
    resetForm();
  }
}

function resetForm() {
  document.getElementById("productCode").value = "";
  document.getElementById("productName").value = "";
  document.getElementById("Qty").value = "";
  document.getElementById("PerPrice").value = "";
  selectedRow = null;
}
