import { Observable } from 'rxjs';
import { Cat } from '../models/cat.model';

export interface CatService {
  getCats(): Observable<Cat[]>;
}
