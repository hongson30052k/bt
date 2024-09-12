const listTable = [];
window.addEventListener("DOMContentLoaded", function () {
  let btn = document.getElementById("btn");
  btn.addEventListener("click", function () {
    var name = document.getElementById("name").value;
    if (name == "") {
      return;
    }
    listTable.push(name);
    Render();
    document.getElementById("name").value = "";
  });
});
function Render() {
  var tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  for (var i = 0; i < listTable.length; i++) {
    tbody.innerHTML +=
      "<tr><td>" +
      listTable[i] +
      `<button class="btn btn-danger m-3" onclick="deletes(${i})">Delete</button>` +
      "</td></tr>";
  }
}
function deletes(index) {
  listTable.splice(index, 1);
  Render();
}
