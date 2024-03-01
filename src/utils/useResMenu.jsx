import { useEffect,useState } from "react";
import { Menu_Api } from "./constants";


const useResMenu = (resid)=>{
    const [resInfo, setresInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[])
    
    const fetchMenu = async ()=>
    {
        const data = await fetch(Menu_Api+resid+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setresInfo(json.data);
    }
    return resInfo;
}
export default useResMenu;