import React from "react";
import FireSvg from "../../assets/logo/icon/key-data/FireSvg";
import ChickenSvg from "../../assets/logo/icon/key-data/ChickenSvg";
import AppleSvg from "../../assets/logo/icon/key-data/AppleSvg";
import BurgerSvg from "../../assets/logo/icon/key-data/BurgerSvg";
import "../key-data/KeyData.css";

function KeyData({ labelItem, datas, type, unit }) {
  const getSvgKeyDataItem = () => {
    switch (labelItem) {
      case "fire":
        return <FireSvg />;
      case "chicken":
        return <ChickenSvg />;
      case "apple":
        return <AppleSvg />;
      case "burger":
        return <BurgerSvg />;

      default:
        <></>;
    }
  };
  return (
    <div className="container-key-data">
      <div className="content-key-data">
        <div className="icon-key-data">{getSvgKeyDataItem()}</div>
        <div className="key-data">
          <span className="number-key-data">
            {datas}
            {unit}
          </span>
          <span className="type-key-data">{type}</span>
        </div>
      </div>
    </div>
  );
}

export default KeyData;
