import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
`
export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`
export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const SearchInput = styled.input`
  width: 400px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  margin-left: 0.2rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`
