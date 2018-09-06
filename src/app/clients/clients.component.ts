import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  images: any[];
  images2: any[];
  constructor() { }

  ngOnInit() {
    this.images = [];
        this.images.push({source:'src/images/SaraFeather.jpg', alt:'Description for Image 1', title:'Title 1'});
        this.images.push({source:'src/images/SaraFeather2.jpg', alt:'Description for Image 2', title:'Title 2'});
        this.images.push({source:'src/images/SaraFeather3.jpg', alt:'Description for Image 2', title:'Title 3'});
    this.images2 = [];
        this.images2.push({source:'src/images/SaraFeather.jpg', alt:'Description for Image 1', title:'Title 1'});
        this.images2.push({source:'src/images/SaraFeather2.jpg', alt:'Description for Image 2', title:'Title 2'});
        this.images2.push({source:'src/images/SaraFeather3.jpg', alt:'Description for Image 2', title:'Title 3'});
  }

}
