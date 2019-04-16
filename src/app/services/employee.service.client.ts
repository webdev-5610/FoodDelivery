import {HttpClient} from "@angular/common/http";
import {SharedService} from "./shared.service";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {Employee} from "../model/employee.client.model";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";
@Injectable()
export class EmployeeService {

constructor(private _http: HttpClient, private sharedService: SharedService, private router: Router){}
baseUrl = environment.baseUrl;
options = {withCredentials: false};

createEmployee(employee: Employee) {
    return this._http.post(this.baseUrl + '/api/employee', employee);
}

findEmployeeById(employeeId: String) {
    return this._http.get(this.baseUrl + '/api/employee/' + employeeId);
}

findEmployeeByUsername(username: String) {
    return this._http.get(this.baseUrl + '/api/employee?username=' + username);
}

findEmployeeByCredentials(username: String, password: String) {
    return this._http.get<Employee>(this.baseUrl + '/api/employee?username=' + username + '&password=' + password);
}

updateEmployee(employeeId: String, employee: Employee) {
    return this._http.put(this.baseUrl + '/api/employee/' + employeeId, employee);
}

deleteEmployee(employeeId: String) {
    return this._http.delete(this.baseUrl + '/api/employee/' + employeeId);
}

login(username: String, password: String) {
    this.options.withCredentials = true; // jga

    const body = {
        username: username,
        password: password
    };

    return this._http.post(this.baseUrl + '/api/login', body, this.options);
}

logout() {
    this.options.withCredentials = true;
    return this._http
        .post(this.baseUrl + '/api/logout', '', this.options);
}

register(username: String, password: String) {
    this.options.withCredentials = true;
    const employee = {username: username, password: password};
    return this._http
        .post(this.baseUrl + '/api/register', employee, this.options);
}

loggedIn() {
    return this._http
        .post(this.baseUrl + '/api/loggedin', '', this.options)
        .pipe(
            map((employee) => {
                    if (employee !== 0) {
                        this.sharedService.user = employee;
                        return true;
                    } else {
                        this.router.navigate(['/login']);
                        return false;
                    }
                }
            ));
}
}
