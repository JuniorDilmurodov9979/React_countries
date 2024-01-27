import '../../main.css';
import './search.css';
export function Search () {
    return (
        <div className="hero__top">
        <form className="hero__top-form" >
        <input className="hero__top-input" type="search" name="user_search"  aria-label="Search for a country" placeholder="Search for a country…"
        />
        </form>
        <form className="hero__form"  >
        <select className="hero__select" name="user_select">
        <option hidden>Filter by Region</option>
        <option value="Africa" >Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        </select>   
        </form>
        </div>
        )
    }