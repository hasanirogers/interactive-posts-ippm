import { html, css, LitElement } from 'lit';
import './ippm-package.js';

export default class IPPMPackages extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 1rem;
        }
      `,
    ];
  }

  static get properties() {
    return {
      url: {
        type: String
      },
      packages: {
        type: Array,
      },
      ippmData: {
        type: Object,
      },
    };
  }

  constructor() {
    super();
    this.packages = [];
  }

  firstUpdated() {
    this.domain = window.location.origin;
    this.getPackages();
  }

  render() {
    return html`${this.makePackageList()}`;
  }

  async getPackages() {
    const packages = await fetch(`${this.domain}/wp-json/ippm/v1/packages`).then(response => response.json());
    this.packages = packages;
  }

  makePackageList() {
    if (this.packages.length > 0) {
      const packageList = this.packages.map(thePackage => {
        return html`<ippm-package url=${encodeURIComponent(this.url)} package=${thePackage} .ippmData=${this.ippmData}></ippm-package>`;
      });

      return html`${packageList}`;
    }

    return html`<p><strong>There are currently no packages available.</strong></p>`;
  }
}

customElements.get('ippm-packages') || customElements.define('ippm-packages', IPPMPackages);
