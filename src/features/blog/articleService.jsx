import axios from "axios";

const API_URL = "https://blog-api-i1y5.onrender.com/api/articles/";

const createArticle = async (data, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, data, config)
    return response.data
}

const deleteArticle = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + id, config)
    return response.data
}

const updateArticle = async (id, data, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(API_URL + id, data, config)
    return response.data
}

const getArticles = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}

const articleService = {
    createArticle, deleteArticle, updateArticle, getArticles
}

export default articleService
