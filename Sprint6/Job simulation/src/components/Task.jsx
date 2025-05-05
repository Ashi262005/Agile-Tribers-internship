// import React, { useState } from 'react';
// import {
//   Box, Grid, Card, CardContent, Typography, Divider, Tabs, Tab,
//   Button, useTheme, useMediaQuery, Drawer, List, ListItem,
//   ListItemIcon, ListItemText, CssBaseline, AppBar, Toolbar,
//   IconButton, Menu, MenuItem, Collapse, Badge, Avatar,
//   FormControl, InputLabel, Select
// } from '@mui/material';
// import {
//   Menu as MenuIcon,
//   Dashboard as DashboardIcon,
//   AttachMoney as RevenueIcon,
//   PieChart as PieChartIcon,
//   ShowChart as StocksIcon,
//   Receipt as TransactionsIcon,
//   Settings as SettingsIcon,
//   Notifications as NotificationsIcon,
//   AccountCircle as AccountCircleIcon,
//   ExpandLess,
//   ExpandMore,
//   ChevronLeft,
//   ChevronRight,
//   TrendingUp as TrendingUpIcon,
//   Assessment as AssessmentIcon,
//   CalendarMonth as CalendarMonthIcon,
//   DateRange as DateRangeIcon,
//   FilterAlt as FilterAltIcon,
//   CurrencyBitcoin as CurrencyBitcoinIcon,
//   LocalShipping as LocalShippingIcon
// } from '@mui/icons-material';
// import {
//   LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
//   XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
//   AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis,
//   PolarRadiusAxis, Radar, ScatterChart, Scatter, ZAxis
// } from 'recharts';
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';

// // ========== Data ========== //
// const revenueData =  [
//   { name: 'Jan', value: 4000 }, { name: 'Feb', value: 3000 },
//   { name: 'Mar', value: 5000 }, { name: 'Apr', value: 2780 },
//   { name: 'May', value: 1890 }, { name: 'Jun', value: 2390 }
// ];
// const stockData = [
//   { name: 'AAPL', value: 182 }, { name: 'MSFT', value: 420 },
//   { name: 'GOOG', value: 142 }, { name: 'AMZN', value: 185 }
// ];

// const pieData = [
//   { name: 'Stocks', value: 45 }, { name: 'Bonds', value: 25 },
//   { name: 'Cash', value: 15 }, { name: 'Real Estate', value: 15 }
// ];

// const performanceData = [
//   { name: 'Q1', revenue: 4000, expenses: 2400, profit: 1600 },
//   { name: 'Q2', revenue: 3000, expenses: 1398, profit: 1602 },
//   { name: 'Q3', revenue: 9800, expenses: 3908, profit: 5892 },
//   { name: 'Q4', revenue: 3908, expenses: 4800, profit: -892 }
// ];

// const radarData = [
//   { subject: 'Growth', A: 120, B: 110 }, { subject: 'Risk', A: 98, B: 130 },
//   { subject: 'Liquidity', A: 86, B: 130 }, { subject: 'Dividends', A: 99, B: 100 },
//   { subject: 'Volatility', A: 85, B: 90 }
// ];

// const scatterData = [
//   { x: 100, y: 200, z: 200 }, { x: 120, y: 100, z: 260 },
//   { x: 170, y: 300, z: 400 }, { x: 140, y: 250, z: 280 },
//   { x: 150, y: 400, z: 500 }
// ];

// const bubbleData = [
//   { name: 'Tech', x: 12, y: 24, z: 35 },
//   { name: 'Energy', x: 18, y: 12, z: 28 },
//   { name: 'Finance', x: 7, y: 19, z: 42 }
// ];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// // ========== Components ========== //
// const StatsCard = ({ title, value, change }) => {
//   const isPositive = change >= 0;
//   return (
//     <Card>
//       <CardContent>
//         <Typography color="text.secondary" gutterBottom>{title}</Typography>
//         <Typography variant="h4">{value}</Typography>
//         <Typography color={isPositive ? 'success.main' : 'error.main'}>
//           {isPositive ? '↑' : '↓'} {Math.abs(change)}% vs last month
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// const drawerWidth = 240;

// // ========== Pages ========== //
// const DashboardPage = () => {
//   const [tabValue, setTabValue] = useState(0);
//   const [timeRange, setTimeRange] = useState('week');
//   const [chartType, setChartType] = useState('area');

//   return (
//     <Grid container spacing={3}>
//       {/* Stats Cards */}
//       <Grid item xs={12} sm={6} md={4}>
//         <StatsCard title="Total Revenue" value="$24,780" change={12.5} />
//       </Grid>
//       <Grid item xs={12} sm={6} md={4}>
//         <StatsCard title="Expenses" value="$8,240" change={-4.3} />
//       </Grid>
//       <Grid item xs={12} sm={6} md={4}>
//         <StatsCard title="Profit" value="$16,540" change={8.2} />
//       </Grid>
//       <Grid item xs={12} sm={6} md={4}>
//         <StatsCard title="Active Users" value="1,248" change={3.7} />
//       </Grid>

//       {/* Revenue Chart */}
//       <Grid item xs={12} md={8}>
//         <Card>
//           <CardContent>
//             <Box display="flex" justifyContent="space-between">
//               <Typography variant="h6">Revenue Overview</Typography>
//               <Box>
//                 <Button 
//                   size="small" 
//                   variant={timeRange === 'week' ? 'contained' : 'text'}
//                   onClick={() => setTimeRange('week')}
//                   sx={{ mr: 1 }}
//                 >
//                   Week
//                 </Button>
//                 <Button 
//                   size="small" 
//                   variant={timeRange === 'month' ? 'contained' : 'text'}
//                   onClick={() => setTimeRange('month')}
//                 >
//                   Month
//                 </Button>
//               </Box>
//             </Box>
//             <Divider sx={{ my: 2 }} />
//             <Box sx={{ height: 400 }}>
//               <ResponsiveContainer width="110%" height="100%">
//                 <LineChart data={revenueData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Line type="monotone" dataKey="value" stroke="#8884d8" />
//                 </LineChart>
//               </ResponsiveContainer>
//             </Box>
//           </CardContent>
//         </Card>
//       </Grid>

//       {/* Portfolio Allocation */}
//       <Grid item xs={12} md={4}>
//         <Card sx={{ height: '100%' }}>
//           <CardContent>
//             <Typography variant="h6">Portfolio Allocation</Typography>
//             <Divider sx={{ my: 2 }} />
//             <Box sx={{ height: 400 }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie
//                     data={pieData}
//                     cx="50%"
//                     cy="50%"
//                     outerRadius={80}
//                     fill="#8884d8"
//                     dataKey="value"
//                     label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//                   >
//                     {pieData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                   </Pie>
//                   <Tooltip />
//                 </PieChart>
//               </ResponsiveContainer>
//             </Box>
//           </CardContent>
//         </Card>
//       </Grid>

//       {/* Advanced Analytics */}
//       <Grid item xs={12}>
//         <Card>
//           <CardContent>
//             <Box display="flex" justifyContent="space-between">
//               <Typography variant="h6">Advanced Analytics</Typography>
//               <FormControl size="small" sx={{ width: 500 }}>
//                 <InputLabel>Chart Type</InputLabel>
//                 <Select
//                   value={chartType}
//                   onChange={(e) => setChartType(e.target.value)}
//                   label="Chart Type"
//                 >
//                   <MenuItem value="area">Area Chart</MenuItem>
//                   <MenuItem value="radar">Radar Chart</MenuItem>
//                   <MenuItem value="scatter">Scatter Plot</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//             <Divider sx={{ my: 2 }} />
//             <Box sx={{ height: 400 }}>
//               {chartType === 'area' && (
//                 <ResponsiveContainer width="100%" height="100%">
//                   <AreaChart data={performanceData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
//                     <Area type="monotone" dataKey="expenses" stroke="#82ca9d" fill="#82ca9d" />
//                   </AreaChart>
//                 </ResponsiveContainer>
//               )}
//               {chartType === 'radar' && (
//                 <ResponsiveContainer width="100%" height="100%">
//                   <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
//                     <PolarGrid />
//                     <PolarAngleAxis dataKey="subject" />
//                     <PolarRadiusAxis />
//                     <Radar name="Portfolio" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
//                     <Tooltip />
//                   </RadarChart>
//                 </ResponsiveContainer>
//               )}
//               {chartType === 'scatter' && (
//                 <ResponsiveContainer width="100%" height="100%">
//                   <ScatterChart>
//                     <CartesianGrid />
//                     <XAxis type="number" dataKey="x" name="Risk" />
//                     <YAxis type="number" dataKey="y" name="Return" />
//                     <Tooltip cursor={{ strokeDasharray: '3 3' }} />
//                     <Scatter name="Assets" data={scatterData} fill="#FF8042" />
//                   </ScatterChart>
//                 </ResponsiveContainer>
//               )}
//             </Box>
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// };

// const RevenuePage = () => (
//   <Grid container spacing={3}>
//     <Grid item xs={12}>
//       <Card>
//         <CardContent>
//           <Typography variant="h4">Revenue Analysis</Typography>
//           <Divider sx={{ my: 2 }} />
//           <Box sx={{ height: 300 }}>
//             <ResponsiveContainer width="101%" height="100%">
//               <BarChart data={revenueData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="value" fill="lightgreen" />
//               </BarChart>
//             </ResponsiveContainer>
//           </Box>
//         </CardContent>
//       </Card>
//     </Grid>
//   </Grid>
// );

// const StocksPage = () => (
//   <Grid container spacing={3}>
//     <Grid item xs={12}>
//       <Card>
//         <CardContent>
//           <Typography variant="h4">Stock Performance</Typography>
//           <Divider sx={{ my: 2 }} />
//           <Box sx={{ height: 500 }}>
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={stockData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="value" fill="#82ca9d" />
//               </BarChart>
//             </ResponsiveContainer>
//           </Box>
//         </CardContent>
//       </Card>
//     </Grid>
//   </Grid>
// );

// // ========== Main App ========== //
// const InteractiveSidebar = ({ open, setOpen }) => {
//   const theme = useTheme();
//   const location = useLocation();
//   const [openedMenus, setOpenedMenus] = useState({});

//   const menuItems = [
//     { 
//       text: 'Dashboard', 
//       icon: <DashboardIcon />, 
//       path: '/',
//       active: location.pathname === '/'
//     },
//     {
//       text: 'Financial', 
//       icon: <RevenueIcon />,
//       path: '/financial',
//       children: [
//         { 
//           text: 'Revenue', 
//           icon: <RevenueIcon />,
//           path: '/revenue',
//           active: location.pathname === '/revenue'
//         },
//         { 
//           text: 'Expenses', 
//           icon: <TransactionsIcon />,
//           path: '/expenses'
//         }
//       ]
//     },
//     {
//       text: 'Investments', 
//       icon: <TrendingUpIcon />,
//       path: '/investments',
//       children: [
//         { 
//           text: 'Stocks', 
//           icon: <StocksIcon />,
//           path: '/stocks',
//           active: location.pathname === '/stocks'
//         },
//         { 
//           text: 'Portfolio', 
//           icon: <PieChartIcon />,
//           path: '/portfolio'
//         }
//       ]
//     }
//   ];

//   const toggleMenu = (text) => {
//     setOpenedMenus(prev => ({ ...prev, [text]: !prev[text] }));
//   };

//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: open ? drawerWidth : 72,
//         transition: theme.transitions.create('width', {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.leavingScreen
//         }),
//         '& .MuiDrawer-paper': {
//           width: open ? drawerWidth : 72,
//           overflowX: 'hidden',
//           transition: theme.transitions.create('width', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen
//           })
//         }
//       }}
//       open={open}
//     >
//       <Box sx={{ 
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: open ? 'space-between' : 'center',
//         p: 2,
//         height: 64
//       }}>
//         {open && <Typography variant="h6">FinDash</Typography>}
//         <IconButton onClick={() => setOpen(!open)}>
//           {open ? <ChevronLeft /> : <ChevronRight />}
//         </IconButton>
//       </Box>
//       <Divider />
//       <List>
//         {menuItems.map((item) => (
//           <React.Fragment key={item.text}>
//             <ListItem 
//               button 
//               component={Link}
//               to={item.path}
//               onClick={() => item.children ? toggleMenu(item.text) : null}
//               sx={{
//                 minHeight: 48,
//                 justifyContent: open ? 'initial' : 'center',
//                 px: 2.5,
//                 bgcolor: item.active ? 'action.selected' : 'inherit'
//               }}
//             >
//               <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto' }}>
//                 {item.icon}
//               </ListItemIcon>
//               {open && (
//                 <>
//                   <ListItemText primary={item.text} />
//                   {item.children && (openedMenus[item.text] ? <ExpandLess /> : <ExpandMore />)}
//                 </>
//               )}
//             </ListItem>

//             {item.children && open && (
//               <Collapse in={openedMenus[item.text]} timeout="auto" unmountOnExit>
//                 <List component="div" disablePadding>
//                   {item.children.map((child) => (
//                     <ListItem 
//                       key={child.text} 
//                       button 
//                       component={Link}
//                       to={child.path}
//                       sx={{ 
//                         pl: 4,
//                         bgcolor: child.active ? 'action.selected' : 'inherit'
//                       }}
//                     >
//                       <ListItemIcon sx={{ minWidth: 0, mr: 3 }}>{child.icon}</ListItemIcon>
//                       <ListItemText primary={child.text} />
//                     </ListItem>
//                   ))}
//                 </List>
//               </Collapse>
//             )}
//           </React.Fragment>
//         ))}
//       </List>
//     </Drawer>
//   );
// };

// const AppContent = () => {
//   const theme = useTheme();
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleMenu = (event) => setAnchorEl(event.currentTarget);
//   const handleClose = () => setAnchorEl(null);

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar 
//         position="fixed" 
//         sx={{ 
//           width: `calc(100% - ${sidebarOpen ? drawerWidth : 72}px)`,
//           ml: sidebarOpen ? drawerWidth : 72,
//           transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen
//           })
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             edge="start"
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
//             Financial Dashboard
//           </Typography>
//           <IconButton color="inherit"><NotificationsIcon /></IconButton>
//           <IconButton onClick={handleMenu} color="inherit">
//             <AccountCircleIcon />
//           </IconButton>
//           <Menu
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleClose}
//           >
//             <MenuItem onClick={handleClose}>Profile</MenuItem>
//             <MenuItem onClick={handleClose}>Logout</MenuItem>
//           </Menu>
//         </Toolbar>
//       </AppBar>

//       <InteractiveSidebar open={sidebarOpen} setOpen={setSidebarOpen} />

//       <Box 
//         component="main" 
//         sx={{ 
//           flexGrow: 1, 
//           p: 3,
//           width: `calc(100% - ${sidebarOpen ? drawerWidth : 72}px)`,
//           transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen
//           })
//         }}
//       >
//         <Toolbar />
//         <Routes>
//           <Route path="/" element={<DashboardPage />} />
//           <Route path="/revenue" element={<RevenuePage />} />
//           <Route path="/stocks" element={<StocksPage />} />
//         </Routes>
//       </Box>
//     </Box>
//   );
// };

// const App = () => (
//   <Router>
//     <AppContent />
//   </Router>
// );

// export default App;
// export const Task= App;
// import React, { useState } from 'react';
// import {
//   Box, Grid, Card, CardContent, Typography, Divider, Tabs, Tab,
//   Button, useTheme, useMediaQuery, Drawer, List, ListItem,
//   ListItemIcon, ListItemText, CssBaseline, AppBar, Toolbar,
//   IconButton, Menu, MenuItem, Collapse, Badge, Avatar,
//   FormControl, InputLabel, Select, Paper
// } from '@mui/material';
// import {
//   Menu as MenuIcon,
//   Dashboard as DashboardIcon,
//   AttachMoney as RevenueIcon,
//   PieChart as PieChartIcon,
//   ShowChart as StocksIcon,
//   Receipt as TransactionsIcon,
//   Settings as SettingsIcon,
//   Notifications as NotificationsIcon,
//   AccountCircle as AccountCircleIcon,
//   ExpandLess,
//   ExpandMore,
//   ChevronLeft,
//   ChevronRight,
//   TrendingUp as TrendingUpIcon,
//   Assessment as AssessmentIcon
// } from '@mui/icons-material';
// import {
//   LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
//   XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
//   AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis,
//   PolarRadiusAxis, Radar, ScatterChart, Scatter, ZAxis,
//   ComposedChart, ReferenceLine
// } from 'recharts';
// import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// // ========== Data ========== //
// const revenueData = [
//   { month: 'Jan', current: 4000, previous: 3500, target: 4500 },
//   { month: 'Feb', current: 3000, previous: 3200, target: 3800 },
//   { month: 'Mar', current: 5000, previous: 4200, target: 4800 },
//   { month: 'Apr', current: 2780, previous: 3100, target: 3500 },
//   { month: 'May', current: 1890, previous: 2100, target: 2500 },
//   { month: 'Jun', current: 2390, previous: 2600, target: 3000 },
// ];

// const revenueByChannel = [
//   { name: 'Online', value: 12000 },
//   { name: 'Retail', value: 8000 },
//   { name: 'Wholesale', value: 6000 },
//   { name: 'Other', value: 2000 }
// ];

// const stockData = [
//   { symbol: 'AAPL', price: 182, change: 2.3, volume: '120M' },
//   { symbol: 'MSFT', price: 420, change: 1.2, volume: '95M' },
//   { symbol: 'GOOG', price: 142, change: -0.5, volume: '45M' },
//   { symbol: 'AMZN', price: 185, change: 3.1, volume: '80M' }
// ];

// const portfolioData = [
//   { asset: 'Stocks', value: 45000, allocation: 45 },
//   { asset: 'Bonds', value: 25000, allocation: 25 },
//   { asset: 'Cash', value: 15000, allocation: 15 },
//   { asset: 'Real Estate', value: 15000, allocation: 15 }
// ];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// // ========== Components ========== //
// const StatsCard = ({ title, value, change }) => {
//   const isPositive = change >= 0;
//   return (
//     <Card>
//       <CardContent>
//         <Typography color="text.secondary" gutterBottom>{title}</Typography>
//         <Typography variant="h4">{value}</Typography>
//         <Typography color={isPositive ? 'success.main' : 'error.main'}>
//           {isPositive ? '↑' : '↓'} {Math.abs(change)}% vs last month
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// const drawerWidth = 240;

// // ========== Pages ========== //
// const RevenuePage = () => {
//   const [timeRange, setTimeRange] = useState('monthly');

//   return (
//     <Grid container spacing={3}>
//       <Grid item xs={12} sm={6} md={3}>
//         <StatsCard title="Total Revenue" value="$48,780" change={12.5} />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <StatsCard title="Growth Rate" value="8.2%" change={2.3} />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <StatsCard title="Avg. Order" value="$124" change={-1.2} />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <StatsCard title="New Customers" value="1,248" change={5.7} />
//       </Grid>

//       {/* Revenue Trend */}
//       <Grid item xs={12} md={8}>
//         <Card>
//           <CardContent>
//             <Box display="flex" justifyContent="space-between">
//               <Typography variant="h6">Revenue Trend</Typography>
//               <ButtonGroup size="small">
//                 <Button 
//                   variant={timeRange === 'weekly' ? 'contained' : 'outlined'}
//                   onClick={() => setTimeRange('weekly')}
//                 >
//                   Weekly
//                 </Button>
//                 <Button 
//                   variant={timeRange === 'monthly' ? 'contained' : 'outlined'}
//                   onClick={() => setTimeRange('monthly')}
//                 >
//                   Monthly
//                 </Button>
//                 <Button 
//                   variant={timeRange === 'quarterly' ? 'contained' : 'outlined'}
//                   onClick={() => setTimeRange('quarterly')}
//                 >
//                   Quarterly
//                 </Button>
//               </ButtonGroup>
//             </Box>
//             <Divider sx={{ my: 2 }} />
//             <Box sx={{ height: 400 }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <ComposedChart data={revenueData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="month" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Area type="monotone" dataKey="previous" fill="#8884d8" stroke="#8884d8" fillOpacity={0.2} name="Last Year" />
//                   <Bar dataKey="current" fill="#413ea0" name="Current Year" />
//                   <Line type="monotone" dataKey="target" stroke="#ff7300" strokeDasharray="5 5" name="Target" />
//                 </ComposedChart>
//               </ResponsiveContainer>
//             </Box>
//           </CardContent>
//         </Card>
//       </Grid>

//       {/* Revenue Distribution */}
//       <Grid item xs={12} md={4}>
//         <Card sx={{ height: '100%' }}>
//           <CardContent>
//             <Typography variant="h6">Revenue by Channel</Typography>
//             <Divider sx={{ my: 2 }} />
//             <Box sx={{ height: 400 }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie
//                     data={revenueByChannel}
//                     cx="50%"
//                     cy="50%"
//                     outerRadius={80}
//                     innerRadius={40}
//                     paddingAngle={5}
//                     dataKey="value"
//                     label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                   >
//                     {revenueByChannel.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                   </Pie>
//                   <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
//                 </PieChart>
//               </ResponsiveContainer>
//             </Box>
//           </CardContent>
//         </Card>
//       </Grid>

//       {/* Monthly Breakdown */}
//       <Grid item xs={12}>
//         <Card>
//           <CardContent>
//             <Typography variant="h6">Monthly Performance</Typography>
//             <Divider sx={{ my: 2 }} />
//             <Box sx={{ height: 400 }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={revenueData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="month" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="current" fill="#8884d8" name="Current Revenue" />
//                   <Bar dataKey="previous" fill="#82ca9d" name="Previous Year" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </Box>
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// };

// const StocksPage = () => {
//   const [sector, setSector] = useState('all');

//   return (
//     <Grid container spacing={3}>
//       <Grid item xs={12} sm={6} md={3}>
//         <StatsCard title="Total Value" value="$182,450" change={5.2} />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <StatsCard title="Today's Gain" value="$2,450" change={1.3} />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <StatsCard title="YTD Return" value="12.8%" change={3.1} />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <StatsCard title="Dividends" value="$1,240" change={0.8} />
//       </Grid>

//       {/* Stock Performance */}
//       <Grid item xs={12} md={8}>
//         <Card>
//           <CardContent>
//             <Box display="flex" justifyContent="space-between">
//               <Typography variant="h6">Stock Performance</Typography>
//               <FormControl size="small" sx={{ width: 200 }}>
//                 <InputLabel>Sector</InputLabel>
//                 <Select
//                   value={sector}
//                   onChange={(e) => setSector(e.target.value)}
//                   label="Sector"
//                 >
//                   <MenuItem value="all">All Sectors</MenuItem>
//                   <MenuItem value="tech">Technology</MenuItem>
//                   <MenuItem value="finance">Financial</MenuItem>
//                   <MenuItem value="healthcare">Healthcare</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//             <Divider sx={{ my: 2 }} />
//             <Box sx={{ height: 400 }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={stockData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="symbol" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="price" fill="#8884d8" name="Price ($)" />
//                   <Bar dataKey="change" fill="#82ca9d" name="Change (%)" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </Box>
//           </CardContent>
//         </Card>
//       </Grid>

//       {/* Stock Portfolio */}
//       <Grid item xs={12} md={4}>
//         <Card sx={{ height: '100%' }}>
//           <CardContent>
//             <Typography variant="h6">Portfolio Allocation</Typography>
//             <Divider sx={{ my: 2 }} />
//             <Box sx={{ height: 400 }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie
//                     data={portfolioData}
//                     cx="50%"
//                     cy="50%"
//                     outerRadius={80}
//                     innerRadius={40}
//                     paddingAngle={5}
//                     dataKey="allocation"
//                     label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                   >
//                     {portfolioData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                   </Pie>
//                   <Tooltip />
//                 </PieChart>
//               </ResponsiveContainer>
//             </Box>
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// };

// const PortfolioPage = () => {
//   const [timeFrame, setTimeFrame] = useState('1y');

//   return (
//     <Grid container spacing={3}>
//       <Grid item xs={12} sm={6} md={3}>
//         <StatsCard title="Total Value" value="$102,450" change={5.2} />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <StatsCard title="Risk Level" value="Medium" change={-1.3} />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <StatsCard title="YTD Return" value="8.4%" change={2.1} />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <StatsCard title="Dividends" value="$1,840" change={0.5} />
//       </Grid>

//       {/* Portfolio Growth */}
//       <Grid item xs={12} md={8}>
//         <Card>
//           <CardContent>
//             <Box display="flex" justifyContent="space-between">
//               <Typography variant="h6">Portfolio Growth</Typography>
//               <ButtonGroup size="small">
//                 <Button 
//                   variant={timeFrame === '1m' ? 'contained' : 'outlined'}
//                   onClick={() => setTimeFrame('1m')}
//                 >
//                   1M
//                 </Button>
//                 <Button 
//                   variant={timeFrame === '6m' ? 'contained' : 'outlined'}
//                   onClick={() => setTimeFrame('6m')}
//                 >
//                   6M
//                 </Button>
//                 <Button 
//                   variant={timeFrame === '1y' ? 'contained' : 'outlined'}
//                   onClick={() => setTimeFrame('1y')}
//                 >
//                   1Y
//                 </Button>
//                 <Button 
//                   variant={timeFrame === 'all' ? 'contained' : 'outlined'}
//                   onClick={() => setTimeFrame('all')}
//                 >
//                   All
//                 </Button>
//               </ButtonGroup>
//             </Box>
//             <Divider sx={{ my: 2 }} />
//             <Box sx={{ height: 400 }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={portfolioGrowthData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="date" />
//                   <YAxis />
//                   <Tooltip />
//                   <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
//                   <ReferenceLine y={100000} label="Goal" stroke="red" strokeDasharray="3 3" />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </Box>
//           </CardContent>
//         </Card>
//       </Grid>

//       {/* Asset Allocation */}
//       <Grid item xs={12} md={4}>
//         <Card sx={{ height: '100%' }}>
//           <CardContent>
//             <Typography variant="h6">Asset Allocation</Typography>
//             <Divider sx={{ my: 2 }} />
//             <Box sx={{ height: 400 }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <RadarChart cx="50%" cy="50%" outerRadius="80%" data={portfolioRiskData}>
//                   <PolarGrid />
//                   <PolarAngleAxis dataKey="subject" />
//                   <PolarRadiusAxis />
//                   <Radar name="Your Portfolio" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
//                   <Radar name="Benchmark" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
//                   <Legend />
//                 </RadarChart>
//               </ResponsiveContainer>
//             </Box>
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// };

// // ========== Main App ========== //
// const Apps = () => {
//   const theme = useTheme();
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const location = useLocation();
//   const [openedMenus, setOpenedMenus] = useState({});

//   const menuItems = [
//     { 
//       text: 'Dashboard', 
//       icon: <DashboardIcon />, 
//       path: '/',
//       active: location.pathname === '/'
//     },
//     {
//       text: 'Revenue', 
//       icon: <RevenueIcon />,
//       path: '/revenue',
//       active: location.pathname === '/revenue'
//     },
//     {
//       text: 'Stocks', 
//       icon: <StocksIcon />,
//       path: '/stocks',
//       active: location.pathname === '/stocks'
//     },
//     {
//       text: 'Portfolio', 
//       icon: <PieChartIcon />,
//       path: '/portfolio',
//       active: location.pathname === '/portfolio'
//     }
//   ];

//   const handleMenu = (event) => setAnchorEl(event.currentTarget);
//   const handleClose = () => setAnchorEl(null);
//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar 
//         position="fixed" 
//         sx={{ 
//           width: `calc(100% - ${sidebarOpen ? drawerWidth : 72}px)`,
//           ml: sidebarOpen ? drawerWidth : 72,
//           transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen
//           })
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             edge="start"
//             onClick={toggleSidebar}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
//             Financial Dashboard
//           </Typography>
//           <IconButton color="inherit"><NotificationsIcon /></IconButton>
//           <IconButton onClick={handleMenu} color="inherit">
//             <AccountCircleIcon />
//           </IconButton>
//           <Menu
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleClose}
//           >
//             <MenuItem onClick={handleClose}>Profile</MenuItem>
//             <MenuItem onClick={handleClose}>Logout</MenuItem>
//           </Menu>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         variant="permanent"
//         sx={{
//           width: sidebarOpen ? drawerWidth : 72,
//           flexShrink: 0,
//           whiteSpace: 'nowrap',
//           transition: theme.transitions.create('width', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen
//           }),
//           '& .MuiDrawer-paper': {
//             width: sidebarOpen ? drawerWidth : 72,
//             overflowX: 'hidden',
//             transition: theme.transitions.create('width', {
//               easing: theme.transitions.easing.sharp,
//               duration: theme.transitions.duration.leavingScreen
//             })
//           }
//         }}
//         open={sidebarOpen}
//       >
//         <Box sx={{ 
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: sidebarOpen ? 'space-between' : 'center',
//           p: 2,
//           height: 64
//         }}>
//           {sidebarOpen && <Typography variant="h6">FinDash</Typography>}
//           <IconButton onClick={toggleSidebar}>
//             {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
//           </IconButton>
//         </Box>
//         <Divider />
//         <List>
//           {menuItems.map((item) => (
//             <ListItem 
//               button 
//               key={item.text}
//               component={Link}
//               to={item.path}
//               sx={{
//                 minHeight: 48,
//                 justifyContent: sidebarOpen ? 'initial' : 'center',
//                 px: 2.5,
//                 bgcolor: item.active ? 'action.selected' : 'inherit'
//               }}
//             >
//               <ListItemIcon sx={{ minWidth: 0, mr: sidebarOpen ? 3 : 'auto' }}>
//                 {item.icon}
//               </ListItemIcon>
//               {sidebarOpen && <ListItemText primary={item.text} />}
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>

//       <Box 
//         component="main" 
//         sx={{ 
//           flexGrow: 1, 
//           p: 3,
//           width: `calc(100% - ${sidebarOpen ? drawerWidth : 72}px)`,
//           transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen
//           })
//         }}
//       >
//         <Toolbar />
//         <Routes>
//           <Route path="/" element={<DashboardPage />} />
//           <Route path="/revenue" element={<RevenuePage />} />
//           <Route path="/stocks" element={<StocksPage />} />
//           <Route path="/portfolio" element={<PortfolioPage />} />
//         </Routes>
//       </Box>
//     </Box>
//   );
// };

// export function MainApp() {
//   return (
//     <Router>
//       <Apps />
//     </Router>
//   );
// }
import React, { useState } from 'react';
import {
  Box, Grid, Card, CardContent, Typography, Divider, Tabs, Tab,
  Button, useTheme, useMediaQuery, Drawer, List, ListItem,
  ListItemIcon, ListItemText, CssBaseline, AppBar, Toolbar,
  IconButton, Menu, MenuItem, Collapse, Badge, Avatar,
  FormControl, InputLabel, Select, ButtonGroup
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  AttachMoney as RevenueIcon,
  PieChart as PieChartIcon,
  ShowChart as StocksIcon,
  Receipt as TransactionsIcon,
  Settings as SettingsIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  ExpandLess,
  ExpandMore,
  ChevronLeft,
  ChevronRight,
  TrendingUp as TrendingUpIcon,
  Assessment as AssessmentIcon
} from '@mui/icons-material';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, Radar, ScatterChart, Scatter, ZAxis,
  ComposedChart, ReferenceLine
} from 'recharts';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// ========== Data ========== //
const revenueData = [
  { month: 'Jan', current: 4000, previous: 3500, target: 4500 },
  { month: 'Feb', current: 3000, previous: 3200, target: 3800 },
  { month: 'Mar', current: 5000, previous: 4200, target: 4800 },
  { month: 'Apr', current: 2780, previous: 3100, target: 3500 },
  { month: 'May', current: 1890, previous: 2100, target: 2500 },
  { month: 'Jun', current: 2390, previous: 2600, target: 3000 },
];

const revenueByChannel = [
  { name: 'Online', value: 12000 },
  { name: 'Retail', value: 8000 },
  { name: 'Wholesale', value: 6000 },
  { name: 'Other', value: 2000 }
];

const stockData = [
  { symbol: 'AAPL', price: 182, change: 2.3, volume: '120M' },
  { symbol: 'MSFT', price: 420, change: 1.2, volume: '95M' },
  { symbol: 'GOOG', price: 142, change: -0.5, volume: '45M' },
  { symbol: 'AMZN', price: 185, change: 3.1, volume: '80M' }
];

const portfolioData = [
  { asset: 'Stocks', value: 45000, allocation: 45 },
  { asset: 'Bonds', value: 25000, allocation: 25 },
  { asset: 'Cash', value: 15000, allocation: 15 },
  { asset: 'Real Estate', value: 15000, allocation: 15 }
];

const portfolioGrowthData = [
  { date: 'Jan', value: 90000 },
  { date: 'Feb', value: 92000 },
  { date: 'Mar', value: 95000 },
  { date: 'Apr', value: 97000 },
  { date: 'May', value: 98000 },
  { date: 'Jun', value: 102000 }
];

const portfolioRiskData = [
  { subject: 'Growth', A: 120, B: 110 },
  { subject: 'Risk', A: 98, B: 130 },
  { subject: 'Liquidity', A: 86, B: 130 },
  { subject: 'Dividends', A: 99, B: 100 },
  { subject: 'Volatility', A: 85, B: 90 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// ========== Components ========== //
const StatsCard = ({ title, value, change }) => {
  const isPositive = change >= 0;
  return (
    <Card>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>{title}</Typography>
        <Typography variant="h4">{value}</Typography>
        <Typography color={isPositive ? 'success.main' : 'error.main'}>
          {isPositive ? '↑' : '↓'} {Math.abs(change)}% vs last month
        </Typography>
      </CardContent>
    </Card>
  );
};

const drawerWidth = 240;

// ========== Pages ========== //
const DashboardPage = () => {
  const [tabValue, setTabValue] = useState(0);
  const [timeRange, setTimeRange] = useState('week');
  const [chartType, setChartType] = useState('area');

  return (
    <Grid container spacing={3}>
      {/* Stats Cards */}
      <Grid item xs={12} sm={6} md={4}>
        <StatsCard title="Total Revenue" value="$24,780" change={12.5} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StatsCard title="Expenses" value="$8,240" change={-4.3} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StatsCard title="Profit" value="$16,540" change={8.2} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StatsCard title="Active Users" value="1,248" change={3.7} />
      </Grid>

      {/* Main Charts */}
      <Grid item xs={12} md={8}>
        <Card>
          <CardContent>
            <Typography variant="h6">Revenue Overview</Typography>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ height: 400 ,width:400}}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="current" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={8}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Typography variant="h6">Portfolio Allocation</Typography>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ height:400 ,width:400}}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={portfolioData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="allocation"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {portfolioData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

const RevenuePage = () => {
  const [timeRange, setTimeRange] = useState('monthly');

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <StatsCard title="Total Revenue" value="$48,780" change={12.5} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatsCard title="Growth Rate" value="8.2%" change={2.3} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatsCard title="Avg. Order" value="$124" change={-1.2} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatsCard title="New Customers" value="1,248" change={5.7} />
      </Grid>

      {/* Revenue Trend */}
      <Grid item xs={12} md={8}>
        <Card>
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">Revenue Trend</Typography>
              <ButtonGroup size="small">
                <Button 
                  variant={timeRange === 'weekly' ? 'contained' : 'outlined'}
                  onClick={() => setTimeRange('weekly')}
                >
                  Weekly
                </Button>
                <Button 
                  variant={timeRange === 'monthly' ? 'contained' : 'outlined'}
                  onClick={() => setTimeRange('monthly')}
                >
                  Monthly
                </Button>
                <Button 
                  variant={timeRange === 'quarterly' ? 'contained' : 'outlined'}
                  onClick={() => setTimeRange('quarterly')}
                >
                  Quarterly
                </Button>
              </ButtonGroup>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ height: 400 }}>
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="previous" fill="#8884d8" stroke="#8884d8" fillOpacity={0.2} name="Last Year" />
                  <Bar dataKey="current" fill="#413ea0" name="Current Year" />
                  <Line type="monotone" dataKey="target" stroke="#ff7300" strokeDasharray="5 5" name="Target" />
                </ComposedChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Revenue Distribution */}
      <Grid item xs={12} md={4}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Typography variant="h6">Revenue by Channel</Typography>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ height: 400 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={revenueByChannel}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={40}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {revenueByChannel.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Monthly Breakdown */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6">Monthly Performance</Typography>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ height: 400 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="current" fill="#8884d8" name="Current Revenue" />
                  <Bar dataKey="previous" fill="#82ca9d" name="Previous Year" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

const StocksPage = () => {
  const [sector, setSector] = useState('all');

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <StatsCard title="Total Value" value="$182,450" change={5.2} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatsCard title="Today's Gain" value="$2,450" change={1.3} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatsCard title="YTD Return" value="12.8%" change={3.1} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatsCard title="Dividends" value="$1,240" change={0.8} />
      </Grid>

      {/* Stock Performance */}
      <Grid item xs={12} md={8}>
        <Card>
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">Stock Performance</Typography>
              <FormControl size="small" sx={{ width: 200 }}>
                <InputLabel>Sector</InputLabel>
                <Select
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  label="Sector"
                >
                  <MenuItem value="all">All Sectors</MenuItem>
                  <MenuItem value="tech">Technology</MenuItem>
                  <MenuItem value="finance">Financial</MenuItem>
                  <MenuItem value="healthcare">Healthcare</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ height: 400 }}>
              <ResponsiveContainer width="101%" height="100%">
                <BarChart data={stockData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="symbol" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="price" fill="#8884d8" name="Price ($)" />
                  <Bar dataKey="change" fill="#82ca9d" name="Change (%)" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Stock Portfolio */}
      <Grid item xs={12} md={4}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Typography variant="h6">Portfolio Allocation</Typography>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ height: 400 }}>
              <ResponsiveContainer width="101%" height="100%">
                <PieChart>
                  <Pie
                    data={portfolioData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={40}
                    paddingAngle={5}
                    dataKey="allocation"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {portfolioData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

const PortfolioPage = () => {
  const [timeFrame, setTimeFrame] = useState('1y');

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <StatsCard title="Total Value" value="$102,450" change={5.2} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StatsCard title="Risk Level" value="Medium" change={-1.3} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StatsCard title="YTD Return" value="8.4%" change={2.1} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StatsCard title="Dividends" value="$1,840" change={0.5} />
      </Grid>

      {/* Portfolio Growth */}
      <Grid item xs={12} md={8}>
        <Card>
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">Portfolio Growth</Typography>
              <ButtonGroup size="small">
                <Button 
                  variant={timeFrame === '1m' ? 'contained' : 'outlined'}
                  onClick={() => setTimeFrame('1m')}
                >
                  1M
                </Button>
                <Button 
                  variant={timeFrame === '6m' ? 'contained' : 'outlined'}
                  onClick={() => setTimeFrame('6m')}
                >
                  6M
                </Button>
                <Button 
                  variant={timeFrame === '1y' ? 'contained' : 'outlined'}
                  onClick={() => setTimeFrame('1y')}
                >
                  1Y
                </Button>
                <Button 
                  variant={timeFrame === 'all' ? 'contained' : 'outlined'}
                  onClick={() => setTimeFrame('all')}
                >
                  All
                </Button>
              </ButtonGroup>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ height: 400 }}>
              <ResponsiveContainer width="101%" height="100%">
                <AreaChart data={portfolioGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
                  <ReferenceLine y={100000} label="Goal" stroke="red" strokeDasharray="3 3" />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Asset Allocation */}
      <Grid item xs={12} md={4}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Typography variant="h6">Asset Allocation</Typography>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ height: 400 }}>
              <ResponsiveContainer width="101%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={portfolioRiskData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis />
                  <Radar name="Your Portfolio" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  <Radar name="Benchmark" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

// ========== Main App ========== //
const App = () => {
  const theme = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();

  const menuItems = [
    { 
      text: 'Dashboard', 
      icon: <DashboardIcon />, 
      path: '/',
      active: location.pathname === '/'
    },
    {
      text: 'Revenue', 
      icon: <RevenueIcon />,
      path: '/revenue',
      active: location.pathname === '/revenue'
    },
    {
      text: 'Stocks', 
      icon: <StocksIcon />,
      path: '/stocks',
      active: location.pathname === '/stocks'
    },
    {
      text: 'Portfolio', 
      icon: <PieChartIcon />,
      path: '/portfolio',
      active: location.pathname === '/portfolio'
    }
  ];

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor:'black',
          width: `calc(100% - ${sidebarOpen ? drawerWidth : 72}px)`,
          ml: sidebarOpen ? drawerWidth : 72,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
          })
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleSidebar}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            Financial Dashboard
          </Typography>
          <IconButton color="inherit"><NotificationsIcon /></IconButton>
          <IconButton onClick={handleMenu} color="inherit">
            <AccountCircleIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
         
          width: sidebarOpen ? drawerWidth : 72,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
          }),
          '& .MuiDrawer-paper': {
            width: sidebarOpen ? drawerWidth : 72,
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen
            })
          }
        }}
        open={sidebarOpen}
      >
        <Box sx={{ 
          backgroundColor:'red',
          color:'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: sidebarOpen ? 'space-between' : 'center',
          p: 2,
          height: 64
        }}>
          {sidebarOpen && <Typography variant="h6">Dash Board</Typography>}
          <IconButton onClick={toggleSidebar}>
            {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </Box>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                
                minHeight: 48,
                justifyContent: sidebarOpen ? 'initial' : 'center',
                px: 2.5,
                bgcolor: item.active ? 'action.selected' : 'inherit'
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, mr: sidebarOpen ? 3 : 'auto' }}>
                {item.icon}
              </ListItemIcon>
              {sidebarOpen && <ListItemText primary={item.text} />}
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box 
        component="main" 
        sx={{ 
          
          flexGrow: 1, 
          p: 3,
          width: `calc(100% - ${sidebarOpen ? drawerWidth : 72}px)`,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
          })
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/revenue" element={<RevenuePage />} />
          <Route path="/stocks" element={<StocksPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
export const Task=MainApp;