import React, { useState } from 'react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      content: "MindMeld has revolutionized how our product team works. We've cut meeting time by 40% while producing better quality outputs.",
      author: "Sarah Johnson",
      position: "Product Director, TechCorp",
      image: "/images/testimonial-1.jpg"
    },
    {
      id: 2,
      content: "As a distributed engineering team, MindMeld helps us collaborate across time zones. The AI code merging is like having an extra senior developer on the team.",
      author: "David Chen",
      position: "CTO, CloudScale",
      image: "/images/testimonial-2.jpg"
    },
    {
      id: 3,
      content: "Our creative team uses MindMeld daily for brainstorming and design work. The AI's ability to merge different design concepts is truly game-changing.",
      author: "Maya Rodriguez",
      position: "Creative Director, DesignHub",
      image: "/images/testimonial-3.jpg"
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Users Say</h2>
          <p>Teams across industries are transforming how they collaborate with MindMeld.</p>
        </div>
        <div className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
            >
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.author} />
                <div>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonial-controls">
          <button className="prev-testimonial" onClick={handlePrev}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              ></span>
            ))}
          </div>
          <button className="next-testimonial" onClick={handleNext}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;