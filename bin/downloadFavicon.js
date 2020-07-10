const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const fetch = require("node-fetch");
dotenv.config();

const faviconUrl = process.env.FAVICON_URL;

const downloadFile = async (url, path) => {
  const res = await fetch(url);
  const fileStream = fs.createWriteStream(path);
  await new Promise((resolve, reject) => {
    res.body.pipe(fileStream);
    res.body.on("error", err => {
      reject(err);
    });
    fileStream.on("finish", function() {
      resolve();
    });
  });
};

const dir = process.cwd()+'/assets';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

downloadFile(faviconUrl, dir+"/image.png").then();
