import React from "react";
import data from "../data/info.json";

const CV = () => {
  return (
    <div className="container mx-auto p-4 sm:p-8">
      <div className="border-b-2 mb-4 pb-4">
        <h1 className="prose prose-xl text-4xl md:text-6xl font-bold uppercase mb-4">
          {data.name}
        </h1>
        <p className="text-lg sm:text-xl">{data.title}</p>
      </div>

      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/3 border-r-0 sm:border-r-2 pr-0 sm:pr-4 pb-4 sm:pb-0">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 w-full">Details</h2>
            <ul className="list-inside">
              {data.details.map((detail, index) => (
                <li key={index} className="items-center mb-2">
                  <h3 className="font-semibold text-lg">{detail.label}:</h3>
                  {detail.link ? (
                    <a href={detail.link} className="hover:underline">
                      {detail.value}
                    </a>
                  ) : (
                    <span>{detail.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>

            {data.skills.map(({ category, skills }, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold mb-2">{category}:</h3>
                <ul
                  className="flex flex-wrap gap-4 list-inside list-disc"
                  role="list"
                >
                  {skills.map((skill, i) => (
                    <li key={i} className="text-base underline" role="listitem">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full sm:w-2/3 pl-0 sm:pl-4 space-y-2 sm:space-y-6">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Profile</h2>
            <p className="sm:text-md p-2">{data.profile}</p>
          </div>

          <div className="space-y-2 sm:space-y-2">
            <h2 className="text-2xl font-semibold">Experience</h2>

            {data.jobs.map(({ company, description, title, years }, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xl font-bold">{title}</span>
                </div>
                <div className="mb-2">
                  <span className="text-lg text-gray-600">{company}</span>
                </div>
                <div className="text-sm text-gray-500 mb-2">
                  <span>{years}</span>
                </div>
                <div className="text-base">
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2 sm:space-y-2">
            <h2 className="text-2xl font-semibold">Education</h2>
            {data.education.map(({ degree, school, years }, index) => (
              <div key={index} className="p-2">
                <div className="mb-2">
                  <span className="text-xl font-bold">{degree}</span>
                </div>
                <div className="mb-2">
                  <span className="text-lg text-gray-600">{school}</span>
                </div>
                <div className="text-sm text-gray-500">
                  <span>{years}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2 sm:space-y-2">
            <h2 className="text-2xl font-semibold">Languages</h2>
            {data.languages.map(({ language, level }, index) => (
              <div key={index} className="p-2">
                <div className="mb-2">
                  <span className="text-xl font-bold">{language}</span>
                </div>
                <div className="text-sm text-gray-500">
                  <span>{level}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-2">
            <h2 className="text-2xl font-semibold">Hobbies</h2>
            <p className="sm:text-md p-2">{data.hoobies}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
