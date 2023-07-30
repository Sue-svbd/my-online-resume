import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements AfterViewInit {

  
  
  constructor(private el: ElementRef) {}
  


  scrollToSection(section: HTMLElement) {
    const yOffset = -130; // Adjust this value to fine-tune the scrolling position
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  ngAfterViewInit() {
    // Wait for the view to initialize before accessing ViewChild elements
  }
  redirectToSoundCloud() {
    window.open('https://soundcloud.com/susanna-capacchione', '_blank');
  }

  sendEmail() {
    window.location.href = 'mailto:susannacapacchione@gmail.com';
  }

  

}
