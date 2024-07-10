import useFetch from "../use-fetch";
import {useRef} from "react";

export default function ScrollToTopAndBottom() {

    const {data, error, pending} = useFetch(
        "https://dummyjson.com/products?limit=100",
        {}
    );

    const bottomref = useRef(null)

    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    function handleScrollToBottom() {
        bottomref.current.scrollIntoView({behavior: 'smooth'})
    }

    if (error) {
        return <h1>Error occured ! Please try again.</h1>
    }

    if (pending) {
        return <h1>Loading ! Please wait</h1>
    }

    return <div>
        <h1>Scroll To Top And Bottom Feature</h1>
        <h3>This is the top section</h3>
        <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
        <ul style={{listStyle: 'none'}}>
            {
                data && data.products && data.products.length
                    ? data.products.map((item) => <li>{item.title}</li>)
                    : null
            }
        </ul>
        <button onClick={handleScrollToTop}>Scroll to Top</button>
        <div ref={bottomref}></div>
        <h3>This is the bottom of the page</h3>
    </div>

}