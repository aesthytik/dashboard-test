/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Sidebar from 'react-sidebar';
import SidebarComponent from './SidebarComponent';

const style = {
  root: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  sidebar: {
    zIndex: 999,
    position: 'fixed',
    top: 0,
    bottom: 0,
    transition: 'transform .3s ease-out',
    WebkitTransition: '-webkit-transform .3s ease-out',
    willChange: 'transform',
    overflowY: 'auto',
    background: '#16181d',
    width: '70%',
  },
  content: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',
    transition: 'left .3s ease-out, right .3s ease-out',
  },
  overlay: {
    zIndex: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    visibility: 'hidden',
    transition: 'opacity .3s ease-out, visibility .3s ease-out',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  dragHandle: {
    zIndex: 1,
    position: 'fixed',
    top: 0,
    bottom: 0,
  },
};

function MySidebar({ isActive, onSetOpen }: { isActive: boolean; onSetOpen: any }) {
  return (
    <Sidebar
      sidebar={<SidebarComponent onClose={() => onSetOpen(false)} />}
      open={isActive}
      onSetOpen={onSetOpen}
      pullRight
      // @ts-ignore
      styles={{ ...style }}
    >
      <a onClick={onSetOpen}>
        <i className="fas fa-bars" />
      </a>
    </Sidebar>
  );
}

export default MySidebar;
