const TheaterFilmList = function ({theaterFilm}) {
    // console.log('theaterFilm', theaterFilm);
    return (
        <>
            {theaterFilm.tenPhim}
            <img src={theaterFilm.hinhAnh} alt="" height={50} width={50}/>
            {
                theaterFilm.lstLichChieuTheoPhim.map(function (filmSchedule) {
                    return (
                        <div>
                            <h1 >Lịch Chiếu: {(new Date(filmSchedule.ngayChieuGioChieu).toLocaleString())} </h1>
                            <h1 >Tên Rạp: {filmSchedule.tenRap} </h1>
                            <br></br>
                        </div>
                    )
                })
            }
        </>
    )
}

export default TheaterFilmList;