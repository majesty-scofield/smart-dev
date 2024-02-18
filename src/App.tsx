import {Button} from "@/components/ui/button.tsx";

function App() {

    const handleClick = () => {
      alert('Am clicked')
    }

  return (
    <>
      <div>
          <Button type='button' onClick={handleClick} variant='outline'>Click Me</Button>
      </div>
    </>
  )
}

export default App
