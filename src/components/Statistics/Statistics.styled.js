import styled from 'styled-components';


export const Section = styled.section`
  width: 500px;
  margin: 0 auto;
  border: 1px solid black;
`;

export const Title = styled.h2`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid black;
  color: red;
  background-color: teal;
`;

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 5px;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
`;

export const Item = styled.li`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 700;
`;