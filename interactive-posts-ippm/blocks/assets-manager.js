import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import KemetFieldClass from 'kemet-ui/dist/components/kemet-field/kemet-field.js';
import KemetInputClass from 'kemet-ui/dist/components/kemet-input/kemet-input.js';
import KemetComboClass from 'kemet-ui/dist/components/kemet-combo/kemet-combo.js';
import KemetSortableClass from 'kemet-ui/dist/components/kemet-sortable/kemet-sortable.js';
import KemetSortableItemClass from 'kemet-ui/dist/components/kemet-sortable/kemet-sortable-item.js';
import KemetCheckboxClass from 'kemet-ui/dist/components/kemet-checkbox/kemet-checkbox.js';

import '../index.scss';

const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;
const { useState, useEffect } = wp.element;

const KemetField = createComponent(React, 'kemet-field', KemetFieldClass);
const KemetInput = createComponent(React, 'kemet-input', KemetInputClass);
const KemetCombo = createComponent(React, 'kemet-combo', KemetComboClass, { onSelection: 'kemet-combo-selection' });
const KemetSortable = createComponent(React, 'kemet-sortable', KemetSortableClass, { onDragEnd: 'kemet-sortable-drag-end' });
const KemetSortableItem = createComponent(React, 'kemet-sortable-item', KemetSortableItemClass);
const KemetCheckbox = createComponent(React, 'kemet-checkbox', KemetCheckboxClass, { onCheckboxChange: 'kemet-checkbox-change'});

const styles = {
  button: {
    cursor: 'pointer',
    color: 'var(--wp-admin-theme-color)',
    fontSize: '1.25rem',
    margin: '0.25rem 0 0 0',
    padding: '0',
    position: 'relative',
    top: '0.1rem',
    left: '0.2rem',
    border: 'none',
    background: 'none',
  },
  sortableItem: {
    display: 'flex',
    gap: '0.5rem',
    flexDirection: 'column',
  },
  sortableLabel: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  inspectorControls: {
    marginBottom: '40px',
  },
  toggle: {
    '--kemet-toggle-height': '1rem',
    '--kemet-toggle-width': '2rem',
    '--kemet-toggle-handle-diameter': '1rem',
  }
};

const AssetsManager = (props) => {
  const [packages, setPackages] = useState([]);

  const getAssets = async (event) => {
    const regExp = /(?:\.([^.]+))?$/;
    const assets = await fetch(`http://interactiveposts.local/wp-json/ippm/v1/package/${event.detail.text}`).then(response => response.json());

    const cssFiles = assets.filter((asset) => regExp.exec(asset)[1] === 'css');
    const jsFiles = assets.filter((asset) => regExp.exec(asset)[1] === 'js');

    const cssAssets = cssFiles.map(file => {
      return {
        filename: file,
        isJSModule: false,
      }
    });

    const jsAssets = jsFiles.map(file => {
      return {
        filename: file,
        isJSModule: false,
      }
    });

    props.setAttributes({ currentPackage: event.detail.text });
    props.setAttributes({ cssAssets: cssAssets });
    props.setAttributes({ jsAssets: jsAssets });
  }

  const sortFiles = (event, type) => {
    const files = [];

    event.detail.all.forEach(item => {
      const isJSModule = item.querySelector('kemet-checkbox')?.checked || false;

      files.push({
        filename: item.innerText,
        isJSModule,
      });
    });

    props.setAttributes({ [type]: files });
  }

  const removePackage = () => {
    props.setAttributes({ cssAssets: [] });
    props.setAttributes({ jsAssets: [] });
    props.setAttributes({ currentPackage: 'none' });
  }

  const checkboxChange = (event, index) => {
    // if you don't stringify, wordpress will not detect a change in setting the attribute
    // reference: https://stackoverflow.com/questions/61778389/why-doesnt-a-mutated-array-of-objects-save-in-gutenberg
    const jsAssets = JSON.parse(JSON.stringify(props.attributes.jsAssets));

    jsAssets[index].isJSModule = event.target.checked;
    props.setAttributes({ jsAssets: jsAssets });
  }

  const Asset = (props) => {
    return (
      <KemetSortableItem style={styles.sortableItem}>
        <span style={styles.sortableLabel}>{props.children}</span>
        {props.type === 'js' && <KemetCheckbox label="Enable module type." checked={props.isJSModule} onCheckboxChange={(event) => checkboxChange(event, props.index)} />}
      </KemetSortableItem>
    );
  }

  const CSSAssets = (props) => {
    if (props.attributes.cssAssets.length > 0) {
      return (
        <div>
          <h4>CSS Assets</h4>
          <KemetSortable onDragEnd={event => sortFiles(event, 'cssAssets')}>
            {props.attributes.cssAssets.map((file, index) => {
              return (
                <Asset key={index} index={index} filename={file.filename} isJSModule={props.attributes.cssAssets[index].isJSModule} type="css">
                  <strong>{file.filename}</strong>
                </Asset>
              );
            })}
          </KemetSortable>
        </div>
      );
    }

    return null;
  }

  const JSAssets = (props) => {
    if (props.attributes.jsAssets.length > 0) {
      return (
        <div>
          <h4>JS Assets</h4>
          <KemetSortable onDragEnd={event => sortFiles(event, 'jsAssets')}>
            {props.attributes.jsAssets.map((file, index) => {
              return (
                <Asset key={index} index={index} filename={file.filename} isJSModule={props.attributes.jsAssets[index].isJSModule} type="js">
                  <strong>{file.filename}</strong>
                </Asset>
              );
            })}
          </KemetSortable>
        </div>
      );
    }

    return null;
  }

  useEffect(async () => {
    const response = await fetch('/wp-json/ippm/v1/packages').then(response => response.json());
    setPackages(response);
  }, []);

  return (
    <section className="ippm-assets-manager">
      <div>
        <KemetField label={"Select a package."}>
          <KemetInput slot="input" name="package" value={props.attributes.currentPackage === 'none' ? null : props.attributes.currentPackage } placeholder="Start typing a package name." />
          <KemetCombo slot="component" options={packages} onSelection={event => getAssets(event)} />
        </KemetField>
        <span>
          Current Package: {props.attributes.currentPackage}
          {
            props.attributes.currentPackage !== 'none'
              ? <button style={styles.button} onClick={() => removePackage()}>&times;</button>
              : null
          }
        </span>
      </div>
      <CSSAssets attributes={props.attributes} setAttributes={props.setAttributes} />
      <JSAssets attributes={props.attributes} setAttributes={props.setAttributes} />
    </section>
  );
}

registerBlockType('ippm/assets-manager', {
  title: 'IPPM: Assets',
  description: 'Add CSS and or JavaScript to a post.',
  icon: 'format-image',
  category: 'design',

  // custom attributes
  attributes: {
    cssAssets: {
      type: 'array',
      default: [],
    },
    jsAssets: {
      type: 'array',
      default: [],
    },
    currentPackage: {
      type: 'string',
      default: 'none'
    }
  },

  edit({ className, attributes, setAttributes }) {
    return ([
      <InspectorControls style={styles.inspectorControls}>
        <PanelBody>
          <AssetsManager attributes={attributes} setAttributes={setAttributes} />
        </PanelBody>
      </InspectorControls>,
      <section>
        <h3>Asset Management</h3>
        <p>Select the block then use the controls to the right to add assets.</p>
      </section>
    ]);
  },

  save() {
    return null;
  }
});
