import {
  OnInit,
  Inject,
  PLATFORM_ID,
  Input,
  HostListener,
  ElementRef,
  Renderer2,
  Directive
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appSvgParallax]'
})
export class SvgParallaxDirective implements OnInit {
  private _svgBgImage: any;
  public parallaxData: {
    id: string;
    count: string;
    state: string;
    adjustmentPos: string;
  }[];

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  @Input()
  set appSvgParallax(value) {
    this._svgBgImage = value;
  }
  get appSvgParallax() {
    return this._svgBgImage || 0;
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  onWindowScroll() {
    this.applyParallax();
  }

  ngOnInit() {
    this.parallaxData = [
      { id: 'robot', count: '', state: '25', adjustmentPos: '450' },
      { id: 'satellite', count: '', state: '50', adjustmentPos: '250' },
      { id: 'rocket', count: '', state: '50', adjustmentPos: '250' },
      { id: 'train', count: '', state: '25', adjustmentPos: '250' },
      { id: 'ufo', count: '', state: '35', adjustmentPos: '200' },
      { id: 'one', count: '', state: '30', adjustmentPos: '250' }
    ];
  }

  applyParallax() {
    if (isPlatformBrowser(this.platformId)) {
      for (let i = 0; i < this.parallaxData.length; i++) {
        if (this.el.nativeElement.id === this.parallaxData[i].id) {
          this.parallaxData[i].count =
            (this._svgBgImage.getBoundingClientRect().top -
              parseInt(this.parallaxData[i].adjustmentPos, 10)) /
              parseInt(this.parallaxData[i].state, 10) +
            '%';
          this.renderer.setStyle(
            this.el.nativeElement,
            'transform',
            'translateY(' + this.parallaxData[i].count + ' )'
          );
        }
      }
    }
  }
}
