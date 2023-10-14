window.addEventListener("DOMContentLoaded", () => {
  window.openModal = function (modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
  };

  window.closeModal = function (modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
  };

  function createModal(modalId, contentElement) {
    const modal = document.createElement("div");
    modal.id = modalId;
    modal.className = "modal";

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    const closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = "&times;";
    closeBtn.onclick = function () {
      window.closeModal(modalId);
    };

    modalContent.appendChild(closeBtn);
    modalContent.appendChild(contentElement);
    modal.appendChild(modalContent);

    document.body.appendChild(modal);
  }

  // Create a div with some child elements
  const customContent = document.createElement("div");
  const child1 = document.createElement("p");
  child1.textContent = "Child 1 content";
  const child2 = document.createElement("p");
  child2.textContent = "Child 2 content";

  customContent.appendChild(child1);
  customContent.appendChild(child2);

  // Now create your modal
  createModal("modal1", customContent);
});
