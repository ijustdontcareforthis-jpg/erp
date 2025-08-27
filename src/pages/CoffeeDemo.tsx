import { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter,
  Coffee as CoffeeIcon,
  Thermometer,
  IceCream,
  Clock,
  Star,
  Eye,
  Edit,
  MoreHorizontal
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchHotCoffees } from '../services/api';
import DataTable from '../components/tables/DataTable';
import { TableColumn } from '../types';
import StatsCard from '../components/StatsCard';
import { Coffee } from '../interfaces/coffee.interface';

export default function CoffeeDemo() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('hot');
  const [selectedType, setSelectedType] = useState('all');

  // Using TanStack Query to fetch coffees
  const { 
    data: coffees = [], 
    isLoading, 
    isError, 
    error: queryError 
  } = useQuery<Coffee[], Error>({
    queryKey: ['coffees'],
    queryFn: fetchHotCoffees,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });

  const tabs = [
    { id: 'hot', label: 'Hot Coffees', icon: Thermometer },
    { id: 'iced', label: 'Iced Coffees', icon: IceCream },
    { id: 'favorites', label: 'Favorites', icon: Star },
  ];

  const coffeeTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'espresso', label: 'Espresso' },
    { value: 'latte', label: 'Latte' },
    { value: 'cappuccino', label: 'Cappuccino' },
    { value: 'americano', label: 'Americano' },
  ];

  const filteredCoffees = coffees.filter(coffee => {
    const matchesSearch = 
      coffee.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coffee.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coffee.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()));
      
    const matchesType = selectedType === 'all' || 
      coffee.title.toLowerCase().includes(selectedType) ||
      coffee.ingredients.some(ing => ing.toLowerCase().includes(selectedType));
      
    return matchesSearch && matchesType;
  });

  const columns: TableColumn[] = [
    {
      key: 'title',
      label: 'Coffee',
      sortable: true,
      render: (value, row) => (
        <div className="flex items-center">
          <div className="w-10 h-10 bg-amber-100 rounded-full flex-shrink-0 overflow-hidden">
            <p>☕</p>
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{value}</div>
          </div>
        </div>
      )
    },
    {
      key: 'description',
      label: 'Description',
      sortable: true,
      render: (value) => (
        <div className="text-sm text-gray-900 line-clamp-2">
          {value}
        </div>
      )
    },
    {
      key: 'ingredients',
      label: 'Ingredients',
      render: (value: string[]) => (
        <div className="flex flex-wrap gap-1">
          {value.map((ingredient, idx) => (
            <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
              {ingredient}
            </span>
          ))}
        </div>
      )
    }
  ];

  const handleView = (coffee: Coffee) => {
    // Implement view logic here
    console.log('View coffee:', coffee);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (isError) {
    const errorMessage = queryError?.message || 'Failed to fetch coffees. Please try again later.';
    return (
      <div className="bg-red-50 border-l-4 border-red-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">
              {errorMessage}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Coffee Management</h1>
          <p className="text-gray-600 mt-1">Manage your coffee menu and inventory</p>
        </div>
        <button 
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={() => alert('Add new coffee functionality coming soon!')}
        >
          <Plus size={16} className="mr-2" />
          Add Coffee
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Coffees"
          value={coffees.length.toString()}
          icon={CoffeeIcon}
          trend={{ value: `+${Math.floor(Math.random() * 5)} this week`, isPositive: true }}
        />
        <StatsCard
          title="Hot Coffees"
          value={Math.floor(coffees.length * 0.6).toString()}
          icon={Thermometer}
          trend={{ value: 'Most Popular', isPositive: true }}
        />
        <StatsCard
          title="Iced Coffees"
          value={Math.floor(coffees.length * 0.4).toString()}
          icon={IceCream}
          trend={{ value: 'Seasonal', isPositive: true }}
        />
        <StatsCard
          title="Avg. Prep Time"
          value="3-5 min"
          icon={Clock}
          trend={{ value: 'Fast Service', isPositive: true }}
        />
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search coffees..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <select 
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {coffeeTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              <button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter size={16} className="mr-2 text-gray-600" />
                <span className="text-sm">More Filters</span>
              </button>
            </div>
          </div>

          {/* DataTable */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <DataTable
              columns={columns}
              data={filteredCoffees}
              onView={handleView}
              onEdit={(coffee) => console.log('Edit:', coffee)}
              showActions={true}
              selectable={true}
            />
          </div>
        </div>
      </div>
      </div>
    );
}