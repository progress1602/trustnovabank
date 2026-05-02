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
  { name: "Mexico", code: "MX", currency: "MXN", currencySymbol: "$", states: ["Ciudad de México", "Jalisco", "Nuevo León"] },
  { name: "Brazil", code: "BR", currency: "BRL", currencySymbol: "R$", states: ["São Paulo", "Rio de Janeiro", "Bahia"] },
  { name: "Israel", code: "IL", currency: "ILS", currencySymbol: "₪", states: ["Tel Aviv", "Jerusalem", "Haifa"] },
  { name: "Turkey", code: "TR", currency: "TRY", currencySymbol: "₺", states: ["Istanbul", "Ankara", "Izmir"] },
  { name: "Greece", code: "GR", currency: "EUR", currencySymbol: "€", states: ["Attica", "Central Macedonia"] },
  { name: "Portugal", code: "PT", currency: "EUR", currencySymbol: "€", states: ["Lisbon", "Porto"] },
  { name: "Austria", code: "AT", currency: "EUR", currencySymbol: "€", states: ["Vienna", "Salzburg"] },
  { name: "Belgium", code: "BE", currency: "EUR", currencySymbol: "€", states: ["Brussels", "Flanders"] },
  { name: "Switzerland", code: "CH", currency: "CHF", currencySymbol: "CHF", states: ["Zurich", "Geneva"] },
  { name: "Sweden", code: "SE", currency: "SEK", currencySymbol: "kr", states: ["Stockholm", "Gothenburg"] },
  { name: "Qatar", code: "QA", currency: "QAR", currencySymbol: "ر.ق", states: ["Doha", "Al Rayyan"] },
  { name: "Kuwait", code: "KW", currency: "KWD", currencySymbol: "د.ك", states: ["Kuwait City", "Al Ahmadi"] },
  { name: "Oman", code: "OM", currency: "OMR", currencySymbol: "ر.ع.", states: ["Muscat", "Salalah"] },
  { name: "Bahrain", code: "BH", currency: "BHD", currencySymbol: ".د.ب", states: ["Manama", "Riffa"] },
  { name: "Thailand", code: "TH", currency: "THB", currencySymbol: "฿", states: ["Bangkok", "Chiang Mai"] },
  { name: "Vietnam", code: "VN", currency: "VND", currencySymbol: "₫", states: ["Ho Chi Minh City", "Hanoi"] },
  { name: "Malaysia", code: "MY", currency: "MYR", currencySymbol: "RM", states: ["Selangor", "Kuala Lumpur"] },
  { name: "Philippines", code: "PH", currency: "PHP", currencySymbol: "₱", states: ["Metro Manila", "Cebu"] },
  { name: "Indonesia", code: "ID", currency: "IDR", currencySymbol: "Rp", states: ["Jakarta", "Bali"] },
  { name: "Egypt", code: "EG", currency: "EGP", currencySymbol: "E£", states: ["Cairo", "Alexandria"] },
  { name: "Kenya", code: "KE", currency: "KES", currencySymbol: "KSh", states: ["Nairobi", "Mombasa"] },
  { name: "Ghana", code: "GH", currency: "GHS", currencySymbol: "GH₵", states: ["Greater Accra", "Ashanti"] },
  { name: "Morocco", code: "MA", currency: "MAD", currencySymbol: "د.م.", states: ["Casablanca", "Marrakesh"] },
  { name: "Chile", code: "CL", currency: "CLP", currencySymbol: "$", states: ["Santiago", "Valparaiso"] },
  { name: "Peru", code: "PE", currency: "PEN", currencySymbol: "S/", states: ["Lima", "Cusco"] },
  { name: "Colombia", code: "CO", currency: "COP", currencySymbol: "$", states: ["Bogotá", "Medellín"] },
  { name: "Argentina", code: "AR", currency: "ARS", currencySymbol: "$", states: ["Buenos Aires", "Córdoba"] }
];
