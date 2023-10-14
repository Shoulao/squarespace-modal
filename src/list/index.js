const styles = `
<style>
* {
  box-sizing: border-box;
}

.sqs-custom-list {
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.sqs-custom-list li {
  display: flex;
  padding: 0;
  margin: 0;
}
</style>`;

const component = `
<div class="sqs-custom-list">
  <slot></slot>
</div>`;

class SqsCustomModal extends HTMLElement {
  LIST_CLASS_SELECTOR = ".sqs-custom-list";
  LIST_ITEM_SELECTOR = ".sqs-custom-list li";

  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
    ${styles}
    ${component}
    `;
  }

  getPropsValues() {
    const alignItems = this.getAttribute("alignItems");
    const justifyContent = this.getAttribute("justifyContent");
    const flexDirection = this.getAttribute("flexDirection");
    const itemWidth = this.getAttribute("itemWidth");
    const itemHeight = this.getAttribute("itemHeight");
    const gap = this.getAttribute("gap");
    const listContent = this.shadowRoot.querySelector(this.LIST_CLASS_SELECTOR);
    const listItems = this.shadowRoot.querySelectorAll(this.LIST_ITEM_SELECTOR);

    if (alignItems) {
      listContent.style.alignItems = alignItems;
      modal.style.alignItems = alignItems;
    }

    if (justifyContent) {
      listContent.style.justifyContent = justifyContent;
      modal.style.alignItems = alignItems;
    }

    if (flexDirection) {
      listContent.style.flexDirection = flexDirection;
      modal.style.flexDirection = flexDirection;
    }

    if (gap) {
      listContent.style.gap = gap;
      modal.style.flexDirection = flexDirection;
    }

    if (itemWidth) {
      listItems.forEach((item) => {
        item.style.itemWidth = itemWidth;
      });
    }

    if (itemHeight) {
      listItems.forEach((item) => {
        item.style.itemHeight = itemHeight;
      });
    }
  }

  connectedCallback() {
    this.getPropsValues();
  }
}

customElements.define("sqs-custom-list", SqsCustomList);

/*
How to use it:

<sqs-custom-list 
  alignItems="center" 
  justifyContent="center" 
  flexDirection="column" 
  itemWidth="50" 
  itemHeight="50" 
  gap="10"
>
  <p>Some text in the Modal..</p>
  <p>Some text in the Modal..</p>
  <p>Some text in the Modal..</p>
</sqs-custom-list>
*/
