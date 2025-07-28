import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../classes/category';
import {lastValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl: string = "http://localhost:8090/categories";

  constructor(
    private http: HttpClient
  ) {}

  public async getCategories(): Promise<Category[]> {
    return await lastValueFrom(this.http.get<Category[]>(`${this.baseUrl}`));
  }

}
