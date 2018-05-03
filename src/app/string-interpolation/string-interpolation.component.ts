import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  public str1 = 'String 1';
  public str2 = 'String 2';

  public before = 'Original text'; // 1
  public after = 'New text'; // 2
  public temp = 'temp'; // 3
  
  constructor() { }

  ngOnInit() {
  }

  changeStyle() {
    return {color:'red',font:'Tahoma'}
  }
  
  changeText() {
    this.temp = this.before;
    this.before = this.after;
  }
  
  reverseText() {
    this.temp = this.after;
    this.after = this.before;
  }
}
