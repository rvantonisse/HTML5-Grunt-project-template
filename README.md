# Grunt html project

	By Roel (RV) Antonisse
	roel.antonisse@gmail.com
	Utrecht, the Netherlands
	Last updated: 20/01/16

This is my grunt project for static website creation. It uses the `source` dir to look 
for html, css and js files and compiles them either to the `development` dir for development
or to the `distribution` dir to distribute to a client.

## Table of contents

* Getting started
* Project structure
	* Dependencies
		* Grunt tasks
	* Folder structure
* To do's

## Getting started

If you like to read what this is all about first, start reading about the project structure.
If you have not used Grunt before read about this first.

## Project structure

Project stuff here

### Dependencies

[ ] List all dependencies here

#### Grunt tasks

Pick a Grunt task for detailed information.
[ ] list all grunt tasks.

### Folder Structure

[ ] Do this ffs...

	...
	folder
		another folder
		etc
		etc
		supercool
	...

## Todos

* [ ] Dependencies
	* [ ] Rewrite css tasks and add scss?
	* [ ] add linters / code testing
		* [ ] For html
		* [ ] For css
		* [ ] For js
* [ ] Grunt tasks
	* [ ] "Develop";
	* [ ] "Distribute";
		* [x] "compile-html"; Compile html like development
		* [ ] clean html output; remove comments and whitelines etc
		* [ ] clean css output; minify, remove comments etc
		* [ ] clean js output; minify / uglify, remove comments etc
		* [ ] minify images and media stuff?
	* [x] create-view task; Create a view to website
		* [x] Add templates for dynamic file creation
	* [x] create-subview task; Create a subview, pick from existing view
		* [x] Add templates for dynamic file creation
	* [x] create removal tasks for views and subviews
	* [x] compile-html task: add data to render main menu items dynamically
	* [x] create-component task; Create a new component with files
	* [x] remove-component task; Remove a component
* [ ] Content Modelling
	* [ ] new views
		* [ ] Add view meta data? (keywords, description, author?)
		* [ ] Add menu ordering
		* [ ] Add 404 page not found
		* [ ] Add nice index html for empty folders (to hide other files / prevent users getting in the apache file system)
	* [ ] new subviews
		* [ ] add meta data? (keywords, description, author, date?)
		* [ ] add summary? (heading, image, short text?)
* [ ] Refactor / optimalize / nicify the code