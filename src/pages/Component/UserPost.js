import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserComment from './UserComment'
import {Link} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import '../userData/css/post.css';

function UserPost() {

    const location = useLocation();
    const propdata = location.state;

    const [visible,setVisibility]= useState(5)
    const [post, setPost] = useState([])
  

    const loadMore = ()=>{
        setVisibility((prevValue) => prevValue + 5 );
    }

   
   
    const fetchPost = async () => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${propdata}`);
            const data = await res.json();
            if (data.length > 0) {
                setPost(data)

                console.log(data);

            }
        }
        catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {
        fetchPost()

    }, [])
    return <>
           <Link to={'/user'}><button>Go Back</button></Link>
        {
            post.slice(0,visible).map((curPost) => {
                const { userId, id, title, body, } = curPost;
                return (
                    <>
                    <div className='post'>
                        <div className='postCard'>
                            <p className='postTitle'>{id}</p>
                            <p className='postTitle'>{title}</p>
                            <p className='postBody'>{body}</p>
                            {/* <p><Link to={'userComment'} state={curPost.id}>View Comments</Link></p> */}
                            
                            <UserComment cmtId={id}/>
                            {console.log(id,":::")}
                                                 
                            
                        </div>
                    </div>
                    
               
                    </>
                )
            })
        }
<Outlet/>
        <button onClick={loadMore} className="loadBtn">Load More</button>
    </>
}
export default UserPost