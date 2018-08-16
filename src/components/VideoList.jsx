// var VideoList = () => {
//   return (
//     <div className="video-list">
//       {/* <div><h5><em>videoListEntry</em> view goes here</h5></div> */}
//       { exampleVideoData.map((video, index) => {
//         return <VideoListEntry key={index} video={video} onVideoClicked={}/>
//       })}
//     </div>
//   )
// }

// var VideoList = ({videoList, videoClicked}) => (
//   <div className="video-list">
//     { videoList.map((video, index) => {
//       return <VideoListEntry key={index} video={video} videoClicked={videoClicked}/>
//     })}
//   </div>
// )

class VideoList extends React.Component {
  constructor({videoList, videoClicked, videoDebounced}) {
    super({videoList, videoClicked, videoDebounced});

    this.state = {
      videoList,
    };

    videoDebounced(this)
  }
  render() {
    return (
      <div className="video-list">
        { this.state.videoList.map((video, index) => {
          return <VideoListEntry key={index} video={video} videoClicked={videoClicked}/>
        })}
      </div>
    );
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
