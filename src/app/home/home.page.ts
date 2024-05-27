import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline } from 'ionicons/icons';
import { LoaderComponent } from '../components/loader/loader.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonButtons,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    CommonModule,
    LoaderComponent,
  ],
})
export class HomePage {
  showLoader = false;

  constructor(private router: Router) {
    addIcons({ homeOutline });
  }
  goInterna() {
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
      this.router.navigate(['/interna']);
    }, 7000);
  }

  goHome() {
    this.router.navigate(['']);
  }
}
