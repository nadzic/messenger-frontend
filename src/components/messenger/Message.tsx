import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import MessageTailGreen from '../../images/message_tail_green.png';
import MessageTailGrey from '../../images/message_tail_grey.png';

type MessageProps = {
  text: string;
  incoming: boolean;
};

type ContainerProps = {
  incoming: boolean;
};

const Container = styled.div<ContainerProps>`
  position: relative;
  padding: 13px;
  border-radius: 17px;
  margin: 5px 20px;
  background: ${props => props.incoming ? props.theme.colors.lightGrey : props.theme.colors.green};
  color: ${props => props.incoming ? props.theme.colors.black : props.theme.colors.white};
  align-self: ${props => props.incoming ? 'flex-start': 'flex-end'};
  z-index: 0;
`;

const LeftTailImg = styled.img`
  position: absolute;
  width: 41px;
  height: 34px;
  bottom: 0;
  left: -6px;
  z-index: -1;
`;

const RightTailImg = styled(LeftTailImg)`
  left: initial;
  right: -6px;
`;

const TextContent = styled.span<ContainerProps>`
  font-size: 16px;
  z-index: 10;
`;

const Message: FC<MessageProps> = ({ text, incoming }: MessageProps): ReactElement => 
  <Container
    {...{incoming}}
  >
    {!incoming && <RightTailImg src={MessageTailGreen} />}
    <TextContent {...{incoming}}>
      {text}
    </TextContent>
    {incoming && <LeftTailImg src={MessageTailGrey} />}
  </Container>

export default Message;
