import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Skills } from '../skills/skills';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

}
