import { FC, ReactElement, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { snapshotMessages, addMessage } from '../../reducers/messagesSlice';
import { RootState } from '../../reducers/rootReducer';
import SocketIOClient from '../../utils/socket';
import { Message } from './index';

type Message = {
  timestamp: number;
  text: string;
  incoming: boolean;
  name?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 110px;
`;

const Messages: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const { messages } = useSelector((state: RootState) => state);

  console.log("messages: ", messages);

  useEffect(() => {
    console.log("we come one")
    SocketIOClient.on('message que',(initialMsgs: string) => {
      console.log("initialMsgs: ", initialMsgs);
      dispatch(snapshotMessages(JSON.parse(initialMsgs)));
    });
    
    SocketIOClient.on('chat message',(msg: string)=>{
      console.log("yeah it comes here");
      dispatch(addMessage(JSON.parse(msg)))
    })

    return () => {
      SocketIOClient.disconnect();
    };
  }, [dispatch]);

  return (
    <Container>
      {messages.map((message: Message) => (
        <Message
          text={message.text}
          incoming={message.incoming}
          key={message.timestamp}
        />
      ))}
    </Container>
  )
}

export default Messages;
