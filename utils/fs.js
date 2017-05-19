var fs = require('fs');
var base = process.cwd() + '/src/';
var rimraf = require('rimraf');

module.exports = {
    createDirectory: function (path) {
        if (!fs.existsSync(base))
            fs.mkdirSync(base);
        if (!fs.existsSync(base + path))
            fs.mkdirSync(base + path);
    },

    deleteDirectory: function (type, path, cb) {
        path = base + type + "/" + path;
        if (fs.existsSync(path))
            rimraf(path, cb);
    },

    createFiles: function (extensions, name, component, template) {
        extensions.forEach((ext) => {
            const path = base + component + '/' + name + '/' + name + '.' + component + ext;
            if (fs.existsSync(path))
                fs.unlinkSync(path);
            fs.openSync(path, 'w', (err) => {
                if (err) throw err;
            });
            fs.writeFileSync(path, template, (err) => {
                if (err) throw err;
            });
        });
    }
};
