import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RandomService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private randomUrl = 'api/random';  // URL to web api

    constructor(private http: Http) { }

    getAll(): Promise<String[]> {
        //return ['a', 'b', 'c'];
        return this.http.get(this.randomUrl)
            .toPromise()
            .then(response => response.json() as String[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}