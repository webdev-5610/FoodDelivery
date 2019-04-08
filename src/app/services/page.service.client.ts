import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Restaurant} from 'src/app/model/restaurant.client.model';

@Injectable({
    providedIn: 'root'
})
export class PageService {
    baseUrl = environment.baseUrl;
    pageApiUrl = '/api/order/';
    websiteApiUrl = '/api/restaurant/';

    constructor(private http: HttpClient) { }
    constructFindUpdateDeleteUrl(websiteId, pageId) {
        return this.baseUrl + this.websiteApiUrl + websiteId + '/order/' + pageId;
    }

    createPage(page, websiteId) {
        console.log('front order service createPage() called');
        return this.http.post<Restaurant>(
            this.baseUrl + this.websiteApiUrl + websiteId + '/order',
            page);
    }

    findPageByWebsiteId(websiteId): Observable<Restaurant[]> {
        console.log('front order service findPageByWebsite() called');
        return this.http.get<Restaurant[]>(this.baseUrl + this.websiteApiUrl + websiteId + '/order');

    }



    findPageById(websiteId, pageId) {
        console.log('front order service findpageById() called');
        // Only need to call server's url to get the data.
        // '/api/restaurant/:websiteId/order/:pageId'
        return this.http.get<Restaurant>(this.constructFindUpdateDeleteUrl(websiteId, pageId));
    }

    updatePage(websiteId, pageId, page) {
        console.log('front order service updatePage() called');
        return this.http.put<Restaurant>(this.constructFindUpdateDeleteUrl(websiteId, pageId), page);
    }

    deletePage(websiteId, pageId) {
        console.log('front order service deletePage() called');
        return this.http.delete<Restaurant>(this.constructFindUpdateDeleteUrl(websiteId, pageId));
    }
}
