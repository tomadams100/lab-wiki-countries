import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'

export default function CountryDetails(props) {
    const {id} = useParams()
    const countryList = props.countries
    const foundCountry = countryList.find(country=>country.alpha3Code===id)
    return (
        <div className="col-7">
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{foundCountry.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {foundCountry.area} km <sup>2</sup>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    )
}

{/* <div>
          <h1>Country Details</h1>
          {!foundCountry && <h3>Country not found!</h3>}
    
          {foundCountry && (
            <>
              <p>{foundCountry.name.common}</p>
              <p>{foundCountry.region}</p>
              <Link to="/">Back</Link>
            </>
          )}
        </div> */}