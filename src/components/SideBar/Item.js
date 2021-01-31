import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import Icon from "@material-ui/core/Icon";
import "font-awesome/css/font-awesome.min.css";

export default function DiscreteSlider(props) {
  const { marks, btns, btns_num } = props;
  const [btnsNum, setBtnsNum] = useState(null);
  const [showMany, setShowMany] = useState(false);

  useEffect(() => {
    if (btns_num) setBtnsNum(btns_num);
  }, [btns_num]);

  useEffect(() => {
    if (showMany) setBtnsNum(null);
    else setBtnsNum(btns_num);
  }, [showMany]);

  function valuetext(value) {
    return `${value}`;
  }

  function toggleBtn(btns, toggleShowMany) {
    if (toggleShowMany) setShowMany(!showMany);
    if (btns) return btns.map((label, index) => checkBtnNum(label, index));
  }

  function checkBtnNum(label, index) {
    if (!btnsNum || index + 1 <= btnsNum)
      return (
        <sapn className="btn-gray" key={index}>
          <Button variant="contained" disableElevation>
            {label}
          </Button>
        </sapn>
      );
  }

  function showManyIcon(btns) {
    if (btns) {
      return (
        <div
          className="showManyBtn"
          onClick={() => {
            toggleBtn(btns, true);
          }}
        >
          <Icon
            className={`fa ${!showMany ? "fa-angle-down" : "fa-angle-up"}`}
          />
          <span> {!showMany ? "顯示更多" : "顯示較少"} </span>
        </div>
      );
    }
  }

  return (
    <div className="item">
      <div className="item__header">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          {props.children}
        </Grid>
      </div>
      <div className="item__marks">
        {marks ? (
          <div className="slider">
            <Slider
              defaultValue={marks.defaultVal}
              getAriaValueText={valuetext}
              step={null}
              valueLabelDisplay="off"
              marks={marks.marks}
              min={marks.marks[0].value}
              max={marks.marks[marks.marks.length - 1].value}
              onChangeCommitted={(event, num) => props.getChild(num)}
            />
          </div>
        ) : (
            ""
          )}
      </div>
      <div className="item__btns">
        {toggleBtn(btns)} {showManyIcon(btns)}
      </div>
    </div>
  );
}
