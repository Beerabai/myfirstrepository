import React, { useRef, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import SelectSeats from './SelectSeats';
import QRCodeGenerator from './QRCodeGenerator';

const Payment = ({ movie, totalPrice }) => {
    const [paymentType, setPaymentType] = useState(true);
    const [paymentDetails, setPaymentDetails] = useState(false);
    const [paymentPage, setPaymentPage] = useState(true);
    const [showQrCode, setShowQrCode] = useState(false);

    const handlePayment = () => {
        setPaymentDetails(true);
        setPaymentType(false);
        setShowQrCode(false);
    }
    const handleBack = () => {
        setPaymentType(true);
        setPaymentDetails(false);
    }

    const emailRef = useRef('');
    const phoneRef = useRef('');


    const onBack = () => {
        setPaymentPage(false);
    }

    const handleQrCode = () => {
        setShowQrCode(true);
        setPaymentType(false); // Hide payment options when showing QR code
        setPaymentDetails(false); // Hide payment details when showing QR code
    }

    const handleContinue = () => {

        const email = emailRef.current.value;
        const phone = phoneRef.current.value;

        sessionStorage.setItem("email", email);
        sessionStorage.setItem("phone", phone);
        emailRef.current.value = '';
        phoneRef.current.value = '';

    };
     
    const handlePayments =()=>{
        Swal.fire({
            title: 'Payment Done!',
            text: 'You clicked the button!',
            icon: 'success',
            confirmButtonText: 'Done',
          });
    }


    return (
        <>
            {
                paymentPage ?
                    <>

                        <div style={{ height: "75px", borderBottom: "1px solid  #80808052" }}>

                            {/* <div style={{ padding: "0px 30px" }}>
                                <img src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png" alt="" className='logoImg' />
                            </div> */}
                        </div>
                        <div>
                            <div style={{ display: "flex", padding: "20px", justifyContent: "space-between", background: "#ebf2f7" }}>
                                <div style={{ width: "69.5%", border: "1px solid #80808033" }}>
                                    <div style={{ height: "54px", background: "#F84464" }} className='pinkDiv'>
                                        <p>Share your Contact Details <span style={{ float: "right", paddingRight: "20px" }}><i class="fa-solid fa-xmark" onClick={onBack}></i></span></p>
                                    </div>
                                    <div className='contactDetails'>
                                        <div style={{ display: "flex", margin: "40px 20px", justifyContent: "space-between", width: "70%" }}>
                                            <input
                                                type="email"
                                                placeholder="email"
                                                className="contactFields"
                                                ref={emailRef}
                                            />
                                            <input
                                                type="tel"
                                                placeholder="+91"
                                                className="contactFields"
                                                ref={phoneRef}
                                            />
                                            <button className="continueBtn" onClick={handleContinue} >CONTINUE</button>
                                        </div>
                                    </div>
                                    <div className='paymentType'>
                                        <div style={{ height: "50px", background: "#F84464" }} className='pinkDiv'>
                                            <p>Payment Options</p>
                                        </div>
                                        <div style={{ display: "flex" }}>
                                            <div className='listSection'>
                                                <ul>
                                                    <li>QuickPay</li>
                                                    <li><span>Pay by any UPI App</span></li>
                                                    <li>Debit/Credit card</li>
                                                    <li>Net Banking</li>
                                                    <li>Mobile Wallets</li>
                                                    <li>Gift Voucher</li>
                                                </ul>
                                            </div>
                                            {
                                                paymentType ?
                                                    <>


                                                        <div className='paymentSection'>
                                                            <div style={{ display: "flex", alignItems: "center", marginTop: "30px" }}>
                                                                <div style={{ width: "9%" }}>
                                                                    <img src="upi.webp" alt="" style={{ width: "100%" }} />
                                                                </div>
                                                                <div>
                                                                    <h6 style={{ fontSize: "17px", color: "#000000bf", paddingLeft: "15px" }}>Pay by any UPI App</h6>
                                                                </div>
                                                            </div>

                                                            <div className="payment-form">
                                                                <div className="payment-options">
                                                                    <Row style={{ marginTop: "30px" }}>
                                                                        <Col>
                                                                            <label>
                                                                                <input type="radio" name="paymentMethod" onClick={handlePayment} />
                                                                                <img src="gpay.webp" alt="" style={{ width: "70px", height: "50px" }} />Google Pay
                                                                            </label>
                                                                        </Col>
                                                                        <Col>
                                                                            <label>
                                                                                <input type="radio" name="paymentMethod" />
                                                                                <img src="amazon.png" alt="" style={{ width: "70px", height: "70px" }} />  Amazon Pay
                                                                            </label>
                                                                        </Col>
                                                                    </Row>
                                                                    <Row style={{ marginTop: "30px" }}>
                                                                        <Col>
                                                                            <label>
                                                                                <input type="radio" name="paymentMethod"  onClick={handlePayment} />
                                                                                <img src="bhim.png" alt="" style={{ width: "70px", height: "70px" }} />  BHIM
                                                                            </label>
                                                                        </Col>

                                                                        <Col>
                                                                            <label>
                                                                                <input type="radio" name="paymentMethod"  onClick={handlePayment} />
                                                                                <img src="paytm.svg" alt="" style={{ width: "70px", height: "70px" }} />  Paytm
                                                                            </label>
                                                                        </Col>
                                                                    </Row>

                                                                    <Row style={{ marginTop: "30px" }}>
                                                                        <Col>
                                                                            <label>
                                                                                <input type="radio" name="paymentMethod"  onClick={handlePayment} />
                                                                                <img src="phone.jpg" alt="" style={{ width: "70px", height: "70px" }} />  PhonePe
                                                                            </label>
                                                                        </Col>
                                                                        <Col>
                                                                            <label>
                                                                                <input type="radio" name="paymentMethod"  onClick={handlePayment} />
                                                                                <img src="upi.webp" alt="" style={{ width: "70px", height: "70px" }} /> UPI
                                                                            </label>
                                                                        </Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Col>
                                                                            <label>
                                                                                <input type="radio" name="paymentMethod"  onClick={handlePayment} />
                                                                                <img src="qrimg.webp" alt="" style={{ width: "70px", height: "70px" }} onClick={handleQrCode} /> Scan Here 
                                                                            </label>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </>
                                                    :
                                                    
                                                   ''

                                            }
                                                 {showQrCode ?
                                                    <QRCodeGenerator /> :
                                                    ''

                                                }
                                            

                                            {
                                                paymentDetails ?
                                                    <>
                                                        <div>
                                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                                <i onClick={handleBack} className=" fa-regular fa-circle-left" style={{ fontSize: "23px" }}></i> <span style={{ fontSize: "20px", fontFamily: "math", padding: "20px 0px 20px 10px" }}>Pay using Phone Pe</span>
                                                            </div>
                                                            <div className='make_payment' style={{ display: "flex", width: "80%", justifyContent: 'space-between', marginTop: "20px" }}>
                                                                <input type="text" placeholder='Enter UPI Id' />
                                                                <input type="text" placeholder='Enter Bank' />
                                                            </div>
                                                            <div className='terms_n_conditions'>
                                                                <p> <i className="fa-regular fa-square" ></i> <span>QUICKPAY <br />Save this upi option to my BookMyShow account and make faster payments </span></p>
                                                                <button className='makePaymentBtn' onClick={handlePayments}>MAKE PAYMENTS</button>
                                                                <p style={{ fontSize: "12px", color: "#808080d6", marginTop: "20px" }}>By clicking 'Make payments 'you agree to the terms and conditions</p>
                                                            </div>
                                                        </div>
                                                    </> :
                                                    ''
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: "29.5%", border: "1px solid grey" }}>
                                    <div style={{ padding: "30px" }}>
                                        <div>
                                            <p style={{ fontSize: "14px", letterSpacing: "2px" }}>ORDER SUMMARY</p>
                                        </div>
                                        <div style={{ marginTop: "30px" }}>
                                            <h6 style={{ fontSize: "18px", fontWeight: "400", letterSpacing: "-0.6px", color: "black" }}>

                                                {movie.name}
                                            </h6>
                                            <p className='movie_type'>{movie.mtype} <br /><span>Skyee Cinema: Budhlada</span></p>
                                        </div >
                                        <div style={{ borderBottom: "1px dashed grey", marginBottom: "20px" }}>
                                            <p style={{ fontSize: "15px" }}>Fri,25 Oct,2024 <br />
                                                <span>5:30PM</span>
                                            </p>
                                        </div>
                                        <div style={{ display: "flex" }}>
                                            <div style={{ width: "50%" }}>
                                                <p style={{ fontSize: "13px", color: "grey" }}>Sub Total</p>
                                             
                                            </div>
                                            <div style={{ width: "50%", textAlign: "right" }}>
                                                <h6>Rs.{totalPrice}</h6>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </> :
                    <SelectSeats />
            }


        </>
    )
}

export default Payment
