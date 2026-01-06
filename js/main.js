function login() {
  const name = document.getElementById("name").value;
  const matric = document.getElementById("matric").value;

  if (name === "" || matric === "") {
    alert("Sila isi nama dan no. matrik");
    return;
  }

  // simpan data pelajar
  localStorage.setItem("studentName", name);
  localStorage.setItem("studentMatric", matric);

  // 👉 lepas login, pergi ke PRETEST
  window.location.href = "dashboard.html";

}



