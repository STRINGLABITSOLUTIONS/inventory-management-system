import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Features from './pages/Features/Features';
import CustomerStories from './pages/CustomerStories/CustomerStories';
import FindExperts from './pages/FindExperts/FindExperts';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import Integrations from './pages/Integrations/Integrations';
import Login from './pages/Authentication/Login';
import Pricing from './pages/Pricing/Pricing';
import Register from './pages/Authentication/Register';
import Resources from './pages/Resources/Resources';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardSummary from './pages/Dashboard/DashboardSummary';
import Customers from './pages/Dashboard/Customers/Customers';
import Employees from './pages/Dashboard/Employees/Employees';
import Suppliers from './pages/Dashboard/Suppliers';
import Profile from './pages/User/Profile';
import Settings from './pages/User/Settings';
import TermsAndConditions from './pages/Authentication/TermsAndConditions';
import PrivacyPolicy from './pages/Authentication/PrivacyPolicy';
import PharmacyProducts from './pages/Dashboard/Products/Pharmacy/PharmacyProducts';
import NonPharmacyProducts from './pages/Dashboard/Products/NonPharmacy/NonPharmacyProducts';
import Category from './pages/Dashboard/Setup/Category';
import UnitType from './pages/Dashboard/Setup/UnitType';
import Company from './pages/Dashboard/Setup/Company';
import PharmacyOrders from './pages/Dashboard/Orders/Pharmacy/PharmacyOrders';
import NonPharmacyOrders from './pages/Dashboard/Orders/NonPharmacy/NonPharmacyOrders';
import PurchaseNonPharmacyProducts from './pages/Dashboard/Purchase/NonPharmacy/PurchaseNonPharmacyProducts';
import PurchasePharmacyProducts from './pages/Dashboard/Purchase/Pharmacy/PurchasePharmacyProducts';
import NonPharmacyItems from './pages/Dashboard/RequestedItems/NonPharmacy/NonPharmacyItems';
import PharmacyItems from './pages/Dashboard/RequestedItems/Pharmacy/PharmacyItems';
import CustomersReturns from './pages/Dashboard/Returns/Customers/CustomersReturns';
import ExpireOrDamageReturns from './pages/Dashboard/Returns/ExpireOrDamage/ExpireOrDamageReturns';
import SuppliersList from './pages/Dashboard/Suppliers/List/SuppliersList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="customer-stories" element={<CustomerStories />} />
        <Route path="find-experts" element={<FindExperts />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="integration" element={<Integrations />} />
        <Route path="login" element={<Login />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="register" element={<Register />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="resources" element={<Resources />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardSummary />} />
          <Route path='products/pharmacy' element={<PharmacyProducts />} />
          <Route path='products/non-pharmacy' element={<NonPharmacyProducts />} />
          <Route path='requested-items/pharmacy' element={<PharmacyItems />} />
          <Route path='requested-items/non-pharmacy' element={<NonPharmacyItems />} />
          <Route path='orders/pharmacy' element={<PharmacyOrders />} />
          <Route path='orders/non-pharmacy' element={<NonPharmacyOrders />} />
          <Route path='purchases/pharmacy' element={<PurchasePharmacyProducts />} />
          <Route path='purchases/non-pharmacy' element={<PurchaseNonPharmacyProducts />} />
          <Route path='setup/category' element={<Category />} />
          <Route path='setup/unit-type' element={<UnitType />} />
          <Route path='setup/company' element={<Company />} />
          <Route path='returns/customer' element={<CustomersReturns />} />
          <Route path='returns/expire-or-damage' element={<ExpireOrDamageReturns />} />
          <Route path='employees' element={<Employees />} />
          <Route path='customers' element={<Customers />} />
          <Route path='suppliers/list' element={<SuppliersList />} />
          <Route path='suppliers/payment' element={<Suppliers />} />
          <Route path='suppliers/documents' element={<Suppliers />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
