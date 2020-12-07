import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export default ({ btnHandler }) => {
  return (
    <Button
      className="col__btn_remove"
      type="primary"
      shape="round"
      icon={<DeleteOutlined />}
      size="large"
      onClick={() => {
        btnHandler();
      }}
    >
      Удалить
    </Button>
  );
};
