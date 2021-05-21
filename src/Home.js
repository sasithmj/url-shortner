import { useEffect, useState } from 'react';
import './home.css';

const Home = () => {

    let [data, setData] = useState([]);
    let [input,setInput]=useState('');
    let [ispending,setPending]=useState(false);

    const shurl = () => {
        setPending(true);
        fetch(`https://api.shrtco.de/v2/shorten?url=${input}/very/long/link.html`)
            .then((response) => {
                return response.json()
            }).then((dt) => {
                console.log(dt.result['full_short_link']);
                setData([...data,{'original_url':input,'shurl':dt.result['full_short_link']}]);
                setInput('');
                setPending(false);

            })
    }

    const addUrl=()=>{
        shurl() 
        console.log(input);
        

    }
    useEffect(() => {
        console.log(data);
        // shurl() 
    }, [data])





    return (
        <div className="home">
            <div className="nav-bar">
                <div className="nav-com">
                    <div className="logo"></div>
                    <div className="ham"></div>
                    <div className="nav-items">
                        <h4>Features</h4>
                        <h4>Pricing</h4>
                        <h4>Resources</h4>

                    </div>
                </div>
                <div className="nav-dis">
                    <div className="nav-image"></div>
                    <div className="discription">
                        <h1>More than just shorter links</h1>
                        <p> Build your brand’s recognition and get detailed insights
                        on how your links are performing.</p>
                        <div className="get-started-button">Get Started</div>
                    </div>
                </div>
            </div>

            <div className="sh-link-container">
                <input type='text' placeholder="shorten a link here..." value={input} onChange={event=>setInput(event.target.value)}/>
                <div className="sh-it-button" onClick={shurl}>Shoeten it!</div>
            </div>
            {ispending&&<div className="loader"></div>}
            {
                data.map((url) => (
                    <div className="pre">
                        <div className="or-url">{url['original_url']}</div>
                        <div className="sh-url">{url['shurl']}</div>
                        <div className="sh-it-button">Copy</div>
                    </div>
                ))
            }

            <div className="discription dis2" style={{ padding: '24px' }}>
                <h2>Advanced Statistics</h2>
                <p>  Track how your links are performing across the web with our
                    advanced statistics dashboard.</p>
            </div>

            <div className="chart">
                <div className="line"></div>

                <div className="chart-dis ch1">
                    <div className="ch-img img1"></div>
                    <h3>Brand Recognition</h3>
                    <p>  Boost your brand recognition with each click. Generic links don’t
                    mean a thing. Branded links help instil confidence in your content.</p>
                </div>


                <div className="chart-dis ch2">
                    <div className="ch-img img2"></div>
                    <h3>Detailed Records</h3>
                    <p>  Gain insights into who is clicking your links. Knowing when and where
                        people engage with your content helps inform better decisions.</p>
                </div>

                <div className="chart-dis ch3">
                    <div className="ch-img img3"></div>

                    <h3> Fully Customizable</h3>
                    <p>  Improve brand awareness and content discoverability through customizable
                        links, supercharging audience engagement.</p>
                </div>



            </div>
            <div className="get-start">
                <h2 style={{ color: 'white' }}>Boost your links today</h2>
                <div className="get-started-button" style={{ margin: "0px" }}>Get Started</div>
            </div>

            <div className="fotter">
                <div className="logo foot" style={{ marginBottom: "32px" }}></div>
                <div className="features">
                    <h3 style={{ color: 'white' }}>Features</h3>
                    <p>link Shortening</p>
                    <p>Branded Linking</p>
                    <p>Analytics</p>
                </div>
                <div className="reso">
                    <h3 style={{ color: 'white' }}>Resources</h3>
                    <p>blog</p>
                    <p>Developers</p>
                    <p>Support</p>
                </div>
                <div className="company">
                    <h3 style={{ color: 'white' }}>company</h3>
                    <p>About</p>
                    <p>Our Team</p>
                    <p>Careers</p>
                    <p>Contact</p>
                </div>
                <div className="social">
                    <div className="socialimage fb"></div>
                    <div className="socialimage tw"></div>
                    <div className="socialimage pin"></div>
                    <div className="socialimage insta"></div>

                </div>
            </div>

        </div>
    );
}

export default Home;