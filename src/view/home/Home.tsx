import Image from "next/image";

import "./styles.scss";
function Home() {
    
    return (
        <div className="w-full defaultBbackground">
            <img
                className="w-full h-auto"
                src="/images/group1.png"
                alt=""
            />
        </div>
    );
}

export default Home;
