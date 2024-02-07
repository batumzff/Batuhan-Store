import React, { useState } from "react";
import { testimonials } from "../helper/data";

const Testimonial = () => {
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  return (
    <section className="py-14">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-black font-semibold pb-6">
            What people are saying
          </h3>
          <ul>
            {testimonials.map((item, index) =>
              currentTestimonial === index ? (
                <li key={index}>
                  <figure>
                    <blockquote>
                      <p className="text-labelColor text-xl font-semibold sm:text-2xl">
                        “{item.quote}“
                      </p>
                    </blockquote>
                    <div className="mt-6">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-16 h-16 mx-auto rounded-full"
                      />
                      <div className="mt-3">
                        <span className="block text-gray-800 font-semibold capitalize">
                          {item.name}
                        </span>
                        <span className="block text-gray-600 text-sm mt-0.5">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </figure>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
        <div className="mt-6">
          <ul className="flex gap-x-3 justify-center">
            {testimonials.map((item, index) => (
              <li key={index}>
                <button
                  className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${
                    currentTestimonial === index ? "bg-indigo-600" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;