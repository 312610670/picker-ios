import React, { useState } from 'react'
import Picker from './Picker'
function App() {
    const [res, setRes] = useState([])

    const options = [
        {
            label: '浙江',
            value: '浙江',
            children: [
                {
                    label: '杭州',
                    value: '杭州',
                    children: [
                        {
                            label: '西湖',
                            value: '西湖',
                        },
                    ],
                },
                {
                    label: '温州',
                    value: '温州',
                    children: [
                        {
                            label: '皮革厂',
                            value: '皮革厂',
                        },
                    ],
                },
            ],
        },
        {
            label: '广东',
            value: '广东',
            children: [
                {
                    label: '深圳',
                    value: '深圳',
                    children: [
                        {
                            label: '南山',
                            value: '南山',
                        },
                    ],
                },
                {
                    label: '广州',
                    value: '广州',
                    children: [
                        {
                            label: '白云',
                            value: '白云',
                        },
                    ],
                },
            ],
        },
        {
            label: '湖北',
            value: '湖北',
            children: [
                {
                    label: '武汉',
                    value: '武汉',
                    children: [
                        {
                            label: '洪山',
                            value: '洪山',
                        },
                        {
                            label: '武昌',
                            value: '武昌',
                        },
                        {
                            label: '汉阳',
                            value: '汉阳',
                        },
                    ],
                },
                {
                    label: '黄石',
                    value: '黄石',
                    children: [
                        {
                            label: '大冶',
                            value: '大冶',
                        },
                        {
                            label: '慈湖',
                            value: '慈湖',
                        },
                        {
                            label: '长江',
                            value: '长江',
                        },
                    ],
                },
            ],
        },
        {
            label: '江苏',
            value: '江苏',
            children: [
                {
                    label: '南京',
                    value: '南京',
                    children: [
                        {
                            label: '中华门',
                            value: '中华门',
                        },
                    ],
                },
            ],
        },
    ]
    const onChange = value => {
        setRes([...value])
    }

    const onSure = value => {
        setRes([...value])
    }

    const onCancel = () => {
        console.log('onCancel')
    }
    return (
        <div>
            <Picker
                options={options}
                column={3}
                labelname={'label'} // 展示值
                valuename={'value'} // 取值KEY
                childrenname={'children'}
                onChange={onChange}
                onCancel={onCancel}
                onSure={onSure}
            >
                <div>选择器</div>
            </Picker>
            {res.join('-')}
        </div>
    )
}

export default App
