import { useState } from 'react'
const Button = ({click, text}) => {
  return (
    <button onClick={click}>
      {text}
    </button>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  console.log(votes)
  let max = 0
  const [max_index, setIndex] = useState(0)

  const newAnec = () => {
    let temp = Math.floor(Math.random()*anecdotes.length)
    console.log(temp)
    setSelected(temp)
  }

  const handleVote = () => {
    console.log("Votes before:",votes[selected])
    const copy = [...votes]
    copy[selected] +=1
    setVotes(copy)
    console.log("Votes after:",votes[selected])

    max = Math.max(...copy)
    setIndex(copy.indexOf(max))
    console.log("Most vote count", max)
    console.log("Anecdote index of max is",max_index)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>

      <Button text="vote" click={handleVote}/>
      <Button text="next anecdote" click={newAnec}/>

      <h1>Anecdote with the most votes</h1>
      <div>{anecdotes[max_index]}</div>
      <div>has {votes[max_index]} votes</div>
    </div>
  )
}

export default App