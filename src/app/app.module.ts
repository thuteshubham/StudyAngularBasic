import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule,Routes} from '@angular/router'
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';



import { BlogService } from './blog.service';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    CreateComponent,
    EditComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({  
      positionClass:'top-left',  
      closeButton: true,  
        
    }  ),
    RouterModule.forRoot([
      {'path':'home',component:HomeComponent},
    {'path':'',redirectTo:'home',pathMatch:'full'},
     {'path':'create',component:CreateComponent},
    {'path':'edit/:blogId',component:EditComponent},
    {'path':'about',component:AboutComponent},
  {'path':'blog/:blogId',component:ViewComponent},
 {'path':'**',component:NotFoundComponent}])
  ],
  providers: [BlogService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
