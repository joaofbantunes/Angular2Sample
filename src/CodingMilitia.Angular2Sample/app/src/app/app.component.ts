import { Component, OnInit } from '@angular/core';

import { RandomService } from './services/random.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RandomService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  randomCollection = [];
  constructor(private randomService: RandomService) {
  }

  ngOnInit(): void {
    this.getAllRandom();
  }

  getAllRandom() {
    this.randomService.getAll().then(randomCollection => this.randomCollection = randomCollection);
    console.log(this.randomCollection.length);
  }
}
