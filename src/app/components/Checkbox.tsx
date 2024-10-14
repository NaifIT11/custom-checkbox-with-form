


type CheckboxProps =  {
    checked: boolean,
    onCheckedChange: (checked: boolean) => void
}

export default function Checkbox({checked , onCheckedChange}: CheckboxProps){
    return <button onClick={() => onCheckedChange(!checked)} role="checkbox" aria-checked={checked}></button>
}