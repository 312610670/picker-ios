import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { SOptions, SContentArea, SPickerColumns , SSontainer, SSide} from './indexStyleCopm'

let pai = 3.1415926;
let standard = 18; // 基准角度

function PickerColumns(props) {
  const {
    dep,
    column,
    options,
    optionHeight, // 单个高度
    onChange,
    defaultValue,
    labelname, // 展示值
    valuename, // 取值KEY
    childrenname, // 子集名称
  } = props;

  const [angle, setAngle] = useState(0); // 滑动旋转角度
  const maxAngel = standard * (options.length - 1); // 最大旋转角度
  const [difference, setDifference] = useState(0); // 暂存值、
  const [selectIndex, setSelectIndex] = useState(0); // 选中的值
  const [childOptionis, setChildOptionis] = useState([]);
  const scrollWheel = useRef(); // 滚轮数据配置
  useEffect(() => {
    scrollWheel.current = {
      startY: 0,
      endY: 0,
      difference: 0, // 与上次的差值 (暂存角度)
    };
  }, []);

  const radiusDistance = (optionHeight * 20) / 2 / pai; // 半径长度

  console.log(radiusDistance,'-radiusDistance')
  // 计算list数组索引
  const countListIndex = useCallback(
    (index) => {
      // 取值
      let value = options[index][valuename];
      console.log(index,'--index',valuename, 'valuename')
      console.log(value, dep)
      onChange(value, dep);
      setSelectIndex(index);
      setChildOptionis(options[index][childrenname] || []);
    },
    [childrenname, dep, onChange, options, valuename]
  );

  const handleTouchStart = useMemo(()=>(e) => {
    // e.preventDefault();
    if (options.length <= 1) {
      return;
    }
    scrollWheel.current.startY = Number(e.nativeEvent.changedTouches[0].pageY);
  }, [options.length])

  const handleTouchEnd = useMemo(() => (e) => {
    // e.preventDefault();
    if (options.length <= 1) {
      return;
    }
    scrollWheel.current.endY = Number(e.nativeEvent.changedTouches[0].pageY);
    // 获取当前索引
    let index = Number((angle / 18).toFixed());
    let v = index * 18;
    setAngle(v); //减缓滑动速度
    setDifference(v);
    // 获选中的值
    countListIndex(index);
  }, [angle, countListIndex, options.length]);

  const handleTouchMove = useMemo(()=>
    (e) => {
      // e.preventDefault();
      if (options.length <= 1) {
        return;
      }
      const pageY = Number(e.nativeEvent.changedTouches[0].pageY);
      let value = pageY - scrollWheel.current.startY;
      let proportion = (2 * pai * optionHeight) / 360;
      let jiaodu = -value / proportion / 2 + difference;
      if (jiaodu > maxAngel || jiaodu < 0) {
        return;
      }
      setAngle(jiaodu); //减缓滑动速度
    },
    [difference, maxAngel, optionHeight, options.length]
  )



  const initValue = useCallback((value) => {
    let step = 0
    options.forEach((element,index) => {
      if (element[labelname] === value) {
        step = index
      }
    });
    let v = step * 18;
    setAngle(v); //减缓滑动速度
    setDifference(v);
    // 获选中的值
    countListIndex(step);
  },[countListIndex, labelname, options])

  // 处理是否有默认数据
  useEffect(() => {
    if (options.length > 0) {
      if (defaultValue[dep]) {
        initValue(defaultValue[dep])
      } else {
        console.log(options[0][childrenname],'-options[0][childrenname]')
          setChildOptionis(options[0][childrenname]);
          onChange(options[0][valuename], dep);
          setAngle(0);
          setDifference(0);
      }
    }
  }, [childrenname, defaultValue, dep, initValue, onChange, options, valuename]);



  return (
    <SOptions>
      <SContentArea>
        <SPickerColumns
          onTouchStart={(e) => {
            handleTouchStart(e);
          }}
          onTouchMove={(e) => handleTouchMove(e)}
          onTouchEnd={handleTouchEnd}
        >
          <SSontainer
            radiusDistance={radiusDistance}
            optionHeight={optionHeight}
          >
            <div
              className="cubes"
              style={{ transform: `rotateX(${angle}deg)` }}
            >
              {options.map((item, index) => {
                return (
                  Math.abs(selectIndex - index) < 5 && (
                    <SSide
                      radiusDistance={radiusDistance}
                      optionHeight={optionHeight}
                      key={index}
                      index={index}
                    >
                      {item[labelname]}
                    </SSide>
                  )
                );
              })}
            </div>
          </SSontainer>
        </SPickerColumns>
      </SContentArea>
      {childOptionis?.length > 0 && dep + 1 < column ? (
        <PickerColumns
          dep={dep + 1}
          column={column}
          options={childOptionis}
          onChange={onChange}
          defaultValue={defaultValue}
          labelname={labelname}
          valuename={valuename}// 取值KEY
          childrenname={childrenname}
          optionHeight={optionHeight}
        />
      ) : null}
    </SOptions>
  );
}

export default PickerColumns;
