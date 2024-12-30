export interface BusinessDTO {
  businessId: string; // Unique string identifier for the business
  name: string; // Name of the business
  address: string; // Full address
  city: string; // City where the business is located
  state: string; // 2-character state code
  postalCode: string; // Postal code
  latitude: number; // Latitude
  longitude: number; // Longitude
  stars: number; // Star rating (rounded to half-stars)
  reviewCount: number; // Number of reviews
  isOpen: string; // true if open, false if closed
  attributes: BusinessAttributesDTO; // Additional business attributes
  categories: string[]; // List of categories
  hours: Record<string, string>; // Hours mapped by day
}

export interface BusinessAttributesDTO {
  RestaurantsTakeOut: boolean; // If takeout is available
  BusinessParking: BusinessParkingDTO; // Parking details
}

export interface BusinessParkingDTO {
  garage: boolean; // If garage parking is available
  street: boolean; // If street parking is available
  validated: boolean; // If parking is validated
  lot: boolean; // If lot parking is available
  valet: boolean; // If valet parking is available
}
