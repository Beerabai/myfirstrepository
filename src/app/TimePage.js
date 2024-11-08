"use client"
import React, { use } from 'react'
import { useState } from 'react'
import { Col, Row, DropdownButton, Dropdown } from 'react-bootstrap'
import CommonPage from './CommonPage'
import SelectSeats from './SelectSeats'

const TimePage = ({ movie, onBack }) => {  
    const[showSeatPage,setshowSeatPage] =useState(false);
    const handleSeatPage =()=>{
        setshowSeatPage(true);
    }
        
    return (
        <>

            {
                showSeatPage ?
               (
               <SelectSeats movie={movie} />
            )
                :
                <>  <div style={{ height: "auto", border: "1px solid #80808052" }}>
                <i className="fa-solid fa-xmark" onClick={onBack}></i>
                    <div style={{ margin: "40px 0px 20px 40px" }}><h2 style={{ fontSize: "35px", color: "#000000b5" }}>{movie.name}</h2>
                        <div style={{ display: "flex" }}>
                            <div className='uDiv'>U</div>
                            <button className='tBtn'>DRAMA</button>
                        </div>
                    </div>
    
                </div>
                <div style={{ display: "flex",height:"auto" }}>
                    <div className='schedule'>Mon <br /><span>09</span><br />SEP</div>
                    <div style={{ display: "flex",width:"35%", alignItems:"end",marginLeft:"45pc",}}>
                        <div style={{fontSize:"15px",paddingRight:"45px",color:"#343333"}}><h6>{movie.mtype}</h6></div>
                        <div className='dropDown'>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" style={{fontSize:"14px"}}>
                                    Filter Price Range
                                </Dropdown.Toggle>
    
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Rs.0-200</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Rs.200-301</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Rs.301-900</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="dropDown2">
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" style={{fontSize:"14px"}}>
                                    Filter Show Timings
                                </Dropdown.Toggle>
    
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Morning 12:00-11:59</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Afternoon 12:00-11:59</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Evening 12:00-11:59</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Night 12:00-11:59</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div><i className="fa-solid fa-magnifying-glass" style={{padding:"10px "}}></i></div>
                    </div>
    
                </div>
                <div>
                    <div style={{height:"40px",border:"1px solid rgb(230, 225, 225)",marginTop:"30px"}}>
                        <ul className='listt'>
                            <li>Available</li>
                            <li>Fast Billing</li>
                            <li>Subtitles Language</li>
                        </ul>
                    </div>
                </div>
                <div style={{height:"400px",width:"100%"}}>
                    <div style={{width:"50%",margin:"auto",textAlign:"center",paddingTop:"20px"}}>
                        <button className='timeBtn' onClick={handleSeatPage}>12:45 PM</button>
                        <button className='timeBtn'  onClick={handleSeatPage}>03:15 PM</button>
                        <button className='timeBtn'  onClick={handleSeatPage}>4:30 PM</button>
                        <button className='timeBtn'  onClick={handleSeatPage}>8:00 PM</button>
                    </div>
                </div>
                </>

            }
           
        </>
    )
}

export default TimePage
