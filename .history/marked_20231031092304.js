#!/usr/bin/env node
import fs from 'fs';

import ansiToHtml from 'ansi-to-html';
import chalk from 'chalk';

// Check for the correct number of arguments
if (process.argv.length !== 3) {
  console.error(chalk.red('Usage: marked <markdown_file>'));
  process.exit(1);
}

// Read the filename from the command line argument
const filename = process.argv[2];

// Check if the file exists
if (!fs.existsSync(filename)) {
  console.error(chalk.red(`Error: File '${filename}' not found.`));
  process.exit(1);
}

// Read the Markdown content from the file
const markdown = fs.readFileSync(filename, 'utf8');

// Convert Markdown to HTML
const html = marked(markdown);

// Convert ANSI escape codes to HTML
const converter = new ansiToHtml();
const htmlWithAnsi = converter.toHtml(html);

// Display the HTML content with formatting in the terminal
console.log(htmlWithAnsi);
