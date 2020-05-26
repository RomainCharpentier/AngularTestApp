import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	secondes: number;
	counterSubscription: Subscription;
	isAuth = false;
	lastUpdate = new Promise((resolve, reject) => {
		const date = new Date();
		setTimeout(
			() => {
				resolve(date);
			}, 2000
		);
	});
	appareils: any[];

	constructor(private appareilService: AppareilService) {
		setTimeout(
			() => {
				this.isAuth = true;
			}, 4000
		);
	}

	ngOnInit() {
		const counter = Observable.interval(1000);
		this.counterSubscription = counter.subscribe(
			(value) => {
				this.secondes = value;
			},
			(error) => {
				console.log('Uh-oh, an error occurred! : ' + error);
			},
			() => {
				console.log('Observable complete!');
			}
		);
	}

	ngOnDestroy() {
		this.counterSubscription.unsubscribe();
	}

	onAllumer() {
		this.appareilService.switchOnAll();
	}

	onEteindre() {
		if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
			this.appareilService.switchOffAll();
		} else {
			return null;
		}
	}
}
