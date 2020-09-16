import React from 'react';
import styled from 'styled-components';

export const MyMessage = styled.div`
  max-width: 60%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.main};
  display: block;
  padding: 0.5rem;
  border-radius: 0.2rem;
  align-self: flex-end;
  margin: 0.5rem 0 0.1rem;
`;

const Message = styled(MyMessage)`
  align-self: flex-start;
  color: ${props => props.theme.black};
  background-color: ${props => props.theme.gray};
`;

const Sender = styled.div`
  color: ${props => props.theme.gray};
  font-size: ${props => props.theme.extraSmall};
`;

const Wrapper = styled.div``;

export const OthersMessage = ({ children, sender }) => {
  return (
    <Wrapper>
      <Message>{children}</Message>
      <Sender>{sender}</Sender>
    </Wrapper>
  );
};

export const AdminMessage = styled.div`
  align-self: center;
  color: ${props => props.theme.gray};
  font-size: ${props => props.theme.extraSmall};
  margin: 0.3rem 0;
`;
