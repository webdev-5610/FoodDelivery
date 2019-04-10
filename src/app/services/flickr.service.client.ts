import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlickrService {
  key = '1ebc776bb5c24d3ff49fabc66f410a74';
  secret = '3960c53d1580a0ba';
  flickerUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';

  constructor(private http: HttpClient) {
  }

  searchPhotos(searchTerm: string) : Observable<string> {
    const url = this.flickerUrl
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    return this.http.get(url, { responseType: 'text' });
  }
}
