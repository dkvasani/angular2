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