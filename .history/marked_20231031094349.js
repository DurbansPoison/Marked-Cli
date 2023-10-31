#!/usr/bin/env node
import fs from 'fs';
import * as marked from 'marked';
import TerminalRenderer from 'marked-terminal';
import chalk from 'chalk';

// Set the renderer to marked-terminal
marked.setOptions({
  renderer: new TerminalRenderer()
});

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

// Convert Markdown to terminal-friendly output
const terminalOutput = marked.marked(markdown);

// Display the output in the terminal
console.log(terminalOutput);