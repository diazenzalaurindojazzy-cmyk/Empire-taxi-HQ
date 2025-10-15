import React, { useContext } from 'react';
import { Ride, RideStatus, VehicleType } from '../types';
import { LocalizationContext } from '../App';

const mockHistory: Ride[] = [
    {
        id: 'ride-1',
        user_id: 'user-123',
        driver_id: 'driver-007',
        origin: { address: 'Lubango, Centro', lat: 0, lng: 0 },
        destination: { address: 'Aeroporto da Huíla', lat: 0, lng: 0 },
        status: RideStatus.COMPLETED,
        fare_final: 2500,
        fare_estimate: 2400,
        payment_method: 'Dinheiro',
        nps_score: 10,
        nps_comment: 'Excelente!',
        created_at: '2023-10-26T10:00:00Z',
        vehicle_type: VehicleType.EXECUTIVO,
    },
    {
        id: 'ride-2',
        user_id: 'user-123',
        driver_id: 'driver-008',
        origin: { address: 'Cristo Rei', lat: 0, lng: 0 },
        destination: { address: 'Serra da Leba', lat: 0, lng: 0 },
        status: RideStatus.COMPLETED,
        fare_final: 1650,
        fare_estimate: 1600,
        payment_method: 'Multicaixa',
        nps_score: 8,
        nps_comment: null,
        created_at: '2023-10-25T18:30:00Z',
        vehicle_type: VehicleType.ECONOMICO,
    }
];

const HistoryScreen: React.FC = () => {
    const { t } = useContext(LocalizationContext);
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-yellow-400 mb-4">{t('nav_history')}</h1>
            <div className="space-y-4">
                {mockHistory.map(ride => (
                    <div key={ride.id} className="bg-gray-800 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                            <span className="font-bold">{new Date(ride.created_at).toLocaleDateString('pt-AO')}</span>
                            <span className="text-yellow-400 font-bold">
                                {new Intl.NumberFormat('pt-AO', { style: 'currency', currency: 'AOA' }).format(ride.fare_final)}
                            </span>
                        </div>
                        <p className="text-gray-300 mt-2">{ride.origin.address} &rarr; {ride.destination.address}</p>
                        <div className="flex justify-between items-center mt-2 text-sm text-gray-400">
                           <span>{ride.vehicle_type}</span>
                           <button className="font-semibold text-yellow-400 hover:underline">Ver Fatura PDF</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HistoryScreen;
