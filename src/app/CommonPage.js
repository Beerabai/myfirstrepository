import React, { useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import TimePage from './TimePage';

const CommonPage = ({ movie, onBack }) => {
  const [showTimePage, setShowTimePage] = useState(false);

  const handleTimePage = () => {
    setShowTimePage(true);
  };

  const backTo = () => {
    setShowTimePage(false);
  };

  return (
    <>
      {showTimePage ? (
        <TimePage movie={movie} onBack={backTo} /> // Pass movie as prop
         // Pass movie as prop
      ) : (
        <>
          <div
            style={{
              backgroundImage: `linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%), url(${movie.image})`,
              height: '500px',
              backgroundSize: 'cover',
              position: 'relative',
            }}
          >
            <div className='outerDiv'>
              <Row>
                <Col md={3} className='cardImg'>
                  <Card style={{ width: '16rem', border: 'none', marginTop: '10px' }}>
                    <Card.Img src={movie.image} style={{ height: '23rem' }} />
                  </Card>
                </Col>
                <Col md={5}>
                  <div className='contentDiv'>
                    <h1 className='movietitle'>{movie.name}</h1>
                    <div className='ratingDiv'>
                      <ul style={{ listStyleType: 'none', display: 'flex', color: 'white', paddingTop: '20px', fontSize: '18px' }}>
                        <li>
                          <i className='rating fa-solid fa-star'></i>
                        </li>
                        <li>9.4/10 (10.8k votes)</li>
                      </ul>
                      <div>
                        <button className='rateNow'>Rate Now</button>
                      </div>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                      <button style={{ padding: '3px 9px', borderRadius: '5px' }}>2D</button>
                      <button className='typeBtn'>{movie.mtype}</button>
                    </div>
                    <div className='timedis'>
                      <ul style={{ display: 'flex', color: 'white', padding: '0', marginTop: '10px' }}>
                        <li style={{ listStyleType: 'none', padding: '0' }}>2h 24m</li>
                        <li>{movie.type}</li>
                        <li>U</li>
                        <li>{movie.rDate}</li>
                      </ul>
                    </div>
                    <div>
                      <button className='bookingbtn' onClick={handleTimePage}>
                        Book tickets
                      </button>
                    </div>
                  </div>
                  <i onClick={onBack} className='onBack fa-solid fa-left-long'></i>
                </Col>
              </Row>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CommonPage;
