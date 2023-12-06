import { html, css, LitElement } from 'lit';
import 'kemet-ui';

export default class IPPMPackage extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex-direction: column;
          font-size: 1rem;
          padding: 1rem 1.25rem;
          background: #ffffff;
          border: 1px dashed var(--ippm-blue);
        }

        h3 {
          font-size: 1rem;
          margin: 0;
          font-weight: normal;
        }

        ul {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-auto-rows: 1rem;
          gap: 1rem;
          height: 100%;
          margin: 0.5rem 0;
          padding: 0.5rem 0;
          list-style: none;
          border-top: 1px dashed gray;
          border-bottom: 1px dashed gray;
        }

        a {
          font-size: 90%;
          text-decoration: none;
          color: var(--ippm-blue);
        }

        kemet-button {
          --kemet-button-padding: 0.75rem;
          font-size: 90%;
          align-self: flex-start;
        }

        kemet-modal > div {
          padding: 1.5rem 2rem;
          background: white;
        }
      `,
    ];
  }

  static get properties() {
    return {
      url: {
        type: String,
      },
      package: {
        type: String,
      },
      assets: {
        type: Array,
      },
      ippmData: {
        type: Object,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this.packages = '';
    this.assets = [];
  }

  firstUpdated() {
    this.domain = window.location.origin;
    this.modal = this.shadowRoot.querySelector('kemet-modal');
  }

  updated(changedProps) {
    if (changedProps.has('package')) {
      this.getAssets();
    }
  }

  render() {
    return html`
      <h3>${this.package}</h3>
      ${this.makeAssetsList()}
      <kemet-button @click=${() => this.confirmDelete()}>
        <kemet-icon icon="trash"></kemet-icon> Delete Package
      </kemet-button>
      <kemet-modal>
        <div>
          <p>Are you sure you want to delete <strong>${this.package}</strong>?</p>
          <kemet-button @click=${() => this.requestDelete()}>Yes, delete it.</kemet-button>
          &nbsp;
          <kemet-button @click=${() => this.closeModal()}>No, keep package.</kemet-button>
        </div>
      </kemet-modal>
    `;
  }

  async getAssets() {
    const assets = await fetch(`${this.domain}/wp-json/ippm/v1/package/${this.package}`).then(response => response.json());
    this.assets = assets;
  }

  makeAssetsList() {
    if (this.assets.length > 0) {
      const assetList = this.assets.map(asset => {
        return html`<li><a href="${this.url}${this.package}/${asset}" target="_blank">${asset}</a></li>`;
      });

      return html`<ul>${assetList}</ul>`;
    }

    return html`<p>There are no assets in this package.</p>`;
  }

  confirmDelete() {
    this.modal.opened = true;
  }

  requestDelete() {
    this.modal.opened = false;

    const url = this.ippmData.ajaxURL;
    const formData = new FormData;

    formData.append('action', 'ippm_package_delete');
    formData.append('security', this.ippmData.security);
    formData.append('package', this.package);

    const options = {
      body: formData,
      method: 'POST',
    };

    fetch(url, options)
      .then(response => response.json())
      .then((response) => {
        const alertElement = document.querySelector('ippm-alert');

        if (response.code === 1) {
          const packagesElement = document.querySelector('ippm-packages');

          packagesElement.getPackages();
          alertElement.opened = true;
          alertElement.status = 'success';
          alertElement.message = 'Package deleted!';

          setTimeout(() => {
            alertElement.opened = false;
          }, 3000);
        } else {
          alertElement.opened = true;
          alertElement.status = response.status;
          alertElement.message = response.message;

          setTimeout(() => {
            alertElement.opened = false;
          }, 3000);
        }
    });
  }

  closeModal() {
    this.modal.opened = false;
  }
}

customElements.get('ippm-package') || customElements.define('ippm-package', IPPMPackage);
