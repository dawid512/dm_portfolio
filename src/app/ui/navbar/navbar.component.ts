import { CommonModule } from '@angular/common';
import { Component, Input, WritableSignal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MatSidenavModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() public darkMode!: WritableSignal<boolean>;
  @Input() public activeSections!: WritableSignal<string[]>;
  
  public toggleDarkMode(): void {
    this.darkMode.set(!this.darkMode());
  }
}
