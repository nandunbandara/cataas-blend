const request = require('request');

const url = 'https://catass.com/cat/says';

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
    request.get(
        `${url}/${text}`,
        {
            width,
            height,
            color,
            size
        },
        (err, response, body) => {
            console.log(`Received response with status: ${response.statusCode}`);
            if (err) {
                reject(err);
            }
            resolve(body);
        }
    );
});

module.exports = {
    getCat
};
