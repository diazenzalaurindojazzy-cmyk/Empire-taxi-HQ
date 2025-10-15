export interface User {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  wallet_balance: number;
  points: number;
  preferred_payment: string;
  created_at: string;
}

export interface Ride {
  id: string;
  user_id: string;
  driver_id: string;
  origin: Location;
  destination: Location;
  status: RideStatus;
  fare_estimate: number;
  fare_final: number;
  payment_method: string;
  nps_score: number | null;
  nps_comment: string | null;
  created_at: string;
  driver?: Driver;
  vehicle_type: VehicleType;
}

export interface Driver {
    id: string;
    name: string;
    photoUrl: string;
    plate: string;
    carModel: string;
    rating: number;
}

export interface Location {
    address: string;
    lat: number;
    lng: number;
}

export enum RideStatus {
    REQUESTED = "requested",
    ACCEPTED = "accepted",
    IN_PROGRESS = "in_progress",
    COMPLETED = "completed",
    CANCELLED = "cancelled",
}

export enum AppState {
    LOGGED_OUT = 'LOGGED_OUT',
    HOME = 'HOME',
    REQUESTING_RIDE = 'REQUESTING_RIDE',
    RIDE_IN_PROGRESS = 'RIDE_IN_PROGRESS',
    RIDE_SUMMARY = 'RIDE_SUMMARY'
}

export enum VehicleType {
    ECONOMICO = 'Económico',
    EXECUTIVO = 'Executivo',
    HIACE = 'Hiace para 7/14',
    MOTOTAXI = 'Mototáxi'
}

export interface Payment {
    id: string;
    ride_id: string;
    method: string;
    amount: number;
    status: 'paid' | 'pending' | 'failed';
    timestamp: string;
}

export type Language = 'pt' | 'en' | 'umb' | 'kim' | 'kik';

export type TranslationKeys = {
    [key: string]: string;
};

export type Translations = {
    [lang in Language]: TranslationKeys;
};
