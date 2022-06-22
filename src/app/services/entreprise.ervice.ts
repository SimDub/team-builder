import { Equipe } from "../Models/Equipe";

export class EntrepriseService{
  equipes:Equipe[]= [];

  ajouterEquipe(nomEquipe:string){
    let e = new Equipe(nomEquipe);
    this.equipes.push(e); // on ajoute l equipe ds le tab
  }

  supprimerEquipe(id:number){
    this.equipes.splice(id,1);
  }

  supprimerPersonne(id:number){
    this.equipes.splice(id,1);
  }
}
