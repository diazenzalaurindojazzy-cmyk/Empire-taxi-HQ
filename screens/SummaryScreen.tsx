import React, { useContext, useState } from 'react';
import { AppContext, LocalizationContext } from '../App';
import { StarIcon } from '../components/Icons';

interface SummaryScreenProps {
    onNewRide: () => void;
}

const StarRating: React.FC<{ rating: number; setRating: (r: number) => void }> = ({ rating, setRating }) => {
    return (
        <div className="flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
                <button key={star} onClick={() => setRating(star)}>
                    <StarIcon className={`w-10 h-10 transition-colors ${star <= rating ? 'text-yellow-400' : 'text-gray-600'}`} />
                </button>
            ))}
        </div>
    );
};

const NpsRating: React.FC<{ score: number | null; setScore: (s: number) => void }> = ({ score, setScore }) => {
    return (
        <div className="flex flex-wrap justify-center gap-2">
            {Array.from({ length: 11 }, (_, i) => i).map((num) => (
                <button
                    key={num}
                    onClick={() => setScore(num)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full font-bold transition-colors ${score === num ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700 text-white'}`}
                >
                    {num}
                </button>
            ))}
        </div>
    );
};


const SummaryScreen: React.FC<SummaryScreenProps> = ({ onNewRide }) => {
    const { currentRide, user, setUser } = useContext(AppContext);
    const { t } = useContext(LocalizationContext);
    const [rating, setRating] = useState(0);
    const [npsScore, setNpsScore] = useState<number | null>(null);
    const [comment, setComment] = useState('');
    const [step, setStep] = useState(1);

    const handleSubmitFeedback = () => {
        // Simulate adding points for feedback
        if (user) {
            setUser({ ...user, points: user.points + 10 });
        }
        console.log({
            rideId: currentRide?.id,
            rating,
            npsScore,
            comment,
        });
        onNewRide();
    };
    
    if (!currentRide || !user) return null;

    if (step === 1) {
        return (
             <div className="h-full flex flex-col justify-between p-6 bg-gray-900">
                <div>
                    <h1 className="text-3xl font-bold text-center text-yellow-400">{t('ride_completed')}</h1>
                    <p className="text-center text-gray-400 mt-2">{t('thanks_for_riding')}</p>
                
                    <div className="bg-gray-800 p-4 rounded-lg my-8">
                        <div className="flex justify-between items-baseline">
                            <span className="text-gray-300">{t('total_to_pay')}</span>
                            <span className="text-4xl font-bold text-yellow-400">
                                {new Intl.NumberFormat('pt-AO', { style: 'currency', currency: 'AOA' }).format(currentRide.fare_final)}
                            </span>
                        </div>
                        <div className="text-sm text-gray-500 mt-2">
                            {currentRide.origin.address} &rarr; {currentRide.destination.address}
                        </div>
                    </div>

                    <div className="space-y-2">
                         <button className="w-full bg-gray-700 text-white font-bold py-3 rounded-lg hover:bg-gray-600">{t('pay_with_cash')}</button>
                         <button className="w-full bg-gray-700 text-white font-bold py-3 rounded-lg hover:bg-gray-600">{t('pay_with_card')}</button>
                         <button className="w-full bg-gray-700 text-white font-bold py-3 rounded-lg hover:bg-gray-600">{t('pay_with_multicaixa')}</button>
                         <button className="w-full bg-gray-700 text-white font-bold py-3 rounded-lg hover:bg-gray-600">{t('pay_with_tpa')}</button>
                         <button className="w-full bg-gray-700 text-white font-bold py-3 rounded-lg hover:bg-gray-600">{t('pay_with_transfer')}</button>
                         <button className="w-full bg-gray-700 text-white font-bold py-3 rounded-lg hover:bg-gray-600">{t('pay_with_balance')} (Kz {user.wallet_balance.toLocaleString()})</button>
                    </div>
                </div>
                 
                 <button onClick={() => setStep(2)} className="w-full bg-yellow-400 text-gray-900 font-bold py-3 rounded-lg mt-6">
                    {t('continue_to_rating')}
                </button>
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col justify-between p-6 bg-gray-900 overflow-y-auto">
            <div>
                <h2 className="text-2xl font-bold text-center mb-4">{t('rate_your_trip')}</h2>
                <div className="text-center mb-6">
                    <img src={currentRide.driver?.photoUrl} alt={currentRide.driver?.name} className="w-24 h-24 rounded-full mx-auto border-4 border-yellow-400"/>
                    <p className="font-bold mt-2">{currentRide.driver?.name}</p>
                </div>
                
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-center mb-3">{t('how_was_driver')}</h3>
                    <StarRating rating={rating} setRating={setRating} />
                </div>
                
                <div className="mb-6">
                     <h3 className="text-lg font-semibold text-center mb-3">{t('nps_question')}</h3>
                     <NpsRating score={npsScore} setScore={setNpsScore} />
                </div>

                <div>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder={t('leave_comment_optional')}
                        rows={3}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    />
                </div>
            </div>
            
            <button onClick={handleSubmitFeedback} className="w-full bg-yellow-400 text-gray-900 font-bold py-3 rounded-lg mt-6">
                {t('submit_rating')}
            </button>
        </div>
    );
};

export default SummaryScreen;
