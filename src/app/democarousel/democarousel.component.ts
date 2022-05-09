import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-democarousel',
  templateUrl: './democarousel.component.html',
  styleUrls: ['./democarousel.component.css']
})
export class DemocarouselComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor() { }

  ngOnInit(): void {
  }

}
