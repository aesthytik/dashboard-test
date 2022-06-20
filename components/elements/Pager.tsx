import { ReactChild } from 'react';

function Pager({ children }: { children: ReactChild }) {
  return <div className="mx-auto max-w-screen-2xl">{children}</div>;
}

export default Pager;
