import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { exhaustMap, fromEvent, map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-observable-demo3',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './observable-demo3.component.html',
  styleUrl: './observable-demo3.component.css',
})
export class ObservableDemo3Component {
  searchResult$: Observable<any> | undefined; // for storing the api data
  searchForm: any; // to create the formGroup

  constructor(public httpClient: HttpClient) {
    this.searchForm = new FormGroup({
      searchField: new FormControl(),
    });
  }

  ngOnInit() {
    this.switchMapDemo();
    this.exhaustMapDemo();
  }
  switchMapDemo() {
    this.searchResult$ = this.searchForm.get('searchField').valueChanges.pipe(
      switchMap((term) => {
        return this.httpClient.get<any>(
          `https://swapi.dev/api/people/?search=${term}`
        );
      }),
      map((response: any) => {
        return response.count > 0 ? response.results : [];
      })
    );
    console.log(this.searchResult$, 'hii');
  }

    exhaustMapDemo() {
      const clicks = fromEvent(document, 'click');
      console.log(clicks)
      const result = clicks.pipe(
        exhaustMap(() => this.httpClient.get('https://fakestoreapi.com/products'))
      );
      result.subscribe((x) => console.log(x));
    }
}

