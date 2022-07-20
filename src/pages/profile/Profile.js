import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { manageUserReducer } from "../../services/manageUserServices";
import InfoAccount from "./InfoAccount";
import HistoryBookingTicket from "./HistoryBookingTicket";

import { Tabs } from "antd";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const { TabPane } = Tabs;

function Profile() {
  let location = useLocation();
  const [key, setKey] = useState("1");

  const { infoUserLogined } = useSelector((state) => state.manageUserReducer);
  const [infoUser, setInfoUser] = useState({});
  const [renderAgain, setRenderAgain] = useState(0);
  useEffect(() => {
    location.pathname === "/profile/history" && setKey("2");
    location.pathname === "/profile" && setKey("1");
  }, [location.pathname]);

  useEffect(() => {
    manageUserReducer.infoUserService().then((result) => {
      setInfoUser(result.data.content);
    });
  }, [renderAgain]);

  const onChange = (key) => setKey(key);

  if (!infoUserLogined.taiKhoan) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div>
      <Tabs activeKey={key} onChange={onChange} centered size="large">
        <TabPane tab="Thông tin tài khoản" key="1">
          <InfoAccount setRenderAgain={setRenderAgain} infoUser={infoUser} />
        </TabPane>
        <TabPane tab="Lịch sử đặt vé" key="2">
          <HistoryBookingTicket infoUser={infoUser} />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Profile;
