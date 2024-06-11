import React, { useState } from "react";
import data from "../data/info.json";
import { LANGUAGES, SUPPORTED_LANGUAGES } from "../types/common";

const languageLabels = {
  [LANGUAGES.en]: "Eng",
  [LANGUAGES.uk]: "Укр",
};

const sectionLabels = {
  [LANGUAGES.en]: {
    details: "Details",
    skills: "Skills",
    profile: "Profile",
    experience: "Experience",
    education: "Education",
    languages: "Languages",
    hobbies: "Hobbies",
  },
  [LANGUAGES.uk]: {
    details: "Деталі",
    skills: "Навички",
    profile: "Профіль",
    experience: "Досвід",
    education: "Освіта",
    languages: "Мови",
    hobbies: "Хобі",
  },
};


const CV = () => {
  const language = window.location.search.split("=")[1] || window.navigator.language.split("-")[0] || LANGUAGES.en;
  const [locale, setLocale] = useState(SUPPORTED_LANGUAGES.includes(language) ? language : "en");

  const updateLanguage = (lang: string) => {
    setLocale(lang);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState(null, "", url.toString());
  };

  return (
    <div className="container mx-auto p-4 sm:p-8">
      <div className="border-b-2 mb-4 pb-4 flex justify-between">
        <div>
        <h1 className="prose prose-xl text-4xl md:text-6xl font-bold uppercase mb-4">
          {data[locale].name}
        </h1>
        <p className="text-lg sm:text-xl">{data[locale].title}</p>
        </div>
        <div>
          <div className="flex space-x-4 text-lg">
            {SUPPORTED_LANGUAGES.map((lang, idx) => (
              <>
              {idx > 0 && <span>|</span>}
              <a href="#" onClick={() => updateLanguage(lang)} className={locale === lang ? "text-gray-500" : "text-blue-500 font-bold underline"}>{lang}</a>
              </>
              
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/3 border-r-0 sm:border-r-2 pr-0 sm:pr-4 pb-4 sm:pb-0">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 w-full">
              {sectionLabels[locale].details}
            </h2>
            <ul className="list-inside">
              {data[locale].details.map((detail, index) => (
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
            <h2 className="text-2xl font-semibold mb-4">
              {sectionLabels[locale].skills}
            </h2>

            {data[locale].skills.map(({ category, skills }, index) => (
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
            <h2 className="text-2xl font-semibold">
              {sectionLabels[locale].profile}
            </h2>
            <p className="sm:text-md p-2">{data[locale].profile}</p>
          </div>

          <div className="space-y-2 sm:space-y-2">
            <h2 className="text-2xl font-semibold">
              {sectionLabels[locale].experience}
            </h2>

            {data[locale].jobs.map(({ company, description, title, years }, index) => (
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
            <h2 className="text-2xl font-semibold">
              {sectionLabels[locale].education}
            </h2>
            {data[locale].education.map(({ degree, school, years }, index) => (
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
            <h2 className="text-2xl font-semibold">
              {sectionLabels[locale].languages}
            </h2>
            {data[locale].languages.map(({ language, level }, index) => (
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
            <h2 className="text-2xl font-semibold">
              {sectionLabels[locale].hobbies}
            </h2>
            <p className="sm:text-md p-2">{data[locale].hoobies}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
