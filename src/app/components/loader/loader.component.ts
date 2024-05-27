import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
})
export class LoaderComponent implements OnInit {
  @Input() config: 'config1' | 'config2' | undefined;
  @Input() interval: number = 2000;

  images: { src: string; text: string }[] = [];
  currentImageIndex: number = 0;
  intervalId: any;

  config1 = [
    {
      src: 'assets/bulbasaur.png',
      text: 'Mira este Bulbasaur mientras esperas...',
    },
    {
      src: 'assets/squirtle.png',
      text: 'Mira este Squirtle mientras esperas...',
    },
    {
      src: 'assets/charmander.png',
      text: 'Mira este Charmander mientras esperas...',
    },
    {
      src: 'assets/pikachu.png',
      text: 'Mira este Pikachu mientras esperas...',
    },
  ];

  config2 = [
    {
      src: 'assets/chikorita.webp',
      text: 'Mira este Chikorita mientras esperas...',
    },
    {
      src: 'assets/cyndaquil.webp',
      text: 'Mira este Cyndaquil mientras esperas...',
    },
    {
      src: 'assets/totodile.webp',
      text: 'Mira este Totodile mientras esperas...',
    },
    { src: 'assets/pichu.webp', text: 'Mira este Pichu mientras esperas...' },
  ];

  ngOnInit() {
    this.images = this.config === 'config1' ? this.config1 : this.config2;
    this.startLoader();
  }

  startLoader() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images.length;
      /* if (
        this.currentImageIndex > 0 &&
        this.currentImageIndex < this.images.length
      ) {
        this.currentImageIndex++;
      } else {
        this.currentImageIndex = 0;
      } */
    }, this.interval);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
