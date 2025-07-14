import type { ChangeEvent } from "react";

interface Lableinputtype{
  lable: String;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>)=> void;
  type?: string;
}


export function Placeholder({lable,placeholder,onChange,type}: Lableinputtype) {
    return <div>
      <div className="text-xl font-medium text-left py-2">
        {lable}
      </div>
      <input onChange={onChange} type={type || "text"} className="w-full px-2 py-1 border rounded border-slate-400" placeholder={placeholder} required/>
    </div>
}