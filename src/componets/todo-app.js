import {useState} from 'react'
import './todo.css'
function AppTodo (){
const [currentTodo,setCurrentTodo] = useState("")
const [buttonTodo,setButtonTodo]= useState([])
const [updateTodo,setUpdateTodo] =useState(undefined)
const handleInput =(event) =>{
setCurrentTodo(event.target.value)
}

const handleButton = ()=>{
if(updateTodo != undefined ){
        const newtodos =buttonTodo.map((indexvaule,index)=>{
            if(index == updateTodo) return currentTodo;
            return indexvaule;
        })
        setButtonTodo(newtodos)
        setCurrentTodo("")
}else{
    
    setButtonTodo([...buttonTodo,currentTodo])
    setCurrentTodo(" ")
}
}
const handleEdit =(index)=>{
 setCurrentTodo(buttonTodo[index])
 setUpdateTodo(index)
}
const handleDelete = (index) =>{
      const filter = buttonTodo.filter((todo,i)=>{
          return index!= i;
      })
      setButtonTodo(filter)
}
return(
<div style={{textAlign:"center",backgroundColor:"#dcdcdc"}}>
      <header className='header-todo'>
     <h1 style={{color:"antiquewhite"}}>todo Application</h1>
  <input type="text" onChange={handleInput} value={currentTodo} style={{marginRight:"10px",borderRadius:"5px,5px,5px,5px"}}/>
  <label for="floatingInput">Enter Todo's Here</label>
     <button onClick={handleButton} className="btn btn-primary">submit</button>
    { (buttonTodo.length>0)?( <table className="table">
      <thead>
    <tr style={{color:"Highlight"}}>
      <th scope="col">S.NO</th>
      <th scope="col">Todo's</th>
      <th scope="col">Change</th>     
    </tr>
  </thead>
   <tbody>
    {buttonTodo.map((todo,index)=>{
        return(
             <tr key={index}style={{color:"InfoText",backgroundColor:"	#d3d3d3"}}>
                <td>{index+1}</td>
                <td>{todo}</td>
                <button className="btn btn-secondary" onClick={()=>{handleEdit(index)}} style={{marginRight:"10px", color:"black"}}>Edit</button>
                <button onClick={() =>{handleDelete(index)}} className="btn btn-secondary" style={{color:"black"}} >Delete</button>
             </tr>
        )
    })}
     
   </tbody>
   </table>):(<p>No todo's today</p>)}
 
   </header>   
</div>
)
}

export default AppTodo;