import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: Mail,
      title: 'Email',
      info: 'hello@yourname.com',
      bgColor: 'bg-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '+1 (555) 123-4567',
      bgColor: 'bg-green-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      info: 'San Francisco, CA',
      bgColor: 'bg-purple-600'
    }
  ];

  return (
    <div className="space-y-6">
      {contactItems.map((item, index) => (
        <div key={index} className="flex items-center space-x-4">
          <div className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center`}>
            <item.icon size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-600">{item.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;