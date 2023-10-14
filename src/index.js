function createModal(modalId, contentElement) {
  var modal = document.createElement("div");
  modal.id = modalId;
  modal.className = "modal";

  var modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  var closeBtn = document.createElement("span");
  closeBtn.className = "close";
  closeBtn.innerHTML = "&times;";
  closeBtn.onclick = function () {
    closeModal(modalId);
  };

  modalContent.appendChild(closeBtn);
  modalContent.appendChild(contentElement);
  modal.appendChild(modalContent);

  document.body.appendChild(modal);
}

function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}

// Create a div with some child elements
var customContent = document.createElement("div");
var child1 = document.createElement("p");
child1.textContent = "Child 1 content";
var child2 = document.createElement("p");
child2.textContent = "Child 2 content";

customContent.appendChild(child1);
customContent.appendChild(child2);

// Now create your modal
createModal("modal1", customContent);
