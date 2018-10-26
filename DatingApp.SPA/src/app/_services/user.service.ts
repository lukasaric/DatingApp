import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';


@Injectable()
export class UserService {
    baseurl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User []>(this.baseurl + 'users');
    }

    getUser(id): Observable<User> {
        return this.http.get<User>(this.baseurl + 'users/' + id);
    }

}
