import './student.css'
import Image from 'next/image';

const Stundent_info = () =>{
    return (
        <main className="student_main">

            <div className="student_content">

                <div className="student_title">
                    <h2>Information for students</h2>
                </div>

                <div className="student_intro">
                    <div className='student_intro_content'>
                        <h3>Explore Cantor College: World-Class Facilities for Your Success</h3>
                        <p>At Cantor College, we are committed to providing our students with the best possible environment to learn, create, and innovate. Our state-of-the-art facilities are designed to support your academic journey and help you thrive in your chosen field. Whether you’re studying computing, design, or technology, our campus offers everything you need to excel.</p>
                    </div>
                </div>

                <div className='student_facilaties'>
                    <div className='student_facilaties_content'>
                        <div className='student_labs'>
                            <h3>Our Facilities</h3>

                            <div className='facilite_1'>
                                <p><strong>1. Advanced Computing Labs</strong> Our computing labs are equipped with the latest hardware and software, providing you with the tools you need to develop your skills in programming, cybersecurity, data science, and more. The labs are accessible 24/7, ensuring you can work on your projects at any time that suits you.</p>
                                <div className='facilities_1_img'>
                                    <Image src="/Images/playstation.jpg" width={533} height={350} alt='' className='playstation_img'></Image>
                                </div>
                            </div>
                        </div>

                        <div className='student_design'>
                            <div className='facilite_2'>
                                <p><strong>2. Design Studios</strong> Our design studios offer a creative space for students in graphic design, digital media, and product design. Each studio is equipped with high-end graphic tablets, professional-grade software, and large-format printers, allowing you to bring your ideas to life. The studios also feature collaborative spaces where you can work with peers and faculty on group projects.</p>
                                <div className='facilite_2_img'>
                                  <Image src="/Images/people_working1.jpeg" width={533} height={350} alt='' className='people2_img'></Image>
                                </div>
                            </div>
                        </div>

                        <div className='student_innovation'>
                            <div className='facilite_3'>
                                <p><strong>3. Innovation and Makerspace</strong> Cantor College’s Innovation and Makerspace is a hub for creativity and invention. This facility is equipped with 3D printers, laser cutters, CNC machines, and other advanced prototyping tools. Whether you're working on a design project or developing a new tech product, this space provides the resources to turn your concepts into reality.</p>
                            </div>
                        </div>

                        <div className='student_tech'>
                            <div className='facilite_4'>
                                <p><strong>4. Technology Sandbox</strong> The Technology Sandbox is an experimental space where students can explore the latest in VR, AR, and AI technologies. With access to cutting-edge devices and software, you’ll be able to experiment with emerging technologies and push the boundaries of what’s possible in your field.</p>
                            </div>
                        </div>

                        <div className='student_colab'>
                            <div className='facilite_5'>
                                <p><strong>5. Collaborative Learning Spaces</strong> Our campus features numerous collaborative learning spaces designed to foster teamwork and creative problem-solving. These spaces are equipped with smartboards, video conferencing tools, and flexible seating arrangements, making them ideal for group work, study sessions, or brainstorming meetings.</p>
                                <div className='facilite_5_img'>
                                  <Image src="/Images/people_working2.jpeg" width={533} height={350} alt='' className='people2_img'></Image>
                                </div>
                            </div>
                        </div>

                        <div className='student_libary'>
                            <div className='facilite_6'>
                                <p><strong>6. Library and Resource Centre</strong> The Cantor College Library is a comprehensive resource Centre offering an extensive collection of books, journals, and digital resources related to computing, design, and technology. The library also provides quiet study areas, computer stations, and access to online databases, ensuring you have the information you need at your fingertips.</p>
                            </div>
                        </div>

                        <div className='student_hub'>
                            <div className='facilite_7'>
                                <p><strong>7. Student Hub</strong> The Student Hub is the social heart of our campus, providing a place for relaxation and connection. Here, you’ll find a café, lounge areas, and recreational facilities, making it the perfect spot to unwind between classes, meet with friends, or join student-led activities and clubs.</p>
                            </div>
                        </div>

                        <div className='student_career'>
                            <div className='facilite_8'>
                                <p><strong>8. Career and Development Centre</strong> Our Career and Development Centre is dedicated to helping you plan your future. Offering career counseling, resume workshops, and job placement services, this Centre provides the support you need to transition from student to professional. The Centre also hosts regular employer networking events and industry talks to help you build connections in your field.</p>
                            </div>
                        </div>

                        <div className='student_fitness'>
                            <div className='facilite_9'>
                                <p><strong>9. Fitness and Wellness Centre</strong> We believe in nurturing both the mind and body. Our Fitness and Wellness Centre offers a fully equipped gym, exercise studios, and a range of fitness classes to help you stay healthy and active. The Centre also includes wellness services such as yoga, meditation, and counseling to support your overall well-being.</p>
                            </div>
                        </div>

                        <div className='student_housing'>
                            <div className='facilite_10'>
                                <p><strong>10. On-Campus Housing</strong> For those who choose to live on campus, Cantor College offers modern, comfortable housing options. Our residence halls provide a supportive community environment, with amenities like high-speed internet, study lounges, and common areas where you can relax and socialize.</p>
                            </div>
                        </div>

                        <div className='student_experiance'>
                            <div className='facilite_11'>
                                <p><strong>Experience Cantor College</strong> Cantor College’s facilities are designed to enhance your learning experience and support your academic and personal growth. We invite you to explore our campus, discover our resources, and make the most of everything we have to offer.</p>
                                <div className='facilite_11_img'>
                                  <Image src="/Images/campus_layout.jpg" width={533} height={350} alt='' className='map_img'></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </main>
    );
}

export const metadata = {
    title: "Students Information",
    description: "Generated by create next app",
  };

export default Stundent_info;