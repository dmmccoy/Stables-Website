import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

    slideIndex = 1;

  constructor() {

  }

  ngOnInit() {



  }



  openModal() {
    document.getElementById('myModal').style.display = "block";
  }

  closeModal() {
    document.getElementById('myModal').style.display = "none";
  }



  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

showSlides(slideIndex);
  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        (slides[i] as HTMLElement).style.display = "none";
    }
    (slides[this.slideIndex-1] as HTMLElement).style.display = "block";
  }
}
