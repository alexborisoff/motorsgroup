export interface Car {
   id: string;
   photo?: string;
   brand: string;
   model: string;
   country: string;
   confiquration?: string;
   transmission?: string;
   drive?: string;
   engine?: string;
   mileage: number;
   year?: number;
   price: number;
   discount?: number;
   status?: 'В наличии' | 'Нет в наличии';
   bodyType?: string;
   color: string;
   engineVolume: number;
}

export interface FilterState {
   brand: string;
   country: string;
   minPrice: number;
}
