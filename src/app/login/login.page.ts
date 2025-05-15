import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ]
})
export class LoginPage {
  constructor(private navCtrl: NavController) {}

  goToDashboard() {
    this.navCtrl.navigateForward('/dashboard');
  }
}
