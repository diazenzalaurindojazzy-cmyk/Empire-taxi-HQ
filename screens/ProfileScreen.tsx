import React, { useContext } from 'react';
import { AppContext, LocalizationContext } from '../App';

interface ProfileScreenProps {
    onLogout: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ onLogout }) => {
    const { user, isOffline, setIsOffline } = useContext(AppContext);
    const { language, setLanguage, t } = useContext(LocalizationContext);

    if (!user) return null;

    return (
        <div className="p-4">
            <div className="flex items-center mb-6">
                <img 
                    src={`https://i.pravatar.cc/150?u=${user.id}`} 
                    alt={user.name}
                    className="w-20 h-20 rounded-full border-4 border-yellow-400"
                />
                <div className="ml-4">
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    <p className="text-gray-400">{user.phone}</p>
                </div>
            </div>
            
            <div className="space-y-2">
                 <button className="w-full text-left bg-gray-800 p-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors">{t('edit_profile')}</button>
                 <button className="w-full text-left bg-gray-800 p-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors">{t('promos_loyalty')}</button>
                 <button className="w-full text-left bg-gray-800 p-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors">{t('support_help')}</button>
            </div>
            
            <h2 className="text-lg font-bold text-gray-400 mt-6 mb-2">{t('app_settings')}</h2>
            <div className="space-y-2">
                <div className="w-full bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                    <span className="font-semibold">{t('language')}</span>
                    <div className="flex gap-2">
                        <button onClick={() => setLanguage('pt')} className={`px-3 py-1 text-sm rounded-md font-bold ${language === 'pt' ? 'bg-yellow-400 text-black' : 'bg-gray-700'}`}>PT</button>
                        <button onClick={() => setLanguage('en')} className={`px-3 py-1 text-sm rounded-md font-bold ${language === 'en' ? 'bg-yellow-400 text-black' : 'bg-gray-700'}`}>EN</button>
                    </div>
                </div>
                <div className="w-full bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                    <span className="font-semibold">{t('offline_mode')}</span>
                     <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={isOffline} onChange={() => setIsOffline(!isOffline)} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-focus:ring-2 peer-focus:ring-yellow-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                    </label>
                </div>
            </div>


            <div className="mt-8">
                <button 
                    onClick={onLogout}
                    className="w-full text-left bg-gray-800 text-red-400 p-4 rounded-lg font-bold hover:bg-red-900/50 transition-colors"
                >
                    {t('logout')}
                </button>
            </div>
             <p className="text-xs text-gray-600 text-center mt-8">Versão 1.0.1</p>
        </div>
    );
};

export default ProfileScreen;
