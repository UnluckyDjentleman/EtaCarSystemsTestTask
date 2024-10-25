export default function PaginationElement({text, onClick, isAbled}:{text:string, 
    onClick: (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>void,
    isAbled: boolean}){
        const styleForDisable=!isAbled?'pointer-events-none opacity-50 ':''
    return(
        <a id={text} className={styleForDisable+'flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-purple-500 border rounded-lg hover:bg-purple-700 hover:text-gray-200'}
        onClick={onClick}>
            {text}
        </a>
    )
}