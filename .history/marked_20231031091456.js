#!/usr/bin/env node

import fs from 'fs/promises';
import marked from 'marked';

const [, , ...args] = process.argv;

if (args.length === 0) {
  console.error("Usage: marked <file.md>");
  process.exit(1);
}

const filePath = args[0];

fs.readFile(filePath, 'utf8')
  .then((data) => {
    const html = marked(data);
    console.log(html);
  })
  .catch((err) => {
    console.error(`Error reading the file: ${err.message}`);
    process.exit(1);
  });
