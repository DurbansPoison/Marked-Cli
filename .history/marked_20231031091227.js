#!/usr/bin/env node

const fs = require('fs');
const marked = require('marked');
const terminalLink = require('terminal-link');

const [, , ...args] = process.argv;

if (args.length === 0) {
  console.error("Usage: marked <file.md>");
  process.exit(1);
}

const filePath = args[0];

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading the file: ${err.message}`);
    process.exit(1);
  }

  const html = marked(data);
  console.log(html);
});
