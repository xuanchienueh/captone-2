import { useEffect } from "react";
import { useState } from "react";
import {manageFilmServices} from "../../services/manageFilmServices";
import { useParams } from "react-router-dom";
import styles from "./CheckOut.module.css";


const CheckOut = function () {
    const [seatList, setSeatList] = useState([]);
    const [checkOutInfo, setCheckOutInfo] = useState(null);
    const [bookingSeat, setBookingSeat] = useState([]);
    let { id } = useParams();    
    const loadData = async function() {
        const result = await manageFilmServices.getCheckOutInfo(id);
        setSeatList(result.data.content.danhSachGhe);
        setCheckOutInfo(result.data.content.thongTinPhim);
        console.log("result", result.data.content);
    }

    const onBooking = function (seat) {
        
        const idx = bookingSeat.findIndex((ghe) => ghe.stt === seat.stt)

        console.log("idx", idx);
        if (idx !== -1) {
            let a = [...bookingSeat]
            a.splice(idx,1)

            setBookingSeat([...a]);
        }
        else if (seat.taiKhoanNguoiDat === "string") {

            const limit = bookingSeat.length
            if (limit >= 9) {
                alert("Chỉ đặt tối đa 9 chỗ")
                return;
            }

            setBookingSeat(bookingSeat => [...bookingSeat, seat]);
        }  

    }

    // kiểm tra ghế đã đặt hay chưa
    const isBooking = function (seat) {
        const idx = bookingSeat.findIndex((ghe) => ghe.stt === seat.stt)

        return idx !== -1;
    }

    useEffect(() => {
        loadData();
      }, [])

    if (checkOutInfo === null) {
        return ''
    }

    console.log("bookingSeat", bookingSeat);

    return (
        <div className={`${styles.ticketBooking}`}>
            <div className={`${styles.container}`}>
                <div className={`${styles.checkOut}`}>
                    <div className={`${styles.seat}`}>
                            <div className={`${styles.screen}`}><h1>Màn Hình</h1></div>
                            <div className={`${styles.typeSeat}`}>
                                {seatList.map(function(item){
                                            return (
                                            <button className={`${styles[item.loaiGhe]} ${item.taiKhoanNguoiDat === "string" ? "" : styles.daDat} ${isBooking(item) ? styles.dangChon : "" }`} 
                                            onClick={() => onBooking(item)}>
                                                {item.taiKhoanNguoiDat === "string" ? item.stt : "X" }
                                            </button>
                                            )
                                        }
                                    )
                                }
                            </div>
                    </div>
                    <div className={`${styles.checkOutInfo}`}>
                            <div>
                                <div className={`${styles.nameFilm}`}>
                                    <div><img src={checkOutInfo.hinhAnh} alt="" width={75} height={75} /></div>
                                    <div className={`${styles.thongTin}`}>
                                        <h1>{checkOutInfo.tenPhim}</h1>
                                        <h2>{checkOutInfo.tenCumRap}</h2>
                                        <h3>{checkOutInfo.diaChi}</h3>
                                        <div className={`${styles.thoiGian}`}>
                                            <h2>Giờ : {checkOutInfo.gioChieu}</h2>
                                            <h2>Ngày : {checkOutInfo.ngayChieu}</h2>
                                            <h2>{checkOutInfo.tenRap} </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.seatInfo}`}>
                                    <h1>Thông Tin Ghế Chọn : </h1>
                                    <div className={`${styles.selectSeat}`}>
                                        {bookingSeat.map(function(seat){
                                            return (
                                                <h1>
                                                    {seat.tenGhe} - {seat.giaVe.toLocaleString()} đ
                                                </h1>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className={`${styles.total}`}>
                                    <h1>Tổng Tiền : </h1>
                                    <div className={`${styles.price}`}>
                                    <h1>
                                    {
                                        bookingSeat.reduce((accumulator, object) => {
                                            return accumulator + object.giaVe;
                                        }, 0).toLocaleString()
                                    } đ
                                    </h1>
                                    </div>
                                </div>
                            </div>
                            <button className={`${styles.datVe}`}><a href="/total">Đặt Vé</a></button>
                    </div>
                </div>    
                <div className={`${styles.legend}`}>
                    <ul>
                        <li>
                            <button className={`${styles.grey}`}></button>
                            <h1>Ghế Trống</h1>
                        </li>
                        <li>
                            <button className={`${styles.blue}`}></button>
                            <h1>Ghế Bạn Đã Đặt</h1>
                        </li>
                        <li>
                            <button className={`${styles.orange}`}></button>
                            <h1>Ghế Vip</h1>
                        </li>
                        <li>
                            <button className={`${styles.green}`}></button>
                            <h1>Ghế Bạn Đang Chọn</h1>
                        </li>
                        <li>
                            <button className={`${styles.red}`}></button>
                            <h1>Ghế Đã Bán</h1>
                        </li>
                    </ul>
                </div>
            </div>
        </div>    
    )
}

export default CheckOut;