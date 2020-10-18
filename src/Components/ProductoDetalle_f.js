import React from 'react';

function ProductoDetalle(props){
    return (
        <div>
            {props.data.name}
            {props.data.price}
            
        </div>
    )
}
export default ProductoDetalle;