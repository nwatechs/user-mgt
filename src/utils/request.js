export const getUsers = async (num = 10) => {
  const results = await fetch(`https://randomuser.me/api?results=${num}`)
  return results.json()
}
