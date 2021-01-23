import { FC, ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';
import { validateText } from '../../utils/validators'
import SocketIOClient from '../../utils/socket';
import TakePhotoIcon from '../../images/take_photo_icon.png';
import ImageEditIcon from '../../images/image_edit_icon.png';
import SendMsgIcon from '../../images/send_msg_icon.png';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  width: 100%;
  height: 54px;
  bottom: 0;
  position: fixed;
  z-index: 10;
  background: white;
`;

const TakePhotoImg = styled.img`
  width: 28px;
  height: 22px;
  margin-left: 19px;
`;

const ImageEditImg = styled.img`
  width: 34px;
  height: 25px;
  margin-left: 26px;
  margin-right: 17px;
`

const SendButton = styled.button`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 26px;
  height: 26px;
  bottom: 15px;
  right: 25px;
  cursor: pointer;
  border: 0;
`

const SendImg = styled.img`
  width: 26px;
  height: 26px;
  cursor: pointer;
`

const Input = styled.input.attrs({
  type: "Message",
  placeholder: "Text Message"
})`
  width: 100%;
  border-radius: 20px;
  height: 42px;
  background: ${({ theme }) => theme.colors.lightGrey2};
  border-radius: 20px;
  border: 1px solid grey;
  padding: 0 12.75px 0 12.6px;
  color: ${({ theme }) => theme.colors.black};
  box-sizing: border-box;
  margin-right: 20px;
`;

const Footer: FC = (): ReactElement => {

  const [msgToSend, setMsgToSend] = useState<string>('');
  const handleSendMsg = () => {
    if (msgToSend !== '' && validateText(msgToSend)) {
      SocketIOClient.emit('chat message', { text: msgToSend, incoming: false, name: "Nik", timestamp: Date.now() });
      setMsgToSend('');
    }
  };

  useEffect(() => {
    return () => {
      SocketIOClient.disconnect();
    };
  }, []);

  return (
    <Container>
      <TakePhotoImg
        src={TakePhotoIcon}
        alt="take photo"
      />
      <ImageEditImg
        src={ImageEditIcon}
        alt="edit image"
      />
      <Input
        onChange={(e) => setMsgToSend(e.target.value)}
        value={msgToSend}
      />
      <SendButton disabled={msgToSend === '' || !validateText(msgToSend)}>
        <SendImg
          src={SendMsgIcon}
          alt="send message"
          onClick={handleSendMsg}
        />
      </SendButton>
    </Container>
  )

}


export default Footer;
