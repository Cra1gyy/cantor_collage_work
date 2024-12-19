import Link from 'next/link';
import './Navbar.css';

export default function RootLayout() {
    return (
        <nav>
            <menu className='navBar'>
                <li>
                    <Link href='/' className='navLink'> 
                        Home
                    </Link>
                </li>
                <li>
                    <Link href='/Computing' className='navLink'>
                        Computing Courses
                    </Link>
                </li>
                <li>
                    <Link href='/Design' className='navLink'>
                        Design Courses
                    </Link>
                </li>
                <li>
                    <Link href='/Learning' className='navLink'>
                        Learning Resources
                    </Link>
                </li>
                <li>
                    <Link href='/Staff_info' className='navLink'>
                        Information for staff
                    </Link>
                </li>
                <li>
                    <Link href='/Student_info' className='navLink'>
                        Information for students
                    </Link>
                </li>
                <li>
                    <Link href='/Business' className='navLink'>
                        Working in business
                    </Link>
                </li>
                <li>
                    <Link href='/Howtofind' className='navLink'>
                        How to find us
                    </Link>
                </li>
            </menu>
      </nav>
    );
  }