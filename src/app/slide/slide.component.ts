import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.sass']
})

export class SlideComponent implements OnInit {

  @Input() link: string;
  @Input() title: string;
  @Input() synopsis: string;

  constructor() {
  }

  ngOnInit() {
  }

}
