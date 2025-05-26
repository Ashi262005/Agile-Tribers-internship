import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, AreaChart, Area
} from 'recharts';
import { 
  PeopleFill, CurrencyDollar, BoxSeam, BarChartLine 
} from 'react-bootstrap-icons';

const data = [
  { name: 'Jan', users: 4000, sales: 2400, products: 2400 },
  { name: 'Feb', users: 3000, sales: 1398, products: 2210 },
  { name: 'Mar', users: 2000, sales: 9800, products: 2290 },
  { name: 'Apr', users: 2780, sales: 3908, products: 2000 },
  { name: 'May', users: 1890, sales: 4800, products: 2181 },
  { name: 'Jun', users: 2390, sales: 3800, products: 2500 },
  { name: 'Jul', users: 3490, sales: 4300, products: 2100 },
];

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
  return (
    <>
      <h4 className="mb-4">Dashboard Overview</h4>
      
      {/* Stats Cards */}
      <Row className="mb-4">
        <Col md={6} lg={3} className="mb-3 mb-lg-0">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="text-muted">Total Users</h6>
                  <h3>12,345</h3>
                  <small className="text-success">↑ 12% from last month</small>
                </div>
                <PeopleFill size={32} className="text-primary" />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-3 mb-lg-0">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="text-muted">Total Revenue</h6>
                  <h3>$98,765</h3>
                  <small className="text-success">↑ 8% from last month</small>
                </div>
                <CurrencyDollar size={32} className="text-success" />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-3 mb-lg-0">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="text-muted">Products</h6>
                  <h3>1,234</h3>
                  <small className="text-success">↑ 5% from last month</small>
                </div>
                <BoxSeam size={32} className="text-warning" />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-3 mb-lg-0">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="text-muted">Conversion</h6>
                  <h3>3.2%</h3>
                  <small className="text-danger">↓ 0.5% from last month</small>
                </div>
                <BarChartLine size={32} className="text-info" />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Charts Section */}
      <Row className="mb-4">
        <Col lg={8} className="mb-3 mb-lg-0">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Sales Overview</Card.Title>
              <div style={{ height: '300px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Revenue Sources</Card.Title>
              <div style={{ height: '300px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Additional Charts */}
      <Row>
        <Col md={6} className="mb-3">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>User Growth</Card.Title>
              <div style={{ height: '250px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="users" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-3">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Product Statistics</Card.Title>
              <div style={{ height: '250px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="products" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;