import React, { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { increment, decrement, reset, incrementByAmount } from "./counterSlice"


const Counter: React.FC = () => {
    /**Add state to our component */
    const count = useAppSelector((state) => state.counter.count);
    const dispatch = useAppDispatch();
    const [incrementAmount, setIncrementAmount] = useState<string>('');

    const addValue = Number(incrementAmount) || 0;
    const resetAll = () => {
        setIncrementAmount(String(0));
        dispatch(reset());
    }


    return (
        <section>
            <p className="text-7xl p-4 text-center">{count}</p>
            <div className="flex justify-center items-center gap-8">
                <button onClick={() => dispatch(increment())} className="block font-extrabold text-3xl p-2 border rounded-lg bg-sky-500 border-gray-900">+</button>
                <button onClick={() => dispatch(decrement())} className="block font-extrabold text-3xl p-2 border rounded-lg bg-sky-500 border-gray-900">-</button>
            </div>
            <input type="text" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} placeholder="Add by ..."
            className="border border-cyan-800 rounded-lg p-2 my-3"
            />
            <button onClick={() => dispatch(incrementByAmount(addValue))} className="block bg-stone-900 text-cyan-100 p-2 rounded-md m-auto mb-2">Add Amount</button>
            <button onClick={resetAll} className="block bg-gray-600 text-cyan-100 p-2 px-8 rounded-md m-auto">Reset</button>
        </section>
    );
}

export default Counter