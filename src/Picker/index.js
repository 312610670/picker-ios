import React, { useState, useRef } from 'react';
import PickerColumns from './PickerColumns';
import { SMask } from './indexStyleCopm'



function Picker(props) {
  const {
    children,
    options,
    column,
    optionHeight = 33, // 单个高度
    defaultValue,
    onChange,
    onCancel,
    onSure,
    labelname = 'label', // 展示值
    valuename = 'value', // 取值KEY
    childrenname = 'children',
  } = props;
  const [dataList, setDataList] = useState([...options]); // 传入数据
  const [isVisible, setIsVisible] = useState(false);
  const [showValue, setShowValue] = useState([...defaultValue]);
  const result = useRef([]);

  // 取消
  const onCancelHandler = () => {
    onCancel && onCancel();
    changeVisible();
    setShowValue([...showValue]);
  };

  // 确认
  const onOkHandler = () => {
    setShowValue([...result.current])
    onSure && onSure([...result.current]);
    changeVisible();
    onChange && onChange([...result.current]);
  };

  // 数据改变
  const onChangeHandler = (value, dep) => {
    result.current[dep] = value
  };

  const changeVisible = () => {
    setIsVisible(!isVisible);
  };
  
  return (
    <div>
      <children.type
        {...children.props}
        {...props}
        onClick={() => {
          changeVisible();
        }}
      ></children.type>
      <SMask isVisible={isVisible}  >
        <div className={'picker'}>
          <div className={'options'}>
            <span className={'cancel'} onClick={onCancelHandler}>
              取消
            </span>
            <span className={'placeholder'}>
              {showValue.length < 0 ? '请选择' : showValue.toString()}
            </span>
            <span className={'sure'} onClick={onOkHandler}>
              确定
            </span>
          </div>
          <PickerColumns
            dep={0}
            options={dataList}
            column={column}
            defaultValue={showValue}
            labelname={labelname} // 展示值
            valuename={valuename} // 取值KEY
            childrenname={childrenname}
            onChange={(value, dep) => { onChangeHandler(value, dep) }}
          ></PickerColumns>
        </div>
      </SMask>
    </div>
  );
}

export default Picker;
