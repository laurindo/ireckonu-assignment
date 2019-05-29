import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Profile } from './profile.model'

import { environment } from '../../environments/environment';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient
            // ,private notificationService:NotificationService
            // ,private loading: LoadingService
            ) {}

    findProfiles(): Observable<Profile[]> {  
        return this.http.get<Profile[]>(`${environment.base}/Data.json`)
            
    }
}