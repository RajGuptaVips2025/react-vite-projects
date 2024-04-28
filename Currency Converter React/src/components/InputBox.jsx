import React, {useId} from 'react'

function InputBox({
    label,
    amount, 
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'usd', // setting usd as default currency.
    amountDisable = false,
    currencyDisable = false,
    className = "",
    }) {

    const amountInputId = useId()
   
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}
                 className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    value={amount} // value will be taken from the InputBox function
                    disabled={amountDisable} // asking the input box is value disable or not.
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    // onAmountChange value will be triggered when the amount will be changed.
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    value={selectCurrency} // value of currency will taken from the selectCurrency variable in the InputBox function.
                    disabled={currencyDisable} // asking the input box is value disable or not.
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"  
                >
                    
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                        {currency}
                        </option>
                    ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;

