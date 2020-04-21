import React from "react";

import "./Accordion.css";

const faqs = [
  {
    question: "How Checkoutmojo works?",
    answer: `Checkoutmojo informs you about availability of delivery times on different e-commerce app. Once you install the chrome extension and switch it on, you have to add all your items to your cart and go to the page where it shows "Not available" for all the days in "Select A Day". You can then go to any other tab in the chrome browser and as soon as a delivery time is available, Checkoutmojo will show a notification and take you to your cart where you can select a time and proceed to checkout. `,
  },
  {
    question: "How will I know when a delivery time becomes available?",
    answer:
      "You have to remain in the chrome browser (any tab) and as soon as delivery time is available you will be shown a notification. ",
  },
  {
    question:
      "What are the e-commerce platforms for which Checkoutmojo is available?",
    answer:
      "Currently, it works with Amazon Fresh but we will soon incorporate other apps like Instacart for notifications on availability. ",
  },
  {
    question:
      "Does it work with Amazon fresh phone app or  any non-chrome browser?",
    answer: "Currently, we only support chrome. We do not support phone apps.",
  },
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
