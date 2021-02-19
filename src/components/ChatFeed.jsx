import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) =>{
    // DeStructuring from props => const { } = props;
    // DeStructure chats, activeChat, userName, messages
    const { chats, activeChat, userName, messages} = props;
    // Continue Here
    console.log(props);
    return (
        <div>
            ChatFeed
        </div>
    );
}
export default ChatFeed;