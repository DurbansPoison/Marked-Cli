#!/usr/bin/env node

const fs = require('fs');
const marked = require('marked');
const program = require('commander');
const ansiHTML = require('ansi-html');


const marked = require('marked');
const marked = require(require.resolve('marked'));


program
  .version('1.0.0')
  .description('A simple CLI tool for rendering Markdown in the terminal.')
  .arguments('<file>')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading the file:', err.message);
        process.exit(1);
      }

      const markdown = data;
      const html = marked(markdown);
      const ansiHtml = ansiHTML(html);
      console.log(ansiHtml);
    });
  });

program.parse(process.argv);

if (!program.args.length) {
  program.help();
}
