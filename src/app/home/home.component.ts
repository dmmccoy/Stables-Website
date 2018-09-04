import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: any[];
  slideIndex = 0;

  constructor() { }

  ngOnInit() {

    this.images = [];
        this.images.push({source:'assets/images/horse.jpg', alt:'Description for Image 1', title:'Title 1'});
        this.images.push({source:'assets/images/horse4.jpg', alt:'Description for Image 2', title:'Title 2'});
        this.images.push({source:'assets/images/horse3.jpg', alt:'Description for Image 2', title:'Title 3'});
  }





}
