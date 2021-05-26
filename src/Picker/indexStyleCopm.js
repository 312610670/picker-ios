import styled from 'styled-components';

// 父组件 样式组件
export const SMask = styled.div`
  display: ${(props) => `${props.isVisible ? 'block' : 'none'}`};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  .picker{
  width: 100%;
  background-color: #fff;
  position: fixed;
  bottom: 0;
 
}
.options{
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background-color: #eee;
}
.cancel{
  width: 100px;
}

.sure{
  width: 100px;

}
// 内容滚动区域
.content_area{
  width: 100%;
  height:  300px;
  // background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
}

.picker_columns{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100%;
  position: relative;
  &:before{
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    content: ' ';
    width: 100%;
    height: 130px;
    background-color: rgba(0,0,0,.45);
    z-index: 9;
  }
  &:after{
    position: absolute;
    bottom:  0;
    left: 0;
    display: inline-block;
    content: ' ';
    width: 100%;
    height: 130px;
    background-color: rgba(0,0,0,.45);
    z-index: 9;
  }
}

`;

// 递归组件

export const SOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SContentArea = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SPickerColumns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.33vw;
  height: 100%;
  position: relative;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    content: ' ';
    width: 100%;
    height: 132px;
    background-color: rgb(255 ,255 ,255 ,0.5);;
    z-index: 9;
  }
  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    display: inline-block;
    content: ' ';
    width: 100%;
    height: 130px;
    background-color: rgb(255 ,255 ,255 ,0.5);;
    z-index: 9;
  }
`;

export const SSontainer = styled.div`
  position: absolute;
  height: ${(props) => `${props.optionHeight ? props.optionHeight : '32'}px`};
  width: 20vw;
  perspective: 800px;
  box-sizing: border-box;
  .cubes {
    transition: all 0.5s ;
    height: ${(props) => `${props.optionHeight ? props.optionHeight : '32'}px`};
    width: 20vw;
    transform-origin: 50% 50%;
    transform-style: preserve-3d;
  }
`;

export const SSide = styled.div`
  display: block;
  position: absolute;
  width: 20vw;
  font-size: 16px;
  text-align: center;
  height: ${(props) => `${props.optionHeight ? props.optionHeight : '32'}px`};
  line-height:${(props) => `${props.optionHeight ? props.optionHeight : '32'}px`};
  box-sizing: border-box;
  background: #fafbfb;
  transform: ${(props) =>
  `rotateX(-${props.index * 18}deg) translateZ(${props.radiusDistance}px)`};
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
`;