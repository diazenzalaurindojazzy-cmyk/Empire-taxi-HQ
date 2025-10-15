import React, { useState, useContext } from 'react';
import { LocalizationContext } from '../App';

interface LoginScreenProps {
    onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
    const { t } = useContext(LocalizationContext);
    const [phone, setPhone] = useState('');
    const [step, setStep] = useState(1);

    const handlePhoneSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(2);
    };

    const handleOtpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLogin();
    };

    return (
        <div className="h-screen w-screen max-w-md mx-auto bg-gray-900 text-white flex flex-col justify-center items-center p-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-yellow-400">{t('welcome_title')}</h1>
                <p className="text-gray-300 mt-2">{t('welcome_subtitle')}</p>
            </div>

            {step === 1 && (
                <form onSubmit={handlePhoneSubmit} className="w-full">
                    <h2 className="text-xl font-semibold mb-4 text-center">{t('enter_phone')}</h2>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">+244</span>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder={t('phone_placeholder')}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pr-4 pl-14 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-yellow-400 text-gray-900 font-bold py-3 rounded-lg mt-6 hover:bg-yellow-500 transition-colors">
                        {t('continue')}
                    </button>
                </form>
            )}

            {step === 2 && (
                <form onSubmit={handleOtpSubmit} className="w-full">
                    <h2 className="text-xl font-semibold mb-4 text-center">{t('otp_verification')}</h2>
                     <p className="text-center text-gray-400 mb-4 text-sm">
                        {t('otp_sent_to')} {phone}.
                     </p>
                    <input
                        type="text"
                        placeholder="_ _ _ _ _ _"
                        maxLength={6}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-center tracking-[1em] focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                        required
                    />
                    <button type="submit" className="w-full bg-yellow-400 text-gray-900 font-bold py-3 rounded-lg mt-6 hover:bg-yellow-500 transition-colors">
                        {t('verify_and_enter')}
                    </button>
                     <button onClick={() => setStep(1)} type="button" className="w-full text-yellow-400 font-semibold py-3 rounded-lg mt-2 hover:text-yellow-300 transition-colors">
                        {t('change_number')}
                    </button>
                </form>
            )}

            <p className="text-xs text-gray-500 mt-12 text-center">
                {t('terms')}
            </p>
        </div>
    );
};

export default LoginScreen;
