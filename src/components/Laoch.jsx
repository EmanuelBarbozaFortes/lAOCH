import macaco from '../img/macaco-dj-removebg-preview.png'
import style from './Laoch.module.css'

export function Laoch(){
  return(
    <body>
      <div className={style.container}>
        <main >
          <img className={style.imgMacaco} src={macaco} alt="" />
          <h1 className={style.titleLaoch}>Bailão do Laoch</h1>
          <p>Em Breve</p>
          <p>07/12</p>
        </main>
      </div>
    </body>
  )
}