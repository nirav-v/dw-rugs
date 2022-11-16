import { readdir } from "node:fs/promises";

var rugPics = [];

async function getRugs(path, arr) {
  try {
    const files = await readdir(path);
    for (const file of files) {
      // console.log(file);
      arr.push(file);
    }
    console.log(arr);
    return arr;
  } catch (err) {
    console.error(err);
  }
}

getRugs("./images/DW Rugs Photo Gallery", rugPics);

// kind of jank way to do it, but I am basically console logging an array of all the image file names in an images folder and then pasting that array content inside a rugPics js variable (see rugPics.js for images array).
// I then query select the empty rug-grid div in the gallery page. Then, for eah image file in the rugPics array, I create a new image html tag with the image name as its src attribute and append that image to the rug grid div.

console.log(rugPics);
