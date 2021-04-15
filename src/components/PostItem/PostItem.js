import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHeart,
    faCommentDots,
    faShare,
    faCheckCircle,
    faFlag,
    faPlay,
    faPause,
    faVolumeUp,
    faVolumeMute
} from '@fortawesome/free-solid-svg-icons'


import Button from '../../packages/cuonglh-button'
import video01 from '../../assets/videos/video_01.mp4'
import styles from './PostItem.module.scss'

const defaultFn = () => {}

function PostItem({
    avatar = '',
    nickname = '',
    username = '',
    publishedAt = '',
    postContent = '',
    likeCount = 0,
    commentCount = 0,
    shareCount = 0,
    tick = true,
    isPlaying = false,
    isMute = false,
    onLike = defaultFn,
    onComment = defaultFn,
    onShare = defaultFn,
    onShowDetail = defaultFn,
    onReport = defaultFn,
    onPlay = defaultFn,
    onPause = defaultFn,
    onVolumeUp = defaultFn,
    onVolumeMute = defaultFn,
}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <img src={avatar} className={styles.avatar} alt={nickname} />

                <div className={styles.info}>
                    <div className={styles.headingBox}>
                    <h3 className={styles.nickname}>
                            {nickname}
                            {tick && (
                                <FontAwesomeIcon className={styles.tickIcon} icon={faCheckCircle} />
                            )}
                        </h3>

                        <p className={styles.username}>{username}</p>
                        <span> · </span>
                        <span className={styles.dot}> · </span>
                        <p>{publishedAt}</p>

                    </div>
                    <div className={styles.postContent}>
                        {postContent}
                    </div>
                </div>
                <div>
                    <Button type="border" size="s">Follow</Button>
                </div>

            </div>
            
            <div className={styles.content}>
            <div className={styles.videoBox}>
                    <video src={video01} className={styles.video} onClick={onShowDetail} />

                    {/* Report */}
                    <button
                        className={[styles.ctlBtn, styles.ctlReport].join(' ')}
                        onClick={onReport}
                    >
                        <FontAwesomeIcon className={styles.ctlIcon} icon={faFlag} />
                        <span>Report</span>
                    </button>

                    {/* Play / Pause */}
                    <button
                        className={[styles.ctlBtn, styles.ctlPlay].join(' ')}
                        onClick={isPlaying ? onPause : onPlay}
                    >
                        <FontAwesomeIcon className={styles.ctlIcon} icon={isPlaying ? faPlay : faPause} />
                    </button>

                    {/* Volume up / Volume mute */}
                    <button
                        className={[styles.ctlBtn, styles.ctlVolume].join(' ')}
                        onClick={isMute ? onVolumeUp : onVolumeMute}
                    >
                        <FontAwesomeIcon className={styles.ctlIcon} icon={isMute ? faVolumeMute : faVolumeUp} />
                    </button>
                </div>


                <div className={styles.actionBox}>
                    <button className={styles.actionBtn} onClick={onLike}>
                        <FontAwesomeIcon icon={faHeart} className={styles.actionIcon} />
                    </button>
                    <span className={styles.reactionCount}>{likeCount}</span>
                    
                    <button className={styles.actionBtn} onClick={onComment}>
                    <FontAwesomeIcon icon={faCommentDots} className={styles.actionIcon} />
                    </button>
                    <span className={styles.reactionCount}>{commentCount}</span>
                    
                    <button className={styles.actionBtn} onClick={onShare}>
                        <FontAwesomeIcon icon={faShare} className={styles.actionIcon} />
                    </button>
                    <span className={styles.reactionCount}>{shareCount}</span>
                </div>
            </div>
        </div>
    )
}


export default PostItem
