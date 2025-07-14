import { Qutoes } from "../components/Qutoes"
import { Input } from "../components/Input"
export const Signup = () => {
    return <div className="grid grid-cols-1 lg:grid-cols-2  ">
            <div >
               <Input/>
            </div>
            
            <div className="hidden lg:block">
           <Qutoes/>
          </div>
        </div>
        
    
}