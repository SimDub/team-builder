import { Component, Input, OnInit } from '@angular/core';
import { Equipe } from '../Models/Equipe';
import { EntrepriseService } from '../services/entreprise.ervice';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {
@Input() equipe:Equipe= new Equipe();
@Input() indice:number =0;
  constructor(private entrepriseService:EntrepriseService) { }

  ngOnInit(): void {
  }

  onSupprimerEquipe(){
    this.entrepriseService.supprimerEquipe(this.indice);
  }

  onSupprimerPersonne(i:number){
    this.entrepriseService.supprimerPersonne(this.indice,i);
  }
}
