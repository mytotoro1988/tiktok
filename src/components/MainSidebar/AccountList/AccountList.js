import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'


import AccountItem from './AccountItem'
import styles from './AccountList.module.scss'

function AccountList({
    heading = '',
    expandedTitle = 'See all',
    collapseTitle = 'See less',
    isExpanded = false,
    hideSeeBtn = false,

    data = []
}) {
    return (
        <div className={styles.wrapper}>
               <p className={styles.heading}>{heading}</p>

            {data.map(account => (
                <AccountItem
                    key={account.id}
                    avatar={account.avatar}
                    nickname={account.nickname}
                    name={account.name}
                />
            ))}
             {!hideSeeBtn && (
                <div className={styles.seeBtn}>
                    <span>{isExpanded ? collapseTitle : expandedTitle}</span>
                    <FontAwesomeIcon className={styles.seeIcon} icon={isExpanded ? faChevronUp : faChevronDown} />
                </div>
            )}

        </div>

    )
}

export default AccountList
