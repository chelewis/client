import React, {useState, useEffect} from 'react'

export const GoalPost = () => {
    const [player_data, setPlayerData] = useState([]);
    const [name_search, updateNameSearch] = useState('');
    const [position_search, updatePositionSearch] = useState('');
    const [age_search_lwr, updateAgeSearchLwr] = useState('10');
    const [age_search_upr, updateAgeSearchUpr] = useState('40');
    const [search_results, updateSearchResults] = useState([]);

    useEffect(()=> {
        fetch("/players").then(
          res => res.json()
        ).then(
          data => {
            setPlayerData(data);
            console.log(data);
          }
        )
      }, [])

    const searchPlayers = () => {
        //build logic to filter list of players based on search parameters
        console.log('searchPlayers()');
        updateSearchResults([]);
    }

    return (<div>
        <table className="fl-table" id="profiles-list">
            <thead>
                <tr className="search-list-headers">
                    <th>Name</th>
                    <th>Age</th>
                    <th>View</th>
                </tr>
            </thead>
            
            <tbody>
                {(typeof player_data === 'undefined') ? (
                <p>Please Wait</p>
                ) : (
                    player_data.map((item,index) =>(
                    <tr key={index}><td>{item.Name}</td><td>{item.Age}</td></tr>
                    )
                    )
                )}
            </tbody>
            
            {/* <tr class="search-list-data" id="search-list-data"></tr> */}

        </table>
    </div>)
}