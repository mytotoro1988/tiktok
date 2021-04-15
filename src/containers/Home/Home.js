
import { useHistory } from 'react-router-dom'
import { Row, Column } from '@mycv/mycv-grid'

import MainSidebar from '../../components/MainSidebar'
import PostItem from '../../components/PostItem'
function Home() {
    const history = useHistory()

    const handleLogin = () => {
        alert('XU LY LOGIN')
    }

    const posts = [
        {
            id: 1,
            avatar: 'http://bizweb.dktcdn.net/thumb/grande/100/298/319/articles/trieu-chung-benh-giam-bach-cau-o-meo.jpg?v=1556763350827',
            nickname: 'orelregus',
            username: 'Billiards style66',
            publishedAt: '10 phút',
            postContent: '#xuhuongtiktok #xuhuong mọi người lưu ý nha',
            likeCount: '82.2K',
            commentCount: '1708',
            shareCount: '342',
        },
        {
            id: 2,
            avatar: 'http://bizweb.dktcdn.net/thumb/grande/100/298/319/articles/trieu-chung-benh-giam-bach-cau-o-meo.jpg?v=1556763350827',
            nickname: 'orelregus',
            username: 'Billiards style66',
            publishedAt: '10 phút',
            postContent: '#xuhuongtiktok #xuhuong mọi người lưu ý nha',
            likeCount: '82.2K',
            commentCount: '1708',
            shareCount: '342',
        },
        {
            id: 3,
            avatar: 'http://bizweb.dktcdn.net/thumb/grande/100/298/319/articles/trieu-chung-benh-giam-bach-cau-o-meo.jpg?v=1556763350827',
            nickname: 'orelregus',
            username: 'Billiards style66',
            publishedAt: '10 phút',
            postContent: '#xuhuongtiktok #xuhuong mọi người lưu ý nha',
            likeCount: '82.2K',
            commentCount: '1708',
            shareCount: '342',
        },
    ]

    return (
        <Row>
            <Column size={0} sizeTablet={4} sizeDesktop={3}>
                <MainSidebar onLogin={handleLogin} />
            </Column>
            <Column size={12} sizeTablet={8} sizeDesktop={9}>
            {posts.map(post => (
                    <PostItem
                        key={post}
                        avatar={post.avatar}
                        nickname={post.nickname}
                        username={post.username}
                        publishedAt={post.publishedAt}
                        postContent={post.postContent}
                        likeCount={post.likeCount}
                        commentCount={post.commentCount}
                        shareCount={post.shareCount}
                        onLike={post.onLike}
                        onComment={post.onComment}
                        onShare={post.onShare}
                        onShowDetail={() => history.push('/@baoboii_002/video/6948366460460764418')}
                    />
                ))}

            </Column>
        </Row>
    )

}

export default Home
