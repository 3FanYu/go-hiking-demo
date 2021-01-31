import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Item from "./Item";
import "./sidebar.scss";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});
const axios = window.axios;
export default function Sidebar() {
  const classes = useStyles();
  const [theme, setTheme] = useState();
  const [counties, setCounties] = useState();
  const [difficulty, setDifficulty] = useState();
  const [evaluation, setEvaluation] = useState();
  const [altitude, setAltitude] = useState();
  const [state, setState] = useState(false);
  const [anchor] = useState("right");
  const [themeArray] = useState([
    "賞楓",
    "親子",
    "桐花",
    "露營",
    "密境",
    "賞櫻",
  ]);
  const [countiesArray] = useState([
    "台北",
    "新北",
    "台中",
    "高雄",
    "新竹",
    "南投",
    "嘉義",
    "台南",
    "台東",
    "宜蘭",
  ]);
  const [marksOneChoose] = useState({
    defaultVal: 3,
    marks: [
      {
        value: 1,
        label: "1",
      },
      {
        value: 2,
        label: "2",
      },
      {
        value: 3,
        label: "3",
      },
      {
        value: 4,
        label: "4",
      },
      {
        value: 5,
        label: "5",
      },
    ],
  });
  const [marksTwoChoose] = useState({
    defaultVal: [0, 2000],
    marks: [
      {
        value: 0,
        label: "",
      },
      {
        value: 1000,
        label: "1000",
      },
      {
        value: 2000,
        label: "2000",
      },
      {
        value: 3000,
        label: "3000",
      },
      {
        value: 4000,
        label: "",
      },
    ],
  });

  useEffect(async () => {
    const a = await axios.post("/api/trail", { filters: {} });
    console.log(a);
    const b = await axios.get("/api/trail/1");
    console.log(b);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown") return;
    setState(open);
  };
  const getTheme = (theme) => setTheme(theme);
  const changeDifficulty = (num) => {
    switch (num) {
      case 1:
        setDifficulty("非常簡單");
        break;
      case 2:
        setDifficulty("簡單");
        break;
      case 3:
        setDifficulty("覺得還好");
        break;
      case 4:
        setDifficulty("困難");
        break;
      case 5:
        setDifficulty("非常困難");
        break;
      default:
        break;
    }
  };
  const changeEvaluation = (num) => {
    switch (num) {
      case 1:
        setEvaluation(num);
        break;
      case 2:
        setEvaluation(num);
        break;
      case 3:
        setEvaluation(num);
        break;
      case 4:
        setEvaluation(num);
        break;
      case 5:
        setEvaluation(num);
        break;
      default:
        break;
    }
  };
  const changeAltitude = (numArray) => {
    setAltitude(numArray[1] - numArray[0]);
  };
  const getCounties = (counties) => setCounties(counties);
  const content = () => (
    <>
      <Item
        titleL="主題"
        btns={themeArray}
        btns_num={4}
        getChild={(theme) => getTheme(theme)}
      ></Item>
      <hr />
      <Item
        titleL="難易度"
        titleR={difficulty || changeDifficulty(marksOneChoose.defaultVal)}
        marks={marksOneChoose}
        getChild={(num) => changeDifficulty(num)}
      ></Item>
      <hr />
      <Item
        titleL="評價"
        titleR={`${
          evaluation || changeEvaluation(marksOneChoose.defaultVal)
        }顆星`}
        marks={marksOneChoose}
        getChild={(num) => changeEvaluation(num)}
      ></Item>
      <hr />
      <Item
        titleL="海拔"
        titleR={`
      至${altitude || changeAltitude(marksTwoChoose.defaultVal)}M
    `}
        marks={marksTwoChoose}
        getChild={(numArray) => changeAltitude(numArray)}
      ></Item>
      <hr />
      <Item
        titleL="縣市"
        btns={countiesArray}
        btns_num={6}
        getChild={(counties) => getCounties(counties)}
      ></Item>
    </>
  );
  return (
    <>
      <Button onClick={toggleDrawer(true)}>{anchor}</Button>
      <Drawer anchor={anchor} open={state} onClose={toggleDrawer(false)}>
        <div className={classes.list} role="presentation">
          <div className="sidebar">
            <div className="sidebar__header">
              <span>篩選搜尋</span>
            </div>
            <div className="sidebar__content">{content()}</div>
            <div className="sidebar__footer">
              <span className="btn-success">
                <Button>重設</Button>
              </span>
              <span className="btn-outline-success">
                <Button>使用</Button>
              </span>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
