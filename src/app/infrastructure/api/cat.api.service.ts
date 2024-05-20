import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../../core/models/cat.model';
import { CatService } from '../../core/services/cat.service';

@Injectable({
  providedIn: 'root'
})
export class CatApiService implements CatService {
  private apiUrl = 'https://api.thecatapi.com/v1/breeds';

  constructor(private http: HttpClient) { }

  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.apiUrl);
  }
}
