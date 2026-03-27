// Image paths for each page type, sourced from Pexels
// These are in public/images/ and served statically

export function getCityImage(citySlug: string): string {
  const map: Record<string, string> = {
    "houston": "/images/cities/houston/hero-1.jpg",
    "dallas-fort-worth": "/images/cities/dallas-fort-worth/hero-1.jpg",
    "san-antonio": "/images/cities/san-antonio/hero-1.jpg",
    "austin": "/images/cities/austin/hero-1.jpg",
    "miami": "/images/cities/miami/hero-1.jpg",
    "port-st-lucie": "/images/cities/port-st-lucie/hero-1.jpg",
    "orlando": "/images/cities/orlando/hero-1.jpg",
    "tampa": "/images/cities/tampa/hero-1.jpg",
    "st-petersburg": "/images/cities/st-petersburg/hero-1.jpg",
    "cape-coral": "/images/cities/cape-coral/hero-1.jpg",
    "jacksonville": "/images/cities/jacksonville/hero-1.jpg",
  };
  return map[citySlug] || "/images/general/hero-1.jpg";
}

export function getCityImageAlt(cityName: string): string {
  return `Construction and development activity in the ${cityName} metro area`;
}

export function getCategoryImage(categorySlug: string): string {
  const map: Record<string, string> = {
    "commercial": "/images/categories/commercial/hero-1.jpg",
    "healthcare": "/images/categories/healthcare/hero-1.jpg",
    "retail": "/images/categories/retail/hero-1.jpg",
    "institutional": "/images/categories/institutional/hero-1.jpg",
    "office-buildings": "/images/categories/office-buildings/hero-1.jpg",
    "tenant-improvements": "/images/categories/tenant-improvements/hero-1.jpg",
    "industrial": "/images/categories/industrial/hero-1.jpg",
    "data-centers": "/images/categories/data-centers/hero-1.jpg",
    "light-industrial": "/images/categories/light-industrial/hero-1.jpg",
    "warehousing": "/images/categories/warehousing/hero-1.jpg",
    "manufacturing": "/images/categories/manufacturing/hero-1.jpg",
    "treatment-plants": "/images/categories/treatment-plants/hero-1.jpg",
    "multi-family": "/images/categories/multi-family/hero-1.jpg",
    "mixed-use": "/images/categories/mixed-use/hero-1.jpg",
    "high-rise": "/images/categories/high-rise/hero-1.jpg",
    "mid-rise": "/images/categories/mid-rise/hero-1.jpg",
    "low-rise": "/images/categories/low-rise/hero-1.jpg",
  };
  return map[categorySlug] || "/images/general/hero-1.jpg";
}

export function getCategoryImageAlt(categoryName: string): string {
  return `${categoryName} construction project site`;
}

export function getStateImage(): string {
  return "/images/general/general-state-1.jpg";
}

export function getHeroImage(): string {
  return "/images/general/hero-1.jpg";
}
