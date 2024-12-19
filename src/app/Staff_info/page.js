import './staff.css'

const Staff_info = () =>{
    return (
        <main className="staff_main">

            <div className="staff_content">

                <div className="staff_title">
                    <h2>Information for staff</h2>
                </div>

                <div className="staff_news">
                    <h3>News</h3>
                    <p>Cantor College recently hosted the Software Engineering student of the year awards.  Short
                    listed candidates from around the country attended the one day event. </p>
                </div>

                <div className="staff_academic">
                    <h3>Academic Registry</h3>
                    <p>For academic regulations, assessment, awards, student records and course validation.</p>
                </div>

                <div className="staff_catering">
                    <h3>Catering Services</h3>
                    <p>Contact the Catering Services regarding on and off-site catering.</p>
                </div>

                <div className="staff_finacial">
                    <h3>Finacial Services</h3>
                    <p>The financial team based on the 2nd Floor are responsible for all areas of student finance as 
                    well as College budgeting.</p>
                </div>

                <div className="staff_infoService">
                    <h3>Information Systems Services</h3>
                    <p>The ISS team delivers the College’s computing facilities including all hardware and software.  
                    They also run the staff helpdesk.</p>
                </div>

                <div className="staff_marketing">
                    <h3>Marketing Services</h3>
                    <p>The Marketing Team will help promote events and new courses.  They will help with press 
                    release preparation. </p>
                </div>

                <div className="staff_personal">
                    <h3>Personal Services</h3>
                    <p>All staff pay and conditions enquiries should be directed to the Personnel Services team on 
                    the 3rd floor. </p>
                </div>

                <div className="staff_facilities">
                    <h3>Facilities</h3>
                    <p>The facilities are responsible for the general care and maintenance of the College.  All 
                    enquiries via the main helpdesk. </p>
                </div>
            </div>
        </main>
    );
}

export const metadata = {
    title: "Staff Information",
    description: "Page with staff information",
  };

export default Staff_info;