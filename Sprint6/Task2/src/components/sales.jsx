import React from 'react';
import { Table, Container, Badge, Card } from 'react-bootstrap';

// Sample sales data
const salesData = [
  { id: 1, product: 'Product A', quantity: 3, price: 19.99, date: '2025-05-20', customer: 'Alice', status: 'Completed' },
  { id: 2, product: 'Product B', quantity: 2, price: 29.99, date: '2025-05-21', customer: 'Bob', status: 'Pending' },
  { id: 3, product: 'Product C', quantity: 1, price: 39.99, date: '2025-05-22', customer: 'Charlie', status: 'Completed' }
];

// Helper to get badge color by status
const getStatusVariant = (status) => {
  switch (status) {
    case 'Completed':
      return 'success';
    case 'Pending':
      return 'warning';
    default:
      return 'secondary';
  }
};

const Sales = () => {
  // Calculate total revenue
  const total = salesData.reduce((acc, sale) => acc + sale.quantity * sale.price, 0);

  return (
    <Container className="mt-4">
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <Card.Title as="h2" className="mb-3 text-primary">Sales Report</Card.Title>
          <Card.Text>
            <span className="text-muted">Overview of recent sales transactions, including customer and status details.</span>
          </Card.Text>
        </Card.Body>
      </Card>
      <Table striped bordered hover responsive className="mt-3 bg-white shadow-sm">
        <thead className="table-primary">
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Customer</th>
            <th>Quantity</th>
            <th>Price (each)</th>
            <th>Total</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.id}</td>
              <td>{sale.product}</td>
              <td>{sale.customer}</td>
              <td>{sale.quantity}</td>
              <td>${sale.price.toFixed(2)}</td>
              <td>${(sale.quantity * sale.price).toFixed(2)}</td>
              <td>{new Date(sale.date).toLocaleDateString()}</td>
              <td>
                <Badge bg={getStatusVariant(sale.status)}>{sale.status}</Badge>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5"><strong>Total Revenue</strong></td>
            <td colSpan="3"><strong>${total.toFixed(2)}</strong></td>
          </tr>
        </tfoot>
      </Table>
    </Container>
  );
};

export default Sales;
