import { useState } from "react";
import BranchTheaterList from "./BranchTheaterList";
import styles from "./index.module.css"

const BrandTheaterList = function ({brand, activeBrand}) {
    const [activeBranch, setActiveBranch] = useState()

    return (
        <>
            <ul>
                
                    {
                        activeBrand === brand.maHeThongRap 
                        ?
                        brand.lstCumRap.map(function (branchTheater) {
                            return <li onClick={()=> setActiveBranch(branchTheater.maCumRap)}><BranchTheaterList activeBranchTheater={activeBranch} branchTheater={branchTheater} /></li>
                        })
                        : ''
                    }
                
            </ul>
        </>
    )
}

export default BrandTheaterList;