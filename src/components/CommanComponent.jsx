import React from 'react';
import '../App.css';

const Common = (props)=>{
    return(
        <>
        <section id="header" className="d-flex align-items-center justify-content-center">
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-12 col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>{props.name} <strong>Sahil Technicals</strong></h1>
                            <h2 className="my-3">
                                We are a team of talented developer making websites
                            </h2>
                            <div className="mt-3 ">
                            <a href={props.visit} className="btn-getting-started">{props.btname}</a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 ">
                            <img src={props.imgsrc}  className="images"  alt="me"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Common;