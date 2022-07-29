import "./style.scss";
import Img from "../../assets/images/qrCode.png";

export default function QrCode() {
    return (
        <div className="QrCode">
            <img className="QrCode__image" src={Img} alt="Code" />
            <h1 className="QrCode__title">
                Improve your front-end skills by building projects
            </h1>
            <p className="QrCode__desc">
                Scan the QR code to visit Frontend Mentor and take your coding
                skills to the next level
            </p>
        </div>
    );
}
