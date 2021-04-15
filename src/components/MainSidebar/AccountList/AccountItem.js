import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'


import config from '../../../config'
import styles from './AccountList.module.scss'

function AccountItem({
    avatar = '',
    nickname = '',
    name = '',
    tick = false,
}) {
    return (
        <Link
            to={`${config.routes.home}@${nickname}`}
            className={styles.accountItem}
        >   
            <div className={styles.avatar_border}>
                <img src={avatar} className={styles.avatar} alt={nickname} />
            </div>
            
            <div className={styles.accountBody}>
            <h3 className={styles.nickname}>
                    {nickname}
                    {tick && (
                        <FontAwesomeIcon className={styles.tickIcon} icon={faCheckCircle} />
                    )}
                </h3>

                <p className={styles.name}>{name}</p>
            </div>
        </Link>
    )
}

export default AccountItem
