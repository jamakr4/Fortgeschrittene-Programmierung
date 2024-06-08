import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ARTIKEL } from '../mock-artikel';

@Component({
  selector: 'app-artikel-editor',
  standalone: true,
  imports: [],
  templateUrl: './artikel-editor.component.html',
  styleUrl: './artikel-editor.component.css'
})
export class ArtikelEditorComponent {

  Artikel = ARTIKEL; 

  constructor(private activatedRoute: ActivatedRoute) { }
  id = this.activatedRoute.snapshot.queryParams['id'];
  

}
