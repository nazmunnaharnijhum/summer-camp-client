/* eslint-disable react/no-unescaped-entities */

import { Rotate } from "react-awesome-reveal";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className='text-center'>
            <div className="text-center">
            <p className='text-4xl mt-12 mb-4'>Sorry This Page Doesn't Exist!!!!</p>
            <p className='text-4xl font-bold  mb-12'>404</p>
            <Rotate duration="3000">
                 {/**TODO: image hosting */}
            <img className='mb-5 h-96 mx-96' src="https://i.ibb.co/prgDN0T/retro-computer-desk-arrangement.jpg" alt="" />
            </Rotate>
            <br />
            
            <button className="btn bg-[#e79e37]"><Link to="/">Go Back To Home</Link></button>
        </div>
        
        </div>
    );
};

export default ErrorPage;