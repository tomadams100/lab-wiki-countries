import { Link, NavLink } from "react-router-dom";

export default function CountriesList (props) {
    const {countries} = props
    console.log("props: ",props)
    return(
          <div className="col-5">
            <div className="list-group">
            {countries.map(country=>{
                return(
              <Link className="list-group-item list-group-item-action" to={country.alpha3Code}>
                <p>{country.name.common}</p>
              </Link>
                )})}
            </div>
          </div>
    )
}


