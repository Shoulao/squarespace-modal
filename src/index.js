const MODAL_OVERLAY_CLASS = "custom-modal-overlay";

window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(`.${MODAL_OVERLAY_CLASS}`);

  const showOverlay = () => {
    overlay.style.display = "flex";
  };

  const hideOverlay = () => {
    overlay.style.display = "none";
  };

  const showModal = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.style.display = "flex";
  };

  const hideModal = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
  };

  window.openCustomModal = function (modalId) {
    showOverlay();
    showModal(modalId);
  };

  window.closeCustomModal = function (modalId) {
    hideOverlay();
    hideModal(modalId);
  };
});

/*
USAGE:

HTML
<div class="custom-modal-overlay">
    <div id="modal1" class="custom-modal">
    <div class="custom-modal-content">
        <span class="custom-modal-close" onclick="closeCustomModal('modal1')"
        >&times;</span
        >
        <p>Some text in the Modal..</p>
    </div>
    </div>
</div>

<button onclick="openCustomModal('modal1')">Open Modal 1</button>
*/
