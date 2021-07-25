let help = require("./command/help");
let tree = require("./command/tree");
let organize = require("./command/organize");
let fs = require("fs");
let inputArr = process.argv;
let cmdExecute = inputArr[2];
let pathFile = inputArr[3];
switch (cmdExecute) {
  case "help":
    help.help();
    break;
  case "organize":
    organize.organize(pathFile);
    break;
  case "tree":
    tree.tree(pathFile, 1);
    break;
  default:
    console.log("Wrong Input");
}
