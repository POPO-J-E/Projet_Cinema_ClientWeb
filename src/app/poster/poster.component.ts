import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.sass']
})
export class PosterComponent implements OnInit {

  @Input() img: string;
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
