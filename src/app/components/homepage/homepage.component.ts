import { Component, OnInit } from '@angular/core';
import {foo}  from '../custom/functions';

import { AnyService } from '../../services/any.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  anyService: AnyService;
  name = '';
  date: Date = new Date();
  animals: Array<string>;
  feedbackEnabled = false;  
  moonPhase = 'full'
 
  constructor(anyService: AnyService) {
    this.name = null;
    this.animals = ['Dog', 'Duck', 'Elephant', 'Zebra'];
    this.anyService = anyService;
  }

  ngOnInit() {}

  handleClick(form) {
    if (form.valid) {
      this.anyService.addValidSubmits();
      this.animals.push(this.name);
      this.name = '';
      this.feedbackEnabled = false;  
    }else {
      this.anyService.addInvalidSubmits();
      this.feedbackEnabled = true;  
    }    
  }
}

// *it can be used one of the 2 options