const kemetUpload = document.querySelector('kemet-upload');
const ippmPackages = document.querySelector('ippm-packages');

// send the ippmData to the packages
ippmPackages.ippmData = ippmData;

// human readable bytes
const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

const upload = (file, kemetUploadFile) => {
  const xhr = new XMLHttpRequest();
  const formData = new FormData();

  // ippmData is created by wp_localize_script and contains the nonce for security and ajaxURL
  xhr.open('POST', ippmData.ajaxURL, true);
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

  xhr.upload.addEventListener('progress', (event) => {
    if (kemetUploadFile.loaded < kemetUpload.maxSize) {
      kemetUploadFile.loaded = event.loaded;
      kemetUploadFile.status = 'uploading';
    } else {
      xhr.abort();
      kemetUploadFile.status = 'error';
      kemetUploadFile.message = `File exceeded max upload size of ${formatBytes(kemetUpload.maxSize)}`;
    }
  });

  xhr.addEventListener('readystatechange', (event) => {
    let response;

    try {
      response = JSON.parse(xhr.response);
    } catch {
      response = {};
    }

    if (xhr.readyState == 4 && xhr.status == 200) { // if the file uploads successfully
      kemetUploadFile.status = 'complete';
      ippmPackages.getPackages(); // fetch all the packages again to update the list
    }
    else if (xhr.readyState == 4 && xhr.status != 200) { // if the file doesn't upload successfully
      kemetUploadFile.status = 'error';

      if (response.message) {
        kemetUploadFile.message = response.message;
      }

      if (kemetUploadFile.size > kemetUpload.maxSize) {
        kemetUploadFile.message = `File exceeded max upload size of ${formatBytes(kemetUpload.maxSize)}`;
      }
    }
  });

  formData.append('file', file); // send the file in the request
  formData.append('action', 'ippm_package_upload'); // this is needed by admin-ajax.php to process the request and is based on the naming used for add_action
  formData.append('security', ippmData.security); // verify the nonce

  xhr.send(formData);
};

kemetUpload.addEventListener('kemet-upload-change', (event) => {
  const files = Array.from(event.detail.files);

  files.forEach(file => {
    // create a upload-file element and set its properties
    const kemetUploadFile = document.createElement('kemet-upload-file');
    kemetUploadFile.name = file.name;
    kemetUploadFile.size = file.size;
    kemetUploadFile.type = file.type;
    kemetUpload.append(kemetUploadFile);

    // upload the file
    upload(file, kemetUploadFile);
  });
});
