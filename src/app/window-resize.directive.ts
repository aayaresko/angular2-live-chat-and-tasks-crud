import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
    selector: '[appWidowResize]'
})
export class WindowResizeDirective {
    @HostListener('window:resize') onResize() {
        this.resize();
    }

    @HostListener('window:load') onLoad() {
        this.resize();
    }

    constructor(private element: ElementRef, private renderer: Renderer) {
    }

    private resize() {
        let height = window.innerHeight * 0.7;
        let min = 410;
        if (height < min) {
            height = min;
        }
        this.renderer.setElementStyle(this.element.nativeElement, 'height', `${height}px`);
    }

}
