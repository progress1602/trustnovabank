export const COUNTRIES_DATA = [
  { 
    name: "United States", 
    code: "US", 
    currency: "USD", 
    currencySymbol: "$",
    states: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
  },
  { 
    name: "United Kingdom", 
    code: "GB", 
    currency: "GBP", 
    currencySymbol: "£",
    states: ["England", "Scotland", "Wales", "Northern Ireland", "London", "Manchester", "Birmingham", "Leeds", "Glasgow", "Liverpool"]
  },
  { 
    name: "Canada", 
    code: "CA", 
    currency: "CAD", 
    currencySymbol: "C$",
    states: ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"]
  },
  { 
    name: "Australia", 
    code: "AU", 
    currency: "AUD", 
    currencySymbol: "A$",
    states: ["New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"]
  },
  { 
    name: "Germany", 
    code: "DE", 
    currency: "EUR", 
    currencySymbol: "€",
    states: ["Baden-Württemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hesse", "Lower Saxony", "Mecklenburg-Vorpommern", "North Rhine-Westphalia", "Rhineland-Palatinate", "Saarland", "Saxony", "Saxony-Anhalt", "Schleswig-Holstein", "Thuringia"]
  },
  { 
    name: "France", 
    code: "FR", 
    currency: "EUR", 
    currencySymbol: "€",
    states: ["Île-de-France", "Provence-Alpes-Côte d'Azur", "Auvergne-Rhône-Alpes", "Nouvelle-Aquitaine", "Occitanie"]
  },
  { 
    name: "Japan", 
    code: "JP", 
    currency: "JPY", 
    currencySymbol: "¥",
    states: ["Hokkaido", "Aomori", "Iwate", "Miyagi", "Akita", "Yamagata", "Fukushima", "Ibaraki", "Tochigi", "Gunma", "Saitama", "Chiba", "Tokyo", "Kanagawa"]
  },
  { 
    name: "China", 
    code: "CN", 
    currency: "CNY", 
    currencySymbol: "¥",
    states: ["Anhui", "Beijing", "Chongqing", "Fujian", "Gansu", "Guangdong", "Guangxi", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Ningxia", "Qinghai", "Shaanxi", "Shandong", "Shanghai", "Shanxi", "Sichuan", "Tianjin", "Tibet", "Xinjiang", "Yunnan", "Zhejiang"]
  },
  { 
    name: "India", 
    code: "IN", 
    currency: "INR", 
    currencySymbol: "₹",
    states: ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"]
  },
  { 
    name: "Brazil", 
    code: "BR", 
    currency: "BRL", 
    currencySymbol: "R$",
    states: ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]
  },
  { name: "South Africa", code: "ZA", currency: "ZAR", currencySymbol: "R", states: ["Gauteng", "Western Cape", "KwaZulu-Natal", "Eastern Cape", "Free State", "Limpopo", "Mpumalanga", "North West", "Northern Cape"] },
  { name: "Mexico", code: "MX", currency: "MXN", currencySymbol: "$", states: ["Ciudad de México", "Jalisco", "Nuevo León", "Puebla", "Veracruz"] },
  { name: "Italy", code: "IT", currency: "EUR", currencySymbol: "€", states: ["Lazio", "Lombardy", "Campania", "Veneto", "Sicily"] },
  { name: "Spain", code: "ES", currency: "EUR", currencySymbol: "€", states: ["Madrid", "Catalonia", "Andalusia", "Valencia", "Galicia"] },
  { name: "Netherlands", code: "NL", currency: "EUR", currencySymbol: "€", states: ["North Holland", "South Holland", "Utrecht", "North Brabant"] },
  { name: "Switzerland", code: "CH", currency: "CHF", currencySymbol: "CHF", states: ["Zurich", "Geneva", "Vaud", "Bern"] },
  { name: "Sweden", code: "SE", currency: "SEK", currencySymbol: "kr", states: ["Stockholm", "Gothenburg", "Skåne"] },
  { name: "Norway", code: "NO", currency: "NOK", currencySymbol: "kr", states: ["Oslo", "Viken", "Vestland"] },
  { name: "Denmark", code: "DK", currency: "DKK", currencySymbol: "kr", states: ["Hovedstaden", "Midtjylland", "Syddanmark"] },
  { name: "Finland", code: "FI", currency: "EUR", currencySymbol: "€", states: ["Uusimaa", "Pirkanmaa", "Varsinais-Suomi"] },
  { name: "Ireland", code: "IE", currency: "EUR", currencySymbol: "€", states: ["Dublin", "Cork", "Galway", "Limerick"] },
  { name: "New Zealand", code: "NZ", currency: "NZD", currencySymbol: "$", states: ["Auckland", "Wellington", "Canterbury"] },
  { name: "Singapore", code: "SG", currency: "SGD", currencySymbol: "$", states: ["Central", "North", "North-East", "East", "West"] },
  { name: "South Korea", code: "KR", currency: "KRW", currencySymbol: "₩", states: ["Seoul", "Busan", "Incheon", "Gyeonggi"] },
  { name: "United Arab Emirates", code: "AE", currency: "AED", currencySymbol: "د.إ", states: ["Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Umm Al Quwain", "Ras Al Khaimah", "Fujairah"] },
  { name: "Saudi Arabia", code: "SA", currency: "SAR", currencySymbol: "SR", states: ["Riyadh", "Makkah", "Madinah", "Eastern Province"] },
  { name: "Israel", code: "IL", currency: "ILS", currencySymbol: "₪", states: ["Tel Aviv", "Jerusalem", "Haifa"] },
  { name: "Turkey", code: "TR", currency: "TRY", currencySymbol: "₺", states: ["Istanbul", "Ankara", "Izmir", "Antalya"] },
  { name: "Argentina", code: "AR", currency: "ARS", currencySymbol: "$", states: ["Buenos Aires", "Cordoba", "Santa Fe"] },
  { name: "Colombia", code: "CO", currency: "COP", currencySymbol: "$", states: ["Bogota", "Antioquia", "Valle del Cauca"] },
  { name: "Chile", code: "CL", currency: "CLP", currencySymbol: "$", states: ["Santiago", "Valparaiso", "Biobio"] },
  { name: "Peru", code: "PE", currency: "PEN", currencySymbol: "S/", states: ["Lima", "Arequipa", "La Libertad"] },
  { name: "Egypt", code: "EG", currency: "EGP", currencySymbol: "E£", states: ["Cairo", "Giza", "Alexandria"] },
  { name: "Kenya", code: "KE", currency: "KES", currencySymbol: "KSh", states: ["Nairobi", "Mombasa", "Kisumu"] },
  { name: "Ghana", code: "GH", currency: "GHS", currencySymbol: "GH₵", states: ["Greater Accra", "Ashanti", "Western"] },
  { name: "Ethiopia", code: "ET", currency: "ETB", currencySymbol: "Br", states: ["Addis Ababa", "Oromia", "Amhara"] },
  { name: "Tanzania", code: "TZ", currency: "TZS", currencySymbol: "TSh", states: ["Dar es Salaam", "Mwanza", "Arusha"] },
  { name: "Vietnam", code: "VN", currency: "VND", currencySymbol: "₫", states: ["Ho Chi Minh City", "Hanoi", "Da Nang"] },
  { name: "Thailand", code: "TH", currency: "THB", currencySymbol: "฿", states: ["Bangkok", "Chiang Mai", "Chon Buri"] },
  { name: "Malaysia", code: "MY", currency: "MYR", currencySymbol: "RM", states: ["Selangor", "Kuala Lumpur", "Johor"] },
  { name: "Indonesia", code: "ID", currency: "IDR", currencySymbol: "Rp", states: ["Jakarta", "West Java", "East Java"] },
  { name: "Philippines", code: "PH", currency: "PHP", currencySymbol: "₱", states: ["Metro Manila", "Cebu", "Davao"] },
  { name: "Greece", code: "GR", currency: "EUR", currencySymbol: "€", states: ["Attica", "Central Macedonia", "Crete"] },
  { name: "Portugal", code: "PT", currency: "EUR", currencySymbol: "€", states: ["Lisbon", "Porto", "Algarve"] },
  { name: "Austria", code: "AT", currency: "EUR", currencySymbol: "€", states: ["Vienna", "Salzburg", "Tyrol"] },
  { name: "Belgium", code: "BE", currency: "EUR", currencySymbol: "€", states: ["Brussels", "Flanders", "Wallonia"] },
  { name: "Poland", code: "PL", currency: "PLN", currencySymbol: "zł", states: ["Masovian", "Lower Silesian", "Lesser Poland"] },
  { name: "Czech Republic", code: "CZ", currency: "CZK", currencySymbol: "Kč", states: ["Prague", "South Moravian", "Central Bohemian"] },
  { name: "Hungary", code: "HU", currency: "HUF", currencySymbol: "Ft", states: ["Budapest", "Pest", "Fejer"] },
  { name: "Romania", code: "RO", currency: "RON", currencySymbol: "lei", states: ["Bucharest", "Cluj", "Timis"] },
  { name: "Ukraine", code: "UA", currency: "UAH", currencySymbol: "₴", states: ["Kyiv", "Lviv", "Odesa"] },
  { name: "Russia", code: "RU", currency: "RUB", currencySymbol: "₽", states: ["Moscow", "Saint Petersburg", "Sverdlovsk"] },
  { name: "Kazakhstan", code: "KZ", currency: "KZT", currencySymbol: "₸", states: ["Almaty", "Astana", "Karaganda"] },
  { name: "Pakistan", code: "PK", currency: "PKR", currencySymbol: "Rs", states: ["Punjab", "Sindh", "Khyber Pakhtunkhwa", "Balochistan"] },
  { name: "Bangladesh", code: "BD", currency: "BDT", currencySymbol: "৳", states: ["Dhaka", "Chittagong", "Rajshahi"] },
  { name: "Sri Lanka", code: "LK", currency: "LKR", currencySymbol: "Rs", states: ["Western", "Central", "Southern"] },
  { name: "Belgium", code: "BE", currency: "EUR", currencySymbol: "€", states: ["Brussels", "Flanders", "Wallonia"] }
];
