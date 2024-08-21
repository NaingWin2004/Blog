import React from "react";

const Loader = () => {
    return (
        <section className="loader flex justify-center items-center h-96">
            <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    );
};

export default Loader;
