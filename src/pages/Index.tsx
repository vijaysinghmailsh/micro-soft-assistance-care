import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Clock, Users, Shield, Headphones, Zap, Monitor, Gamepad2, Tablet, Bot, Building, Settings, Cloud } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <span>24/7 Support: +1 (888) 660-0507</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>Available 24/7</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>Expert Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 text-white">Microsoft Support Center</h1>
          <p className="text-xl mb-16 text-white/90">
            Get expert help with all your Microsoft products and services
          </p>
          
          {/* Phone Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 max-w-lg mx-auto mb-12 border border-white/20">
            <p className="text-lg mb-6 text-white/90">Call us now for immediate assistance</p>
            <div className="text-4xl font-bold mb-8 text-yellow-300 flex items-center justify-center gap-3">
              <Phone className="w-10 h-10" />
              +1 (888) 660-0507
            </div>
            <a href="tel:+18774154823">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-10 py-4 rounded-full mb-6 shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Click to Call Now
              </Button>
            </a>
            <p className="text-sm text-white/80 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              Available 24 hours a day, 7 days a week
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-6 justify-center flex-wrap">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full"
            >
              Live Chat Support
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-yellow-500 border-2 border-yellow-500 text-black hover:bg-yellow-400 px-8 py-3 rounded-full font-semibold"
            >
              Remote Assistance
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Our Support Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Support?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive Microsoft support services with certified technicians available around the clock
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">24/7 Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Round-the-clock support whenever you need assistance
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Expert Technicians</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Certified Microsoft specialists ready to help
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Multiple Support Channels</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Phone, chat, and remote assistance options
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Quick Resolution</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Fast and efficient problem-solving approach
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Microsoft Products Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Microsoft Products We Support</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our expert technicians provide comprehensive support for all Microsoft products and services. 
              Get help with installation, troubleshooting, and optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Microsoft 365</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Productivity suite with Office apps, cloud storage, and collaboration tools
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Office Suite</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Word, Excel, PowerPoint, and Outlook applications for all your needs
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Windows OS</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Operating system support, updates, and troubleshooting assistance
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Gamepad2 className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Xbox Gaming</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Console support, Game Pass, and Xbox Live services
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Tablet className="w-8 h-8 text-gray-600" />
                </div>
                <CardTitle className="text-xl">Surface Devices</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Hardware support for Surface laptops, tablets, and accessories
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Copilot AI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  AI assistant integration and productivity enhancement tools
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Dynamics 365</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Business applications for CRM, ERP, and business intelligence
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">Security & Intune</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Device management, security policies, and endpoint protection
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl">Azure Cloud</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Cloud computing services, storage, and enterprise solutions
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Need Help Right Now Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-500 to-orange-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Right Now?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Don't wait - our Microsoft certified specialists are standing by to assist you with any technical issue or question.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
            <a href="tel:+18774154823" className="block">
              <div className="text-3xl font-bold mb-4 text-yellow-300 flex items-center justify-center gap-2 cursor-pointer hover:text-yellow-200 transition-colors">
                <Phone className="w-8 h-8" />
                Call +1 (888) 660-0507
              </div>
            </a>
            <p className="text-lg mb-2">Available 24/7</p>
            <p className="text-sm">No wait times • Immediate assistance</p>
          </div>
        </div>
      </section>

      {/* Customer Service Promise */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Customer Service Promise</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">24/7 Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  We're here whenever you need us, day or night, weekends and holidays included.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Certified Experts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  All our technicians are Microsoft certified with years of experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Multiple Support Options</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Phone support, live chat, remote assistance, and step-by-step guidance.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
