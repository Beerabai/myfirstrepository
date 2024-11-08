"use client"
import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { setmovieList,setBanner } from './Slice';
import CommonPage from './CommonPage';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';



const Movies = () => {
    const dispatch = useDispatch();
    const movieList = useSelector((state) => state.movie.movieList);
    const banner = useSelector((state) => state.movie.banner);
    const [showCommonPage, setShowCommonPage] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState();

    const handleCardClick = (movie) => {
        setSelectedMovie(movie);
        setShowCommonPage(true);
        dispatch(setBanner(false));

    };
    const handleBack = () => {
        setShowCommonPage(false);
        setSelectedMovie();

    }


    return (
        <>
            {!showCommonPage && (
                <Container>
                    <div style={{ marginTop: "30px" }}>
                        <h3>Punjabi Movies</h3>
                    </div>
                    <Row>
                        {movieList && movieList.map((movie, index) => (
                            <Col md={3} key={index}>
                                <Card onClick={() => handleCardClick(movie)} style={{ width: '14rem', border: "none", marginTop: "10px" }}>
                                    <Card.Img src={movie.image} style={{ height: '20rem', position: 'relative' }} />
                                    <Card.Body style={{ padding: "0" }}>
                                        <Card.Text>
                                            <h4 className='movieName'>{movie.name}</h4>
                                            <p className='drama'>{movie.type}</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            )}

            {showCommonPage && selectedMovie && <CommonPage movie={selectedMovie} onBack={handleBack} />}

            
        </>
    )
}

export default Movies
