// pages/ExperiencePage.jsx
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      companyName: '1-Aviz Healthcare Private Limited',
      position: 'Flutter Developer intern',
      startDate: 'December 2023',
      endDate: 'April 2024',
      description: 'Creating a cross platform flutter application for the organization and integrating it with a Node JS backend and Mongo DB database.',
    },
    {
      companyName: '2-Tarumitra Foundation',
      position: 'Web App Developer intern',
      startDate: 'December 2023',
      endDate: 'February 2024',
      description: ' Spearheaded a Team of 3, Optimized Node.js Integrations, (Express, Axios) & Redux for 80% FasterResponse Times, seamlessly integrating backend/frontend (400k+ codebase)..Crafted 80+ Chakra UI Components in React & Implemented Normalized Database Schema.Boosted MongoDB Queries by 70% (Indexing & Redis). Scalable System(Docker & Kubernetes).',
    },
    {
      companyName: '3-Indial Oil Corporation Limited, Guwahati',
      position: 'SDE intern',
      startDate: 'December 2023',
      endDate: 'January 2024',
      description: 'Implemented indexing and projection techniques in Oracle database system resulting in a 10% increase in search efficiency and a 15% decrease in response time for critical business queries. Developed a machine learning transcriber and summarizer, boosting meeting efficiency by 15%.Designed a high-fidelity user experience with Flask and achieved 90% model accuracy using ASR & Seq2Seq models, resulting in a 30% user retention increase and 20% conversion rate boost.',
    },
    {
      companyName: '4-Darduck CyberSecurity Solution',
      position: 'Full Stack Developer Intern',
      startDate: 'February 2023',
      endDate: 'March 2023',
      description: 'API Development and Maintenance: Assist in designing, building,and maintaining REST APIs.Database Management: Support in managing and optimizingdatabases, including data storage, retrieval, and organization.',
    },
  ];

  return (
    <div id="experiences" className="max-w-4xl mx-auto mt-20 p-6 shadow-md rounded-md bg-white text-[#120926] mt=10 mb= 20">
      <h2 className="text-transparent text-center font-bold bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 text-4xl mb-20">My Experiences</h2>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div key={index} className="p-4 bg-white rounded-md">
            <h3 className="text-xl font-bold">{experience.companyName}</h3>
            <p className="text-sm text-gray-800">{experience.position}</p>
            <p className="text-sm text-gray-800">
              {experience.startDate} - {experience.endDate}
            </p>
            <p className="mt-2">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
