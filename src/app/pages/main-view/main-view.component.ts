import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/modelos/board.model';
import { Column } from 'src/app/modelos/column.model';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Test Board', [
    new Column ( 'Projetos',[
      "Projeto Angular - Kanban",
      "Projeto Ruby on Rails - Instagram",
      "Projeto Java - Jogo de Xadrez"
    ]),
    new Column ('Para Fazer', [
      "aulas de Java - Classes e Metodos",
      "aulas de Javascript - Condicionais",
      "aulas de Ruby - Hashes"
    ]),
    new Column ('Fazendo', [
      "Aulas de UX Design",
      "Design System",
      "UX research"
    ]),
    new Column ('Feito', [
      "aulas de HTML/CSS",
      "aulas de Bootstrap - Projeto Spotify",
      
    ])

  ])

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
