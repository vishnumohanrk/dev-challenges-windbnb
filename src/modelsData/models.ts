export interface IStayData {
  city: string;
  country: string;
  superHost: boolean;
  title: string;
  rating: number;
  maxGuests: number;
  type: string;
  beds: number;
  photo: string;
}

export type TCityName = 'Helsinki, Finland' | 'Turku, Finland' | 'Vaasa, Finland' | 'Oulu, Finland';

export type TSetCity = (value: TCityName) => void;
