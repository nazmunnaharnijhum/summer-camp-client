import { useEffect, useState } from "react";

const useClass = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect (() => {
        fetch('https://summer-camp-school-assignment12-server.vercel.app/class')
        .then(res => res.json())
        .then(data => {
           
            setClasses(data);
            setLoading(false);
        })
    },[])
    return [classes, loading]
}

export default useClass;