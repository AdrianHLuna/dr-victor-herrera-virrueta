export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  procedure: string;
  timeframe: string;
  achievement?: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  sourceUrl: string;
}

export const testimonials: Testimonial[] = [];
