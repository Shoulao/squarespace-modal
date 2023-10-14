class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}getPropsValuesAndRenderList(){let t=this.getAttribute("flexDirection")||"row",e=this.getAttribute("alignItems")||"stretch",s=this.getAttribute("justifyContent")||"flex-start",i=this.getAttribute("itemWidth")||"auto",l=this.getAttribute("itemHeight")||"auto",o=this.getAttribute("gap")||"0";this.shadowRoot.innerHTML=`
      <style>
        * {
          box-sizing: border-box;
        }

        img {
          max-width: 100%;
        }

        .sqs-list-container {
          display: flex;
          margin: 0;
          padding: 0;
          list-style-type: none;
          flex-direction: ${t};
          align-items: ${e};
          justify-content: ${s};
          gap: ${o};
        }

        .sqs-list-item {
          display: flex;
          padding: 0;
          margin: 0;
        }
      </style>

      <div class="sqs-list-container">
        <slot></slot>
      </div>
    `;let n=this.shadowRoot.querySelector("slot");n.addEventListener("slotchange",()=>{let t=n.assignedNodes();t.forEach(t=>{if(t.classList&&t.classList.contains("sqs-list-item")){t.style.width=i,t.style.height=l;let e=t.querySelector("img");e&&(e.style.objectFit="cover",e.style.width="100%",e.style.height="100%")}})})}connectedCallback(){this.getPropsValuesAndRenderList()}}customElements.define("sqs-custom-list",t);/*
How to use it:

<sqs-custom-list 
  flexDirection="column" 
  alignItems="center" 
  justifyContent="space-around" 
  itemWidth="100px" 
  itemHeight="50px" 
  gap="10px">
    <div class="sqs-list-item">Item 1</div>
    <div class="sqs-list-item">Item 2</div>
    <div class="sqs-list-item">Item 3</div>
</sqs-custom-list>
*///# sourceMappingURL=index.e2d84658.js.map

//# sourceMappingURL=index.e2d84658.js.map
