import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  standalone: true,
  imports: [],
  templateUrl: './http-demo1.component.html',
  styleUrl: './http-demo1.component.css',
})
export class HttpDemo1Component {
 constructor(private httpClient:HttpClient){}

  ngOnInit() {
    this.fetchUserData();
    this.asyncAwaitDemo();
    this.httpClientMethod();
  };

  fetchUserData() {
     fetch('https://jsonplaceholder.typicode.com/users').then(
      (response: any) => {
        return response.json()
      },
      (error) => {
        console.log(error);
      }
    ).then((data:any)=>{
      console.log(data)
    });
  };

 async asyncAwaitDemo(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let finalData = await response.json();
    console.log(finalData)
  }

  httpClientMethod(){
    let userObservable = this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    userObservable.subscribe(
      (response)=>{
        console.log('httpClient response',response)
      },
      (error)=>{
        console.log(error)
      },
      ()=>{
        console.log('fetching the data is completed')
      },
    )
  }
}
