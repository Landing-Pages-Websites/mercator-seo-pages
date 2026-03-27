// All 50 US states with slug, name, abbreviation
// Cities ONLY for states where Mercator.ai has actual coverage
export interface StateData {
  slug: string;
  name: string;
  abbr: string;
  coveredCities: string[]; // Only real Mercator coverage cities
  isLive: boolean;
}

export const states: StateData[] = [
  { slug: "alabama", name: "Alabama", abbr: "AL", coveredCities: [], isLive: false },
  { slug: "alaska", name: "Alaska", abbr: "AK", coveredCities: [], isLive: false },
  { slug: "arizona", name: "Arizona", abbr: "AZ", coveredCities: [], isLive: false },
  { slug: "arkansas", name: "Arkansas", abbr: "AR", coveredCities: [], isLive: false },
  { slug: "california", name: "California", abbr: "CA", coveredCities: [], isLive: false },
  { slug: "colorado", name: "Colorado", abbr: "CO", coveredCities: [], isLive: false },
  { slug: "connecticut", name: "Connecticut", abbr: "CT", coveredCities: [], isLive: false },
  { slug: "delaware", name: "Delaware", abbr: "DE", coveredCities: [], isLive: false },
  { slug: "florida", name: "Florida", abbr: "FL", coveredCities: ["Miami", "Port St. Lucie", "Orlando", "Tampa", "St. Petersburg", "Cape Coral", "Jacksonville"], isLive: true },
  { slug: "georgia", name: "Georgia", abbr: "GA", coveredCities: [], isLive: false },
  { slug: "hawaii", name: "Hawaii", abbr: "HI", coveredCities: [], isLive: false },
  { slug: "idaho", name: "Idaho", abbr: "ID", coveredCities: [], isLive: false },
  { slug: "illinois", name: "Illinois", abbr: "IL", coveredCities: [], isLive: false },
  { slug: "indiana", name: "Indiana", abbr: "IN", coveredCities: [], isLive: false },
  { slug: "iowa", name: "Iowa", abbr: "IA", coveredCities: [], isLive: false },
  { slug: "kansas", name: "Kansas", abbr: "KS", coveredCities: [], isLive: false },
  { slug: "kentucky", name: "Kentucky", abbr: "KY", coveredCities: [], isLive: false },
  { slug: "louisiana", name: "Louisiana", abbr: "LA", coveredCities: [], isLive: false },
  { slug: "maine", name: "Maine", abbr: "ME", coveredCities: [], isLive: false },
  { slug: "maryland", name: "Maryland", abbr: "MD", coveredCities: [], isLive: false },
  { slug: "massachusetts", name: "Massachusetts", abbr: "MA", coveredCities: [], isLive: false },
  { slug: "michigan", name: "Michigan", abbr: "MI", coveredCities: [], isLive: false },
  { slug: "minnesota", name: "Minnesota", abbr: "MN", coveredCities: [], isLive: false },
  { slug: "mississippi", name: "Mississippi", abbr: "MS", coveredCities: [], isLive: false },
  { slug: "missouri", name: "Missouri", abbr: "MO", coveredCities: [], isLive: false },
  { slug: "montana", name: "Montana", abbr: "MT", coveredCities: [], isLive: false },
  { slug: "nebraska", name: "Nebraska", abbr: "NE", coveredCities: [], isLive: false },
  { slug: "nevada", name: "Nevada", abbr: "NV", coveredCities: [], isLive: false },
  { slug: "new-hampshire", name: "New Hampshire", abbr: "NH", coveredCities: [], isLive: false },
  { slug: "new-jersey", name: "New Jersey", abbr: "NJ", coveredCities: [], isLive: false },
  { slug: "new-mexico", name: "New Mexico", abbr: "NM", coveredCities: [], isLive: false },
  { slug: "new-york", name: "New York", abbr: "NY", coveredCities: [], isLive: false },
  { slug: "north-carolina", name: "North Carolina", abbr: "NC", coveredCities: [], isLive: false },
  { slug: "north-dakota", name: "North Dakota", abbr: "ND", coveredCities: [], isLive: false },
  { slug: "ohio", name: "Ohio", abbr: "OH", coveredCities: [], isLive: false },
  { slug: "oklahoma", name: "Oklahoma", abbr: "OK", coveredCities: [], isLive: false },
  { slug: "oregon", name: "Oregon", abbr: "OR", coveredCities: [], isLive: false },
  { slug: "pennsylvania", name: "Pennsylvania", abbr: "PA", coveredCities: [], isLive: false },
  { slug: "rhode-island", name: "Rhode Island", abbr: "RI", coveredCities: [], isLive: false },
  { slug: "south-carolina", name: "South Carolina", abbr: "SC", coveredCities: [], isLive: false },
  { slug: "south-dakota", name: "South Dakota", abbr: "SD", coveredCities: [], isLive: false },
  { slug: "tennessee", name: "Tennessee", abbr: "TN", coveredCities: [], isLive: false },
  { slug: "texas", name: "Texas", abbr: "TX", coveredCities: ["Houston", "Dallas-Fort Worth", "San Antonio", "Austin"], isLive: true },
  { slug: "utah", name: "Utah", abbr: "UT", coveredCities: [], isLive: false },
  { slug: "vermont", name: "Vermont", abbr: "VT", coveredCities: [], isLive: false },
  { slug: "virginia", name: "Virginia", abbr: "VA", coveredCities: [], isLive: false },
  { slug: "washington", name: "Washington", abbr: "WA", coveredCities: [], isLive: false },
  { slug: "west-virginia", name: "West Virginia", abbr: "WV", coveredCities: [], isLive: false },
  { slug: "wisconsin", name: "Wisconsin", abbr: "WI", coveredCities: [], isLive: false },
  { slug: "wyoming", name: "Wyoming", abbr: "WY", coveredCities: [], isLive: false },
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
    for (const city of state.coveredCities) {
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
  return getAllCities()
    .filter(c => c.stateSlug === stateSlug && c.citySlug !== currentCitySlug);
}

export function getLiveStates(): StateData[] {
  return states.filter(s => s.isLive);
}
