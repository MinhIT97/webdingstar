import Head from "next/head";
import React from "react";
import styles from "../../../styles/Home.module.scss";
import Home from "../../view/home/Home";
import { Footer } from "../footer";
import { Header } from "../header";


function MasterLayout() {
    return (
        <div className={styles.defaultBbackground}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <title>WeddingStar</title>
            </Head>
            <Header />
            <Home></Home>
            <Footer />
        </div>
    );
}

export default MasterLayout;
