import { Component, effect, HostBinding, HostListener, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "./ui/navbar/navbar.component";
import { ContactComponent } from "./ui/contact/contact.component";
import { TechstackComponent } from "./ui/techstack/techstack.component";
import { ExperienceComponent } from "./ui/experience/experience.component";
import { HomeComponent } from "./ui/home/home.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, ContactComponent, TechstackComponent, ExperienceComponent, HomeComponent, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  public title = 'dm_portfolio';

  public drawerMode: 'over' | 'side' = 'side';

  public darkMode: WritableSignal<boolean> = signal<boolean>(
    JSON.parse(window.localStorage.getItem('darkMode') ?? 'false')
  );

  @HostBinding('class.dark') public get mode(): boolean {
    return this.darkMode();
  }

  constructor(private breakpointObserver: BreakpointObserver) {
    effect(() => {
      window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
    });
  }

  public activeSections: WritableSignal<string[]> = signal<string[]>(['home']); // default "home"

  public ngOnInit(): void {
    window.addEventListener('scroll', this.checkVisibleSections.bind(this));
    this.checkScreenWidth();
    window.addEventListener('resize', () => this.checkScreenWidth());

    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.drawerMode = result.matches ? 'over' : 'side';
      });
  }

  public isDrawerOpen: boolean = false;

  public toggleDrawer(): void {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  private checkScreenWidth() : void {    
    window.innerWidth < 1200 ? this.isDrawerOpen = false : this.isDrawerOpen = true
  }

  private checkVisibleSections() : void {
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