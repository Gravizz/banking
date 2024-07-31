import { logoutAccount } from '@/lib/actions/user.actions';
import Image from 'next/image';
import router from 'next/router';
import React from 'react';

const Footer = ({ user, type = 'desktop' }: FooterProps) => {
  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();

    if (loggedOut) router.push('/sign-in');
  };
  return (
    <footer className="footer">
      <div className={type === 'moblie' ? 'footer_name-moblie' : 'footer_name'}>
        <p className="text-xl font-bold text-gray-700">{user?.firstName[0]}</p>
      </div>
      <div
        className={type === 'moblie' ? 'footer_email-mobile' : 'footer_email'}
      >
        <h1 className="text-14 truncate text-gray-700 font-semibold">
          {user?.firstName}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user?.email}
        </p>
      </div>
      <div className="footer_image" onClick={handleLogOut}>
        <Image src="icons/logout.svg" fill alt="logout" />
      </div>
    </footer>
  );
};

export default Footer;
