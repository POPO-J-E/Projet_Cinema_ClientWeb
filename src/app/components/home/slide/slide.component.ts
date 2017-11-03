import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.sass']
})

export class SlideComponent implements OnInit {

  @Input() img: string;
  @Input() title: string;
  @Input() synopsis: string;
  @Input() date: string;
  @Input() duree: number;

  constructor() {
  }

  ngOnInit() {
  }

}
