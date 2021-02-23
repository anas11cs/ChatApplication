import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) =>{
    // DeStructuring from props => const { } = props;
    // DeStructure chats, activeChat, userName, messages
    const { chats, activeChat, userName, messages} = props;
    // Continue Here
    const chat = chats && chats[activeChat];
    // if 'chats' exits(&&) then look for 'activeChat'
    //console.log(chat, userName, messages);
    //console.log(props);
    // Below Component to generate Messages
    const renderMessages = () =>{
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[ index - 1];
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={`msg_${index}`} style={{width: '100%'}}>
                    <div className="message-block">
                        {
                            isMyMessage
                            ? <MyMessage />
                            : <TheirMessage />
                        }
                    </div>
                </div>
            )
        })
        console.log(keys);
    }
    renderMessages()
    return (
        <div>
            ChatFeed
        </div>
    );
}
export default ChatFeed;