import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { concatMap, forkJoin, mergeMap, of, zip } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  standalone: true,
  imports: [],
  templateUrl: './observable-demo2.component.html',
  styleUrl: './observable-demo2.component.css',
})
export class ObservableDemo2Component {
  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    // this.zipDemo()
    // this.fetchDataFromMulApi();
    // this.withoutMergeMap();
    // this.withMergeMap();
    this.concatMapDemo();
  };

  concatMapDemo(){
   let userObs = of(1,2,3,4,5);
   let  userObsSubscriber = userObs.pipe(concatMap((user)=>{
    let url = `https://jsonplaceholder.typicode.com/users/${user}`
   return this.httpClient.get(url)
   })).subscribe((user)=>{
    console.log(user)
   })
  };

  withMergeMap(){
    let userObs = of(1,2,3,4,5);
   let userObsSubscriber = userObs.pipe(mergeMap((user)=>{
     return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${user}`)
    })).subscribe(response=>{
      console.log(response)
    })
  }
  withoutMergeMap() {
    let userObs = of(1, 2, 3, 4, 5);
    let userSubscribe = userObs.subscribe((user) => {
      console.log(user);
      let url = `https://jsonplaceholder.typicode.com/users/${user}`;
      let userDetailSubscriber = this.httpClient.get(url);
      userDetailSubscriber.subscribe((user) => {
        console.log(user);
      });
    });
  }
  fetchDataFromMulApi() {
    let userName = [
      'sanjaysamantra1',
      'rajeswarguda',
      'seun035',
      'akash-kokate17',
    ];

    let requests = userName.map((user) => {
      return this.httpClient.get(`https://api.github.com/users/${user}`);
    });
    // console.log(requests,'request')
    // fork join is used to do multiple request like you have to fetch data from multiple api and show in one table
    forkJoin(requests).subscribe((response) => {
      console.log(response);
    });
  }
  zipDemo() {
    let name = of('akash', 'sohan', 'suraj');
    let age = of(21, 20, 23);
    let address = of('pune', 'hyderabad', 'bangalore');

    let finalObs = zip([name, age, address]);

    finalObs.subscribe((data) => {
      console.log(data);
    });
  }
}
