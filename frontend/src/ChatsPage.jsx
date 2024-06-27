import React from 'react';
import { MultiChatSocket, useMultiChatLogic, MultiChatWindow } from 'react-chat-engine-advanced';
import './ChatsPage.css';


const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        props.user.username,
        props.user.username
    );
    return (
        <div className="chat-window" style={{ height: '100vh',backgroundColor:'black'}}>
            <MultiChatWindow {...chatProps} />
            <MultiChatSocket {...chatProps} />
        </div>
    );
}

export default ChatsPage;
