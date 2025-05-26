import React from 'react';
import { Table, Container, Badge, Button, Row, Col, Card } from 'react-bootstrap';

// Sample report data with more details
const reports = [
    {
        id: 1,
        title: 'Monthly Sales',
        date: '2025-05-01',
        status: 'Completed',
        author: 'Alice Smith',
        summary: 'A comprehensive overview of sales performance for the month.',
        download: '/reports/monthly-sales.pdf'
    },
    {
        id: 2,
        title: 'Inventory Check',
        date: '2025-05-15',
        status: 'Pending',
        author: 'Bob Johnson',
        summary: 'Pending inventory audit for warehouse stock.',
        download: '/reports/inventory-check.pdf'
    },
    {
        id: 3,
        title: 'Customer Feedback',
        date: '2025-04-28',
        status: 'Completed',
        author: 'Carol Lee',
        summary: 'Analysis of customer feedback and satisfaction ratings.',
        download: '/reports/customer-feedback.pdf'
    }
];

const statusVariant = (status) => {
    switch (status) {
        case 'Completed':
            return 'success';
        case 'Pending':
            return 'warning';
        default:
            return 'secondary';
    }
};

const Reports = () => {
    return (
        <Container className="mt-4">
            <Row className="mb-4">
                <Col>
                    <h2 className="text-primary">📊 Reports Dashboard</h2>
                    <p className="text-muted">
                        View and download the latest reports. Stay updated with the most recent insights and data.
                    </p>
                </Col>
            </Row>
            <Row>
                {reports.map((report) => (
                    <Col md={4} key={report.id} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    {report.title}{' '}
                                    <Badge bg={statusVariant(report.status)}>{report.status}</Badge>
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    {new Date(report.date).toLocaleDateString()} &middot; By {report.author}
                                </Card.Subtitle>
                                <Card.Text>{report.summary}</Card.Text>
                                <Button
                                    variant="outline-primary"
                                    size="sm"
                                    href={report.download}
                                    target="_blank"
                                    disabled={report.status !== 'Completed'}
                                >
                                    Download
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <h4 className="mt-5">All Reports Table</h4>
            <Table striped bordered hover responsive className="mt-3">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Report Title</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Author</th>
                        <th>Download</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report) => (
                        <tr key={report.id}>
                            <td>{report.id}</td>
                            <td>{report.title}</td>
                            <td>{new Date(report.date).toLocaleDateString()}</td>
                            <td>
                                <Badge bg={statusVariant(report.status)}>{report.status}</Badge>
                            </td>
                            <td>{report.author}</td>
                            <td>
                                <Button
                                    variant="outline-primary"
                                    size="sm"
                                    href={report.download}
                                    target="_blank"
                                    disabled={report.status !== 'Completed'}
                                >
                                    Download
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Reports;
