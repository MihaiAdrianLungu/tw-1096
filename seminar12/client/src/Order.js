import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setOrders, deleteOrder } from './store/slices/orderSlice';

export default function Order() {
    const [error, setError] = useState('');
    const token = useSelector((state) => state.global.token);
    const orders = useSelector((state) => state.order.orders);

    const dispatch = useDispatch();

    const getOrders = () => {
        const options = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        fetch(`${process.env.REACT_APP_API_URL}/orders/user`, options)
        .then(res => res.json())
        .then(res => {
            dispatch(setOrders(res.data));
        })
        .catch((err) => setError(err));
    }

    const handleDeleteOrder = (id) => {
        const options = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        fetch(`${process.env.REACT_APP_API_URL}/orders/${id}`, options)
        .then(res => res.json())
        .then(res => {
            if(res.success) {
                dispatch(deleteOrder(id));
            }
        })
        .catch((err) => setError(err));
    }

    useEffect(() => {
        getOrders();
    }, [])

    return (
        <div className='ordersWrapper'>
            <table id="orders">
                <tr>
                    <th>ID</th>
                    <th>Value</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                {orders?.map(order => (
                    <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.value}</td>
                        <td>{order.status}</td>
                        <td className='tableIcon' onClick={() => handleDeleteOrder(order.id)}>X</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}