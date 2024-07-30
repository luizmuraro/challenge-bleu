import { Pool } from '@/app/home/types'

export interface ISideBarProps {
  pools: Pool[]
  onPoolClick: (pool: Pool) => void
}
