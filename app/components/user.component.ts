import { Component , OnInit} from '@angular/core';

import {PostsService} from '../services/post.service';

@Component({
    moduleId: module.id,  
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService]
})
export class UserComponent  { 
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobby: boolean;
  posts: Post[];
  blogpost: Blogpost[];
  result: string[];

  constructor(private postService: PostsService){
      console.log("Hello from user Component");
    this.name = 'dharmesh';
    this.email = 'dharmesh.vasani@multidots.in';
    this.address = {
        street: "Ganesh Meridian",
        city: "Ahmedabad",
        state: "Gujarat",
    };
    this.hobbies = [
        'Playing Chess', 'Watching News', 'Internet surfing'
    ];
    this.showHobby = false;

    this.blogpost = {
        id:0,
        title: "",
        body: ""
    }; 
    
  }
   ngOnInit() { this.getPosts(); }

  getPosts(){
      console.log("call");
      this.postService.getPosts()
            .subscribe(
            //    data => this.posts = JSON.stringify(data),
            //      error => console.log("Error HTTP GET Service"), // in case of failure show this message
            //        () => console.log("Job Done Get !")//

            posts => {
                this.posts = posts
            }
            );
  }
  addPost() {
      console.log("Add call");
      console.log(this.blogpost);
     this.postService.addPost(this.blogpost).subscribe(
              data => this.result = JSON.stringify(data),
                 error => console.log("Error HTTP GET Service"), // in case of failure show this message
                   () => console.log(this.result)//,
                   
            );
     console.log("result");
     this.posts.push(this.blogpost); 
     console.log("dk" + this.result);
  }

 

//   toggleHooby(){
//       if(this.showHobby == true){
//           this.showHobby = false;
//       } else {
//           this.showHobby = true;
//       }
      
//   }
//   addHobby(hobby){
//       this.hobbies.push(hobby);
//   }
//   removeHobby(index){
//       this.hobbies.splice(index);
//   } 
}

interface address {
    street : string;
    city : string;
    state : string;
}

interface Post {
    id: Number;
    title: string;
    body:string;
}

interface Blogpost{
    id: Number;
    title: string;
    body:string;
}