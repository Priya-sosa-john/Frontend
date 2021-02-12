import { Injectable } from '@angular/core';
import { Editpage } from './editpage.model';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class EditpageService {

  constructor(private http:HttpClient) { }

  readonly baseURL ='http://localhost:53744/api/outlets'
  formData:Editpage = new Editpage();
  list: Editpage[];

  postEditPage() {
    return this.http.post(this.baseURL, this.formData);
  }

  putEditPage() {
    return this.http.put(`${this.baseURL}/${this.formData.OutletId}`, this.formData);
  }

  deleteEditPage(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Editpage[]);
  }
}
