/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
// import Carousel from '../components/dashboard/Carousel';
import { Page } from '../components/elements';
import Layout from '../components/layouts';

function Home() {
  return (
    <Layout>
      <div className="rounded-lg p-3">
        <Page>
          <div>
            <div className="flex flex-col md:flex-row justify-between px-3 py-6">
              <h1 className="text-lg font-light pb-2 text-black">
                Hi you have 3 requests, <span className="text-purple-500">Check</span>
              </h1>
              <div>
                <div className="border-2 rounded-full text-gray-500 text-sm px-6 py-2">
                  Subscription
                </div>
              </div>
            </div>
            <div className="text-gray-800 text-4xl">Janes Dashboard</div>
            <div className="text-gray-300">ID: 23423423j</div>
            <section className="text-gray-600 body-font">
              <div className="container py-24 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                  <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="flex border-2 border-gray-200 px-6 py-6 rounded-lg">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="text-black w-12 h-12 mb-3 inline-block mr-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 17l4 4 4-4m-4-5v9" />
                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
                      </svg>
                      <div className="flex flex-col items-start">
                        <h2 className="ont-medium text-sm text-gray-400">2.7K</h2>
                        <p className="leading-relaxed text-3xl text-black">362</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="flex border-2 border-gray-200 px-6 py-6 rounded-lg">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="text-black w-12 h-12 mb-3 inline-block mr-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 17l4 4 4-4m-4-5v9" />
                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
                      </svg>
                      <div className="flex flex-col items-start">
                        <h2 className="ont-medium text-sm text-gray-400">2.7K</h2>
                        <p className="leading-relaxed text-3xl text-black">362</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="flex border-2 border-gray-200 px-6 py-6 rounded-lg">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="text-black w-12 h-12 mb-3 inline-block mr-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 17l4 4 4-4m-4-5v9" />
                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
                      </svg>
                      <div className="flex flex-col items-start">
                        <h2 className="ont-medium text-sm text-gray-400">2.7K</h2>
                        <p className="leading-relaxed text-3xl text-black">362</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="flex border-2 border-gray-200 px-6 py-6 rounded-lg">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="text-black w-12 h-12 mb-3 inline-block mr-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 17l4 4 4-4m-4-5v9" />
                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
                      </svg>
                      <div className="flex flex-col items-start">
                        <h2 className="ont-medium text-sm text-gray-400">2.7K</h2>
                        <p className="leading-relaxed text-3xl text-black">362</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-5 mx-auto flex flex-wrap flex-col  w-full">
                <div className="flex w-full flex-wrap">
                  <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-500 text-gray-500 tracking-wider rounded-t">
                    Order History
                  </a>
                  <a className="text-gray-300 sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
                    Personal Information
                  </a>
                  <a className="text-gray-300 sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
                    Password
                  </a>
                  <a className="text-gray-300 sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
                    Payment Details
                  </a>
                </div>
              </div>
              <div className="bg-gray-600 w-full h-full" />
            </section>

            <div className="mx-auto py-6">
              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:sm:grid-cols-2 xl:sm:grid-cols-2 2xl:sm:grid-cols-2 w-full">
                s
              </div>
            </div>
          </div>
        </Page>
      </div>
    </Layout>
  );
}

export default Home;
