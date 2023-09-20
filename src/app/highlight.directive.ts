import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @HostBinding('style.color') myColor: string | undefined;
  @HostBinding('style.fontSize') myFontSize: string | undefined;
  @HostBinding('style.fontWeight') myFontWeight: string | undefined;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.myColor = 'red';
    this.myFontSize = '24px';
    this.myFontWeight = 'bold'
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.myColor = 'black';
    this.myFontSize = '16px';
    this.myFontWeight = 'normal'
  }

}