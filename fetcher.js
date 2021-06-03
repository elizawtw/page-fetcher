const fs = require('fs');
const request = require('request');
const args = process.argv.splice(2);

const link = args[0];
const filePath = args[1];

const someFile = function(link, filePath) {

  request(link, function(err, res, body) {
    console.log(body);
    const content = body;
    fs.writeFile(filePath, content, err => {
      if (err) {
        console.error(err)
        return
      } 
        
      
      //file written successfully
      console.log(`Downloaded and saved ${content.length} bytes to ${filePath}`);
    })
  });
  
};

someFile(link, filePath);


