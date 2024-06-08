import { Routes } from '@angular/router';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ArtikelListeComponent } from './artikel-liste/artikel-liste.component';
import { ArtikelComponent } from './artikel/artikel.component';
import { ArtikelEditorComponent } from './artikel-editor/artikel-editor.component';


export const routes: Routes = [
    
    {
        path: "kontakt", component:KontaktComponent
    },
    {
        path: "impressum", component:ImpressumComponent
    },
    {
        path: "ArtikelListe", component:ArtikelListeComponent
    },
    {
        path: 'artikel/:id', component:ArtikelComponent
    },
    {
        path: "editor/:id", component:ArtikelEditorComponent
    }
];
