import { useState } from 'react'
const Button = ({click, text}) => {
  return (
    <button onClick={click}>
      {text}
    </button>
  )
}
const Statisics = ({good,neutral,bad}) => {
  let total = good+bad+neutral
  if (total == 0){
    return(
      <p>No feedback has been given</p>
    )
  }
  return (
    <div>
      <StatisicLine text="good" value={good}/>
      <StatisicLine text="neutral" value={neutral}/>
      <StatisicLine text="bad" value={bad}/>
      <StatisicLine text="all" value={total}/>
      <StatisicLine text="average" value={(good-bad)/total}/>
      <StatisicLine text="positive" value={good/total}/>     
    </div>
  )
}
const StatisicLine = ({text, value}) => {
  return (
  <div>{text} {value}</div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGood = () => {
    console.log('good is now', good+1)
    setGood(good + 1)
  }
  const handleNeutral = () => {
    console.log('neutral is now', neutral+1)
    setNeutral(neutral+1)
  }
  const handleBad = () => {
    console.log('bad is now', bad+1)
    setBad(bad+1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button click={handleGood} text={'Good'}/>
      <Button click={handleNeutral} text={'Neutral'}/>
      <Button click={handleBad} text={'Bad'}/>
      <h1>statistics</h1>
      <Statisics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App