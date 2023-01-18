interface HabitProps {
  completed: number
}

export function Habit(props: HabitProps){

  return <h1>Habit {props.completed}</h1>
}