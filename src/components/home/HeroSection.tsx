import { useState } from "react";
import { Search, MapPin, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const popularBrands = ["Honda", "Yamaha", "Bajaj", "TVS", "Royal Enfield", "KTM"];
  const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Pune", "Hyderabad"];

  return (
    <section className="relative bg-gradient-hero py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Content */}
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Buy and Sell{" "}
            <span className="text-primary">Second-Hand Bikes</span>
            <br />
            in Seconds
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            India's most trusted marketplace for pre-owned motorcycles and scooters. 
            Find your perfect ride with verified dealers and genuine bikes.
          </p>

          {/* Search Form */}
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-medium max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* Search Input */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    placeholder="Search by brand, model, or keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 text-base"
                  />
                </div>
              </div>

              {/* Location Select */}
              <div>
                <Select>
                  <SelectTrigger className="h-12">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city.toLowerCase()}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <div>
                <Button className="w-full h-12 text-base font-semibold">
                  Search Bikes
                </Button>
              </div>
            </div>

            {/* Popular Brands */}
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Popular Brands:</p>
              <div className="flex flex-wrap gap-2">
                {popularBrands.map((brand) => (
                  <Button
                    key={brand}
                    variant="outline"
                    size="sm"
                    className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {brand}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Bikes Listed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-primary">2K+</div>
              <div className="text-sm text-muted-foreground">Verified Dealers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-primary">15K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Cities Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;