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
    this.showSlides();

    this.images = [];
        this.images.push({source:'assets/images/horse.jpg', alt:'Description for Image 1', title:'Title 1'});
        this.images.push({source:'assets/images/horse2.jpg', alt:'Description for Image 2', title:'Title 2'});
  }




  showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].setAttribute("style", "display: none;");
      }
      this.slideIndex++;
      if (this.slideIndex > slides.length) {this.slideIndex = 1}
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex-1].setAttribute("style", "display: block;");
      dots[this.slideIndex-1].className += " active";
      setTimeout(this.showSlides, 2000); // Change image every 2 seconds
  }
}
