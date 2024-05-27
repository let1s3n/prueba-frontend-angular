import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline } from 'ionicons/icons';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-interna',
  templateUrl: './interna.page.html',
  styleUrls: ['./interna.page.scss'],
  standalone: true,
  imports: [IonContent, NavbarComponent],
})
export class InternaPage {
  constructor(private router: Router) {
    addIcons({ homeOutline });
  }
}
