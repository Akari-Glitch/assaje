import React, { useState } from 'react'
import { NavbarStyles } from '../styles/header/NavbarStyles'
import { HeaderStyles } from '../styles/header/HeaderStyles';
import { Link, NavLink, useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function Navbar() {
    const [showMenu, setShowMenu] = useState<Boolean>(false)
    const handleMenu = () => setShowMenu(!showMenu)
    let location = useLocation();
    let scroll = document.scrollingElement as HTMLElement
    const closeNav = () => {
        scroll.scrollTop = 0;
        setShowMenu(false)
    }

    return (
        <>
            <HeaderStyles>
                <div className="header-content">
                    <div className='logo-container'>
                        <Link to="/" className="logo">
                            <svg width="340px" height="153px" viewBox="0 0 340 153" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <title>Group 22</title>
                                <defs>
                                    <polygon id="path-1" points="0 0 191.8092 0 191.8092 141.547507 0 141.547507"></polygon>
                                    <polygon id="path-3" points="0 1.42108547e-14 58.6129 1.42108547e-14 58.6129 40.3113003 0 40.3113003"></polygon>
                                    <polygon id="path-5" points="2.84217094e-14 1.42108547e-14 96.362997 1.42108547e-14 96.362997 118.453384 2.84217094e-14 118.453384"></polygon>
                                </defs>
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Group-22">
                                        <path d="M225.3669,25.953073 C225.5039,25.902073 225.6239,25.825073 225.7299,25.736073 L238.8179,41.520073 C238.8179,41.520073 245.2519,36.223073 252.0259,33.681073 C258.8029,31.139073 266.7279,31.051073 266.7279,31.051073 L266.0909,10.846073 C266.2479,10.849073 266.4049,10.826073 266.5619,10.766073 C267.2219,10.520073 267.5559,9.78307303 267.3079,9.12407303 C267.0589,8.46407303 266.3249,8.13007303 265.6649,8.37807303 C265.0059,8.62407303 264.6689,9.36107303 264.9169,10.020073 C265.0799,10.452073 265.4479,10.737073 265.8679,10.820073 C265.3449,14.884073 263.7179,26.247073 261.8499,26.190073 C259.9739,26.133073 256.7409,13.585073 255.6639,9.17207303 C255.6989,9.16407303 255.7299,9.15807303 255.7639,9.14707303 C256.4239,8.89807303 256.7579,8.16407303 256.5099,7.50507303 C256.2639,6.84507303 255.5269,6.50807303 254.8679,6.75607303 C254.2079,7.00507303 253.8739,7.73907303 254.1219,8.39807303 C254.3189,8.92707303 254.8249,9.23807303 255.3589,9.22107303 C255.5009,13.610073 255.7469,25.770073 254.1309,26.376073 C252.4459,27.007073 244.7489,12.736073 242.5559,8.59007303 C243.1159,8.29307303 243.3869,7.62407303 243.1589,7.01607303 C242.9099,6.35607303 242.1729,6.02207303 241.5139,6.27107303 C240.8539,6.51907303 240.5199,7.25307303 240.7679,7.91307303 C240.9939,8.51807303 241.6309,8.84407303 242.2419,8.70407303 C243.2589,13.279073 246.6289,29.074073 244.9409,29.706073 C243.3159,30.317073 235.6909,20.893073 233.0719,17.577073 C233.4779,17.240073 233.6519,16.672073 233.4549,16.149073 C233.2089,15.489073 232.4719,15.155073 231.8129,15.404073 C231.1529,15.649073 230.8189,16.386073 231.0669,17.046073 C231.3129,17.706073 232.0499,18.040073 232.7089,17.794073 C232.7489,17.777073 232.7839,17.754073 232.8239,17.737073 C234.6879,21.558073 239.9119,32.616073 238.3549,33.675073 C236.8049,34.732073 228.6849,27.992073 225.8779,25.590073 C226.1749,25.248073 226.2839,24.762073 226.1149,24.308073 C225.8669,23.648073 225.1299,23.314073 224.4699,23.563073 C223.8109,23.811073 223.4759,24.545073 223.7249,25.205073 C223.9699,25.865073 224.7069,26.199073 225.3669,25.953073" id="Fill-1" fill="#008D36"></path>
                                        <g id="Group-5">
                                            <mask id="mask-2" fill="white">
                                                <use xlinkHref="#path-1"></use>
                                            </mask>
                                            <g id="Clip-4"></g>
                                            <path d="M148.3412,133.370473 C135.6952,128.364473 125.4202,118.880473 116.9902,107.288473 C108.8222,96.224473 102.4992,83.313473 97.7592,70.668473 C95.3852,63.819473 93.0152,55.915473 90.6452,48.538473 C87.4832,36.683473 85.3762,25.617473 83.7942,14.817473 C84.3222,12.446473 84.3222,9.81047303 83.7942,6.91447303 C83.5312,5.33247303 83.0062,3.48747303 82.2142,1.90847303 C80.6322,-1.25252697 76.6832,-0.198526974 76.6832,2.96247303 C77.2082,7.44047303 77.4712,11.655473 77.9992,16.133473 C76.6832,24.038473 73.5212,31.940473 70.0942,38.528473 C59.2942,59.867473 41.1162,82.788473 23.7272,99.386473 C18.1962,104.652473 11.6102,110.186473 5.5502,114.402473 C5.5502,112.820473 6.0782,110.977473 6.3412,108.867473 C6.8672,107.025473 4.4962,105.709473 3.1802,107.288473 C1.5982,109.395473 0.5442,112.557473 0.0182,114.927473 C-0.2468,119.142473 2.3892,121.515473 4.7592,121.250473 C6.0782,121.250473 6.8672,120.725473 12.6642,116.509473 C17.9332,112.557473 22.9392,108.079473 27.6802,103.864473 C31.3702,100.702473 34.5312,97.541473 37.1642,94.379473 C46.3852,95.959473 57.4492,95.959473 66.9362,95.171473 C74.3122,94.379473 83.5312,92.797473 90.6452,89.110473 L66.4082,89.110473 C59.0312,89.110473 51.9172,89.110473 42.4332,88.845473 C55.0792,74.620473 67.1992,58.022473 75.6262,41.424473 C77.4712,37.737473 78.7902,34.313473 79.8442,31.149473 C81.1612,37.474473 82.2142,43.797473 84.3222,50.120473 C86.1672,58.285473 89.0662,65.927473 91.4362,73.041473 C96.4422,85.949473 103.2902,99.120473 111.9842,110.449473 C121.4682,123.095473 132.7972,133.370473 146.7592,138.111473 C159.6702,143.380473 175.2112,142.854473 191.8092,134.686473 C175.2112,140.218473 160.4582,138.902473 148.3412,133.370473" id="Fill-3" fill="#1D1D1B" mask="url(#mask-2)"></path>
                                        </g>
                                        <path d="M123.1062,95.045573 C126.8792,96.050573 130.9022,96.050573 137.4422,96.050573 C142.7262,96.050573 147.2522,96.050573 149.5172,96.553573 C147.2522,99.574573 141.4692,103.344573 138.4502,105.609573 C136.9402,106.365573 135.9342,107.119573 134.4272,107.873573 C134.4272,106.365573 132.9162,105.860573 131.6562,106.365573 C130.1492,107.119573 128.3872,108.882573 128.3872,110.892573 C128.3872,112.403573 129.8972,113.911573 132.4132,113.408573 C134.6782,112.651573 138.9532,110.892573 140.7122,109.384573 C144.4852,107.371573 149.5172,104.101573 152.5352,101.082573 C154.0432,99.574573 155.5542,97.561573 155.5542,95.799573 C155.5542,93.534573 154.0432,92.278573 152.0332,91.524573 C149.0142,90.770573 144.4852,90.770573 137.6942,90.518573 C133.6702,90.518573 123.8602,90.518573 121.8472,88.505573 C122.3492,86.240573 128.6382,82.217573 130.6512,80.960573 C135.1802,77.690573 142.2202,73.412573 148.0092,70.896573 C154.8002,68.129573 155.0512,69.388573 155.8052,67.878573 C156.5592,66.621573 155.8052,64.859573 154.2952,64.356573 C152.0332,63.603573 148.2602,64.859573 145.7442,65.867573 C139.9582,68.631573 132.9162,72.658573 127.1302,76.180573 C124.1112,78.444573 121.0932,80.706573 118.8282,83.222573 C117.0662,85.487573 115.8122,88.254573 117.0662,90.770573 C118.0742,93.032573 120.3392,94.542573 123.1062,95.045573" id="Fill-6" fill="#1D1D1B"></path>
                                        <path d="M145.7544,83.220273 C146.7624,85.987273 149.0244,86.995273 151.7914,87.749273 C156.5694,89.006273 164.1174,89.257273 170.9084,89.257273 C176.6944,89.763273 183.4854,90.011273 186.0014,91.522273 C185.2474,93.033273 181.4754,95.797273 179.9644,96.805273 C176.6944,98.818273 170.1544,102.588273 166.3794,102.839273 C166.3794,102.588273 166.8844,101.834273 166.8844,101.080273 C167.1364,100.324273 166.3794,98.818273 164.6204,99.824273 C162.6094,100.578273 161.6014,102.839273 162.3554,104.856273 C162.6094,106.363273 164.1174,107.369273 167.6384,107.117273 C171.4114,106.615273 175.9404,104.350273 179.2104,102.839273 C182.2264,101.080273 185.7504,99.070273 188.2664,96.805273 C190.2794,95.294273 192.0384,93.033273 191.7844,90.517273 C191.2814,88.252273 189.5224,86.995273 187.2584,86.239273 C183.4854,84.479273 178.2024,84.479273 171.4114,83.974273 C164.8714,83.725273 155.0614,83.220273 151.7914,81.712273 C153.5534,79.950273 157.8284,77.688273 160.0934,76.429273 C166.1274,73.410273 174.4324,70.894273 181.2234,69.386273 C181.9744,68.884273 186.0014,68.632273 187.2584,68.884273 C190.2794,70.140273 192.0384,64.860273 188.7684,63.601273 C187.2584,62.847273 185.7504,63.349273 183.7364,63.349273 C178.2024,64.103273 167.6384,67.122273 157.8284,71.651273 C154.8104,72.656273 151.2894,74.670273 149.0244,76.429273 C146.7624,78.442273 145.0004,80.707273 145.7544,83.220273" id="Fill-8" fill="#1D1D1B"></path>
                                        <path d="M206.3138,104.855173 C210.8428,103.598173 214.8668,101.836173 218.6428,99.572173 C222.1608,97.561173 225.4338,95.296173 228.1978,93.032173 C228.1978,95.799173 229.2058,98.315173 230.7108,100.326173 C234.2348,105.106173 241.6088,103.764173 248.9028,101.751173 C242.1118,102.507173 236.7508,101.082173 234.4888,97.310173 C233.4808,95.799173 232.9758,91.524173 235.2408,86.995173 C238.0078,84.730173 239.7668,82.468173 241.2808,79.450173 C242.0318,78.444173 242.0318,76.934173 241.0258,76.180173 C240.2728,74.920173 238.2588,74.669173 236.7508,75.677173 C235.2408,76.934173 233.7328,78.444173 232.2248,80.706173 C231.2168,82.217173 229.9598,83.976173 229.2058,86.241173 C226.1848,89.762173 220.6528,93.534173 216.8778,95.799173 C213.1048,97.561173 209.3348,99.069173 205.0548,100.326173 C204.0518,100.326173 201.0308,100.577173 200.2768,99.572173 C199.7738,98.818173 199.5228,96.807173 200.2768,94.291173 C202.5438,89.762173 208.5788,84.730173 212.6018,81.460173 C215.6208,79.198173 219.3938,76.431173 222.9178,74.920173 C223.6688,74.920173 226.9418,73.915173 226.9418,74.920173 C226.9418,75.423173 226.6898,76.431173 226.6898,76.934173 C225.1788,78.696173 227.6958,81.460173 229.7088,79.450173 C230.4598,79.198173 231.4678,77.688173 231.9738,75.423173 C232.2248,72.407173 230.4598,69.640173 226.9418,68.886173 C221.4068,68.632173 213.8618,73.412173 209.3348,77.185173 C204.3028,80.960173 198.0118,86.743173 195.2478,92.278173 C194.2398,95.799173 193.7368,100.326173 196.5038,102.842173 C198.7688,105.609173 202.5438,105.609173 206.3138,104.855173" id="Fill-10" fill="#1D1D1B"></path>
                                        <g id="Group-14" transform="translate(281.387100, 66.254137)">
                                            <mask id="mask-4" fill="white">
                                                <use xlinkHref="#path-3"></use>
                                            </mask>
                                            <g id="Clip-13"></g>
                                            <path d="M7.548,23.4109362 C9.056,20.1409362 11.823,15.8659362 14.339,12.8469362 C18.868,8.06693623 23.9,6.05293623 26.162,5.80493623 C27.67,5.29893623 28.427,6.05293623 28.427,6.80993623 C29.184,9.82893623 26.919,15.1089362 24.906,17.8759362 C21.887,22.6569362 17.863,26.9319362 12.58,29.4479362 C10.57,30.7049362 8.053,31.7129362 5.789,32.9689362 C5.286,30.2019362 6.54,26.1779362 7.548,23.4109362 M40.501,35.2339362 C34.464,35.4849362 28.427,35.9879362 22.393,35.9879362 C18.614,35.9879362 13.337,35.9879362 9.561,35.2339362 C11.32,34.4799362 12.831,33.7229362 14.339,32.9689362 C20.376,30.2019362 25.408,25.6759362 29.435,20.3919362 C32.199,16.6199362 34.716,10.3309362 33.71,5.80493623 C32.953,2.02893623 29.935,-0.232063774 25.66,0.018936226 C20.376,0.520936226 14.088,4.54493623 10.318,8.81993623 C6.794,12.5959362 4.278,16.6199362 2.265,21.1459362 C1.262,24.1649362 0,27.9399362 0,31.4589362 C0,33.7229362 0.757,35.9879362 2.77,37.4989362 C7.297,40.7659362 16.604,40.5169362 22.393,40.0119362 C28.427,39.7609362 34.716,38.5039362 40.753,37.4989362 C46.79,36.7419362 52.824,35.2339362 58.613,33.9749362 C52.573,34.4799362 46.539,34.7309362 40.501,35.2339362" id="Fill-12" fill="#1D1D1B" mask="url(#mask-4)"></path>
                                        </g>
                                        <g id="Group-17" transform="translate(181.944787, 34.512189)">
                                            <mask id="mask-6" fill="white">
                                                <use xlinkHref="#path-5"></use>
                                            </mask>
                                            <g id="Clip-16"></g>
                                            <path d="M1.10741326,79.5430837 C1.10741326,79.5430837 1.62741326,78.1320837 4.36041326,77.8980837 C6.45041326,77.7180837 10.8054133,80.0860837 17.9144133,85.4750837 C25.0184133,90.8610837 29.0784133,92.7460837 29.0824133,92.7480837 L29.0824133,92.7480837 C29.0744133,92.7480837 26.9524133,92.6700837 14.0874133,84.0670837 C7.38741326,79.5890837 5.81341326,76.8810837 1.10741326,79.5430837 M64.5444133,7.13008369 C68.3714133,4.48608369 71.3314133,7.12108369 71.3394133,7.12808369 L71.3394133,7.12908369 C71.3314133,7.12608369 68.6904133,6.00508369 64.8324133,8.48308369 C59.6574133,11.8060837 61.1064133,25.3930837 61.1084133,25.4060837 C58.9984133,17.3610837 59.5724133,10.5680837 64.5444133,7.13008369 M79.9194133,0.109083687 C76.0094133,0.409083687 71.7404133,3.83008369 71.7404133,3.83008369 C71.7404133,3.83008369 69.3324133,3.74708369 65.0404133,5.67508369 C59.7884133,8.03108369 58.2634133,14.3940837 58.7144133,19.6570837 C59.1664133,24.9230837 63.5444133,35.6010837 65.9914133,43.4230837 C67.5024133,48.2490837 67.2444133,45.8530837 71.5544133,63.5990837 C75.8664133,81.3450837 75.2184133,86.6630837 72.1574133,93.4770837 C68.3984133,101.850084 53.6684133,101.699084 42.9844133,98.4800837 C32.2984133,95.2650837 19.4304133,85.3380837 13.5324133,81.5200837 C7.63241326,77.7010837 5.89341326,77.2020837 3.62841326,77.2840837 C1.36641326,77.3700837 0.304413263,79.0860837 0.0304132634,80.1230837 C-0.240586737,81.1600837 1.37241326,81.9970837 1.97541326,81.1970837 C2.33841326,80.7140837 4.01441326,79.6920837 5.87041326,83.1360837 C7.72441326,86.5770837 17.8504133,102.156084 33.7574133,111.423084 C49.6644133,120.693084 69.1494133,119.294084 76.6694133,115.735084 C84.1624133,112.188084 89.7034133,109.821084 92.8104133,86.7600837 C95.9174133,63.7020837 99.2274133,36.1290837 92.1594133,12.8170837 C88.0324133,-0.793916313 83.8284133,-0.193916313 79.9194133,0.109083687" id="Fill-15" fill="#CC171A" mask="url(#mask-6)"></path>
                                        </g>
                                        <path d="M246.7775,42.995473 C250.6355,40.517473 253.2755,41.637473 253.2845,41.641473 L253.2845,41.640473 C253.2755,41.633473 250.3165,38.998473 246.4885,41.641473 C241.5175,45.080473 240.9435,51.873473 243.0535,59.918473 C243.0515,59.905473 241.6025,46.318473 246.7775,42.995473" id="Fill-18" fill="#FEFEFE"></path>
                                        <path d="M211.0271,127.260673 L211.0271,127.260673 C211.0231,127.258673 206.9631,125.373673 199.8591,119.986673 C192.7511,114.597673 188.3951,112.230673 186.3051,112.410673 C183.5721,112.644673 183.0521,114.055673 183.0521,114.055673 C187.7591,111.393673 189.3321,114.100673 196.0321,118.578673 C208.8971,127.182673 211.0191,127.260673 211.0271,127.260673" id="Fill-20" fill="#FEFEFE"></path>
                                    </g>
                                </g>
                            </svg>
                        </Link>
                    </div>

                    <div className={showMenu ? "menu-icon-container menu-hidden" : "menu-icon-container"} onClick={handleMenu}>
                        {showMenu ? <CloseIcon className="menu-icon"></CloseIcon>
                            : <MenuIcon className="menu-icon" ></MenuIcon>

                        }

                    </div>
                </div>
            </HeaderStyles>
            <NavbarStyles show={showMenu ? "translate(0)" : "translate(-100%)"}>
                <div className='nav-content'>
                    <ul>
                        <li onClick={closeNav}>
                            <NavLink to={`/`} className={() =>
                                location.pathname === "/" ? "active-link" : undefined
                            }>HOME</NavLink>
                        </li>
                        <li onClick={closeNav}>
                            <NavLink to={`menu`} className={({ isActive }) =>
                                isActive ? "active-link" : undefined
                            }>MENU</NavLink>
                        </li>
                        <li onClick={closeNav}>
                            <NavLink to={`location`} className={({ isActive }) =>
                                isActive ? "active-link" : undefined
                            }>LOCATION</NavLink>
                        </li>
                        <li onClick={closeNav}>
                            <NavLink to={`about`} className={({ isActive }) =>
                                isActive ? "active-link" : undefined
                            }>ABOUT</NavLink>
                        </li>
                        <li onClick={closeNav}>
                            <NavLink to={`franchising`} className={({ isActive }) =>
                                isActive ? "active-link" : undefined
                            }>FRANCHISING</NavLink>
                        </li>
                        <li onClick={closeNav}>
                            <NavLink to={`carriera`} className={({ isActive }) =>
                                isActive ? "active-link" : undefined
                            }>CARRIERA</NavLink>
                        </li>
                        <li onClick={closeNav}>
                            <NavLink to={`contatti`} className={({ isActive }) =>
                                isActive ? "active-link" : undefined
                            }>CONTATTI</NavLink>
                        </li>
                        <li className="ordina-li" onClick={closeNav}>
                            <a href="https://assaje.ordine.deliveroo.it/it/" target='_blank'>
                                <div className="ordina-btn">
                                    ORDINA ORA
                                </div>
                            </a>
                        </li>

                    </ul>
                </div>
            </NavbarStyles >
        </>
    )
}

export default Navbar