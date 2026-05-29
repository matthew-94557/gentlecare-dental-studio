export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  priceEstimate?: string;
  benefits: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number;
  avatarUrl: string;
}

export interface BookingSubmission {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  preferredTime: string;
  notes?: string;
  status: 'PENDING' | 'CONFIRMED';
  submittedAt: string;
}
