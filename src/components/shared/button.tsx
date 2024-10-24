export default function Button({color,innerText,onClick}:{color: string, innerText: string, onClick: (e:React.MouseEvent<HTMLButtonElement>)=>void}){
        return(
                <button
            className={"bg-"+color+"-500 hover:bg-"+color+"-700 text-white font-bold py-2 px-4 rounded"}
            onClick={onClick}>
                {innerText}
            </button>
        )
}