import { CommonModule } from '@angular/common';
import { Component, Input, WritableSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() darkMode!: WritableSignal<boolean>;
  @Input() activeSection!: WritableSignal<string>;

  public toggleDarkMode() {
    this.darkMode.set(!this.darkMode());
  }
}
