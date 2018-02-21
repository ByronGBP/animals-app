import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css']
})
export class AnimalCardComponent implements OnInit {

  @Input() animal: string;
  @Output() delete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  handleDeleteClick() {
    console.log("Delete clicked on card for animal " + this.animal);
    this.delete.emit(this.animal);
  }
}
