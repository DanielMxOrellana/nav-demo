import { Component } from '@angular/core';
import { NavController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class DashboardPage {
  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back();
  }

  goToHome() {
    console.log('Navegando a login como root...');
    this.navCtrl.navigateRoot('/login'); // Cambia '/login' si tu ruta base es otra
  }
}
