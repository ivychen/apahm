import React from 'react'
import SocialLinks from './SocialLinks'
import { FaChevronCircleUp } from 'react-icons/lib/fa'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Footer extends React.Component {

  scrollToTop() {
    scroll.scrollToTop()
  }

  render() {
    return(
      <footer id='footer'>
        <div className='row'>
          <div className='twelve columns'>
            <SocialLinks />
            <p>
              <a href='mailto:cuapahm@gmail.com'>cuapahm@gmail.com</a>
            </p>
            <ul className='copyright'>
              <li>&copy; CU APAHM 2018</li>
              <li>
                Developed by{' '}
                <a href='https://github.com/ivychen'>Ivy Chen</a>
              </li>
            </ul>
          </div>

          <div id='go-top'>
            <Link onClick={this.scrollToTop} title='Back to Top'>
              <FaChevronCircleUp />
            </Link>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
