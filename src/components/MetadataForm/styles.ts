import styled from 'styled-components'

export const FormWrapper = styled.div`
  margin: 10px 20px;
  padding: 12px 20px;
  border-radius: 8px;
  max-width: 500px;
  background-color: #fff;
`

export const FormField = styled.div`
  margin-bottom: 15px;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${({ editable }) => (editable ? '#fff' : '#e9ecef')};
`

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${({ editable }) => (editable ? '#fff' : '#e9ecef')};
`

export const Button = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`
