/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import "antd/dist/antd.css";
import { Input, Space } from "antd";
import { CaretRightOutlined, TwitterOutlined } from "@ant-design/icons";

const { Search } = Input;

export default function Homepage() {
  return (
    <>
      {/* header */}
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
      {/* background */}
      <div className='max-w-screen-2xl mx-auto'>
        <div className='bg-indigo-300 ...'>
          <img
            src='https://res.cloudinary.com/hiname/image/upload/v1641179440/bg-01_qiolog.png'
            className='object-center md:object-top ...'
          />
        </div>
      </div>
      {/* this is card */}
      <h1 style={{ textAlign: "center" }}>Why choose HiCas?</h1>
      <div className='max-w-screen-xl mx-auto grid grid-cols-2 gap-2 md:grid-cols-5'>
        <div className='p-1'>
          <div className=' rounded cursor-pointer h-fit shadow-md '>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1641184228/clem-onojeghuo-47C_M0Lg2Y0-unsplash_lsukqb.jpg'
              className='rounded object-cover h-auto w-auto'
            />
            <div className='bg-white w-5/6 m-auto relative bottom-5 rounded'>
              <p className='text-sm antialiased font-medium tracking-tight text-center text-black uppercase pt-3'>
                Đội ngũ chuyên nghiệp
              </p>
            </div>
          </div>
        </div>

        <div className='p-1'>
          <div className=' rounded cursor-pointer h-fit shadow-md '>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1640503676/samples/sheep.jpg'
              className='rounded object-cover h-auto w-auto'
            />
            <div className='bg-white w-5/6 m-auto relative bottom-5 rounded'>
              <p className='text-sm antialiased font-medium tracking-tight text-center text-black uppercase pt-3'>
                Kinh nghiệm lâu năm
              </p>
            </div>
          </div>
        </div>

        <div className='p-1'>
          <div className=' rounded cursor-pointer h-fit shadow-md '>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1640503676/samples/sheep.jpg'
              className='rounded object-cover h-auto w-auto'
            />
            <div className='bg-white w-5/6 m-auto relative bottom-5 rounded'>
              <p className='text-sm antialiased font-medium tracking-tight text-center text-black uppercase pt-3'>
                this is title
              </p>
            </div>
          </div>
        </div>

        <div className='p-1'>
          <div className=' rounded cursor-pointer h-fit shadow-md '>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1640503676/samples/sheep.jpg'
              className='rounded object-cover h-auto w-auto'
            />
            <div className='bg-white w-5/6 m-auto relative bottom-5 rounded'>
              <p className='text-sm antialiased font-medium tracking-tight text-center text-black uppercase pt-3'>
                this is title
              </p>
            </div>
          </div>
        </div>

        <div className='p-1'>
          <div className=' rounded cursor-pointer h-fit shadow-md '>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1640503676/samples/sheep.jpg'
              className='rounded object-cover h-auto w-auto'
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
      {/* <h1 style={{ textAlign: "center" }}>this is media card</h1>
      <div className='max-w-screen-xl mx-auto px-5 my-10 grid grid-cols-2 gap-2 md:grid-cols-4'>
        <div className='p-2 '>
          <div className=' rounded cursor-pointer h-fit shadow-md '>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1640503676/samples/sheep.jpg'
               className='rounded object-cover h-auto w-auto'
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
      </div> */}
      <h1 style={{ textAlign: "center" }}>Chúng tôi cung cấp</h1>
      <div className='max-w-screen-md mx-auto px-5 my-10'>
        <div className="bg-[url('https://res.cloudinary.com/hiname/image/upload/v1641192534/1_jpaasi.png')] bg-cover bg-no-repeat ">
          <div className='max-w-screen-lg h-96'>
            <p className='max-w-xs m-auto text-center p-8 text-lg font-medium font-sans text-[#F58220] uppercase leading-6'>
              Dịch vụ tư vấn và áp dụng công nghệ
            </p>
          </div>
        </div>
      </div>
      {/* this treee */}
      <div className='max-w-screen-2xl mx-auto'>
        <div className='bg-[#F2F2F2] ...'>
          <img
            src='https://res.cloudinary.com/hiname/image/upload/v1641194599/1_puauzm.png'
            className='object-cover m-auto ...'
          />
        </div>
      </div>
      {/* cicle card */}
      <div className='max-w-screen-xl m-auto px-5 my-10 grid grid-cols-2 gap-2 md:grid-cols-4'>
        <div>
          <div className='m-auto relative w-36 h-36 bg-purple-50 rounded-full flex justify-center items-center text-center p-5 shadow-md'>
            <p className='text-5xl leading-10 font-bold text-[#F58220] pt-10'>
              PID
            </p>
          </div>
          <p className='text-center text-[#707070] font-sans text-base font-medium'>
            CADWorx Plant
          </p>
        </div>
        <div>
          <div className='m-auto relative w-36 h-36 bg-purple-50 rounded-full flex justify-center items-center text-center p-5 shadow-md'>
            <p className='text-5xl leading-10 font-bold text-[#F58220] pt-10'>
              PID
            </p>
          </div>
          <p className='text-center text-[#707070] font-sans text-base font-medium'>
            CADWorx Plant
          </p>
        </div>

        <div>
          <div className='m-auto relative w-36 h-36 bg-purple-50 rounded-full flex justify-center items-center text-center p-5 shadow-md'>
            <p className='text-5xl leading-10 font-bold text-[#F58220] pt-10'>
              PID
            </p>
          </div>
          <p className='text-center text-[#707070] font-sans text-base font-medium'>
            CADWorx Plant
          </p>
        </div>

        <div>
          <div className='m-auto relative w-36 h-36 bg-purple-50 rounded-full flex justify-center items-center text-center p-5 shadow-md'>
            <p className='text-5xl leading-10 font-bold text-[#F58220] pt-10'>
              PID
            </p>
          </div>
          <p className='text-center text-[#707070] font-sans text-base font-medium'>
            CADWorx Plant
          </p>
        </div>
      </div>
      {/* bg */}
      <div className='max-w-screen-2xl mx-auto'>
        <div className='bg-indigo-300 ...'>
          <img
            src='https://res.cloudinary.com/hiname/image/upload/v1641199179/sjm_1_d6imu2.png'
            className='object-cover h-auto w-full ...'
          />
        </div>
      </div>
      {/* tin tuc */}
      <h1 style={{ textAlign: "center" }}>Tin Tức</h1>
      <div className='max-w-screen-xl mx-auto px-5 my-10 grid grid-cols-2 gap-2 md:grid-cols-4'>
        <div className='p-2'>
          <div className='shadow-md'>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1640929611/sample.jpg'
              className='rounded object-cover h-auto w-auto'
            />
            <p className='p-2'>
              Triển khai dự án đầu tháng 1 do dịch bệnh covid,chúng tôi xin
              thông báo
            </p>
            <p className='pr-2 pb-2 text-right cursor-pointer'>Xem thêm</p>
          </div>
        </div>

        <div className='p-2'>
          <div className='shadow-md'>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1640929611/sample.jpg'
              className='rounded object-cover h-auto w-auto'
            />
            <p className='p-2'>
              Triển khai dự án đầu tháng 1 do dịch bệnh covid,chúng tôi xin
              thông báo
            </p>
            <p className='pr-2 pb-2 text-right cursor-pointer'>Xem thêm</p>
          </div>
        </div>

        <div className='p-2'>
          <div className='shadow-md'>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1640929611/sample.jpg'
              className='rounded object-cover h-auto w-auto'
            />
            <p className='p-2'>
              Triển khai dự án đầu tháng 1 do dịch bệnh covid,chúng tôi xin
              thông báo
            </p>
            <p className='pr-2 pb-2 text-right cursor-pointer'>Xem thêm</p>
          </div>
        </div>

        <div className='p-2'>
          <div className='shadow-md'>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1640929611/sample.jpg'
              className='rounded object-cover h-auto w-auto'
            />
            <p className='p-2'>
              Triển khai dự án đầu tháng 1 do dịch bệnh covid,chúng tôi xin
              thông báo
            </p>
            <p className='pr-2 pb-2 text-right cursor-pointer'>Xem thêm</p>
          </div>
        </div>
      </div>
      {/* this is bottom */}
      <div className='max-w-screen-2xl mx-auto'>
        <div className='bg-indigo-300 ...'>
          <img
            src='https://res.cloudinary.com/hiname/image/upload/v1641199700/1_ib4hxm.png'
            className='object-cover h-auto w-full ...'
          />
        </div>
      </div>
      {/* map */}
      <div className='max-w-screen-2xl mx-auto'>
        <div className='bg-indigo-300 ...'>
          <img
            src='https://res.cloudinary.com/hiname/image/upload/v1641199867/shj_1_xdt5ae.png'
            className='object-cover h-auto w-full ...'
          />
        </div>
      </div>
      {/* info */}
      <div className='max-w-screen-2xl mx-auto bg-[#0E0E0E] '>
        <div className='max-w-7xl mx-auto pt-10 pb-10'>
          <div className='border-b-2 border-[#F58220] pb-2 pl-5'>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1641200298/sikl_1_rqjvpa.png'
              className='h-8 w-auto'
            />
          </div>
          <div className='flex pt-2 grid grid-cols-1 md:grid-cols-2'>
            <div className='w-full m-auto pl-5'>
              <p className='text-[#F58220] text-lg uppercase antialiased font-semibold tracking-tighter '>
                Người việt sản phẩm việt, chất lượng quốc tế
              </p>
              <span className='text-[#F58220] text-base uppercase antialiased font-semibold tracking-tighter'>
                Công ty TNHH phần mềm Hicas
              </span>
              <p className='text-[#ffffff]'>
                Trụ sở chính: Tầng 2 tòa nhà Technosoft
              </p>
            </div>

            <div className='w-full'>
              <div className='flex justify-evenly'>
                <p className='text-[#F58220] text-base cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                  Trang chủ
                </p>

                <p className='text-[#F58220] text-base cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                  Giới thiệu
                </p>

                <p className='text-[#F58220] text-base cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                  Sản phẩm
                </p>

                <p className='text-[#F58220] text-base cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                  Dịch vụ
                </p>

                <p className='text-[#F58220] text-base cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                  Tin tức
                </p>

                <p className='text-[#F58220] text-base cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                  Liên hệ
                </p>
              </div>
              <div className='flex justify-center '>
                <div className='m-2 bg-[#F58220] h-8 w-8 cu cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                  <p className='text-[black] text-center  font-extrabold text-2xl '>
                    f
                  </p>
                </div>
                <div className='m-2 bg-[#F58220] h-8 w-8 cu cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                  <div className=' flex justify-center pt-1'>
                    <CaretRightOutlined className='text-center font-extrabold text-2xl' />
                  </div>
                </div>
                <div className='m-2 bg-[#F58220] h-8 w-8 cu cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                  <p className='text-[black] text-center  font-extrabold text-2xl '>
                    <div className=' flex justify-center pt-1'>
                      <TwitterOutlined className='text-center font-extrabold text-2xl' />
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className='text-[#F58220] text-center pb-5'>
          © Bản quyền thuộc về Công ty TNHH phần mềm HiCAS | Cung cấp bởi HiCAS
        </p>
      </div>
    </>
  );
}
