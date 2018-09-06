import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  images: any[];
  images2: any[];
  slideIndex = 1;
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
    this.showSlides(this.slideIndex);
  }

   plusSlides(n): void {
  this.showSlides(this.slideIndex += n);
}

currentSlide(n): void {
  this.showSlides(this.slideIndex = n);
}

showSlides(n): void {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {this.slideIndex = 1}
  if (n < 1) {this.slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].setAttribute("style", "display: none;");
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[this.slideIndex-1].setAttribute("style", "display: block;");
  dots[this.slideIndex-1].className += " active";
}

}
