import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  CreditCard,
  FileText,
  UserCheck,
  Smartphone,
  Globe,
  ShieldCheck,
  LayoutGrid,
  Menu,
  X,
  CheckCircle2,
  Building2
} from 'lucide-react';


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const serviceCategories = [
    {
      title: "सरकारी आईडी और दस्तावेज",
      icon: <CreditCard className="w-6 h-6 text-blue-600" />,
      services: [
        "पैन कार्ड (PAN Card)",
        "आधार कार्ड (Aadhaar Card)",
        "आयुष्मान कार्ड (Ayushman Card)",
        "आय प्रमाण पत्र (Income Certificate)",
        "निवास प्रमाण पत्र (Residence Certificate)",
        "जाति प्रमाण पत्र (Caste Certificate)"
      ]
    },
    {
      title: "ऑनलाइन फॉर्म और पंजीकरण",
      icon: <FileText className="w-6 h-6 text-orange-600" />,
      services: [
        "सभी ऑनलाइन फॉर्म",
        "श्रम कार्ड (Labour Card)",
        "राशन कार्ड (Ration Card)",
        "ड्राइविंग लाइसेंस (Driving License)",
        "पासपोर्ट (Passport)"
      ]
    },
    {
      title: "अन्य सेवाएं",
      icon: <Globe className="w-6 h-6 text-green-600" />,
      services: [
        "बीमा (Insurance)",
        "बैंकिंग सेवा (Banking Services)",
        "बिजली बिल / अन्य बिल भुगतान",
        "रोजगार पंजीयन (Job Registration)"
      ]
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-blue-700 p-2 rounded-lg">
                <Building2 className="text-white w-8 h-8" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-blue-900 leading-tight">Shahjahan Choice Center</h1>
                <p className="text-xs text-yellow-700 font-medium tracking-wide">COMMON SERVICE CENTER</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8 font-medium">
              <a href="#" className="hover:text-blue-700 transition-colors">मुख्य पृष्ठ</a>
              <a href="#services" className="hover:text-blue-700 transition-colors">सेवाएं</a>
              <a href="#about" className="hover:text-blue-700 transition-colors">हमारे बारे में</a>
              <button 
                onClick={scrollToContact}
                className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-all shadow-md"
              >
                संपर्क करें
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 space-y-4 shadow-lg absolute w-full">
            <a href="#" className="block py-2 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>मुख्य पृष्ठ</a>
            <a href="#services" className="block py-2 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>सेवाएं</a>
            <a href="#contact" className="block py-2 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>संपर्क करें</a>
          </div>
        )}
      </nav>

      <header className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="src/public/heroSh.png" alt="Shahjahan Choice Center" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.06 }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col justify-end min-h-[65vh] pb-12">
         
         

        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border-b-4 border-blue-600">
            <div className="bg-blue-100 p-3 rounded-full"><ShieldCheck className="text-blue-600 w-8 h-8" /></div>
            <div>
              <h3 className="font-medium text-lg">सुरक्षित सेवा</h3>
              <p className="text-slate-500 text-sm">आपके दस्तावेजों की पूर्ण गोपनीयता</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border-b-4 border-orange-600">
            <div className="bg-orange-100 p-3 rounded-full"><UserCheck className="text-orange-600 w-8 h-8" /></div>
            <div>
              <h3 className="font-medium text-lg">अनुभवी सहायता</h3>
              <p className="text-slate-500 text-sm">सरकारी फॉर्म भरने में पूर्ण मार्गदर्शन</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border-b-4 border-green-600">
            <div className="bg-green-100 p-3 rounded-full"><Smartphone className="text-green-600 w-8 h-8" /></div>
            <div>
              <h3 className="font-medium text-lg">त्वरित कार्य</h3>
              <p className="text-slate-500 text-sm">कम से कम समय में कार्य निष्पादन</p>
            </div>
          </div>
        </div>
      </div>

      <section id="services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">हमारी सेवाएं (Services Offered)</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow border border-slate-100 overflow-hidden group">
              <div className="p-8">
                <div className="mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-medium mb-6 text-slate-800 border-b pb-4">{category.title}</h3>
                <ul className="space-y-4">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600 font-medium">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">हमसे संपर्क करें</h2>
              <p className="text-slate-400 text-lg mb-10">
                क्या आपको किसी सरकारी सेवा या फॉर्म के बारे में जानकारी चाहिए? नीचे दिए गए नंबरों पर हमें कॉल करें या हमारे सेंटर पर पधारें।
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="bg-blue-600/20 p-4 rounded-2xl border border-blue-500/30">
                    <Phone className="text-blue-400 w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm uppercase tracking-wider font-semibold">संपर्क सूत्र (Phone)</p>
                    <div className="flex flex-col">
                      <a href="tel:+91 7224843156" className="text-2xl font-bold hover:text-blue-400 transition-colors">+91 72248 43156</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=21.234763972222,81.638476972222"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open location in Google Maps"
                    className="inline-block"
                  >
                    <div className="bg-orange-600/20 p-4 rounded-2xl border border-orange-500/30">
                      <MapPin className="text-orange-400 w-8 h-8" />
                    </div>
                  </a>
                  <div>
                    <p className="text-slate-400 text-sm uppercase tracking-wider font-semibold">स्थान (Location)</p>
                    <p className="text-xl font-medium">शाहजहाँ चॉइस सेंटर, छत्तीसगढ़</p>
                    <p className="text-slate-400">Kalibadi Chowk, Raipur</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=21.234763972222,81.638476972222"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Kalibadi Chowk location in Google Maps"
                      className="text-blue-400 hover:underline mt-2 inline-block"
                    >
                      View on map
                    </a>
                  </div>
                </div>
              </div>
            </div>

          
          </div>
        </div>
      </section>

      <footer className="bg-slate-100 py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-blue-700 p-2 rounded-lg">
                <Building2 className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-lg">Shahjahan Choice Center</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-slate-600 font-medium">CSC (Common Service Center)</p>
              <p className="text-slate-500 text-sm">भारत सरकार की एक पहल (Government of India initiative)</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 text-center text-slate-500 text-sm">
            <a
              href="https://www.crownedgetechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              Developed By : Crown Edge Technologies
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
