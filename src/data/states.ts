// All 50 US states with slug, name, abbreviation, and top cities
export interface StateData {
  slug: string;
  name: string;
  abbr: string;
  topCities: string[];
}

export const states: StateData[] = [
  { slug: "alabama", name: "Alabama", abbr: "AL", topCities: ["Birmingham", "Huntsville", "Montgomery", "Mobile", "Tuscaloosa"] },
  { slug: "alaska", name: "Alaska", abbr: "AK", topCities: ["Anchorage", "Fairbanks", "Juneau", "Sitka", "Ketchikan"] },
  { slug: "arizona", name: "Arizona", abbr: "AZ", topCities: ["Phoenix", "Tucson", "Mesa", "Scottsdale", "Chandler", "Gilbert", "Tempe", "Peoria", "Glendale", "Surprise"] },
  { slug: "arkansas", name: "Arkansas", abbr: "AR", topCities: ["Little Rock", "Fayetteville", "Fort Smith", "Springdale", "Jonesboro"] },
  { slug: "california", name: "California", abbr: "CA", topCities: ["Los Angeles", "San Francisco", "San Diego", "San Jose", "Sacramento", "Oakland", "Fresno", "Long Beach", "Irvine", "Anaheim"] },
  { slug: "colorado", name: "Colorado", abbr: "CO", topCities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood", "Boulder", "Thornton", "Arvada"] },
  { slug: "connecticut", name: "Connecticut", abbr: "CT", topCities: ["Bridgeport", "New Haven", "Hartford", "Stamford", "Waterbury"] },
  { slug: "delaware", name: "Delaware", abbr: "DE", topCities: ["Wilmington", "Dover", "Newark", "Middletown", "Bear"] },
  { slug: "florida", name: "Florida", abbr: "FL", topCities: ["Miami", "Orlando", "Tampa", "Jacksonville", "Fort Lauderdale", "St. Petersburg", "Cape Coral", "Port St. Lucie", "Tallahassee", "Sarasota"] },
  { slug: "georgia", name: "Georgia", abbr: "GA", topCities: ["Atlanta", "Augusta", "Savannah", "Columbus", "Macon", "Athens", "Roswell", "Sandy Springs"] },
  { slug: "hawaii", name: "Hawaii", abbr: "HI", topCities: ["Honolulu", "Hilo", "Kailua", "Pearl City", "Kapolei"] },
  { slug: "idaho", name: "Idaho", abbr: "ID", topCities: ["Boise", "Meridian", "Nampa", "Idaho Falls", "Caldwell"] },
  { slug: "illinois", name: "Illinois", abbr: "IL", topCities: ["Chicago", "Aurora", "Naperville", "Joliet", "Rockford", "Springfield", "Peoria", "Elgin"] },
  { slug: "indiana", name: "Indiana", abbr: "IN", topCities: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel", "Fishers"] },
  { slug: "iowa", name: "Iowa", abbr: "IA", topCities: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Iowa City"] },
  { slug: "kansas", name: "Kansas", abbr: "KS", topCities: ["Wichita", "Overland Park", "Kansas City", "Olathe", "Topeka"] },
  { slug: "kentucky", name: "Kentucky", abbr: "KY", topCities: ["Louisville", "Lexington", "Bowling Green", "Owensboro", "Covington"] },
  { slug: "louisiana", name: "Louisiana", abbr: "LA", topCities: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles"] },
  { slug: "maine", name: "Maine", abbr: "ME", topCities: ["Portland", "Lewiston", "Bangor", "South Portland", "Auburn"] },
  { slug: "maryland", name: "Maryland", abbr: "MD", topCities: ["Baltimore", "Columbia", "Germantown", "Silver Spring", "Waldorf", "Frederick", "Bethesda"] },
  { slug: "massachusetts", name: "Massachusetts", abbr: "MA", topCities: ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell", "New Bedford"] },
  { slug: "michigan", name: "Michigan", abbr: "MI", topCities: ["Detroit", "Grand Rapids", "Ann Arbor", "Lansing", "Sterling Heights", "Dearborn"] },
  { slug: "minnesota", name: "Minnesota", abbr: "MN", topCities: ["Minneapolis", "Saint Paul", "Rochester", "Duluth", "Bloomington", "Brooklyn Park"] },
  { slug: "mississippi", name: "Mississippi", abbr: "MS", topCities: ["Jackson", "Gulfport", "Southaven", "Hattiesburg", "Biloxi"] },
  { slug: "missouri", name: "Missouri", abbr: "MO", topCities: ["Kansas City", "St. Louis", "Springfield", "Columbia", "Independence"] },
  { slug: "montana", name: "Montana", abbr: "MT", topCities: ["Billings", "Missoula", "Great Falls", "Bozeman", "Helena"] },
  { slug: "nebraska", name: "Nebraska", abbr: "NE", topCities: ["Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney"] },
  { slug: "nevada", name: "Nevada", abbr: "NV", topCities: ["Las Vegas", "Henderson", "Reno", "North Las Vegas", "Sparks", "Carson City"] },
  { slug: "new-hampshire", name: "New Hampshire", abbr: "NH", topCities: ["Manchester", "Nashua", "Concord", "Dover", "Rochester"] },
  { slug: "new-jersey", name: "New Jersey", abbr: "NJ", topCities: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Edison", "Trenton", "Clifton"] },
  { slug: "new-mexico", name: "New Mexico", abbr: "NM", topCities: ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe", "Roswell"] },
  { slug: "new-york", name: "New York", abbr: "NY", topCities: ["New York City", "Buffalo", "Rochester", "Syracuse", "Albany", "Yonkers", "White Plains"] },
  { slug: "north-carolina", name: "North Carolina", abbr: "NC", topCities: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem", "Fayetteville", "Cary", "Wilmington"] },
  { slug: "north-dakota", name: "North Dakota", abbr: "ND", topCities: ["Fargo", "Bismarck", "Grand Forks", "Minot", "West Fargo"] },
  { slug: "ohio", name: "Ohio", abbr: "OH", topCities: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", "Dayton"] },
  { slug: "oklahoma", name: "Oklahoma", abbr: "OK", topCities: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Edmond"] },
  { slug: "oregon", name: "Oregon", abbr: "OR", topCities: ["Portland", "Salem", "Eugene", "Gresham", "Hillsboro", "Bend"] },
  { slug: "pennsylvania", name: "Pennsylvania", abbr: "PA", topCities: ["Philadelphia", "Pittsburgh", "Allentown", "Reading", "Erie", "Scranton"] },
  { slug: "rhode-island", name: "Rhode Island", abbr: "RI", topCities: ["Providence", "Warwick", "Cranston", "Pawtucket", "East Providence"] },
  { slug: "south-carolina", name: "South Carolina", abbr: "SC", topCities: ["Charleston", "Columbia", "North Charleston", "Greenville", "Mount Pleasant", "Rock Hill"] },
  { slug: "south-dakota", name: "South Dakota", abbr: "SD", topCities: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Watertown"] },
  { slug: "tennessee", name: "Tennessee", abbr: "TN", topCities: ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Clarksville", "Murfreesboro"] },
  { slug: "texas", name: "Texas", abbr: "TX", topCities: ["Houston", "Dallas", "San Antonio", "Austin", "Fort Worth", "El Paso", "Arlington", "Plano", "Frisco", "McKinney"] },
  { slug: "utah", name: "Utah", abbr: "UT", topCities: ["Salt Lake City", "West Valley City", "Provo", "West Jordan", "Orem", "Sandy", "St. George"] },
  { slug: "vermont", name: "Vermont", abbr: "VT", topCities: ["Burlington", "South Burlington", "Rutland", "Montpelier", "Barre"] },
  { slug: "virginia", name: "Virginia", abbr: "VA", topCities: ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond", "Arlington", "Newport News", "Alexandria"] },
  { slug: "washington", name: "Washington", abbr: "WA", topCities: ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue", "Kent", "Everett", "Renton"] },
  { slug: "west-virginia", name: "West Virginia", abbr: "WV", topCities: ["Charleston", "Huntington", "Morgantown", "Parkersburg", "Wheeling"] },
  { slug: "wisconsin", name: "Wisconsin", abbr: "WI", topCities: ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine", "Appleton"] },
  { slug: "wyoming", name: "Wyoming", abbr: "WY", topCities: ["Cheyenne", "Casper", "Laramie", "Gillette", "Rock Springs"] },
];

export function getStateBySlug(slug: string): StateData | undefined {
  return states.find(s => s.slug === slug);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Generate all city entries from states
export interface CityData {
  citySlug: string;
  cityName: string;
  stateSlug: string;
  stateName: string;
  stateAbbr: string;
}

export function getAllCities(): CityData[] {
  const cities: CityData[] = [];
  for (const state of states) {
    for (const city of state.topCities) {
      cities.push({
        citySlug: slugify(city),
        cityName: city,
        stateSlug: state.slug,
        stateName: state.name,
        stateAbbr: state.abbr,
      });
    }
  }
  return cities;
}

export function getNearbyCities(stateSlug: string, currentCitySlug: string): CityData[] {
  const allCities = getAllCities();
  return allCities
    .filter(c => c.stateSlug === stateSlug && c.citySlug !== currentCitySlug)
    .slice(0, 10);
}
