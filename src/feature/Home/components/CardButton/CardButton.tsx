import { Card } from "antd";
import "./CardButtonStyle.css";

interface CardButtonProps {
  imgURL: string;
  title: string;
}

export const CardButton = ({ imgURL, title }: CardButtonProps) => {
  return (
    <div>
      <Card className="card-item" style={{ width: 250 }} hoverable={true}>
        <img src={imgURL} className="card-img" alt={title}/>
        <Card.Meta
          title={title}
          style={{ textAlign: "center", color: "#061161" }}
        />
      </Card>
    </div>
  );
};
