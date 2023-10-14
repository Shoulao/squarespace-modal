class SqsCustomList extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  getPropsValuesAndRenderList() {
    const flexDirection = this.getAttribute("flexDirection") || "row";
    const alignItems = this.getAttribute("alignItems") || "stretch";
    const justifyContent = this.getAttribute("justifyContent") || "flex-start";
    const itemWidth = this.getAttribute("itemWidth") || "auto";
    const itemHeight = this.getAttribute("itemHeight") || "auto";
    const gap = this.getAttribute("gap") || "0";

    this.shadowRoot.innerHTML = `
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
          flex-direction: ${flexDirection};
          align-items: ${alignItems};
          justify-content: ${justifyContent};
          gap: ${gap};
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
    `;

    const slot = this.shadowRoot.querySelector("slot");

    slot.addEventListener("slotchange", () => {
      const assignedNodes = slot.assignedNodes();
      assignedNodes.forEach((node) => {
        if (node.classList && node.classList.contains("sqs-list-item")) {
          node.style.width = itemWidth;
          node.style.height = itemHeight;

          const imgElement = node.querySelector("img");

          if (imgElement) {
            imgElement.style.objectFit = "cover";
            imgElement.style.width = "100%";
            imgElement.style.height = "100%";
          }
        }
      });
    });
  }

  connectedCallback() {
    this.getPropsValuesAndRenderList();
  }
}

customElements.define("sqs-custom-list", SqsCustomList);

/*
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
*/
