import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Product } from "../../Context/ApiContext";
import './CardDetails.css'

interface ProductProps {
    data: Product;
}

export function CardDetails() {
    const [data, setData] = useState<ProductProps | undefined>(undefined);
    const { id } = useParams();
    useEffect(() => {
        const statsApi = `https://dummyjson.com/products/${id}`;
        fetch(statsApi)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, [id]);
    console.log(data);
    return (
        <>
        </>
    )
}