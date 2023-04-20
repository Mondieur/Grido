const filesystem = require('fs');
const head = `<script defer src="./core/Producer.js"></script>`.trim();

let selector = `<my-element></my-element>`.trim();

let html = `
<!DOCTYPE html>
<html lang="en">
  <head>  
    <meta charset="UTF-8">  
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    ${head}
  </head>
  <body>
    ${selector}
  </body>
</html>`.trim();

let css = `
my-element {
  padding: 2px;
  border-radius: 4px;
  color: red;
  background-color: #333333;
  font-family: monospace;
}
`.trim();

// Create a new file with some content
filesystem.writeFile('../index.html', html, function(err) {
  if (err) 
    throw err && console.log('Error');
  console.log('.html file created and saved!');
});

filesystem.writeFile('../style.css', css, function(err) {
  if (err)
    throw err && console.log('Error');
  console.log('.css file created and saved!');
});