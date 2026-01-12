document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".event-box");
  requestAnimationFrame(() => {
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.classList.add("ready");
      }, i * 80); // 0ms, 80ms, 160ms, 240ms
    });
  });

  
  const eventBoxes = document.querySelectorAll(".event-box[data-modal]");
  const modals = document.querySelectorAll(".modal");


  eventBoxes.forEach(box => {
    box.addEventListener("click", () => {
      const modalId = box.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "flex";   // match .modal flex centering
      }
    });
  });

  
  modals.forEach(modal => {
    const closeBtn = modal.querySelector(".close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });
    }

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});
