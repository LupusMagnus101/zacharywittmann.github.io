function openProject(title, description) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDescription").innerText = description;
  document.getElementById("projectModal").style.display = "flex";
}

function closeProject() {
  document.getElementById("projectModal").style.display = "none";
}