import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../userData/css/comment.css';

function UserComment({cmtId}) {
console.log(cmtId);

    const [comment, setCmt] = useState([])
    const [visible, setvisible] = useState(false)
  
    const getComments = async (cmtId) => {
        console.log(cmtId,":::");
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${cmtId}`);
            const data = await res.json();
            if (visible) {
                setCmt([])
                setvisible(false)
            }
            else{
                setCmt(data)
                setvisible(true)
            }
            console.log(data);
            console.log(comment);
            
        }
        catch (e) {
            console.error(e)
        }
    }
    
    return <>
           <button onClick={()=>getComments(cmtId)}>View Comments</button>
       {
       
      
            comment.map((curCmt) => {
                const { userId, id,name,email,body } = curCmt;
                return (
                    <>
                    <div className='cmt'>
                       <p>{name}</p>
                    </div>
                    </>
                )
            })
        }
        
    </>
}
export default UserComment