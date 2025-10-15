import React, { useState, useContext, useCallback, useEffect } from 'react';
import { AppContext, LocalizationContext } from '../App';
import { AppState, VehicleType, RideStatus } from '../types';
import MapPlaceholder from '../components/MapPlaceholder';
import { CarIcon, LuxuryCarIcon, VanIcon, MotorcycleIcon, LocationMarkerIcon } from '../components/Icons';

const vehicleOptions = [
    { type: VehicleType.ECONOMICO, icon: <CarIcon className="w-8 h-8"/>, eta: '5 min', price: 1500 },
    { type: VehicleType.EXECUTIVO, icon: <LuxuryCarIcon className="w-8 h-8"/>, eta: '8 min', price: 2500 },
    { type: VehicleType.HIACE, icon: <VanIcon className="w-8 h-8"/>, eta: '10 min', price: 3500 },
    { type: VehicleType.MOTOTAXI, icon: <MotorcycleIcon className="w-8 h-8"/>, eta: '3 min', price: 750 },
];

const huilaSuggestions = [
    'Centro do Lubango',
    'Cristo Rei',
    'Serra da Leba',
    'Tundavala',
    'Aeroporto'
];

const HomeScreen: React.FC = () => {
    const { user, setAppState, setCurrentRide, isOffline, setNotification } = useContext(AppContext);
    const { t } = useContext(LocalizationContext);
    const [destination, setDestination] = useState('');
    const [selectedVehicle, setSelectedVehicle] = useState<VehicleType>(VehicleType.ECONOMICO);
    const [aiSuggestion, setAiSuggestion] = useState<string | null>(null);
    const [showNewUserBonus, setShowNewUserBonus] = useState(true);

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour >= 7 && hour <= 9) {
            setAiSuggestion(t('ai_suggestion_work'));
        } else if (hour >= 17 && hour <= 19) {
            setAiSuggestion(t('ai_suggestion_home'));
        }
    }, [t]);

    const handleConfirmRide = useCallback(() => {
        if (!destination || !user) return;
        
        if (isOffline) {
            setNotification(t('offline_ride_queued'));
            // In a real app, this would be saved to local storage
            console.log('Offline ride queued:', { destination, vehicle: selectedVehicle });
            setDestination('');
            return;
        }

        setAppState(AppState.REQUESTING_RIDE);
        const rideDetails = {
            id: `ride-${Date.now()}`,
            user_id: user.id,
            driver_id: '',
            origin: { address: 'Lubango, Huíla', lat: -14.9172, lng: 13.4925 },
            destination: { address: destination, lat: -14.9, lng: 13.5 },
            status: RideStatus.REQUESTED,
            fare_estimate: vehicleOptions.find(v => v.type === selectedVehicle)?.price || 0,
            fare_final: 0,
            payment_method: user.preferred_payment,
            nps_score: null,
            nps_comment: null,
            created_at: new Date().toISOString(),
            vehicle_type: selectedVehicle,
        };
        setCurrentRide(rideDetails);
    }, [destination, user, selectedVehicle, setAppState, setCurrentRide, isOffline, setNotification, t]);

    return (
        <div className="h-full flex flex-col">
            <div className="flex-grow relative">
                <MapPlaceholder />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900/80 backdrop-blur-sm rounded-t-2xl">
                {showNewUserBonus && (
                    <div className="bg-yellow-500/20 border border-yellow-500 text-yellow-300 text-sm p-3 rounded-lg mb-4 text-center">
                        <button onClick={() => setShowNewUserBonus(false)} className="float-right font-bold">X</button>
                        {t('new_customer_bonus')}
                    </div>
                )}
                
                {aiSuggestion && (
                    <button 
                        onClick={() => setDestination('Centro da Cidade, Lubango')}
                        className="w-full bg-gray-700 text-yellow-400 font-semibold py-2 px-4 rounded-lg mb-4 text-left"
                    >
                        💡 {aiSuggestion}
                    </button>
                )}
                
                <div className="relative">
                     <LocationMarkerIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        placeholder={t('where_to')}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pr-4 pl-10 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    />
                </div>
                
                <div className="flex flex-wrap gap-2 my-4">
                    {huilaSuggestions.map(s => (
                        <button key={s} onClick={() => setDestination(s)} className="bg-gray-700 text-white text-sm py-1 px-3 rounded-full hover:bg-gray-600">
                            {s}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-4 gap-2 my-4">
                    {vehicleOptions.map((v) => (
                        <button
                            key={v.type}
                            onClick={() => setSelectedVehicle(v.type)}
                            className={`p-2 flex flex-col items-center rounded-lg transition-colors ${selectedVehicle === v.type ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-white'}`}
                        >
                            {v.icon}
                            <span className="text-xs font-bold mt-1 text-center">{v.type}</span>
                            <span className="text-xs">{v.eta}</span>
                        </button>
                    ))}
                </div>

                <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold">{t('estimated_total')}</span>
                    <span className="text-lg font-bold text-yellow-400">
                        {new Intl.NumberFormat('pt-AO', { style: 'currency', currency: 'AOA' }).format(vehicleOptions.find(v => v.type === selectedVehicle)?.price || 0)}
                    </span>
                </div>
                
                {isOffline && <p className="text-center text-yellow-400 text-sm mb-2">{t('offline_mode_active')}</p>}

                <button
                    onClick={handleConfirmRide}
                    disabled={!destination}
                    className="w-full bg-yellow-400 text-gray-900 font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
                >
                    {t('confirm_ride')}
                </button>
            </div>
        </div>
    );
};

export default HomeScreen;
