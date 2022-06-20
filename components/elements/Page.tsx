import { ReactChild } from 'react';

function Page({ children }: { children: ReactChild }) {
  return (
    <div className="px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8 lg:px-8 lg:pb-8 xl:px-8 xl:pb-8 2xl:px-8 2xl:pb-8 bg-white rounded-2xl h-screen">
      {children}
    </div>
  );
}

export default Page;
