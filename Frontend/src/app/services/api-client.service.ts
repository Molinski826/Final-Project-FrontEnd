import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
	loggedOutError:EventEmitter<string> = new EventEmitter<string>();
	constructor(private http:HttpClient) { }

	get<T>(path: string) : Observable<T> {
		return this.http.get<T>(path, {withCredentials: true}).pipe(catchError((e, o) => {
			if (e.status == HttpStatusCode.Unauthorized) {
				this.loggedOutError.emit(path);
				return of();
			}
			throw e;
		}));
	}

	post(path: string, body: any) : Observable<Object> {
		return this.http.post(path, body, {withCredentials: true}).pipe(catchError((e, o) => {
			if (e.status == HttpStatusCode.Unauthorized) {
				this.loggedOutError.emit(path);
				return of();
			}
			throw e;
		}));
	}

	put<T>(path: string, body: any) : Observable<T> {
		return this.http.put<T>(path, body, {withCredentials: true}).pipe(catchError((e, o) => {
			if (e.status == HttpStatusCode.Unauthorized) {
				this.loggedOutError.emit(path);
				return of();
			}
			throw e;
		}));
	}

	delete(path: string) : Observable<Object> {
		return this.http.delete(path, {withCredentials: true}).pipe(catchError((e, o) => {
			if (e.status == HttpStatusCode.Unauthorized) {
				this.loggedOutError.emit(path);
				return of();
			}
			throw e;
		}));
	}
}
