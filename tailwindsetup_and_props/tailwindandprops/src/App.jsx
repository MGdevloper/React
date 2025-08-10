import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='p-3 flex flex-wrap items-start justify-center gap-4'>
        <div>


          <Card src={"https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw="} title={"Green Tea Leaves"} description={"Fresh green tea leaves from the organic farm."} tags={["#tea", "#organic", "#leaves"]} />
        </div>
        <div>

          <Card src={"https://www.rd.com/wp-content/uploads/2020/04/GettyImages-1093840488-scaled.jpg"} title={"Winter Wonderland"} description={"A beautiful winter landscape with snow-covered trees."} tags={["#winter", "#landscape", "#flower"]} />
        </div>
        <div>

          <Card src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUrvE85eW9nMQbakX11jPL2XybGmNTIlhnKw&s"} title={"Mountain Peaks"} description={"Majestic mountain peaks under a clear blue sky."} tags={["#mountains", "#landscape", "#nature"]} />
        </div>
      </div>
    </>
  )
}

export default App
