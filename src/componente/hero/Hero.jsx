import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero-main mt-3' >
        <div className='hero-text'>
            <h5  className='hero-subtitle'> <em>سايبورغ</em></h5>
<p>
شركة سايبورغ للإلكترونيات هي شركة تقنية متخصصة في تطوير وتصنيع الأجهزة الإلكترونية المتقدمة، مع التركيز على الذكاء الاصطناعي، إنترنت الأشياء، وتقنيات الأتمتة. تسعى الشركة إلى تقديم حلول مبتكرة في مجالات الأجهزة الذكية، الروبوتات، والمعدات الإلكترونية القابلة للارتداء، مما يساهم في تحسين جودة الحياة وتسهيل العمليات اليومية للمستخدمين.
</p>
        </div>
<div className='hero-btn'>
<button className='btn btn-outline-success text-white'>
للمزيد...
</button>
</div>
    </div>
  )
}

export default Hero