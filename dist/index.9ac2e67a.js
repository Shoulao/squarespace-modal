window.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".custom-modal-overlay"),t=()=>{e.style.display="flex"},o=()=>{e.style.display="none"},l=e=>{let t=document.getElementById(e);t.style.display="flex"},n=e=>{let t=document.getElementById(e);t.style.display="none"};window.openCustomModal=function(e){t(),l(e)},window.closeCustomModal=function(e){o(),n(e)}});/*
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
*///# sourceMappingURL=index.9ac2e67a.js.map

//# sourceMappingURL=index.9ac2e67a.js.map
