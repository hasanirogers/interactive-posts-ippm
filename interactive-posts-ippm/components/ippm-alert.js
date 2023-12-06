import { html, css, LitElement } from 'lit';

export default class IPPMAlert extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: none;
          padding: 1rem;
          margin: 1rem 1rem 1rem 0rem;
          position: fixed;
          top: 2rem;
          z-index: 9;
          background-color: #ffffff;
        }

        :host([opened]) {
          display: block;
        }

        :host([status='success']) {
          border-left: 3px solid var(--ippm-blue);
        }

        :host([status='error']) {
          border-left: 3px solid var(--ippm-red);
        }

        :host([status='warning']) {
          border-left: 3px solid var(--ippm-orange);
        }
      `,
    ];
  }
  static get properties() {
    return {
      opened: {
        type: Boolean,
        reflect: true,
      },
      status: {
        type: String,
        reflect: true,
      },
      message: {
        type: String,
      }
    }
  }

  render() {
    return html`
      ${this.message}
    `;
  }
}

window.customElements.get('ippm-alert') || window.customElements.define('ippm-alert', IPPMAlert);
