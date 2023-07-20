import React, { Fragment } from 'react';
import MainNavbar from '../../components/main_navbar/MainNavbar';

// component imports
import UserProfile from '../../components/user_profile/UserProfile';

// styles
import '../home/home.css';

// components
export default function Home() {
  return (
    <Fragment>
      <MainNavbar />
      <div className="main__container">
        <UserProfile />
        <div className="two">two</div>
      </div>
    </Fragment>
  )
}
