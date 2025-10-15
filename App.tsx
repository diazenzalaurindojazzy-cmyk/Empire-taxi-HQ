
import React, { useState, useMemo, useCallback } from 'react';
import { AppState, Ride, User, Language } from './types';
import { translations } from './localization';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RideScreen from './screens/RideScreen';
import SummaryScreen from './screens/SummaryScreen';
import MainLayout from './components/MainLayout';
import HistoryScreen from './screens/HistoryScreen';
import WalletScreen from './screens/WalletScreen';
import ProfileScreen from './screens/ProfileScreen';

const MOCK_USER: User = {
  id: 'user-123',
  name: 'João Silva',
  phone: '+244 9XX XXX XXX',
  email: 'joao.silva@email.com',
  wallet_balance: 15000,
  points: 250,
  preferred_payment: 'Dinheiro',
  created_at: new Date().toISOString(),
};

export const AppContext = React.createContext<{
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    currentRide: Ride | null;
    setCurrentRide: (ride: Ride | null) => void;
    appState: AppState;
    setAppState: (state: AppState) => void;
    isOffline: boolean;
    setIsOffline: (isOffline: boolean) => void;
    setNotification: (message: string) => void;
}>({
    user: null,
    setUser: () => {},
    currentRide: null,
    setCurrentRide: () => {},
    appState: AppState.LOGGED_OUT,
    setAppState: () => {},
    isOffline: false,
    setIsOffline: () => {},
    setNotification: () => {},
});

export const LocalizationContext = React.createContext<{
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: keyof typeof translations.pt) => string;
}>({
    language: 'pt',
    setLanguage: () => {},
    // FIX: Ensure the default translation function returns a string.
    t: (key) => String(key),
});


const App: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [currentRide, setCurrentRide] = useState<Ride | null>(null);
    const [appState, setAppState] = useState<AppState>(AppState.LOGGED_OUT);
    const [activeTab, setActiveTab] = useState('Home');
    const [language, setLanguage] = useState<Language>('pt');
    const [isOffline, setIsOffline] = useState(false);
    const [notification, setNotification] = useState<string | null>(null);

    const t = useCallback((key: keyof typeof translations.pt) => {
        // FIX: Ensure the translation function always returns a string as a fallback.
        return translations[language][key] || translations['pt'][key] || String(key);
    }, [language]);

    const showNotification = (message: string) => {
        setNotification(message);
        setTimeout(() => setNotification(null), 3000);
    };

    const handleLogin = useCallback(() => {
        setUser(MOCK_USER);
        setAppState(AppState.HOME);
    }, []);

    const handleLogout = useCallback(() => {
        setUser(null);
        setCurrentRide(null);
        setAppState(AppState.LOGGED_OUT);
    }, []);

    const handleNewRide = useCallback(() => {
        setCurrentRide(null);
        setAppState(AppState.HOME);
        setActiveTab('Home');
    }, []);

    const renderContent = () => {
        switch (appState) {
            case AppState.REQUESTING_RIDE:
            case AppState.RIDE_IN_PROGRESS:
                return <RideScreen />;
            case AppState.RIDE_SUMMARY:
                return <SummaryScreen onNewRide={handleNewRide} />;
            case AppState.HOME:
            default:
                switch (activeTab) {
                    case 'Histórico':
                        return <HistoryScreen />;
                    case 'Carteira':
                        return <WalletScreen />;
                    case 'Perfil':
                        return <ProfileScreen onLogout={handleLogout} />;
                    case 'Home':
                    default:
                        return <HomeScreen />;
                }
        }
    };
    
    const contextValue = useMemo(() => ({
        user, setUser, currentRide, setCurrentRide, appState, setAppState, isOffline, setIsOffline, setNotification: showNotification
    }), [user, currentRide, appState, isOffline]);

    const localizationContextValue = useMemo(() => ({
        language, setLanguage, t
    }), [language, t]);

    if (!user) {
        return (
            <LocalizationContext.Provider value={localizationContextValue}>
                <LoginScreen onLogin={handleLogin} />
            </LocalizationContext.Provider>
        );
    }

    return (
        <LocalizationContext.Provider value={localizationContextValue}>
            <AppContext.Provider value={contextValue}>
                <MainLayout activeTab={activeTab} setActiveTab={setActiveTab} showNav={appState === AppState.HOME}>
                    {notification && (
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white font-bold py-2 px-4 rounded-lg z-50 shadow-lg">
                            {notification}
                        </div>
                    )}
                    {renderContent()}
                </MainLayout>
            </AppContext.Provider>
        </LocalizationContext.Provider>
    );
};

export default App;