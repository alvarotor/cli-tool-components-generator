var createDirectory = require('./fs').createDirectory;
var createFiles = require('./fs').createFiles;

module.exports = function (name) {
    console.log('Creating component %s...', name);

    const
        type = 'components',
        extensions = [];

    extensions.push('.test.js');
    extensions.push('.jsx');
    extensions.push('.js');

    createDirectory(type);
    createDirectory(type + "/" + name);
    createFiles(extensions, name, type, 'internal data file');

    console.log('Done creating component %s.', name);
};
