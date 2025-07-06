import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  Shield,
  Zap,
  Settings,
  Download,
  Star,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-eagle-blue to-eagle-blue-light flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-slate-900">
                Eagle Filter
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-slate-600 hover:text-eagle-blue transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-slate-600 hover:text-eagle-blue transition-colors"
              >
                How it Works
              </a>
              <a
                href="#pricing"
                className="text-slate-600 hover:text-eagle-blue transition-colors"
              >
                Pricing
              </a>
              <Button className="bg-eagle-blue hover:bg-eagle-blue/90 text-white">
                Add to Chrome
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-eagle-blue/10 text-eagle-blue border-eagle-blue/20">
              Chrome Extension
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Professional Web
              <span className="bg-gradient-to-r from-eagle-blue to-eagle-blue-light bg-clip-text text-transparent">
                {" "}
                Content Filtering
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Eagle Filter provides enterprise-grade content filtering for
              Chrome, ensuring professional browsing environments with advanced
              filtering algorithms and real-time protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-eagle-blue to-eagle-blue-light hover:shadow-lg hover:shadow-eagle-blue/25 transition-all duration-200 text-white px-8 py-3"
              >
                <Download className="w-5 h-5 mr-2" />
                Install Free Extension
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-eagle-blue text-eagle-blue hover:bg-eagle-blue hover:text-white px-8 py-3"
              >
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-slate-700">4.9/5</span>
              <span>•</span>
              <span>10,000+ users</span>
              <span>•</span>
              <span>Free to use</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Designed for professional environments with advanced filtering
              capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-eagle-blue/20 hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-eagle-blue to-eagle-blue-light flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-slate-900">
                  Advanced Filtering
                </CardTitle>
                <CardDescription>
                  AI-powered content analysis with real-time blocking and
                  customizable rules
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-eagle-blue/20 hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-eagle-blue to-eagle-blue-light flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-slate-900">Lightning Fast</CardTitle>
                <CardDescription>
                  Optimized performance with minimal impact on browsing speed
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-eagle-blue/20 hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-eagle-blue to-eagle-blue-light flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-slate-900">
                  Customizable Rules
                </CardTitle>
                <CardDescription>
                  Create custom filtering policies tailored to your
                  organization's needs
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-eagle-blue/20 hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-eagle-blue to-eagle-blue-light flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-slate-900">
                  Real-time Analytics
                </CardTitle>
                <CardDescription>
                  Monitor filtering activity with detailed reports and insights
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-eagle-blue/20 hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-eagle-blue to-eagle-blue-light flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-slate-900">Privacy First</CardTitle>
                <CardDescription>
                  All filtering happens locally - your browsing data never
                  leaves your device
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-eagle-blue/20 hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-eagle-blue to-eagle-blue-light flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-slate-900">Easy Setup</CardTitle>
                <CardDescription>
                  Install and configure in under 2 minutes with guided setup
                  wizard
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section
        id="how-it-works"
        className="py-20 bg-gradient-to-br from-slate-50 to-slate-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              How Eagle Filter Works
            </h2>
            <p className="text-xl text-slate-600">
              Professional content filtering in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-eagle-blue to-eagle-blue-light flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Install & Configure
              </h3>
              <p className="text-slate-600">
                Add Eagle Filter to Chrome and customize your filtering
                preferences in minutes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-eagle-blue to-eagle-blue-light flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Real-time Protection
              </h3>
              <p className="text-slate-600">
                Advanced AI algorithms analyze content in real-time and apply
                filtering rules automatically
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-eagle-blue to-eagle-blue-light flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Monitor & Optimize
              </h3>
              <p className="text-slate-600">
                Review filtering reports and fine-tune settings for optimal
                performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Ready to Enhance Your Browsing?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Join thousands of professionals using Eagle Filter for secure,
            productive web browsing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-eagle-blue to-eagle-blue-light hover:shadow-lg hover:shadow-eagle-blue/25 transition-all duration-200 text-white px-8 py-3"
            >
              <Download className="w-5 h-5 mr-2" />
              Install for Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-eagle-blue text-eagle-blue hover:bg-eagle-blue hover:text-white px-8 py-3"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-eagle-blue to-eagle-blue-light flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold">Eagle Filter</span>
              </div>
              <p className="text-slate-400">
                Professional content filtering for Chrome browsers
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Demo
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Eagle Filter. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
