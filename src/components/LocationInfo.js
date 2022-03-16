import './locationInfo.css';
import React from 'react';

const LocationInfo = ({ricks, list}) =>{
    return(
        <div className="LocationInfo">
            <h1 className='title-h1' >Nombre: {ricks.name} </h1>
            <div className="LocationInfo-Ch">
                <p> <b>  Id: <span className='span-ch' >{ricks.id}</span> </b> </p>
                <p> Tipo: <span className='span-ch' >{ricks.type}</span> </p>
                <p>Dimensión: <span className='span-ch' >{ricks.dimension}</span> </p>
                <p>Total de Residentes: <span className='span-ch' >{ricks.residents?.length}</span> </p>
            </div>
        </div>
    )
}

export default LocationInfo;