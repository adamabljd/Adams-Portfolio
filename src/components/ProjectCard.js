import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, onClick }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx" onClick={onClick}>
                <img src={imgUrl} />
                <div className="proj-txtx p-3">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}