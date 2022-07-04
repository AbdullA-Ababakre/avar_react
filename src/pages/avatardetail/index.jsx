import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Footer from "../../components/footer/index";
import InsCard from "../../components/instagramCard/index";
import HomePageCard from "../../components/homePageCard/index";
import { insItem, cardInfo } from "../../content/index";
import { ViewModel, LoadScript } from "../../utils/index";
import { useParams } from "react-router-dom";
import { getDetail } from "../../utils/api/product";

const About = ({ props }) => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  const [isSold, setIsSold] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    getDetail({ id }).then((data) => {
      if (data) {
        setItem(data.data);
        setIsSold(data.data.sales >= data.data.count);
      }
    }).then(() => {
      showModel();
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const showModel = () => {
    LoadScript(
      "http://fs3.bimangle.net/js/three-gltf-viewer/gltf-viewer.js",
      () => {
        // success
        // remove loading
        // console.log("modelBox", item);
        // ViewModel("modelBox", item.model);
        ViewModel("modelBox", 'https://avarlab.com/uploads/qipao3/qipao3.glb');
        document.getElementsByClassName("gui-wrap")[0].remove();
      }
    );
  };

  return (
    <div className="">
      {item && (
        <div>
          <div className={styles.Detail}>
            <div id="modelBox" className={styles.modelBox}></div>
            <div className={styles.modelTextBox}>
              <div className={styles.title}>
                <div className={styles.modelName}>{item.name}</div>
                <div className={styles.author}>Avar</div>
              </div>
              <div className={styles.tagWrapper}>
                {item.tags &&
                  item.tags.length > 0 &&
                  item.tags.map((item, index) => (
                    <div key={index} className={styles.tag}>
                      # {item}
                    </div>
                  ))}
              </div>
              <div className={styles.horizonLine}></div>
              <div className={styles.description}>{item.description}</div>
              <div className={styles.horizonLine}></div>
              <div className={styles.buyBox}>
                <div className={styles.buy}>
                  <div className={styles.price}>${item.price}</div>
                  <div className={styles.progress}>
                    <div className={styles.resbar} style={{ width: "50%" }}>
                      <div className={`${styles.res}  ${styles.resSelling}`}>
                        {item.sales + "/" + item.count}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.buyBtn} style={{ cursor: isSold ? 'not-allowed' : '' }}></div>
              </div>
            </div>
          </div>
          <div className={styles.horizonLine}></div>
          <div className={styles.imgDetail}>
            {item.images &&
              item.images.length > 0 &&
              item.images.map((item, index) => {
                return (
                  <div className={styles.imgWraper} key={index}>
                    <img
                      key={index}
                      src={item}
                      alt="img"
                      layout={"responsive"}
                      width="100%"
                      height="100%"
                    />
                  </div>
                );
              })}
          </div>
          {/* <div className={styles.ownership}>
                            <div className={styles.title}>Ownership</div>
                            <div className={styles.profiles}>
                                {
                                    item.user && item.user.length > 0 && item.user.map((item, index) => {
                                        return (
                                            // <Image
                                            //     className={styles.profile}
                                            //     key={index}
                                            //     src={item.cover}
                                            //     layout={"responsive"}
                                            //     width={100}
                                            //     height={100}
                                            //     alt="img"
                                            // />
                                            <div>hello</div>
                                        )
                                    })
                                }
                            </div>
                            <div className={styles.more}>
                                <Image
                                    width={24}
                                    height={17}
                                    src={arrowDown}
                                    alt="arrowDown"
                                />
                            </div>
                        </div> */}
          <div className={styles.horizonLine}></div>
          {/* <div className={styles.instagramCardGroup}>
            {insItem.map((item, index) => (
              <InsCard
                profile={item.profile}
                name={item.name}
                insImg={item.insImg}
                likeNum={item.likeNum}
                key={index}
              />
            ))}
          </div> */}
          {/* <div className={styles.horizonLine}></div> */}
          <div className={styles.homePageCards}>
            {cardInfo.map((item, index) => (
              <HomePageCard style={{ width: '20%' }} key={index} item={item} />
            ))}
          </div>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

// export async function getStaticPaths() {
//     let params = {
//         created_at: 'desc',
//         count: 'desc',
//         price: 'desc'
//     }

//     const url = 'http://edit.atip.top/api/v1/product/list';

//     const res = await fetch(fetchGetConvert(url, params)).then(data => data.json()).catch(function (error) { console.log('request failed', error) });
//     const path = res.data.data.map((item) => ({
//         params: { id: item.id.toString() },
//     }));

//     return {
//         fallback: false,
//         paths: res.data.data.map((item) => ({
//             params: { id: item.id.toString() },
//         })),
//     };
// }

// export async function getStaticProps(context) {
//     const id = context.params.id;
//     const item = await fetch(`http://edit.atip.top/api/v1/product/detail/1?id=${id}`).then(res => res.json());
//     return {
//         props: {
//             item: item.data || {}
//         },
//         revalidate: 1
//     }
// }

export default About;
