import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public currentBlog;
  public allBlogs = [
    {
      blogId: "1",
      lastModified: "2019-11-20T12:20:47.858Z",
      created: "2019-11-20T12:20:47.858Z",
      tags: [],
      author: "admin",
      categories: "comedy",
      isPublish: "true",
      views: "0",
      bodyHtml: "this is blog body",
      description: "this is blog 1 description",
      title: "this is blog 1"
    },
    {
      blogId: "2",
      lastModified: "2019-11-20T12:20:47.858Z",
      created: "2019-11-20T12:20:47.858Z",
      tags: [],
      author: "admin",
      categories: "circus",
      isPublish: "true",
      views: "0",
      bodyHtml: "this is blog body 2",
      description: "this is blog 2 description",
      title: "this is blog 1"
    },
    {
      blogId: "3",
      lastModified: "2019-11-20T12:20:47.858Z",
      created: "2019-11-20T12:20:47.858Z",
      tags: [],
      author: "admin",
      categories: "comedy",
      isPublish: "false",
      views: "2",
      bodyHtml: "this is blog body 3",
      description: "this is blog 1 description",
      title: "this is blog 1"
    },
    {
      blogId: "4",
      lastModified: "2019-11-20T12:20:47.858Z",
      created: "2019-11-20T12:20:47.858Z",
      tags: [],
      author: "admin",
      categories: "comedy",
      isPublish: "true",
      views: "0",
      bodyHtml: "this is blog body 4",
      description: "this is blog 1 description",
      title: "this is blog 1"
    },
    {
      blogId: "5",
      lastModified: "2019-11-20T12:20:47.858Z",
      created: "2019-11-20T12:20:47.858Z",
      tags: [],
      author: "admin",
      categories: "comedy",
      isPublish: "true",
      views: "0",
      bodyHtml: "this is blog body 5",
      description: "this is blog 5 description",
      title: "this is blog 5"
    }
  ];


  constructor() {

    console.log("service constructor called");

   }

   //method to rturn all the blogs
   public  getAllBlogs(){
     return  this.allBlogs;
   }

   //method to wrutten perticular blog
   public getSingleBlogInfo(currentBlogId){
    for( let blog of this.allBlogs ){
      if(blog.blogId===currentBlogId){
        this.currentBlog=blog;
        return this.currentBlog;
      }
    }

  
}



}