import React, { useState } from 'react'
import dixit from '../public/Dixit.pdf'
import D3 from '../public/D3.jpeg'
import boilar from '../public/boilar.jpeg'

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)


      const experiences = [
  {
    year: "2018 - 2021 ",
    company: "Damas  Laminates PVT LTD.",
    role: "Fire Man",
    location : 'Majra Ghadkan Road S.K',
    description:
      "Operating high-pressure boilers, monitoring steam pressure, maintaining water levels, performing routine inspections, and ensuring safe plant operations while following all safety protocols.",
  },
  {
    year: "2021 - 2024",
    company: "Valient Orgaonics PVT LTD",
    role: "2nd Class Boiler Operator",
    location:'Vatva GIDC Ahmedabad',
    description:
      "Assisted in preventive maintenance, boiler startup and shutdown procedures, troubleshooting equipment issues, and maintaining operational records.",
  },
  {
    year: "2024 - 2025",
    company: "Rama Policon PVT LTD.",
    role: "2nd Class Boilar Operator",
    location :'Naroda GIDC Ahmedabad',
    description:
      "Completed industrial training on boiler systems, steam generation, water treatment, safety standards, and emergency handling procedures.",
  },
  {
    year: "2025 - 2026 PRESENT",
    company: "Farki Foods Chinu Bhai Bapalal",
    role: "1st Class Boilar Operator",
    location :'Naroda GIDC Ahmedabad',
    description:
      "I am a First Class Boiler Operator with expertise in operating, monitoring, and maintaining industrial boiler systems.",
  }
];

    const skills = [
  { name: "Boiler Operation", level: 95 },
  { name: "Steam Generation", level: 90 },
  { name: "Safety Compliance", level: 100 },
  { name: "Preventive Maintenance", level: 88 },
  { name: "Water Treatment", level: 95 },
  { name: "Troubleshooting", level: 90 },
];

const SkillCard = ({ title }) => (
  <div className="bg-gray-800 p-5 rounded-xl border border-gray-700 hover:border-orange-500 hover:-translate-y-1 duration-300">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
  </div>
);
  return (
     <div>

      {/* navbar open */}
       <nav className="fixed md:flex top-0 left-0 w-full bg-slate-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          {/* <a href="#home">
            <img src="D3.jpeg" className='w-10 h-10 mr-3 object-cover rounded-full' alt="" />
          </a> */}

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-orange-500 duration-300">
              Home
            </a>

            <a href="#about" className="text-white hover:text-orange-500 duration-300">
              About
            </a>

            <a href="#skills" className="text-white hover:text-orange-500 duration-300">
              Skills
            </a>

            <a href="#work" className="text-white hover:text-orange-500 duration-300">
              MyWork
            </a>

            <a href="#ex" className="text-white hover:text-orange-500 duration-300">
              Experience
            </a>

            <a href="#contact" className="text-white hover:text-orange-500 duration-300">
              Contact
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
          <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-800 rounded-lg mb-4">
            <a
              href="#home"
              className="block text-xl px-6 py-3 text-white hover:bg-orange-500"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="#about"
              className="block text-xl px-6 py-3 text-white hover:bg-orange-500"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            <a
              href="#skills"
              className="block text-xl px-6 py-3 text-white hover:bg-orange-500"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>

            <a
              href="#work"
              className="block text-xl px-6 py-3 text-white hover:bg-orange-500"
              onClick={() => setMenuOpen(false)}
            >
              MyWork
            </a>

            <a
              href="#ex"
              className="block text-xl px-6 py-3 text-white hover:bg-orange-500"
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </a>

            <a
              href="#contact"
              className="block text-xl px-6 py-3 text-white hover:bg-orange-500"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
      {/* navbar close */}

        <div  className="min-h-screen mt-20 flex items-center justify-center  ">
  <div className="text-center ">
    
    

    {/* <p className="text-3xl ml-1  bg-gray-900 p-5 rounded mt-5  text-orange-400 uppercase tracking-widest">
        Welcome to My Portfolio <i class="fa-solid fa-user"></i>
    </p> */}

    <div id='home'>

    <img src='D3.jpeg' style={{width:'400px', objectPosition:'center',height:'400px',objectFit:'cover'}} className='rounded-full   mx-auto mt-5 mb-5' alt="" />
    </div>
    <h1 className="text-6xl name text-orange-500  font-semibold  md:text-6xl  ">
      DIXIT PARMAR
    </h1>

    <h2 className="boilar text-4xl md:text-4xl  font-semibold  mt-4">
      Boiler Operator
    </h2>

    <p className="max-w-2xl mx-auto mt-6 mb-10  text-lg">
      Dedicated Boiler Operator with expertise in boiler operation, preventive
      maintenance, safety compliance, steam generation, and efficient plant
      operations. Committed to ensuring reliable performance while maintaining
      the highest safety standards.
    </p>

    <a href='/Dixit.pdf' download={dixit} className=" px-8 mb-5 cursor-pointer py-3 text-white bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold">
      Download Resume <i className="fa-solid fa-file-arrow-down"></i>
    </a>
  </div>
</div>

 <section  className="bg-gray-200 mt-10  text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <img
            src="boilar.jpeg"
            alt="Profile"
            className="rounded-2xl shadow-2xl w-full h-[700px] object-cover"
          />
        </div>

        {/* Right */}
        <div id='about' className='text-black'>
          <h4 className="text-orange-600 text-3xl font-extrabold uppercase tracking-widest mb-2">
            About Me
          </h4>

          <h2 className="text-5xl font-semibold  mb-6">
            Boiler Operator with Industrial Experience
          </h2>

          <p className=" leading-8 mb-6">
            My name is <span className="text-orange-500 text-2xl font-semibold">Dixit Parmar</span>.
            I am a dedicated Boiler Operator with hands-on experience in operating,
            monitoring, and maintaining industrial boiler systems. I ensure safe,
            efficient, and uninterrupted plant operations while strictly following
            safety standards and operational procedures.
          </p>

          <p className=" leading-8 mb-8">
            I have knowledge of steam generation, water treatment, pressure
            monitoring, preventive maintenance, equipment inspection, and emergency
            troubleshooting. My goal is to maintain maximum efficiency with minimum
            downtime.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-900 p-5 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-orange-500">7+</h3>
              <p className="text-gray-400 mt-2">Years Experience</p>
            </div>

            <div className="bg-gray-900 p-5 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-orange-500">100%</h3>
              <p className="text-gray-400 mt-2">Safety Focused</p>
            </div>

            <div className="bg-gray-900 p-5 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-orange-500">24/7</h3>
              <p className="text-gray-400 mt-2">Plant Monitoring</p>
            </div>

            <div className="bg-gray-900 p-5 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-orange-500">50+</h3>
              <p className="text-gray-400 mt-2">Maintenance Tasks</p>
            </div>
          </div>
        </div>

      </div>
    </section>

     {/* exivision section open */}
      <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-14">
          <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Inspection Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">
            Industrial Boiler Inspection
          </h2>

          <p className="text-gray-600 mt-5 max-w-4xl mx-auto leading-8">
            Participated in an Industrial Boiler Inspection where we explored
            modern boiler technologies, steam generation systems, water
            treatment plants, industrial automation, and preventive maintenance
            techniques. The exhibition provided valuable hands-on experience and
            the opportunity to interact with industry professionals while
            learning about the latest innovations in boiler operations and
            industrial safety.
          </p>
        </div>

        {/* Images */}

        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">


          <div style={{height:'600px'}} className="group overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/boilartank.jpg"
              alt=""
              style={{width:'100%',height:'100%',objectFit:'cover'}}
              className="w-full  h-72  object-cover duration-500 group-hover:scale-110"
              />
          </div>

          <div  style={{height:'600px'}}  className="group  overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/edit.jpeg"
              alt=""
              style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}}
               
              className="w-full h-72 object-cover duration-500 group-hover:scale-110"
            />
          </div>

        </div>


        {/* Team */}

       
        <div className="mt-16 bg-slate-50 rounded-2xl p-8 shadow">

          <h3 className="text-3xl font-bold text-center text-slate-900">
            Inspection Experience  Team
          </h3>

          <p className="text-center text-gray-600 mt-3 max-w-3xl mx-auto">
            During the Industrial Boiler Inspection, our team actively explored
            advanced boiler systems, steam generation processes, industrial
            safety practices, and maintenance technologies. Working together
            allowed us to gain valuable practical exposure and strengthen our
            technical understanding of modern industrial boiler operations.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <h1  className=" text-xl px-6 py-3 rounded-full font-semibold">
              <i className=" fa-solid fa-user"></i> Dixit  Bhai <br /> <b className='text-xl'><span className='text-orange-600 text-2xl'>1st</span> Class Boilar Operator</b>
            </h1>

            <h1 className="text-xl px-6 py-3 rounded-full font-semibold">
                <i className=" fa-solid fa-user"></i>Amit Bhai <br /> <b className='text-xl'><span className='text-orange-600 text-2xl'>1st</span> Class Boilar Operator</b>
            </h1>

            <h1
             className="text-xl px-6 py-3 rounded-full font-semibold">
              <i className=" fa-solid fa-user"></i> Mehul  Bhai <br /> <b className='text-xl'><span className='text-orange-600 text-2xl'>1st</span> Class Boilar Operator</b>
            </h1>

            <h1 className="text-xl px-6 py-3 rounded-full font-semibold">
             <i className=" fa-solid fa-user"></i> Rahul  Bhai <br /> <b className='text-xl'><span className='text-orange-600 text-2xl'>2nd</span> Class Boilar Operator</b>
            </h1>

            {/* Add remaining names here */}

          </div>

        </div>

      </div>
    </section>
    {/* exivision section  close */}

     {/* Highlights */}

        <div className="grid lg:grid-cols-4 p-5 sm:grid-cols-2 grid-cols-1 gap-6 mt-14">

          <div className="bg-slate-900  rounded-xl p-7 text-center">
            <h3 className="text-4xl font-bold text-orange-500">2026</h3>
            <p className="text-gray-300 mt-2">
              Inspection Participation
            </p>
          </div>

          <div className="bg-slate-900 rounded-xl p-7 text-center">
            <h3 className="text-4xl font-bold text-orange-500">Live</h3>
            <p className="text-gray-300 mt-2">
              Boiler Demonstration
            </p>
          </div>

          <div className="bg-slate-900 rounded-xl p-7 text-center">
            <h3 className="text-4xl font-bold text-orange-500">100+</h3>
            <p className="text-gray-300 mt-2">
              Industrial Visitors
            </p>
          </div>

          <div className="bg-slate-900 rounded-xl p-7 text-center">
            <h3 className="text-4xl font-bold text-orange-500">3+</h3>
            <p className="text-gray-300 mt-2">
              Boiler Systems Explored
            </p>
          </div>

        </div>

    <section className="bg-gray-300 py-20 px-6 text-black">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div id='skills' className="text-center mb-16">
          <h4 className="text-orange-500 text-3xl uppercase tracking-widest">
            My Skills
          </h4>

          <h2 className="text-5xl font-bold mt-3">
            Professional Skills
          </h2>

          <p className=" max-w-2xl mx-auto mt-5">
            Skilled in operating industrial boilers, monitoring steam systems,
            preventive maintenance, safety procedures, and troubleshooting to
            ensure reliable and efficient plant operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Progress Bars */}
          <div>
            {skills.map((skill, index) => (
              <div key={index} className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-2xl">{skill.name}</span>
                  <span className="text-orange-400">{skill.level}%</span>
                </div>

                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-orange-500 h-3 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Skill Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <SkillCard title="Industrial Boiler Operation" />
            <SkillCard title="Steam Pressure Monitoring" />
            <SkillCard title="Boiler Maintenance" />
            <SkillCard title="Equipment Inspection" />
            <SkillCard title="Safety Standards" />
            <SkillCard title="Emergency Handling" />
            <SkillCard title="Plant Operations" />
            <SkillCard title="Team Coordination" />
          </div>

 
        </div>

      </div>
          {/* total work */}
          <div id='work'  className="bg-gray-900 mt-5  text-white p-4  rounded-xl shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1 duration-300">
            <h1 className='text-amber-600 txt text-5xl text-center mt-10 mb-10'>Total Work In Boilar With  Boilar parsing Work</h1>

            <h3 className="text-amber-500 text-2xl font-bold mb-3">
  1. Boiler Start-up
</h3>
<ul className="list-disc pl-6 mb-6 space-y-2">
  <li>Water level check karna</li>
  <li>Fuel supply check karna (Gas, Diesel, Coal, Biomass)</li>
  <li>Air blower start karna</li>
  <li>Feed water pump start karna</li>
  <li>Boiler pressure build-up karna</li>
  <li>Steam line warm-up karna</li>
</ul>

<h3 className="text-amber-500 text-2xl font-bold mb-3">
  2. Boiler Shutdown
</h3>
<ul className="list-disc pl-6 mb-6 space-y-2">
  <li>Steam load kam karna</li>
  <li>Burner band karna</li>
  <li>Boiler pressure safely release karna</li>
  <li>Feed water band karna</li>
  <li>Complete shutdown procedure follow karna</li>
</ul>

<h3 className="text-amber-500 text-2xl font-bold mb-3">
  3. Water Level Monitoring
</h3>
<ul className="list-disc pl-6 mb-6 space-y-2">
  <li>Gauge glass check karna</li>
  <li>Low water level alarm check karna</li>
  <li>High water level control check karna</li>
</ul>

<h3 className="text-amber-500 text-2xl font-bold mb-3">
  4. Steam Pressure Monitoring
</h3>
<ul className="list-disc pl-6 mb-6 space-y-2">
  <li>Boiler pressure maintain karna</li>
  <li>Pressure gauge monitor karna</li>
  <li>Safety valve operation check karna</li>
</ul>

<h3 className="text-amber-500 text-2xl font-bold mb-3">
  5. Feed Water System
</h3>
<ul className="list-disc pl-6 mb-6 space-y-2">
  <li>Feed water tank check karna</li>
  <li>Feed pump operation</li>
  <li>Deaerator level check</li>
  <li>Water hardness monitor karna</li>
</ul>

<h3 className="text-amber-500 text-2xl font-bold mb-3">
  6. Fuel System
</h3>
<ul className="list-disc pl-6 mb-6 space-y-2">
  <li>Fuel tank level check</li>
  <li>Gas pressure check</li>
  <li>Diesel supply</li>
  <li>Coal feeding</li>
  <li>Biomass feeding</li>
</ul>

<h3 className="text-amber-500 text-2xl font-bold mb-3">
  7. Burner Operation
</h3>
<ul className="list-disc pl-6 mb-6 space-y-2">
  <li>Burner ignition</li>
  <li>Flame monitoring</li>
  <li>Burner cleaning</li>
  <li>Nozzle cleaning</li>
  <li>Air-Fuel ratio adjustment</li>
</ul>

<h3 className="text-amber-500 text-2xl font-bold mb-3">
  8. Boiler Blowdown
</h3>
<ul className="list-disc pl-6 mb-6 space-y-2">
  <li>Bottom blowdown</li>
  <li>Surface blowdown</li>
  <li>TDS control</li>
  <li>Boiler water quality maintain karna</li>
</ul>

<h3 className="text-amber-500 text-2xl font-bold mb-3">
  9. Water Treatment
</h3>
<ul className="list-disc pl-6 mb-6 space-y-2">
  <li>Softener operation</li>
  <li>RO Plant monitoring</li>
  <li>Chemical dosing</li>
  <li>pH checking</li>
  <li>Hardness testing</li>
  <li>Conductivity testing</li>
</ul>

<h3 className="text-amber-500 text-2xl font-bold mb-3">
  10. Steam Distribution
</h3>
<ul className="list-disc pl-6 mb-6 space-y-2">
  <li>Steam valves operation</li>
  <li>Steam trap checking</li>
  <li>Steam leakage inspection</li>
  <li>Pressure Reducing Valve (PRV) monitoring</li>
</ul>
                
       </div>
    </section>

   

<section className="bg-gray-300 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div id='ex' className="text-center mb-16">
          <p className="text-orange-500 text-3xl uppercase tracking-widest font-semibold">
            Experience
          </p>

          <h2 className="text-5xl text-orange-400 font-bold mt-3">
            My Professional Journey
          </h2>

          <p className="text-black mt-5 max-w-2xl mx-auto">
            My experience includes industrial boiler operation, preventive
            maintenance, safety compliance, troubleshooting, and ensuring
            efficient plant performance.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-orange-500 ml-4">

          {experiences.map((item, index) => (
            <div key={index} className="mb-12 ml-8 relative">

              {/* Circle */}
              <span className="absolute -left-11 top-2 w-5 h-5 bg-orange-500 rounded-full border-4 border-gray-950"></span>

              <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1 duration-300">

                <span className="text-orange-400 text-xl font-semibold">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {item.role}
                </h3>

                <h4 className="text-2xl  text-amber-600 mb-4">
                <span className='text-amber-200'> Company  :</span> {item.company}
                </h4>
                <h4 className="text-lg text-gray-300 mb-4">
                 <span className='text-amber-200'>Company Location :</span>  {item.location}
                </h4>

                <p className="text-gray-400 leading-7">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>

{/* education */}
<section className="bg-gray-300 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-3xl uppercase tracking-widest font-semibold">
            EDUCATION
          </p>

          <h2 className="text-5xl text-orange-400 font-bold mt-3">
            My Education
          </h2>

    <div className="bg-gray-800 mt-5 p-6 rounded-xl  shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1 duration-300">
          <table className='w-full '>

          <thead>
            <tr className=''>
                <th className=' text-amber-600 border '>DEGREE / COURSE</th>
                <th className=' text-amber-600 border '>University & Board</th>
                <th className=' text-amber-600 border '>Percentage / CGPA</th>
                <th className=' text-amber-600 border'>Year of Passinig</th>
            </tr>
          </thead>
          <tbody>
            <tr className=''>
                <td className='   border '>12 <sup>th</sup></td>
                <td className='   border  '>Shree <br /> Swastik  <br />Highschool</td>
                <td className='   border  '>55.28%</td>
                <td className='   border  '>March - 2017</td>
            </tr>
          </tbody>

          </table>
                
       </div>

       
        </div>
      </div>
    </section>
    
      
<section className="bg-gray-300  py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div id='contact' className="text-center mb-16">
          <p className="text-orange-500 text-3xl uppercase tracking-widest font-semibold">
            Contact
          </p>

          <h2 className="text-5xl text-orange-500 font-bold mt-3">
            Get In Touch
          </h2>

          <p className=" mt-5 max-w-2xl mx-auto">
            Feel free to contact me for job opportunities, industrial projects,
            or any professional discussion. I will get back to you as soon as
            possible.
          </p>
        </div>

        <div  className="grid lg:grid-cols-1   gap-2">

          {/* Left Side */}
          <div  className='text-white  ' >

            <div className="bg-gray-800  rounded-xl p-6 mb-6 flex items-center gap-5">
             <i className="fa-solid fa-phone"></i>

              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-400 text-2xl">+91 9558578408</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 mb-6 flex items-center gap-5">
             <i className="fa-solid fa-envelope"></i>

              <div>
                <h3 className="text-xl font-semibold">EMAIL</h3>
                <p className="text-gray-400 text-2xl">dp594342@gmail.com</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 flex items-center gap-5">
             <i className="fa-solid fa-location-arrow"></i>

              <div>
                <h3 className="text-xl  font-semibold">ADDRESS</h3> <br />
                <p className="text-gray-400">
                    <b className='text-xl'>Halisa</b><br />
                    <b className='text-xl'>TA   :   Dehgham</b><br />
                    <b className='text-xl'>Dist :   Gandhinagar </b><br />
                    <b className='text-xl'>PIN : 382321</b>
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="bg-gray-800 p-4 rounded-full hover:bg-orange-500 duration-300"
              >
               
              </a>

              <a
                href="#"
                className="bg-gray-800 p-4 rounded-full hover:bg-orange-500 duration-300"
              >
                              </a>
            </div>

          </div>

          {/* Right Side */}
          {/* <form className="bg-gray-800 rounded-xl p-8">

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="Your Name"
                className="bg-gray-900 p-4 rounded-lg outline-none border border-gray-700 focus:border-orange-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-900 p-4 rounded-lg outline-none border border-gray-700 focus:border-orange-500"
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-gray-900 p-4 rounded-lg outline-none border border-gray-700 focus:border-orange-500 mt-5"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-gray-900 p-4 rounded-lg outline-none border border-gray-700 focus:border-orange-500 mt-5"
            ></textarea>

            <button
              className="mt-6 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold duration-300"
            >
              Send Message
            </button>

          </form> */}

        </div>

      </div>
    </section>

    </div>
  )
}

export default App
