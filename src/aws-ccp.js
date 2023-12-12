import "amazon-connect-streams";
import React, { memo, useRef, useEffect } from "react";


const ConnectCCP = () => {
  const ref = useRef();

  useEffect(() => {
    try {
      if (typeof window === "undefined") throw new Error("window missing");
      if (typeof window.connect === "undefined")
        throw new Error("global connect missing");
      console.log("init start");
      window.connect.core.initCCP(ref.current, {
        // ccpUrl: 'https://vchada.my.connect.aws/ccp-v2/softphone',
        ccpUrl: process.env.REACT_APP_CCP_URL,
        region: 'us-east-1',
        loginPopup: true,
        loginPopupAutoClose: true,
        softphone: {
          allowFramedSoftphone: true,
        },
        pageOptions: {
          enableAudioDeviceSettings: true,
          enablePhoneTypeSettings: true,
        },
      });
      console.log("init end");
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div
      ref={ref}
      style={{ width: "100%", height: "100vh" }}
    />
  );
};

export default memo(ConnectCCP);
