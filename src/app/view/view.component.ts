import { Component, OnInit, OnDestroy } from '@angular/core';

import{ActivatedRoute,Router} from '@angular/router'
import { BlogService } from '../blog.service';
import {HttpService} from '../http.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  public currentBlog;
  
  constructor(private _route:ActivatedRoute,private _router:Router,public blogService:BlogService,public httpService:HttpService,private toastr: ToastrService) { 
    console.log("Blog view component constructor");
  }

  ngOnInit() {
    console.log("ngOniti in blog view component");
    let myBlogId=this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.currentBlog=this.httpService.getSingleBlogInfo(myBlogId).subscribe(
      response=>{
        console.log(response);
        this.currentBlog=response.data;

      },
      error=>{
        console.log(error);

      }

    )
  }

  
  }

 

