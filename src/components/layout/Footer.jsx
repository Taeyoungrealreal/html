import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-slate-300 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            <span className="text-primary">BA</span> TECH
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            산업용 펌프 및 설비 엔지니어링의 새로운 기준을 제시합니다.<br />
            혁신적인 기술력과 신뢰를 바탕으로 글로벌 파트너로 도약하겠습니다.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
          <ul className="text-sm space-y-2">
            <li><strong>주소:</strong> 강원특별자치도 춘천시 퇴계공단2길 64 (퇴계제2농공단지내)</li>
            <li><strong>전화:</strong> 033-264-9243 / FAX : 033-251-5747</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company Info</h3>
          <ul className="text-sm space-y-2">
            <li><strong>대표자:</strong> 조세연</li>
            <li><strong>사업자등록번호:</strong> 221-81-42625</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-8 pt-8 border-t border-slate-700 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} BA TECH Co., Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
