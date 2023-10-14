// Create a div with some child elements
const e=document.createElement("div"),t=document.createElement("p");t.textContent="Child 1 content";const n=document.createElement("p");n.textContent="Child 2 content",e.appendChild(t),e.appendChild(n),// Now create your modal
function(e,t){let n=document.createElement("div");n.id=e,n.className="modal";let d=document.createElement("div");d.className="modal-content";let c=document.createElement("span");c.className="close",c.innerHTML="&times;",c.onclick=function(){closeModal(e)},// Append the passed content element to the modal content div
d.appendChild(t),d.appendChild(c),n.appendChild(d),document.body.appendChild(n)}("modal1",e);//# sourceMappingURL=index.9730434a.js.map

//# sourceMappingURL=index.9730434a.js.map
