let path = require("path");
let fs = require("fs");
let tree = function (pathFile) {
  let folderName = path.basename(pathFile);
  console.log(folderName);
  console.log("\t|");
  console.log("\t|");
  let folderContents = fs.readdirSync(pathFile);
  for (let i = 0; i < folderContents.length; i++) {
    console.log("\t|----------------" + folderContents[i]);
  }
};
module.exports = {
  tree,
};
