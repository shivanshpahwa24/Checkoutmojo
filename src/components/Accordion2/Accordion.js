import React from "react";

import "./Accordion.css";

const faqs = [
  {
    question: "How does InfluRocket work?",
    answer: `There are two parts in your web content- things that people are actively searching for and things that you as a content creator think people should know. Any content that has both these components is bound to grow organically in terms of SEO as well as social shares.
		
		By using our tools for keyword research prior to content creation, you basically start with your audience's immediate pain points and then provide them additional content which they would also find useful.`
  },
  {
    question: "How is it different from other keyword tools?",
    answer:
      "Other keyword tools focus on generating keyword ideas while InfluRocket focusses on content ideas. It's not just about keywords but also various types of questions that people ask, various problems they face and the value they are looking for."
  },
  {
    question: "How can I use InfluRocket?",
    answer:
      "InfluRocket works in 4 steps. Finding keyword ideas and related questions, creating broad topics from those keywords , getting relevant data on the competition to help you select keywords and finally, combine relevant topics to the keywords to create the content."
  }
];

export default function Accordion() {
  return (
    <div className="row">
      <div className="col">
        <div className="tabs">
          {faqs.map((faq, index) => (
            <div key={index} className="tab">
              <input
                type="checkbox"
                id={`rd${index + 1}`}
                name="rd"
                className="input"
              />
              <label className="tab-label" htmlFor={`rd${index + 1}`}>
                {faq.question}
              </label>
              <div className="tab-content" id={`content${index + 1}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
