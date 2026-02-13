// Every country from the world-atlas TopoJSON (Natural Earth names).
// Set a country to `true` to highlight it (show terrain), `false` to leave it blank.
// The exported HIGHLIGHTED_COUNTRIES array is auto-derived from this map.

const COUNTRY_MAP: Record<string, boolean> = {
  // ── A ──
  "Afghanistan": false,
  "Albania": false,
  "Algeria": false,
  "American Samoa": false,
  "Andorra": false,
  "Angola": false,
  "Anguilla": false,
  "Antigua and Barb.": false,
  "Argentina": false,
  "Armenia": false,
  "Aruba": false,
  "Australia": true,
  "Austria": false,
  "Azerbaijan": false,

  // ── B ──
  "Bahamas": true,
  "Bahrain": false,
  "Bangladesh": false,
  "Barbados": false,
  "Belarus": false,
  "Belgium": true,
  "Belize": true,
  "Benin": false,
  "Bermuda": false,
  "Bhutan": false,
  "Bolivia": false,
  "Bosnia and Herz.": false,
  "Botswana": false,
  "Brazil": true,
  "British Virgin Is.": false,
  "Brunei": false,
  "Bulgaria": false,
  "Burkina Faso": false,
  "Burundi": false,

  // ── C ──
  "Cabo Verde": false,
  "Cambodia": true,
  "Cameroon": false,
  "Canada": true,
  "Cayman Is.": false,
  "Central African Rep.": false,
  "Chad": false,
  "Chile": false,
  "China": false,
  "Colombia": true,
  "Comoros": false,
  "Congo": false,
  "Cook Is.": false,
  "Costa Rica": true,
  "Croatia": false,
  "Cuba": true,
  "Curaçao": false,
  "Cyprus": false,
  "Czechia": false,
  "Côte d'Ivoire": false,

  // ── D ──
  "Dem. Rep. Congo": false,
  "Denmark": false,
  "Djibouti": false,
  "Dominica": false,
  "Dominican Rep.": true,

  // ── E ──
  "Ecuador": true,
  "Egypt": true,
  "El Salvador": true,
  "Eq. Guinea": false,
  "Eritrea": false,
  "Estonia": false,
  "Ethiopia": false,
  "eSwatini": false,

  // ── F ──
  "Faeroe Is.": false,
  "Falkland Is.": false,
  "Fiji": false,
  "Finland": false,
  "Fr. Polynesia": false,
  "France": true,

  // ── G ──
  "Gabon": false,
  "Gambia": false,
  "Georgia": false,
  "Germany": true,
  "Ghana": false,
  "Greece": false,
  "Greenland": false,
  "Grenada": false,
  "Guam": false,
  "Guatemala": true,
  "Guernsey": false,
  "Guinea": false,
  "Guinea-Bissau": false,
  "Guyana": false,

  // ── H ──
  "Haiti": true,
  "Honduras": true,
  "Hong Kong": false,
  "Hungary": false,

  // ── I ──
  "Iceland": false,
  "India": true,
  "Indonesia": true,
  "Iran": false,
  "Iraq": false,
  "Ireland": true,
  "Isle of Man": false,
  "Israel": true,
  "Italy": true,

  // ── J ──
  "Jamaica": true,
  "Japan": true,
  "Jersey": false,
  "Jordan": false,

  // ── K ──
  "Kazakhstan": false,
  "Kenya": true,
  "Kiribati": false,
  "Kosovo": false,
  "Kuwait": false,
  "Kyrgyzstan": false,

  // ── L ──
  "Laos": true,
  "Latvia": false,
  "Lebanon": false,
  "Lesotho": false,
  "Liberia": false,
  "Libya": false,
  "Liechtenstein": false,
  "Lithuania": false,
  "Luxembourg": false,

  // ── M ──
  "Macao": false,
  "Macedonia": false,
  "Madagascar": false,
  "Malawi": false,
  "Malaysia": true,
  "Maldives": false,
  "Mali": false,
  "Malta": false,
  "Marshall Is.": false,
  "Mauritania": false,
  "Mauritius": false,
  "Mexico": true,
  "Micronesia": false,
  "Moldova": false,
  "Monaco": false,
  "Mongolia": false,
  "Montenegro": false,
  "Montserrat": false,
  "Morocco": false,
  "Mozambique": false,
  "Myanmar": true,

  // ── N ──
  "N. Cyprus": false,
  "N. Mariana Is.": false,
  "Namibia": false,
  "Nauru": false,
  "Nepal": false,
  "Netherlands": true,
  "New Caledonia": false,
  "New Zealand": true,
  "Nicaragua": true,
  "Niger": false,
  "Nigeria": true,
  "Niue": false,
  "Norfolk Island": false,
  "North Korea": false,
  "Norway": false,

  // ── O ──
  "Oman": false,

  // ── P ──
  "Pakistan": false,
  "Palau": false,
  "Palestine": false,
  "Panama": true,
  "Papua New Guinea": false,
  "Paraguay": false,
  "Peru": true,
  "Philippines": true,
  "Pitcairn Is.": false,
  "Poland": false,
  "Portugal": true,
  "Puerto Rico": true,

  // ── Q ──
  "Qatar": false,

  // ── R ──
  "Romania": false,
  "Russia": false,
  "Rwanda": false,

  // ── S ──
  "S. Geo. and the Is.": false,
  "S. Sudan": false,
  "Saint Helena": false,
  "Saint Lucia": false,
  "Samoa": false,
  "San Marino": false,
  "Saudi Arabia": true,
  "Senegal": false,
  "Serbia": false,
  "Seychelles": false,
  "Sierra Leone": false,
  "Singapore": false,
  "Sint Maarten": false,
  "Slovakia": false,
  "Slovenia": false,
  "Solomon Is.": false,
  "Somalia": false,
  "Somaliland": false,
  "South Africa": true,
  "South Korea": true,
  "Spain": true,
  "Sri Lanka": false,
  "St-Barthélemy": false,
  "St-Martin": false,
  "St. Kitts and Nevis": false,
  "St. Pierre and Miquelon": false,
  "St. Vin. and Gren.": false,
  "Sudan": false,
  "Suriname": false,
  "Sweden": false,
  "Switzerland": true,
  "Syria": false,
  "São Tomé and Principe": false,

  // ── T ──
  "Taiwan": false,
  "Tajikistan": false,
  "Tanzania": false,
  "Thailand": true,
  "Timor-Leste": false,
  "Togo": false,
  "Tonga": false,
  "Trinidad and Tobago": true,
  "Tunisia": false,
  "Turkey": false,
  "Turkmenistan": false,
  "Turks and Caicos Is.": false,

  // ── U ──
  "U.S. Virgin Is.": false,
  "Uganda": false,
  "Ukraine": false,
  "United Arab Emirates": true,
  "United Kingdom": true,
  "United States of America": true,
  "Uruguay": false,
  "Uzbekistan": false,

  // ── V ──
  "Vanuatu": false,
  "Vatican": false,
  "Venezuela": true,
  "Vietnam": true,

  // ── W ──
  "W. Sahara": false,
  "Wallis and Futuna Is.": false,

  // ── Y ──
  "Yemen": false,

  // ── Z ──
  "Zambia": false,
  "Zimbabwe": false,

  // ── Å ──
  "Åland": false,
};

// Auto-derived: array of country names where the value is `true`.
export const HIGHLIGHTED_COUNTRIES: string[] = Object.entries(COUNTRY_MAP)
  .filter(([, active]) => active)
  .map(([name]) => name);
