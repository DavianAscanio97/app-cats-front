import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from '../../core/models/cat.model';
import { CatService } from '../../core/services/cat.service';

@Injectable({
  providedIn: 'root'
})
export class CatFacade {
  constructor(@Inject('CatService') private catService: CatService) { }

  getBreeds(): Observable<Cat[]> {
    return this.catService.getCats();
  }
}
