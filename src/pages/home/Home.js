import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "../../components/banner/Banner";
import { getListFilmsAction } from "../../redux/manageFilmsReducer/actions";
import ListFilm from "../../components/listFilm/ListFilms";
import styles from "./home.module.scss";

const { TabPane } = Tabs;
function Home() {
  const [isShowing, setIsShowing] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListFilmsAction());
  }, []);

  return (
    <div className={styles.homepage}>
      <Banner />
      <div className="xl:max-w-[1100px] mx-auto tabs-carousel">
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab={<p onClick={() => setIsShowing(true)}>Đang chiếu</p>} key="1">
            <ListFilm isShowing={isShowing} />
          </TabPane>
          <TabPane tab={<p onClick={() => setIsShowing(false)}>Sắp chiếu</p>} key="2">
            <ListFilm isShowing={isShowing} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default Home;
