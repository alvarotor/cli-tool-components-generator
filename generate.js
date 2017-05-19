#! /usr/bin/env node

var program = require('commander');
var pJson = require('./package.json');
var createComponent = require('./utils/create-component');
var deleteComponent = require('./utils/delete-component');

const args = process.argv.slice(2)

program.version(pJson.version)

program.on('--help', function () {
    console.log('  Examples:');
    console.log('');
    console.log('    generate c <name-component>');
    console.log('    generate d <name-component>');
    console.log('');
});

program
    .command('c <name>')
    .description('generate component named <name>')
    .action(function (name) {
        createComponent(name);
    });

program
    .command('d <name>')
    .description('delete component named <name>')
    .action(function (name) {
        deleteComponent(name);
    });

program.parse(process.argv);

if (!program.version)
    console.log(program.version())

if (!args.length || (args[0] !== 'c' && args[0] !== 'd'))
    program.outputHelp();

// console.log(args[0])
