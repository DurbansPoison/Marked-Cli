#!/usr/bin/env node
const fs = require('fs');
const marked = require('marked');
const chalk = require('chalk');

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

// Display the HTML content in the terminal
console.log(html);