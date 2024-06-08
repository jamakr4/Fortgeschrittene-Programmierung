import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArtikelComponent } from './artikel/artikel.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgFor, NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms'
import { ARTIKEL } from './mock-artikel';
import { ArtikelListeComponent } from './artikel-liste/artikel-liste.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArtikelComponent,HeaderComponent, FooterComponent, SidebarComponent, NgFor, NgIf, UpperCasePipe, FormsModule,ArtikelListeComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blogf';
  Artikel = ARTIKEL;
}
