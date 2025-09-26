import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Category {
  id: string;
  name: string;
  description: string;
  count: number;
  image: string;
  popular: boolean;
}

const Categories = () => {
  const categories: Category[] = [
    {
      id: "commuter",
      name: "Commuter Bikes",
      description: "Fuel-efficient daily riders",
      count: 15420,
      image: "/placeholder.svg",
      popular: true,
    },
    {
      id: "sports",
      name: "Sports Bikes",
      description: "High performance machines",
      count: 8750,
      image: "/placeholder.svg",
      popular: true,
    },
    {
      id: "cruiser",
      name: "Cruiser Bikes",
      description: "Comfortable long-distance touring",
      count: 3240,
      image: "/placeholder.svg",
      popular: false,
    },
    {
      id: "scooter",
      name: "Scooters",
      description: "Easy and convenient city transport",
      count: 22100,
      image: "/placeholder.svg",
      popular: true,
    },
    {
      id: "adventure",
      name: "Adventure Bikes",
      description: "Off-road capable motorcycles",
      count: 1850,
      image: "/placeholder.svg",
      popular: false,
    },
    {
      id: "vintage",
      name: "Vintage Bikes",
      description: "Classic and retro motorcycles",
      count: 950,
      image: "/placeholder.svg",
      popular: false,
    },
  ];

  const formatCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K+`;
    }
    return count.toString();
  };

  return (
    <section className="py-16 bg-gradient-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect bike for your needs from our extensive collection
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="group hover:shadow-card transition-all duration-300 border-0 shadow-light overflow-hidden cursor-pointer"
            >
              <CardContent className="p-0">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Popular Badge */}
                  {category.popular && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        Popular
                      </span>
                    </div>
                  )}

                  {/* Count */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-background/90 text-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {formatCount(category.count)} bikes
                    </span>
                  </div>

                  {/* Category Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold mb-1">
                      {category.name}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Action Section */}
                <div className="p-4">
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
                  >
                    Explore {category.name}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Brands Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Popular Brands
          </h3>
          
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {[
              "Hero", "Honda", "Bajaj", "TVS", "Yamaha", "Royal Enfield", "KTM", "Suzuki"
            ].map((brand) => (
              <Card 
                key={brand} 
                className="group hover:shadow-light transition-all duration-300 border-0 shadow-light/50 cursor-pointer"
              >
                <CardContent className="p-4 text-center">
                  <div className="h-12 w-12 mx-auto mb-2 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <span className="font-bold text-sm">
                      {brand.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {brand}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;