import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertTruck = payload => api.post(`/Truck`, payload)
export const getAllTrucks = () => api.get(`/Trucks`)
export const updateTruckById = (id, payload) => api.put(`/Truck/${id}`, payload)
export const deleteTruckById = id => api.delete(`/Truck/${id}`)
export const getTruckById = id => api.get(`/Truck/${id}`)

const apis = {
    insertTruck,
    getAllTrucks,
    updateTruckById,
    deleteTruckById,
    getTruckById,
}

export default apis