import { useState } from "react";
import { Search, Menu, Heart, User, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Buy", href: "#buy" },
    { name: "Sell", href: "#sell" },
    { name: "Compare", href: "#compare" },
    { name: "Dealers", href: "#dealers" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">VB</span>
          </div>
          <span className="font-bold text-xl text-foreground">BikeHub</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Search Bar - Desktop */}
        <div className="hidden lg:flex items-center max-w-sm w-full mx-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search bikes, brands..."
              className="pl-10 bg-muted/50 border-muted focus:bg-background"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="default" className="hidden sm:flex">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Sell Your Bike
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-6">
                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search bikes, brands..."
                    className="pl-10"
                  />
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors font-medium py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>

                <div className="pt-4 border-t border-border">
                  <Button className="w-full mb-3">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Sell Your Bike
                  </Button>
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1">
                      <Heart className="h-4 w-4 mr-2" />
                      Wishlist
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <User className="h-4 w-4 mr-2" />
                      Login
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;