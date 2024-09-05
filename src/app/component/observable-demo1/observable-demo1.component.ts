import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { filter, from, interval, map, Observable, range, take } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable-demo1.component.html',
  styleUrl: './observable-demo1.component.css',
})
export class ObservableDemo1Component {
  numbers: any;
  numbers_5: any;
  square: any;
  time: any;
  allSubscription: any = [];
  ngOnInit() {

    this.time = new Observable((observer)=>{
      setInterval(()=>{observer.next(new Date().toString()),1000})
    })

    let publisher1 = new Observable((observer) => {
      observer.next('AAAA');
      observer.next('BBBB');
      observer.next('CCC');
      observer.next('dddd');
      observer.complete();
    });

    let subscriber1 = publisher1.subscribe({
      next: (data) => {
        console.log('next method called');
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('all data received');
      },
    });

    let cars = ['tata', 'honda', 'maruti', 'BMW'];

    let carsPublisher = from(cars); // to create array to observable used "form()" method.
    // console.log(carsPublisher,'form')
    carsPublisher.subscribe((val) => console.log(val));

    this.numbers = interval(1000);
    this.numbers_5 = this.numbers.pipe(take(5));
    this.numbers.subscribe((val: any) => console.log(val));
    this.allSubscription.push(this.numbers);

    let nums = range(1, 10);
    let allNumbs = nums.subscribe((val) => console.log(val));
    this.allSubscription.push(allNumbs);

    let even_num = nums.pipe(filter((ele) => ele % 2 == 0));
    let allEvenNum = even_num.subscribe((val) => {
      console.log(val, 'even_num');
    });
    this.allSubscription.push(allEvenNum);

    let square_num = nums.pipe(map((val) => val * val));
    let allSquareNum = square_num.subscribe((val) => {
      console.log(val, 'square');
    });
    this.allSubscription.push(allSquareNum);
  }
  ngOnDestroy() {
    console.log(this.allSubscription);
    for (let ele of this.allSubscription) {
      ele.unsubscribe();
    }
  }
}
