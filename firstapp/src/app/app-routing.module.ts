import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { NotFoundComponent } from './Shared/NotFound.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details.component';


const routes: Routes = [
  {path: 'hotels', component:ProductComponent},
  {path:'hotels/:id', component:ProductDetailsComponent},
  {path:'orders',component:OrderComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
