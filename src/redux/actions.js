import { swapi, films, people, planets, species, starships, vehicles } from "../../config";

export const getFilms = () => {
    try {
        return async dispatch => {
            const result = await fetch(swapi + films, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await result.json();
            console.log('films api res', json)
            if (json) {
                dispatch({
                    type: 'films',
                    payload: json.results
                });
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const getPeople = () => {
    try {
        return async dispatch => {
            const result = await fetch(swapi + people, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await result.json();
            console.log('people api res', json)
            if (json) {
                dispatch({
                    type: 'people',
                    payload: json.results
                });
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const getPlanets = () => {
    try {
        return async dispatch => {
            const result = await fetch(swapi + planets, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await result.json();
            console.log('planets api res', json)
            if (json) {
                dispatch({
                    type: 'planets',
                    payload: json.results
                });
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const getSpecies = () => {
    try {
        return async dispatch => {
            const result = await fetch(swapi + species, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await result.json();
            console.log('species api res', json)
            if (json) {
                dispatch({
                    type: 'species',
                    payload: json.results
                });
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }
}
export const getStarships = () => {
    try {
        return async dispatch => {
            const result = await fetch(swapi + starships, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await result.json();
            console.log('starships api res', json)
            if (json) {
                dispatch({
                    type: 'starships',
                    payload: json.results
                });
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const getVehicles = () => {
    try {
        return async dispatch => {
            const result = await fetch(swapi + vehicles, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await result.json();
            console.log('vehicles api res', json)
            if (json) {
                dispatch({
                    type: 'vehicles',
                    payload: json.results
                });
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }
}
