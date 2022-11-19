/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Configs,
  LoadAllConfigsResponse,
  SaveConfigsRequest,
} from './configs.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigsService {
  private BASE_URL = 'http://localhost:9100/archigen-web/configs-api';

  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
  };

  constructor(private http: HttpClient) {}

  saveConfigs(config: SaveConfigsRequest) {
    this.http
      .post(`${this.BASE_URL}/save-configs`, config, this.httpOptions)
      .subscribe();
  }

  loadAllConfigs(): Observable<LoadAllConfigsResponse> {
    return this.http.get<LoadAllConfigsResponse>(
      `${this.BASE_URL}/load-all-configs`,
      this.httpOptions
    );
  }
}
