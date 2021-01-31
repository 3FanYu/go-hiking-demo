import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import Icon from "@material-ui/core/Icon";
import "font-awesome/css/font-awesome.min.css";

export default function Item(props) {
  const { titleL, titleR, marks, btns, btns_num } = props;
  const [isDisplaymMoreBtn, setIsDisplaymMoreBtn] = useState(true);
  const [btnClick, setBtnClick] = useState();

  const showBtns = (displaymMoreBtn) => {
    if (displaymMoreBtn !== null && displaymMoreBtn !== isDisplaymMoreBtn)
      setIsDisplaymMoreBtn(displaymMoreBtn);
    return (
      <>
        {btns.map((label, index) => {
          if (!isDisplaymMoreBtn || index + 1 <= btns_num) {
            return (
              <sapn className="btn-gray">
                <Button
                  variant="contained"
                  className={btnClick === index ? "MuiButton-active" : ""}
                  disableElevation
                  onClick={async () => {
                    setBtnClick(index);
                    props.getChild(index);
                  }}
                  key={label}
                >
                  {label}
                </Button>
              </sapn>
            );
          }
        })}
        {showDisplaymMoreBtn()}
      </>
    );
  };
  const showDisplaymMoreBtn = () => (
    <div
      className="showDisplaymMoreBtn"
      onClick={() => {
        showBtns(!isDisplaymMoreBtn);
      }}
    >
      <Icon
        className={`fa ${isDisplaymMoreBtn ? "fa-angle-down" : "fa-angle-up"}`}
      />
      {isDisplaymMoreBtn ? "顯示更多" : "顯示較少"}
    </div>
  );
  const showSlider = (marks) => (
    <div className="slider">
      <Slider
        defaultValue={marks.defaultVal}
        step={null}
        valueLabelDisplay="off"
        marks={marks.marks}
        min={marks.marks[0].value}
        max={marks.marks[marks.marks.length - 1].value}
        onChangeCommitted={(event, num) => props.getChild(num)}
      />
    </div>
  );

  return (
    <div className="item">
      <div className="item__header">
        <span>{titleL}</span>
        <span>{titleR}</span>
      </div>
      {marks ? (
        <div className="item__marks">{showSlider(marks)}</div>
      ) : (
        <div className="item__btns">{showBtns(null)}</div>
      )}
    </div>
  );
}
