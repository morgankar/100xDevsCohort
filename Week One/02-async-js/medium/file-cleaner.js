const fs = require('fs');

const filePath = "./a.txt";

fs.readFile( filePath, "utf8", (err,data) => {
  if(err){
    console.error("Something is wrong");
  } else {
   const cleanedContent = data.replace(/\s+/g, ' ');
    console.log(cleanedContent);
    fs.writeFile(filePath, cleanedContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to the file:', err);
      } else {
        console.log('File has been cleaned successfully.');
      }
    })
  }
})