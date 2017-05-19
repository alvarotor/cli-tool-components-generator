var deleteDirectory = require('./fs').deleteDirectory;

module.exports = function (name) {
    console.log('Deleting component %s...', name);

    const
        type = 'components';

    deleteDirectory(type, name, (err) => {
        if (err) throw err;
        console.log('Done deleting component %s.', name);
    });
};
