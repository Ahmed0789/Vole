import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Observable, catchError, map, of } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  image = '';
  center: google.maps.LatLngLiteral = { lat: 40, lng: -20 };
  zoom = 4;
  apiLoaded!: Observable<boolean>;
  private apikey = 'YAIzaSyCenj05unZdFCTjqMR-qGLqIeljqv0r7Uo';
  constructor(private httpClient: HttpClient) {
    this.apiLoaded = this.httpClient
      .jsonp(
        'https://maps.googleapis.com/maps/api/js?key=' + this.apikey,
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      source: CameraSource.Prompt,
      resultType: CameraResultType.Base64,
    });
    if (image) {
      this.image = `data:image/jpeg;base64,${image.base64String}`!;
    }
  }
}
