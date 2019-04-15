import {User} from '../model/user.client.model';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {SharedService} from './shared.service';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient, private router: Router, private sharedService: SharedService) {
    }
    options = {
        withCredentials: true
    };
    // api = {
    //     createUser: this.createUser,
    //     findUserById: this.findUserById,
    //     findUserByUsername: this.findUserByUserName,
    //     findUserByCredentials: this.findUserByCredentials,
    //     updateUser: this.updateUser,
    //     deleteUser: this.deleteUser
    // };

    baseUrl = environment.baseUrl;
    userApiUrl = '/api/user';

    createUser(user): Observable<User> {
        console.log('front service createUser() called');
        return this.http.post<User>(this.baseUrl + this.userApiUrl, user);
    }

    findUserById(userId): Observable<User> {
        console.log('front service findUserById() called');
        return this.http.get<User>(this.baseUrl + this.userApiUrl + '/' + userId);
    }

    findUserByUserName(userName): Observable<User> {
        console.log('front service findUserByUserName() called');
        return this.http.get<User>(this.baseUrl + this.userApiUrl + '?name=' + userName);
    }
    //
    // findUserByCredentials(userName, password): Observable<User> {
    //     console.log('front service findUserByCredentials() called');
    //     return this.http.get<User>(this.baseUrl + this.userApiUrl + '?name=' + userName + '&password=' + password);
    // }
    register(username: String, password: String) {
        this.options.withCredentials = true;
        const user = {
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + '/api/register', user, this.options)
            .map(
                (res: Response) => {
                    return res;
                }
            );
    }

    login(username: String, password: String) {
        console.log('front user service login() called');
        this.options.withCredentials = true;
        const body = {
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + '/api/login', body, this.options).map(
            (res: Response) => {
                console.log('Inside login() response, res is ' + res);
                return res;
            });
    }

    logout() {
        return this.http.post(this.baseUrl + '/api/logout', '', this.options).map(
            (res: Response) => {
                return res;
            });
    }

    loggedIn() {
        return this.http.get(this.baseUrl + '/api/loggedIn', this.options)
            .pipe()
            .map((res: Response) => {
                const user = JSON.stringify(res);
                console.log('Inside loggedIn(), the user is ' + user);
                if (user !== '0') {
                    // console.log('Inside loggedIn(), the user is ' + user);
                    console.log(this.sharedService);
                    this.sharedService.user = user; // setting user so as to share with all components
                    return true;
                } else {
                    this.router.navigate(['/login']);
                    return false;
                }
            });
    }

    updateUser(userId, user): Observable<User> {
        console.log('front service updateUser() called');
        return this.http.put<User>(this.baseUrl + this.userApiUrl + '/' + userId, user);
    }

    deleteUser(userId) {
        console.log('front service deleteUser() called');
        return this.http.delete<User>(this.baseUrl + this.userApiUrl + '/' + userId);
    }


}
