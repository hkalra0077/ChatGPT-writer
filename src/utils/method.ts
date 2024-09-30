import React from "react";
import { createRoot } from "react-dom/client";
import SmartReplyButton from "../components/Buttons/SmartReplyButton";
import PromptModal from "../components/PromptModal";

export function displayAI_Icon(message_input_field: Element){
    const iconContainer = createIconContainer();
    message_input_field.parentElement?.appendChild(iconContainer);

    addFocusAndBlurListeners(message_input_field, iconContainer);
    addIconClickListener(iconContainer);

    const root = createRoot(iconContainer);
    root.render(React.createElement(SmartReplyButton));
    
}
function createIconContainer():HTMLDivElement{
    const iconContainer = document.createElement('div');
    iconContainer.id = 'ai-button-container';
    Object.assign(iconContainer.style, {
      position: 'absolute',
      right: '10px',
      bottom: '5px',
      zIndex: '1000',
      backgroundColor: 'white',
      borderRadius: '100%',
      padding: '5px',
      width: '25px',
      height: '25px',
      display: 'none',
      alignItems: 'center',
      justifyContent: 'center',
    });
    return iconContainer;
}


function addFocusAndBlurListeners(message_input_field: Element, iconContainer: HTMLDivElement){
    message_input_field.addEventListener('focus',(e)=>{
        iconContainer.style.display = 'flex'
        e.stopPropagation();
    })

    message_input_field.addEventListener('blur',(e:Event)=>{
        const target = (e as FocusEvent).relatedTarget as Node |null;
        if(!(message_input_field.contains(target) || iconContainer.contains(target))){
            iconContainer.style.display= 'none'
        }
    })
}

function addIconClickListener(iconContainer: HTMLDivElement){
    iconContainer.addEventListener('click',(e)=>{
        e.preventDefault();
        iconContainer.style.display = 'none';
        const modalContainer= createModalContainer();
        document.body.appendChild(modalContainer);

        const closeModal = ()=>{
            modalContainer.remove();
        };
        
        const modalRoot = createRoot(modalContainer);
        modalRoot.render(React.createElement(PromptModal,{closeModal}))
        
    });
}

function createModalContainer(): HTMLDivElement{
    const modalContainer = document.createElement('div');
    modalContainer.id = 'prompt-modal-container';
    Object.assign(modalContainer.style, {
      position: 'absolute',
      top: '0',
      left: '0',
      height: '100%',
      width: '100%',
      zIndex: '1000',
    });
    return modalContainer;
}

































