const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload, URLInput } = wp.blockEditor;
const { PanelBody, IconButton } = wp.components;
const { PlainText } = wp.editor;
// const { useState } = wp.element;

const styles = {
  heading: {
    margin: '1rem 0'
  },
  row: {
    display: 'grid',
    gap: '1rem',
    alignItems: 'center',
    gridTemplateColumns: '30% 1fr auto',
    marginBottom: '0.5rem'
  },
  input: {
    padding: '0.5rem 1rem',
    border: '1px solid gray',
    whiteSpace: 'nowrap',
  },
  button: {
    fontSize: '3rem',
    lineHeight: '0.5',
    cursor: 'pointer',
    border: 'none',
    padding: '0',
    margin: '0 0 0 -0.5rem',
    background: 'none'
  }
};

const Dependency = (props) => {
  const handleChange = (name, url, index) => {
    const dependencies = [...props.attributes.dependencies];
    if (name) dependencies[index].name = name;
    if (url) dependencies[index].url = url;
    props.setAttributes({ dependencies });
  };

  const handleRemoveLocation = (index) => {
      const dependencies = [...props.attributes.dependencies];
      dependencies.splice(index, 1);
      props.setAttributes({ dependencies });
  };

  return (
    <div style={styles.row}>
      <div>
        <PlainText
          className="dependency-name"
          placeholder="Dependency Name"
          value={ props.attributes.dependencies[props.index].name }
          onChange={ (name) => handleChange(name, null, props.index) }
          style={styles.input}
        />
      </div>
      <div>
        <PlainText
          className="dependency-url"
          placeholder="Dependency URL"
          value={ props.attributes.dependencies[props.index].url }
          onChange={ (url) => handleChange(null, url, props.index) }
          style={styles.input}
        />
      </div>
      <div>
        <button style={styles.button} onClick={() => handleRemoveLocation( props.index )}>&times;</button>
      </div>
    </div>
  );
}

registerBlockType('ippm/dependencies-manager', {
  title: 'IPPM: Dependencies',
  description: 'Add JavaScript dependencies to a post.',
  icon: 'format-image',
  category: 'design',

  // custom attributes
  attributes: {
    dependencies: {
      type: 'array',
      default: [{ name: '', url: '' }]
    },
  },

  edit({ className, attributes, setAttributes }) {
    const handleAddDependency = () => {
        const dependencies = [...attributes.dependencies];
        dependencies.push({ name: '', url: '' });
        setAttributes({ dependencies });
    };

    let dependencyFields;

    if (attributes.dependencies.length) {
      dependencyFields = attributes.dependencies.map((dependency, index) => {
          return <Dependency key={index} index={index} className={className} attributes={attributes} setAttributes={setAttributes} />;
      } );
    }


    return ([
      <InspectorControls style={{ marginBottom: '40px' }}>
        <PanelBody>
          <p>IPPM will create a import map of the dependencies you add here.</p>
        </PanelBody>
      </InspectorControls>,
      <section>
        <h3 style={styles.heading}>Dependencies</h3>
        {dependencyFields}
        <button className="button" onClick={handleAddDependency}>Add Dependency</button>
      </section>
    ]);
  },

  save() {
    return null;
  }
});
