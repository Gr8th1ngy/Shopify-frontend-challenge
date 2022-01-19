import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DateUtils } from '../utils/dateUtils';

export interface NasaImage {
  title: string;
  date: Date;
  url: string;
  explanation: string;
  isLiked:boolean;
}

@Injectable()
export class NasaService {
  constructor(private http: HttpClient) {}

  nasaUrl: string = 'https://api.nasa.gov/planetary/apod';
  params: any = {
    api_key: '01g8Z4BktcOQKj4rCRHxVO0Rmbv0zo7aettGUMX9'
  }

  // get images from NASA API
  getImages(start_date: Date) {
    this.params['start_date'] = DateUtils.formatDate(start_date);

    return this.http.get<NasaImage[]>(this.nasaUrl, {params: this.params})
    .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}