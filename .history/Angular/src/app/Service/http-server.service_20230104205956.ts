import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpServerService {
  private API =
    'https://api.themoviedb.org/3/movie/popular?api_key=a81a1abc1cf18a555966fcbf7079cc2b';
  constructor(private httpClient: HttpClient) {}
}
