import { Component,HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Skills } from '../skills/skills';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
 @HostListener("window:scroll", [])
  onScroll() {
    const nav = document.getElementById("mainNav");
    if (window.scrollY > 20) {
      nav?.classList.add("scrolled");
    } else {
      nav?.classList.remove("scrolled");
    }
  }
}
