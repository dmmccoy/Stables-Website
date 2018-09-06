import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  images: any[];
  slideIndex = 0;
  constructor() { }

  ngOnInit() {

    this.images = [];
        this.images.push({source:'src/images/people.jpg', alt:'Description for Image 1', title:'Title 1'});
        this.images.push({source:'src/images/GroupPhoto.jpg', alt:'Description for Image 2', title:'Title 2'});
        this.images.push({source:'src/images/Beverly-Tonya-Tiffany-Hardy.jpg', alt:'Description for Image 2', title:'Title 3'});
  }

}
