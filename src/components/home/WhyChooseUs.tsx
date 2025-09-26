import { Shield, Users, Search, CreditCard, FileText, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const WhyChooseUs = () => {
  const features: Feature[] = [
    {
      icon: Shield,
      title: "Verified Listings",
      description: "All bikes are thoroughly inspected and verified by our expert team before listing",
      color: "text-green-600",
    },
    {
      icon: Users,
      title: "Trusted Dealers",
      description: "Partner with only certified and reliable dealers across India",
      color: "text-blue-600",
    },
    {
      icon: Search,
      title: "Smart Search",
      description: "Advanced filters to find exactly what you're looking for in seconds",
      color: "text-purple-600",
    },
    {
      icon: CreditCard,
      title: "Easy Financing",
      description: "Hassle-free loan approvals and EMI options with competitive rates",
      color: "text-orange-600",
    },
    {
      icon: FileText,
      title: "Clear Documentation",
      description: "Complete paperwork assistance and transparent documentation process",
      color: "text-indigo-600",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your queries and concerns",
      color: "text-red-600",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose Vahan Bazar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            India's most trusted platform for buying and selling pre-owned motorcycles and scooters
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="group hover:shadow-card transition-all duration-300 border-0 shadow-light"
              >
                <CardContent className="p-6 text-center">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="h-16 w-16 mx-auto bg-accent rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <IconComponent className={`h-8 w-8 ${feature.color} group-hover:text-current`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-primary rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Trusted by Thousands Across India
            </h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Join our growing community of satisfied customers who have found their perfect ride
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">50K+</div>
              <div className="text-white/90">Bikes Sold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">2K+</div>
              <div className="text-white/90">Verified Dealers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">100+</div>
              <div className="text-white/90">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">15K+</div>
              <div className="text-white/90">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;