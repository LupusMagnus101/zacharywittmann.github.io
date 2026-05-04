document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.dataset.title;
    const description = card.dataset.description;
    const mediaSrc = card.dataset.media;

    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;

    const mediaContainer = document.getElementById("modalMedia");
    mediaContainer.innerHTML = "";

    if (mediaSrc.endsWith(".mp4")) {
      mediaContainer.innerHTML = `
        <video controls autoplay loop>
          <source src="${mediaSrc}" type="video/mp4">
        </video>
      `;
    } else {
      mediaContainer.innerHTML = `
        <img src="${mediaSrc}">
      `;
    }

    document.getElementById("projectModal").style.display = "flex";
  });
});

function closeProject() {
  document.getElementById("projectModal").style.display = "none";
  document.getElementById("modalMedia").innerHTML = "";
}