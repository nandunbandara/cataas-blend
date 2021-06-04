const { writeFile } = require('fs');
const { join } = require('path');

/**
 * Write output image to file
 * @param data
 * @param fileName
 * @returns {Promise}
 */
const writeOutputToFile = (
    data,
    fileName='cat-card.jpg'
) => new Promise((resolve, reject) => {
    const fileOut = join(process.cwd(), `/${fileName}`);

    writeFile(fileOut, data, 'binary', err => {
      if (err) {
          reject(err);
      }
      console.log("The file was saved!");
      resolve(true);
    });
});

module.exports = {
    writeOutputToFile
}
