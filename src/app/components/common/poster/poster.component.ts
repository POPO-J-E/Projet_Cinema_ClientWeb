import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../../service/api-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.sass']
})
export class PosterComponent implements OnInit {
  @Input() object: any;
  @Input() actor: boolean;
  constructor(private apiService: ApiService, private router: Router) {
  }
  deleteFilm() {
    this.apiService.deleteFilm(this.object);
    window.location.reload();
  }
  deleteActor() {
    this.apiService.deleteActor(this.object);
    window.location.reload();
  }
  ngOnInit() {
  }
}