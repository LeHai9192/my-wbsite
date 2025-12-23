import React from 'react';
import { MapPin, Users, Globe, Wrench, Network, ArrowRight } from 'lucide-react';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "Telecom",
      country: "VietNam",
      client: "Telecom Provider",
      domain: "Telecommunications",
      service: "Mobile Network Solution",
      collaboration: "Full Development",
      image: `${process.env.PUBLIC_URL || ''}/portfolio2/VMO.png`
    },
    {
      title: "AI Box",
      country: "VietNam",
      client: "Security Company",
      domain: "IoT & Security",
      service: "AI Camera System",
      collaboration: "Hardware & Software",
      image: `${process.env.PUBLIC_URL || ''}/portfolio2/aibox.jpg`
    },
    {
      title: "Chatbot",
      country: "VietNam",
      client: "E-commerce",
      domain: "Customer Service",
      service: "AI Chatbot Platform",
      collaboration: "AI Development",
      image: `${process.env.PUBLIC_URL || ''}/portfolio2/chatbot.jpg`
    }
  ];

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-normal text-center text-gray-800 mb-12 fade-in">製品</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={index} className="rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-3 overflow-hidden fade-in group border border-transparent hover:border-blue-400 relative h-80">
              
              {/* Background Image/Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700 transition-all duration-500">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                  />
                )}
              </div>

              {/* Title - Always Visible */}
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:opacity-0">
                <h3 className="text-white text-2xl font-bold z-10">{item.title}</h3>
              </div>

              {/* Details - Show on Hover */}
              <div className="absolute inset-0 bg-blue-800 bg-opacity-95 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="space-y-3">
                  <div className="flex items-center text-white text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="font-medium">Country:</span>
                    <span className="ml-2">{item.country}</span>
                  </div>
                  
                  <div className="flex items-center text-white text-sm">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="font-medium">Client:</span>
                    <span className="ml-2">{item.client}</span>
                  </div>
                  
                  <div className="flex items-center text-white text-sm">
                    <Globe className="w-4 h-4 mr-2" />
                    <span className="font-medium">Domain:</span>
                    <span className="ml-2">{item.domain}</span>
                  </div>
                  
                  <div className="flex items-center text-white text-sm">
                    <Wrench className="w-4 h-4 mr-2" />
                    <span className="font-medium">Service:</span>
                    <span className="ml-2">{item.service}</span>
                  </div>
                  
                  <div className="flex items-center text-white text-sm">
                    <Network className="w-4 h-4 mr-2" />
                    <span className="font-medium">Collaboration Model:</span>
                    <span className="ml-2">{item.collaboration}</span>
                  </div>
                </div>

                {/* Title in hover state */}
                <div>
                  <h3 className="text-white text-xl font-bold mb-4">{item.title}</h3>
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <span>More Information</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;