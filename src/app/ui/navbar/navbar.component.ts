import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, WritableSignal } from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MatSidenavModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() darkMode!: WritableSignal<boolean>;
  @Input() activeSections!: WritableSignal<string[]>;
  
  public toggleDarkMode() {
    this.darkMode.set(!this.darkMode());
  }
}
