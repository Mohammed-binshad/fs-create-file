const fs = require('fs');

fs.writeFile("message-one.txt","hello", (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 