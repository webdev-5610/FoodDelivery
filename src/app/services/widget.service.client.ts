import {Injectable} from '@angular/core';
import {WidgetClientModel} from 'src/app/model/widget.client.model';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class WidgetService {

    baseUrl = environment.baseUrl;
    widgetApiUrl = '/api/widget/';
    pageApiUrl = '/api/page/';

    constructor(private http: HttpClient) { }
    constructFindUpdateDeleteUrl(pageId, widgetId) {
        return this.baseUrl + this.pageApiUrl + pageId + '/widget/' + widgetId;
    }

    createWidget(widget, pageId) {
        console.log('front widget service createWidget() called');
        return this.http.post<WidgetClientModel>(
            this.baseUrl + this.pageApiUrl + pageId + '/widget',
            widget);
    }

    findWidgetsByPage(pageId): Observable<WidgetClientModel[]> {
        console.log('front widget service findWidgetByPage() called');
        return this.http.get<WidgetClientModel[]>(this.baseUrl + this.pageApiUrl + pageId + '/widget');

    }
    findWidgetById(pageId, widgetId) {
        console.log('front widget service findwidgetById() called');
        // Only need to call server's url to get the data.
        return this.http.get<WidgetClientModel>(this.constructFindUpdateDeleteUrl(pageId, widgetId));

    }
    updateWidget(pageId, widgetId, widget) {
        console.log('front widget service updateWidget() called');
        return this.http.put<WidgetClientModel>(this.constructFindUpdateDeleteUrl(pageId, widgetId), widget);
    }

    deleteWidget(pageId, widgetId) {
        console.log('front widget service deleteWidget() called');
        return this.http.delete<WidgetClientModel>(this.constructFindUpdateDeleteUrl(pageId, widgetId));
    }

    reorderWidgets(startIndex: Number, endIndex: Number, pageId, widgets): Observable<WidgetClientModel[]> {
        console.log('front widget service reorder Widget() called');
        return this.http.put<WidgetClientModel[]>(this.baseUrl + this.pageApiUrl + pageId +
            '/widget?initial=' + startIndex +
            '&final=' + endIndex, widgets);

    }
}
