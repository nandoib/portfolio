import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";

const Modal = (props) => {
  //Props [show , close, titre]
  return (
    <>
      <Transition appear show={props.show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-11/12 md:w-10/12  transform overflow-hidden rounded-lg bg-[#fff8e9] px-4 py-3 text-left align-middle shadow-xl transition-all border-4 border-[#8ab7dd] text-sm md:text-md">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {props.titre}
                  </Dialog.Title>
                  {props.children}
                  <button
                    onClick={() => {
                      props.close();
                    }}
                    className=" bg-red-300 p-2 rounded-lg hover:bg-red-400 "
                  >
                    Annuler
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
