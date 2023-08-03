import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  constructor(
    @Inject('publicKey') private pKey: string,
    @Inject('urlApi') private uApi: string,
    private http: HttpClient) { }

  search(params: { limit: number, search: string }) {
    let searchParams: { limit: number, nameStartsWith?: string } = { limit: params.limit };

    if (params.search !== "") {
      searchParams.nameStartsWith = params.search;
    }

    return this.http.get<{ data: { results: any[] } }>(
      `${this.uApi}/characters`,
      {
        params: {
          apikey: this.pKey,
          ...searchParams
        },
      }
    ).pipe(
      map(r => r.data.results)
    );
    
  }
}
