const fs = require('fs');
const request = require('request');
//import { symlink } from 'fs';


const argument = process.argv.slice(2);
console.log(argument);

const imlepentNodeApp = function(url) {
  request(`http://${url}`, (error, response, body) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    // // return body
    fs.writeFile('/vagrant/w2/d3/page-fetcher/.file', body, err => {
      if (err) {
        console.error(err)
        return
      }
      console.log("file written successfully");
    })
  });

}

// fs.symlink(url, /vagrant/w2/d3/page-fetcher, imlepentNodeApp(argument));
imlepentNodeApp(argument);