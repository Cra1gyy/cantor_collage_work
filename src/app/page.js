import Link from 'next/link';
import './Home.css';
import Image from 'next/image';

export default function Home() {

  // let imgArray = [
  //   "/Images/rotate_Img1.jpg",
  //   "/Images/rotate_Img2.jpg",
  //   "/Images/rotate_Img3.jpg",
  //   "/Images/rotate_Img4.jpg"
  // ];

  // let currentIndex = 0;
  
  // function chgImage() {
  
  //   currentIndex++;
    
  //   if (currentIndex >= imgArray.length) {
  //     currentIndex = 0;
  //   }
    
  //   document.getElementById('rotate_img').setAttribute('src', imgArray[currentIndex]);
  // }
  
  // setInterval(chgImage, 2000);


  return (
    <div className='home_content'>
      <main>
        <h2>Welcome to Cantor College</h2>

        <div className='about_us'>
          <h3>About us</h3>
          <p>Cantor College was established in 1989 to specialize in Computing and Design.   At Cantor College, we want to give students the education they need to achieve their career aims, leaving them equipped with the knowledge, skills and experience to succeed. Cantor College gives you the opportunities that can give you the edge when you enter the world of work, through our teaching and our links to some of the world's leading researchers and employers. Our students have gone on to successful careers in a wide range of industries across the globe.  Whatever your ambitions, our learning and support can help to get the most out of your time with Cantor College, both as a student and in your future career.</p>
        </div>

        <div className='fcailities'>
          <h3>Facilities</h3>
          <p>The College is located in the attractive and pleasantly refurbished Building. The building houses computing laboratories, and lecture/tutorial rooms. It has its own catering facilities and student work areas. There is also a car park to the back of the building.</p>
          <p>Our building has space of 9500m², houses over 240 staff and provides teaching space for more than 1600 students.</p>

          <div className='rotate_img_container'>
            <Image src="/Images/rotate_Img1.jpg" width={533} height={350} alt="Image" id='rotate_img'/>
          </div>

          <h4>Facilities Include:</h4>
          <menu className='inluded_facilities'>
            <li>Wi-Fi technology</li>
            <li>Pool teaching rooms, including classrooms to teach from 25 - 80 students</li>
            <li>Specialist faculty facilities</li>
            <li>A double height lecture theatre at first and second floor level</li>
            <li>Dramatic three-storey glass open atrium</li>
            <li>Meeting rooms</li>
            <li>Office accommodation</li>
            <li>Specialist IT facilities</li>
            <li>Reception desk area</li>
            <li>Catering outlet</li>
            <li>Parking for disabled badge holders</li>
            <li>Cycle racks</li>
            <li>Gallery</li>
          </menu>

        </div>
      </main>
    </div>
  );
}

export const metadata = {
  title: "Cantor Home Page",
  description: "Welcome to Cantor Collage",
};
