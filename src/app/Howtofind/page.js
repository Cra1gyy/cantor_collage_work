import './Howtofind.css'

const Howtofind = () =>{
    return (
        <main className='contact_info_main'>
            <h2>How to find us:</h2>

            <div className='flex_content'>
                <div className='grid_content'>

                    <div className='location'>
                        <h4>Address</h4>
                        <p>Cantor College</p>
                        <p>Main Street</p>
                        <p>Sheffield</p>
                        <p>SC4 2BB</p>
                    </div>

                    <div className='contact_info'>
                        <h4>Contact Information</h4>
                        <p>Tel:(01321) 2340 235</p>
                        <p>Fax: (01321) 2340 236</p>
                        <p>Email: info@cantorcollege.ac.uk</p>
                    </div>
                </div>
            </div>
        </main> 
    );
}

export const metadata = {
    title: "How to find us",
    description: "Address and contact information",
  };

export default Howtofind;