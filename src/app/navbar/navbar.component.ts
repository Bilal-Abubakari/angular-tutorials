import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isProfileMenuOpen: boolean = false;
  isNavMenuOpen: boolean = false;
  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  toggleNavMenu() {
  this.isNavMenuOpen = !this.isNavMenuOpen;
  }
}
