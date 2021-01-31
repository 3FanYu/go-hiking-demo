import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Item from './Item';
import { IconButton } from "@material-ui/core";
import TuneIcon from "@material-ui/icons/Tune";
import './sidebar.scss';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  iconButton: {
    padding: 0,
    minHeight: 0,
    minWidth: 0,
    margin: 0,
  },
});
const themeArray = ['賞楓', '親子', '桐花', '露營', '密境', '賞櫻'];
const countiesArray = ['台北', '新北', '台中', '高雄', '新竹', '南投', '嘉義', '台南', '台東', '宜蘭'];
const marksOneChoose = {
  defaultVal: 3,
  marks:
    [
      {
        value: 1,
        label: '1',
      },
      {
        value: 2,
        label: '2',
      },
      {
        value: 3,
        label: '3',
      },
      {
        value: 4,
        label: '4',
      },
      {
        value: 5,
        label: '5',
      },
    ]
};
const marksTwoChoose = {
  defaultVal: [0, 2000],
  marks:
    [
      {
        value: 0,
        label: '',
      },
      {
        value: 1000,
        label: '1000',
      },
      {
        value: 2000,
        label: '2000',
      },
      {
        value: 3000,
        label: '3000',
      },
      {
        value: 4000,
        label: '',
      },
    ]
};

export default function TemporaryDrawer() {
  const [difficulty, setDifficulty] = useState(null);
  const [evaluation, setEvaluation] = useState(null);
  const [altitude, setAltitude] = useState(null);
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const [anchor] = React.useState('right');

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setState({ ...state, [anchor]: open });
  };

  function changeDifficulty(num) {
    switch (num) {
      case 1:
        setDifficulty('非常簡單');
        break;
      case 2:
        setDifficulty('簡單');
        break;
      case 3:
        setDifficulty('覺得還好');
        break;
      case 4:
        setDifficulty('困難');
        break;
      case 5:
        setDifficulty('非常困難');
        break;
      default:
        break;
    }
  }

  function changeEvaluation(num) {
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
  }

  function changeAltitude(numArray) {
    setAltitude(numArray[1] - numArray[0]);
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    >
      <div className="sidebar">
        <div className="sidebar__header">
          <span>篩選搜尋</span>
        </div>
        <div className="sidebar__content">
          <Item btns={themeArray} btns_num={4}>
            <span className="sidebar__title">主題</span>
          </Item>
          <hr />
          <Item marks={marksOneChoose} getChild={(num) => changeDifficulty(num)}>
            <span className="sidebar__title">難易度</span>
            <span className="sidebar__title">{difficulty || changeDifficulty(marksOneChoose.defaultVal)}</span>
          </Item>
          <hr />
          <Item marks={marksOneChoose} getChild={(num) => changeEvaluation(num)}>
            <span className="sidebar__title">評價</span>
            <span className="sidebar__title">{evaluation || changeEvaluation(marksOneChoose.defaultVal)}顆星</span>
          </Item>
          <hr />
          <Item marks={marksTwoChoose} getChild={(numArray) => changeAltitude(numArray)}>
            <span className="sidebar__title">海拔</span>
            <span className="sidebar__title">至{altitude || changeAltitude(marksTwoChoose.defaultVal)}M</span>
          </Item>
          <hr />
          <Item btns={countiesArray} btns_num={6}>
            <span className="sidebar__title">縣市</span>
          </Item>
        </div>
        <div className="sidebar__footer">
          <span className="btn-success">
            <Button>
              重設
            </Button>
          </span>
          <span className="btn-outline-success">
            <Button>
              使用
            </Button>
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <React.Fragment key={anchor}>
      <IconButton
          className={classes.iconButton}
          onClick={toggleDrawer(anchor, true)}
        >
          <TuneIcon style={{ color: "#00d04c" }}></TuneIcon>
        </IconButton>
      {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
      <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
        {list(anchor)}
      </Drawer>
    </React.Fragment>
  );
}
