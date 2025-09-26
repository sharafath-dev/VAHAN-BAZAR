import { Heart, MapPin, Calendar, Fuel, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import bike images
import heroSplendor from "@/assets/hero-splendor.jpg";
import yamahaFz from "@/assets/yamaha-fz.jpg";
import bajajPulsar from "@/assets/bajaj-pulsar.jpg";
import tvsApache from "@/assets/tvs-apache.jpg";

interface Bike {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  year: number;
  mileage: string;
  fuelType: "Petrol" | "Diesel";
  owners: number;
  location: string;
  image: string;
  verified: boolean;
  featured: boolean;
}

const FeaturedBikes = () => {
  const featuredBikes: Bike[] = [
    {
      id: "1",
      name: "Splendor Plus",
      brand: "Hero",
      price: 65000,
      originalPrice: 89000,
      year: 2021,
      mileage: "65 kmpl",
      fuelType: "Petrol",
      owners: 1,
      location: "Mumbai, Maharashtra",
      image: heroSplendor,
      verified: true,
      featured: true,
    },
    {
      id: "2",
      name: "FZ S",
      brand: "Yamaha",
      price: 85000,
      originalPrice: 115000,
      year: 2020,
      mileage: "45 kmpl",
      fuelType: "Petrol",
      owners: 1,
      location: "Delhi, NCR",
      image: yamahaFz,
      verified: true,
      featured: true,
    },
    {
      id: "3",
      name: "Pulsar 150",
      brand: "Bajaj",
      price: 75000,
      originalPrice: 98000,
      year: 2022,
      mileage: "50 kmpl",
      fuelType: "Petrol",
      owners: 1,
      location: "Bangalore, Karnataka",
      image: bajajPulsar,
      verified: true,
      featured: true,
    },
    {
      id: "4",
      name: "Apache RTR 160",
      brand: "TVS",
      price: 95000,
      originalPrice: 125000,
      year: 2021,
      mileage: "42 kmpl",
      fuelType: "Petrol",
      owners: 2,
      location: "Chennai, Tamil Nadu",
      image: tvsApache,
      verified: true,
      featured: true,
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const calculateSavings = (original: number, current: number) => {
    const savings = ((original - current) / original) * 100;
    return Math.round(savings);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Used Bikes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked pre-owned motorcycles from verified dealers across India
          </p>
        </div>

        {/* Bikes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBikes.map((bike) => (
            <Card key={bike.id} className="group hover:shadow-card transition-all duration-300 border-0 shadow-light overflow-hidden">
              <CardContent className="p-0">
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={bike.image}
                    alt={`${bike.brand} ${bike.name}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {bike.verified && (
                      <Badge className="bg-green-500 hover:bg-green-500 text-white text-xs">
                        Verified
                      </Badge>
                    )}
                    {bike.featured && (
                      <Badge variant="secondary" className="text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 h-8 w-8 bg-background/80 hover:bg-background"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>

                  {/* Savings Badge */}
                  <div className="absolute bottom-3 left-3">
                    <Badge className="bg-primary text-primary-foreground">
                      {calculateSavings(bike.originalPrice, bike.price)}% Off
                    </Badge>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4">
                  {/* Title and Brand */}
                  <div className="mb-3">
                    <h3 className="font-semibold text-lg text-foreground">
                      {bike.brand} {bike.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{bike.year} Model</p>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-foreground">
                        {formatPrice(bike.price)}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(bike.originalPrice)}
                      </span>
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Fuel className="h-4 w-4" />
                      <span>{bike.mileage}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{bike.owners} Owner</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{bike.year}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <span className="text-xs">⛽</span>
                      <span>{bike.fuelType}</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{bike.location}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 text-sm">
                      View Details
                    </Button>
                    <Button className="flex-1 text-sm">
                      Contact Dealer
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Used Bikes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBikes;