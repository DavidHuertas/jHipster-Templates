'use strict';

/*

 Instead of administrating a giant file for configurating tasks,
 each task has been separated in a file contained in directory '/gulp/tasks'.
 Each file inside this path will be loaded automatically.
 This modular separation of tasks will allow share and reuse the files in different projects.
 
 To add a new task, just add a new task file in directory '/gulp/tasks'.

 'gulp/tasks/default.js' specifies the default tasks when the command 'gulp is run in terminal/command line window.

 */

var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });
