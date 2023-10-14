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
    closeModal(modalId);
  };

  // Append the passed content element to the modal content div
  modalContent.appendChild(contentElement);
  modalContent.appendChild(closeBtn); // Consider moving the close button to the top

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
