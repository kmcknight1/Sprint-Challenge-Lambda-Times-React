import React from "react";
import PropTypes from "prop-types";

function Tab({ tab, selectedTab, selectTabHandler }) {
  return (
    <div
      className={selectedTab === tab ? "tab active-tab" : "tab"}
      onClick={e => {
        selectTabHandler(e);
      }}
    >
      {tab.toUpperCase()}
    </div>
  );
}

Tab.propTypes = {
  tab: PropTypes.string
};

export default Tab;
