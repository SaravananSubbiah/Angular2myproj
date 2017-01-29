import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl:'user.component.html',
    providers: [PostsService]
})
export class UserComponent  { 
    name: string;
    email: string;
    Address: Address;
    hobbies: string[];
    showhobbies : boolean;
    posts:Post[];
  
    constructor(private postsService: PostsService){
        this.name = 'Angular'; 
        this.email = "abini.sara2001@gmail.com";
        this.Address = { 
            street: 'Main Street',
            city: 'Boston',
            state: 'MA'
            }
        this.hobbies = ['play','movie','swimming','cycling']
        this.showhobbies = false;
        this.postsService.getPosts().subscribe(posts =>{
            this.posts = posts;
            //console.log(posts);
        });       
        }
        togglehobbies(){
            if(this.showhobbies == true){
                this.showhobbies = false;
            }
            else{
                this.showhobbies = true;
            }

        }
        addHobby(hobby: string){
           this.hobbies.push(hobby)     
        }
        deleteHobby(i: number){
            this.hobbies.splice(i,1)
        }        
    }
  

  interface Address {
      street: string;
      city: string;
      state: string;
  }

  interface Post{
      id: number;
      title: string;
      body: string;
  }

  
