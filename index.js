const cataas = require('./lib/cataas');
const blender = require('./lib/blender');
const file = require('./lib/file');

const argv = require('minimist')(process.argv.slice(2));

(async () => {
    const {
        greeting = 'Hello',
        who = 'You',
        width = 400,
        height = 500,
        color = 'Pink',
        size = 100,
    } = argv;

    try {
        const catOneResponse = await cataas.getCat(greeting, width, height, color, size);
        const catTwoResponse = await cataas.getCat(who, width, height, color, size);

        const blendedResult = await blender.blendTwoImages(
            Buffer.from(catOneResponse, 'binary'),
            Buffer.from(catTwoResponse, 'binary'),
            width,
            height
        );

        await file.writeOutputToFile(blendedResult);

    } catch (err) {
        console.log(err);
    }
})();
