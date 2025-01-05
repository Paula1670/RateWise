export interface ReviewsDTO {
  reviewId: string;       // Identificador único de la reseña
  userId: string;         // Identificador único del usuario
  businessId: string;     // Identificador único del negocio
  stars: number;          // Calificación por estrellas
  date: string;           // Fecha de la reseña en formato YYYY-MM-DD
  text: string;           // Contenido de la reseña
  useful: number;         // Número de votos útiles
  funny: number;          // Número de votos graciosos
  cool: number;           // Número de votos geniales
}
