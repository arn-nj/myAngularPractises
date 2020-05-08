# myAngularPractises

## Introduction to Web
	1. What is FrontEnd
	2. Backend
	3. Database
	4. Hosting Server
/Users/Zara/Desktop/AngularReact/Sic Mundus/myAngularPractises/README.md
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

## Day 3


Subscribe to Aakash Channel Developer funnel

## bindings
#### One Way
	Data Binding {{}} or interpolation
	Property binding or attribute binding []
	Event binding()

	Demo 1: In Product Component
		a. Define Variable in the class "title"
		b. use {{}}
	Demo 2: Structural Directives (*ngIf, *ngFor, *ngClass)
		a. Define array
		b. Copy the restaurant list from dbjson
		c. Iterate . first find what you want to repeat in html
		d. *ngFor="let item of list"
		e. Create a show/hide button for toggling thumbnail image
		f. create a property binding for img [src]
		g. use negation operator with *ngIf="condition
		h. define condition variable in .ts class
		i. event binding - (click) = "toggleImage()" note: dont miss the braces
		j. write a function toggleImage
					

#### Two way [()]
	Data flows in both directions
	Demo 3: 1. Create a input box for filter by:
		2. USER SEARCH Label with a text
		3. import forms module
		4. two way binding in input [(ngModel)]="searchText"
		6. Define searchText = "Enter your text"
		7. in the USER SEARCH use interpolation to show in html
	DEMO 4: Change show Image to Hide Image
		1. Use Ternary operator a>10?true:false;
		2. {{condition? "Hide Image": "Show Image"}} 


## Pipes
	Pipes help in runtime data manipulation.use '|' sign for using pipes
	DEMO 4:
		uppercase
		lowercase
		currency
		date
		percentage

### Conditional CSS
	Rating less than 4 red color 
	DEMO 5:  [ngStyle]="{background-color':  rating <4? 'red' : 'green'}"

### Custom Pipes

	DEMO 6: Custom Pipes
	1. create myupper.pipe.ts
	2. For Pipes we have to import {Pipes, PipeTransform} from core
	3. Decorator @pipe - name 'myupper'
	4. class myUpperPipe implements PipeTransform
	5. transform(value:string):string - function taking string returning string
	6. write logic into the method. return a value
	7. Reference in App.Module
	8. Use the pipe in html

	DEMO 7: make two parameters pipe
	1. Left Hands side 1st parameter
	2. Right Hand side 2nd parameter
	3. case - lower, upper, camel case, Pascal case

	Read: MAP, FILTER, INDEXOF
	
	DEMO 8: mydiscount.pipe.ts
	1. Import pipe, pipetransform
	2. @Pipe({name: 'discount'})
	3. class myDiscount implements PipeTransform
	4. transform( value: number, discount:number): number{
		value = value - (value*discount/100)
		return value
	}
	5. If you use string for mydiscount.pipe, it becomes NaN or gives error
	6. Use it in html before formatting for string currency

	DEMO 9: Random discount
	I want to generate discount every page load
	1. mydiscount variable in the component Math.Floor(math.random(max-min)+min
	2. Now use the mydiscount in the min_price discount pipe
	3. Message =  discount > 25? 'Super Lucky' : 'Lucky';
	4. getColor():{
	return this.message =='Lucky'? 'red':'green'
	}
	5. [ngStyle]={color:getcolor()}
	6. define Class .lucky in the decorator
	7. Use [NgClass] = {'bg-color': expression} use expression to specify the class
	8. Other way to use is [ngClass] = {'color':'getColor()'}

	Recap:
	Binding
	Directives
	Pipes & Custom Pipes
	 







