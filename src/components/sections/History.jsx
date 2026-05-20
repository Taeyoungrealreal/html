import React from 'react';
import { motion } from 'framer-motion';

const historyData = [
  { year: "2017.12.19", title: "강원도지사 표창", desc: "" },
  { year: "2013.02.19", title: "상호 및 대표자 변경", desc: "상호 : (주)강원유체 -> 비에이택(주)" },
  { year: "2012.12.10", title: "벤처기업인증", desc: "중소기업청" },
  { year: "2010.11.01", title: "(주)강원유체 설립", desc: "" }
];

const History = () => {
  return (
    <section id="history" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">Our History</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            끝없는 도전과 혁신으로 걸어온 비에이텍의 발자취입니다.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-primary/30 ml-4 md:mx-auto md:w-full md:max-w-3xl">
          {historyData.map((item, index) => (
            <motion.div 
              key={index}
              className="mb-12 ml-6 md:ml-0 md:flex md:items-center md:justify-between w-full relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] md:left-1/2 md:-translate-x-1/2 border-4 border-white shadow z-10"></div>
              
              {/* Connecting Line */}
              <div className={`absolute top-2 h-0.5 bg-primary/30 z-0 
                ${index % 2 === 0 
                  ? 'md:right-1/2 md:left-auto md:w-20 left-[-6px] w-6' 
                  : 'md:left-1/2 md:w-20 left-[-6px] w-6'}`}
              ></div>

              <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:order-2 md:pl-8'}`}>
                <h3 className="text-2xl font-bold text-primary mb-1">{item.year}</h3>
                <h4 className="text-xl font-semibold text-secondary mb-2">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
              <div className="hidden md:block md:w-2/12"></div>
              <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? 'md:order-2' : ''}`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;
