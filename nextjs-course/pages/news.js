//domain.com/news
import Link from 'next/link';
import { Fragment } from "react"

function NewsPage() {   
    return (
        <Fragment>
            <h1>The News Page</h1>
            <h2>Article</h2>
            <ul>
          <li>
            <Link href='/'>
                Go to Home
            </Link>
            </li>
        </ul>
        </Fragment>
    )
    
    
}

export default NewsPage;