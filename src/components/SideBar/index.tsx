import {
  SidebarContainer,
  SidebarHeader,
  SidebarLink,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/SideBar/styles'
import { ISideBarProps } from '@/components/SideBar/types'
import { formatPoolId } from '@/infra/utils/formatPoolId'

const Sidebar = ({ pools, onPoolClick }: ISideBarProps) => {
  return (
    <SidebarContainer>
      <SidebarHeader>My Pools</SidebarHeader>
      <SidebarMenu>
        {pools?.map((pool) => (
          <SidebarMenuItem key={pool.id}>
            <SidebarLink onClick={() => onPoolClick(pool)}>
              {formatPoolId(pool.id)}
            </SidebarLink>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarContainer>
  )
}

export default Sidebar
