interface Message {
    message: string;
    isUser: boolean;
}

interface MessageBoxProps {
    messages: Message[];
}

const MessageBox = ({ messages }: MessageBoxProps) => {
    return (
        <div className="flex flex-col gap-6 mb-4 w-full">
            {messages.map((message, index) => (
                <span 
                    key={index}
                    className={`h-max px-6 py-3 text-gray-700 rounded-xl ${
                        message.isUser ? 'self-end bg-gray-100' : 'self-start bg-blue-100'
                    }`}
                    style={{maxWidth: '85%'}}
                >
                    {message.message}
                </span>
            ))}
        </div>
    )
}

export default MessageBox;









