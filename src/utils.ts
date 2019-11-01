export const dateStringToDate = (dateString: string): Date =>{
  // 18/06/2018
  const dateParts = dateString
    .split("/") // ['18', '06', '2018']
    .map((i: string): number=> parseInt(i)) //[18, 06, 2018]
  return new Date(dateParts[2], dateParts[1] -1, dateParts[0]);
}