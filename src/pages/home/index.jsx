import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer/index';
import HomePageCardGroup from '../../components/HomePageCardGroup/index';
import { fetchGetConvert } from '../../utils/index';
import getAvatar from '../../images/homePage/getAvatar.png';
import styles from './index.module.scss';
import asc from '../../images/homePage/asc.png';
import desc from '../../images/homePage/desc.png';

const Home = () => {
    const sortArr = ['Time', 'Count', 'Price'];
    const [sortCon, setSortCon] = useState({
        created_at: 'desc',
        count: 'desc',
        price: 'desc',
    });


    const [avars, setAvars] = useState([]);

    const handleSort = (item, index, con) => {
        item = item.toLowerCase();
        if (item === 'time') item = 'created_at';
        setSortCon({ ...sortCon, [item]: con });
    }

    useEffect(() => {
        async function fetchData() {
            const url = 'http://edit.atip.top/api/v1/product/list';
            const data = await fetch(fetchGetConvert(url, sortCon)).then(data => data.json()).catch(function (error) { console.log('request failed', error) });
            setAvars(data.data.data);
        }
        fetchData();
    }, [sortCon]);

    return (
        <div>
            <img
                priority
                src={getAvatar}
                className=""
                style={{ display: 'block', width: '100vw', height: '385px' }}
                alt="getAvatar"
                layout="responsive"
            />
            <div className={styles.sortContainer}>
                <div className={styles.tags}>
                    <div className={styles.tag}>#Fashion</div>
                    <div className={styles.tag}>#Avatar</div>
                    <div className={styles.tag}>#ArtToy</div>
                    <div className={styles.tag}>#3D</div>
                </div>
                <div className={styles.verticalLine}></div>
                {
                    sortArr.map((item, index) => {
                        return (
                            <>
                                <div className={styles.sort}>
                                    <div className={styles.sortName}>{item}</div>
                                    <div className={styles.asc} onClick={() => handleSort(item, index, 'asc')}>
                                        <img src={asc} alt="asc" />
                                    </div>
                                    <div className={styles.desc} onClick={() => handleSort(item, index, 'desc')}>
                                        <img src={desc} alt="desc" />
                                    </div>
                                </div>
                                {
                                    index !== sortArr.length - 1 && <div className={styles.verticalLine} style={{ marginLeft: '24px' }}></div>
                                }
                            </>
                        )
                    })
                }
            </div>
            <HomePageCardGroup avars={avars} />
            <Footer />
        </div>
    )
}

export default Home;