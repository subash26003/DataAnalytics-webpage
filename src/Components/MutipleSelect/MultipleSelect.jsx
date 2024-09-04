import React, { useState } from 'react'
import "./multipleselect.css"
import { IoMdArrowDropdown,IoMdArrowDropup } from "react-icons/io";// icons for dropdown and dropup

const MultipleSelect = ({labels,title,setSlectedValue}) => { // access values from parent
  const [showSelectCard , setShowSelectCard] = useState(false)  // state for display and not to display the dropdown card
  const LabelCardClass = showSelectCard ? "block" : "hidden"// dropdown card class for hide and display
   // Icons to display and hide
  const dropDownIconClass = showSelectCard ? "hidden" : "block"
  const dropUpIconClass = showSelectCard ? "block" : "hidden"


  const handleLabelSelection = (label) =>{ // to set value to parent function
    setSlectedValue((previousLable) => {
        if(previousLable.includes(label)){
          return previousLable.filter( e => e!== label )
        }else{
          return [...previousLable , label]
        }
      })
      setShowSelectCard(!showSelectCard)
  }


  return (
    <div className='w-full h-7 '> {/* Outer div */}
      <div className=' w-full h-full '>
         {/* button for selection*/}
         <button 
         className='duration-100 h-full text-xs md:text-base pt-1 font-thin min-w-full  flex justify-center items-center outline-none overflow-hidden'
         onClick={() => setShowSelectCard(!showSelectCard)}>{title}
                 <span className={`${dropDownIconClass} mt-1`}><IoMdArrowDropdown /></span> {/* Icons */}
                 <span className={`${dropUpIconClass} mt-1`}><IoMdArrowDropup /></span>
         </button>
          {/* Drop Down Card */}
         <div className={`${LabelCardClass} mt-2 select-card max-h-32 rounded w-full shadow-lg  border-2 border-blue-500 overflow-y-auto overflow-x-hidden relative z-20`}>
          {labels.map(each =>   // traverse through each label provided by the parent
            <div key={each}
            className=' flex p-0.5 hover:bg-gray-200 '
            >
                <input type="checkbox" id={each}   // checkbox to select
                className='w-2.5 hover:cursor-pointer'
                onChange={() => handleLabelSelection(each) }  // call the function which pass the selected values to the parent
                />
                <label htmlFor={each}
                 className='text-sm text-black font-semibold hover:text-blue-500 hover:cursor-pointer'
                >{each}</label>
            </div>
          )}
         </div>
      </div> 
    </div>
  )
}

export default MultipleSelect
