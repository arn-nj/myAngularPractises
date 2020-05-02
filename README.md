# myAngularPractises

## Introduction to Web
	1. What is FrontEnd
	2. Backend
	3. Database
	4. Hosting Server

## What is Angular?
	Angular is a frontend framework to create SPAs with component bases structure using TypeScript

## What is a Layout?
	Header, Footer And Content- (Components gets loaded in the Content)

## Why Components?
	To Achieve reusability

## What is Typescript?
	Typescript is a superset of javascript that is like a syntactical sugar which enables static type checking

## Tools:
	Node
	VSCode
	NPM - Node Package Manager to install npm packages


## Building blocks of Angular
Blocks | Description
------ | -----------
Module | Module is the parent of the application
Component | HTML, CSS with TS logic
Pipe | Runtime data changes
Service | Connect with API/ external agent (Dependency injection)
Routing | Manage multiple page

## File structure

Files | Description
----- | -----------
tslint.json | linting, make structure of code
tsconfig.spec.json | help to locate test files
tsconfig.json | ts compiler options - build output, targetting js version
tsconfig.app.json | Help to locate main files
ReadME.md | description of application
Package.json | dependency, commands and version info
package.lock.json | child dependencies
angular.json | first file to run contains the path reference for all the files (src, styles, template  &configs) it runs src/main.ts
.gitignore | ignore files for git
.editorconfig | standard developer follows in editor
src/style.css | main style file
src/polyfills.ts | support old browser
src/index.html | mail html template page
src/.favicon | browser icon
src/assets | images, video, documents other static files
src/environment | set PRO/ NON-PRO
src/main.ts | load main module it loads app.module.ts

 ### App module
			app.module.ts  load main component
				import, decorators, export
				import
					NgModule from @angular/core for Modules
					Component from @angular/core for Components
					Pipe, PipeTransform for directives & pipes
					Injectible for Services
					NgModule for Routing
					BrowserModule from @angular/platform-browser for display content in the browser

				Decorators
					imports | all modules
					declarations | all components & pipes
					providers | all services
					provider | only main component usually AppComponent
			app.component.ts
				import, decorator, export
				import
					Component
				decorator
					selector
					template/templateUrl - one html
					styles/styleUrl - inline css multiple css

## Flow
	Angular.json -> main.ts -> app.module.ts -> app.component.ts

## Create Component
	Header
	Footer
	Product component - ng g c product
