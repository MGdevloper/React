import React, { useEffect, useState } from 'react'
import Users from './Users'
import { useParams } from 'react-router-dom'
function UsersSearch() {
    const { userId } = useParams()
    const [data, setdata] = useState(null)
    useEffect(() => {
        fetch(`https://api.github.com/users/${userId}`)
            .then((res) => res.json())
            .then((data) => { setdata(data) })

    }, [userId])

    console.log(data);

    return (
        <div className='w-full'>
            <Users />

            <div>
                {


                    data == null ? <div>Loding.......</div> :


                    <div className='flex  justify-center items-center mt-10 gap-3'>
                        <div className='w-[50%]' >
                            <img src={data.avatar_url} alt="no avtar" />
                        </div>

                        <div className='w-[50%]'>
                            <h1 className='text-2xl font-bold'>Name:{data.name}</h1>
                            {data.bio && <p className='text-gray-600'>Bio:{data.bio}</p>}
                            {data.followers && <p className='text-gray-600'>Followers:{data.followers}</p>}
                            {data.following && <p className='text-gray-600'>Following:{data.following}</p>}

                        </div>


                    </div>

                }


            </div>
        </div>
    )
}

export default UsersSearch