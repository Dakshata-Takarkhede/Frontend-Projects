import React from "react";

export default function Container({children}) {
    return (
        <>
            <div className="flex flex-wrap justify-center">
                {children}
            </div>
        </>
    )
}