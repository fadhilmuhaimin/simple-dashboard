import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined,
  } from "@ant-design/icons";

function SideMenu(){
    const navigate = useNavigate();
    return(<div className="SideMenu">
        <Menu
        onClick={(item => {
            navigate(item.key);
        })}
            items={[
                {
                    label: "Dashbaord",
                    icon: <AppstoreOutlined />,
                    key: "/",
                  },
                  {
                    label: "Inventory",
                    key: "/inventory",
                    icon: <ShopOutlined />,
                  },
                  {
                    label: "Orders",
                    key: "/orders",
                    icon: <ShoppingCartOutlined />,
                  },
                  {
                    label: "Customers",
                    key: "/customers",
                    icon: <UserOutlined />,
                  },
                
            ]}
        ></Menu>
        </div>);
}

export default SideMenu