/**
 * Interfaz que define la estructura de los pesos de un gato.
 */
export interface Weight {
  imperial: string; // Peso en el sistema imperial (libras)
  metric: string;   // Peso en el sistema métrico (kilogramos)
}

/**
 * Interfaz que define la estructura de una imagen de gato.
 */
export interface CatImage {
  id: string;           // ID de la imagen
  url: string;          // URL de la imagen
  breeds: DetailsCat[]; // Array de objetos DetailsCat asociados con la imagen
  width: number;        // Ancho de la imagen en píxeles
  height: number;       // Altura de la imagen en píxeles
}

/**
 * Interfaz que define la estructura de los detalles de un gato.
 */
export interface DetailsCat {
  weight?: Weight;                // Peso del gato
  id?: string;                    // ID del gato
  name?: string;                  // Nombre del gato
  cfa_url?: string;               // URL de la Cat Fanciers' Association (CFA)
  vetstreet_url?: string;         // URL de Vetstreet
  vcahospitals_url?: string;      // URL de los hospitales de VCA
  temperament?: string;           // Temperamento del gato
  origin?: string;                // Origen del gato
  country_codes?: string;         // Códigos de país del gato
  country_code?: string;          // Código de país del gato
  description?: string;           // Descripción del gato
  life_span?: string;             // Esperanza de vida del gato
  indoor?: number;                // Nivel de adaptabilidad para vivir en interiores
  lap?: number;                   // Nivel de afecto hacia los humanos
  alt_names?: string;             // Otros nombres del gato
  adaptability?: number;          // Nivel de adaptabilidad del gato
  affection_level?: number;       // Nivel de afecto del gato hacia los humanos
  child_friendly?: number;        // Nivel de amistad con los niños
  dog_friendly?: number;          // Nivel de amistad con los perros
  energy_level?: number;          // Nivel de energía del gato
  grooming?: number;              // Nivel de cuidado del pelaje
  health_issues?: number;         // Nivel de problemas de salud
  intelligence?: number;          // Nivel de inteligencia del gato
  shedding_level?: number;        // Nivel de muda del gato
  social_needs?: number;          // Nivel de necesidades sociales
  stranger_friendly?: number;     // Nivel de amistad con extraños
  vocalisation?: number;          // Nivel de vocalización del gato
  experimental?: number;          // Si la raza es experimental
  hairless?: number;              // Si el gato es sin pelo
  natural?: number;               // Si el gato es de raza natural
  rare?: number;                  // Si la raza es rara
  rex?: number;                   // Si la raza es rex
  suppressed_tail?: number;       // Si la raza tiene cola suprimida
  short_legs?: number;            // Si la raza tiene patas cortas
  wikipedia_url?: string;         // URL de Wikipedia
  hypoallergenic?: number;        // Si la raza es hipoalergénica
  reference_image_id?: string;    // ID de la imagen de referencia del gato
  image?: string;                // URL de la imagen del gato (propiedad opcional)
}
