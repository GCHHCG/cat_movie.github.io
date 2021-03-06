import React, {useState, useEffect} from 'react'
import { getCities } from '../../api/request';
import { CityWrapper } from './style'
import { Link } from 'react-router-dom'
export default function Cities() {
    const [cities,setCities] = useState([])
    useEffect(() => {
        (async () => {
            let {data} = await getCities()
            // console.log(data)
            setCities(data)
        })()
    })

    const renderCities = () => {
        return cities.map(({id, nm}) => {
            return <Link
                className="city_name"
                to={{
                    pathname: '/events',
                    search: `name=${nm}`
                }}
                key={id}>
                {nm}
            </Link>
        })
    }

    return (
        <CityWrapper>
        {renderCities()}
        </CityWrapper>
    )
}
