import { readdir } from 'node:fs/promises';



var rugPics = [];

async function getRugs(path, arr) {
  try {
    const files = await readdir(path);
    for (const file of files) {
        // console.log(file);
        arr.push(file);
    };
    console.log(arr)
    return arr
  } catch (err) {
    console.error(err);
  }
}

getRugs('./images/DW Rugs Photo Gallery', rugPics);

console.log(rugPics)