// MarketHub Static Website JavaScript

// Mock data with coordinates for mapping
const mockMarkets = [
  {
    id: 1,
    name: "Downtown Farmers Market",
    location: "123 Main St, Downtown",
    city: "San Francisco",
    state: "CA",
    description: "A vibrant weekly farmers market featuring local produce, artisanal goods, and live music.",
    schedule: "Saturdays 8AM - 2PM",
    vendorCount: 45,
    categories: ["Food", "Crafts", "Produce"],
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&h=300&fit=crop",
    coordinates: { lat: 37.7749, lng: -122.4194 },
    distance: 0.5
  },
  {
    id: 2,
    name: "Artisan Craft Fair",
    location: "456 Oak Ave, Midtown",
    city: "Oakland",
    state: "CA",
    description: "Monthly craft fair showcasing local artists, handmade jewelry, pottery, and unique gifts.",
    schedule: "First Sunday of each month 10AM - 4PM",
    vendorCount: 30,
    categories: ["Crafts", "Art", "Jewelry"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    coordinates: { lat: 37.8044, lng: -122.2711 },
    distance: 2.1
  },
  {
    id: 3,
    name: "Riverside Food Truck Festival",
    location: "789 River Rd, Riverside Park",
    city: "Berkeley",
    state: "CA",
    description: "Weekly gathering of gourmet food trucks offering diverse cuisines and live entertainment.",
    schedule: "Thursdays 5PM - 9PM",
    vendorCount: 20,
    categories: ["Food", "Entertainment"],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
    coordinates: { lat: 37.8715, lng: -122.2730 },
    distance: 3.8
  }
];

// Map and location variables
let userLocation = null;
let map = null;
let markers = [];
let currentView = 'list'; // 'list' or 'grid'

const mockVendorApplications = [
  {
    id: 1,
    marketName: "Downtown Farmers Market",
    status: "pending",
    appliedDate: "2024-01-15",
    businessName: "Fresh Valley Produce"
  },
  {
    id: 2,
    marketName: "Artisan Craft Fair",
    status: "approved",
    appliedDate: "2024-01-10",
    businessName: "Handmade Pottery Co"
  }
];

// Utility functions
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="font-medium">${type === 'error' ? 'Error' : 'Success'}</div>
    <div class="text-sm">${message}</div>
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 5000);
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  return password.length >= 8;
}

// Page-specific functionality
const PageHandlers = {
  // Home page
  home: function() {
    console.log('Home page loaded');
  },

  // Markets page
  markets: function() {
    this.renderMarkets();
    this.renderMarketsSidebar();
    this.setupSearch();
    this.initializeMap();
  },

  renderMarkets: function() {
    const marketsGrid = document.getElementById('markets-grid');
    if (!marketsGrid) return;

    marketsGrid.innerHTML = mockMarkets.map(market => `
      <div class="card">
        <div class="card-header">
          <img src="${market.image}" alt="${market.name}" 
               class="w-full h-48 object-cover rounded-lg mb-4" 
               onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1hcmtldCBJbWFnZTwvdGV4dD4KPHN2Zz4='">
          <h3 class="card-title">${market.name}</h3>
          <p class="card-description">${market.location}</p>
        </div>
        <div class="card-content">
          <p class="text-sm text-muted-foreground mb-4">${market.description}</p>
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <span class="icon icon-map-pin"></span>
              <span class="text-sm">${market.city}, ${market.state}</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="icon icon-users"></span>
              <span class="text-sm">${market.vendorCount} vendors</span>
            </div>
            <div class="text-sm font-medium">${market.schedule}</div>
          </div>
          <div class="flex flex-wrap gap-2 mt-4">
            ${market.categories.map(cat => `<span class="badge badge-secondary">${cat}</span>`).join('')}
          </div>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary w-full" onclick="PageHandlers.applyToMarket(${market.id})">
            Apply to Market
          </button>
        </div>
      </div>
    `).join('');
  },

  renderMarketsSidebar: function() {
    const sidebar = document.getElementById('markets-sidebar');
    if (!sidebar) return;

    // Sort markets by distance (closest first)
    const sortedMarkets = [...mockMarkets].sort((a, b) => a.distance - b.distance);

    sidebar.innerHTML = sortedMarkets.map(market => `
      <div class="market-item p-3 border border-gray-200 rounded-lg hover:border-green-300 transition-colors cursor-pointer" 
           onclick="PageHandlers.selectMarketOnMap(${market.id})">
        <div class="flex items-start gap-3">
          <img src="${market.image}" alt="${market.name}" 
               class="w-16 h-16 object-cover rounded-md flex-shrink-0" 
               onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1hcmtldCBJtYWdlPC90ZXh0Pgo8c3ZnPg=='">
          <div class="flex-1 min-w-0">
            <h4 class="font-semibold text-sm text-gray-900 truncate">${market.name}</h4>
            <p class="text-xs text-gray-600 mb-1">${market.city}, ${market.state}</p>
            <div class="flex items-center gap-2 text-xs text-gray-500">
              <span class="icon icon-map-pin"></span>
              <span>${market.distance} miles away</span>
            </div>
            <div class="flex items-center gap-2 text-xs text-gray-500">
              <span class="icon icon-users"></span>
              <span>${market.vendorCount} vendors</span>
            </div>
            <div class="text-xs text-gray-500 mt-1">${market.schedule}</div>
          </div>
        </div>
        <div class="mt-2">
          <button class="btn btn-sm btn-primary w-full" onclick="event.stopPropagation(); PageHandlers.applyToMarket(${market.id})">
            Apply
          </button>
        </div>
      </div>
    `).join('');
  },

  setupSearch: function() {
    const searchInput = document.getElementById('search-input');
    const locationInput = document.getElementById('location-input');
    
    if (searchInput) {
      searchInput.addEventListener('input', this.handleSearch.bind(this));
    }
    
    if (locationInput) {
      locationInput.addEventListener('input', this.handleSearch.bind(this));
    }
  },

  handleSearch: function() {
    const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
    const location = document.getElementById('location-input')?.value.toLowerCase() || '';
    
    const filtered = mockMarkets.filter(market => {
      const matchesSearch = market.name.toLowerCase().includes(searchTerm) ||
                           market.description.toLowerCase().includes(searchTerm) ||
                           market.categories.some(cat => cat.toLowerCase().includes(searchTerm));
      
      const matchesLocation = market.city.toLowerCase().includes(location) ||
                             market.state.toLowerCase().includes(location) ||
                             market.location.toLowerCase().includes(location);
      
      return matchesSearch && (location === '' || matchesLocation);
    });
    
    this.renderFilteredMarkets(filtered);
  },

  renderFilteredMarkets: function(markets) {
    const marketsGrid = document.getElementById('markets-grid');
    if (!marketsGrid) return;

    if (markets.length === 0) {
      marketsGrid.innerHTML = `
        <div class="col-span-full text-center py-12">
          <p class="text-muted-foreground">No markets found matching your search criteria.</p>
        </div>
      `;
      return;
    }

    marketsGrid.innerHTML = markets.map(market => `
      <div class="card">
        <div class="card-header">
          <img src="${market.image}" alt="${market.name}" 
               class="w-full h-48 object-cover rounded-lg mb-4" 
               onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1hcmtldCBJbWFnZTwvdGV4dD4KPHN2Zz4='">
          <h3 class="card-title">${market.name}</h3>
          <p class="card-description">${market.location}</p>
        </div>
        <div class="card-content">
          <p class="text-sm text-muted-foreground mb-4">${market.description}</p>
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <span class="icon icon-map-pin"></span>
              <span class="text-sm">${market.city}, ${market.state}</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="icon icon-users"></span>
              <span class="text-sm">${market.vendorCount} vendors</span>
            </div>
            <div class="text-sm font-medium">${market.schedule}</div>
          </div>
          <div class="flex flex-wrap gap-2 mt-4">
            ${market.categories.map(cat => `<span class="badge badge-secondary">${cat}</span>`).join('')}
          </div>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary w-full" onclick="PageHandlers.applyToMarket(${market.id})">
            Apply to Market
          </button>
        </div>
      </div>
    `).join('');
  },

  applyToMarket: function(marketId) {
    const market = mockMarkets.find(m => m.id === marketId);
    if (market) {
      showToast(`Application submitted to ${market.name}! You'll receive a confirmation email shortly.`);
    }
  },

  // Map functionality
  initializeMap: function() {
    const mapContainer = document.getElementById('map-container');
    if (!mapContainer) return;

    // Create a simple interactive map using HTML/CSS/JS
    mapContainer.innerHTML = `
      <div class="relative w-full h-full">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border-2 border-gray-200">
          <!-- Map background with grid -->
          <div class="absolute inset-0 opacity-20">
            <div class="w-full h-full" style="background-image: 
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px);
              background-size: 20px 20px;">
            </div>
          </div>
          
          <!-- User location marker -->
          <div id="user-marker" class="absolute w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2" style="display: none;">
            <div class="w-full h-full bg-blue-600 rounded-full animate-pulse"></div>
          </div>
          
          <!-- Market markers -->
          ${mockMarkets.map((market, index) => `
            <div class="market-marker absolute w-6 h-6 bg-green-600 rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform"
                 style="left: ${20 + (index * 25)}%; top: ${30 + (index * 20)}%;"
                 onclick="PageHandlers.showMarketInfo(${market.id})"
                 title="${market.name}">
              <div class="w-full h-full bg-green-600 rounded-full flex items-center justify-center">
                <span class="text-white text-xs font-bold">${index + 1}</span>
              </div>
            </div>
          `).join('')}
          
          <!-- Map legend -->
          <div class="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg border">
            <div class="text-sm font-semibold mb-2">Map Legend</div>
            <div class="flex items-center gap-2 text-xs">
              <div class="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span>Your Location</span>
            </div>
            <div class="flex items-center gap-2 text-xs">
              <div class="w-3 h-3 bg-green-600 rounded-full"></div>
              <span>Markets</span>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  selectMarketOnMap: function(marketId) {
    const market = mockMarkets.find(m => m.id === marketId);
    if (market) {
      // Highlight the market on the map
      const markers = document.querySelectorAll('.market-marker');
      markers.forEach((marker, index) => {
        if (mockMarkets[index].id === marketId) {
          marker.style.transform = 'translate(-50%, -50%) scale(1.2)';
          marker.style.zIndex = '10';
          setTimeout(() => {
            marker.style.transform = 'translate(-50%, -50%) scale(1)';
            marker.style.zIndex = '1';
          }, 2000);
        }
      });
      
      showToast(`Selected: ${market.name}`, 'success');
    }
  },

  showMarketInfo: function(marketId) {
    const market = mockMarkets.find(m => m.id === marketId);
    if (market) {
      // Show market info in a popup or update sidebar
      showToast(`${market.name} - ${market.distance} miles away`, 'success');
    }
  },

  locateUser: function() {
    if (navigator.geolocation) {
      const locateBtn = document.getElementById('locate-me');
      locateBtn.innerHTML = '<span class="spinner"></span> Locating...';
      locateBtn.disabled = true;
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          
          // Show user marker on map
          const userMarker = document.getElementById('user-marker');
          if (userMarker) {
            userMarker.style.display = 'block';
            userMarker.style.left = '50%';
            userMarker.style.top = '50%';
          }
          
          // Update distances based on user location
          this.updateDistancesFromUser(userLocation);
          
          locateBtn.innerHTML = '<span class="icon">📍</span> Located!';
          locateBtn.classList.remove('btn-primary');
          locateBtn.classList.add('btn-secondary');
          
          showToast('Location found! Markets sorted by distance.', 'success');
          
          setTimeout(() => {
            locateBtn.innerHTML = '<span class="icon">📍</span> Near Me';
            locateBtn.classList.remove('btn-secondary');
            locateBtn.classList.add('btn-primary');
            locateBtn.disabled = false;
          }, 3000);
        },
        (error) => {
          console.error('Error getting location:', error);
          locateBtn.innerHTML = '<span class="icon">📍</span> Near Me';
          locateBtn.disabled = false;
          
          // Use default location (San Francisco)
          userLocation = { lat: 37.7749, lng: -122.4194 };
          this.updateDistancesFromUser(userLocation);
          showToast('Using default location. Enable location access for accurate distances.', 'error');
        }
      );
    } else {
      showToast('Geolocation is not supported by this browser.', 'error');
    }
  },

  updateDistancesFromUser: function(userLoc) {
    // Calculate distances from user location
    mockMarkets.forEach(market => {
      const distance = this.calculateDistance(
        userLoc.lat, userLoc.lng,
        market.coordinates.lat, market.coordinates.lng
      );
      market.distance = Math.round(distance * 10) / 10; // Round to 1 decimal
    });
    
    // Re-render sidebar with updated distances
    this.renderMarketsSidebar();
  },

  calculateDistance: function(lat1, lon1, lat2, lon2) {
    const R = 3959; // Earth's radius in miles
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  },

  deg2rad: function(deg) {
    return deg * (Math.PI/180);
  },

  // View toggling
  toggleView: function(view) {
    currentView = view;
    const listView = document.querySelector('.lg\\:grid-cols-3');
    const gridView = document.getElementById('markets-grid');
    
    if (view === 'list') {
      listView.style.display = 'grid';
      gridView.style.display = 'none';
      
      // Update button states
      document.querySelector('[onclick="toggleView(\'list\')"]').classList.add('btn-primary');
      document.querySelector('[onclick="toggleView(\'grid\')"]').classList.remove('btn-primary');
      document.querySelector('[onclick="toggleView(\'list\')"]').classList.add('btn-outline');
      document.querySelector('[onclick="toggleView(\'grid\')"]').classList.remove('btn-outline');
    } else {
      listView.style.display = 'none';
      gridView.style.display = 'grid';
      
      // Update button states
      document.querySelector('[onclick="toggleView(\'grid\')"]').classList.add('btn-primary');
      document.querySelector('[onclick="toggleView(\'list\')"]').classList.remove('btn-primary');
      document.querySelector('[onclick="toggleView(\'grid\')"]').classList.add('btn-outline');
      document.querySelector('[onclick="toggleView(\'list\')"]').classList.remove('btn-outline');
    }
  },

  // Login page
  login: function() {
    this.setupLoginForm();
    this.setupPasswordToggle();
    this.setupMagicLinkToggle();
  },

  setupLoginForm: function() {
    const loginForm = document.getElementById('login-form');
    if (!loginForm) return;

    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleLogin(e);
    });
  },

  setupPasswordToggle: function() {
    const toggleButton = document.getElementById('password-toggle');
    const passwordInput = document.getElementById('password');
    
    if (toggleButton && passwordInput) {
      toggleButton.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        toggleButton.innerHTML = isPassword ? 
          '<span class="icon icon-eye-off"></span>' : 
          '<span class="icon icon-eye"></span>';
      });
    }
  },

  setupMagicLinkToggle: function() {
    const passwordBtn = document.getElementById('password-btn');
    const magicLinkBtn = document.getElementById('magic-link-btn');
    const passwordField = document.getElementById('password-field');
    const submitBtn = document.getElementById('submit-btn');
    
    if (passwordBtn && magicLinkBtn && passwordField && submitBtn) {
      passwordBtn.addEventListener('click', () => {
        passwordBtn.classList.remove('btn-outline');
        passwordBtn.classList.add('btn-primary');
        magicLinkBtn.classList.remove('btn-primary');
        magicLinkBtn.classList.add('btn-outline');
        passwordField.style.display = 'block';
        submitBtn.innerHTML = 'Sign In';
      });
      
      magicLinkBtn.addEventListener('click', () => {
        magicLinkBtn.classList.remove('btn-outline');
        magicLinkBtn.classList.add('btn-primary');
        passwordBtn.classList.remove('btn-primary');
        passwordBtn.classList.add('btn-outline');
        passwordField.style.display = 'none';
        submitBtn.innerHTML = '<span class="icon icon-mail"></span> Send Magic Link';
      });
    }
  },

  handleLogin: function(e) {
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const isMagicLink = document.getElementById('password-field').style.display === 'none';
    
    // Validate email
    if (!validateEmail(email)) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    
    // Validate password (if not magic link)
    if (!isMagicLink && !validatePassword(password)) {
      showToast('Password must be at least 8 characters long.', 'error');
      return;
    }
    
    // Show loading state
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.classList.add('loading');
    submitBtn.innerHTML = '<span class="spinner"></span> Loading...';
    
    // Simulate API call
    setTimeout(() => {
      submitBtn.classList.remove('loading');
      
      if (isMagicLink) {
        submitBtn.innerHTML = '<span class="icon icon-mail"></span> Send Magic Link';
        showToast('Magic link sent! Check your email for the login link.');
      } else {
        submitBtn.innerHTML = 'Sign In';
        showToast('Login successful! Redirecting...');
        setTimeout(() => {
          // Simulate redirect based on role
          const role = Math.random() > 0.5 ? 'vendor' : 'organizer';
          window.location.href = role === 'vendor' ? 'vendor-dashboard.html' : 'organizer-dashboard.html';
        }, 1000);
      }
    }, 2000);
  },

  // Register page
  register: function() {
    this.setupRegisterForm();
    this.setupRoleSelection();
  },

  setupRegisterForm: function() {
    const registerForm = document.getElementById('register-form');
    if (!registerForm) return;

    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleRegister(e);
    });
  },

  setupRoleSelection: function() {
    const roleButtons = document.querySelectorAll('[data-role]');
    const roleInput = document.getElementById('role');
    
    roleButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        roleButtons.forEach(btn => {
          btn.classList.remove('btn-primary');
          btn.classList.add('btn-outline');
        });
        
        // Add active class to clicked button
        button.classList.remove('btn-outline');
        button.classList.add('btn-primary');
        
        // Set role value
        if (roleInput) {
          roleInput.value = button.dataset.role;
        }
      });
    });
  },

  handleRegister: function(e) {
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    const name = formData.get('name');
    const role = formData.get('role');
    
    // Validate fields
    if (!name || name.length < 2) {
      showToast('Please enter a valid name.', 'error');
      return;
    }
    
    if (!validateEmail(email)) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    
    if (!validatePassword(password)) {
      showToast('Password must be at least 8 characters long.', 'error');
      return;
    }
    
    if (password !== confirmPassword) {
      showToast('Passwords do not match.', 'error');
      return;
    }
    
    if (!role) {
      showToast('Please select your role.', 'error');
      return;
    }
    
    // Show loading state
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.classList.add('loading');
    submitBtn.innerHTML = '<span class="spinner"></span> Creating Account...';
    
    // Simulate API call
    setTimeout(() => {
      submitBtn.classList.remove('loading');
      submitBtn.innerHTML = 'Create Account';
      showToast('Account created successfully! Please check your email to verify your account.');
      
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 2000);
    }, 2000);
  },

  // Vendor Dashboard
  vendorDashboard: function() {
    this.renderVendorApplications();
  },

  renderVendorApplications: function() {
    const applicationsContainer = document.getElementById('applications-container');
    if (!applicationsContainer) return;

    applicationsContainer.innerHTML = mockVendorApplications.map(app => `
      <div class="card">
        <div class="card-header">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="card-title">${app.marketName}</h3>
              <p class="card-description">Applied on ${formatDate(app.appliedDate)}</p>
            </div>
            <span class="badge ${app.status === 'approved' ? 'badge-default' : 'badge-secondary'}">
              ${app.status.charAt(0).toUpperCase() + app.status.slice(1)}
            </span>
          </div>
        </div>
        <div class="card-content">
          <p class="text-sm text-muted-foreground">Business: ${app.businessName}</p>
        </div>
      </div>
    `).join('');
  },

  // Organizer Dashboard
  organizerDashboard: function() {
    this.renderOrganizerStats();
  },

  renderOrganizerStats: function() {
    // Mock stats for organizer dashboard
    const stats = [
      { label: 'Total Markets', value: '3', icon: 'map-pin' },
      { label: 'Pending Applications', value: '12', icon: 'file-check' },
      { label: 'Active Vendors', value: '95', icon: 'users' },
      { label: 'This Month Revenue', value: '$2,450', icon: 'star' }
    ];

    const statsContainer = document.getElementById('stats-container');
    if (!statsContainer) return;

    statsContainer.innerHTML = stats.map(stat => `
      <div class="card">
        <div class="card-content">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-muted-foreground">${stat.label}</p>
              <p class="text-2xl font-bold">${stat.value}</p>
            </div>
            <span class="icon icon-${stat.icon}"></span>
          </div>
        </div>
      </div>
    `).join('');
  }
};

// Mobile menu functionality
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('active');
  }
}

// Initialize page based on current page
function initializePage() {
  const path = window.location.pathname;
  const page = path.split('/').pop().replace('.html', '') || 'index';
  
  // Map file names to handler methods
  const pageMap = {
    'index': 'home',
    'markets': 'markets',
    'login': 'login',
    'register': 'register',
    'vendor-dashboard': 'vendorDashboard',
    'organizer-dashboard': 'organizerDashboard'
  };
  
  const handlerMethod = pageMap[page];
  if (handlerMethod && typeof PageHandlers[handlerMethod] === 'function') {
    PageHandlers[handlerMethod]();
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);

// Global functions for inline event handlers
window.PageHandlers = PageHandlers;
window.toggleMobileMenu = toggleMobileMenu;
window.toggleView = function(view) { PageHandlers.toggleView(view); };
window.initializeMap = function() { PageHandlers.initializeMap(); };
window.locateUser = function() { PageHandlers.locateUser(); };
