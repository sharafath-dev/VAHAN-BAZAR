import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Upload, Camera, FileText, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SellPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Sell Your Bike in Minutes
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the best price for your motorcycle with our trusted dealer network
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="h-16 w-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Upload className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Upload Details</h3>
                <p className="text-sm text-muted-foreground">Add bike photos and details</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Get Verified</h3>
                <p className="text-sm text-muted-foreground">Quick verification process</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Instant Offers</h3>
                <p className="text-sm text-muted-foreground">Get offers from verified dealers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sell Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">List Your Bike</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Basic Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Brand
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Brand" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hero">Hero</SelectItem>
                          <SelectItem value="honda">Honda</SelectItem>
                          <SelectItem value="bajaj">Bajaj</SelectItem>
                          <SelectItem value="yamaha">Yamaha</SelectItem>
                          <SelectItem value="tvs">TVS</SelectItem>
                          <SelectItem value="royal-enfield">Royal Enfield</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Model
                      </label>
                      <Input placeholder="Enter model name" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Year
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2024">2024</SelectItem>
                          <SelectItem value="2023">2023</SelectItem>
                          <SelectItem value="2022">2022</SelectItem>
                          <SelectItem value="2021">2021</SelectItem>
                          <SelectItem value="2020">2020</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        KMs Driven
                      </label>
                      <Input placeholder="Enter kilometers" type="number" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Expected Price (₹)
                      </label>
                      <Input placeholder="Enter expected price" type="number" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        City
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select City" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mumbai">Mumbai</SelectItem>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="bangalore">Bangalore</SelectItem>
                          <SelectItem value="chennai">Chennai</SelectItem>
                          <SelectItem value="pune">Pune</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Description
                    </label>
                    <Textarea
                      placeholder="Describe your bike's condition, features, and any additional details..."
                      rows={4}
                    />
                  </div>
                  
                  {/* Photo Upload */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Upload Photos
                    </label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground mb-2">
                        Drag & drop photos here, or click to select
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Upload up to 10 photos (JPG, PNG, max 5MB each)
                      </p>
                      <Button variant="outline" className="mt-4">
                        Choose Files
                      </Button>
                    </div>
                  </div>
                  
                  {/* Contact Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <Input placeholder="Enter your name" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input placeholder="Enter phone number" />
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <Button className="w-full h-12 text-lg font-semibold">
                    List My Bike for Sale
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SellPage;