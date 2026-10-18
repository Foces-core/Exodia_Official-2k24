import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import logo from "../assets/logo.svg";
import forward from "../assets/forward.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import { popup, stack, stackdetails } from "../../recoil";
import { ReactTyped } from "react-typed";
import PropTypes from "prop-types";

function TypedDetails({ items }) {
  const [completedItems, setCompletedItems] = useState([]);
  const delays = items.map((_, index) =>
    items.slice(0, index).reduce((delay, item) => delay + item.length * 5 + 500, 0),
  );

  return items.map((item, index) => (
    <div key={`${index}-${item}`} className="flex gap-1 px-2 py-2 text-left">
      {completedItems.includes(index) && <img className="max-sm:h-3" src={forward} alt="" />}
      <ReactTyped
        strings={[item]}
        typeSpeed={5}
        startDelay={delays[index]}
        onComplete={() => {
          setCompletedItems((completed) =>
            completed.includes(index) ? completed : [...completed, index],
          );
        }}
        showCursor={false}
      />
    </div>
  ));
}

TypedDetails.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function PopModel() {
  const [open, setOpen] = useRecoilState(popup);
  const stackName = useRecoilValue(stack);
  const stackData = useRecoilValue(stackdetails);
  const cancelButtonRef = useRef(null);
  const stackItems = stackData?.Details?.[stackName];

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 "
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-950 bg-opacity-80 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
          <div className="flex items-center justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className=" h-full relative transform overflow-hidden rounded-lg bg-[#151515] text-left shadow-xl transition-all min-w-96 max-[375px]:min-w-72 sm:my-5 sm:w-full sm:max-w-2xl ">
                <div className="pt-2 ">
                  <div className="sm:flex sm:items-start">
                    <div className="flex flex-col w-full mt-3 text-center sm:mt-0 sm:text-left">
                      <div className="flex">
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mx-auto sm:mx-0 sm:h-10 sm:w-10">
                          <img className="scale-75" src={logo} alt="logo" />
                        </div>
                        <Dialog.Title
                          as="h3"
                          className="flex justify-between w-full px-3 text-base font-semibold leading-9 text-white"
                        >
                          <p>Choose your adventure !</p>
                          <button
                            ref={cancelButtonRef}
                            type="button"
                            aria-label="Close stack details"
                            onClick={() => setOpen(false)}
                            className="cursor-pointer theme"
                          >
                            ×
                          </button>
                        </Dialog.Title>
                      </div>
                      <div className="relative flex flex-col items-center w-full mt-2 h-96 bg-zinc-900">
                        <div className="relative">
                          <p className="pt-4 text-4xl text-white col theme max-[640px]:text-2xl max-[350px]:text-xl">
                            {stackName}
                          </p>
                          <div className="absolute top-2 -right-12 h-5 w-12 bg-[#9329FE] rounded-full">
                            <p className="font-semibold text-[7px] text-center text-white transition-transform translate-y-1">
                              filing fast
                            </p>
                          </div>
                        </div>
                        <div className="w-2/3 p-5 mt-6 overflow-y-scroll scrollbar-thin text-white rounded-lg col h-3/4 no-scrollbar bg-neutral-950 max-sm:text-xs scroll-smooth max-[640px]:w-fit max-[640px]:p-3 max-[640px]:max-w-[85%]">
                          {stackItems ? (
                            <TypedDetails key={`${stackName}-${open}`} items={stackItems} />
                          ) : (
                            <p className="animate-pulse">$</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center w-full px-4 py-3 sm:flex sm:px-6 bg-zinc-900">
                    <button
                      type="button"
                      className="inline-flex justify-center px-2 py-2 text-sm font-semibold text-white bg-red-600  shadow-sm w-72 rounded-xl hover:bg-red-500 sm:ml-3 sm:w-28"
                      onClick={() => {
                        setOpen(false);
                        window.open("https://www.yepdesk.com/exodiacec", "_blank", "noopener,noreferrer");
                      }}
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
  );
}
