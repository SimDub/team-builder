import { Component } from '@angular/core';
import { Equipe } from './Models/Equipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '03-projet-team-builder';

  equipes: Equipe[] =[
    { nom:'A', personnes:[
      {prenom:'Tu', nom:'TU'},
      {prenom:'Ta', nom:'TA'},
      {prenom:'To', nom:'TO'}
    ]},
    { nom:'B', personnes:[]},
    { nom:'C', personnes:[]},
    ];

  nomEquipe:string =''

  ajouterEquipe(){
    let equipe = new Equipe(this.nomEquipe)
    this.equipes.push(equipe);

  }

  enleverPersonneEquipe(i:number, ip:number){

  }

  ajouterPersonne(){

  }
}
