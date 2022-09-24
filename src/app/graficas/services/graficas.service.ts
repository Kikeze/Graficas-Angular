import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Preferencia } from 'src/app/graficas/interfaces/gracias.interfaces';


@Injectable({
    providedIn: 'root'
})
export class GraficasService {

    apiUrl: string = "http://localhost:3000";

    constructor(
        private http: HttpClient
    ) {
        // Do nothing
    }

    getPreferencia(): Observable<Preferencia> {
        return this.http.get<Preferencia>(`${this.apiUrl}/grafica`);
    }

}


