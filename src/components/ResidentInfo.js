import './residentInfo.css';
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const ResidentInfo = ({list}) => {
    
    const [info, setInfo] = useState({});
    useEffect(() => {
        axios.get(list)
            .then(res => setInfo(res.data));
    }, [list]);

    return(
        <div className="Resident-Info">
                <div className='image-container' >
                    <img src={info.image} alt="images" className='img' />
                </div>
                <div className='dates-container' >
                    <p>
                        <span >
                            <b>
                                Name: 
                            </b>
                            <p className='dates' >
                                {info.name}
                            </p>
                        </span>
                    </p>

                    <p>
                        <span>
                            <b>
                                Status: 
                            </b>
                            <p className='dates'>
                                {info.status}
                            </p>
                        </span>
                    </p>

                    <p>
                        <span>
                            <b>
                                Origin: 
                            </b>
                            <p className='dates'>
                                {info.origin?.name}
                            </p>
                        </span>
                    </p>

                    <p>
                        <span>
                            <b>
                                Episode: 
                            </b>
                            <p className='dates'>
                                {info.episode?.length}
                            </p>
                        </span>
                    </p>
                </div>
        </div>
    );
}

export default ResidentInfo;