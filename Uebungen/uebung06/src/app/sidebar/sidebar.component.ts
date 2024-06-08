import { Component } from '@angular/core';
import { ARTIKEL } from '../mock-artikel';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  Artikel = ARTIKEL;
}
