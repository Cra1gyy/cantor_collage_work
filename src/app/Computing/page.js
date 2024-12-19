import './computing.css'
import { fetchCourse } from "@/app/lib/db";
const query = "select * from courselist.courses WHERE CourseSubject = 'Computing';"; 

const Computing = async() =>{
    const course = await fetchCourse(query);
    return (
        <main className="computing_main">
            <div className='computing_content'>

                <div className='computing_phoneView'>

                    <div className='paraInfo'>
                        <h2>Computing Courses</h2>
                        <p>The College offers a range of courses to suit applicants with varying backgrounds and educational abilities. At undergraduate level, there are single BSc Honours Degree courses in Computing, Computer Networks, Software Engineering and Cyber Security with Forensics amongst others.</p>
                        <p>The College teaches undergraduate and postgraduate courses in a wide range of specialisms, including computer science, software development, information systems, networking and software engineering. It is at the heart of a passionate computing community, including student societies devoted to games development, digital forensics and programming.</p>
                        <p>The courses are British Computer Society accredited and are highly relevant to modern industry. They are designed to prepare students for professional occupations in Computing and related fields. Many graduates continue their studies to pursue a higher degree such as an MSc. or PhD.</p>
                    </div>
                </div>

                <div className='computing_container'>
                    <h2>Course List:</h2>

                    <ul>
                        {course.map((course, index) => (
                            <div className='computing_course_content'>
                                <div key={index} className='computing_course'>
                                    <div className='computing_course_title'>
                                        <h3>{course.CourseTitle}</h3> 
                                    </div>
                                    <div className='computing_course_info'>
                                        <h5>COURSE TYPE - {course.CourseType}</h5>
                                        <h5>COURSE SUBJECT - {course.CourseSubject}</h5>
                                        <h5>COURSE SUMMARY</h5>
                                        <p>{course.CourseSummary}</p>
                                        <h5>COURSE AWARD - {course.CourseAwardName}</h5>
                                        <h5>UCAS CODE - {course.UcasCode}</h5>
                                        <h5>UCAS POINTS - {course.UcasPoints}</h5>
                                        <h5>TYPE OF ATTENDANCE - {course.ModeOfAttendance}</h5>
                                        <h5>LENGTH OF STUDY - {course.StudyLength}</h5>
                                        <h5>HAS A FOUNDATION YEAR - {course.HasFoundationYear}</h5>
                                        <h5>RECRUITING - {course.NoLongerRecruiting}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>

        </main>
    );
}

export const metadata = {
    title: "Computing Courses",
    description: "Information on the computing courses we offer",
  };

export default Computing;