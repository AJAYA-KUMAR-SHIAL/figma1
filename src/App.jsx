import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from "../src/assets/Group 328.png"
import hero from "../src/assets/OBJECTS.png"
import online from "../src/assets/online-test 1.png"
import exam from "../src/assets/exam 1.png"
import certification from "../src/assets/certification 1.png"
import object from "../src/assets/OBJECTS (1).png"
import heart from "../src/assets/hearts 1.png"
import jig from "../src/assets/jigsaw 1.png"
import group1 from "../src/assets/Group (1).png"
import group2 from "../src/assets/Group 2.png"
import ball from "../src/assets/ball.png"
import group3 from "../src/assets/Group.png"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Navigation bar starts here */}
     <div className='bg-yellow-200 pb-20'>
     <nav className='flex content-center justify-between p-5 md:p-10'>
      <div>
        <img className='h-10' src={logo} alt="" />
      </div>
      <div className='flex ' >
        <ul className=' hidden  md:flex gap-7'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>About us</li>
        <li className='cursor-pointer'>Courses</li>
        <li className='cursor-pointer'>Our services</li>
        <li className='cursor-pointer'>Contact us</li>
        </ul>
      
        <button className='bg-purple-950 rounded-3xl px-5 py-0 h-8 text-white ml-7'>Sign in</button>
      </div>
     </nav>
     {/* our navbar section ends here */}
     {/* Hero section starts here */}
     <div className='md:flex p-5 md:p-10 w-full '>
      <div className='content-center '>
      <div className='flex mt-10'>
        <p className='text-4xl font-semibold'>The</p>
        <p className='text-4xl font-semibold text-orange-600 ml-2'>Smart</p>
      </div>
      <div className='flex  mt-5'>
        <p className='text-4xl font-semibold'>Choice For</p>
        <p className='text-4xl font-semibold text-orange-600 ml-2'> Futer</p>
        
      </div>
      <div className='mt-5 text-slate-500 '>
        <p className='text-left text-balance'>Elearn is a global training provider based across the UK thet specialises in accredited and bespoke training cources. We cross the...</p>
      </div>
      <div className='md:float-left mt-5 bg-white w-80 md:w-96 flex rounded-3xl '>
        
        <input className='rounded-3xl px-5 py-0 h-8 w-auto md:w-full'  type="search" placeholder='Search for a location'/>
        <button className='bg-purple-950 rounded-3xl px-5 py-0 h-8 text-white float-end'>Continue</button>
      </div>
     </div>
     <div className='mt-5'>
      <img src={hero} alt="" />
     </div>
     </div>
     {/* hero section ends here */}
     </div>
     {/* 1st card section starts here*/}
     <div className='bg-purple-950 h-auto md:h-44 md:flex w-auto  md:ml-14 md:mr-14 -translate-y-20'>
<div className='flex  p-5'>
  <div className='bg-slate-400  content-center p-5 h-16 mt-5 md:mt-7 rounded-lg'>
    <img className='h-10 w-20' src={online} alt="" />
  </div>
  <div className='text-white content-center'>
  <p className='font-bold text-lg  text-left ml-5'>Learn The Latest Skills</p>
    <p className='text-left ml-5'>Country to popular belief. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, earum?</p>
  </div>
</div>
<div className='flex p-5 '>
  <div className='bg-slate-400 content-center p-5 h-16 mt-5 md:mt-7 rounded-lg'>
    <img className='h-10 w-20' src={exam} alt="" />
  </div>
  <div className='text-white content-center'>
    <p className='font-bold text-lg text-left ml-5'>Get Ready For a Career</p>
    <p className='text-left ml-5'>Country to popular belief. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, earum?</p>
  </div>
</div>
<div className='flex  p-5'>
  <div className='bg-slate-400 content-center p-5 h-16 mt-5  md:mt-7 rounded-lg'>
    <img className='h-10 w-20' src={certification} alt="" />
  </div>
  <div className='text-white content-center'>
  <p className='font-bold text-lg  text-left ml-5'>Earn a Certificate</p>
    <p className='text-left ml-5'>Country to popular belief. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, earum?</p>
  </div>
</div>
 </div>
 {/* 1st card section ends here */}
     <div className='flex   justify-between'>
      <div>
      <img className='h-10 w-20' src={ball} alt="" />
      </div>
      <div className=''>
        <h1 className='text-4xl font-medium'>Our Tracks</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel.</p>
      </div>
      <div>
      <img className='h-10 w-20' src={group3} alt="" />
      </div>
     </div>
{/* our 2nd card starts here */}
     <div className='md:flex justify-around mt-10 md:gap-5 md:px-10 w-full'>
<div className='flex flex-col border-2 p-1 rounded-lg'>
  <div className='p-1'>
    <img className='h-40 w-96 rounded-md' src="https://thumbs.dreamstime.com/b/children-education-learning-concept-teenage-student-girl-laptop-computer-home-student-girl-laptop-computer-187338917.jpg" alt="" />
    </div>
  <div className='flex justify-between mt-1'>
    <div className='text-slate-500'>UI/UX Design</div>
    <div><img className='h-5' src="https://nitricoxidereport.com/wp-content/uploads/2016/05/4-star-rating-1024x194.png" alt="" /></div>
  </div>
  <div className='flex flex-col'>
    <div>
    <p className='text-lg font-bold float-left'>UI/UX Design for Beginners</p>
    </div>
    <div><p className='text-orange-600 font-bold text-lg float-left'>$98</p></div>
  </div>
  <hr className='h-0.5 bg-slate-400' />
  <footer className='flex mt-2 mb-5'>
    <p>22hr 30min</p>
    <p className='ml-5'>34 cources</p>
    <p className='ml-5'>250 sales</p>
  </footer>
  <div>
    <button className='bg-orange-600 rounded-3xl px-5 py-0 h-8 text-white font-bold translate-y-5'>Join Course</button>
  </div>
</div>

<div className='flex flex-col border-2 p-1 rounded-lg mt-5 md:mt-0'>
  <div className='p-1'>
    <img className='h-40 w-96 rounded-md' src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/Vd3bj2jPe/videoblocks-stressful-woman-working-on-laptop-computer-at-working-place-sleepy-businesswoman-typing-on-computer-in-late-night-office-overworked-hipster-girl-making-project-at-workplace_b2kph8l9p_thumbnail-1080_01.png" alt="" />
    </div>
  <div className='flex justify-between mt-1'>
    <div className='text-slate-500'>UI/UX Design</div>
    <div><img className='h-5' src="https://nitricoxidereport.com/wp-content/uploads/2016/05/4-star-rating-1024x194.png" alt="" /></div>
  </div>
  <div className='flex flex-col'>
    <div>
    <p className='text-lg font-bold float-left'>UI/UX Design for Beginners</p>
    </div>
    <div><p className='text-orange-600 font-bold text-lg float-left'>$98</p></div>
  </div>
  <hr className='h-0.5 bg-slate-400' />
  <footer className='flex mt-2 mb-5'>
    <p>22hr 30min</p>
    <p className='ml-5'>34 cources</p>
    <p className='ml-5'>250 sales</p>
  </footer>
  <div>
    <button className='bg-orange-600 rounded-3xl px-5 py-0 h-8 text-white font-bold translate-y-5'>Join Course</button>
  </div>
</div>

<div className='flex flex-col border-2 p-1 rounded-lg mt-5 md:mt-0'>
  <div className='p-1'>
    <img className='h-40 w-96 rounded-md' src="https://www.study365.co.uk/wp-content/uploads/2019/06/Diploma-in-Essay-Writing-Skills-Level-3.jpg" alt="" />
    </div>
  <div className='flex justify-between mt-1'>
    <div className='text-slate-500'>UI/UX Design</div>
    <div><img className='h-5' src="https://nitricoxidereport.com/wp-content/uploads/2016/05/4-star-rating-1024x194.png" alt="" /></div>
  </div>
  <div className='flex flex-col'>
    <div>
    <p className='text-lg font-bold float-left'>UI/UX Design for Beginners</p>
    </div>
    <div><p className='text-orange-600 font-bold text-lg float-left'>$98</p></div>
  </div>
  <hr className='h-0.5 bg-slate-400' />
  <footer className='flex mt-2 mb-5'>
    <p>22hr 30min</p>
    <p className='ml-5'>34 cources</p>
    <p className='ml-5'>250 sales</p>
  </footer>
  <div>
    <button className='bg-orange-600 rounded-3xl px-5 py-0 h-8 text-white font-bold translate-y-5'>Join Course</button>
  </div>
</div>

 </div>
 {/* card 2nd section ends here */}

 {/* 2nd hero section start */}
 <div className='md:flex w-full bg-yellow-200 justify-between mt-5 md:mt-20'>
  <div>
    <img src={object} alt="" />
  </div>
  <div className='content-center mt-5 md:mt-0'>
  <div className='flex gap-2 flex-wrap'>
    <p className='text-4xl font-bold'>Premium</p>
    <p className='text-4xl font-bold text-orange-600'>Learning</p>
  </div>
  <div className='float-left mb-5  md:mb-10'>
    <p className='text-4xl font-bold'>Experience</p>
    </div>
  <div className='flex w-full '>
    <div className='bg-purple-950  content-center p-5 h-16 rounded-lg'><img src={heart} alt="" /></div>
    <div  className='ml-5' >
      <div>
        <p className='text-xl font-bold float-left'>Easily Accessible</p>
        </div>
     <div> <p className=' float-left'>Learning will fell very comfortable with courselab</p>
     </div>
    </div>
  </div>
  <div className='flex w-full mt-5'>
    <div className='bg-purple-950 content-center p-5 h-16 rounded-lg'><img src={jig} alt="" /></div>
    <div className='ml-5' >
      <div><p className='text-xl font-bold float-left'>Easily Accessible</p></div>
     <div> <p className=' float-left'>Learning will fell very comfortable with courselab</p></div>
    </div>
  </div>
  </div>
 </div>
 {/* 2nd hero section end  */}
 
 <div className=' mt-5 md:mt-10 content-center w-full md:justify-around'>
       <div className=''>
        <h1 className='text-4xl font-medium'>What student's Say</h1>
        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel.</p>
      </div> 
     </div>
{/* 3rd card section starts here */}
<div className='md:flex justify-around mt-5 md:px-28 w-full'>
  <div className='flex flex-col border-4 px-5'>
    <div className='text-justify mt-5'>
      "Teachings of the great explore of truth, the master-builder of human happiness. No one rejects, dislike, or avoids pleasure itself, pleasure itself"
    </div>
    <div className='flex mt-5 mb-5'>
<div>
  <img className='rounded-full h-12 w-12' src="https://i.pinimg.com/originals/bc/af/18/bcaf18ce6054768da1628a939e2b4f65.jpg" alt="" />
</div>
<div className='ml-5'>
  <h1 className='font-bold text-left'>Finlay Kirk</h1>
  <p className='text-left'>Web Developer</p>
</div>
    </div>
  </div>
  <div className='flex flex-col border-4 px-5'>
    <div className='text-justify mt-5'>
      "Complete account of the system and expound the actual Contrary to popular belief, Lorem ipsum is not simply random text. It has roots."
    </div>
    <div className='flex mt-5 mb-5'>
<div>
  <img className='rounded-full h-12 w-12' src="https://cdn2.f-cdn.com/files/download/38545966/4bce6b.jpg" alt="" />
</div>
<div className='ml-5'>
  <h1 className='font-bold text-left'>Dannette P. Cervanates</h1>
  <p className='text-left'>Web Design</p>
</div>
    </div>
  </div>
  <div className='flex flex-col border-4 px-5'>
    <div className='text-justify mt-5'>
      "There are many vriations of passages of Lorem ipsum available, but the majority have suffered altaration in some form , by inject humours."
    </div>
    <div className='flex mt-5 mb-5'>
<div>
  <img className='rounded-full h-12 w-12' src="https://dp.profilepics.in/profile-pictures-for-facebook-whatsapp/profile-pics/profile-pics-1352.jpg" alt="" />
</div>
<div className='ml-5'>
  <h1 className='font-bold text-left'>Clara R. Altman</h1>
  <p className='text-left'>UI&UX Design</p>
</div>
    </div>
  </div>
</div>
{/* 3rd card section ends here */}
<div className='flex justify-between mt-5 md:mt-10'>
  <div>
    <img className='h-12 md:h-20' src={group1} alt="" />
  </div>
  
  <div>
    <img className='h-10 md:h-12' src={group2} alt="" />
    </div>
</div>

<div className='flex mt-5 md:mt-5 content-center justify-center'>
      
      <div className=''>
        <h1 className='text-4xl font-medium'>Our Tracks</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel.</p>
      </div>
      
     </div>
{/* 4th card section starts here */}
<div className='md:flex justify-around mt-5 md:px-10 w-full md:gap-6 md:mt-10'>
<div className='flex flex-col border-2 p-1 rounded-lg'>
  <div className='p-1'>
    <img className='h-40 w-96 rounded-md' src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/Vd3bj2jPe/videoblocks-smiling-businessman-working-on-laptop-computer-at-home-office-male-professional-typing-on-laptop-keyboard-at-office-workplace-portrait-of-positive-business-man-looking-at-laptop-screen-indoors_bfhjr_5md_thumbnail-1080_01.png" alt="" />
    </div>
  <div className='flex flex-col'>
    <div>
    <p className='text-lg font-bold float-left'>Matthew E. McNatt</p>
    </div>
    <div className='text-left text-slate-600'>Professor @George Brown College</div>
    <div className='text-left mt-5 mb-5 text-slate-400'>Ut enim ad minim , quis nost exercitiation ultramco laboris nisi ut allquip ex commando</div>
    <div className='flex justify-between'>
    <div><p className='text-orange-600 font-bold  float-left'>Engineering Physics</p></div>
    <div className='flex'>
      <img className='h-6 w-6' src="https://th.bing.com/th/id/OIP.izOOxDyHFwihHcQcKIExmQAAAA?rs=1&pid=ImgDetMain" alt="" />
      <img className='h-6 w-6 ml-5' src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG6.png" alt="" />
    </div>
    </div>
  </div>
  </div>
  <div className='flex flex-col border-2 p-1 rounded-lg mt-5 md:mt-0'>
  <div className='p-1'>
    <img className='h-40 w-96 rounded-md' src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2luZm9ybWF0aW9uLXRlY2hub2xvZ3ktMjUuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTB9fX0=" alt="" />
    </div>
  <div className='flex flex-col'>
    <div>
    <p className='text-lg font-bold float-left'>Tracy D. Wright</p>
    </div>
    <div className='text-left text-slate-600'>Professor @George Brown College</div>
    <div className='text-left mt-5 mb-5 text-slate-400'>Ut enim ad minim , quis nost exercitiation ultramco laboris nisi ut allquip ex commando</div>
    <div className='flex justify-between'>
    <div><p className='text-orange-600 font-bold  float-left'>Engineering Physics</p></div>
    <div className='flex'>
      <img className='h-6 w-6' src="https://th.bing.com/th/id/OIP.izOOxDyHFwihHcQcKIExmQAAAA?rs=1&pid=ImgDetMain" alt="" />
      <img className='h-6 w-6 ml-5' src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG6.png" alt="" />
    </div>
    </div>
  </div>
  </div>
  <div className='flex flex-col border-2 p-1 rounded-lg mt-5 md:mt-0'>
  <div className='p-1'>
    <img className='h-40 w-96 rounded-md' src="https://pccca.org/wp-content/uploads/2015/09/Professional-image-blog-article-092315.png" alt="" />
    </div>
  <div className='flex flex-col'>
    <div>
    <p className='text-lg font-bold float-left'>Cynthia A. Nelson</p>
    </div>
    <div className='text-left text-slate-600'>Professor @George Brown College</div>
    <div className='text-left mt-5 mb-5 text-slate-400'>Ut enim ad minim , quis nost exercitiation ultramco laboris nisi ut allquip ex commando</div>
    <div className='flex justify-between'>
    <div><p className='text-orange-600 font-bold  float-left'>Engineering Physics</p></div>
    <div className='flex'>
      <img className='h-6 w-6' src="https://th.bing.com/th/id/OIP.izOOxDyHFwihHcQcKIExmQAAAA?rs=1&pid=ImgDetMain" alt="" />
      <img className='h-6 w-6 ml-5' src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG6.png" alt="" />
    </div>
    </div>
  </div>
  </div>
</div>
{/* 3th card section ends here */}

{/* subscriber part starts here */}
<div className='bg-purple-950 text-white mt-5 w-auto py-5 place-content-center rounded-lg md:ml-16 md:mr-16 md:m-20'>
  <div className='text-3xl  font-bold '>
    <p className=''>Subscribe to our newsletter</p>
  </div>
  <div className='mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, neque.</div>
  <div className='flex bg-white sm:w-44 md:w-80 rounded-3xl py-1 px-1  ml-auto mr-auto mt-5'>
<input type="search" className='w-full rounded-3xl py-1' />
<button className='font-bold bg-orange-600 px-5 py-1 md:px-8 rounded-3xl'>send</button>
  </div>
  <div className='flex justify-between px-5 md:px-20'>
    <div >
      <img className='h-14' src="https://www.downloadclipart.net/medium/curved-arrow-png-transparent.png
      
      " alt="" />
    </div>
    <div>
      <img className='h-14' src={ball} alt="" />
    </div>
  </div>
</div>
{/* subscriber part ends here */}
{/* footer part */}
<div className='bg-slate-200 mt-5'>
<footer className='md:flex md:justify-evenly  px-5 py-5 md:px-10 md:py-10 '>
  <div className='flex flex-col flex-wrap w-48'>
    <div>
      <img className='h-8' src={logo} alt="" />
    </div>
    <div >
     <p className='text-justify mt-5'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, quaerat ut aperiam facilis eum illum ad commodi maxime dignissimos quia.</p>
    </div>
  </div>
  <div className='mt-5 md:mt-0'>
    <div >
      <p className='text-2xl font-bold text-left'>Company</p>
    </div>
    <div>
      <ul >
        <li className='text-left mt-3'>About us </li>
        <li className='text-left mt-3'>How to work ?</li>
        <li className='text-left mt-3'>Popular Course</li>
        <li className='text-left mt-3'>Services</li>
      </ul>
    </div>
  </div>

  <div className='mt-5 md:mt-0'>
    <div >
      <p className='text-2xl font-bold text-left'>Courses</p>
    </div>
    <div>
      <ul >
        <li className='text-left mt-3'>CAtegories </li>
        <li className='text-left mt-3'>Offline Course</li>
        <li className='text-left mt-3'>Video Course</li>
        
      </ul>
    </div>
  </div>

  <div className='mt-5 md:mt-0'>
    <div >
      <p className='text-2xl font-bold text-left'>Support</p>
    </div>
    <div>
      <ul >
        <li className='text-left mt-3'>FAQ </li>
        <li className='text-left mt-3'>Help Center</li>
        <li className='text-left mt-3'>PCareer</li>
        <li className='text-left mt-3'>Privacy</li>
      </ul>
    </div>
  </div>

  <div className='mt-5 md:mt-0'>
    <div >
      <p className='text-2xl font-bold text-left'>Contact Info</p>
    </div>
    <div>
      <ul >
        <li className='text-left mt-3'>+0913-705-3875</li>
        <li className='text-left mt-3'>elizabeth@jourrapide.com</li>
        <li className='text-left mt-3'>4808 Skinner Hollow Road</li>
        <li className='text-left '>Days Creek, OR 97429</li>
      </ul>
    </div>
  </div>
</footer>
</div>
{/* footer part ends here */}
    </>
  )
}

export default App
