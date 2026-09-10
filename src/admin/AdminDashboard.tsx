import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Search, 
  Edit3, 
  Trash2, 
  RefreshCw, 
  Users, 
  Inbox, 
  Sliders, 
  CheckCircle2, 
  X, 
  Save, 
  Lock, 
  DollarSign, 
  Key,
  CreditCard,
  Settings,
  Plus,
  LayoutDashboard,
  Check,
  Eye,
  EyeOff,
  UserCheck,
  Zap,
  Sparkles,
  ArrowUp,
  ArrowDown,
  Menu as MenuIcon,
  RotateCcw,
  Navigation as NavigationIcon
} from 'lucide-react';
import { Service, Lead, User } from '../types';
import { useAuth } from '../context/AuthContext';
import { usePaymentGateways, PaymentGatewayConfig } from '../context/PaymentGatewayContext';
import { useNavigation } from '../context/NavigationContext';
import { useSettings } from '../context/SettingsContext';
import { Phone, MessageSquare } from 'lucide-react';

export const AdminPortalPage: React.FC = () => {
  const { user, login } = useAuth();
  const { servicesWhatsAppNumber, updateWhatsAppNumber } = useSettings();
  const { gateways, updateGateway, setDefaultGateway } = usePaymentGateways();

  // Admin Guard State
  const [adminEmailInput, setAdminEmailInput] = useState('admin@agency.com');
  const [adminPasswordInput, setAdminPasswordInput] = useState('adminpassword123');
  const [adminLoginErr, setAdminLoginErr] = useState('');
  const [adminLoggingIn, setAdminLoggingIn] = useState(false);

  const handleAdminAuthLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdminLoggingIn(true);
    setAdminLoginErr('');
    const res = await login(adminEmailInput, adminPasswordInput);
    setAdminLoggingIn(false);
    if (!res.success) {
      setAdminLoginErr(res.error || 'Invalid credentials. Use admin@agency.com / adminpassword123');
    }
  };

  // WhatsApp Number Setting State
  const [inputWhatsApp, setInputWhatsApp] = useState(servicesWhatsAppNumber);
  const [waSaving, setWaSaving] = useState(false);
  const [waMsg, setWaMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    setInputWhatsApp(servicesWhatsAppNumber);
  }, [servicesWhatsAppNumber]);

  const handleSaveWhatsApp = async (e: React.FormEvent) => {
    e.preventDefault();
    setWaSaving(true);
    setWaMsg(null);
    const result = await updateWhatsAppNumber(inputWhatsApp);
    setWaSaving(false);
    if (result.success) {
      setWaMsg({ type: 'success', text: 'Services WhatsApp Number updated successfully! Public website buttons now route to this number.' });
    } else {
      setWaMsg({ type: 'error', text: result.error || 'Failed to update WhatsApp number.' });
    }
  };
  const { 
    menuItems, 
    updateMenuItem, 
    moveMenuItem, 
    setMenuItemOrder, 
    toggleMenuItemEnabled, 
    addMenuItem, 
    deleteMenuItem, 
    resetToDefaultMenu 
  } = useNavigation();

  // Navigation Tab State
  const [activeTab, setActiveTab] = useState<'overview' | 'services' | 'gateways' | 'menu' | 'clients' | 'leads' | 'settings'>('overview');

  // Menu Creation State
  const [newMenuLabel, setNewMenuLabel] = useState('');
  const [newMenuRoute, setNewMenuRoute] = useState('home');
  const [newMenuCustomUrl, setNewMenuCustomUrl] = useState('');

  // Services State
  const [services, setServices] = useState<Service[]>([]);
  const [servicesSearch, setServicesSearch] = useState('');
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [editPrice, setEditPrice] = useState<number>(0);
  const [editContent, setEditContent] = useState<string>('');
  const [editShortDesc, setEditShortDesc] = useState<string>('');
  const [savingService, setSavingService] = useState(false);
  const [serviceSuccessMsg, setServiceSuccessMsg] = useState('');

  // Leads State
  const [leads, setLeads] = useState<Lead[]>([]);
  const [leadsLoading, setLeadsLoading] = useState(false);

  // Clients / Users State
  const [clients, setClients] = useState<Omit<User, 'password'>[]>([]);
  const [clientsLoading, setClientsLoading] = useState(false);
  const [clientSearch, setClientSearch] = useState('');
  const [isAddClientOpen, setIsAddClientOpen] = useState(false);
  const [newClientName, setNewClientName] = useState('');
  const [newClientEmail, setNewClientEmail] = useState('');
  const [newClientPass, setNewClientPass] = useState('');
  const [addingClient, setAddingClient] = useState(false);

  // Password & Settings State
  const [adminEmail, setAdminEmail] = useState(user?.email || 'admin@agency.com');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [passChanging, setPassChanging] = useState(false);
  const [passMsg, setPassMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Razorpay Local Keys Form State
  const razorpayGw = gateways.find(g => g.type === 'razorpay') || gateways[0];
  const [rzpKeyId, setRzpKeyId] = useState(razorpayGw?.credentials?.keyId || '');
  const [rzpSecretKey, setRzpSecretKey] = useState(razorpayGw?.credentials?.secretKey || '');
  const [rzpEnabled, setRzpEnabled] = useState(razorpayGw?.enabled ?? true);
  const [rzpSavedMsg, setRzpSavedMsg] = useState('');

  useEffect(() => {
    fetchServices();
    fetchLeads();
    fetchClients();
  }, []);

  useEffect(() => {
    if (razorpayGw) {
      setRzpKeyId(razorpayGw.credentials?.keyId || '');
      setRzpSecretKey(razorpayGw.credentials?.secretKey || '');
      setRzpEnabled(razorpayGw.enabled);
    }
  }, [gateways]);

  const fetchServices = async () => {
    try {
      const res = await fetch('/api/services');
      const data = await res.json();
      if (data.success) setServices(data.data);
    } catch (err) {
      console.error('Error loading admin services', err);
    }
  };

  const fetchLeads = async () => {
    setLeadsLoading(true);
    try {
      const res = await fetch('/api/admin/leads');
      const data = await res.json();
      if (data.success) setLeads(data.data);
    } catch (err) {
      console.error('Error loading leads', err);
    } finally {
      setLeadsLoading(false);
    }
  };

  const fetchClients = async () => {
    setClientsLoading(true);
    try {
      const res = await fetch('/api/admin/users');
      const data = await res.json();
      if (data.success) setClients(data.data);
    } catch (err) {
      console.error('Error loading verified clients', err);
    } finally {
      setClientsLoading(false);
    }
  };

  // Save Razorpay Credentials
  const handleSaveRazorpayKeys = (e: React.FormEvent) => {
    e.preventDefault();
    updateGateway('razorpay', {
      enabled: rzpEnabled,
      credentials: {
        keyId: rzpKeyId,
        secretKey: rzpSecretKey
      }
    });
    setRzpSavedMsg('Razorpay Keys and Configuration saved successfully!');
    setTimeout(() => setRzpSavedMsg(''), 3000);
  };

  // Add New Client Account
  const handleAddClient = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClientName || !newClientEmail) return;
    setAddingClient(true);

    try {
      const res = await fetch('/api/admin/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newClientName,
          email: newClientEmail,
          password: newClientPass || 'client123',
          role: 'user'
        })
      });
      const data = await res.json();
      if (data.success) {
        setClients(prev => [...prev, data.data]);
        setIsAddClientOpen(false);
        setNewClientName('');
        setNewClientEmail('');
        setNewClientPass('');
        alert('Client account created successfully!');
      } else {
        alert(data.error || 'Failed to create client account');
      }
    } catch (err) {
      alert('Error connecting to server');
    } finally {
      setAddingClient(false);
    }
  };

  // Delete Client Account
  const handleDeleteClient = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete client account "${name}"?`)) return;
    try {
      const res = await fetch(`/api/admin/clients/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setClients(prev => prev.filter(c => c.id !== id));
      }
    } catch (err) {
      alert('Failed to delete client account');
    }
  };

  // Password Change Handler
  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPassMsg(null);

    if (newPassword !== confirmPassword) {
      setPassMsg({ type: 'error', text: 'New passwords do not match.' });
      return;
    }

    if (newPassword.length < 6) {
      setPassMsg({ type: 'error', text: 'Password must be at least 6 characters long.' });
      return;
    }

    setPassChanging(true);

    try {
      const res = await fetch('/api/admin/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: adminEmail,
          currentPassword,
          newPassword
        })
      });
      const data = await res.json();
      if (data.success) {
        setPassMsg({ type: 'success', text: data.message || 'Password changed successfully!' });
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setPassMsg({ type: 'error', text: data.error || 'Failed to change password.' });
      }
    } catch (err) {
      setPassMsg({ type: 'error', text: 'Server connection error.' });
    } finally {
      setPassChanging(false);
    }
  };

  // Service Edit Trigger
  const handleEditServiceClick = (s: Service) => {
    setEditingService(s);
    setEditPrice(s.basePrice);
    setEditContent(s.fullDeepContent);
    setEditShortDesc(s.shortDesc);
    setServiceSuccessMsg('');
  };

  // Save Service Edit
  const handleSaveService = async () => {
    if (!editingService) return;
    setSavingService(true);

    try {
      const res = await fetch(`/api/services/${editingService.slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          basePrice: Number(editPrice),
          fullDeepContent: editContent,
          shortDesc: editShortDesc
        })
      });

      const data = await res.json();
      if (data.success) {
        setServiceSuccessMsg(`Successfully updated ${editingService.title}!`);
        setServices(prev => prev.map(item => item.slug === editingService.slug ? data.data : item));
        setTimeout(() => {
          setEditingService(null);
          setServiceSuccessMsg('');
        }, 1200);
      }
    } catch (err) {
      alert('Failed to update service');
    } finally {
      setSavingService(false);
    }
  };

  // Lead Status Change
  const handleStatusChange = async (id: string, newStatus: 'New' | 'In Contact' | 'Closed') => {
    try {
      const res = await fetch(`/api/admin/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        setLeads(prev => prev.map(l => l.id === id ? { ...l, status: newStatus } : l));
      }
    } catch (err) {
      console.error('Error updating lead status', err);
    }
  };

  // Delete Lead
  const handleDeleteLead = async (id: string) => {
    if (!confirm('Delete this lead record?')) return;
    try {
      const res = await fetch(`/api/admin/leads/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setLeads(prev => prev.filter(l => l.id !== id));
      }
    } catch (err) {
      alert('Failed to delete lead');
    }
  };

  // Reset Seed DB
  const handleResetDatabase = async () => {
    if (!confirm('Re-seed services database back to initial state?')) return;
    try {
      const res = await fetch('/api/admin/seed', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        fetchServices();
        alert('Database successfully restored to original seed data.');
      }
    } catch (err) {
      alert('Error resetting database');
    }
  };

  const filteredServices = services.filter(s =>
    s.title.toLowerCase().includes(servicesSearch.toLowerCase()) ||
    s.category.toLowerCase().includes(servicesSearch.toLowerCase())
  );

  const filteredClients = clients.filter(c =>
    c.name.toLowerCase().includes(clientSearch.toLowerCase()) ||
    c.email.toLowerCase().includes(clientSearch.toLowerCase())
  );

  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 text-white font-sans">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-pink-500 text-white flex items-center justify-center mx-auto shadow-lg">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-black text-white">Admin Access Guard</h2>
            <p className="text-xs text-slate-400">
              Please sign in with administrator credentials to access Admin Services Settings & Management Portal.
            </p>
          </div>

          {adminLoginErr && (
            <div className="p-3.5 bg-rose-950/80 border border-rose-800 text-rose-300 rounded-xl text-xs font-bold text-center">
              {adminLoginErr}
            </div>
          )}

          <form onSubmit={handleAdminAuthLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                Admin Email
              </label>
              <input
                type="email"
                required
                value={adminEmailInput}
                onChange={(e) => setAdminEmailInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-950 text-white text-xs font-bold focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                Admin Password
              </label>
              <input
                type="password"
                required
                value={adminPasswordInput}
                onChange={(e) => setAdminPasswordInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-950 text-white text-xs font-bold focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={adminLoggingIn}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs rounded-xl shadow-lg transition flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
            >
              <Lock className="w-4 h-4" />
              <span>{adminLoggingIn ? 'Authenticating...' : 'Sign In as Administrator'}</span>
            </button>
          </form>

          <div className="p-3.5 bg-slate-800/60 rounded-xl text-[11px] text-slate-400 text-center border border-slate-700/50">
            Default Admin Credentials: <strong className="text-slate-200">admin@agency.com</strong> / <strong className="text-slate-200">adminpassword123</strong>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans pb-16">
      
      {/* 1. ADMIN HEADER (WHITE BACKGROUND, CLEAN SINGLE HORIZONTAL LINE MENU) */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        
        {/* Top Branding & Admin Info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-pink-500 text-white flex items-center justify-center font-bold shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-black text-slate-900 tracking-tight">
                  Goomo Digital Agency Admin Portal
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase border border-emerald-200">
                  Live System Active
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Logged in as <span className="font-semibold text-slate-800">{user?.email || 'admin@agency.com'}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleResetDatabase}
              className="px-3.5 py-2 border border-slate-200 hover:border-slate-400 text-slate-700 text-xs font-bold rounded-xl transition flex items-center space-x-2 bg-white shadow-sm"
            >
              <RefreshCw className="w-3.5 h-3.5 text-blue-600" />
              <span>Restore Seed DB</span>
            </button>
          </div>
        </div>

        {/* SINGLE HORIZONTAL LINE MENU BAR (WHITE BACKGROUND) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
          <nav className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto py-2 no-scrollbar">
            
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-2.5 px-4 rounded-xl text-xs font-extrabold transition flex items-center space-x-2 shrink-0 ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Overview</span>
            </button>

            <button
              onClick={() => setActiveTab('services')}
              className={`py-2.5 px-4 rounded-xl text-xs font-extrabold transition flex items-center space-x-2 shrink-0 ${
                activeTab === 'services'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>38 Services CRUD ({services.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('gateways')}
              className={`py-2.5 px-4 rounded-xl text-xs font-extrabold transition flex items-center space-x-2 shrink-0 ${
                activeTab === 'gateways'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              <span className="flex items-center space-x-1">
                <span>Payment Gateways & Razorpay</span>
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
              </span>
            </button>

            <button
              onClick={() => setActiveTab('menu')}
              className={`py-2.5 px-4 rounded-xl text-xs font-extrabold transition flex items-center space-x-2 shrink-0 ${
                activeTab === 'menu'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <MenuIcon className="w-4 h-4 text-emerald-400" />
              <span className="flex items-center space-x-1">
                <span>Header Menu Manager (Ordering)</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-100 text-emerald-800 font-extrabold">NEW</span>
              </span>
            </button>

            <button
              onClick={() => setActiveTab('clients')}
              className={`py-2.5 px-4 rounded-xl text-xs font-extrabold transition flex items-center space-x-2 shrink-0 ${
                activeTab === 'clients'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Clients & Users ({clients.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('leads')}
              className={`py-2.5 px-4 rounded-xl text-xs font-extrabold transition flex items-center space-x-2 shrink-0 ${
                activeTab === 'leads'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Inbox className="w-4 h-4" />
              <span>Leads ({leads.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`py-2.5 px-4 rounded-xl text-xs font-extrabold transition flex items-center space-x-2 shrink-0 ${
                activeTab === 'settings'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>Settings & Security</span>
            </button>

          </nav>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">

        {/* TAB 0: OVERVIEW DASHBOARD */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase">Active Micro-Services</span>
                  <div className="text-3xl font-black text-slate-900 mt-1">{services.length}</div>
                  <span className="text-[11px] text-blue-600 font-semibold">Ready for Client Booking</span>
                </div>
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                  <Sliders className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase">Registered Clients</span>
                  <div className="text-3xl font-black text-slate-900 mt-1">{clients.length}</div>
                  <span className="text-[11px] text-emerald-600 font-semibold">Pricing Unlocked</span>
                </div>
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
                  <Users className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase">Client Inquiries</span>
                  <div className="text-3xl font-black text-slate-900 mt-1">{leads.length}</div>
                  <span className="text-[11px] text-amber-600 font-semibold">Active Leads</span>
                </div>
                <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl">
                  <Inbox className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase">Razorpay Gateway</span>
                  <div className="text-lg font-black text-slate-900 mt-1 flex items-center gap-1">
                    <span className={`w-2.5 h-2.5 rounded-full ${rzpEnabled ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
                    <span>{rzpEnabled ? 'Enabled' : 'Disabled'}</span>
                  </div>
                  <span className="text-[11px] text-pink-600 font-semibold">Cards, UPI & Netbanking</span>
                </div>
                <div className="p-3 bg-pink-50 text-pink-600 rounded-2xl">
                  <CreditCard className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Quick Actions Panel */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-lg font-black text-slate-900">Admin Control Center</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => setActiveTab('gateways')}
                  className="p-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-extrabold text-xs text-left shadow-md flex items-center justify-between"
                >
                  <div>
                    <span className="block text-sm font-black">Configure Razorpay Keys</span>
                    <span className="text-[11px] text-pink-100 font-medium">Set Key ID & Secret Key</span>
                  </div>
                  <Key className="w-5 h-5 text-pink-100" />
                </button>

                <button
                  onClick={() => setActiveTab('clients')}
                  className="p-4 rounded-xl bg-slate-900 text-white font-extrabold text-xs text-left shadow-md flex items-center justify-between"
                >
                  <div>
                    <span className="block text-sm font-black">Manage Client Directory</span>
                    <span className="text-[11px] text-slate-400 font-medium">Add or edit clients</span>
                  </div>
                  <Users className="w-5 h-5 text-slate-400" />
                </button>

                <button
                  onClick={() => setActiveTab('settings')}
                  className="p-4 rounded-xl bg-blue-600 text-white font-extrabold text-xs text-left shadow-md flex items-center justify-between"
                >
                  <div>
                    <span className="block text-sm font-black">Admin Security & Password</span>
                    <span className="text-[11px] text-blue-100 font-medium">Update login credentials</span>
                  </div>
                  <Lock className="w-5 h-5 text-blue-100" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 1: SERVICES CRUD */}
        {activeTab === 'services' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200">
              <div className="relative w-full sm:w-96">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search service by title or category..."
                  value={servicesSearch}
                  onChange={(e) => setServicesSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white focus:outline-none focus:border-blue-600"
                />
              </div>
              <span className="text-xs text-slate-500 font-medium">
                Showing {filteredServices.length} of {services.length} services
              </span>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-black uppercase tracking-wider">
                      <th className="p-4">Category</th>
                      <th className="p-4">Service Title & Slug</th>
                      <th className="p-4">Live Base Price</th>
                      <th className="p-4">Delivery Time</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-900 font-medium">
                    {filteredServices.map((s) => (
                      <tr key={s.id} className="hover:bg-slate-50 transition">
                        <td className="p-4">
                          <span className="px-2.5 py-1 bg-blue-50 text-blue-700 font-bold rounded-md border border-blue-100">
                            {s.category}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="font-bold text-slate-900">{s.title}</div>
                          <div className="text-[10px] text-slate-400 font-mono">/services/{s.slug}</div>
                        </td>
                        <td className="p-4">
                          <span className="font-black text-emerald-700 text-sm">
                            ₹{s.basePrice.toLocaleString('en-IN')}
                          </span>
                        </td>
                        <td className="p-4 text-slate-600">
                          {s.deliveryTime || '3-5 Days'}
                        </td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => handleEditServiceClick(s)}
                            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition flex items-center space-x-1 ml-auto text-xs shadow-sm"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                            <span>Edit Service</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PAYMENT GATEWAYS & RAZORPAY CONFIGURATION */}
        {activeTab === 'gateways' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Dedicated Razorpay Configuration Box */}
            <div className="bg-white border-2 border-pink-500/40 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white flex items-center justify-center font-bold shadow-md">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-slate-900">
                      Razorpay Payment Gateway Integration
                    </h2>
                    <p className="text-xs text-slate-500">
                      Configure your Razorpay Live & Test Keys for instant user checkout (Cards, UPI, Netbanking).
                    </p>
                  </div>
                </div>

                {/* Active / Inactive Button for Razorpay in Header */}
                <button
                  type="button"
                  onClick={() => {
                    const nextState = !rzpEnabled;
                    setRzpEnabled(nextState);
                    updateGateway('razorpay', { enabled: nextState });
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider border shadow-sm transition flex items-center space-x-2 ${
                    rzpEnabled
                      ? 'bg-emerald-500 text-white border-emerald-600 hover:bg-emerald-600 shadow-emerald-500/20'
                      : 'bg-slate-200 text-slate-700 border-slate-300 hover:bg-slate-300'
                  }`}
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${rzpEnabled ? 'bg-white animate-pulse' : 'bg-slate-500'}`}></span>
                  <span>{rzpEnabled ? 'Active' : 'Inactive'}</span>
                </button>
              </div>

              {rzpSavedMsg && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs font-bold flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-600 shrink-0" />
                  <span>{rzpSavedMsg}</span>
                </div>
              )}

              <form onSubmit={handleSaveRazorpayKeys} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Key ID */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase text-slate-800 mb-2 flex items-center justify-between">
                      <span>Razorpay Key ID (rzp_live_... / rzp_test_...) *</span>
                      <span className="text-[10px] text-pink-600 font-bold">Public Key</span>
                    </label>
                    <div className="relative">
                      <Key className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. rzp_live_NEXUS9876543210"
                        value={rzpKeyId}
                        onChange={(e) => setRzpKeyId(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-xs font-mono text-slate-900 bg-slate-50 focus:bg-white focus:border-pink-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Secret Key */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase text-slate-800 mb-2 flex items-center justify-between">
                      <span>Razorpay Key Secret *</span>
                      <span className="text-[10px] text-slate-500 font-bold">Encrypted Secret</span>
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <input
                        type="password"
                        required
                        placeholder="e.g. rzp_secret_live_9876543210"
                        value={rzpSecretKey}
                        onChange={(e) => setRzpSecretKey(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-xs font-mono text-slate-900 bg-slate-50 focus:bg-white focus:border-pink-500 focus:outline-none"
                      />
                    </div>
                  </div>

                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-extrabold text-slate-800">
                      Razorpay Gateway Status:
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        const nextState = !rzpEnabled;
                        setRzpEnabled(nextState);
                        updateGateway('razorpay', { enabled: nextState });
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition border flex items-center space-x-1.5 ${
                        rzpEnabled
                          ? 'bg-emerald-500 text-white border-emerald-600 shadow-sm'
                          : 'bg-slate-200 text-slate-700 border-slate-300'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${rzpEnabled ? 'bg-white' : 'bg-slate-500'}`}></span>
                      <span>{rzpEnabled ? 'Active' : 'Inactive'}</span>
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 hover:from-blue-700 hover:to-pink-600 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-pink-500/20 transition flex items-center justify-center space-x-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Razorpay Configuration</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Other Gateways Grid */}
            <div className="space-y-4">
              <h3 className="text-lg font-black text-slate-900">Additional Payment Gateways</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {gateways.filter(g => g.type !== 'razorpay').map((gw) => (
                  <div key={gw.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                    <div>
                      <div className="font-extrabold text-sm text-slate-900">{gw.name}</div>
                      <div className="text-xs text-slate-500">Supported: {gw.currenciesSupported.join(', ')}</div>
                    </div>

                    {/* Active / Inactive Button for All Additional Payment Gateways */}
                    <button
                      type="button"
                      onClick={() => updateGateway(gw.id, { enabled: !gw.enabled })}
                      className={`px-4 py-2 rounded-xl text-xs font-black tracking-wide border shadow-sm transition flex items-center space-x-1.5 ${
                        gw.enabled
                          ? 'bg-emerald-500 text-white border-emerald-600 hover:bg-emerald-600 shadow-emerald-500/20'
                          : 'bg-slate-200 text-slate-700 border-slate-300 hover:bg-slate-300'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${gw.enabled ? 'bg-white' : 'bg-slate-500'}`}></span>
                      <span>{gw.enabled ? 'Active' : 'Inactive'}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 2.5: FRONTEND HEADER MENU MANAGER */}
        {activeTab === 'menu' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Intro / Header Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2">
                  <NavigationIcon className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-black text-slate-900">Header Menu Order & Visibility Manager</h3>
                  <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-extrabold rounded-full">
                    Live Sync
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1 max-w-2xl">
                  Yahan se aap website ke standard header menu ka order change kar sakte hain (Kon sa menu Shuru me, Beech me, ya Last me rahega), kisi bhi menu ko Active / Inactive kar sakte hain, ya naya custom link add kar sakte hain.
                </p>
              </div>

              <button
                onClick={() => {
                  if (confirm('Kya aap menu ko default layout me reset karna chahte hain?')) {
                    resetToDefaultMenu();
                  }
                }}
                className="px-4 py-2 border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 text-xs font-bold rounded-xl transition flex items-center space-x-2 bg-slate-50 shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                <span>Reset Default Menu</span>
              </button>
            </div>

            {/* Menu Items Table / Cards */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-4 border-b border-slate-200 bg-slate-50/50 flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                  Current Header Menu Items ({menuItems.length})
                </span>
                <span className="text-xs font-bold text-slate-500">
                  Tip: Change position numbers or use Move Up/Down buttons to adjust order
                </span>
              </div>

              <div className="divide-y divide-slate-200">
                {menuItems.map((item, index) => {
                  const isFirst = index === 0;
                  const isLast = index === menuItems.length - 1;

                  let positionLabel = `Position #${item.order}`;
                  let badgeBg = "bg-slate-100 text-slate-700 border-slate-200";

                  if (isFirst) {
                    positionLabel = "1st (Shuru / Beginning)";
                    badgeBg = "bg-blue-100 text-blue-800 border-blue-200";
                  } else if (isLast) {
                    positionLabel = `Last #${item.order} (Aakhri / End)`;
                    badgeBg = "bg-purple-100 text-purple-800 border-purple-200";
                  } else {
                    positionLabel = `#${item.order} (Beech me / Middle)`;
                    badgeBg = "bg-amber-100 text-amber-800 border-amber-200";
                  }

                  return (
                    <div 
                      key={item.id} 
                      className={`p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4 transition ${
                        item.enabled ? 'bg-white' : 'bg-slate-50/80 opacity-75'
                      }`}
                    >
                      {/* Left: Position Badge & Label */}
                      <div className="flex items-center space-x-3">
                        <div className={`px-2.5 py-1 rounded-lg border text-xs font-black shrink-0 ${badgeBg}`}>
                          {positionLabel}
                        </div>

                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <input
                              type="text"
                              value={item.label}
                              onChange={(e) => updateMenuItem(item.id, { label: e.target.value })}
                              className="font-extrabold text-sm text-slate-900 border border-slate-200 rounded-lg px-2.5 py-1 focus:outline-none focus:border-blue-600 bg-white"
                              title="Click to edit menu label"
                            />
                            {item.isDropdown && (
                              <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-bold">
                                Dropdown Menu
                              </span>
                            )}
                            {item.isSpecialButton && (
                              <span className="text-[10px] bg-gradient-to-r from-blue-600 to-pink-600 text-white px-2 py-0.5 rounded font-black">
                                Login CTA Button
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-500 font-mono">
                            Route: <span className="text-slate-800 font-semibold">{item.route}</span>
                            {item.customUrl && <span className="ml-2 text-blue-600">({item.customUrl})</span>}
                          </div>
                        </div>
                      </div>

                      {/* Middle & Right: Controls */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        {/* Position Selector Dropdown */}
                        <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
                          <span className="text-[10px] font-bold text-slate-500 uppercase px-1.5">Order:</span>
                          <select
                            value={item.order}
                            onChange={(e) => setMenuItemOrder(item.id, parseInt(e.target.value, 10))}
                            className="text-xs font-extrabold bg-white text-slate-900 border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-blue-600"
                          >
                            {menuItems.map((_, i) => (
                              <option key={i + 1} value={i + 1}>
                                {i === 0 ? '1 (Shuru / Start)' : i === menuItems.length - 1 ? `${i + 1} (Aakhri / End)` : `${i + 1} (Middle)`}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Move Up & Move Down Buttons */}
                        <div className="flex items-center space-x-1">
                          <button
                            type="button"
                            disabled={isFirst}
                            onClick={() => moveMenuItem(item.id, 'up')}
                            className="p-2 border border-slate-200 rounded-xl bg-white hover:bg-slate-100 text-slate-700 disabled:opacity-30 disabled:hover:bg-white transition"
                            title="Move Up (Upar Karein)"
                          >
                            <ArrowUp className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            disabled={isLast}
                            onClick={() => moveMenuItem(item.id, 'down')}
                            className="p-2 border border-slate-200 rounded-xl bg-white hover:bg-slate-100 text-slate-700 disabled:opacity-30 disabled:hover:bg-white transition"
                            title="Move Down (Niche Karein)"
                          >
                            <ArrowDown className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Active / Inactive Toggle Button */}
                        <button
                          type="button"
                          onClick={() => toggleMenuItemEnabled(item.id)}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-black border shadow-sm transition flex items-center space-x-1.5 ${
                            item.enabled
                              ? 'bg-emerald-500 text-white border-emerald-600 hover:bg-emerald-600 shadow-emerald-500/20'
                              : 'bg-slate-200 text-slate-700 border-slate-300 hover:bg-slate-300'
                          }`}
                        >
                          {item.enabled ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                          <span>{item.enabled ? 'Active' : 'Inactive'}</span>
                        </button>

                        {/* Delete Custom Item Button */}
                        {!item.isSystemAdmin && !['home', 'services', 'about', 'faqs', 'contact', 'login', 'admin'].includes(item.id) && (
                          <button
                            type="button"
                            onClick={() => {
                              if (confirm(`Kya aap "${item.label}" menu ko delete karna chahte hain?`)) {
                                deleteMenuItem(item.id);
                              }
                            }}
                            className="p-2 text-rose-600 hover:bg-rose-50 rounded-xl border border-rose-200 transition"
                            title="Delete custom menu item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Add Custom Menu Item Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-sm font-black text-slate-900 flex items-center space-x-2">
                <Plus className="w-4 h-4 text-blue-600" />
                <span>Add Custom Menu Item</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1">
                    Menu Title / Label
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Portfolio or Offers"
                    value={newMenuLabel}
                    onChange={(e) => setNewMenuLabel(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1">
                    Select Target Page / Route
                  </label>
                  <select
                    value={newMenuRoute}
                    onChange={(e) => setNewMenuRoute(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-600 bg-white"
                  >
                    <option value="home">Home Page</option>
                    <option value="services">Services Page</option>
                    <option value="about">About Us Page</option>
                    <option value="faqs">FAQs Page</option>
                    <option value="contact">Contact Us Page</option>
                    <option value="calculator">Quote Estimator Page</option>
                    <option value="custom">Custom External URL Link</option>
                  </select>
                </div>

                {newMenuRoute === 'custom' ? (
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 mb-1">
                      Custom External Link URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://example.com"
                      value={newMenuCustomUrl}
                      onChange={(e) => setNewMenuCustomUrl(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                ) : (
                  <div className="flex items-end">
                    <button
                      type="button"
                      disabled={!newMenuLabel.trim()}
                      onClick={() => {
                        if (!newMenuLabel.trim()) return;
                        addMenuItem({
                          label: newMenuLabel.trim(),
                          route: newMenuRoute,
                          customUrl: newMenuRoute === 'custom' ? newMenuCustomUrl : undefined
                        });
                        setNewMenuLabel('');
                        setNewMenuCustomUrl('');
                      }}
                      className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-extrabold text-xs rounded-xl transition shadow-sm flex items-center justify-center space-x-1.5"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Item To Header</span>
                    </button>
                  </div>
                )}
              </div>

              {newMenuRoute === 'custom' && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    disabled={!newMenuLabel.trim() || !newMenuCustomUrl.trim()}
                    onClick={() => {
                      if (!newMenuLabel.trim() || !newMenuCustomUrl.trim()) return;
                      addMenuItem({
                        label: newMenuLabel.trim(),
                        route: newMenuRoute,
                        customUrl: newMenuCustomUrl.trim()
                      });
                      setNewMenuLabel('');
                      setNewMenuCustomUrl('');
                    }}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-extrabold text-xs rounded-xl transition shadow-sm flex items-center space-x-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Custom Link To Header</span>
                  </button>
                </div>
              )}
            </div>

          </div>
        )}

        {/* TAB 3: CLIENTS & USERS DIRECTORY */}
        {activeTab === 'clients' && (
          <div className="space-y-6 animate-fadeIn">
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search client by name or email..."
                  value={clientSearch}
                  onChange={(e) => setClientSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white focus:outline-none focus:border-blue-600"
                />
              </div>

              <button
                onClick={() => setIsAddClientOpen(true)}
                className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs rounded-xl shadow-sm transition flex items-center justify-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Client</span>
              </button>
            </div>

            {/* Clients Table */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-black uppercase tracking-wider">
                      <th className="p-4">Client Name</th>
                      <th className="p-4">Email Address</th>
                      <th className="p-4">Rate Access Status</th>
                      <th className="p-4">Account Type</th>
                      <th className="p-4">Joined Date</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-900 font-medium">
                    {filteredClients.map((c) => (
                      <tr key={c.id} className="hover:bg-slate-50 transition">
                        <td className="p-4 font-bold text-slate-900 flex items-center space-x-2">
                          <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 font-extrabold text-xs flex items-center justify-center">
                            {c.name.charAt(0).toUpperCase()}
                          </div>
                          <span>{c.name}</span>
                        </td>
                        <td className="p-4 font-mono text-slate-600">{c.email}</td>
                        <td className="p-4">
                          <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full inline-flex items-center">
                            <CheckCircle2 className="w-3 h-3 mr-1" /> Verified & Unlocked
                          </span>
                        </td>
                        <td className="p-4">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                            c.role === 'admin' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'
                          }`}>
                            {c.role || 'client'}
                          </span>
                        </td>
                        <td className="p-4 text-slate-500 font-mono">
                          {new Date(c.createdAt).toLocaleDateString()}
                        </td>
                        <td className="p-4 text-right">
                          {c.role !== 'admin' && (
                            <button
                              onClick={() => handleDeleteClient(c.id, c.name)}
                              className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-100 transition"
                              title="Delete Client"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* TAB 4: LEADS */}
        {activeTab === 'leads' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200">
              <h3 className="text-base font-black text-slate-900">Client Lead Submissions</h3>
              <button
                onClick={fetchLeads}
                className="px-3 py-1.5 border border-slate-300 rounded-lg text-xs font-bold flex items-center space-x-1"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Refresh Stream</span>
              </button>
            </div>

            <div className="space-y-4">
              {leads.map((lead) => (
                <div 
                  key={lead.id}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3">
                      <span className="text-base font-bold text-slate-900">{lead.clientName}</span>
                      <span className="text-xs text-slate-500 font-mono">({lead.clientEmail})</span>
                      
                      <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value as any)}
                        className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border bg-slate-50 border-slate-300"
                      >
                        <option value="New">New</option>
                        <option value="In Contact">In Contact</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </div>

                    <div className="text-xs font-semibold text-blue-600">
                      Target Service: {lead.selectedService}
                    </div>

                    <p className="text-xs text-slate-700 max-w-2xl pt-1">
                      "{lead.message}"
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <span className="text-[11px] text-slate-400 font-mono">
                      {new Date(lead.timestamp).toLocaleString()}
                    </span>
                    <button
                      onClick={() => handleDeleteLead(lead.id)}
                      className="p-2 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-100 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: SETTINGS & ADMIN PASSWORD CHANGE */}
        {activeTab === 'settings' && (
          <div className="max-w-2xl mx-auto space-y-8 animate-fadeIn">
            
            {/* Services WhatsApp Number Setting Box */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
              <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-black text-slate-900">Services WhatsApp Number</h2>
                  <p className="text-xs text-slate-500">
                    Configure the main WhatsApp number used across all customer-facing AI Services buttons & pricing packages.
                  </p>
                </div>
              </div>

              {waMsg && (
                <div className={`p-4 rounded-2xl text-xs font-bold flex items-center ${
                  waMsg.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
                }`}>
                  <CheckCircle2 className="w-4 h-4 mr-2 shrink-0" />
                  <span>{waMsg.text}</span>
                </div>
              )}

              <form onSubmit={handleSaveWhatsApp} className="space-y-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase text-slate-800 mb-1">
                    Services WhatsApp Number (With Country Code) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="+91 9876543210 or 919876543210"
                      value={inputWhatsApp}
                      onChange={(e) => setInputWhatsApp(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-900 bg-white focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Include country code (e.g. +91 for India, +1 for USA, +44 for UK). The public website automatically formats this into direct WhatsApp messaging links.
                  </p>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={waSaving}
                    className="px-6 py-2.5 bg-emerald-600 text-white font-extrabold text-xs rounded-xl hover:bg-emerald-700 transition flex items-center space-x-2 shadow-md shadow-emerald-600/20 disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" />
                    <span>{waSaving ? 'Saving Number...' : 'Save WhatsApp Setting'}</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Password Change Box */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
              <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-black text-slate-900">Change Admin Password</h2>
                  <p className="text-xs text-slate-500">Update your credentials to secure your admin portal access.</p>
                </div>
              </div>

              {passMsg && (
                <div className={`p-4 rounded-2xl text-xs font-bold flex items-center ${
                  passMsg.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
                }`}>
                  <CheckCircle2 className="w-4 h-4 mr-2 shrink-0" />
                  <span>{passMsg.text}</span>
                </div>
              )}

              <form onSubmit={handleChangePassword} className="space-y-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase text-slate-800 mb-1">
                    Admin Account Email
                  </label>
                  <input
                    type="email"
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-900 bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase text-slate-800 mb-1">
                    Current Password *
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="Enter current admin password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase text-slate-800 mb-1">
                      New Password *
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="Minimum 6 characters"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase text-slate-800 mb-1">
                      Confirm New Password *
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="Re-enter new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={passChanging}
                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs rounded-xl shadow-md transition flex items-center justify-center space-x-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>{passChanging ? 'Updating Password...' : 'Update Admin Password'}</span>
                  </button>
                </div>
              </form>
            </div>

          </div>
        )}

      </main>

      {/* MODAL: EDIT SERVICE */}
      {editingService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-900 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setEditingService(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider">
                Live Backend Edit
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                Edit: {editingService.title}
              </h3>
            </div>

            {serviceSuccessMsg && (
              <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-bold flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-600" />
                <span>{serviceSuccessMsg}</span>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-900 mb-1">
                  Base Price (₹ INR) *
                </label>
                <input
                  type="number"
                  value={editPrice}
                  onChange={(e) => setEditPrice(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 font-bold text-sm bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-900 mb-1">
                  Short Description
                </label>
                <input
                  type="text"
                  value={editShortDesc}
                  onChange={(e) => setEditShortDesc(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-900 mb-1">
                  Full Content Body
                </label>
                <textarea
                  rows={6}
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-xs font-mono bg-white"
                />
              </div>

              <div className="pt-4 flex items-center justify-end space-x-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setEditingService(null)}
                  className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveService}
                  disabled={savingService}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold rounded-xl shadow-md transition flex items-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>{savingService ? 'Updating...' : 'Save & Publish Live'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* MODAL: ADD CLIENT */}
      {isAddClientOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-900">
            <button
              onClick={() => setIsAddClientOpen(false)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-black text-slate-900 mb-4">Add New Client Account</h3>

            <form onSubmit={handleAddClient} className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-800 mb-1">
                  Client Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={newClientName}
                  onChange={(e) => setNewClientName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-800 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="rahul@example.com"
                  value={newClientEmail}
                  onChange={(e) => setNewClientEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-800 mb-1">
                  Initial Password
                </label>
                <input
                  type="password"
                  placeholder="client123 (Default)"
                  value={newClientPass}
                  onChange={(e) => setNewClientPass(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white"
                />
              </div>

              <div className="pt-2 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsAddClientOpen(false)}
                  className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={addingClient}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold rounded-xl shadow-md transition"
                >
                  {addingClient ? 'Creating...' : 'Create Account'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
