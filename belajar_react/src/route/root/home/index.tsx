import List from "../../../component/List/index";
import Flatlist from "../../../component/Flatlist";
import Counter from "../../../component/Counter";
import { userData, userInfo} from '../../../constants/user_data'
import { useState } from "react";

const Home = () =>{
    const [isVisible, setIsVisible] = useState(false)

    const handleVisible = () => {
        // setIsVisible(true) one way toggle
        setIsVisible(! isVisible) //flip state toggle
    }
    return (
        // <div>
        //     <List data={userData} display={isVisible} />
        //     <button onClick={handleVisible}>
        //         <span> Show List</span>
            </button>
        // </div>
        <Counter/>
    )

    }




export default Home
