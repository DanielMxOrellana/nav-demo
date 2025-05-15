import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton
} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule]
})
export class DashboardPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  goBack() {
    this.navCtrl.back();
  }

  goToHome() {
    this.navCtrl.navigateRoot('/home');
  }
}