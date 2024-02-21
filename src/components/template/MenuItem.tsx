import Link from 'next/link'

interface MenuProps {
    url?: string,
    text: string,
    icon: any,
    className?: string,
    onClick?: (evento: any) => void
}

export default function MenuItem(props: MenuProps) {

    function renderLink() {
       return(
            <span className={`flex flex-col justify-center items-center h-20 w-20 text-gray-600  dark:text-gray-200 ${props.className}`}>
                {props.icon}
                <span className={`text-xs font-light`}>
                    {props.text}
                </span>
            </span>
       )
    }

    return (
        <li onClick={props.onClick} className={`hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-600`}>
            {props.url ? (
                <Link href={props.url}>
                    {renderLink()}
                </Link>
            ):(
                renderLink()
            )}
            
        </li>
    )
}