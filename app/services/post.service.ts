import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
    constructor(private http: Http){
        console.log("Post service initialized");
        
    }

    getPosts(){
       return this.http.get("http://localhost/get.php")
        .map(res => res.json());
    }

    addPost(blogpost){
  var body = blogpost;
  var headers = new Headers();
  
 // headers.append('Content-Type', 'application/x-www-form-urlencoded');
  console.log("In the service");
  return this.http
    .post('http://localhost/add.php', body, { headers:  {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    } })
    .map(response => response.json())
    
    }
}