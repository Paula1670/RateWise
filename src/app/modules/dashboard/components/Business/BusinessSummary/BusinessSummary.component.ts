import { Component, Input, OnInit } from '@angular/core';
import { BusinessDTO } from '../../../models/businessDTO';

@Component({
  selector: 'app-BusinessSummary',
  templateUrl: './BusinessSummary.component.html',
  standalone:true
})
export class BusinessSummaryComponent implements OnInit {

  @Input() business: BusinessDTO = <BusinessDTO>{};

  constructor() {

  }
ngOnInit(): void {

}

 // Método para generar la URL del mapa usando las coordenadas

 /*generateMapUrl(latitude: number, longitude: number): string {
  const baseUrl = 'https://www.google.com/maps/embed/v1/view';
  const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Reemplaza con tu clave de API de Google Maps
  return `${baseUrl}?key=${apiKey}&center=${latitude},${longitude}&zoom=14`;
}


    <div class="map mb-5">
      <h3 class="text-muted-foreground text-sm font-bold mb-2">Location</h3>
      <iframe
        [src]="generateMapUrl(business.latitude, business.longitude)"
        class="w-full h-72 border-none"
        title="Map showing the location of {{ business.name }} at {{ business.address }}">
      </iframe>
    </div>


    //addOns
        <div class="categories mb-5">
      <h3 class="text-muted-foreground text-sm font-bold mb-2">Categories</h3>
      <div class="category-chip flex gap-3 justify-center">
        <div class="bg-blue-500 text-white px-4 py-1 rounded-full" *ngFor="let category of business.categories">{{ category }}</div>
      </div>
    </div>

    <div class="hours mb-5">
      <h3 class="text-muted-foreground text-sm font-bold mb-2">Business Hours</h3>
      <div *ngFor="let day of business.hours | keyvalue" class="mb-2">
        <p class="text-gray-600">{{ day.key }}: {{ day.value }}</p>
      </div>
    </div>

    <div class="attributes mb-5">
      <h3 class="text-muted-foreground text-sm font-bold mb-2">Business Attributes</h3>
      <div class="attribute-item flex items-center mb-2" *ngFor="let attribute of business.attributes | keyvalue">
        <i class="attribute-icon text-gray-500 mr-3">{{ attribute.key }}</i>
        <span class="text-gray-700">{{ attribute.value }}</span>
      </div>
    </div>

*/



// Método que simula el comportamiento de mostrar más reseñas
showMoreReviews() {
  console.log('Displaying more reviews...');
  // Aquí podrías implementar la lógica para mostrar más reseñas
}

// Método para llamar al negocio (puedes implementarlo según tus necesidades)
callBusiness() {
  console.log(`Calling business: ${this.business.name}`);
  // Aquí podrías integrar un servicio para hacer una llamada telefónica si lo deseas.
}
}
