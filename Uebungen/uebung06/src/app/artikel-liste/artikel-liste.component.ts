import { Component, OnInit } from '@angular/core';
import {ARTIKEL} from '../mock-artikel';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import {ActivatedRoute} from '@angular/router'
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-artikel-liste',
  standalone: true,
  imports: [RouterLink, RouterOutlet,NgFor,FormsModule],
  templateUrl: './artikel-liste.component.html',
  styleUrl: './artikel-liste.component.css'
})
export class ArtikelListeComponent {

  Artikel = ARTIKEL;

}
