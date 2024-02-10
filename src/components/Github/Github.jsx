import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
    /*
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/abdulrafay-07')
        .then(response => response.json())
        .then(data => {
            setData(data);
        })
    }, [])
    */

    const data = useLoaderData();

    return (
        <div className="flex flex-col items-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Public Github Repositories: {data.public_repos}
            <img className="w-28 pt-8" src={data.avatar_url} alt="Github Picture" />
        </div>
    )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/abdulrafay-07');
    return response.json();
}