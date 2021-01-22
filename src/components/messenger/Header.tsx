import { FC, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { validateText } from '../../utils/validators'
import { RootState } from '../../reducers/rootReducer';
import { setUser } from '../../reducers/userSlice';
import BackIcon from '../../images/back_icon.png';
import InfoIcon from '../../images/info_icon.png';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  }
};

Modal.setAppElement('#root')

const Container = styled.div`
  z-index: 20;
  background: ${({ theme }) => theme.colors.grey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  height: 110px;
  top: 0;
  position: fixed;
`;

const BackImg = styled.img`
  width: 12.5px;
  height: 21px;
  margin-left: 15.5px;
`;

const InfoImg = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 16px;
`;

const ContainerName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SubName = styled.div`
  padding-top: 5px;
`

const Name = styled.div`
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #969AA7;
  border-radius: 65px;
  font-size: 20px;
  color: white;
  cursor: pointer;
`

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  cursor: pointer;
`;

const Button = styled.button`
  color: white;
  border-radius: 10px;
  padding: 10px;
  background: green;
  cursor: pointer;
`

const CancelButton = styled(Button)`
  background: blue;
`

const Header: FC = (): ReactElement => {
  const [modalIsOpen,setModalIsOpen] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>('');

  const { name } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const confirm = () => {
    if (newName) {
      dispatch(setUser({ name: newName }));
    }
    setNewName('');
    closeModal();
  }
  const handleChange = (event: any) => setNewName(event.target.value);

  const isValidText = () => validateText(newName) && newName.length !== 0;

  return (
    <Container>
      <BackImg
        src={BackIcon}
        alt="error"
      />
      <ContainerName>
        <Name onClick={openModal}>
          {name.charAt(0)}
        </Name>
        <SubName>
          {name}
        </SubName>
      </ContainerName>
      <InfoImg
        src={InfoIcon}
        alt="info"
      />
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello, {name || ''}!</h2>
        <input type="text" value={newName} onChange={handleChange} style={{ borderRadius: '10px', height: '30px', width: '100%' }} placeholder="New name..."  />
        <ButtonContainer>
          <Button onClick={confirm} disabled={!isValidText()} style={{ opacity: !isValidText() ? 0.4 : 1 }}>Ok</Button>
          <CancelButton onClick={closeModal}>Cancel</CancelButton>
        </ButtonContainer>
      </Modal>
    </Container>
  )
}

export default Header;
