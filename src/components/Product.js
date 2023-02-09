import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const Product = () => {

    const productId  = useParams().productId;
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <>
            <h3>{productId}번 상품 페이지입니다.</h3>
            <ul>
            <li><button onClick={() => navigate(-2)}>Go 2 pages back</button></li>
                <li><button onClick={() => navigate(-1)}>Go back</button></li>
                <li><button onClick={() => navigate(1)}>Go forward</button></li>
                <li><button onClick={() => navigate(2)}>Go 2 pages forward</button></li>
                <li><button onClick={() => navigate('/')}>Go Root</button></li>
                <li><button onClick={() => navigate('/', {replace: true})}>Go Root don't history</button></li>
            </ul>
        </>
        
    )
}

export default Product;