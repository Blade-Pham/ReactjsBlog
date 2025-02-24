import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getUser } from '../services/userService';
import config from '../config';
import '../assets/styles/member.css';
import ExtraLayout from '../layouts/extralayout';
const Member = () => {  
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchUser = async () => {
          try {
            const userData = await getUser(id);
            console.log('Fetched user:', userData);
            setUser(userData);
          } catch (err) {
            setError(err.error || 'Lỗi không xác định');
          } finally {
            setLoading(false);
          }
        };
    
        fetchUser();
      }, [id]);
      if (loading) return <p>Đang tải...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
    return(
        <ExtraLayout>
            <h1 className='member-headline'>MemBer Information</h1>
            <div className='main-member'>
                <img src={`${config.BASE_URL}${user.image}`} alt="" className='image'/>
                <div className='user-info' >
                    <h2 className='user-name'>{user.name}</h2>
                    <p>"{user.information}"</p>
                </div>
            </div>
        </ExtraLayout>
    );
};
export default Member;