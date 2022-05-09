
// function Markup() {
//     return (
//         <div>
//             <img className="m-4 w-20" src="./logo192.png" alt="" />
//             <h1 className="font-bold m-4 text-4xl">Fun Facts about React</h1>
//             <ul className="m-4 mx-16 list-disc font-medium">
//                 <li>Was first released in 2013</li>
//                 <li>Was originally created by Jordan Walke</li>
//                 <li>Has well over 100k stars on github</li>
//                 <li>Is maintained by Facebook</li>
//                 <li>Power thousands of enterprise apps, including mobile apps</li>
//             </ul>
//         </div>
//     )
// }
// import Header from './Header';

function Header() {
    return (
        <nav className="p-2 flex items-center justify-between px-2 bg-gray-300">
            <div className="cursor-pointer">
                <img src="./logo192.png" width="50px" alt="" />
            </div>
            <ul className="flex gap-3 mr-6">
                <li className="cursor-pointer hover:text-teal-500">Home</li>
                <li className="cursor-pointer hover:text-teal-500">About</li>
                <li className="cursor-pointer hover:text-teal-500">Contact</li>
            </ul>
        </nav>
    )
}

function ReasonToLearn() {
    return (
        <div>
            <Header />
            <div className="p-0">
                <h2 className="font-bold m-4">Reasons to learn React</h2>
                <ul className="mx-10 px-4 m-2 list-disc">
                    <li>It's popular</li>
                    <li>It's amazing</li>
                    <li>Once you learn you learn it making websites will be easy and fun</li>
                </ul>
            </div>
            <OrderedList />
            <Footer />
        </div>
    )
}

function OrderedList() {
    return (
        <div>

        <ol className="mx-10 list-decimal m-4">
            <li>The best manga i want to read is Vagabond by Takehino Inoue</li>
            <li>I am going to watch the memento film today</li>
        </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer className="absolute bottom-0 bg-black text-white w-full text-center p-2 font-bold">
            <small>© 2022 dazzler development. All rights reserved.</small>
        </footer>
    )
}

ReactDOM.render(
    <div>
        {/* <Header /> */}
        <ReasonToLearn />
        {/* <OrderedList /> */}
        {/* <Footer /> */}
    </div>
    ,
    document.querySelector('#root')
)