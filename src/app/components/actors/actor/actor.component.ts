import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../../service/api-service.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.sass']
})
export class ActorComponent implements OnInit {
  @Input() nom: string;
  @Input() prenom: string;
  actors;
  constructor(private apiService: ApiService) {
  }
  ngOnInit() {
    this.apiService.getAllActors()
        .subscribe((response) => {
          this.actors = response._embedded.acteurs;
        });
  }
}
