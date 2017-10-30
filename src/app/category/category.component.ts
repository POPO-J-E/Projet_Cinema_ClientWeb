import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../service/api-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit {
  @Input() inversed: string;
  @Input() title: string;
  films;
  constructor(private apiService: ApiService) {
    // this.films = apiService.getAllFilms();
  }
  ngOnInit() {
    this.apiService.getAllFilms()
        .subscribe((response) => {
          this.films = response._embedded.films;
        });
  }
}
