import React, {useState, useEffect} from 'react'
import {GoalPost} from './GoalPost';

function App() {
  const [data, setData] = useState([{}]);

  // useEffect(()=> {
  //   fetch("/members").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data);
  //       console.log(data);
  //     }
  //   )
  // }, [])

  useEffect(()=> {
    fetch("/players").then(
      res => res.json()
    ).then(
      data => {
        setData(data);
        console.log(data);
      }
    )
  }, [])

  return (
    <div>
      <div>
        {/* {(typeof data.members === 'undefined') ? (
          <p>Please Wait</p>
        ) : (
          data.members.map((member, i) => (
            <p key={i}> {member} </p>
          )
        )
        
        )} */}
      </div>
      
      {/* <div>
        {(typeof data === 'undefined') ? (
          <p>Please Wait</p>
        ) : (
            data.map((item,index) =>(
              <p key={index}> {item.Name} {item.Age} </p>
            )
            )
          // JSON.stringify(data[0])
        )
        
        }
      </div> */}

      <div>
        <GoalPost/>
      </div>
    </div>
  )
}

export default App
