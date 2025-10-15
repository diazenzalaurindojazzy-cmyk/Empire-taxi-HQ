import React from 'react';

export const CarIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"></path></svg>
);

export const LuxuryCarIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M5,6H19A2,2 0 0,1 21,8V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V8A2,2 0 0,1 5,6M5,8V12H19V8H5M5,19H19V14H5V19M6.5,15.5A1.5,1.5 0 0,1 8,17A1.5,1.5 0 0,1 6.5,18.5A1.5,1.5 0 0,1 5,17A1.5,1.5 0 0,1 6.5,15.5M17.5,15.5A1.5,1.5 0 0,1 19,17A1.5,1.5 0 0,1 17.5,18.5A1.5,1.5 0 0,1 16,17A1.5,1.5 0 0,1 17.5,15.5Z"></path></svg>
);

export const VanIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18,18H6A1,1 0 0,1 5,17V8C5,7.33 5.4,6.76 6,6.4L11,3.46C11.6,3.06 12.4,3.06 13,3.46L18,6.4C18.6,6.76 19,7.33 19,8V17A1,1 0 0,1 18,18M7.5,17C8.33,17 9,16.33 9,15.5C9,14.67 8.33,14 7.5,14C6.67,14 6,14.67 6,15.5C6,16.33 6.67,17 7.5,17M16.5,17C17.33,17 18,16.33 18,15.5C18,14.67 17.33,14 16.5,14C15.67,14 15,14.67 15,15.5C15,16.33 15.67,17 16.5,17M17,11H7V7H17V11Z"></path></svg>
);

export const MotorcycleIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M19.43 12.2A2.5 2.5 0 0 0 17 11H9.86L10.3 9.3l2.45-.62c.38-.1.62-.46.52-.84s-.46-.62-.84-.52L9.4 8.78c-.29.07-.52.32-.57.62l-1 5A1 1 0 0 0 9 15.5h2.55l-1.38 2.76c-.23.46-.02.94.44 1.16.46.23.94-.02 1.16-.44l2-4c.14-.28.14-.6 0-.88L12.8 12h4.2c.6 0 1.14-.42 1.25-1.03l.83-4.16c.1-.5-.22-1-.75-1s-1 .22-1 .75L16.5 10h-2.34l-.42-1.25c.8-.46 1.26-1.42 1.26-2.5 0-1.79-1.45-3.25-3.25-3.25S8.5 4.46 8.5 6.25c0 .91.36 1.73.94 2.32L5.8 10.27A3.012 3.012 0 0 0 3 13v3c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-2h.14a3.003 3.003 0 0 0 2.89 3.84L9 19.34c-.66 1.33.11 2.85 1.44 3.51.35.17.72.25 1.08.25.96 0 1.87-.58 2.27-1.49l1.27-2.93H17a2.5 2.5 0 0 0 2.43-2.2zM7.5 12.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5-6.25c.69 0 1.25.56 1.25 1.25S12.69 8.75 12 8.75s-1.25-.56-1.25-1.25S11.31 6.25 12 6.25z"></path></svg>
);

export const HomeIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
);

export const HistoryIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></svg>
);

export const WalletIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>
);

export const ProfileIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
);

export const StarIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
);

export const LocationMarkerIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
);

export const ChatIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path></svg>
);

export const PhoneIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.02.74-.25 1.02l-2.2 2.2z"></path></svg>
);

export const ShareIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 8.81C7.5 8.31 6.79 8 6 8c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z"></path></svg>
);

export const SosIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z"></path></svg>
);

export const ShieldCheckIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 1.944c-1.662.001-3.32.324-4.887.94l-.32.128C3.76 3.42 3 4.414 3 5.5v5.889c0 .963.366 1.904.98 2.656l.32.383c1.566 1.865 3.737 2.943 6.002 2.943s4.436-1.078 6.002-2.943l.32-.383c.614-.752.98-1.693.98-2.656V5.5c0-1.086-.76-2.08-1.793-2.488l-.32-.128A13.844 13.844 0 0010 1.944zM8.707 12.293a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L9.414 10.172l-1.707-1.707a1 1 0 00-1.414 1.414l2.5 2.5z" clipRule="evenodd" />
    </svg>
);
