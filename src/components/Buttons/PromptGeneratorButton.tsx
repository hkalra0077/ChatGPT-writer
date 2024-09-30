import GenerateIcon from '../../../assets/send-command.svg';
import AddPromptButton from '../Buttons/AddPromptButton';
import RegenerateIcon from '../../../assets/regenerate.svg';


interface Message {
    message: string;
    isUser: boolean;
}

interface PromptGeneratorButtonProps {
    messages: Message[];
    handleGenerate: () => void;
}

const PromptGeneratorButton = ({ messages, handleGenerate }: PromptGeneratorButtonProps) => {
    const isRegenerating = messages.length > 0;

    return (
        <div className='flex items-center gap-4'>
            {isRegenerating && <AddPromptButton />}
            <button 
                className='text-white p-2 rounded-lg w-max px-6 py-2 text-md flex gap-2 items-center self-end h-12'
                style={{backgroundColor: '#3B82F6'}}
                onClick={isRegenerating ? undefined : handleGenerate}
            >
                <img src={isRegenerating ? RegenerateIcon : GenerateIcon} alt="Generate" className='w-5 h-5' />
                <span style={{fontSize: '12px'}}>
                    {isRegenerating ? 'Regenerate' : 'Generate'}
                </span>
            </button>
        </div>
    )
}

export default PromptGeneratorButton;

//----------------------------------------------------------------------------------------------------------------------

