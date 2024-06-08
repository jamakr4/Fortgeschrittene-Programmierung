import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ARTIKEL } from '../mock-artikel';  // Adjust the path as necessary

@Component({
  selector: 'app-artikel',
  standalone: true,
  imports: [NgFor, NgIf, UpperCasePipe, FormsModule, RouterLink],
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.css']  // Corrected from styleUrl to styleUrls
})
export class ArtikelComponent implements OnInit {
  Artikel: Artikel[] = ARTIKEL;
  selectedArtikel: Artikel | undefined;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.queryParams['id'];  
    console.log(id);
    this.selectedArtikel = this.Artikel.find(artikel => artikel.id === id);  
  }
}

export interface Artikel {
  id: number;
  ueberschrift: string;
  datum: string;
  autor: string;
  teaser: string;
  text: string;
  tags: string[];
}
