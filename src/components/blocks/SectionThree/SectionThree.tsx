import Video from '../../miscellaneous/Video';

const SectionThree: React.FC = () => (
  <section className="section-three relative">
    <div className="video-wrapper w-full">
      <Video
        scriptUrl="https://players.brightcove.net/6165065566001/wIpGq2Kd0p_default/index.min.js"
        playerId="wIpGq2Kd0p"
        videoId="6368403300112"
        className="w-full"
      />
    </div>
  </section>
);

export default SectionThree;
