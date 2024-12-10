import { Badge, Image, Space, Typography } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
function AppHeader(){
    return(
        <div className="AppHeader">
            <Image 
            width={40}
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            color="black"
            ></Image>
            <Typography.Title level={3}>Simple Dashboard</Typography.Title>
            <Space>
                <Badge count={10}dot>
                    <MailOutlined style={{fontSize:24}}/>
                </Badge>
                <Badge count={4}>
                    <BellFilled style={{fontSize:24}}/>
                </Badge>
            </Space>
        </div>
    );
}

export default AppHeader