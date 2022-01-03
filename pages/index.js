/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import "antd/dist/antd.css";
import { Input, Space } from "antd";
import Image from "next/image";

const { Search } = Input;

export default function Homepage() {
  return (
    <>
      <Popover className='relative bg-white'>
        <div className='h-16 max-w-7xl mx-auto px-4 sm:px-6 border-b-2 border-gray-200'>
          <div className='h-full flex justify-between items-center md:justify-start md:space-x-10'>
            <div className='flex justify-start lg:w-0 lg:flex-1'>
              <a href='#'>
                <span className='sr-only'>Workflow</span>
                <img
                  className='h-8 w-auto sm:h-10'
                  src='https://res.cloudinary.com/hiname/image/upload/v1640930481/1_vpd6hv.jpg'
                  alt=''
                />
              </a>
            </div>

            <div className='-mr-2 -my-2 md:hidden'>
              <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                <span className='sr-only'>Open menu</span>
                <MenuIcon className='h-6 w-6' aria-hidden='true' />
              </Popover.Button>
            </div>

            <Popover.Group as='nav' className='hidden md:flex space-x-10'>
              <Popover className='relative'>
                <Popover.Button>
                  <span className='text-base font-semibold hover:text-red-500 active:text-red-500'>
                    Home
                  </span>
                </Popover.Button>
              </Popover>

              <Popover className='relative'>
                <Popover.Button>
                  <span className='text-base font-semibold hover:text-red-500'>
                    Introductions
                  </span>
                </Popover.Button>
              </Popover>

              <Popover className='relative'>
                <Popover.Button>
                  <span className='text-base font-semibold hover:text-red-500'>
                    Products
                  </span>
                </Popover.Button>
              </Popover>

              <Popover className='relative'>
                <Popover.Button>
                  <span className='text-base font-semibold hover:text-red-500'>
                    Services
                  </span>
                </Popover.Button>
              </Popover>

              <Popover className='relative'>
                <Popover.Button>
                  <span className='text-base font-semibold hover:text-red-500'>
                    News
                  </span>
                </Popover.Button>
              </Popover>
              <Popover className='relative'>
                <Popover.Button>
                  <span className='text-base font-semibold hover:text-red-500'>
                    Contact
                  </span>
                </Popover.Button>
              </Popover>
            </Popover.Group>
            <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
              <a
                href='#'
                className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
              >
                <Space direction='vertical'>
                  <Search placeholder='Search' allowClear />
                </Space>
              </a>
              <a href='#' className='ml-2'>
                <img
                  src='https://res.cloudinary.com/hiname/image/upload/v1641105733/1_judtla.png'
                  width={42}
                  height={64}
                />
              </a>
              <a href='#' className='ml-2'>
                <img
                  src='https://res.cloudinary.com/hiname/image/upload/v1641105696/en_xchlpa.png'
                  width={42}
                  height={64}
                />
              </a>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter='duration-200 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            focus
            className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
          >
            <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
              <div className='pt-5 pb-6 px-5'>
                <div className='flex items-center justify-between'>
                  <div>
                    <img
                      className='h-8 w-auto sm:h-8'
                      src='https://res.cloudinary.com/hiname/image/upload/v1640930481/1_vpd6hv.jpg'
                      alt='Workflow'
                    />
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Close menu</span>
                      <XIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='mt-6'>
                  <nav className='grid gap-y-8'>
                    <a
                      key=''
                      href=''
                      className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
                    >
                      <span className='ml-3 text-base font-medium text-gray-900'>
                        mobile item 1
                      </span>
                    </a>
                  </nav>
                </div>
              </div>
              <div className='py-6 px-5 space-y-6'>
                <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                  <a
                    href='#'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Pricing
                  </a>

                  <a
                    href='#'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Docs
                  </a>

                  <a
                    key=''
                    href=''
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    mobile item 2
                  </a>
                </div>
                <div>
                  <a
                    href='#'
                    className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
                  >
                    Sign up
                  </a>
                  <p className='mt-6 text-center text-base font-medium text-gray-500'>
                    Existing customer?{" "}
                    <a
                      href='#'
                      className='text-indigo-600 hover:text-indigo-500'
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      {/* this is card */}
      <h1>this is card</h1>
      <div className='max-w-screen-2xl mx-auto px-5 my-10 sm:grid-cols-2 md:grid-cols-5  grid-cols-2'>
        <div className='p-2 '>
          <div className=' rounded cursor-pointer h-fit shadow-md '>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1640503676/samples/sheep.jpg'
              className='rounded'
            />
            <div className='bg-white w-5/6 m-auto relative bottom-5 rounded'>
              <p className='text-sm antialiased font-medium tracking-tight text-center text-black uppercase pt-3'>
                this is title
              </p>
            </div>
          </div>
        </div>

        <div className='p-2 '>
          <div className=' rounded cursor-pointer h-fit shadow-md '>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1640503676/samples/sheep.jpg'
              className='rounded'
            />
            <div className='bg-white w-5/6 m-auto relative bottom-5 rounded'>
              <p className='text-sm antialiased font-medium tracking-tight text-center text-black uppercase pt-3'>
                this is title
              </p>
            </div>
          </div>
        </div>

        <div className='p-2 '>
          <div className=' rounded cursor-pointer h-fit shadow-md '>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1640503676/samples/sheep.jpg'
              className='rounded'
            />
            <div className='bg-white w-5/6 m-auto relative bottom-5 rounded'>
              <p className='text-sm antialiased font-medium tracking-tight text-center text-black uppercase pt-3'>
                this is title
              </p>
            </div>
          </div>
        </div>

        <div className='p-2 '>
          <div className=' rounded cursor-pointer h-fit shadow-md '>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1640503676/samples/sheep.jpg'
              className='rounded'
            />
            <div className='bg-white w-5/6 m-auto relative bottom-5 rounded'>
              <p className='text-sm antialiased font-medium tracking-tight text-center text-black uppercase pt-3'>
                this is title
              </p>
            </div>
          </div>
        </div>

        <div className='p-2 '>
          <div className=' rounded cursor-pointer h-fit shadow-md '>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1640503676/samples/sheep.jpg'
              className='rounded'
            />
            <div className='bg-white w-5/6 m-auto relative bottom-5 rounded'>
              <p className='text-sm antialiased font-medium tracking-tight text-center text-black uppercase pt-3'>
                this is title
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* this is card media */}
      <h1>this is card media</h1>

      <div className='max-w-screen-2xl mx-auto px-5 my-10 sm:grid md:grid-cols-4  grid-cols-2'>
        <div className='p-2 '>
          <div className=' rounded cursor-pointer h-fit shadow-md '>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1640503676/samples/sheep.jpg'
              className='rounded'
            />
            <div className='bg-white w-5/6 m-auto rounded'>
              <p className='text-sm antialiased font-medium tracking-tight text-center text-black uppercase p-3'>
                this is title
              </p>
            </div>
          </div>
        </div>

        <div className='p-2 '>
          <div className=' rounded cursor-pointer h-fit shadow-md '>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1640503676/samples/sheep.jpg'
              className='rounded'
            />
            <div className='bg-white w-5/6 m-auto rounded'>
              <p className='text-sm antialiased font-medium tracking-tight text-center text-black uppercase p-3'>
                this is title
              </p>
            </div>
          </div>
        </div>

        <div className='p-2 '>
          <div className=' rounded cursor-pointer h-fit shadow-md '>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1640503676/samples/sheep.jpg'
              className='rounded'
            />
            <div className='bg-white w-5/6 m-auto rounded'>
              <p className='text-sm antialiased font-medium tracking-tight text-center text-black uppercase p-3'>
                this is title
              </p>
            </div>
          </div>
        </div>

        <div className='p-2 '>
          <div className=' rounded cursor-pointer h-fit shadow-md '>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1640503676/samples/sheep.jpg'
              className='rounded'
            />
            <div className='bg-white w-5/6 m-auto rounded'>
              <p className='text-sm antialiased font-medium tracking-tight text-center text-black uppercase p-3'>
                this is title
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
