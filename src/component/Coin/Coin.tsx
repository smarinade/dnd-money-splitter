import React from 'react';

type CoinProps = {
    label: string,
    name: string
    value?: number
}

function Coin({label, name, value = 0} : CoinProps) {
    return (
        <div className="coin">
            <label>
                {label}
                <input name={name} type="number" defaultValue={value} min={0} />
            </label>
        </div>
    );
}

export default Coin;
