import { Box, ChevronDown, Home, Menu, MessageSquare, User, Wrench, X, Plus } from 'lucide-react';
import { useRef, useState } from 'react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState('');
  const fileInputRef = useRef(null); // Reference to the hidden file input

  const navItems = [
    { title: 'Home', icon: Home, hasDropdown: false },
    { 
      title: 'Profile', 
      icon: User,
      hasDropdown: true,
      dropdownItems: ['Personal Info', 'Account Settings', 'Billing']
    },
    { 
      title: 'Messages', 
      icon: MessageSquare,
      hasDropdown: true,
      dropdownItems: ['Inbox', 'Sent', 'Drafts', 'Archived']
    },
    { title: 'Analytics', icon: Box, hasDropdown: false },
    {
      title: 'Settings',
      icon: Wrench,
      hasDropdown: true,
      dropdownItems: ['Preferences', 'Security', 'Notifications']
    },
    { title: 'Add File', icon: Plus, hasDropdown: false } // New Add File button
  ];

  const handleAddFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Programmatically trigger the file input
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
      // Add logic to handle the file (e.g., upload it or read its content)
    }
  };

  return (
    <div 
      className={`bg-white text-black transition-all duration-300 ease-in-out text-sm border-2 rounded-md border-[rgba(0,0,0,0.08)]
        ${isOpen ? 'w-64' : 'w-16'}`}
    >
      <div className="p-4 flex justify-between items-center">
        <h1 className={`font-bold overflow-hidden transition-all duration-300 text-lg text-nowrap text-[#3B40E8]
          ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          Dashboard
        </h1>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="hover:bg-[#F3F5F7] p-2 rounded-lg"
        >
          {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      <nav className="mt-6">
        {navItems.map((item) => (
          <div key={item.title}>
            {item.title === 'Add File' ? (
              <div 
                className="flex items-center px-4 py-3 hover:bg-[#F3F5F7] cursor-pointer"
                onClick={handleAddFileClick}
              >
                <item.icon size={20} strokeWidth={1.5} color="#000" />
                <span className={`ml-4 whitespace-nowrap overflow-hidden transition-all duration-300
                  ${isOpen ? 'w-32 opacity-100' : 'w-0 opacity-0'}`}>
                  {item.title}
                </span>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden" // Hide the file input
                />
              </div>
            ) : (
              <div 
                className="px-4 py-3 hover:bg-[#F3F5F7] cursor-pointer flex items-center justify-between"
                onClick={() => item.hasDropdown && isOpen && setActiveDropdown(activeDropdown === item.title ? '' : item.title)}
              >
                <div className="flex items-center">
                  <item.icon size={20} strokeWidth={1.5} color="#000" />
                  <span className={`ml-4 whitespace-nowrap overflow-hidden transition-all duration-300
                    ${isOpen ? 'w-32 opacity-100' : 'w-0 opacity-0'}`}>
                    {item.title}
                  </span>
                </div>
                {item.hasDropdown && isOpen && (
                  <ChevronDown 
                    size={16} 
                    strokeWidth={1.5}
                    className={`transition-transform duration-200 
                      ${activeDropdown === item.title ? 'rotate-180' : ''}`}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
