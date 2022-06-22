import { Component, Input, OnInit } from '@angular/core';
import { Equipe } from '../Models/Equipe';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {

@Input() equipe:Equipe = new Equipe();
@Input() index:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
