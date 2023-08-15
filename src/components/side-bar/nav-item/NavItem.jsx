import React from "react";
import "../nav-item/NavItem.css";
import MusculationSvg from "../../../assets/logo/icon/MusculationSvg";
import YogaSvg from "../../../assets/logo/icon/YogaSvg";
import NatationSvg from "../../../assets/logo/icon/NatationSvg";
import BikeSvg from "../../../assets/logo/icon/BikeSvg";

function NavItem({ labelItem }) {
  const getSvgItem = () => {
    switch (labelItem) {
      case "yoga":
        return <YogaSvg />;
      case "natation":
        return <NatationSvg />;
      case "bike":
        return <BikeSvg />;
      case "musculation":
        return <MusculationSvg />;

      default:
        <></>;
    }
  };

  return <div className="nav-item">{getSvgItem()}</div>;
}

export default NavItem;
