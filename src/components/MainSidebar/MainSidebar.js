import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import TopSidebar from './TopSidebar'
import AccountList from './AccountList'
import Footer from './Footer'
import styles from './MainSidebar.module.scss'

function MainSidebar({ onLogin }) {
    return (
        <OverlayScrollbarsComponent
            className={styles.wrapper}
            options={{
                scrollbars: {
                    autoHide: 'leave',
                    autoHideDelay: 0
                }
            }}
        >

            <TopSidebar onLogin={onLogin} />

            <AccountList
                heading="Suggested accounts"
                data={[
                    {
                        id: 1,
                        avatar: 'https://i.pinimg.com/736x/5b/ab/48/5bab48eecbd6b5aa9c6311ed5b4a66da.jpg',
                        nickname: 'orelregus',
                        name: 'Billiards style66',
                    },
                    {
                        id: 2,
                        avatar: 'https://photo-cms-viettimes.zadn.vn/720x480/Uploaded/2021/aohuooh/2019_03_16/chum_anh_chung_to_meo_bi_ngao_da_la_co_that_158278544_1632019.png',
                        nickname: 'sammy.grk44',
                        name: 'CEO',
                    },
                    {
                        id: 3,
                        avatar: 'https://st.quantrimang.com/photos/image/2020/06/19/Hinh-Nen-Meo-Ngao-38.jpg',
                        nickname: 'andre_bcn2019',
                        name: 'Andre Filipe',
                    },
                    {
                        id: 4,
                        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4dc83d33af6539f4a94c15c4d2d74364.jpeg?x-expires=1618416000&x-signature=QLYgdQn27Bw%2BdlsAoqWc0YW2LW8%3D',
                        nickname: 'orelregus',
                        name: 'Billiards style66',
                    },
                    {
                        id: 5,
                        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4dc83d33af6539f4a94c15c4d2d74364.jpeg?x-expires=1618416000&x-signature=QLYgdQn27Bw%2BdlsAoqWc0YW2LW8%3D',
                        nickname: 'sammy.grk44',
                        name: 'CEO',
                    },
                    {
                        id: 6,
                        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4dc83d33af6539f4a94c15c4d2d74364.jpeg?x-expires=1618416000&x-signature=QLYgdQn27Bw%2BdlsAoqWc0YW2LW8%3D',
                        nickname: 'andre_bcn2019',
                        name: 'Andre Filipe',
                    }
                ]}
            />


            <Footer />
        </OverlayScrollbarsComponent>
    )
}

export default MainSidebar
