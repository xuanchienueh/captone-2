import TheaterFilmList from "./TheaterFilmList";
import styles from "./index.module.css"

const BranchTheaterList = function ({ branchTheater, activeBranchTheater }) {
    console.log('brandTheater:', branchTheater);
    console.log('activeBranchTheater:', activeBranchTheater);
    return (
        <>
            <div className={styles.CumRap}>
                <img src={branchTheater.hinhAnh} alt={branchTheater.tenCumRap} height={50} width={50} />
                <h1>Ten cum rap {branchTheater.tenCumRap}</h1>
                <h1>Ten Phim {branchTheater.diaChi}</h1>
                {
                    activeBranchTheater  === branchTheater.maCumRap
                    ?
                    branchTheater.danhSachPhim.map(function (film) {
                        return <TheaterFilmList theaterFilm={film} />;
                    })
                    :
                    ""
                }
            </div>
        </>
    )
}

export default BranchTheaterList;