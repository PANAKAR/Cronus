import React from "react";
import { easeIn, motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { easing } from "maath";

const FeedbackCard = ({index,testimonial,name,designation,company,image}) => {
  return (
    <motion.div
        variants={ easeIn("", index * 0.35 , 0.45)}
        className='bg-black-100 p-10 rounded-3xl xs:w-full w-full `{styles.boxShadow}`'
        style={{boxShadow: "10px 15px 8px black"}}
    >
        <p className='text-white font-black text-[48px]'>"</p>

        <div className='mt-1'>
        <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

        <div className='mt-7 flex justify-between items-center gap-1'>
            <div className='flex-1 flex flex-col'>
              <p className='text-white font-medium text-[16px]'>
                  <span className='text-white text-[40px]'></span> {name}
              </p>
            </div>

            <img
            src={image}
            alt={`feedback_by-${name}`}
            className='w-14 h-14 rounded-full object-cover'
            style={{width: "120px", height: "120px"}}
            />
        </div>
        </div>
    </motion.div>

  )
}

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-white-100 rounded-[20px]`}>
      <div
        className={`bg-gray-800 rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <div >
          <p style={{fontSize: "150%", color: "ButtonFace"}}>What Our Clients Say.</p>
          <h2 style={{fontSize: "300%", fontWeight: "bolder", color: "white"}}>Testimonials.</h2>
        </div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
