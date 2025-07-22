import React from 'react';
import { Home, User, Briefcase, Award, Mail, Menu, X, Instagram, Linkedin,} from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  scrollToSection,
  isMobileMenuOpen,
  setIsMobileMenuOpen
}) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'portfolio', icon: Briefcase, label: 'Portfolio' },
    { id: 'why-me', icon: Award, label: 'Why Me' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];


  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex lg:fixed lg:left-0 lg:top-0 lg:h-full lg:w-64 lg:flex-col lg:bg-background lg:border-r lg:border-gray-200 lg:shadow-sm lg:z-50">
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-pinterest-red mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-7xl font-bold font-pinterest">IN</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Ilsa Naeem</h2>
            <p className="text-sm text-gray-600">Digital Marketing Expert</p>
          </div>

          <ul className="space-y-2">
            {navItems.map(({ id, icon: Icon, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeSection === id
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)} />
        )}

        {/* Mobile Menu */}
        <nav className={`fixed top-0 right-0 h-full w-80 bg-background z-50 transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-8 pt-20">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-pinterest-red mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl font-bold">IN</span>
              </div>
              <h2 className="text-lg font-bold text-gray-800">Ilsa Naeem</h2>
              <p className="text-sm text-gray-600">Digital Marketing Expert</p>
            </div>

            <ul className="space-y-2">
              {navItems.map(({ id, icon: Icon, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeSection === id
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-gray-200">
              
            </div>
          </div>
        </nav>

        {/* Bottom Mobile Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 lg:hidden">
  <div className="flex justify-around py-2">
    {navItems.map(({ id, icon: Icon, label }) => (
      <button
        key={id}
        onClick={() => scrollToSection(id)}
        className={`flex flex-col items-center py-2 px-3 transition-all duration-200 ${
          activeSection === id ? 'text-pinterest-red' : 'text-gray-600'
        }`}
      >
        <Icon className="w-5 h-5 mb-1" />
        <span className="text-xs">{label}</span>
      </button>
    ))}

    {/* Mobile Menu Toggle Icon */}
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="flex flex-col items-center py-2 px-3 transition-all duration-200 text-gray-600"
    >
      {isMobileMenuOpen ? <X className="w-5 h-5 mb-1" /> : <Menu className="w-5 h-5 mb-1" />}
      <span className="text-xs">{isMobileMenuOpen ? 'Close' : 'Menu'}</span>
    </button>
  </div>
</nav>

      </div>
    </>
  );
};

export default Navigation;