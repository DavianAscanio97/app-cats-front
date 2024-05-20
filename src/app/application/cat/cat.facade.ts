import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatImage, DetailsCat } from '../../core/models/cat.model';
import { CatService } from '../../core/services/cat.service';

@Injectable({
  providedIn: 'root'
})
export class CatFacade {
  constructor(@Inject('CatService') private catService: CatService) { }

  getCats(search: string): Observable<DetailsCat[]> {
    return this.catService.getCats(search);
  }

  getForId(id: string): Observable<DetailsCat> {
    return this.catService.getForId(id);
  }

  getImage(id: string): Observable<CatImage> {
    return this.catService.getImage(id);
  }
}
