import { useState } from 'react';
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import { Button } from 'antd';
import { DownloadOutlined, PicLeftOutlined } from '@ant-design/icons';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      顶级组件
      <Comp1></Comp1>
      <Comp2></Comp2>
      <Button type="primary" icon={ <DownloadOutlined /> }>Primary Button</Button>
      <PicLeftOutlined style={{fontSize: '25px', color: 'red'}} />
    </div>
  )
}

export default App
