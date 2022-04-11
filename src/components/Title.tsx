export default function Title(props) {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="px-10 py-2 text-5xl">
                {props.children}
            </h1>
            <hr className="border-2 border-purple-500 bg-purple-500" />
        </div>
    )
}