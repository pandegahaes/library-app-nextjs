import Link from 'next/link';

export default function Cards(props) {
    return (
        <Link href="#">
            <div
                className="flex flex-wrap w-1/3 cursor-pointer"
                onClick={props.onClick}
            >
                <div className="w-full p-1">
                    <div className="flex justify-center">
                        <div className="flex flex-col rounded-lg bg-white shadow-lg">
                            <img
                                className="w-full xl:h-80 object-cover rounded-t-lg"
                                src={props.image}
                                alt="image"
                            />
                            <div className="p-6 flex flex-col justify-start">
                                <h5 className="text-slate-600 text-base font-medium mb-2">
                                    {props.title}
                                </h5>
                                <p className="text-slate-500 text-xs mb-2">
                                    {props.category}
                                </p>
                                <p className="text-slate-600 text-sm font-medium mb-2">
                                    {props.author}
                                </p>
                                <p className="text-slate-500 text-base">
                                    {props.synopsis}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}