import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';

@Injectable()
export class SearchDropdownService {

    constructor(
        private http: Http
    ) { }

    searchForMovie(name, apiKey) {
        return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&query=' + name + '&sort_by=popularity.desc', {}).map(res => res.json());
    }

}

