import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnderecoCepApi } from '../../model/EnderecoCepApi';

const API = 'https://viacep.com.br/ws';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  Endereco!: EnderecoCepApi;

  constructor(private httpClient: HttpClient) {}

  public enderecoPorCep(cep: any): Observable<EnderecoCepApi> {
    return this.httpClient.get<EnderecoCepApi>(`${API}/${cep}/json`);
  }
}
