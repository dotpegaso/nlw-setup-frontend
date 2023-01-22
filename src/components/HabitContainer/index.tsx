import { getCalendarRange } from '../../utils/getCalendarRange'
import * as S from './styles'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const calendarDates = getCalendarRange()
const minDateSize = 18 * 7
const missingDays = minDateSize - calendarDates.length

const HabitContainer = () => (
  <S.Container>
    <S.WeekDays>
      {weekDays.map((day, index) => <S.Day key={index}>{day}</S.Day>)}
    </S.WeekDays>
    <S.WeekBoxes>
      {calendarDates.map(date => <S.Box key={date.toString()} />)}
      {missingDays > 0 && Array.from({ length: missingDays }).map((_, index) => <S.Box key={index} $disabled/>)}
    </S.WeekBoxes>
  </S.Container>
)

export default HabitContainer