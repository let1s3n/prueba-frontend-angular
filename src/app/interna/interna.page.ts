import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonButtons,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline } from 'ionicons/icons';
@Component({
  selector: 'app-interna',
  templateUrl: './interna.page.html',
  styleUrls: ['./interna.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonIcon,
    IonButtons,
  ],
})
export class InternaPage {
  constructor(private router: Router) {
    addIcons({ homeOutline });
  }
  goHome() {
    this.router.navigate(['']);
  }
}
