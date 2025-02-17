import React, { useState } from 'react'
import './Navbar.css'
import Profile from '../profile/Profile'
const Navbar = () => {
  const [btn,setBtn]=useState(false)
  function btnF(){
setBtn(!btn)
  }
  return (
    <div dir='rtl'>
      <nav class="navbar navbar-expand-lg bg-dark rounded-3x flex justify-between  text-white gap-10">
        <div class="container-fluid">
          <button class="navbar-toggler mb-3 bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon text-white"></span>
          </button>
          <div class="collapse my-nav navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">
              <img src="src\assets\img\logo.png" alt="" />
            </a>



            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ul  rounded">
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#">الرئيسيه</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">انقر هنا</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled text-white" aria-disabled="true">اتصل بنا</a>
              </li>
            </ul>

{/* 
<button onClick={btnF} className='btn rounded'> 
<img className='' style={{
  borderRadius:'50%'
}} src="src\assets\img\avatar-02.jpg" alt="" />

</button>
{
  btn?<Profile/>:''
} */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar