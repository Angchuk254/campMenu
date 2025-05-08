import { Component, EventEmitter, Output } from '@angular/core';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floating-buttons',
  // Removed invalid imports array
  templateUrl: './floating-buttons.component.html',
  styleUrl: './floating-buttons.component.scss'
})
export class FloatingButtonsComponent {
  constructor(private router: Router) { }

  // Method to navigate to the menu route
  navigateToMenu() {
    this.router.navigate(['/menu']);
  }

  // Method to navigate to the nearby places route
  navigateToPlaces() {
    this.router.navigate(['/nearby-places']);
  }
}
