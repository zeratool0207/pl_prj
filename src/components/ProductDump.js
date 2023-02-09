import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDump = () => {

    const { productId } = useParams();
    return (
        <>
            <h3>{productId}번 상품 페이지입니다.</h3>
        </>
        
    )
}

export default ProductDump;