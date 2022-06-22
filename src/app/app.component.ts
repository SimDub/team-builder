import { Component, OnInit } from '@angular/core';
import { Equipe } from './Models/Equipe';
import { Personne } from './Models/personne';
import { EntrepriseService } from './services/entreprise.ervice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  nomEquipe:string='';
  prenom:string='';
  nom:string='';
  selectValue:number=-1;
  equipes:Equipe[] =[];
  personnes:Personne[]=[];

  constructor(private entrepriseService:EntrepriseService){}
ngOnInit(): void {
  this.equipes = this.entrepriseService.equipes;
  this.personnes = this.entrepriseService.personnes;
}

  onAjouterEquipe(){
    this.entrepriseService.ajouterEquipe(this.nomEquipe)
    this.nomEquipe='';
  }

  onAjouterPersonne(){
    let id = this.personnes.length +1;
    let personne = new Personne(this.prenom,this.nom, id)
    this.entrepriseService.ajouterPersonne(personne,this.selectValue)
    this.prenom = '';
    this.nom = '';
    this.selectValue=-1;
  }

  onSupprimerPersonne(i:number){
    let personne = this.personnes[i];
    this.entrepriseService.supprimerPersonne(i, personne);
  }
}
