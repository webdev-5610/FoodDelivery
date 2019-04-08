import {Injectable} from '@angular/core';
import {Order} from 'src/app/model/order.client.model';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class WebsiteService {

    baseUrl = environment.baseUrl;
    userApiUrl = '/api/user/';

    constructor(private http: HttpClient) {
    }
    constructFindUpdateDeleteUrl(userId, websiteId) {
        return this.baseUrl + this.userApiUrl + userId + '/website/' + websiteId;
    }
    createWebsite(website, userId) {
        console.log('front website service createWebsite() called');
        return this.http.post<Order>(
            this.baseUrl + this.userApiUrl + userId + '/website', website);
    }


    findWebsitesByUser(userId): Observable<Order[]> {
        console.log('front website service findWebsiteByUser() called');
        return this.http.get<Order[]>(this.baseUrl + this.userApiUrl + userId + '/website');
    }

    findWebsiteById(userId, websiteId) {
        console.log('front website service findwebsiteById() called');
        // Only need to call server's url to get the data.
        return this.http.get<Order>(this.constructFindUpdateDeleteUrl(userId, websiteId));
    }

    updateWebsite(userId, websiteId, website) {
        console.log('front website service updateWebsite() called');
        return this.http.put<Order>(this.constructFindUpdateDeleteUrl(userId, websiteId), website);
    }

    deleteWebsite(userId, websiteId) {
        console.log('front website service deleteWebsite() called');
        return this.http.delete<Order>(this.constructFindUpdateDeleteUrl(userId, websiteId));
    }

}
