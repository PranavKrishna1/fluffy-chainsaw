import React from "react";
import LoginForm from "./LoginForm";
import Spline from '@splinetool/react-spline';

const Home =() => {

    return (
        <div>
            <Spline scene="https://prod.spline.design/KC3hhIaZGStDcVJy/scene.splinecode" />
            <LoginForm/>
        </div>
    )
}

export default Home

