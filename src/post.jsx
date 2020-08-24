import axios from 'axios';


async () => {
    console.log(await axios({
        url: 'https://dog.ceo/api/breeds/list/all'
    }));
}

