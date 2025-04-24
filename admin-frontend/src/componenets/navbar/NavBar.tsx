import styles from './NavBar.module.css'
import { capitalizeFirstLetter } from "../../util/util.ts";

type propTypes = {
  navList: string[]
}

function NavBar({ navList }: propTypes) {
  return (
    <nav className={ styles['navbar'] }>
      <h1>Bookstore Admin</h1>
      {
        navList.length ?
          <ul>
            {
              navList.map((item, i) =>
              <li key={ i }>
                <a href={`/${ item }`}>
                  { capitalizeFirstLetter(item) }
                </a>
              </li>)
            }
          </ul> :
          null
      }
    </nav>
  );
}

export default NavBar;