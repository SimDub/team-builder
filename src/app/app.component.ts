import { Component, OnInit } from '@angular/core';
import { Equipe } from './Models/Equipe';
import { EntrepriseService } from './services/entreprise.ervice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  nomEquipe:string='';
  equipes:Equipe[] =[];

  constructor(private entrepriseService:EntrepriseService){}
ngOnInit(): void {
  this.equipes = this.entrepriseService.equipes;
}

  onAjouterEquipe(){
    this.entrepriseService.ajouterEquipe(this.nomEquipe)
    this.nomEquipe='';
  }
}
