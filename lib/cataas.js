const request = require('request');

const url = 'https://cataas.com/cat/says';

/**
 * Send GET request to cataas API
 * @param text - what the cat should say
 * @param width - width of image
 * @param height - height of image
 * @param color - color of text
 * @param size - size of text
 * @returns {Promise} returns a Promise with the response
 */
const getCat = (text, width, height, color, size) => new Promise((resolve, reject) => {

    const options = {
        url: `${url}/${text}`,
        encoding: 'binary',
        qs: {
            width,
            height,
            color,
            s: size
        }
    }

    request.get(
        options,
        (err, response, body) => {
            if (err) {
                console.log(err);
                reject(err);
            }

            console.log(`Received response with status: ${response.statusCode}`);
            resolve(body);
        }
    );
});


module.exports = {
    getCat
};
