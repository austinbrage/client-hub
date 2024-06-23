// eslint-disable-next-line import/no-unresolved
import brageLogo from '/brage.svg';
import { Link } from 'react-router-dom';
import './home.css';

export function Home() {
    
    return (
        <div className='home-brage'>
            <div className='header'>
                <a href="https://brage-docs.pages.dev" target="_blank">
                    <img 
                        src={brageLogo} 
                        alt="Brage logo" 
                        className="logo" 
                    />
                </a>
                <h1 className='title'>Brage Application</h1>
            </div>

            <div className='body'>
                <h2 className='subtitle'>made with express, mysql and react</h2>
                <Link to='/swagger' className="navigator">
                    Go to SWAGGER
                </Link>
            </div>


        </div>
    )
}