// SelectSeats Component
import React, { useEffect, useState } from 'react';
import Payment from './Payment';

const SelectSeats = ({ movie }) => {
    const selectedSeats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const selectPrice = [
        { seattype: "Box1", price: 300 },
        { seattype: "Box2", price: 300 },
        { seattype: "Platinum", price: 250 },
        { seattype: "Gold", price: 200 },
        { seattype: "Silver", price: 170 },
    ];

    const [buttonClicked, setButtonClicked] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState(0);
    const [selectNumber, setSelectNumber] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [navigateToPayment, setNavigateToPayment] = useState(false);

    const priceSelection = () => {
        const total = selectedPrice * selectNumber;
        setTotalPrice(total);
        setButtonClicked(true);
    };

    const handlePaymentNavigation = () => {
        setNavigateToPayment(true);
    };

    const resetSelection = () => {
        setTotalPrice(0);
        setSelectedPrice(0);
        setSelectNumber(0);
        setButtonClicked(false);
    };

    if (navigateToPayment) {
        return <Payment movie={movie} totalPrice={totalPrice} />;
    }

    return (
        <div className="containerDiv">
            <div className="title">How Many Seats?</div>
            <img src="https://png.pngtree.com/png-vector/20191008/ourmid/pngtree-red-scooter-icon-cartoon-style-png-image_1797751.jpg" alt="Scooter" className="scooter-image" />

            <div className="seat-numbers">
                {selectedSeats.map((number) => (
                    <button key={number} onClick={() => setSelectNumber(number)}>
                        {number}
                    </button>
                ))}
            </div>
            <div className="categories">
                {selectPrice.map((Seat) => (
                    <div key={Seat.seattype} onClick={() => setSelectedPrice(Seat.price)} className="category">
                        <div>{Seat.seattype}</div>
                        <div className="price">{Seat.price}</div>
                        <div className="status">Available</div>
                    </div>
                ))}
            </div>
            {buttonClicked ? (
                <button className="select-btn" onClick={handlePaymentNavigation}>
                    Pay {totalPrice}-
                </button>
            ) : (
                <button className="select-btn" onClick={priceSelection}>
                    Select Seats
                </button>
            )}
        </div>
    );
};

export default SelectSeats;
