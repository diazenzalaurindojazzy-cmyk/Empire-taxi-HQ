import React, { useContext, useEffect, useState } from 'react';
import { AppContext, LocalizationContext } from '../App';
import { AppState, RideStatus, Driver } from '../types';
import MapPlaceholder from '../components/MapPlaceholder';
import { ChatIcon, PhoneIcon, ShareIcon, SosIcon, StarIcon, ShieldCheckIcon } from '../components/Icons';

const MOCK_DRIVER: Driver = {
    id: 'driver-007',
    name: 'Carlos Santos',
    photoUrl: 'https://i.pravatar.cc/150?u=driver007',
    plate: 'HL-01-23-AB',
    carModel: 'Toyota Corolla',
    rating: 4.9,
};

const RideScreen: React.FC = () => {
    const { currentRide, setCurrentRide, setAppState } = useContext(AppContext);
    const { t } = useContext(LocalizationContext);
    const [eta, setEta] = useState(5);

    useEffect(() => {
        if (currentRide?.status === RideStatus.REQUESTED) {
            // Simulate finding a driver
            const timer = setTimeout(() => {
                setCurrentRide({ ...currentRide, status: RideStatus.ACCEPTED, driver: MOCK_DRIVER });
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [currentRide, setCurrentRide]);

    useEffect(() => {
        if (currentRide?.status === RideStatus.ACCEPTED) {
            // Simulate driver arriving
             const interval = setInterval(() => {
                setEta(prev => {
                    if (prev > 1) return prev - 1;
                    clearInterval(interval);
                    setCurrentRide({ ...currentRide, status: RideStatus.IN_PROGRESS });
                    return 0;
                });
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [currentRide, setCurrentRide]);
    
    useEffect(() => {
        if (currentRide?.status === RideStatus.IN_PROGRESS) {
             // Simulate trip completion
            const timer = setTimeout(() => {
                if(!currentRide) return;
                const finalRide = {
                    ...currentRide,
                    status: RideStatus.COMPLETED,
                    fare_final: currentRide.fare_estimate * 1.05 // small variation
                }
                setCurrentRide(finalRide);
                setAppState(AppState.RIDE_SUMMARY);
            }, 10000); // 10 second ride
             return () => clearTimeout(timer);
        }
    }, [currentRide, setCurrentRide, setAppState]);

    const getStatusMessage = () => {
        switch (currentRide?.status) {
            case RideStatus.REQUESTED:
                return t('finding_driver');
            case RideStatus.ACCEPTED:
                return `${t('driver_arriving_in')} ${eta} ${t('minutes')}`;
            case RideStatus.IN_PROGRESS:
                return t('trip_in_progress');
            default:
                return t('loading');
        }
    };
    
    if (!currentRide) return null;

    return (
        <div className="h-full flex flex-col bg-gray-900">
            <div className="flex-grow relative">
                <MapPlaceholder showCar={true} />
                 <div className="absolute top-4 left-4 right-4 bg-gray-900/80 backdrop-blur-sm p-3 rounded-lg text-center">
                    <p className="text-lg font-bold text-yellow-400">{getStatusMessage()}</p>
                    {currentRide.status === RideStatus.IN_PROGRESS && <p className="text-sm text-gray-300">{t('destination')}: {currentRide.destination.address}</p>}
                </div>
            </div>
            {currentRide.status === RideStatus.REQUESTED && (
                <div className="p-4 text-center">
                    <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <p className="mt-4 text-gray-300">{t('finding_driver')}</p>
                </div>
            )}
            {currentRide.driver && (currentRide.status === RideStatus.ACCEPTED || currentRide.status === RideStatus.IN_PROGRESS) && (
                <div className="p-4 bg-gray-800 rounded-t-2xl">
                    <div className="flex items-center">
                        <img src={currentRide.driver.photoUrl} alt={currentRide.driver.name} className="w-16 h-16 rounded-full border-2 border-yellow-400"/>
                        <div className="ml-4 flex-grow">
                            <div className="flex items-center gap-2">
                                <h2 className="text-xl font-bold">{currentRide.driver.name}</h2>
                                <div className="flex items-center text-green-400" title={t('verified_driver')}>
                                    <ShieldCheckIcon className="w-5 h-5" />
                                </div>
                            </div>
                            <p className="text-gray-400">{currentRide.driver.carModel} &middot; {currentRide.driver.plate}</p>
                        </div>
                        <div className="flex items-center bg-gray-700 px-2 py-1 rounded-full">
                            <StarIcon className="w-4 h-4 text-yellow-400 mr-1"/>
                            <span className="font-bold">{currentRide.driver.rating}</span>
                        </div>
                    </div>
                     <div className="grid grid-cols-4 gap-4 text-center mt-6">
                        <button className="flex flex-col items-center text-gray-300 hover:text-yellow-400">
                            <ChatIcon className="w-8 h-8"/>
                            <span className="text-xs mt-1">Chat</span>
                        </button>
                        <button className="flex flex-col items-center text-gray-300 hover:text-yellow-400">
                            <PhoneIcon className="w-8 h-8"/>
                            <span className="text-xs mt-1">Ligar</span>
                        </button>
                        <button className="flex flex-col items-center text-gray-300 hover:text-yellow-400">
                            <ShareIcon className="w-8 h-8"/>
                            <span className="text-xs mt-1">Partilhar</span>
                        </button>
                         <button className="flex flex-col items-center text-red-500 hover:text-red-400">
                            <SosIcon className="w-8 h-8"/>
                            <span className="text-xs mt-1">SOS</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RideScreen;
