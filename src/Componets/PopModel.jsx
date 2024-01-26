import { Fragment, useRef} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import logo from '../assets/logo.svg'
import forward from '../assets/forward.svg'
import { useRecoilState, useRecoilValue } from 'recoil'
import { popup ,stack,stackdetails} from '../../recoil'
export default function PopModel() {
  const [open, setOpen] = useRecoilState(popup)
  const stackName = useRecoilValue(stack);
  const stackData = useRecoilValue(stackdetails);
  const cancelButtonRef = useRef(null)
  console.log(stackData?.Details?.[stackName]);
   
  

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10 " initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-950 bg-opacity-80 transition-opacity backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className=" h-full relative transform overflow-hidden rounded-lg bg-[#151515] text-left shadow-xl transition-all min-w-96 sm:my-5 sm:w-full sm:max-w-2xl ">
                <div className=" pt-2 ">
                  <div className="sm:flex sm:items-start">
                    <div className=" flex flex-col mt-3 text-center sm:mt-0 sm:text-left w-full">
                      <div className='flex'>
                        <div className=" mx-auto flex h-10 w-10 flex-shrink-0 items-center justify-center sm:mx-0 sm:h-10 sm:w-10">
                          <img className='scale-75' src={logo} alt="logo" />
                        </div>
                        <Dialog.Title as="h3" className="px-3 flex text-base font-semibold leading-9 text-white justify-between w-full">
                          <p>Choose your adventure !</p><p onClick={() => setOpen(false)} className='theme cursor-pointer'>x</p>
                        </Dialog.Title>
                      </div>
                      <div className="relative flex flex-col mt-2 w-full items-center h-96 bg-zinc-900">
                        <p className="col text-4xl theme text-white pt-4">{stackName}</p>
                        <div className='absolute top-2 right-40 h-5 w-12 bg-[#9329FE] rounded-full'><p className='font-semibold text-[7px] text-center text-white transition-transform translate-y-1'>filing fast</p></div>
                        <div className='col h-3/4 w-2/3 rounded-lg mt-6 p-5 bg-neutral-950 text-white max-sm:text-xs overflow-y-scroll over scroll-smooth'>
                        {stackData && stackData.Details && stackData.Details[stackName] ? (
                          stackData.Details[stackName].map((item, index) => (
                            <div key={index} className='flex py-2 px-4'>
                              <img src={forward} alt="" />
                              <p className='ml-4'>{item}</p>
                            </div>
                          ))
                        ) : (
                          <p className='animate-pulse'>$</p>
                        )}

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex justify-center px-4 py-3 sm:flex sm:px-6 w-full  bg-zinc-900">
                    <button
                      type="button"
                      className="inline-flex w-72 justify-center rounded-xl border-none bg-red-600 px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-28"
                      onClick={() => setOpen(false)}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
