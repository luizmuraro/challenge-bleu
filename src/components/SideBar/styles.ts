import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: flex;
  flex: 1;
  width: 25rem;
  height: 100vh;
  background-color: #007bff;
  color: white;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 0;
  overflow-y: auto;
`

export const SidebarHeader = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
`

export const SidebarMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  flex: 1;
`

export const SidebarMenuItem = styled.li`
  margin: 10px 0;
  flex: 1;
`

export const SidebarLink = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: #a0aec0;
    transform: scale(1.05);
  }
`
