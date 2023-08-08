// const { default: axios, } = require('axios');
import axios from 'axios';

module.exports.uploadFile = async (file: any, maxAttempts = 3) => {
  const formData = new FormData();
  formData.append('data', file);

  let numAttempts = 0;

  while (numAttempts < maxAttempts) {
    try {
      // Get URL of shuttle node with most space
      const viewerResp = await axios.get('https://api.estuary.tech/viewer', {
        headers: {
          Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_IPFS_ID,
        },
      });
      const url = viewerResp.data.settings.uploadEndpoints[0];

      // Upload file
      const resp = await axios.post(url, formData, {
        headers: {
          Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_IPFS_ID,
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
      });

      return resp.data;
    } catch (err: any) {
      numAttempts++;

      console.log(
        `estuaryWrapper.uploadFile: Error status: ${err.response?.status}. Error code: ${err.code}. Error message: ${err.message}`
      );
    }
  }
};
