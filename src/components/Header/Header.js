import { Grid } from '@mycv/mycv-grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimesCircle, faSpinner   } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import Button from '../../packages/cuonglh-button'
import logoDark from '../../assets/img/logo-dark.svg'
import logoTextDark from '../../assets/img/logo-text-dark.svg'
import config from '../../config'
import styles from './Header.module.scss'

const defaultFn = () => {
    console.log("hello");
}

function Header({
    isSearching = false,
    searchValue = '',
    onSearchChange = defaultFn,
    // Thêm prop isSearching kiểu boolean để thể hiện 2 trạng thái:
    // Đang tìm kiếm - khi isSearching là true
    // Không đang tìm kiếm - khi isSearching là false
    // Từ 2 trạng thái dữ liệu này ta sẽ biết khi nào thì hiển thị icon loading.
    }) {

    return (
        <header className={styles.wrapper}>
            <Grid type="wide" maxWidth={config.mainWidth}>
                <div className={styles.content}>
                   <Link to={config.routes.home} className={styles.logoBox}>
                        <img src={logoDark} alt="" />
                        <img className={styles.logoTextDark} src={logoTextDark} alt="Tiktok" />
                    </Link>

                    <div className={styles.searchBox}>
                        <input value={searchValue} onChange={onSearchChange} placeholder="Search accounts" />
                        {/* <button className={styles.clearBtn}>
                            {
                                isSearching ?
                                ( <FontAwesomeIcon className={styles.clearIcon} icon={faSpinner} />) :
                                (<FontAwesomeIcon className={styles.clearIcon} icon={faTimesCircle} />)
                            }
                           
                        </button> */}
                        {/* { !!seachValue && (
                            <button className={styles.clearBtn}>
                            {
                                isSearching ?
                                ( <FontAwesomeIcon className={styles.clearIcon} icon={faSpinner} />) :
                                (<FontAwesomeIcon className={styles.clearIcon} icon={faTimesCircle} />)
                            }
                           
                            </button>
                        )

                        } */}
                          {!!searchValue && (
                            <button className={styles.clearBtn}>
                                {isSearching ? (
                                    <FontAwesomeIcon className={[styles.clearIcon, styles.spinner].join(' ')} icon={faSpinner} />
                                ) : (
                                    <FontAwesomeIcon className={styles.clearIcon} icon={faTimesCircle} />
                                )}
                            </button>
                        )}

                        <button className={styles.searchBtn}>
                            <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
                        </button>
                 
                    </div>

                    <div>
                         <Button type="normal" underline>Upload</Button>
                        <Button type="primary" to="/">Log in</Button>
                    </div>
                </div>
            </Grid>
        </header>
    )
}

export default Header
