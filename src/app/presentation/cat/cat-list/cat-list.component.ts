import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatFacade } from 'src/app/application/cat/cat.facade';
import { Cat } from 'src/app/core/models/cat.model';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {
  cats$!: Observable<Cat[]>;

  constructor(private catFacade: CatFacade) { }

  ngOnInit(): void {
    this.cats$ = this.catFacade.getBreeds();
  }
}
