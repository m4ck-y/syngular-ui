import { useState } from 'react';
import styles from './GlassMediaPlayer.module.css';

interface GlassMediaPlayerProps {
  title?: string;
  subtitle?: string;
  duration?: number;
  currentTime?: number;
}

export const GlassMediaPlayer: React.FC<GlassMediaPlayerProps> = ({
  title = "Lorem Ipsum",
  subtitle = "Dolor sit",
  duration = 180,
  currentTime = 45
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState((currentTime / duration) * 100);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={styles.player}>
      <div className={styles.background} />
      
      <div className={styles.content}>
        <div className={styles.albumArt}>
          <div className={styles.iconBackground} />
          <span className={styles.musicIcon}>♪</span>
        </div>
        
        <div className={styles.info}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        
        <div className={styles.controls}>
          <button 
            className={`${styles.controlBtn} ${styles.playBtn}`}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button className={styles.controlBtn}>⏹</button>
          <button className={styles.controlBtn}>🔀</button>
        </div>
        
        <div className={styles.progressContainer}>
          <span className={styles.time}>{formatTime(Math.floor((progress / 100) * duration))}</span>
          <div className={styles.progressBar}>
            <div className={styles.progressTrack}>
              <div 
                className={styles.progressFill}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <span className={styles.time}>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};