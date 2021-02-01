import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import Icon from "@material-ui/core/Icon";
import "font-awesome/css/font-awesome.min.css";

export default function Item(props) {
  const { titleL, titleR, marks, btns, btns_num, reset } = props;
  const [isDisplaymMoreBtn, setIsDisplaymMoreBtn] = useState(true);
  const [btnClick, setBtnClick] = useState();
  const [sliderNum, setSliderNum] = useState(2);

  useEffect(() => {
    if (marks) {
      setSliderNum(() => marks.defaultVal);
    }
  }, [marks]);

  const showBtns = (displaymMoreBtn) => {
    if (displaymMoreBtn !== null && displaymMoreBtn !== isDisplaymMoreBtn)
      setIsDisplaymMoreBtn(displaymMoreBtn);
    return (
      <>
        {btns.map((btn, index) => {
          return (
            <>
              {
                (!isDisplaymMoreBtn || index + 1 <= btns_num) ?
                  <sapn className="btn-gray">
                    <Button
                      variant="contained"
                      className={
                        reset
                          ? resetBtn()
                          : btnClick === btn.value
                            ? "MuiButton-active"
                            : ""
                      }
                      disableElevation
                      onClick={async () => {
                        setBtnClick(btn.value);
                        props.getChild(btn.value);
                      }}
                      key={btn.value}
                    >
                      {btn.title}
                    </Button>
                  </sapn>
                  : ""
              }
            </>
          )
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
        step={null}
        value={reset ? resetSlider(marks) : sliderNum}
        valueLabelDisplay="off"
        marks={marks.marks}
        min={marks.marks[0].value}
        max={marks.marks[marks.marks.length - 1].value}
        onChangeCommitted={(event, num) => {
          setSliderNum(() => num);
          props.getChild(num);
        }}
      />
    </div>
  );
  const resetBtn = () => {
    if (btnClick !== "") {
      setBtnClick(() => "");
      props.getChild("");
    }
  };
  const resetSlider = (marks) => {
    if (sliderNum !== marks.defaultVal) {
      setSliderNum(() => marks.defaultVal);
      props.getChild(marks.defaultVal);
    }
    return marks.defaultVal;
  };
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
