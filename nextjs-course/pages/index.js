// our-domain.com/
import Link from 'next/link';
import { Fragment } from 'react';

function HomePage() {   
    return (
      <Fragment>
        <h1>The Home Page</h1>
        <h2>Link to News Page</h2>
        <ul>
          <li>
            <Link href='/news'>
                News Page
            </Link>
            </li>
        </ul>

        <p>
          Some random text.
        </p>
      </Fragment>
    );
    
}

export default HomePage;