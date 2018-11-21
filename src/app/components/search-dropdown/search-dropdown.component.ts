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
    apiKey: string = '2638b020571c78301f92e4a1b01150da';
    position: number = -1;

    constructor(
        private searchDropdownService: SearchDropdownService
    ) { }

    ngOnInit() { }

    async searchForMovies() {
        if(this.movieInput) {
            await this.searchDropdownService.searchForMovie(this.movieInput, this.apiKey).subscribe(res => {
                this.movies = res.results;
                this.position = -1;
            }, err => {
                console.log('Search error: ' + err);
            })
        }
    }

    focusMovie(e) {
        e.preventDefault();
        let focused = document.getElementById('focus');
        if (e.keyCode == 38) { //arrow up
            if(this.position > 0) {
                if(focused) {
                    focused.id = '';
                }
                this.position--;
            }
        } else if(e.keyCode == 40) { //arrow down
            if(this.position < this.movies.length - 1) {
                if(focused) {
                    focused.id = '';
                }
                this.position++;
            }
        } else if(e.keyCode == 13) { //enter
            if(focused) {
                this.movieInput = focused.innerHTML.trim();
                this.movies = [];
            }
        }
        
        let newFocused = document.getElementsByClassName('dropdown')[0].children[this.position];
        if(newFocused) {
            newFocused.id = 'focus';
            newFocused.parentElement.scrollTo(0, 30 * (this.position - 10));
        }
        
    }
    
}
