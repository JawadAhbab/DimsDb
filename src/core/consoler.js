export const consoler = (one, two, ...three) => {
  console.log(one.padEnd(8), ':', two.padEnd(26), ':', ...three)
}
