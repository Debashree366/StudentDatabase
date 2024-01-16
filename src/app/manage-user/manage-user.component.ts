import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
  @ViewChild('userForm') userForm:NgForm;
  url='https://manageuser-afc05-default-rtdb.firebaseio.com/user.json' // change url of your api

  users =[
    {name: 'Mahima', technology: 'JavaScript'},
    {name: 'Teena', technology: 'HTML'},
  ];
  editMode:boolean = false;
  editUserId;
 
  constructor(private http:HttpClient) { }
  
  ngOnInit() {
    this.fetchUser();
  }
 
  onAddUser(userData: User){
    if(this.userForm.valid){
      if(this.editMode){
        this.http.put('https://manageuser-afc05-default-rtdb.firebaseio.com/user/'+this.editUserId+'.json', userData).subscribe( // change url of your api
          (res)=>{
            // console.log(res);
            this.fetchUser();
          }
        )
      }else{
        console.log(userData);
        this.users.push(userData);
        this.http.post<User>(this.url, userData).subscribe(
          (res)=>{
            console.log(res)
          }
        )
      }
    }else{
      // console.log(this.userForm)
      let key = Object.keys(this.userForm.controls);
      // console.log(key);

      key.filter(data =>{
        // console.log(data);
        let control = this.userForm.controls[data];
        // console.log(control);
        if(control.errors !=null){
          control.markAsTouched();
        }
      })
    }
  }
  // onAddUser(userData: User){
  //   console.log(userData);
  //   this.users.push(userData);
  //   return this.http.post<User>(this.url, userData).subscribe(
  //     (res)=>{
  //       console.log(res);
  //     }
  //   )
  // }

  // fetchUser(){
  //   this.http.get<User>(this.url)
  //   .pipe(map(resData=>{
  //     // console.log(resData);
  //     const userArray = [];
  //     for(const key in resData){
  //       // console.log(key);
  //       // console.log({...resData[key]});
  //       if(resData.hasOwnProperty(key)){
  //         userArray.push({userId:key, ...resData[key]})
  //       }
  //     }
  //     return userArray
  //   }))
  //   .subscribe(users=>{
  //     // console.log(users);
  //     this.users = users;
  //   })
  // }

  fetchUser(){
    this.http.get<User>(this.url)
    .pipe(map(resData=>{
       console.log(resData);
       const userArray = [];
       for(const key in resData){
          // console.log(key);
          // console.log(resData[key]);
        console.log(resData.hasOwnProperty(key))  // true
        if(resData.hasOwnProperty(key)){            // if response has key, then push
          userArray.push({userId:key, ...resData[key]});
        }
       
       }
       return userArray;
    }))

    
    .subscribe(users=>{
      console.log(users);
      this.users = users;
    })
  }
  onEditUser(userId, index){
    this.editMode = true;
    console.log(userId, "USERID");
    this.editUserId = userId;
    // console.log(this.users[index]);

    this.userForm.setValue({
      name: this.users[index].name,
      technology: this.users[index].technology
    })
    
  }
  // onDeleteUser(userId){
  //   if(confirm('Do you want to delete this user?')){
  //     console.log(userId);
  //     this.http.delete('https://manageuser-afc05-default-rtdb.firebaseio.com/user/'+userId+'.json') // change url of your api
  //       .subscribe(()=>{
  //         this.fetchUser()
  //       })
  //   }
  // }
  onDeleteUser(userId){
    if(confirm('Do you want to delete this user?')){
          console.log(userId);
          this.http.delete('https://manageuser-afc05-default-rtdb.firebaseio.com/user/'+userId+'.json')
          .subscribe(()=>{
            this.fetchUser();
          })
    }
  }

}
