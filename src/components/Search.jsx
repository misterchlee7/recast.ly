var Search = ({videoSearched, receiveDebounce}) => {
  const onButtonClick = function() {

    // console.log(videoSearched);
    // console.log($('.form-control').val())
    // console.log('clicked')
    videoSearched($('.form-control').val());
  };

  const onKeyStroke = function() {
    // call method on app to pass the search term
    receiveDebounce($('.form-control').val());
  }

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" />
      <button className="btn hidden-sm-down" onClick={onButtonClick}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  )
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
