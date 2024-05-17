import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetData = () => {
    const [user, setUser] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
        fetchProductData();
    }, []);

    const fetchData = async () => {
        const { data, status } = await axios.get('http://localhost:3001/users');
        if (status === 200) {
            setUser(data);
        }
    };

    const fetchProductData = async () => {
        const { data, status } = await axios.get('http://localhost:3002/data');
        if (status === 200) {
            setData(data);
        }
    };

    return {
        user,
        setUser,
        data
    };
};

export default useGetData;
