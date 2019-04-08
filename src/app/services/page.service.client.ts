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
    pageApiUrl = '/api/page/';
    websiteApiUrl = '/api/website/';

    constructor(private http: HttpClient) { }
    constructFindUpdateDeleteUrl(websiteId, pageId) {
        return this.baseUrl + this.websiteApiUrl + websiteId + '/page/' + pageId;
    }

    createPage(page, websiteId) {
        console.log('front page service createPage() called');
        return this.http.post<Restaurant>(
            this.baseUrl + this.websiteApiUrl + websiteId + '/page',
            page);
    }

    findPageByWebsiteId(websiteId): Observable<Restaurant[]> {
        console.log('front page service findPageByWebsite() called');
        return this.http.get<Restaurant[]>(this.baseUrl + this.websiteApiUrl + websiteId + '/page');

    }



    findPageById(websiteId, pageId) {
        console.log('front page service findpageById() called');
        // Only need to call server's url to get the data.
        // '/api/website/:websiteId/page/:pageId'
        return this.http.get<Restaurant>(this.constructFindUpdateDeleteUrl(websiteId, pageId));
    }

    updatePage(websiteId, pageId, page) {
        console.log('front page service updatePage() called');
        return this.http.put<Restaurant>(this.constructFindUpdateDeleteUrl(websiteId, pageId), page);
    }

    deletePage(websiteId, pageId) {
        console.log('front page service deletePage() called');
        return this.http.delete<Restaurant>(this.constructFindUpdateDeleteUrl(websiteId, pageId));
    }
}
