import styles from "../../../styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
function HeadNavBar() {
    const [renderDesktop, setRenderDesktop] = useState(false);
    const handleResize = (e) => {
        const width = window.innerWidth;
        if (width > 768) {
            setRenderDesktop(true);
        } else {
            setRenderDesktop(false);
        }
    };
    useEffect(() => {
        const width = window.innerWidth;
        if (width > 768) {
            setRenderDesktop(true);
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.addEventListener("resize", handleResize);
        };
    }, []);
    return !renderDesktop ? (
        <div></div>
    ) : (
            <div className="navBar">
                <div className="wd-center">
                    <Image
                        src="/logo-white-full.png"
                        alt="Picture of the author"
                        width={80}
                        height={30}
                    />
                </div>
                <div className="navBarRight">
                    <ul>
                        <li className="">
                            <Link href="/">
                                <a>HOME</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>ABout</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Pages</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Projects</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Blog</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>shop</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
}

export default HeadNavBar;
