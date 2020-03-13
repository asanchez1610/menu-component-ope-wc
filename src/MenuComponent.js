import { html, css, LitElement } from 'lit-element';
import styles from './MenuComponentStyles';
export class MenuComponent extends LitElement {

  static get properties() {
    return {
      options: {
        type: Array
      },
      colorActive: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.colorActive = '#1464A5';
    this.options = [];
    this.updateComplete.then(() => {
      this._computeMenu();
    });
  }


  _computeMenu() {

    const indicator = this.shadowRoot.querySelector('.nav-indicator');
    const items = this.shadowRoot.querySelectorAll('.nav-item');

    function handleIndicator(el) {
      items.forEach(item => {
        item.classList.remove('is-active');
        item.removeAttribute('style');
      });

      indicator.style.width = `${el.offsetWidth}px`;
      indicator.style.left = `${el.offsetLeft}px`;
      indicator.style.backgroundColor = el.getAttribute('active-color');

      el.classList.add('is-active');
      el.style.color = el.getAttribute('active-color');
    }


    items.forEach((item, index) => {
      item.addEventListener('click', (e) => { handleIndicator(e.target) });
      item.classList.contains('is-active') && handleIndicator(item);
    });

  }

  goPage(event, option) {
    console.log(option)
    this.dispatchEvent(new CustomEvent('go-page', { 'detail': option }));
  }

  render() {
    return html`
            <style>${styles}</style>
            <nav class="nav">
            ${this.options.map((option,i) => html`
                <a href="javascript:;" @click = ${(e)=> { this.goPage(e,option); }} class="nav-item ${i === 0 ? 'is-active' : ''}" active-color="${this.colorActive}">${option.name}</a>`
            )}
            <span class="nav-indicator"></span>
            </nav>
            <slot></slot>
        `;
  }
}
