#!/usr/bin/env node
const fs = require('fs');
const marked = require('marked');
const { get } = require('term-size');
const AnsiToHtml = require('ansi-to-html');

const ansiToHtml = new AnsiToHtml();

const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error('Usage: markdown-viewer <filename.md>');
  process.exit(1);
}

const mdFileName = args[0];

fs.readFile(mdFileName, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    process.exit(1);
  }

  const terminalWidth = get().columns;
  const html = marked(data, { breaks: true });
  const formattedHtml = ansiToHtml.toHtml(html, { fg: 'black', bg: 'white' });

  // Split the formatted HTML into lines to fit the terminal width
  const lines = formattedHtml.split('\n');
  for (const line of lines) {
    const trimmedLine = line.substring(0, terminalWidth);
    process.stdout.write(trimmedLine + '\n');
  }
});

