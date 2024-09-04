import React, { useState } from 'react'
import "./singleselect.css"
import { IoMdArrowDropdown,IoMdArrowDropup } from "react-icons/io";  // icons for dropdown and dropup

const SingleSelect = ({labels,title,setSlectedValue}) => {  // access values from parent
  const [selectedLabel,setSelectedLabel] = useState(title)  // set the title as initail selected
  const [showSelectCard , setShowSelectCard] = useState(false)  // state for display and not to display the dropdown card
  const LabelCardClass = showSelectCard ? "block" : "hidden"    // dropdown card class for hide and display

  const dropDownIconClass = showSelectCard ? "hidden" : "block" // Icons to display and hide
  const dropUpIconClass = showSelectCard ? "block" : "hidden"

  const sendLabelToParent =(label) =>{  // to set value to parent function
    if(label.length < 10){
      setSlectedValue(label)
    }else{
      setSelectedLabel(label.slice(0,10))
    }
   
  }

  return (
    <div className='w-full h-7'> {/* Outer div */}
      <div className=' w-full h-full '>
        {/* button for selection*/}
         <button   
          className='pt-1 duration-100 h-full w-full text-xs md:text-base flex justify-center items-center outline-none overflow-hidden '
          onClick={() => setShowSelectCard(!showSelectCard)}>{selectedLabel}
            <span className={`${dropDownIconClass} mt-1`}><IoMdArrowDropdown /></span> {/* Icons */}
            <span className={`${dropUpIconClass} mt-1`}><IoMdArrowDropup /></span>
         </button>
         {/* Drop Down Card */}
         <div className={`${LabelCardClass} dropDown-labels select-card max-h-32  rounded w-full  shadow-lg  border-2 border-blue-500 mt-2 overflow-y-auto overflow-x-hidden relative z-20`}>
          {labels.map(each =>    // traverse through each label provided by the parent
            <p key={each} onClick={(e) => {  
              setShowSelectCard(!showSelectCard)  // to show the selected value in the button
              setSelectedLabel(e.target.textContent)  // set the selected label to share with parent 
              sendLabelToParent(e.target.textContent)  // call the function which pass the label to parent function 
             }}
              className= ' text-sm text-black font-semibold hover:text-blue-500 hover:bg-gray-200 hover:cursor-pointer w-full  p-0.5'
              >{each}</p>
          )}
         </div>
      </div> 
    </div>
  )
}

export default SingleSelect