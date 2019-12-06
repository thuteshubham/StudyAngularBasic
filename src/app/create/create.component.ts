import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import{ActivatedRoute,Router} from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public blogTitle:string;
  public blogBodyHtml:string;
  public blogDescription:string;
  public blogCategory:string;
  public possibleCategories=["Comdy","drama","action","singing"]

  constructor(public httpService:HttpService,public _route:ActivatedRoute,public router:Router,private toastr: ToastrService) { }

  ngOnInit() {
  }

  public createBlog():any{

    let blogData={
      title:this.blogTitle,
      description:this.blogDescription,
      blogBody:this.blogBodyHtml,
      category:this.blogCategory
    }
    console.log(blogData);
    this.httpService.createBlog(blogData).subscribe(
      response=>{
        console.log("blog created");
        console.log(response);
        this.toastr.success("Blog posted successfully");
        alert("blog poste succesfully");
        setTimeout(()=>{
          this.router.navigate(['/blog',response.data.blogId]);

        },2000);
      },
      error=>{
        console.log("Some error occured");
        console.log(error);
        alert("Some alert occured");

      }
    )
    
    
  }

}
