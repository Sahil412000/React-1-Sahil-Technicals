import React from 'react';
import Cards from './Card';
import Data from '../assets/Data';

const Services = ()=>{
    return(
        <>
        <div className="my-3">
            <h1 className="text-center">Our Servives</h1>
        </div>
        <div className="container-fluid">
            <div classame="row ">
                <div className="col-10 mx-auto">
                    <div className="row" >
                        {Data.map((value,index)=>{
                            return(
                                <div className="col-12 col-sm-6">
                            <Cards key={index}
                            imgsrc={value.imgsrc}
                            title={value.title}/>
                            </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Services;