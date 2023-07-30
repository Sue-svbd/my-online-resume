import { AfterViewInit, Component, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-vertical-carousel',
  templateUrl: './vertical-carousel.component.html',
  styleUrls: ['./vertical-carousel.component.scss'],
})
export class VerticalCarouselComponent implements OnInit, AfterViewInit {
  jobs = [
    {
      header: 'EXPERIENCE',
      title: 'How it all started',
      description:
        'After couple of years in a support position in Booking.com, I realized I wanted to do more. I wanted to completely switch careers and so between a boot camp and a lot of Indian developers on YouTube explaining how to code, I became a front end developer. <br> <br>Fun fact: My initial foray into coding involved creating an exact replica of the Facebook login page. This replica was designed to secretly forward the entered credentials to my email upon submission. <br>Yes, that was phishing. Yes, it did work. I had no real clue what I was doing with all that code, I just followed an online guide, but it surely did spark interest in me!',
    },
    {
      header: 'EXPERIENCE',

      title: 'Software developer @ Kambr - (March 2020 - March 2021)',
      description:
        '<ul><li>- Built a software for airlines revenue managers using VueJS</li><li>- Worked closely with revenue management teams to understand their specific needs and requirements</li><li>- Implemented dynamic and interactive data visualisations using VueJS and ApexChart.js, to help revenue managers make informed decisions. </li><li>- Utilised Agile methodologies for efficient project management, with daily stand-ups and sprint planning sessions.</li><li>- Conducted code reviews, debugging, and testing to maintain high quality and stability of the software.</li> </ul>',
    },
    {
      header: 'EXPERIENCE',

      title:
        'Front end developer @ Gemeente Rotterdam via Incentro – (March 2021 - December 2022)',
      description:
        '<ul><li>- Collaborated with design and product teams to create user-friendly interfaces and improve the overall user experience.</li><li>- Developed and maintained Angular-based CSM application based on Alfresco API, ensuring high performance and responsiveness.</li><li>- Worked along with designers, creating new designs and prototyping in Figma. </li><li>- Participated in code reviews, debugging, and troubleshooting</li><li>- Worked with Agile methodologies and participated in sprint planning, daily stand-ups, and retrospectives.</li><li>- Trained new hires on the product</li></ul>',
    },
    {
      header: 'EXPERIENCE',

      title: 'UX Engineer @ Incentro, Utrecht – (Jan 2023 - Aug 2023)',
      description:
        '<ul><li>- Worked on an internal application as a UX Engineer; my primary responsibility was to design and develop digital experiences that are engaging, efficient, and intuitive for users.</li><li>- Worked closely with developers and the product owner to ensure that the user interface is visually appealing and easy to navigate.</li><li>- I utilized my knowledge of human-computer interaction, usability testing, and front-end development to design and develop interfaces that meet the needs of the user while achieving business goals. </li><li>- My duties included conducting user research, creating wireframes and prototypes, developing responsive and accessible designs, and collaborating with developers to implement and test features.</li><li>- My ultimate goal is to create seamless user experiences that drive user satisfaction and loyalty.</li></ul>',
    },
  ];

  responsiveOptions: any[] | undefined;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
    this.jobs.forEach((job) => {
      job.description = this.highlightWords(job.description);
    });
  }

  ngAfterViewInit(): void {
    this.setCarouselHeight()
  }

  carouselHeight: string = '65vh';
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.setCarouselHeight();
  }
  setCarouselHeight() {
    const breakpoints = [
      { max_width: 767, height: '45vh' }, // For screens with width <= 767px, set height to '50vh'
      { min_width: 768, height: '450px' }, // For screens with width >= 768px, set height to '65vh'
      { min_width: 1440, height: '55vh' }, // For screens with width >= 1440px, set height to '55vh'
    ];

    const width = window.innerWidth;

    // Loop through the breakpoints and find the matching height
    for (const breakpoint of breakpoints) {
      if (
        (breakpoint.min_width && width >= breakpoint.min_width) ||
        (breakpoint.max_width && width <= breakpoint.max_width)
      ) {
        this.carouselHeight = breakpoint.height;
        break; // Exit the loop once the matching height is found
      }
    }
  }

  private highlightWords(description: string): string {
    const wordsToHighlight = ['Fun', 'fact'];
    const highlightedWords = wordsToHighlight.join('|');
    const regex = new RegExp(`\\b(${highlightedWords})\\b`, 'gi');
    const replacedText = description.replace(
      regex,
      '<span class="highlighted">$1</span>'
    );
    return replacedText;
  }
}
