import React, { Suspense } from "react";
import Preloader from "../components/common/Preloader/Preloader";

export const withSuspense = (Component) => {

    return (props) => {
        return <Suspense fallback={<div>Loading...</div>}>
            <Component {...props} />
        </Suspense>
    };
};