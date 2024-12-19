import './design.css'
import { fetchCourse } from "@/app/lib/db";
const query = "select * from courselist.courses WHERE CourseSubject = 'Art and design';";

const Design = async() =>{
    const course = await fetchCourse(query);
    return (
        <main className="design_main">
            <div className='design_content'>

                <div className='design_phoneView'>
                    <div className='paraInfo'>
                        <h2>Design Courses</h2>
                        <p>The College is an internationally connected creative community of diverse disciplines housed under one roof. We shape our students' futures, preparing them to shape the world through applied knowledge and creativity.</p>
                        <p>The College's art and design courses don't just train you, they promote alternative ways of thinking, making and communicating; they provide you with space, tools and inspiration to develop your creative practice and a clear career path. You'll get expert teaching from active practitioners and researchers who will encourage you to adopt innovative and resourceful approaches that both perceive and create opportunities for better lives.</p>
                        <p>You’ll develop your creative practice whilst interacting with your peers in well-equipped studios, making and digital workshops. At the same time, you'll learn professional skills by working on applied briefs facilitated through our links with commercial clients, cultural institutions, businesses and organisations.</p>
                    </div>
                </div>

                <div className='design_container'>
                    <h2>Course List:</h2>

                    <ul>
                        {course.map((course, index) => (
                            <div className='design_course_content'>
                                <div key={index} className='design_course'>
                                    <div className='design_course_title'>
                                        <h3>{course.CourseTitle}</h3> 
                                    </div>

                                    <div className='design_course_info'>
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
    title: "Design Courses",
    description: "Information on our design courses",
  };

export default Design;