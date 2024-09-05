import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo1',
  standalone: true,
  imports: [],
  templateUrl: './subject-demo1.component.html',
  styleUrl: './subject-demo1.component.css',
})
export class SubjectDemo1Component {
  ngOnInit() {
    this.subjectDemo();
    // this.behaviorSubject();
    // this.replaySubjectDemo();
    // this.asyncSubjectDemo();
  }

  subjectDemo() {
    let mySubject = new Subject();
    mySubject.next('AAA');
    let subScriber1 = mySubject.subscribe((val) =>
      console.log('subscriber1', val)
    );
    mySubject.next('BBB');
    let subScriber2 = mySubject.subscribe((val) =>
      console.log('subscriber2', val)
    );
    mySubject.next('CCC');
    mySubject.next('DDD');
  }

  behaviorSubject() {
    let myBehaviorSubject = new BehaviorSubject('Initial value');
    myBehaviorSubject.next('aaa');
    let subScriber1 = myBehaviorSubject.subscribe((val) =>
      console.log('subscriber1', val)
    );
    myBehaviorSubject.next('bbb');
    let subscriber2 = myBehaviorSubject.subscribe((val) =>
      console.log('subscriber2', val)
    );
    myBehaviorSubject.next('ccc');
    myBehaviorSubject.next('ddd');
  }

  replaySubjectDemo() {
    let myReplaySubject = new ReplaySubject();
    myReplaySubject.next('aaa');
    let subScriber1 = myReplaySubject.subscribe((val) =>
      console.log('subscriber1', val)
    );
    myReplaySubject.next('bbb');
    let subscriber2 = myReplaySubject.subscribe((val) =>
      console.log('subscriber2', val)
    );
    myReplaySubject.next('ccc');
    myReplaySubject.next('ddd');
  }

  asyncSubjectDemo() {
    let myAsyncSubject = new AsyncSubject();
    myAsyncSubject.next('aaa');
    let myScriber1 = myAsyncSubject.subscribe((val) =>
      console.log('myScriber1', val)
    );
    myAsyncSubject.next('bbb');
    let subscriber2 = myAsyncSubject.subscribe((val) =>
      console.log('subscriber2', val)
    );
    myAsyncSubject.next('ccc');
    myAsyncSubject.next('ddd');
    myAsyncSubject.complete()
  }
}
