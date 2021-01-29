import Image from "next/image";
import styles from "../../../styles/Home.module.scss";
function Footer() {
    return (
        <div className="footer">
            <div>
                <p>
                    © 2019 - Bản quyền của CTCP PHÁT TRIỂN SẢN PHẨM SÁNG TẠO VIỆT
        </p>
                <p>
                    Giấy chứng nhận ĐKKD số 0108150321 do Sở Kế hoạch và Đầu tư Thành phố
                    Hà Nội cấp ngày 29/01/2018 123C Thụy Khuê, Tây Hồ, Hà Nội
        </p>
            </div>

            <div>
                <Image
                    src="/bct-5Sz.png"
                    alt="Picture of the author"
                    width={80}
                    height={30}
                />
            </div>
        </div>
    );
}

export default Footer;
