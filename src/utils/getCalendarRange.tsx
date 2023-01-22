import dayjs from 'dayjs'

export function getCalendarRange(){
  const firstDayOfTheYear = dayjs().startOf('year')

  const today = new Date()

  const dates = []
  let dateToCompare = firstDayOfTheYear

  while (dateToCompare.isBefore(today)){
    dates.push(dateToCompare.toDate())
    dateToCompare = dateToCompare.add(1, 'day')
  }

  return dates
}