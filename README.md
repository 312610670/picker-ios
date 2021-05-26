  ## 配置说明
    
    options={options}                                 | 选项参数 数组对象                    | []
    column={2}                                        | 展示几栏                            | Number  (有多层数据 colum 为几 就展示几列)
    defaultValue={["江苏", "南京", "中华门"]}          | 默认参数                            | [] 长度 为column 的数组
    labelname={'label'} // 展示值                     | 展示值                              | 默认label            
    valuename={'value'}// 取值KEY                     | 取值字段                            | 默认 value
    childrenname={'children'}                         | 取子集自端                          | 默认 children
    onChange={onChange}                               | 数据改变事件                        | fun
    onCancel={onCancel}                               | 取消事件                            | fun
    onSure={onSure}                                   | 确认事件                            | fun