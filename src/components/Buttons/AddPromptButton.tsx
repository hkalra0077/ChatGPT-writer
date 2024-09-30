import InsertIcon from "../../../assets/insert-icon.svg"
const STATIC_MESSAGE = "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.";

    const AddPromptButton = ()=>{
      const handleInsert = (): void => {
          chrome.runtime.sendMessage({
              text: STATIC_MESSAGE,
              from: "insert-btn"
          }, (response) => {
              if (chrome.runtime.lastError) {
                  console.error('Error sending message:', chrome.runtime.lastError);
              } else if (response && response.status === 'success') {
                  console.log('Message inserted successfully');
              } else {
                  console.error('Failed to insert message');
              }
          });
      }
  
      return (
          <button 
              className="p-2 rounded-lg border border-gray-300 w-max px-4 py-2 text-md flex gap-2 items-center h-12" 
              style={{border: '1px solid #666D80'}} 
              onClick={handleInsert}
          >
              <img src={InsertIcon} alt="Insert" className="w-4 h-4" />
              <span style={{fontSize: '12px'}} className="text-gray-600 font-semibold">Insert</span>
          </button>
      )
  }
  
  export default AddPromptButton;





































