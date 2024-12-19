import './Footer.css'

export default function RootLayout() {
    return (
        <footer>
          <div className='footContent'>
            <p>&copy; {new Date().getFullYear()}</p>  
          </div>
        </footer>
    );
}