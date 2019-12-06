import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public currentBlog;
  public allBlogs;
  public baseUrl='https://blogapp.edwisor.com/api/v1/blogs';
  public authToken='?authToken=ZDk1OTYyZTZiMWRiOTIyMjE0YmFkODQ5NGRkZWRmYzA3NjE4MzY3ZDE5ZDE3ZWZmZTVlYTUwZmM5ZTA1OTFiYjJkYWM1ZTlmOTUwNmNkM2MyZGIwMzJkZjYxNzQ2ZGJmNTY5MDYzYWE0Y2FkZWQyYTcwMTJkNjUzMDVmZGVmOTdhMA==';



  constructor(private _http:HttpClient) { 

    console.log("Http service called");

  }

   //method to rturn all the blogs
   public  getAllBlogs():any{
    let myResponse=this._http.get(this.baseUrl+'/all'+this.authToken);
    console.log(myResponse);
    return myResponse;
  }


  //method to wrutten perticular blog
  public getSingleBlogInfo(currentBlogId):any{
    let myResponse=this._http.get(this.baseUrl+'/view/'+currentBlogId+this.authToken);
    return myResponse;
     
}

private handleError(err:HttpErrorResponse){
  console.log("Handle error Http calls");
  console.log(err.message);
  return Observable.throw(err.message);
}


//https://blogapp.edwisor.com/api/v1/blogs/create


public createBlog(blogData):any{
  let myResponse=this._http.post(this.baseUrl+'/create'+this.authToken,blogData);
  return myResponse;
      
}


//https://blogapp.edwisor.com/api/v1/blogs/:blogId/delete

public deleteBlog(blogId):any{
  let data={};
  let myResponse=this._http.post(this.baseUrl+'/'+blogId+'/delete'+this.authToken,data);
  return myResponse;
}

//https://blogapp.edwisor.com/api/v1/blogs/:blogId/edit


public editBlog(blogId,blogData):any{
  let myResponse=this._http.put(this.baseUrl+'/'+blogId+'/edit'+this.authToken,blogData);
  return myResponse
}

}
