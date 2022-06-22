import { Equipe } from "../Models/Equipe";
import { Personne } from "../Models/personne";

export class EntrepriseService{
  equipes:Equipe[]= [];
  personnes:Personne[]= [];

  ajouterEquipe(nomEquipe:string){
    let e = new Equipe(nomEquipe);
    this.equipes.push(e); // on ajoute l equipe ds le tab
  }

  supprimerEquipe(id:number){
    this.equipes.splice(id,1);
  }

  ajouterPersonne(personne:Personne, id:number){
    this.personnes.push(personne);
    if(id >= 0){
      this.equipes[id].personnes.push(personne)
    }
  }

  supprimerPersonneDEquipe(iEquipe:number,i:number){
    this.equipes[iEquipe].personnes.splice(i,1)
  }

  supprimerPersonne(i:number, personne:Personne){

    this.personnes.splice(i,1);
  }
}
