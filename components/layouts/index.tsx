import { ReactChild } from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';

const responsive = 'hidden sm:block md:block lg:block xl:block 2xl:block';
const sidebarWidth = `w-1/8 sm:w-1/8 md:w-1/8 lg:w-1/5 xl:w-1/5 2xl:w-1/5`;

function Layout({ children }: { children: ReactChild }) {
  return (
    <div className="flex">
      <div className={`flex-none ${sidebarWidth} ${responsive}`}>
        <Sidebar />
      </div>
      <div className="grow bg-backgroundLight border-borderColor border-r min-h-screen">
        {children}
      </div>
    </div>
  );
}

Layout.defaultProps = {};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
