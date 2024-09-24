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

  constructor() {
    effect(() => {
      window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
    });
  }

  public activeSections: WritableSignal<string[]> = signal<string[]>(['home']); // default "home"

  public ngOnInit() {
    window.addEventListener('scroll', this.checkVisibleSections.bind(this));
    this.checkScreenWidth();
    window.addEventListener('resize', () => this.checkScreenWidth());
  }

  public isDrawerOpen: boolean = false;

  public toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  private checkScreenWidth() : void {
    const screenWidth = window.innerWidth;
    
    if (screenWidth < 1200) {
      this.isDrawerOpen = false;
    } else {
      this.isDrawerOpen = true;
    }
  }

  private checkVisibleSections() {
    const sections = ['home', 'experience', 'techstack', 'contact'];
    const visibleSections: string[] = [];

    sections.forEach((id) => {
      const section = document.getElementById(id) as HTMLElement;

      if (section) {
        const rect = section.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
          visibleSections.push(id);
        }
      }
    });

    if (visibleSections.length > 2) {
      this.activeSections.set(visibleSections.slice(0, 2));
    } else {
      this.activeSections.set(visibleSections);
    }

  }
}