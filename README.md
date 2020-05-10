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

## Day 4

### Recap and QA
	1. var array = [0,1,2,3]
	array.map((data) => { return data*2}) vs array.filter((data) => { return data*2})
	ans: [0,2,4,6] and [1,2,3] 
	map returns same length of array
	filter only returns value for which the given condition is true
	
	2. ///////////////////////////
	var myvar = []
	for(var i=0;i<3;i++){
			myvar[i]=function(){
	    	console.log("I m in function ",i)
		}
	}
	
	for(j=0;j<3;j++){
		myvar[j]()
	}
	////////////////////////////////


​	

### Use of IndexOf and Filter in SearchPipe
	DEMO 1: ProductSearch.pipe.ts
	1. Import Pipe, pipeTransform
	2. Decoratar @Pipe(name: somename)
	3. Interface class more like model
	4. create product.model.ts
	5. export interface IProduct and define the variables for model
	6. import IProduct into component.ts & ProductSearch pipe
	7. transform(value: Iproduct[], userinput:string):IProduct{
		userInput = userInput ? userInput.toLowerCase(): null
		return userInput ? value.filter((data) => data.name.indexOf(userInput)!= -1 : value;
	}
	8. reference the pipe in the app.module
	9. Use it in the html 
	10. Search count add in the html 

### Rating
	create a child component rating component and use them in product component
	DEMO : Star Rating
	
	1. Star.component in Shared folder
	2. Import Component 
	3. @Component{ selector: ; templateUrl: StyleUrl}
	4. export class starComponent
	5. Create HTML and css
	6. glyphicon/fonticon
	<div class="crop" [style.width.px]="starwidth">
		<div width="">
		<span class="glyphicon glyphicon-star"></span> five times
		</div>
	</div>
	7. width/5 total width we used 5 stars. so we can divide the width/rating so that it can fit that much stars
	8. .crop css overflow:hidden
	9. use <app-star> in parent component
	10. Pass data to <app-star>
		@Input Parent to child. property binding
		@Output child to Parent. Event binding
	11. put @Input() rating:number in the child component
	12. LifeCycle Hook
		Onchanges - Implements OnChanges
		use ngOnChanges() { this.starWidth = width*rating/5 ;}
	13. Task: with five star fill only 4 star
		Have two div with position abolute and different color and one with overflow hidden
	14. Child to Parent - when click on the start use callback
		@Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>
	15. add click method to html (click) = onStar
	16. implement onStar() { this.ratingClicked.Emit("The Rating clicked is ${this.rating}");}
	17. in the parent add (ratingClicked)="dataReceive($event)" in app-star tag
	18. implement dataReceive($event)  in the parent component.ts
	19. Loader.gif
	20. ng-template #nodata where put the loader image 
	21. use this loading when there is no restaurant

# Day 5


## Life cycle hook
	constructor is the first thing called inside the class - Declarations
	ngOnInit is the next lifecycle hook -
	ngOnChanges when there is a input changes
	ngOnDestroy when the component is unloaded

## Service
	We inject our Product Service into the component using constructor dependency injection
	DEMO - PRODUCT SERVICE
	1. Service Import - Injectable, Dependency injection
	2. @Injectable({providedIn:'root'})
	3. export class Product Service
	4. Create a method getrestaurants return the restaurant array
	5. Reference the service in App Module in Provide
	6. Import service in Component
	7. inject the Product service in Constructor
	8. Call the product service getrestaurants in the ngOnInit
	9. Also put console log to understand the order of the lifecycle methods
	DEMO - Mock API server
	1. Install a package json-server global package
	2. json-server --watch db.json --port 8080
	3. Wrap complete json into object and save it as db.json
	4. try accessing in browser
	DEMO - API call
	1. Now that we are done with MockApI, we should use the API call in angular
	2. Import HttpClientModule from angular/common/http in AppModule
	3. In service, import HttpClient from @angular/common /http and Observable fromrxjs
	Read about: RxJs
	4. create a variable holding the aPI link
	5. create getrestaurants(): Observable<IProduct[]>{
			return this.http.get<Iproduct[]>(this.request.Url);
			}
	6. Use it component.
	7. Instead of calling direct getrestaurants() call, we have to use subscribe() along with getrestaurants
			this.ProductService.getrestaurants().subscribe((data)=> this.restaurantList = data)
	8. Validate the same in browser

## Routing
	DEMO - Create Routing
	1. Generate Home component using cli
	2. Generate Order component using cli
	3. In Home Component put some html with Page Title interpolation
	4. In Order Component Html, Place some HTML for now
	5. Create app-routing.module.ts
	6. Import NgModule from '@angular/core'
	7. import {Routes, RouterModule} from '@angular/router'
	4. create path variable
		path: 'restaurants', component: ProductComponent
		path: 'order', component: OrdersComponent
		path: 'home', component: HomeComponent
		path: '', redirectTo: Home, pathMatch: 'full'
		Path: '**' component: NotfoundComponent
	5. @NgModule decorator @NgModule(
			imports: [],
			providers:[],
			exports:[]
	 )
	6. create a export class RoutingModule
	7. In decorator imports put RouterModule.forRoot(routes)
	8. In decorator exports put RouterModule
	9. Now reference app-routing.Module in app.module
	10. 
	11. 
	
	DEMO: Use the Routes in Nav bar
	1. In app.component.html use <router-outlet></router-outlet>
	2. use [routerLink] in Header component html's nav bar
	3. Create ProductDetails Component and link it to the  route
			1. Param vs Query Param
			2. Create a link for restaurant Name with routerLink = ['/restaurant/', restaurant.id]
			3. create a route in app-routing.module.ts
			4. to read query param/param we need to import {ActivatedRoute,Router}
			5. Inject ActivatedRoute in constructor
			6. in ngOnInit() assign id = this.route.snapshot.params('id')
			7. Now in html use interpolation to show the ID
			8. How to pass Query Param - using [queryParam], pass the values as object: key:value
			9. How to receive that in Details PAge - 
				this.route.queryParams.subscribe((data)=>
					this.variabename =data[<parameter>]);
	


