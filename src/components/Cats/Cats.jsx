import React, { useEffect, useRef, useState } from "react";
import css from "./Cats.module.css"

let Cats = () => {

    const [height, setHeight] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        setHeight(ref.current.clientHeight)
    })

    return <div className={css.catsBox} ref={ref}>
        <div className={css.cats} >
            <div className={css.cat}>
            {height}
            </div>
        </div>
    </div>
}

export default Cats;