import { Component, OnInit, OnDestroy } from "@angular/core";
import { BlogService } from '../blog.service';
import {HttpService} from '../http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit,OnDestroy {
  public allBlogs;
  
  constructor( public httpService:HttpService,private toastr: ToastrService) {}

  ngOnInit() {
    console.log("ngOnIniti of home component");
    this.allBlogs=this.httpService.getAllBlogs().subscribe(
      response=>{
        console.log(response);
        this.allBlogs=response.data;

      },
      error=>{
        console.log(error);
        

      }
    )
    console.log(this.allBlogs);
  }

  ngOnDestroy(){
    console.log("ngONDestroy of home component");

  }
}
