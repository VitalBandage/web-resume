/* eslint-disable react/prop-types */
import { Dialog } from '@headlessui/react'

export function ChooseLanguage({
    isOpen,
    setIsOpen,
    setCurrentLanguage
}) {
  
  
  return (
    <Dialog open={isOpen} className="test-component select-none" onClose={() => setIsOpen(true)}>
      <Dialog.Panel>
        <Dialog.Title className="text-center text-2xl pb-2 pointer-events-none">Welcome on my resume page!</Dialog.Title>
        <Dialog.Description className="text-center pointer-events-none">
          Please choose preffered langauge.
        </Dialog.Description>
        <Dialog.Description className="text-center font-bold pointer-events-none">
          This option will be saved for later.
        </Dialog.Description>

        <div className='flex flex-row gap-8 pt-2 justify-center align-center'>
          <div className='flex flex-col gap-2 justify-center align-center'>
            <img className='pointer-events-none' src='./images/English_flag.svg'></img>
            <button onClick={() => {
              setIsOpen(false)
              localStorage.setItem('language','en')
              setCurrentLanguage(localStorage.getItem('language'))
            }}>English</button>
          </div>
          <div className='flex flex-col gap-2 justify-center align-center'>
            <img className='pointer-events-none' src='./images/Polish_flag.svg'></img>
            <button onClick={() => {
              setIsOpen(false)    
              localStorage.setItem('language','pl')
              setCurrentLanguage(localStorage.getItem('language'))
            }}>Polish</button>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
    
  )
}