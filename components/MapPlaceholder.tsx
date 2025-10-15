
import React from 'react';
import { LocationMarkerIcon } from './Icons';

interface MapPlaceholderProps {
  className?: string;
  showCar?: boolean;
}

const MapPlaceholder: React.FC<MapPlaceholderProps> = ({ className, showCar = false }) => {
  return (
    <div className={`relative bg-gray-700 w-full h-full overflow-hidden ${className}`}>
      <img 
        src="https://picsum.photos/800/600?grayscale" 
        alt="Map background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
            <LocationMarkerIcon className="w-12 h-12 text-yellow-400 mx-auto" />
            <p className="text-gray-300 font-semibold mt-2">Mapa Interativo</p>
        </div>
      </div>
       {showCar && (
        <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-8 animate-pulse">
            <span className="text-3xl">🚖</span>
        </div>
       )}
    </div>
  );
};

export default MapPlaceholder;
