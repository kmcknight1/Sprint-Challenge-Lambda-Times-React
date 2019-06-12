import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";

function Tabs({ tabs, selectedTab, selectTabHandler }) {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>

        {tabs.map(tab => {
          return (
            <Tab
              tab={tab}
              key={Math.random()}
              selectedTab={selectedTab}
              selectTabHandler={selectTabHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string)
};

export default Tabs;
