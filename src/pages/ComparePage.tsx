import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Plus, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import bike images
import heroSplendor from "@/assets/hero-splendor.jpg";
import yamahaFz from "@/assets/yamaha-fz.jpg";
import bajajPulsar from "@/assets/bajaj-pulsar.jpg";

const ComparePage = () => {
  const compareSlots = [
    {
      id: 1,
      bike: {
        name: "Hero Splendor Plus",
        brand: "Hero",
        price: 65000,
        year: 2021,
        mileage: "65 kmpl",
        engine: "97.2cc",
        power: "8.02 PS",
        image: heroSplendor,
      }
    },
    {
      id: 2,
      bike: {
        name: "Yamaha FZ S",
        brand: "Yamaha", 
        price: 85000,
        year: 2020,
        mileage: "45 kmpl",
        engine: "149cc",
        power: "12.4 PS",
        image: yamahaFz,
      }
    },
    {
      id: 3,
      bike: null
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const comparisonFeatures = [
    "Price",
    "Year",
    "Mileage",
    "Engine",
    "Power",
    "Fuel Type",
    "Transmission",
    "Brakes",
    "Tyre Type",
    "Kerb Weight"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Compare Bikes
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Compare specifications, prices, and features side by side to make the right choice
            </p>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Bike Selection Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
              {compareSlots.map((slot) => (
                <Card key={slot.id} className="border-0 shadow-card">
                  <CardContent className="p-6">
                    {slot.bike ? (
                      <div className="text-center">
                        <img
                          src={slot.bike.image}
                          alt={slot.bike.name}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {slot.bike.name}
                        </h3>
                        <p className="text-2xl font-bold text-primary mb-4">
                          {formatPrice(slot.bike.price)}
                        </p>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex justify-between">
                            <span>Year:</span>
                            <span>{slot.bike.year}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Mileage:</span>
                            <span>{slot.bike.mileage}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Engine:</span>
                            <span>{slot.bike.engine}</span>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full mt-4">
                          Remove
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <div className="h-16 w-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Plus className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          Add Bike to Compare
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Select a bike to compare specifications
                        </p>
                        <Button className="w-full">
                          Choose Bike
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Detailed Comparison Table */}
            {compareSlots.filter(slot => slot.bike).length >= 2 && (
              <Card className="border-0 shadow-card">
                <CardContent className="p-0">
                  <div className="bg-primary text-primary-foreground p-6">
                    <h2 className="text-2xl font-bold text-center">
                      Detailed Comparison
                    </h2>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left p-4 font-semibold text-foreground">
                            Specification
                          </th>
                          {compareSlots.filter(slot => slot.bike).map((slot) => (
                            <th key={slot.id} className="text-center p-4 font-semibold text-foreground min-w-48">
                              {slot.bike?.name}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonFeatures.map((feature, index) => (
                          <tr key={feature} className={index % 2 === 0 ? "bg-muted/30" : ""}>
                            <td className="p-4 font-medium text-foreground">
                              {feature}
                            </td>
                            {compareSlots.filter(slot => slot.bike).map((slot) => (
                              <td key={slot.id} className="p-4 text-center text-muted-foreground">
                                {feature === "Price" && slot.bike?.price ? formatPrice(slot.bike.price) :
                                 feature === "Year" && slot.bike?.year ? slot.bike.year :
                                 feature === "Mileage" && slot.bike?.mileage ? slot.bike.mileage :
                                 feature === "Engine" && slot.bike?.engine ? slot.bike.engine :
                                 feature === "Power" && slot.bike?.power ? slot.bike.power :
                                 feature === "Fuel Type" ? "Petrol" :
                                 feature === "Transmission" ? "Manual" :
                                 feature === "Brakes" ? "Disc/Drum" :
                                 feature === "Tyre Type" ? "Tubeless" :
                                 feature === "Kerb Weight" ? "112 kg" : "-"}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Popular Comparisons */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Popular Comparisons
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { bike1: "Hero Splendor Plus", bike2: "Bajaj Platina", comparison: "vs" },
                  { bike1: "Yamaha FZ S", bike2: "Bajaj Pulsar 150", comparison: "vs" },
                  { bike1: "Honda Activa 125", bike2: "TVS Jupiter", comparison: "vs" },
                ].map((comparison, index) => (
                  <Card key={index} className="border-0 shadow-light hover:shadow-card transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <h4 className="font-semibold text-foreground mb-2">
                          {comparison.bike1} {comparison.comparison} {comparison.bike2}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Compare specs, price & features
                        </p>
                        <Button variant="outline" size="sm" className="w-full">
                          Compare Now
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ComparePage;