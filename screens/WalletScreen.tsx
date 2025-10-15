import React, { useContext } from 'react';
import { AppContext, LocalizationContext } from '../App';
import { Payment } from '../types';

const mockPayments: Payment[] = [
    { id: 'pay-1', ride_id: 'ride-1', method: 'Dinheiro', amount: -2500, status: 'paid', timestamp: '2023-10-26T10:15:00Z' },
    { id: 'pay-2', ride_id: 'ride-2', method: 'Multicaixa', amount: -1650, status: 'paid', timestamp: '2023-10-25T18:45:00Z' },
    { id: 'pay-3', ride_id: 'promo-1', method: 'Bónus', amount: 500, status: 'paid', timestamp: '2023-10-24T12:00:00Z' },
];

const WalletScreen: React.FC = () => {
    const { user } = useContext(AppContext);
    const { t } = useContext(LocalizationContext);

    if (!user) return null;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-yellow-400 mb-2">{t('nav_wallet')}</h1>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
                <p className="text-gray-400">Saldo Atual</p>
                <p className="text-4xl font-bold text-yellow-400 my-2">
                    {new Intl.NumberFormat('pt-AO', { style: 'currency', currency: 'AOA' }).format(user.wallet_balance)}
                </p>
                <button className="mt-4 bg-yellow-400 text-gray-900 font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition-colors">
                    Adicionar Saldo
                </button>
            </div>

            <div className="bg-yellow-900/50 border border-yellow-400 p-4 rounded-lg text-center mt-6">
                <p className="text-yellow-300 font-bold">{t('promos_loyalty')}</p>
                <p className="text-3xl font-bold text-white">{user.points} Pontos</p>
                <p className="text-sm text-yellow-300">Troque por descontos!</p>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-3">Métodos de Pagamento</h2>
                <div className="space-y-2">
                    <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                        <span>📱 Multicaixa Express</span>
                        <span className="text-green-400 font-semibold">Ligado</span>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                        <span>💳 Cartão</span>
                        <button className="text-yellow-400 font-semibold">Adicionar</button>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                        <span>🏦 Transferência</span>
                        <button className="text-yellow-400 font-semibold">Ver dados</button>
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-3">Últimas Transações</h2>
                <div className="space-y-2">
                    {mockPayments.map(payment => (
                        <div key={payment.id} className="bg-gray-800 p-3 rounded-lg flex justify-between items-center">
                            <div>
                                <p className="font-semibold">{payment.method}</p>
                                <p className="text-xs text-gray-400">{new Date(payment.timestamp).toLocaleString('pt-AO')}</p>
                            </div>
                            <p className={`font-bold ${payment.amount < 0 ? 'text-red-400' : 'text-green-400'}`}>
                                {payment.amount > 0 ? '+' : ''}{new Intl.NumberFormat('pt-AO', { style: 'currency', currency: 'AOA' }).format(payment.amount)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WalletScreen;
