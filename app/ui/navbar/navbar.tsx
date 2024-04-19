import styles from './navbar.module.css';
import { MdFavorite } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
export default function Navbar() {
    const navItems = [{
        name: 'Cannabis',
        link: '/cannabis',
    }, {
        name: 'Shrooms',
        link: '/shrooms'
    }, {
        name: 'Health',
        link: '/health'
    }, {
        name: 'Pharmacy',
        link: '/pharmacy'
    }];
    const userItems = [{
        name: 'Favourites',
        link: '/favourites',
        icon: <MdFavorite  size={20}/>
    }, {
        name: 'Cart',
        link: '/cart',
        icon: <FaShoppingCart size={20}/>
    }];
    return (
        <nav className={styles.container}>
            <h3 className={styles.logo}>BarnBuddy</h3>
            <div className={styles.nav}>
            <div className={styles.top}>
            <input type='text' placeholder='search' />
            </div>
            <div className={styles.bottom}>
            {
                navItems.map((item, index) => (
                    <a key={index} href={item.link} className={styles.item}>
                    {item.name}
                    </a>
                ))
            }
            </div>
            </div>
            <div className={styles.user}>
            {userItems.map((item, index) => (
                <div key={index}>
                {item.icon}
                </div>
            ))}
            <button className={styles.login}>Login</button>
            <button className={styles.signup}>Register</button>
            </div>
        </nav>
    );
    }