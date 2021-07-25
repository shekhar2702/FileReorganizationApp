let fs = require("fs");
let path = require("path");
let types = {
  media: ["mp4", "mkv", "jpg", "jpeg"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
};

// path->C:\Users\somya.DESKTOP-5MC629I\Downloads\randomFolder

let organize = function (pathFile) {
  let mediaFolder = path.join(pathFile, "media");
  let archiveFolder = path.join(pathFile, "archives");
  let documenFolder = path.join(pathFile, "documnets");
  let appFolder = path.join(pathFile, "app");
  let otherFolder = path.join(pathFile, "others");
  if (fs.existsSync(mediaFolder)) {
    console.log("Directory already exists");
  } else {
    let content = fs.readdirSync(pathFile);

    //Actual Folders Created
    fs.mkdirSync(mediaFolder);
    // console.log(mediaFolder);
    fs.mkdirSync(archiveFolder);
    fs.mkdirSync(documenFolder);
    fs.mkdirSync(appFolder);
    fs.mkdirSync(otherFolder);
    //Copy content
    for (let i = 0; i < content.length; i++) {
      let fileName = content[i];
      console.log(`Copying.......${fileName}`);
      let extension = fileName.split(".").slice(-1)[0];      
      if (types.media.includes(extension)) {
        let src = path.join(pathFile, fileName);        
        let dest = path.join(mediaFolder, fileName);        
        fs.copyFileSync(src, dest);
      } else if (types.archives.includes(extension)) {
        let src = path.join(pathFile, fileName);        
        let dest = path.join(archiveFolder, fileName);        
        fs.copyFileSync(src, dest);
      } else if (types.documents.includes(extension)) {
        let src = path.join(pathFile, fileName);        
        let dest = path.join(documenFolder, fileName);        
        fs.copyFileSync(src, dest);
      } else if (types.app.includes(extension)) {
        let src = path.join(pathFile, fileName);        
        let dest = path.join(appFolder, fileName);        
        fs.copyFileSync(src, dest);
      } else {
        let src = path.join(pathFile, fileName);        
        let dest = path.join(otherFolder, fileName);        
        fs.copyFileSync(src, dest);
      }
    }
  }
}


module.exports = {
  organize,
};
