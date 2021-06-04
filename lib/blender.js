const blend = require('@mapbox/blend');

/**
 * Blend two images together
 * @param imageOneBuffer {Buffer}
 * @param imageTwoBuffer {Buffer}
 * @param width
 * @param height
 * @param format
 */
const blendTwoImages = (
    imageOneBuffer,
    imageTwoBuffer,
    width,
    height,
    format='jpeg'
) => new Promise((resolve, reject) => {
    const outputOptions = {
        width: width * 2,
        height,
        format
    };

    blend(
        [
            {
                buffer: imageOneBuffer,
                x: 0,
                y: 0
            },
            {
                buffer: imageTwoBuffer,
                x: width,
                y: 0
            }
        ],
        outputOptions,
        (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        }
    )
});

module.exports = {
    blendTwoImages
}
