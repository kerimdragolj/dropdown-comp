import { Component, OnInit } from '@angular/core';
import { SearchDropdownService } from '../../services/search-dropdown.service';

@Component({
    selector: 'search-dropdown',
    templateUrl: './search-dropdown.component.html',
    styleUrls: ['./search-dropdown.component.scss']
})
export class SearchDropdownComponent implements OnInit {
    movieInput: string = '';
    movies: any[] = [];
    isSearching: boolean = false;
    apiKey: string = '2638b020571c78301f92e4a1b01150da';

    constructor(
        private searchDropdownService: SearchDropdownService
    ) { }

    ngOnInit() { }

    async searchForMovies() {
        if(this.movieInput) {
            this.isSearching = true;
            await this.searchDropdownService.searchForMovie(this.movieInput, this.apiKey).subscribe(res => {
                this.movies = res.results;
            }, err => {
                console.log('Search error: ' + err);
            })
        }
    }
}
