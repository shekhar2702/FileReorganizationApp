let path = require("path");
let fs = require("fs");
let tree = function (pathFile, level) {
  let folderName = path.basename(pathFile);
  console.log(folderName);
  for (let i = 1; i <= level; i++) console.log("\t|");

  let folderContents = fs.readdirSync(pathFile);
  for (let i = 0; i < folderContents.length; i++) {
    let statOfFiles = fs.lstatSync(path.join(pathFile, folderContents[i]));
    if (statOfFiles.isFile()) {
      console.log();
      for (let j = 1; j <= level; j++) {
        process.stdout.write("\t");
      }
      process.stdout.write(`|-------${folderContents[i]}`);
    } else {
      let currentDirPath = path.join(pathFile, folderContents[i]);
      tree(currentDirPath);
    }
  }
};
module.exports = {
  tree,
};
// level1
//     |
//     |----
//     |----
//     |
//     level2
//         |----
//         |----
//         level3
//             |----
//             |----
//         |----
