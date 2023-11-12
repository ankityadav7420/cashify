import React from 'react';

const Company = () => {
  const sections = [
    { title: 'Support', items: ['Help Centre', 'AirCover', 'Anti-discrimination', 'Disability support', 'Cancellation options', 'Report neighbourhood concern'] },
    { title: 'Hosting', items: ['Book My Home your home', 'AirCover for Hosts', 'Hosting resources', 'Community forum', 'Hosting responsibly'] },
    { title: 'Book My Home', items: ['Newsroom', 'New features', 'Careers', 'Investors', 'bookmyhome.org emergency stays'] },
  ];

  return (
    <div className="flex justify-between m-4">
      {sections.map((section, index) => (
        <div key={index} className="flex-1 text-left m-2">
          <p className="font-bold text-left">{section.title}</p>
          <ul className="list-none pl-0">
            {section.items.map((item, i) => (
              <li key={i} className='p-2 hover:underline cursor-pointer text-left'>
                <a href={`/${item.toLowerCase().replace(/\s/g, '-')}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Company;
