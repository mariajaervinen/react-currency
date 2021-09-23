import React, {useState} from 'react';
import './Currency.css';

export default function Currency() {
    const [eur, setEur] = useState(0);
    const [gbp, setGpb] = useState(0);

     function handleSubmit(e){
        e.preventDefault();
        const conversion = eur * 0.9;
        setGpb(conversion);
    } 

    return (
        <>
            <h3>Currency Converter</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>EUR</label>
                    <input type='number' value={eur} onChange={e => setEur(e.target.value)}/>
                </div>
                <div>
                    <label>GBP</label>
                    <output>{gbp}</output>
                </div>
                <button>Calculate</button>
            </form>
        </>
    )
}

