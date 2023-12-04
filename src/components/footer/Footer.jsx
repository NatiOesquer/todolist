import React from 'react'
import "./footer.css"


export default function Footer() {
    return (
        <div className='footer'>
            <img className='logoApp' src="assets/medias2-footer.png" alt="Logo App" />
            <div className='texto'>
                <span className='hecho'>Hecho con ❤️ por:</span>
                <ul className='nosotros'>
                    <li className='cadaUno'>
                        <a href="https://github.com/predicador2023" target='_blank'><img className='logoGit' src="assets/icon-github.png" alt="Github" /></a>
                        <p>Bedoya José</p>
                    </li>
                    <li className='cadaUno'>
                        <a href="https://github.com/Licia1911" target='_blank'><img className='logoGit' src="assets/icon-github.png" alt="Github" /></a>
                        <p>Carreras Licia</p>
                    </li>
                    <li className='cadaUno'>
                        <a href="https://github.com/pfidel" target='_blank'><img className='logoGit' src="assets/icon-github.png" alt="Github" /></a>
                        <p>Fidel Patricia</p>
                    </li>
                    <li className='cadaUno'>
                        <a href="https://github.com/pmgutierrez" target='_blank'><img className='logoGit' src="assets/icon-github.png" alt="Github" /></a>
                        <p>Gutierrez Pablo</p>
                    </li>
                    <li className='cadaUno'>
                        <a href="https://github.com/NatiOesquer" target='_blank'><img className='logoGit' src="assets/icon-github.png" alt="Github" /></a>
                        <p>Oesquer Natalia</p>
                    </li>
                </ul>
            </div>

            <img className='logoApp' src="assets/medias2-footer.png" alt="Logo App" />

        </div>

    )
}