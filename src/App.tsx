
import { AppProduct } from "./componentes/AppProduct/AppProduct"


export const App = () => {
  
    return (
    //Siempre hay que retornar un solo elemento, por eso se envuelven los componentes en <></>
    <div style={{display: 'flex', flexDirection: 'column', gap: '2vh'}}>
        <AppProduct/>
        
    </div>
  )
}
