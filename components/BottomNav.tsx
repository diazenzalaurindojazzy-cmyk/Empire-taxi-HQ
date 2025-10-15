import React, { useContext } from 'react';
import { HomeIcon, HistoryIcon, WalletIcon, ProfileIcon } from './Icons';
import { LocalizationContext } from '../App';

interface BottomNavProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const NavItem: React.FC<{
    label: string;
    icon: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => {
    const activeColor = 'text-yellow-400';
    const inactiveColor = 'text-gray-400';
    const color = isActive ? activeColor : inactiveColor;

    return (
        <button
            onClick={onClick}
            className={`flex flex-col items-center justify-center w-full pt-2 pb-1 focus:outline-none transition-colors duration-200 ${color}`}
        >
            {icon}
            <span className="text-xs mt-1">{label}</span>
        </button>
    );
};

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
    const { t } = useContext(LocalizationContext);

    const navItems = [
        { label: 'Home', text: t('nav_home'), icon: <HomeIcon className="w-6 h-6" /> },
        { label: 'Histórico', text: t('nav_history'), icon: <HistoryIcon className="w-6 h-6" /> },
        { label: 'Carteira', text: t('nav_wallet'), icon: <WalletIcon className="w-6 h-6" /> },
        { label: 'Perfil', text: t('nav_profile'), icon: <ProfileIcon className="w-6 h-6" /> },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 h-16 bg-gray-800 shadow-lg flex justify-around max-w-md mx-auto border-t border-gray-700">
            {navItems.map((item) => (
                <NavItem
                    key={item.label}
                    label={item.text}
                    icon={item.icon}
                    isActive={activeTab === item.label}
                    onClick={() => setActiveTab(item.label)}
                />
            ))}
        </div>
    );
};

export default BottomNav;
