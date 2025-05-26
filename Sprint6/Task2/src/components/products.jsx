import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

// Enhanced product data with more products and attractive details
const products = [
    {
        id: 1,
        name: 'EcoSmart Water Bottle',
        description: 'Stay hydrated with this eco-friendly, BPA-free water bottle. Keeps drinks cold for 24 hours.',
        price: '$19.99',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
        rating: 4.5
    },
    {
        id: 2,
        name: 'Wireless Headphones',
        description: 'Enjoy high-fidelity sound and noise cancellation with these stylish wireless headphones.',
        price: '$59.99',
        image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80',
        rating: 4.7
    },
    {
        id: 3,
        name: 'Smart LED Lamp',
        description: 'Illuminate your space with this energy-saving smart lamp. Adjustable brightness and color.',
        price: '$29.99',
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
        rating: 4.9
    },
    {
        id: 4,
        name: 'Portable Bluetooth Speaker',
        description: 'Take your music anywhere with this compact, waterproof Bluetooth speaker.',
        price: '$34.99',
        image: 'https://wallpaperaccess.com/full/4723250.jpg',
        rating: 4.8
    },
    {
        id: 5,
        name: 'Fitness Tracker Pro',
        description: 'Track your steps, heart rate, and sleep with this advanced fitness tracker.',
        price: '$49.99',
        image: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80',
        rating: 5.0
    },
    {
        id: 6,
        name: 'Aromatherapy Diffuser',
        description: 'Relax and unwind with this ultrasonic diffuser. Includes 7 LED color options.',
        price: '$24.99',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        rating: 4.6
    }
];

const getStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    return (
        <>
            {'★'.repeat(fullStars)}
            {halfStar && '½'}
            {'☆'.repeat(5 - fullStars - (halfStar ? 1 : 0))}
        </>
    );
};

const Products = () => {
    return (
        <Container className="mt-4">
            <h2 className="mb-4 text-primary text-center">🌟 Our Featured Products 🌟</h2>
            <Row>
                {products.map(product => (
                    <Col key={product.id} md={4} className="mb-4">
                        <Card className="shadow-sm h-100">
                            <Card.Img variant="top" src={product.image} style={{ height: '220px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title className="text-success">{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <div className="mb-2" style={{ color: '#FFD700', fontSize: '1.2em' }}>
                                    {getStars(product.rating)} <span className="text-dark" style={{ fontSize: '0.9em' }}>({product.rating})</span>
                                </div>
                                <h5 className="mb-3 text-danger">{product.price}</h5>
                                <Button variant="outline-primary" className="w-100">Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Products;
