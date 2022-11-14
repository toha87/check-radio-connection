'use strict';

const fetch = require(node-fetch);

/**
 * Function to check if a stream is up
 */
const getData = () => {
    fetch(process.env.STREAM_URL)
      .then(response => {
        response.json();
        console.log(`Stream is up: ${new Date().toLocaleDateString()}`)
        .catch(err => {
            console.error(err);
            console.error(`Stream is down!`);
        });
    })
  }

const interval = setInterval(() => {
    getData();
  }, 1000);