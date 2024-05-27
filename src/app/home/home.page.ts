import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline } from 'ionicons/icons';
import { LoaderComponent } from '../components/loader/loader.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonContent,
    CommonModule,
    LoaderComponent,
    NavbarComponent,
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
}
