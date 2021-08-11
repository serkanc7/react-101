import axios from 'axios';

const getData =  async (id) => {
    const { data : user } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    const { data : posts } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

    user["posts"] = posts;

    return user;
}

export default getData;