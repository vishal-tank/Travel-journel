export default function Card(props){
    return(
        <div className="card">
            <img src={props.img} alt="" height={168} width={125} className="card-image"/>
            <div className="content">
                <div className="topcontent">
                    <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="" height={9.55} />
                    <p>{props.country}</p>
                    <a href={props.googleMapUrl}>View on Google Maps</a>
                </div>
                <div className="about">
                    <h1>{props.location}</h1>
                    <strong><span>{props.startDate}</span><span>{` - ${props.endDate}`}</span></strong>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}


// Photos from Unsplash
// (can use these URLs as your img src)

// Japan
// https://source.unsplash.com/WLxQvbMyfas

// Australia
// https://source.unsplash.com/JmuyB_LibRo

// Norway
// https://source.unsplash.com/3PeSjpLVtLg