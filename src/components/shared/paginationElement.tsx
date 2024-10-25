export default function PaginationElement({text, onClick}:{text:string, onClick: (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>void}){
    return(
        <a href="#" id={text} className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-white bg-purple-500 border rounded-lg hover:bg-purple-700 hover:text-gray-200"
        onClick={onClick}>
            {text}
        </a>
    )
}