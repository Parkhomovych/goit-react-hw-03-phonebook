import { styled } from 'styled-components';
import { Form, Field } from 'formik';

export const MyForm = styled(Form)`
margin-bottom: 20px;
  width: 350px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  outline: 1px solid black;
  border-radius: 5px;
`;

export const MyLabel = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const MyField = styled(Field)`
  width: 200px;
  border: 1px solid silver;
  border-radius: 5px;
`;

export const Btn = styled.button`
  width: 80px;
  height: 34px;
  border-radius: 7px;
  background-color: lawngreen;
`;
