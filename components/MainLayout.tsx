
import React from 'react';
import BottomNav from './BottomNav';

interface MainLayoutProps {
    children: React.ReactNode;
    activeTab: string;
    setActiveTab: (tab: string) => void;
    showNav: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, activeTab, setActiveTab, showNav }) => {
    return (
        <div className="relative h-screen w-screen max-w-md mx-auto bg-gray-900 text-white overflow-hidden flex flex-col">
            <main className="flex-grow overflow-y-auto pb-16">
                {children}
            </main>
            {showNav && <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />}
        </div>
    );
};

export default MainLayout;
