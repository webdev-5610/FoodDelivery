import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class DeliverService {

    constructor(private http: HttpClient) {}

    public mapAPIKey = 'AIzaSyBtrCeFbuL6cSgjC2UyJsaJuJoXKXAmQQM';

    calculate(lat: String, lng: String, destination: String) {
        return this.http.post(environment.baseUrl + '/api/deliver/getdistance', {
            lat: lat,
            lng: lng,
            destination: destination
        });
    }
}
