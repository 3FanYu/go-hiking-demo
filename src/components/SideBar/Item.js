import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import getMany from './getMany.png';

export default function DiscreteSlider(props) {
    const { marks, btns, btns_num } = props;
    const [btnsNum, setBtnsNum] = useState(null);
    const [showMany, setShowMany] = useState(false);

    useEffect(() => {
        if (btns_num) {
            setBtnsNum(btns_num);
        }
    }, [btns_num])

    useEffect(() => {
        if (showMany) {
            setBtnsNum(null);
        } else {
            setBtnsNum(btns_num);
        }
    }, [showMany])

    function valuetext(value) {
        return `${value}`;
    }

    function showBtn(btns, toggleShowMany) {
        if (toggleShowMany) {
            setShowMany(!showMany)
        }

        return btns.map((label, index) => (
            checkBtnNum(label, index)
        ));
    }
    function checkBtnNum(label, index) {
        if (!btnsNum || index + 1 <= btnsNum) {
            return (
                <sapn className="btn-gray" key={index}>
                    <Button variant="contained">{label}</Button>
                </sapn>
            )
        }
    }
    function showManyBtn(btns) {
        if (btns) {
            return (
                !showMany ?
                    <div className='getManyBtn' onClick={() => { showBtn(btns, true) }}>
                        <span>顯示更多<img widtd="24" height="24" src={getMany} alt="顯示更多"></img></span>
                    </div>
                    :
                    <div className='getManyBtn' onClick={() => { showBtn(btns, true) }}>
                        <span>顯示較少<img widtd="24" height="24" src={getMany} alt="顯示較少"></img></span>
                    </div>
            )
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
                {marks ?
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
                    : ""
                }
            </div>
            <div className="item__btns">
                {
                    btns ?
                        showBtn(btns)
                        : ""
                }
                {showManyBtn(btns)}
            </div>
        </div >
    );
}
