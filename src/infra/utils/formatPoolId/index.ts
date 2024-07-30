export const formatPoolId = (poolId: string) => {
  if (!poolId || poolId.length <= 10) {
    return poolId
  }
  const start = poolId.substring(0, 10)
  const end = poolId.substring(poolId.length - 10)
  return `${start}...${end}`
}
