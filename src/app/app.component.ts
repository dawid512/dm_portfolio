import { Component, effect, HostBinding, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "./ui/navbar/navbar.component";
import { ContactComponent } from "./ui/contact/contact.component";
import { TechstackComponent } from "./ui/techstack/techstack.component";
import { ExperienceComponent } from "./ui/experience/experience.component";
import { HomeComponent } from "./ui/home/home.component";
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, ContactComponent, TechstackComponent, ExperienceComponent, HomeComponent, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'dm_portfolio';

  public darkMode: WritableSignal<boolean> = signal<boolean>(
    JSON.parse(window.localStorage.getItem('darkMode') ?? 'false')
  );
  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }

  // Śledzenie aktywnej sekcji
  // public activeSection: WritableSignal<string> = signal<string>('home'); // Domyślna sekcja "home"

  constructor() {
    effect(() => {
      window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
    });
  }

  public activeSection: WritableSignal<string> = signal<string>('home');

  ngOnInit() {
    this.checkVisibleSection();
    window.addEventListener('scroll', this.checkVisibleSection.bind(this)); // Dodajemy event listener na scroll
  }

  // Metoda do sprawdzania, która sekcja jest widoczna na ekranie
  checkVisibleSection() {
    const sections = ['home', 'experience', 'techstack', 'contact']; // Lista sekcji z ich ID

    let mostVisibleSection = sections[0]; // Domyślnie home jako aktywna

    sections.forEach((id) => {
      const section = document.getElementById(id) as HTMLElement;
      const rect = section.getBoundingClientRect();

      // Sprawdzamy, czy sekcja jest widoczna (więcej niż 50% wysokości na ekranie)
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        mostVisibleSection = id;
      }
    });

    this.activeSection.set(mostVisibleSection); // Ustawiamy najbardziej widoczną sekcję jako aktywną
    console.log('Most visible section:', mostVisibleSection); // Dla debugowania
  }
}