import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  @Input() animals: Array<string>;

  constructor() { }

  ngOnInit() {
  }

  handleDelete(event) {
    console.log("The user wants to delete: " + event);
  }

}
