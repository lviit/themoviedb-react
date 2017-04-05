webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactRouter = __webpack_require__(172);

	var _reactAddonsCssTransitionGroup = __webpack_require__(235);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _FrontPage = __webpack_require__(242);

	var _FrontPage2 = _interopRequireDefault(_FrontPage);

	var _MovieFullView = __webpack_require__(296);

	var _MovieFullView2 = _interopRequireDefault(_MovieFullView);

	var _Header = __webpack_require__(313);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(326);

	var _Footer2 = _interopRequireDefault(_Footer);

	__webpack_require__(330);

	__webpack_require__(332);

	__webpack_require__(334);

	__webpack_require__(339);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* global document */

	var About = function About() {
	  return _react2.default.createElement(
	    'h1',
	    null,
	    'This product uses the TMDb API but is not endorsed or certified by TMDb.'
	  );
	};
	var NotFound = function NotFound() {
	  return _react2.default.createElement(
	    'h1',
	    null,
	    '404.. Whoops, page not found!'
	  );
	};

	var Container = function Container(props) {
	  /*
	  static contextTypes() {
	    router: React.PropTypes.object.isRequired
	  } */
	  var path = props.location.pathname;
	  var segment = path.split('/')[2] || 'root';
	  // console.log(this.context);
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_Header2.default, { history: props.history }),
	    _react2.default.createElement(
	      _reactAddonsCssTransitionGroup2.default,
	      {
	        transitionName: segment === 'root' ? 'pageSlider' : 'pageSlider',
	        transitionEnterTimeout: 800,
	        transitionLeaveTimeout: 800
	      },
	      _react2.default.createElement(
	        'div',
	        { className: 'page-wrapper', key: props.location.pathname },
	        props.children
	      )
	    ),
	    _react2.default.createElement(_Footer2.default, null)
	  );
	};

	Container.propTypes = {
	  history: _react2.default.PropTypes.object, // eslint-disable-line react/forbid-prop-types
	  children: _react2.default.PropTypes.object, // eslint-disable-line react/forbid-prop-types
	  location: _react2.default.PropTypes.shape({
	    pathname: _react2.default.PropTypes.string
	  })
	};

	var App = function App() {
	  return _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.hashHistory },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: Container },
	      _react2.default.createElement(_reactRouter.IndexRoute, { component: _FrontPage2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/about', component: About }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'movie/*', component: _MovieFullView2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '*', component: NotFound })
	    )
	  );
	};

	(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('content'));

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ApiConnect = __webpack_require__(243);

	var _ApiConnect2 = _interopRequireDefault(_ApiConnect);

	var _Hero = __webpack_require__(267);

	var _Hero2 = _interopRequireDefault(_Hero);

	var _MovieList = __webpack_require__(292);

	var _MovieList2 = _interopRequireDefault(_MovieList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Front = function (_React$Component) {
	  _inherits(Front, _React$Component);

	  function Front() {
	    _classCallCheck(this, Front);

	    var _this = _possibleConstructorReturn(this, (Front.__proto__ || Object.getPrototypeOf(Front)).call(this));

	    _this.state = {
	      config: [],
	      data: []
	    };
	    return _this;
	  }

	  _createClass(Front, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      _ApiConnect2.default.getConfig().then(function (config) {
	        return _this2.setState({ config: config });
	      });
	      _ApiConnect2.default.getMovies().then(function (data) {
	        return _this2.setState({ data: data });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'page' },
	        this.state.config.images && this.state.data.results && _react2.default.createElement(_Hero2.default, { data: this.state.data, config: this.state.config }),
	        _react2.default.createElement(
	          'div',
	          { className: 'movies container' },
	          this.state.config.images && this.state.data.results && _react2.default.createElement(_MovieList2.default, { data: this.state.data.results, config: this.state.config })
	        )
	      );
	    }
	  }]);

	  return Front;
	}(_react2.default.Component);

	exports.default = Front;

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _axios = __webpack_require__(244);

	var _axios2 = _interopRequireDefault(_axios);

	var _Settings = __webpack_require__(266);

	var _Settings2 = _interopRequireDefault(_Settings);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint no-console: 0 */

	exports.default = {
	  getConfig: function getConfig() {
	    return _axios2.default.get(_Settings2.default.configUrl).then(function (res) {
	      return res.data;
	    }).catch(function (error) {
	      return console.log(error);
	    });
	  },

	  getMovies: function getMovies() {
	    return _axios2.default.get(_Settings2.default.moviesUrl).then(function (res) {
	      return res.data;
	    }).catch(function (error) {
	      return console.log(error);
	    });
	  },

	  getGenres: function getGenres() {
	    return _axios2.default.get(_Settings2.default.baseUrl + 'genre/movie/list?api_key=' + _Settings2.default.apiKey).then(function (res) {
	      return res.data.genres;
	    }).catch(function (error) {
	      return console.log(error);
	    });
	  },

	  getMovieFullview: function getMovieFullview(id) {
	    return _axios2.default.get(_Settings2.default.baseUrl + 'movie/' + id + '?api_key=' + _Settings2.default.apiKey).then(function (res) {
	      return res.data;
	    }).catch(function (error) {
	      return console.log(error);
	    });
	  },

	  getReviews: function getReviews(id) {
	    return _axios2.default.get(_Settings2.default.baseUrl + 'movie/' + id + '/reviews?api_key=' + _Settings2.default.apiKey).then(function (res) {
	      return res.data;
	    }).catch(function (error) {
	      return console.log(error);
	    });
	  },

	  getCredits: function getCredits(id) {
	    return _axios2.default.get(_Settings2.default.baseUrl + 'movie/' + id + '/credits?api_key=' + _Settings2.default.apiKey).then(function (res) {
	      return res.data;
	    }).catch(function (error) {
	      return console.log(error);
	    });
	  },

	  getSimilar: function getSimilar(id) {
	    return _axios2.default.get(_Settings2.default.baseUrl + 'movie/' + id + '/similar?api_key=' + _Settings2.default.apiKey).then(function (res) {
	      return res.data;
	    }).catch(function (error) {
	      return console.log(error);
	    });
	  },

	  Search: function Search(query) {
	    return _axios2.default.get(_Settings2.default.baseUrl + 'search/movie?api_key=' + _Settings2.default.apiKey + '&query=' + query).then(function (res) {
	      return res.data;
	    }).catch(function (error) {
	      return console.log(error);
	    });
	  }
	};

/***/ },
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var apiKey = 'dc4a1a30e13042657cc4081b0a16bf8f';
	var baseUrl = 'https://api.themoviedb.org/3/';
	var configUrl = baseUrl + 'configuration?api_key=' + apiKey;
	var moviesUrl = baseUrl + 'discover/movie?primary_release_year=2016&sort_by=popularity.desc&api_key=' + apiKey;
	/*
	const MovieFullview
	const Reviews
	const Credits
	const Similar
	const Search = settings.baseUrl + 'search/movie?api_key=' + settings.apiKey + '&query=' + query
	*/
	exports.default = {
	  apiKey: apiKey,
	  baseUrl: baseUrl,
	  configUrl: configUrl,
	  moviesUrl: moviesUrl
	};

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactTextTruncate = __webpack_require__(268);

	var _reactTextTruncate2 = _interopRequireDefault(_reactTextTruncate);

	var _reactRouter = __webpack_require__(172);

	var _reactSlick = __webpack_require__(269);

	var _reactSlick2 = _interopRequireDefault(_reactSlick);

	var _movieHero = __webpack_require__(286);

	var _movieHero2 = _interopRequireDefault(_movieHero);

	__webpack_require__(290);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HeroPrevArrow = function HeroPrevArrow(props) {
	  return _react2.default.createElement(
	    'i',
	    _extends({}, props, { className: 'slick-arrow slick-prev material-icons' }),
	    'chevron_left'
	  );
	};
	var HeroNextArrow = function HeroNextArrow(props) {
	  return _react2.default.createElement(
	    'i',
	    _extends({}, props, { className: 'slick-arrow slick-next material-icons' }),
	    'chevron_right'
	  );
	};

	var Hero = function Hero(props) {
	  var sliderSettings = {
	    dots: true,
	    infinite: true,
	    speed: 500,
	    autoplay: true,
	    autoplaySpeed: 5000,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    nextArrow: _react2.default.createElement(HeroNextArrow, null),
	    prevArrow: _react2.default.createElement(HeroPrevArrow, null)
	  };

	  var imageBaseUrl = props.config.images.secure_base_url;
	  var fileSize = props.config.images.backdrop_sizes[3];
	  var NumSlides = 5;

	  var slides = props.data.results.slice(0, NumSlides).map(function (result) {
	    return _react2.default.createElement(
	      'div',
	      { className: _movieHero2.default.hero, key: result.id },
	      _react2.default.createElement(
	        'div',
	        { className: 'container' },
	        _react2.default.createElement(
	          'div',
	          { className: _movieHero2.default.info },
	          _react2.default.createElement(
	            'h2',
	            { className: _movieHero2.default.title },
	            result.title
	          ),
	          _react2.default.createElement(
	            'p',
	            { className: _movieHero2.default.overview },
	            _react2.default.createElement(_reactTextTruncate2.default, {
	              containerClassName: _movieHero2.default.overview,
	              line: 3,
	              truncateText: '\u2026',
	              text: result.overview
	            })
	          ),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { className: _movieHero2.default.link, to: '/movie/ ' + result.id },
	            'Read more'
	          )
	        )
	      ),
	      _react2.default.createElement('img', { className: _movieHero2.default.image, src: imageBaseUrl + fileSize + result.backdrop_path, alt: '' })
	    );
	  });

	  return _react2.default.createElement(
	    _reactSlick2.default,
	    _extends({ className: _movieHero2.default.container }, sliderSettings),
	    slides
	  );
	};

	Hero.propTypes = {
	  data: _react2.default.PropTypes.shape({
	    results: _react2.default.PropTypes.array
	  }),
	  config: _react2.default.PropTypes.shape({
	    images: _react2.default.PropTypes.shape({
	      backdrop_sizes: _react2.default.PropTypes.array,
	      secure_base_url: _react2.default.PropTypes.string
	    })
	  })
	};

	exports.default = Hero;

/***/ },
/* 268 */,
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(270);

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _innerSlider = __webpack_require__(271);

	var _objectAssign = __webpack_require__(4);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _json2mq = __webpack_require__(281);

	var _json2mq2 = _interopRequireDefault(_json2mq);

	var _reactResponsiveMixin = __webpack_require__(283);

	var _reactResponsiveMixin2 = _interopRequireDefault(_reactResponsiveMixin);

	var _defaultProps = __webpack_require__(276);

	var _defaultProps2 = _interopRequireDefault(_defaultProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Slider = _react2.default.createClass({
	  displayName: 'Slider',

	  mixins: [_reactResponsiveMixin2.default],
	  innerSlider: null,
	  innerSliderRefHandler: function innerSliderRefHandler(ref) {
	    this.innerSlider = ref;
	  },
	  getInitialState: function getInitialState() {
	    return {
	      breakpoint: null
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    if (this.props.responsive) {
	      var breakpoints = this.props.responsive.map(function (breakpt) {
	        return breakpt.breakpoint;
	      });
	      breakpoints.sort(function (x, y) {
	        return x - y;
	      });

	      breakpoints.forEach(function (breakpoint, index) {
	        var bQuery;
	        if (index === 0) {
	          bQuery = (0, _json2mq2.default)({ minWidth: 0, maxWidth: breakpoint });
	        } else {
	          bQuery = (0, _json2mq2.default)({ minWidth: breakpoints[index - 1], maxWidth: breakpoint });
	        }
	        _this.media(bQuery, function () {
	          _this.setState({ breakpoint: breakpoint });
	        });
	      });

	      // Register media query for full screen. Need to support resize from small to large
	      var query = (0, _json2mq2.default)({ minWidth: breakpoints.slice(-1)[0] });

	      this.media(query, function () {
	        _this.setState({ breakpoint: null });
	      });
	    }
	  },

	  slickPrev: function slickPrev() {
	    this.innerSlider.slickPrev();
	  },

	  slickNext: function slickNext() {
	    this.innerSlider.slickNext();
	  },

	  slickGoTo: function slickGoTo(slide) {
	    this.innerSlider.slickGoTo(slide);
	  },

	  render: function render() {
	    var _this2 = this;

	    var settings;
	    var newProps;
	    if (this.state.breakpoint) {
	      newProps = this.props.responsive.filter(function (resp) {
	        return resp.breakpoint === _this2.state.breakpoint;
	      });
	      settings = newProps[0].settings === 'unslick' ? 'unslick' : (0, _objectAssign2.default)({}, this.props, newProps[0].settings);
	    } else {
	      settings = (0, _objectAssign2.default)({}, _defaultProps2.default, this.props);
	    }

	    var children = this.props.children;
	    if (!Array.isArray(children)) {
	      children = [children];
	    }

	    // Children may contain false or null, so we should filter them
	    children = children.filter(function (child) {
	      return !!child;
	    });

	    if (settings === 'unslick') {
	      // if 'unslick' responsive breakpoint setting used, just return the <Slider> tag nested HTML
	      return _react2.default.createElement(
	        'div',
	        null,
	        children
	      );
	    } else {
	      return _react2.default.createElement(
	        _innerSlider.InnerSlider,
	        _extends({ ref: this.innerSliderRefHandler }, settings),
	        children
	      );
	    }
	  }
	});

	module.exports = Slider;

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.InnerSlider = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _eventHandlers = __webpack_require__(272);

	var _eventHandlers2 = _interopRequireDefault(_eventHandlers);

	var _helpers = __webpack_require__(274);

	var _helpers2 = _interopRequireDefault(_helpers);

	var _initialState = __webpack_require__(275);

	var _initialState2 = _interopRequireDefault(_initialState);

	var _defaultProps = __webpack_require__(276);

	var _defaultProps2 = _interopRequireDefault(_defaultProps);

	var _classnames = __webpack_require__(277);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _objectAssign = __webpack_require__(4);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _track = __webpack_require__(278);

	var _dots = __webpack_require__(279);

	var _arrows = __webpack_require__(280);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var InnerSlider = exports.InnerSlider = _react2.default.createClass({
	  displayName: 'InnerSlider',

	  mixins: [_helpers2.default, _eventHandlers2.default],
	  list: null,
	  track: null,
	  listRefHandler: function listRefHandler(ref) {
	    this.list = ref;
	  },
	  trackRefHandler: function trackRefHandler(ref) {
	    this.track = ref;
	  },
	  getInitialState: function getInitialState() {
	    return _extends({}, _initialState2.default, {
	      currentSlide: this.props.initialSlide
	    });
	  },
	  getDefaultProps: function getDefaultProps() {
	    return _defaultProps2.default;
	  },
	  componentWillMount: function componentWillMount() {
	    if (this.props.init) {
	      this.props.init();
	    }
	    this.setState({
	      mounted: true
	    });
	    var lazyLoadedList = [];
	    for (var i = 0; i < _react2.default.Children.count(this.props.children); i++) {
	      if (i >= this.state.currentSlide && i < this.state.currentSlide + this.props.slidesToShow) {
	        lazyLoadedList.push(i);
	      }
	    }

	    if (this.props.lazyLoad && this.state.lazyLoadedList.length === 0) {
	      this.setState({
	        lazyLoadedList: lazyLoadedList
	      });
	    }
	  },
	  componentDidMount: function componentDidMount() {
	    // Hack for autoplay -- Inspect Later
	    this.initialize(this.props);
	    this.adaptHeight();

	    // To support server-side rendering
	    if (!window) {
	      return;
	    }
	    if (window.addEventListener) {
	      window.addEventListener('resize', this.onWindowResized);
	    } else {
	      window.attachEvent('onresize', this.onWindowResized);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.animationEndCallback) {
	      clearTimeout(this.animationEndCallback);
	    }
	    if (window.addEventListener) {
	      window.removeEventListener('resize', this.onWindowResized);
	    } else {
	      window.detachEvent('onresize', this.onWindowResized);
	    }
	    if (this.state.autoPlayTimer) {
	      clearInterval(this.state.autoPlayTimer);
	    }
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (this.props.slickGoTo != nextProps.slickGoTo) {
	      if (process.env.NODE_ENV !== 'production') {
	        console.warn('react-slick deprecation warning: slickGoTo prop is deprecated and it will be removed in next release. Use slickGoTo method instead');
	      }
	      this.changeSlide({
	        message: 'index',
	        index: nextProps.slickGoTo,
	        currentSlide: this.state.currentSlide
	      });
	    } else if (this.state.currentSlide >= nextProps.children.length) {
	      this.update(nextProps);
	      this.changeSlide({
	        message: 'index',
	        index: nextProps.children.length - nextProps.slidesToShow,
	        currentSlide: this.state.currentSlide
	      });
	    } else {
	      this.update(nextProps);
	    }
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this.adaptHeight();
	  },
	  onWindowResized: function onWindowResized() {
	    this.update(this.props);
	    // animating state should be cleared while resizing, otherwise autoplay stops working
	    this.setState({
	      animating: false
	    });
	    clearTimeout(this.animationEndCallback);
	    delete this.animationEndCallback;
	  },
	  slickPrev: function slickPrev() {
	    this.changeSlide({ message: 'previous' });
	  },
	  slickNext: function slickNext() {
	    this.changeSlide({ message: 'next' });
	  },
	  slickGoTo: function slickGoTo(slide) {
	    typeof slide === 'number' && this.changeSlide({
	      message: 'index',
	      index: slide,
	      currentSlide: this.state.currentSlide
	    });
	  },
	  render: function render() {
	    var className = (0, _classnames2.default)('slick-initialized', 'slick-slider', this.props.className, {
	      'slick-vertical': this.props.vertical
	    });

	    var trackProps = {
	      fade: this.props.fade,
	      cssEase: this.props.cssEase,
	      speed: this.props.speed,
	      infinite: this.props.infinite,
	      centerMode: this.props.centerMode,
	      focusOnSelect: this.props.focusOnSelect ? this.selectHandler : null,
	      currentSlide: this.state.currentSlide,
	      lazyLoad: this.props.lazyLoad,
	      lazyLoadedList: this.state.lazyLoadedList,
	      rtl: this.props.rtl,
	      slideWidth: this.state.slideWidth,
	      slidesToShow: this.props.slidesToShow,
	      slidesToScroll: this.props.slidesToScroll,
	      slideCount: this.state.slideCount,
	      trackStyle: this.state.trackStyle,
	      variableWidth: this.props.variableWidth
	    };

	    var dots;

	    if (this.props.dots === true && this.state.slideCount >= this.props.slidesToShow) {
	      var dotProps = {
	        dotsClass: this.props.dotsClass,
	        slideCount: this.state.slideCount,
	        slidesToShow: this.props.slidesToShow,
	        currentSlide: this.state.currentSlide,
	        slidesToScroll: this.props.slidesToScroll,
	        clickHandler: this.changeSlide,
	        children: this.props.children,
	        customPaging: this.props.customPaging
	      };

	      dots = _react2.default.createElement(_dots.Dots, dotProps);
	    }

	    var prevArrow, nextArrow;

	    var arrowProps = {
	      infinite: this.props.infinite,
	      centerMode: this.props.centerMode,
	      currentSlide: this.state.currentSlide,
	      slideCount: this.state.slideCount,
	      slidesToShow: this.props.slidesToShow,
	      prevArrow: this.props.prevArrow,
	      nextArrow: this.props.nextArrow,
	      clickHandler: this.changeSlide
	    };

	    if (this.props.arrows) {
	      prevArrow = _react2.default.createElement(_arrows.PrevArrow, arrowProps);
	      nextArrow = _react2.default.createElement(_arrows.NextArrow, arrowProps);
	    }

	    var verticalHeightStyle = null;

	    if (this.props.vertical) {
	      verticalHeightStyle = {
	        height: this.state.listHeight
	      };
	    }

	    var centerPaddingStyle = null;

	    if (this.props.vertical === false) {
	      if (this.props.centerMode === true) {
	        centerPaddingStyle = {
	          padding: '0px ' + this.props.centerPadding
	        };
	      }
	    } else {
	      if (this.props.centerMode === true) {
	        centerPaddingStyle = {
	          padding: this.props.centerPadding + ' 0px'
	        };
	      }
	    }

	    var listStyle = (0, _objectAssign2.default)({}, verticalHeightStyle, centerPaddingStyle);

	    return _react2.default.createElement(
	      'div',
	      { className: className, onMouseEnter: this.onInnerSliderEnter, onMouseLeave: this.onInnerSliderLeave },
	      prevArrow,
	      _react2.default.createElement(
	        'div',
	        {
	          ref: this.listRefHandler,
	          className: 'slick-list',
	          style: listStyle,
	          onMouseDown: this.swipeStart,
	          onMouseMove: this.state.dragging ? this.swipeMove : null,
	          onMouseUp: this.swipeEnd,
	          onMouseLeave: this.state.dragging ? this.swipeEnd : null,
	          onTouchStart: this.swipeStart,
	          onTouchMove: this.state.dragging ? this.swipeMove : null,
	          onTouchEnd: this.swipeEnd,
	          onTouchCancel: this.state.dragging ? this.swipeEnd : null,
	          onKeyDown: this.props.accessibility ? this.keyHandler : null },
	        _react2.default.createElement(
	          _track.Track,
	          _extends({ ref: this.trackRefHandler }, trackProps),
	          this.props.children
	        )
	      ),
	      nextArrow,
	      dots
	    );
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _trackHelper = __webpack_require__(273);

	var _helpers = __webpack_require__(274);

	var _helpers2 = _interopRequireDefault(_helpers);

	var _objectAssign = __webpack_require__(4);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EventHandlers = {
	  // Event handler for previous and next
	  changeSlide: function changeSlide(options) {
	    var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
	    var _props = this.props;
	    var slidesToScroll = _props.slidesToScroll;
	    var slidesToShow = _props.slidesToShow;
	    var _state = this.state;
	    var slideCount = _state.slideCount;
	    var currentSlide = _state.currentSlide;

	    unevenOffset = slideCount % slidesToScroll !== 0;
	    indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;

	    if (options.message === 'previous') {
	      slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
	      targetSlide = currentSlide - slideOffset;
	      if (this.props.lazyLoad) {
	        previousInt = currentSlide - slideOffset;
	        targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
	      }
	    } else if (options.message === 'next') {
	      slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
	      targetSlide = currentSlide + slideOffset;
	      if (this.props.lazyLoad) {
	        targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
	      }
	    } else if (options.message === 'dots' || options.message === 'children') {
	      // Click on dots
	      targetSlide = options.index * options.slidesToScroll;
	      if (targetSlide === options.currentSlide) {
	        return;
	      }
	    } else if (options.message === 'index') {
	      targetSlide = parseInt(options.index);
	      if (targetSlide === options.currentSlide) {
	        return;
	      }
	    }

	    this.slideHandler(targetSlide);
	  },

	  // Accessiblity handler for previous and next
	  keyHandler: function keyHandler(e) {
	    //Dont slide if the cursor is inside the form fields and arrow keys are pressed
	    if (!e.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
	      if (e.keyCode === 37 && this.props.accessibility === true) {
	        this.changeSlide({
	          message: this.props.rtl === true ? 'next' : 'previous'
	        });
	      } else if (e.keyCode === 39 && this.props.accessibility === true) {
	        this.changeSlide({
	          message: this.props.rtl === true ? 'previous' : 'next'
	        });
	      }
	    }
	  },
	  // Focus on selecting a slide (click handler on track)
	  selectHandler: function selectHandler(options) {
	    this.changeSlide(options);
	  },
	  swipeStart: function swipeStart(e) {
	    var touches, posX, posY;

	    if (this.props.swipe === false || 'ontouchend' in document && this.props.swipe === false) {
	      return;
	    } else if (this.props.draggable === false && e.type.indexOf('mouse') !== -1) {
	      return;
	    }
	    posX = e.touches !== undefined ? e.touches[0].pageX : e.clientX;
	    posY = e.touches !== undefined ? e.touches[0].pageY : e.clientY;
	    this.setState({
	      dragging: true,
	      touchObject: {
	        startX: posX,
	        startY: posY,
	        curX: posX,
	        curY: posY
	      }
	    });
	  },
	  swipeMove: function swipeMove(e) {
	    if (!this.state.dragging) {
	      e.preventDefault();
	      return;
	    }
	    if (this.state.animating) {
	      return;
	    }
	    if (this.props.vertical && this.props.swipeToSlide && this.props.verticalSwiping) {
	      e.preventDefault();
	    }
	    var swipeLeft;
	    var curLeft, positionOffset;
	    var touchObject = this.state.touchObject;

	    curLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	      slideIndex: this.state.currentSlide,
	      trackRef: this.track
	    }, this.props, this.state));
	    touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
	    touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
	    touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));

	    if (this.props.verticalSwiping) {
	      touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));
	    }

	    positionOffset = (this.props.rtl === false ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);

	    if (this.props.verticalSwiping) {
	      positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
	    }

	    var currentSlide = this.state.currentSlide;
	    var dotCount = Math.ceil(this.state.slideCount / this.props.slidesToScroll);
	    var swipeDirection = this.swipeDirection(this.state.touchObject);
	    var touchSwipeLength = touchObject.swipeLength;

	    if (this.props.infinite === false) {
	      if (currentSlide === 0 && swipeDirection === 'right' || currentSlide + 1 >= dotCount && swipeDirection === 'left') {
	        touchSwipeLength = touchObject.swipeLength * this.props.edgeFriction;

	        if (this.state.edgeDragged === false && this.props.edgeEvent) {
	          this.props.edgeEvent(swipeDirection);
	          this.setState({ edgeDragged: true });
	        }
	      }
	    }

	    if (this.state.swiped === false && this.props.swipeEvent) {
	      this.props.swipeEvent(swipeDirection);
	      this.setState({ swiped: true });
	    }

	    if (!this.props.vertical) {
	      swipeLeft = curLeft + touchSwipeLength * positionOffset;
	    } else {
	      swipeLeft = curLeft + touchSwipeLength * (this.state.listHeight / this.state.listWidth) * positionOffset;
	    }

	    if (this.props.verticalSwiping) {
	      swipeLeft = curLeft + touchSwipeLength * positionOffset;
	    }

	    this.setState({
	      touchObject: touchObject,
	      swipeLeft: swipeLeft,
	      trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: swipeLeft }, this.props, this.state))
	    });

	    if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
	      return;
	    }
	    if (touchObject.swipeLength > 4) {
	      e.preventDefault();
	    }
	  },
	  getNavigableIndexes: function getNavigableIndexes() {
	    var max = void 0;
	    var breakPoint = 0;
	    var counter = 0;
	    var indexes = [];

	    if (!this.props.infinite) {
	      max = this.state.slideCount;
	    } else {
	      breakPoint = this.props.slidesToShow * -1;
	      counter = this.props.slidesToShow * -1;
	      max = this.state.slideCount * 2;
	    }

	    while (breakPoint < max) {
	      indexes.push(breakPoint);
	      breakPoint = counter + this.props.slidesToScroll;

	      counter += this.props.slidesToScroll <= this.props.slidesToShow ? this.props.slidesToScroll : this.props.slidesToShow;
	    }

	    return indexes;
	  },
	  checkNavigable: function checkNavigable(index) {
	    var navigables = this.getNavigableIndexes();
	    var prevNavigable = 0;

	    if (index > navigables[navigables.length - 1]) {
	      index = navigables[navigables.length - 1];
	    } else {
	      for (var n in navigables) {
	        if (index < navigables[n]) {
	          index = prevNavigable;
	          break;
	        }

	        prevNavigable = navigables[n];
	      }
	    }

	    return index;
	  },
	  getSlideCount: function getSlideCount() {
	    var _this = this;

	    var centerOffset = this.props.centerMode ? this.state.slideWidth * Math.floor(this.props.slidesToShow / 2) : 0;

	    if (this.props.swipeToSlide) {
	      var swipedSlide = void 0;

	      var slickList = _reactDom2.default.findDOMNode(this.list);

	      var slides = slickList.querySelectorAll('.slick-slide');

	      Array.from(slides).every(function (slide) {
	        if (!_this.props.vertical) {
	          if (slide.offsetLeft - centerOffset + _this.getWidth(slide) / 2 > _this.state.swipeLeft * -1) {
	            swipedSlide = slide;
	            return false;
	          }
	        } else {
	          if (slide.offsetTop + _this.getHeight(slide) / 2 > _this.state.swipeLeft * -1) {
	            swipedSlide = slide;
	            return false;
	          }
	        }

	        return true;
	      });

	      var slidesTraversed = Math.abs(swipedSlide.dataset.index - this.state.currentSlide) || 1;

	      return slidesTraversed;
	    } else {
	      return this.props.slidesToScroll;
	    }
	  },

	  swipeEnd: function swipeEnd(e) {
	    if (!this.state.dragging) {
	      e.preventDefault();
	      return;
	    }
	    var touchObject = this.state.touchObject;
	    var minSwipe = this.state.listWidth / this.props.touchThreshold;
	    var swipeDirection = this.swipeDirection(touchObject);

	    if (this.props.verticalSwiping) {
	      minSwipe = this.state.listHeight / this.props.touchThreshold;
	    }

	    // reset the state of touch related state variables.
	    this.setState({
	      dragging: false,
	      edgeDragged: false,
	      swiped: false,
	      swipeLeft: null,
	      touchObject: {}
	    });
	    // Fix for #13
	    if (!touchObject.swipeLength) {
	      return;
	    }
	    if (touchObject.swipeLength > minSwipe) {
	      e.preventDefault();

	      var slideCount = void 0,
	          newSlide = void 0;

	      switch (swipeDirection) {

	        case 'left':
	        case 'down':
	          newSlide = this.state.currentSlide + this.getSlideCount();
	          slideCount = this.props.swipeToSlide ? this.checkNavigable(newSlide) : newSlide;
	          this.state.currentDirection = 0;
	          break;

	        case 'right':
	        case 'up':
	          newSlide = this.state.currentSlide - this.getSlideCount();
	          slideCount = this.props.swipeToSlide ? this.checkNavigable(newSlide) : newSlide;
	          this.state.currentDirection = 1;
	          break;

	        default:
	          slideCount = this.state.currentSlide;

	      }

	      this.slideHandler(slideCount);
	    } else {
	      // Adjust the track back to it's original position.
	      var currentLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	        slideIndex: this.state.currentSlide,
	        trackRef: this.track
	      }, this.props, this.state));

	      this.setState({
	        trackStyle: (0, _trackHelper.getTrackAnimateCSS)((0, _objectAssign2.default)({ left: currentLeft }, this.props, this.state))
	      });
	    }
	  },
	  onInnerSliderEnter: function onInnerSliderEnter(e) {
	    if (this.props.autoplay && this.props.pauseOnHover) {
	      this.pause();
	    }
	  },
	  onInnerSliderLeave: function onInnerSliderLeave(e) {
	    if (this.props.autoplay && this.props.pauseOnHover) {
	      this.autoPlay();
	    }
	  }
	};

	exports.default = EventHandlers;

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.getTrackLeft = exports.getTrackAnimateCSS = exports.getTrackCSS = undefined;

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _objectAssign = __webpack_require__(4);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var checkSpecKeys = function checkSpecKeys(spec, keysArray) {
	  return keysArray.reduce(function (value, key) {
	    return value && spec.hasOwnProperty(key);
	  }, true) ? null : console.error('Keys Missing', spec);
	};

	var getTrackCSS = exports.getTrackCSS = function getTrackCSS(spec) {
	  checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth']);

	  var trackWidth, trackHeight;

	  var trackChildren = spec.slideCount + 2 * spec.slidesToShow;

	  if (!spec.vertical) {
	    if (spec.variableWidth) {
	      trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth;
	    } else if (spec.centerMode) {
	      trackWidth = (spec.slideCount + 2 * (spec.slidesToShow + 1)) * spec.slideWidth;
	    } else {
	      trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth;
	    }
	  } else {
	    trackHeight = trackChildren * spec.slideHeight;
	  }

	  var style = {
	    opacity: 1,
	    WebkitTransform: !spec.vertical ? 'translate3d(' + spec.left + 'px, 0px, 0px)' : 'translate3d(0px, ' + spec.left + 'px, 0px)',
	    transform: !spec.vertical ? 'translate3d(' + spec.left + 'px, 0px, 0px)' : 'translate3d(0px, ' + spec.left + 'px, 0px)',
	    transition: '',
	    WebkitTransition: '',
	    msTransform: !spec.vertical ? 'translateX(' + spec.left + 'px)' : 'translateY(' + spec.left + 'px)'
	  };

	  if (trackWidth) {
	    (0, _objectAssign2.default)(style, { width: trackWidth });
	  }

	  if (trackHeight) {
	    (0, _objectAssign2.default)(style, { height: trackHeight });
	  }

	  // Fallback for IE8
	  if (window && !window.addEventListener && window.attachEvent) {
	    if (!spec.vertical) {
	      style.marginLeft = spec.left + 'px';
	    } else {
	      style.marginTop = spec.left + 'px';
	    }
	  }

	  return style;
	};

	var getTrackAnimateCSS = exports.getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
	  checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth', 'speed', 'cssEase']);

	  var style = getTrackCSS(spec);
	  // useCSS is true by default so it can be undefined
	  style.WebkitTransition = '-webkit-transform ' + spec.speed + 'ms ' + spec.cssEase;
	  style.transition = 'transform ' + spec.speed + 'ms ' + spec.cssEase;
	  return style;
	};

	var getTrackLeft = exports.getTrackLeft = function getTrackLeft(spec) {

	  checkSpecKeys(spec, ['slideIndex', 'trackRef', 'infinite', 'centerMode', 'slideCount', 'slidesToShow', 'slidesToScroll', 'slideWidth', 'listWidth', 'variableWidth', 'slideHeight']);

	  var slideOffset = 0;
	  var targetLeft;
	  var targetSlide;
	  var verticalOffset = 0;

	  if (spec.fade) {
	    return 0;
	  }

	  if (spec.infinite) {
	    if (spec.slideCount >= spec.slidesToShow) {
	      slideOffset = spec.slideWidth * spec.slidesToShow * -1;
	      verticalOffset = spec.slideHeight * spec.slidesToShow * -1;
	    }
	    if (spec.slideCount % spec.slidesToScroll !== 0) {
	      if (spec.slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow) {
	        if (spec.slideIndex > spec.slideCount) {
	          slideOffset = (spec.slidesToShow - (spec.slideIndex - spec.slideCount)) * spec.slideWidth * -1;
	          verticalOffset = (spec.slidesToShow - (spec.slideIndex - spec.slideCount)) * spec.slideHeight * -1;
	        } else {
	          slideOffset = spec.slideCount % spec.slidesToScroll * spec.slideWidth * -1;
	          verticalOffset = spec.slideCount % spec.slidesToScroll * spec.slideHeight * -1;
	        }
	      }
	    }
	  } else {

	    if (spec.slideCount % spec.slidesToScroll !== 0) {
	      if (spec.slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow) {
	        var slidesToOffset = spec.slidesToShow - spec.slideCount % spec.slidesToScroll;
	        slideOffset = slidesToOffset * spec.slideWidth;
	      }
	    }
	  }

	  if (spec.centerMode) {
	    if (spec.infinite) {
	      slideOffset += spec.slideWidth * Math.floor(spec.slidesToShow / 2);
	    } else {
	      slideOffset = spec.slideWidth * Math.floor(spec.slidesToShow / 2);
	    }
	  }

	  if (!spec.vertical) {
	    targetLeft = spec.slideIndex * spec.slideWidth * -1 + slideOffset;
	  } else {
	    targetLeft = spec.slideIndex * spec.slideHeight * -1 + verticalOffset;
	  }

	  if (spec.variableWidth === true) {
	    var targetSlideIndex;
	    if (spec.slideCount <= spec.slidesToShow || spec.infinite === false) {
	      targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).childNodes[spec.slideIndex];
	    } else {
	      targetSlideIndex = spec.slideIndex + spec.slidesToShow;
	      targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).childNodes[targetSlideIndex];
	    }
	    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
	    if (spec.centerMode === true) {
	      if (spec.infinite === false) {
	        targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).children[spec.slideIndex];
	      } else {
	        targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).children[spec.slideIndex + spec.slidesToShow + 1];
	      }

	      targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
	      targetLeft += (spec.listWidth - targetSlide.offsetWidth) / 2;
	    }
	  }

	  return targetLeft;
	};

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _trackHelper = __webpack_require__(273);

	var _objectAssign = __webpack_require__(4);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var helpers = {
	  initialize: function initialize(props) {
	    var slickList = _reactDom2.default.findDOMNode(this.list);

	    var slideCount = _react2.default.Children.count(props.children);
	    var listWidth = this.getWidth(slickList);
	    var trackWidth = this.getWidth(_reactDom2.default.findDOMNode(this.track));
	    var slideWidth;

	    if (!props.vertical) {
	      var centerPaddingAdj = props.centerMode && parseInt(props.centerPadding) * 2;
	      slideWidth = (this.getWidth(_reactDom2.default.findDOMNode(this)) - centerPaddingAdj) / props.slidesToShow;
	    } else {
	      slideWidth = this.getWidth(_reactDom2.default.findDOMNode(this));
	    }

	    var slideHeight = this.getHeight(slickList.querySelector('[data-index="0"]'));
	    var listHeight = slideHeight * props.slidesToShow;

	    var currentSlide = props.rtl ? slideCount - 1 - props.initialSlide : props.initialSlide;

	    this.setState({
	      slideCount: slideCount,
	      slideWidth: slideWidth,
	      listWidth: listWidth,
	      trackWidth: trackWidth,
	      currentSlide: currentSlide,
	      slideHeight: slideHeight,
	      listHeight: listHeight
	    }, function () {

	      var targetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	        slideIndex: this.state.currentSlide,
	        trackRef: this.track
	      }, props, this.state));
	      // getCSS function needs previously set state
	      var trackStyle = (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: targetLeft }, props, this.state));

	      this.setState({ trackStyle: trackStyle });

	      this.autoPlay(); // once we're set up, trigger the initial autoplay.
	    });
	  },
	  update: function update(props) {
	    var slickList = _reactDom2.default.findDOMNode(this.list);
	    // This method has mostly same code as initialize method.
	    // Refactor it
	    var slideCount = _react2.default.Children.count(props.children);
	    var listWidth = this.getWidth(slickList);
	    var trackWidth = this.getWidth(_reactDom2.default.findDOMNode(this.track));
	    var slideWidth;

	    if (!props.vertical) {
	      var centerPaddingAdj = props.centerMode && parseInt(props.centerPadding) * 2;
	      slideWidth = (this.getWidth(_reactDom2.default.findDOMNode(this)) - centerPaddingAdj) / props.slidesToShow;
	    } else {
	      slideWidth = this.getWidth(_reactDom2.default.findDOMNode(this));
	    }

	    var slideHeight = this.getHeight(slickList.querySelector('[data-index="0"]'));
	    var listHeight = slideHeight * props.slidesToShow;

	    // pause slider if autoplay is set to false
	    if (!props.autoplay) this.pause();

	    this.setState({
	      slideCount: slideCount,
	      slideWidth: slideWidth,
	      listWidth: listWidth,
	      trackWidth: trackWidth,
	      slideHeight: slideHeight,
	      listHeight: listHeight
	    }, function () {

	      var targetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	        slideIndex: this.state.currentSlide,
	        trackRef: this.track
	      }, props, this.state));
	      // getCSS function needs previously set state
	      var trackStyle = (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: targetLeft }, props, this.state));

	      this.setState({ trackStyle: trackStyle });
	    });
	  },
	  getWidth: function getWidth(elem) {
	    return elem.getBoundingClientRect().width || elem.offsetWidth;
	  },
	  getHeight: function getHeight(elem) {
	    return elem.getBoundingClientRect().height || elem.offsetHeight;
	  },

	  adaptHeight: function adaptHeight() {
	    if (this.props.adaptiveHeight) {
	      var selector = '[data-index="' + this.state.currentSlide + '"]';
	      if (this.list) {
	        var slickList = _reactDom2.default.findDOMNode(this.list);
	        slickList.style.height = slickList.querySelector(selector).offsetHeight + 'px';
	      }
	    }
	  },
	  canGoNext: function canGoNext(opts) {
	    var canGo = true;
	    if (!opts.infinite) {
	      if (opts.centerMode) {
	        // check if current slide is last slide
	        if (opts.currentSlide >= opts.slideCount - 1) {
	          canGo = false;
	        }
	      } else {
	        // check if all slides are shown in slider
	        if (opts.slideCount <= opts.slidesToShow || opts.currentSlide >= opts.slideCount - opts.slidesToShow) {
	          canGo = false;
	        }
	      }
	    }
	    return canGo;
	  },
	  slideHandler: function slideHandler(index) {
	    var _this = this;

	    // Functionality of animateSlide and postSlide is merged into this function
	    // console.log('slideHandler', index);
	    var targetSlide, currentSlide;
	    var targetLeft, currentLeft;
	    var callback;

	    if (this.props.waitForAnimate && this.state.animating) {
	      return;
	    }

	    if (this.props.fade) {
	      currentSlide = this.state.currentSlide;

	      // Don't change slide if it's not infite and current slide is the first or last slide.
	      if (this.props.infinite === false && (index < 0 || index >= this.state.slideCount)) {
	        return;
	      }

	      //  Shifting targetSlide back into the range
	      if (index < 0) {
	        targetSlide = index + this.state.slideCount;
	      } else if (index >= this.state.slideCount) {
	        targetSlide = index - this.state.slideCount;
	      } else {
	        targetSlide = index;
	      }

	      if (this.props.lazyLoad && this.state.lazyLoadedList.indexOf(targetSlide) < 0) {
	        this.setState({
	          lazyLoadedList: this.state.lazyLoadedList.concat(targetSlide)
	        });
	      }

	      callback = function callback() {
	        _this.setState({
	          animating: false
	        });
	        if (_this.props.afterChange) {
	          _this.props.afterChange(targetSlide);
	        }
	        delete _this.animationEndCallback;
	      };

	      this.setState({
	        animating: true,
	        currentSlide: targetSlide
	      }, function () {
	        this.animationEndCallback = setTimeout(callback, this.props.speed);
	      });

	      if (this.props.beforeChange) {
	        this.props.beforeChange(this.state.currentSlide, targetSlide);
	      }

	      this.autoPlay();
	      return;
	    }

	    targetSlide = index;
	    if (targetSlide < 0) {
	      if (this.props.infinite === false) {
	        currentSlide = 0;
	      } else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
	        currentSlide = this.state.slideCount - this.state.slideCount % this.props.slidesToScroll;
	      } else {
	        currentSlide = this.state.slideCount + targetSlide;
	      }
	    } else if (targetSlide >= this.state.slideCount) {
	      if (this.props.infinite === false) {
	        currentSlide = this.state.slideCount - this.props.slidesToShow;
	      } else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
	        currentSlide = 0;
	      } else {
	        currentSlide = targetSlide - this.state.slideCount;
	      }
	    } else {
	      currentSlide = targetSlide;
	    }

	    targetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	      slideIndex: targetSlide,
	      trackRef: this.track
	    }, this.props, this.state));

	    currentLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	      slideIndex: currentSlide,
	      trackRef: this.track
	    }, this.props, this.state));

	    if (this.props.infinite === false) {
	      targetLeft = currentLeft;
	    }

	    if (this.props.beforeChange) {
	      this.props.beforeChange(this.state.currentSlide, currentSlide);
	    }

	    if (this.props.lazyLoad) {
	      var loaded = true;
	      var slidesToLoad = [];
	      for (var i = targetSlide; i < targetSlide + this.props.slidesToShow; i++) {
	        loaded = loaded && this.state.lazyLoadedList.indexOf(i) >= 0;
	        if (!loaded) {
	          slidesToLoad.push(i);
	        }
	      }
	      if (!loaded) {
	        this.setState({
	          lazyLoadedList: this.state.lazyLoadedList.concat(slidesToLoad)
	        });
	      }
	    }

	    // Slide Transition happens here.
	    // animated transition happens to target Slide and
	    // non - animated transition happens to current Slide
	    // If CSS transitions are false, directly go the current slide.

	    if (this.props.useCSS === false) {

	      this.setState({
	        currentSlide: currentSlide,
	        trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: currentLeft }, this.props, this.state))
	      }, function () {
	        if (this.props.afterChange) {
	          this.props.afterChange(currentSlide);
	        }
	      });
	    } else {

	      var nextStateChanges = {
	        animating: false,
	        currentSlide: currentSlide,
	        trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: currentLeft }, this.props, this.state)),
	        swipeLeft: null
	      };

	      callback = function callback() {
	        _this.setState(nextStateChanges);
	        if (_this.props.afterChange) {
	          _this.props.afterChange(currentSlide);
	        }
	        delete _this.animationEndCallback;
	      };

	      this.setState({
	        animating: true,
	        currentSlide: currentSlide,
	        trackStyle: (0, _trackHelper.getTrackAnimateCSS)((0, _objectAssign2.default)({ left: targetLeft }, this.props, this.state))
	      }, function () {
	        this.animationEndCallback = setTimeout(callback, this.props.speed);
	      });
	    }

	    this.autoPlay();
	  },
	  swipeDirection: function swipeDirection(touchObject) {
	    var xDist, yDist, r, swipeAngle;

	    xDist = touchObject.startX - touchObject.curX;
	    yDist = touchObject.startY - touchObject.curY;
	    r = Math.atan2(yDist, xDist);

	    swipeAngle = Math.round(r * 180 / Math.PI);
	    if (swipeAngle < 0) {
	      swipeAngle = 360 - Math.abs(swipeAngle);
	    }
	    if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
	      return this.props.rtl === false ? 'left' : 'right';
	    }
	    if (swipeAngle >= 135 && swipeAngle <= 225) {
	      return this.props.rtl === false ? 'right' : 'left';
	    }
	    if (this.props.verticalSwiping === true) {
	      if (swipeAngle >= 35 && swipeAngle <= 135) {
	        return 'down';
	      } else {
	        return 'up';
	      }
	    }

	    return 'vertical';
	  },
	  play: function play() {
	    var nextIndex;

	    if (!this.state.mounted) {
	      return false;
	    }

	    if (this.props.rtl) {
	      nextIndex = this.state.currentSlide - this.props.slidesToScroll;
	    } else {
	      if (this.canGoNext(_extends({}, this.props, this.state))) {
	        nextIndex = this.state.currentSlide + this.props.slidesToScroll;
	      } else {
	        return false;
	      }
	    }

	    this.slideHandler(nextIndex);
	  },
	  autoPlay: function autoPlay() {
	    if (this.state.autoPlayTimer) {
	      return;
	    }
	    if (this.props.autoplay) {
	      this.setState({
	        autoPlayTimer: setInterval(this.play, this.props.autoplaySpeed)
	      });
	    }
	  },
	  pause: function pause() {
	    if (this.state.autoPlayTimer) {
	      clearInterval(this.state.autoPlayTimer);
	      this.setState({
	        autoPlayTimer: null
	      });
	    }
	  }
	};

	exports.default = helpers;

/***/ },
/* 275 */
/***/ function(module, exports) {

	"use strict";

	var initialState = {
	    animating: false,
	    dragging: false,
	    autoPlayTimer: null,
	    currentDirection: 0,
	    currentLeft: null,
	    currentSlide: 0,
	    direction: 1,
	    listWidth: null,
	    listHeight: null,
	    // loadIndex: 0,
	    slideCount: null,
	    slideWidth: null,
	    slideHeight: null,
	    // sliding: false,
	    // slideOffset: 0,
	    swipeLeft: null,
	    touchObject: {
	        startX: 0,
	        startY: 0,
	        curX: 0,
	        curY: 0
	    },

	    lazyLoadedList: [],

	    // added for react
	    initialized: false,
	    edgeDragged: false,
	    swiped: false, // used by swipeEvent. differentites between touch and swipe.
	    trackStyle: {},
	    trackWidth: 0

	    // Removed
	    // transformsEnabled: false,
	    // $nextArrow: null,
	    // $prevArrow: null,
	    // $dots: null,
	    // $list: null,
	    // $slideTrack: null,
	    // $slides: null,
	};

	module.exports = initialState;

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultProps = {
	    className: '',
	    accessibility: true,
	    adaptiveHeight: false,
	    arrows: true,
	    autoplay: false,
	    autoplaySpeed: 3000,
	    centerMode: false,
	    centerPadding: '50px',
	    cssEase: 'ease',
	    customPaging: function customPaging(i) {
	        return _react2.default.createElement(
	            'button',
	            null,
	            i + 1
	        );
	    },
	    dots: false,
	    dotsClass: 'slick-dots',
	    draggable: true,
	    easing: 'linear',
	    edgeFriction: 0.35,
	    fade: false,
	    focusOnSelect: false,
	    infinite: true,
	    initialSlide: 0,
	    lazyLoad: false,
	    pauseOnHover: true,
	    responsive: null,
	    rtl: false,
	    slide: 'div',
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    speed: 500,
	    swipe: true,
	    swipeToSlide: false,
	    touchMove: true,
	    touchThreshold: 5,
	    useCSS: true,
	    variableWidth: false,
	    vertical: false,
	    waitForAnimate: true,
	    afterChange: null,
	    beforeChange: null,
	    edgeEvent: null,
	    init: null,
	    swipeEvent: null,
	    // nextArrow, prevArrow are react componets
	    nextArrow: null,
	    prevArrow: null
	};

	module.exports = defaultProps;

/***/ },
/* 277 */,
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Track = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _objectAssign = __webpack_require__(4);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _classnames = __webpack_require__(277);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getSlideClasses = function getSlideClasses(spec) {
	  var slickActive, slickCenter, slickCloned;
	  var centerOffset, index;

	  if (spec.rtl) {
	    index = spec.slideCount - 1 - spec.index;
	  } else {
	    index = spec.index;
	  }

	  slickCloned = index < 0 || index >= spec.slideCount;
	  if (spec.centerMode) {
	    centerOffset = Math.floor(spec.slidesToShow / 2);
	    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;
	    if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
	      slickActive = true;
	    }
	  } else {
	    slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
	  }
	  return (0, _classnames2.default)({
	    'slick-slide': true,
	    'slick-active': slickActive,
	    'slick-center': slickCenter,
	    'slick-cloned': slickCloned
	  });
	};

	var getSlideStyle = function getSlideStyle(spec) {
	  var style = {};

	  if (spec.variableWidth === undefined || spec.variableWidth === false) {
	    style.width = spec.slideWidth;
	  }

	  if (spec.fade) {
	    style.position = 'relative';
	    style.left = -spec.index * spec.slideWidth;
	    style.opacity = spec.currentSlide === spec.index ? 1 : 0;
	    style.transition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase;
	    style.WebkitTransition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase;
	  }

	  return style;
	};

	var getKey = function getKey(child, fallbackKey) {
	  // key could be a zero
	  return child.key === null || child.key === undefined ? fallbackKey : child.key;
	};

	var renderSlides = function renderSlides(spec) {
	  var key;
	  var slides = [];
	  var preCloneSlides = [];
	  var postCloneSlides = [];
	  var count = _react2.default.Children.count(spec.children);

	  _react2.default.Children.forEach(spec.children, function (elem, index) {
	    var child = void 0;
	    var childOnClickOptions = {
	      message: 'children',
	      index: index,
	      slidesToScroll: spec.slidesToScroll,
	      currentSlide: spec.currentSlide
	    };

	    if (!spec.lazyLoad | (spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0)) {
	      child = elem;
	    } else {
	      child = _react2.default.createElement('div', null);
	    }
	    var childStyle = getSlideStyle((0, _objectAssign2.default)({}, spec, { index: index }));
	    var slickClasses = getSlideClasses((0, _objectAssign2.default)({ index: index }, spec));
	    var cssClasses;

	    if (child.props.className) {
	      cssClasses = (0, _classnames2.default)(slickClasses, child.props.className);
	    } else {
	      cssClasses = slickClasses;
	    }

	    var onClick = function onClick(e) {
	      child.props && child.props.onClick && child.props.onClick(e);
	      if (spec.focusOnSelect) {
	        spec.focusOnSelect(childOnClickOptions);
	      }
	    };

	    slides.push(_react2.default.cloneElement(child, {
	      key: 'original' + getKey(child, index),
	      'data-index': index,
	      className: cssClasses,
	      tabIndex: '-1',
	      style: (0, _objectAssign2.default)({ outline: 'none' }, child.props.style || {}, childStyle),
	      onClick: onClick
	    }));

	    // variableWidth doesn't wrap properly.
	    if (spec.infinite && spec.fade === false) {
	      var infiniteCount = spec.variableWidth ? spec.slidesToShow + 1 : spec.slidesToShow;

	      if (index >= count - infiniteCount) {
	        key = -(count - index);
	        preCloneSlides.push(_react2.default.cloneElement(child, {
	          key: 'precloned' + getKey(child, key),
	          'data-index': key,
	          className: cssClasses,
	          style: (0, _objectAssign2.default)({}, child.props.style || {}, childStyle),
	          onClick: onClick
	        }));
	      }

	      if (index < infiniteCount) {
	        key = count + index;
	        postCloneSlides.push(_react2.default.cloneElement(child, {
	          key: 'postcloned' + getKey(child, key),
	          'data-index': key,
	          className: cssClasses,
	          style: (0, _objectAssign2.default)({}, child.props.style || {}, childStyle),
	          onClick: onClick
	        }));
	      }
	    }
	  });

	  if (spec.rtl) {
	    return preCloneSlides.concat(slides, postCloneSlides).reverse();
	  } else {
	    return preCloneSlides.concat(slides, postCloneSlides);
	  }
	};

	var Track = exports.Track = _react2.default.createClass({
	  displayName: 'Track',

	  render: function render() {
	    var slides = renderSlides.call(this, this.props);
	    return _react2.default.createElement(
	      'div',
	      { className: 'slick-track', style: this.props.trackStyle },
	      slides
	    );
	  }
	});

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Dots = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(277);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getDotCount = function getDotCount(spec) {
	  var dots;
	  dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
	  return dots;
	};

	var Dots = exports.Dots = _react2.default.createClass({
	  displayName: 'Dots',


	  clickHandler: function clickHandler(options, e) {
	    // In Autoplay the focus stays on clicked button even after transition
	    // to next slide. That only goes away by click somewhere outside
	    e.preventDefault();
	    this.props.clickHandler(options);
	  },
	  render: function render() {
	    var _this = this;

	    var dotCount = getDotCount({
	      slideCount: this.props.slideCount,
	      slidesToScroll: this.props.slidesToScroll
	    });

	    // Apply join & split to Array to pre-fill it for IE8
	    //
	    // Credit: http://stackoverflow.com/a/13735425/1849458
	    var dots = Array.apply(null, Array(dotCount + 1).join('0').split('')).map(function (x, i) {

	      var leftBound = i * _this.props.slidesToScroll;
	      var rightBound = i * _this.props.slidesToScroll + (_this.props.slidesToScroll - 1);
	      var className = (0, _classnames2.default)({
	        'slick-active': _this.props.currentSlide >= leftBound && _this.props.currentSlide <= rightBound
	      });

	      var dotOptions = {
	        message: 'dots',
	        index: i,
	        slidesToScroll: _this.props.slidesToScroll,
	        currentSlide: _this.props.currentSlide
	      };

	      var onClick = _this.clickHandler.bind(_this, dotOptions);

	      return _react2.default.createElement(
	        'li',
	        { key: i, className: className },
	        _react2.default.cloneElement(_this.props.customPaging(i), { onClick: onClick })
	      );
	    });

	    return _react2.default.createElement(
	      'ul',
	      { className: this.props.dotsClass, style: { display: 'block' } },
	      dots
	    );
	  }
	});

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.NextArrow = exports.PrevArrow = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(277);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _helpers = __webpack_require__(274);

	var _helpers2 = _interopRequireDefault(_helpers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PrevArrow = exports.PrevArrow = _react2.default.createClass({
	  displayName: 'PrevArrow',


	  clickHandler: function clickHandler(options, e) {
	    if (e) {
	      e.preventDefault();
	    }
	    this.props.clickHandler(options, e);
	  },
	  render: function render() {
	    var prevClasses = { 'slick-arrow': true, 'slick-prev': true };
	    var prevHandler = this.clickHandler.bind(this, { message: 'previous' });

	    if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
	      prevClasses['slick-disabled'] = true;
	      prevHandler = null;
	    }

	    var prevArrowProps = {
	      key: '0',
	      'data-role': 'none',
	      className: (0, _classnames2.default)(prevClasses),
	      style: { display: 'block' },
	      onClick: prevHandler
	    };
	    var prevArrow;

	    if (this.props.prevArrow) {
	      prevArrow = _react2.default.cloneElement(this.props.prevArrow, prevArrowProps);
	    } else {
	      prevArrow = _react2.default.createElement(
	        'button',
	        _extends({ key: '0', type: 'button' }, prevArrowProps),
	        ' Previous'
	      );
	    }

	    return prevArrow;
	  }
	});

	var NextArrow = exports.NextArrow = _react2.default.createClass({
	  displayName: 'NextArrow',

	  clickHandler: function clickHandler(options, e) {
	    if (e) {
	      e.preventDefault();
	    }
	    this.props.clickHandler(options, e);
	  },
	  render: function render() {
	    var nextClasses = { 'slick-arrow': true, 'slick-next': true };
	    var nextHandler = this.clickHandler.bind(this, { message: 'next' });

	    if (!_helpers2.default.canGoNext(this.props)) {
	      nextClasses['slick-disabled'] = true;
	      nextHandler = null;
	    }

	    var nextArrowProps = {
	      key: '1',
	      'data-role': 'none',
	      className: (0, _classnames2.default)(nextClasses),
	      style: { display: 'block' },
	      onClick: nextHandler
	    };

	    var nextArrow;

	    if (this.props.nextArrow) {
	      nextArrow = _react2.default.cloneElement(this.props.nextArrow, nextArrowProps);
	    } else {
	      nextArrow = _react2.default.createElement(
	        'button',
	        _extends({ key: '1', type: 'button' }, nextArrowProps),
	        ' Next'
	      );
	    }

	    return nextArrow;
	  }
	});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var camel2hyphen = __webpack_require__(282);

	var isDimension = function (feature) {
	  var re = /[height|width]$/;
	  return re.test(feature);
	};

	var obj2mq = function (obj) {
	  var mq = '';
	  var features = Object.keys(obj);
	  features.forEach(function (feature, index) {
	    var value = obj[feature];
	    feature = camel2hyphen(feature);
	    // Add px to dimension features
	    if (isDimension(feature) && typeof value === 'number') {
	      value = value + 'px';
	    }
	    if (value === true) {
	      mq += feature;
	    } else if (value === false) {
	      mq += 'not ' + feature;
	    } else {
	      mq += '(' + feature + ': ' + value + ')';
	    }
	    if (index < features.length-1) {
	      mq += ' and '
	    }
	  });
	  return mq;
	};

	var json2mq = function (query) {
	  var mq = '';
	  if (typeof query === 'string') {
	    return query;
	  }
	  // Handling array of media queries
	  if (query instanceof Array) {
	    query.forEach(function (q, index) {
	      mq += obj2mq(q);
	      if (index < query.length-1) {
	        mq += ', '
	      }
	    });
	    return mq;
	  }
	  // Handling single media query
	  return obj2mq(query);
	};

	module.exports = json2mq;

/***/ },
/* 282 */
/***/ function(module, exports) {

	var camel2hyphen = function (str) {
	  return str
	          .replace(/[A-Z]/g, function (match) {
	            return '-' + match.toLowerCase();
	          })
	          .toLowerCase();
	};

	module.exports = camel2hyphen;

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var canUseDOM = __webpack_require__(284);
	var enquire = canUseDOM && __webpack_require__(285);
	var json2mq = __webpack_require__(281);

	var ResponsiveMixin = {
	  media: function (query, handler) {
	    query = json2mq(query);
	    if (typeof handler === 'function') {
	      handler = {
	        match: handler
	      };
	    }
	    canUseDOM && enquire.register(query, handler);

	    // Queue the handlers to unregister them at unmount  
	    if (! this._responsiveMediaHandlers) {
	      this._responsiveMediaHandlers = [];
	    }
	    this._responsiveMediaHandlers.push({query: query, handler: handler});
	  },
	  componentWillUnmount: function () {
	    if (this._responsiveMediaHandlers) {
	      this._responsiveMediaHandlers.forEach(function(obj) {
	        canUseDOM && enquire.unregister(obj.query, obj.handler);
	      });
	    }
	  }
	};

	module.exports = ResponsiveMixin;


/***/ },
/* 284 */
/***/ function(module, exports) {

	var canUseDOM = !!(
	  typeof window !== 'undefined' &&
	  window.document &&
	  window.document.createElement
	);

	module.exports = canUseDOM;

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * enquire.js v2.1.1 - Awesome Media Queries in JavaScript
	 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
	 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
	 */

	;(function (name, context, factory) {
		var matchMedia = window.matchMedia;

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = factory(matchMedia);
		}
		else if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return (context[name] = factory(matchMedia));
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
		else {
			context[name] = factory(matchMedia);
		}
	}('enquire', this, function (matchMedia) {

		'use strict';

	    /*jshint unused:false */
	    /**
	     * Helper function for iterating over a collection
	     *
	     * @param collection
	     * @param fn
	     */
	    function each(collection, fn) {
	        var i      = 0,
	            length = collection.length,
	            cont;

	        for(i; i < length; i++) {
	            cont = fn(collection[i], i);
	            if(cont === false) {
	                break; //allow early exit
	            }
	        }
	    }

	    /**
	     * Helper function for determining whether target object is an array
	     *
	     * @param target the object under test
	     * @return {Boolean} true if array, false otherwise
	     */
	    function isArray(target) {
	        return Object.prototype.toString.apply(target) === '[object Array]';
	    }

	    /**
	     * Helper function for determining whether target object is a function
	     *
	     * @param target the object under test
	     * @return {Boolean} true if function, false otherwise
	     */
	    function isFunction(target) {
	        return typeof target === 'function';
	    }

	    /**
	     * Delegate to handle a media query being matched and unmatched.
	     *
	     * @param {object} options
	     * @param {function} options.match callback for when the media query is matched
	     * @param {function} [options.unmatch] callback for when the media query is unmatched
	     * @param {function} [options.setup] one-time callback triggered the first time a query is matched
	     * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
	     * @constructor
	     */
	    function QueryHandler(options) {
	        this.options = options;
	        !options.deferSetup && this.setup();
	    }
	    QueryHandler.prototype = {

	        /**
	         * coordinates setup of the handler
	         *
	         * @function
	         */
	        setup : function() {
	            if(this.options.setup) {
	                this.options.setup();
	            }
	            this.initialised = true;
	        },

	        /**
	         * coordinates setup and triggering of the handler
	         *
	         * @function
	         */
	        on : function() {
	            !this.initialised && this.setup();
	            this.options.match && this.options.match();
	        },

	        /**
	         * coordinates the unmatch event for the handler
	         *
	         * @function
	         */
	        off : function() {
	            this.options.unmatch && this.options.unmatch();
	        },

	        /**
	         * called when a handler is to be destroyed.
	         * delegates to the destroy or unmatch callbacks, depending on availability.
	         *
	         * @function
	         */
	        destroy : function() {
	            this.options.destroy ? this.options.destroy() : this.off();
	        },

	        /**
	         * determines equality by reference.
	         * if object is supplied compare options, if function, compare match callback
	         *
	         * @function
	         * @param {object || function} [target] the target for comparison
	         */
	        equals : function(target) {
	            return this.options === target || this.options.match === target;
	        }

	    };
	    /**
	     * Represents a single media query, manages it's state and registered handlers for this query
	     *
	     * @constructor
	     * @param {string} query the media query string
	     * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
	     */
	    function MediaQuery(query, isUnconditional) {
	        this.query = query;
	        this.isUnconditional = isUnconditional;
	        this.handlers = [];
	        this.mql = matchMedia(query);

	        var self = this;
	        this.listener = function(mql) {
	            self.mql = mql;
	            self.assess();
	        };
	        this.mql.addListener(this.listener);
	    }
	    MediaQuery.prototype = {

	        /**
	         * add a handler for this query, triggering if already active
	         *
	         * @param {object} handler
	         * @param {function} handler.match callback for when query is activated
	         * @param {function} [handler.unmatch] callback for when query is deactivated
	         * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
	         * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
	         */
	        addHandler : function(handler) {
	            var qh = new QueryHandler(handler);
	            this.handlers.push(qh);

	            this.matches() && qh.on();
	        },

	        /**
	         * removes the given handler from the collection, and calls it's destroy methods
	         * 
	         * @param {object || function} handler the handler to remove
	         */
	        removeHandler : function(handler) {
	            var handlers = this.handlers;
	            each(handlers, function(h, i) {
	                if(h.equals(handler)) {
	                    h.destroy();
	                    return !handlers.splice(i,1); //remove from array and exit each early
	                }
	            });
	        },

	        /**
	         * Determine whether the media query should be considered a match
	         * 
	         * @return {Boolean} true if media query can be considered a match, false otherwise
	         */
	        matches : function() {
	            return this.mql.matches || this.isUnconditional;
	        },

	        /**
	         * Clears all handlers and unbinds events
	         */
	        clear : function() {
	            each(this.handlers, function(handler) {
	                handler.destroy();
	            });
	            this.mql.removeListener(this.listener);
	            this.handlers.length = 0; //clear array
	        },

	        /*
	         * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
	         */
	        assess : function() {
	            var action = this.matches() ? 'on' : 'off';

	            each(this.handlers, function(handler) {
	                handler[action]();
	            });
	        }
	    };
	    /**
	     * Allows for registration of query handlers.
	     * Manages the query handler's state and is responsible for wiring up browser events
	     *
	     * @constructor
	     */
	    function MediaQueryDispatch () {
	        if(!matchMedia) {
	            throw new Error('matchMedia not present, legacy browsers require a polyfill');
	        }

	        this.queries = {};
	        this.browserIsIncapable = !matchMedia('only all').matches;
	    }

	    MediaQueryDispatch.prototype = {

	        /**
	         * Registers a handler for the given media query
	         *
	         * @param {string} q the media query
	         * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
	         * @param {function} options.match fired when query matched
	         * @param {function} [options.unmatch] fired when a query is no longer matched
	         * @param {function} [options.setup] fired when handler first triggered
	         * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
	         * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
	         */
	        register : function(q, options, shouldDegrade) {
	            var queries         = this.queries,
	                isUnconditional = shouldDegrade && this.browserIsIncapable;

	            if(!queries[q]) {
	                queries[q] = new MediaQuery(q, isUnconditional);
	            }

	            //normalise to object in an array
	            if(isFunction(options)) {
	                options = { match : options };
	            }
	            if(!isArray(options)) {
	                options = [options];
	            }
	            each(options, function(handler) {
	                queries[q].addHandler(handler);
	            });

	            return this;
	        },

	        /**
	         * unregisters a query and all it's handlers, or a specific handler for a query
	         *
	         * @param {string} q the media query to target
	         * @param {object || function} [handler] specific handler to unregister
	         */
	        unregister : function(q, handler) {
	            var query = this.queries[q];

	            if(query) {
	                if(handler) {
	                    query.removeHandler(handler);
	                }
	                else {
	                    query.clear();
	                    delete this.queries[q];
	                }
	            }

	            return this;
	        }
	    };

		return new MediaQueryDispatch();

	}));

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(287);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(289)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./movie--hero.pcss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./movie--hero.pcss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(288)();
	// imports


	// module
	exports.push([module.id, ".movie--hero__container___3wac7 {\n\tposition: relative;\n\toverflow: hidden;\n\tmargin-bottom: 4em;\n\tcolor: white;\n\tmax-height: 45em;\n}\n\n.movie--hero__container___3wac7 a {\n\tcolor: white;\n}\n\n.movie--hero__image___2qTn7 {\n\tmargin: 0 auto;\n}\n\n.movie--hero__title___2SjBd {\n\tfont-size: 60px;\n}\n\n.movie--hero__overview___RbuCN {\n\tfont-size: 20px;\n\tmargin-bottom: 1em;\n}\n\n.movie--hero__link___1z7Xz {\n\tfont-size: 20px;\n}\n\n.movie--hero__info___2mG6U {\n\t-webkit-transition: opacity 0.5s, -webkit-transform 0.3s ease-in-out;\n\ttransition: opacity 0.5s, -webkit-transform 0.3s ease-in-out;\n\ttransition: opacity 0.5s, transform 0.3s ease-in-out;\n\ttransition: opacity 0.5s, transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n\t-webkit-transition-delay: 0.5s;\n\t        transition-delay: 0.5s;\n\t-webkit-transform: translateX(-50px);\n\t        transform: translateX(-50px);\n\tposition: absolute;\n\topacity: 0;\n\tbottom: 10%;\n\twidth: 30em;\n\tpadding: 2em;\n\tbackground: rgba(0, 0, 0, 0.5);\n}\n", ""]);

	// exports
	exports.locals = {
		"container": "movie--hero__container___3wac7",
		"image": "movie--hero__image___2qTn7",
		"title": "movie--hero__title___2SjBd",
		"overview": "movie--hero__overview___RbuCN",
		"link": "movie--hero__link___1z7Xz",
		"info": "movie--hero__info___2mG6U"
	};

/***/ },
/* 288 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(291);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(289)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./slick.pcss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./slick.pcss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(288)();
	// imports


	// module
	exports.push([module.id, ".slick-active .container > div {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n}\n.slick-arrow {\n    position: absolute;\n    z-index: 999;\n    top: 40%;\n    cursor: pointer;\n    font-size: 80px\n}\n.slick-arrow.slick-prev {\n    left: 0;\n}\n.slick-arrow.slick-next {\n    right: 0;\n}\n.slick-dots {\n    text-align: center;\n    position: absolute;\n    bottom: 1em;\n    width: 100%;\n}\n.slick-dots li {\n    display: inline;\n}\n.slick-dots li button {\n    height: 12px;\n    cursor: pointer;\n    width: 12px;\n    border-radius: 12px;\n    border: none;\n    font-size: 0;\n    margin: 10px;\n    background-color: white;\n}\n/* Slider */\n.slick-slider\n  {\n    position: relative;\n    display: block;\n    box-sizing: border-box;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    -ms-touch-action: pan-y;\n    touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n.slick-list\n  {\n    position: relative;\n    display: block;\n    overflow: hidden;\n    margin: 0;\n    padding: 0;\n}\n.slick-list:focus\n  {\n    outline: none;\n}\n.slick-list.dragging\n  {\n    cursor: pointer;\n    cursor: hand;\n}\n.slick-slider .slick-track, .slick-slider .slick-list\n  {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n}\n.slick-track\n  {\n    position: relative;\n    top: 0;\n    left: 0;\n    max-height: 45em;\n    display: block;\n}\n.slick-track:before, .slick-track:after\n  {\n    display: table;\n    content: '';\n}\n.slick-track:after\n  {\n    clear: both;\n}\n.slick-loading .slick-track\n  {\n    visibility: hidden;\n}\n.slick-slide\n  {\n    display: none;\n    float: left;\n    height: 100%;\n    min-height: 1px;\n}\n[dir='rtl'] .slick-slide\n  {\n    float: right;\n}\n.slick-slide img\n  {\n    display: block;\n}\n.slick-slide.slick-loading img\n  {\n    display: none;\n}\n.slick-slide.dragging img\n  {\n    pointer-events: none;\n}\n.slick-initialized .slick-slide\n  {\n    display: block;\n}\n.slick-loading .slick-slide\n  {\n    visibility: hidden;\n}\n.slick-vertical .slick-slide\n  {\n    display: block;\n    height: auto;\n    border: 1px solid transparent;\n}\n.slick-arrow.slick-hidden {\n    display: none;\n}\n", ""]);

	// exports


/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(172);

	var _MovieList = __webpack_require__(293);

	var _MovieList2 = _interopRequireDefault(_MovieList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MovieList = function MovieList(props) {
	  var imageBaseUrl = props.config.images.secure_base_url;
	  var fileSize = props.config.images.backdrop_sizes[0];

	  var resultNodes = props.data.map(function (result) {
	    var path = '/movie/ ' + result.id;
	    return _react2.default.createElement(
	      'div',
	      { className: _MovieList2.default.movie, key: result.id },
	      _react2.default.createElement('img', { src: imageBaseUrl + fileSize + result.poster_path, alt: '' }),
	      _react2.default.createElement(
	        'div',
	        { className: _MovieList2.default.info },
	        _react2.default.createElement(
	          'h2',
	          { className: _MovieList2.default.title },
	          result.title
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { className: _MovieList2.default.link, to: path },
	          _react2.default.createElement(
	            'i',
	            { className: 'material-icons' },
	            'arrow_forward'
	          )
	        )
	      )
	    );
	  });
	  return _react2.default.createElement(
	    'div',
	    { className: _MovieList2.default.container },
	    resultNodes
	  );
	};

	MovieList.propTypes = {
	  data: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object),
	  config: _react2.default.PropTypes.shape({
	    images: _react2.default.PropTypes.shape({
	      backdrop_sizes: _react2.default.PropTypes.array,
	      secure_base_url: _react2.default.PropTypes.string
	    })
	  })
	};

	MovieList.defaultProps = {
	  data: [],
	  config: {}
	};

	exports.default = MovieList;

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(294);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(289)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./MovieList.pcss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./MovieList.pcss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(288)();
	// imports
	exports.i(__webpack_require__(295), undefined);

	// module
	exports.push([module.id, ".MovieList__container___HIGV7 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.MovieList__movie___3kMiQ {\n  -ms-flex-preferred-size: 25%;\n      flex-basis: 25%;\n  position: relative;\n  overflow: hidden;\n  color: " + __webpack_require__(295).locals["fontcolor"] + ";\n  overflow: hidden\n}\n\n.MovieList__movie___3kMiQ:hover .MovieList__info___3LZde{\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n\n.MovieList__info___3LZde {\n  -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.15, 1, 0.33, 1);\n  transition: -webkit-transform 0.5s cubic-bezier(0.15, 1, 0.33, 1);\n  transition: transform 0.5s cubic-bezier(0.15, 1, 0.33, 1);\n  transition: transform 0.5s cubic-bezier(0.15, 1, 0.33, 1), -webkit-transform 0.5s cubic-bezier(0.15, 1, 0.33, 1);\n  background: rgba(255,255,255, 0.8);\n  position: absolute;\n  bottom: 0;\n  padding: 18px;\n  width: 100%;\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n\n}\n\n.MovieList__link___3ip5G {\n  font-size: 25px;\n  color: " + __webpack_require__(295).locals["fontcolor"] + ";\n}\n\n.MovieList__title___eNXX7 {\n  font-size: 25px;\n  margin: 0;\n}\n", ""]);

	// exports
	exports.locals = {
		"colors": "'./colors.pcss'",
		"fontcolor": "" + __webpack_require__(295).locals["fontcolor"] + "",
		"container": "MovieList__container___HIGV7",
		"movie": "MovieList__movie___3kMiQ",
		"info": "MovieList__info___3LZde",
		"link": "MovieList__link___3ip5G",
		"title": "MovieList__title___eNXX7"
	};

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(288)();
	// imports


	// module
	exports.push([module.id, "\n", ""]);

	// exports
	exports.locals = {
		"boxcolor": "#fff",
		"fontcolor": "#000",
		"bgcolor": "#edeae1",
		"bgalt": "#515151",
		"bgaltlight": "#727272",
		"greylight": "#ccc"
	};

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ApiConnect = __webpack_require__(243);

	var _ApiConnect2 = _interopRequireDefault(_ApiConnect);

	var _MovieFull = __webpack_require__(297);

	var _MovieFull2 = _interopRequireDefault(_MovieFull);

	var _Reviews = __webpack_require__(306);

	var _Reviews2 = _interopRequireDefault(_Reviews);

	var _Credits = __webpack_require__(309);

	var _Credits2 = _interopRequireDefault(_Credits);

	var _Similar = __webpack_require__(312);

	var _Similar2 = _interopRequireDefault(_Similar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MovieFullView = function (_React$Component) {
	  _inherits(MovieFullView, _React$Component);

	  function MovieFullView() {
	    _classCallCheck(this, MovieFullView);

	    var _this = _possibleConstructorReturn(this, (MovieFullView.__proto__ || Object.getPrototypeOf(MovieFullView)).call(this));

	    _this.state = {
	      config: [],
	      data: [],
	      credits: [],
	      reviews: [],
	      similar: []
	    };
	    return _this;
	  }

	  _createClass(MovieFullView, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      _ApiConnect2.default.getConfig().then(function (config) {
	        return _this2.setState({ config: config });
	      });
	      _ApiConnect2.default.getMovieFullview(this.props.params.splat).then(function (data) {
	        return _this2.setState({ data: data });
	      });
	      _ApiConnect2.default.getReviews(this.props.params.splat).then(function (reviews) {
	        return _this2.setState({ reviews: reviews });
	      });
	      _ApiConnect2.default.getCredits(this.props.params.splat).then(function (credits) {
	        return _this2.setState({ credits: credits });
	      });
	      _ApiConnect2.default.getSimilar(this.props.params.splat).then(function (similar) {
	        return _this2.setState({ similar: similar });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'page movie__full' },
	        this.state.config.images && this.state.data.id && _react2.default.createElement(_MovieFull2.default, { data: this.state.data, config: this.state.config }),
	        this.state.credits.id && _react2.default.createElement(_Credits2.default, { data: this.state.credits, config: this.state.config }),
	        this.state.reviews.total_results > 0 && _react2.default.createElement(_Reviews2.default, { data: this.state.reviews }),
	        this.state.similar.total_results > 0 && _react2.default.createElement(_Similar2.default, { data: this.state.similar, config: this.state.config })
	      );
	    }
	  }]);

	  return MovieFullView;
	}(_react2.default.Component);

	MovieFullView.propTypes = {
	  params: _react2.default.PropTypes.shape({
	    splat: _react2.default.PropTypes.string
	  })
	};

	MovieFullView.defaultProps = {
	  params: {}
	};

	exports.default = MovieFullView;

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(277);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _MovieFull = __webpack_require__(298);

	var _MovieFull2 = _interopRequireDefault(_MovieFull);

	var _GenreList = __webpack_require__(300);

	var _GenreList2 = _interopRequireDefault(_GenreList);

	var _Details = __webpack_require__(303);

	var _Details2 = _interopRequireDefault(_Details);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FullView = function (_React$Component) {
	  _inherits(FullView, _React$Component);

	  function FullView() {
	    _classCallCheck(this, FullView);

	    var _this = _possibleConstructorReturn(this, (FullView.__proto__ || Object.getPrototypeOf(FullView)).call(this));

	    _this.state = {
	      img_loaded: false
	    };
	    return _this;
	  }

	  _createClass(FullView, [{
	    key: 'render',
	    value: function render() {
	      var _Classnames,
	          _this2 = this;

	      var imageBaseUrl = this.props.config.images.secure_base_url;
	      var fileSize = this.props.config.images.backdrop_sizes[3];
	      var _props$data = this.props.data,
	          title = _props$data.title,
	          tagline = _props$data.tagline,
	          overview = _props$data.overview,
	          backdropPath = _props$data.backdrop_path,
	          voteAverage = _props$data.vote_average,
	          genres = _props$data.genres;


	      var imageClasses = (0, _classnames2.default)((_Classnames = {}, _defineProperty(_Classnames, _MovieFull2.default.image, true), _defineProperty(_Classnames, _MovieFull2.default.loaded, this.state.img_loaded), _Classnames));

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: _MovieFull2.default.imagecontainer },
	          !this.state.img_loaded && _react2.default.createElement('div', { className: 'loader' }),
	          _react2.default.createElement('img', {
	            onLoad: function onLoad() {
	              return _this2.setState({
	                img_loaded: true
	              });
	            },
	            onError: function onError() {
	              return _this2.setState({
	                img_loaded: true
	              });
	            },
	            className: imageClasses,
	            src: imageBaseUrl + fileSize + backdropPath,
	            alt: ''
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'container' },
	          _react2.default.createElement(
	            'h1',
	            { className: _MovieFull2.default.title },
	            title
	          ),
	          _react2.default.createElement(
	            'h2',
	            { className: _MovieFull2.default.tagline },
	            tagline
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _MovieFull2.default.info },
	            _react2.default.createElement(_GenreList2.default, { genres: genres }),
	            _react2.default.createElement(
	              'div',
	              { className: _MovieFull2.default.overview },
	              _react2.default.createElement(
	                'p',
	                null,
	                overview
	              )
	            ),
	            _react2.default.createElement(_Details2.default, { details: this.props.data }),
	            _react2.default.createElement(
	              'div',
	              { className: _MovieFull2.default.score },
	              _react2.default.createElement(
	                'span',
	                null,
	                voteAverage
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return FullView;
	}(_react2.default.Component);

	FullView.propTypes = {
	  data: _react2.default.PropTypes.shape({
	    title: _react2.default.PropTypes.string,
	    tagline: _react2.default.PropTypes.string,
	    overview: _react2.default.PropTypes.string,
	    backdrop_path: _react2.default.PropTypes.string,
	    genres: _react2.default.PropTypes.array,
	    vote_average: _react2.default.PropTypes.number
	  }),
	  config: _react2.default.PropTypes.shape({
	    images: _react2.default.PropTypes.shape({
	      backdrop_sizes: _react2.default.PropTypes.array,
	      secure_base_url: _react2.default.PropTypes.string
	    })
	  })
	};

	FullView.defaultProps = {
	  data: [],
	  config: {}
	};

	exports.default = FullView;

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(299);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(289)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./MovieFull.pcss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./MovieFull.pcss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(288)();
	// imports


	// module
	exports.push([module.id, ".MovieFull__imagecontainer___3OmCu {\n  position: absolute;\n  background-color: #ccc;\n}\n\n.MovieFull__image___gWTuP {\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n  max-width: 100%;\n  opacity: 0\n}\n\n.MovieFull__image___gWTuP.MovieFull__loaded___3yCN9 {\n  opacity: 1;\n}\n\n.MovieFull__title___1iLVN {\n  font-size: 80px;\n  margin-top: 170px;\n  text-shadow: 0 0 15px #000;\n  position: relative;\n  color: #fff;\n}\n\n.MovieFull__tagline___13ev9 {\n  position: relative;\n  color: #fff;\n  text-shadow: 0 0 15px #000;\n  text-align: center;\n}\n\n.MovieFull__info___dtwXd {\n  background: rgba(255,255,255, 1);\n  position: relative;\n  padding: 2em;\n  margin-top: 150px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.MovieFull__overview___LJ1OD {\n  font-size: 20px;\n  padding-right: 1.5em;\n  -ms-flex-preferred-size: 60%;\n      flex-basis: 60%;\n}\n\n.MovieFull__overview___LJ1OD p {\n  line-height: 30px;\n  margin-top: 1em;\n}\n\n.MovieFull__score___2fUW- {\n  -ms-flex-preferred-size: 14%;\n      flex-basis: 14%;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n}\n\n.MovieFull__score___2fUW- span {\n  background: #000;\n  text-align: center;\n  display: block;\n  padding: 30px;\n  border-radius: 50%;\n  font-weight: 400;\n  color: #fff;\n  font-size: 50px;\n}\n", ""]);

	// exports
	exports.locals = {
		"imagecontainer": "MovieFull__imagecontainer___3OmCu",
		"image": "MovieFull__image___gWTuP",
		"loaded": "MovieFull__loaded___3yCN9",
		"title": "MovieFull__title___1iLVN",
		"tagline": "MovieFull__tagline___13ev9",
		"info": "MovieFull__info___dtwXd",
		"overview": "MovieFull__overview___LJ1OD",
		"score": "MovieFull__score___2fUW-"
	};

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(277);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _genres = __webpack_require__(301);

	var _genres2 = _interopRequireDefault(_genres);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var GenreList = function GenreList(props) {
	  var _Classnames;

	  var genres = props.genres.map(function (genre) {
	    return _react2.default.createElement(
	      'div',
	      { className: _genres2.default.genre + ' genre-' + genre.id, key: genre.id },
	      genre.name
	    );
	  });

	  var containerClasses = (0, _classnames2.default)((_Classnames = {}, _defineProperty(_Classnames, _genres2.default.container, true), _defineProperty(_Classnames, _genres2.default.compact, props.compact), _Classnames));

	  return _react2.default.createElement(
	    'div',
	    { className: containerClasses },
	    genres
	  );
	};

	GenreList.propTypes = {
	  genres: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object),
	  compact: _react2.default.PropTypes.bool
	};

	GenreList.defaultProps = {
	  genres: [],
	  compact: false
	};

	exports.default = GenreList;

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(302);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(289)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./genres.pcss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./genres.pcss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(288)();
	// imports


	// module
	exports.push([module.id, "/* TODO:\n  Maybe fetch genrelist from https://api.themoviedb.org/3/genre/movie/list?api_key=\n  and add the colors to them in js?\n*/\n\n.genres__container___J5axa {\n  width: 100%;\n}\n\n.genres__genre___2fHou {\n  background: #000;\n  color: #fff;\n  display: inline-block;\n  padding: 0.5em 1em;\n  line-height: 1em;\n  font-weight: 400;\n  margin: 0 0.5em 0.5em 0;\n  border-radius: 20px;\n}\n\n.genres__compact___3itlR {\n  font-size: 12px;\n}\n\n.genres__compact___3itlR .genres__genre___2fHou {\n  padding: 0.3em 0.7em;\n}\n\n.genre {}\n\n.genre-28 {\n  background-color: #F34336;\n}\n\n.genre-12 {\n  background-color: #E81E63;\n}\n\n.genre-16 {\n  background-color: #9B27AF;\n}\n\n.genre-35 {\n  background-color: #673AB7;\n}\n\n.genre-80 {\n  background-color: #3F51B4;\n}\n\n.genre-99 {\n  background-color: #4CAE50;\n}\n\n.genre-18 {\n  background-color: #FE9700;\n}\n\n.genre-10751 {\n  background-color: #2195F2;\n}\n\n.genre-14 {\n  background-color: #8AC24A;\n}\n\n.genre-36 {\n  background-color: #FE5722;\n}\n\n.genre-27 {\n  background-color: #03A8F3;\n}\n\n.genre-10402 {\n  background-color: #CCDB39;\n}\n\n.genre-9648 {\n  background-color: #00BBD3;\n}\n\n.genre-10749 {\n  background-color: #FEEA3B;\n}\n\n.genre-878 {\n  background-color: #9D9D9D;\n}\n\n.genre-10770 {\n  background-color: #FEC007;\n}\n\n.genre-53 {\n  background-color: #607C8A;\n}\n\n.genre-10752 {\n  background-color: #9D9D9D;\n}\n\n.genre-37 {\n  background-color: #785548;\n}\n", ""]);

	// exports
	exports.locals = {
		"container": "genres__container___J5axa",
		"genre": "genres__genre___2fHou",
		"compact": "genres__compact___3itlR"
	};

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _details = __webpack_require__(304);

	var _details2 = _interopRequireDefault(_details);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Details = function Details(props) {
	  var _props$details = props.details,
	      releaseDate = _props$details.release_date,
	      revenue = _props$details.revenue,
	      budget = _props$details.budget,
	      runtime = _props$details.runtime;


	  return _react2.default.createElement(
	    'div',
	    { className: _details2.default.container },
	    _react2.default.createElement(
	      'div',
	      { className: _details2.default.item },
	      _react2.default.createElement(
	        'span',
	        { className: _details2.default.label },
	        'Release Date:'
	      ),
	      releaseDate
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: _details2.default.item },
	      _react2.default.createElement(
	        'span',
	        { className: _details2.default.label },
	        'Revenue:'
	      ),
	      revenue
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: _details2.default.item },
	      _react2.default.createElement(
	        'span',
	        { className: _details2.default.label },
	        'Budget:'
	      ),
	      budget
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: _details2.default.item },
	      _react2.default.createElement(
	        'span',
	        { className: _details2.default.label },
	        'Runtime:'
	      ),
	      runtime
	    )
	  );
	};

	Details.propTypes = {
	  details: _react2.default.PropTypes.shape({
	    release_date: _react2.default.PropTypes.string,
	    revenue: _react2.default.PropTypes.number,
	    budget: _react2.default.PropTypes.number,
	    runtime: _react2.default.PropTypes.number
	  })
	};

	Details.defaultProps = {
	  details: {}
	};

	exports.default = Details;

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(305);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(289)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./details.pcss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./details.pcss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(288)();
	// imports


	// module
	exports.push([module.id, ".details__container___1aG1Y {\n  -ms-flex-preferred-size: 25%;\n      flex-basis: 25%;\n  padding-right: 1.5em;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n}\n\n.details__item___1YL7s {\n  padding-bottom: 0.5em;\n}\n\n.details__label___2om4Z {\n  font-weight: 400;\n  margin-right: 1em;\n}\n", ""]);

	// exports
	exports.locals = {
		"container": "details__container___1aG1Y",
		"item": "details__item___1YL7s",
		"label": "details__label___2om4Z"
	};

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactTextTruncate = __webpack_require__(268);

	var _reactTextTruncate2 = _interopRequireDefault(_reactTextTruncate);

	var _reviews = __webpack_require__(307);

	var _reviews2 = _interopRequireDefault(_reviews);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Reviews = function Reviews(props) {
	  var NumReviews = 3;
	  var reviews = props.data.results.slice(0, NumReviews).map(function (review) {
	    return _react2.default.createElement(
	      'div',
	      { className: _reviews2.default.item, key: review.id },
	      _react2.default.createElement(
	        'h3',
	        { className: _reviews2.default.author },
	        ' ',
	        review.author
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(_reactTextTruncate2.default, {
	          containerClassName: _reviews2.default.content,
	          line: 10,
	          truncateText: '\u2026',
	          text: review.content
	        })
	      )
	    );
	  });

	  return _react2.default.createElement(
	    'div',
	    { className: 'section section__dark' },
	    _react2.default.createElement(
	      'div',
	      { className: 'container' },
	      _react2.default.createElement(
	        'h2',
	        { className: 'section--title' },
	        'Reviews'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: _reviews2.default.container },
	        reviews
	      )
	    )
	  );
	};

	Reviews.propTypes = {
	  data: _react2.default.PropTypes.shape({
	    results: _react2.default.PropTypes.array
	  })
	};

	Reviews.defaultProps = {
	  data: []
	};

	exports.default = Reviews;

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(308);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(289)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./reviews.pcss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./reviews.pcss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(288)();
	// imports


	// module
	exports.push([module.id, ".reviews__container___1o1cQ {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.reviews__item___3W95E {\n  -ms-flex-preferred-size: 28%;\n      flex-basis: 28%;\n}\n\n.reviews__author___g0UYq {\n  text-align: center;\n  margin-bottom: 0.5em;\n  font-size: 25px;\n}\n\n.reviews__content___3TbgK {\n  text-align: center;\n}\n", ""]);

	// exports
	exports.locals = {
		"container": "reviews__container___1o1cQ",
		"item": "reviews__item___3W95E",
		"author": "reviews__author___g0UYq",
		"content": "reviews__content___3TbgK"
	};

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _cast = __webpack_require__(310);

	var _cast2 = _interopRequireDefault(_cast);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Credits = function Credits(props) {
	  var castSize = 6;
	  var imageBaseUrl = props.config.images.secure_base_url;
	  var fileSize = 'w264_and_h264_bestv2';

	  var cast = props.data.cast.slice(0, castSize).map(function (castMember) {
	    return _react2.default.createElement(
	      'div',
	      { className: _cast2.default.item, key: castMember.id },
	      _react2.default.createElement('img', {
	        className: _cast2.default.image,
	        src: imageBaseUrl + fileSize + castMember.profile_path,
	        alt: ''
	      }),
	      _react2.default.createElement(
	        'div',
	        { className: _cast2.default.name },
	        castMember.name
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: _cast2.default.character },
	        castMember.character
	      )
	    );
	  });
	  return _react2.default.createElement(
	    'div',
	    { className: 'section section__light' },
	    _react2.default.createElement(
	      'div',
	      { className: 'container' },
	      _react2.default.createElement(
	        'h2',
	        { className: 'section--title' },
	        'Cast'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: _cast2.default.container },
	        cast
	      )
	    )
	  );
	};

	Credits.propTypes = {
	  data: _react2.default.PropTypes.shape({
	    cast: _react2.default.PropTypes.array
	  }),
	  config: _react2.default.PropTypes.shape({
	    images: _react2.default.PropTypes.shape({
	      secure_base_url: _react2.default.PropTypes.string
	    })
	  })
	};

	Credits.defaultProps = {
	  data: [],
	  config: {}
	};

	exports.default = Credits;

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(311);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(289)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./cast.pcss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./cast.pcss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(288)();
	// imports


	// module
	exports.push([module.id, ".cast__container___3NjL3 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 2em 0;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: distribute;\n      align-content: space-around;\n}\n\n.cast__item___1rqgy {\n  -ms-flex-preferred-size: 13%;\n      flex-basis: 13%;\n  margin-bottom: 2em;\n  text-align: center;\n}\n\n.cast__name___1vXUR {\n  font-weight: 400;\n  margin: 0.5em 0;\n}\n\n.cast__character___2miYP {\n  font-size: 14px;\n}\n\n.cast__image___BfjFs {\n  border-radius: 50%;\n  border: 3px solid #fff;\n}\n", ""]);

	// exports
	exports.locals = {
		"container": "cast__container___3NjL3",
		"item": "cast__item___1rqgy",
		"name": "cast__name___1vXUR",
		"character": "cast__character___2miYP",
		"image": "cast__image___BfjFs"
	};

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _MovieList = __webpack_require__(292);

	var _MovieList2 = _interopRequireDefault(_MovieList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Similar = function Similar(props) {
	  var NumResults = 4;
	  var results = props.data.results.slice(0, NumResults);

	  return _react2.default.createElement(
	    'div',
	    { className: 'section section__light' },
	    _react2.default.createElement(
	      'h2',
	      { className: 'section--title' },
	      'You might also like'
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'container' },
	      props.config.images && _react2.default.createElement(_MovieList2.default, { data: results, config: props.config })
	    )
	  );
	};

	Similar.propTypes = {
	  data: _react2.default.PropTypes.shape({
	    results: _react2.default.PropTypes.array
	  }),
	  config: _react2.default.PropTypes.shape({
	    images: _react2.default.PropTypes.shape({
	      secure_base_url: _react2.default.PropTypes.string
	    })
	  })
	};

	Similar.defaultProps = {
	  data: [],
	  config: {}
	};

	exports.default = Similar;

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(172);

	var _SearchBox = __webpack_require__(314);

	var _SearchBox2 = _interopRequireDefault(_SearchBox);

	var _header = __webpack_require__(324);

	var _header2 = _interopRequireDefault(_header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_React$Component) {
	  _inherits(Header, _React$Component);

	  function Header() {
	    _classCallCheck(this, Header);

	    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

	    _this.toggleSearchBox = _this.toggleSearchBox.bind(_this);
	    _this.state = {
	      toggleSearchBox: false
	    };
	    return _this;
	  }

	  _createClass(Header, [{
	    key: 'toggleSearchBox',
	    value: function toggleSearchBox() {
	      this.setState({ toggleSearchBox: this.state.toggleSearchBox === false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'header-container' },
	        _react2.default.createElement(
	          'div',
	          { className: _header2.default.header },
	          _react2.default.createElement(
	            'div',
	            { className: _header2.default.navigation },
	            _react2.default.createElement(
	              'button',
	              { className: _header2.default.button + ' material-icons', onClick: this.props.history.goBack },
	              'arrow_back'
	            ),
	            _react2.default.createElement(
	              'ul',
	              { className: _header2.default.menu },
	              _react2.default.createElement(
	                'li',
	                { className: _header2.default.menulink },
	                _react2.default.createElement(
	                  _reactRouter.IndexLink,
	                  { activeClassName: 'active', to: '/' },
	                  'Home'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                { className: _header2.default.menulink },
	                _react2.default.createElement(
	                  _reactRouter.IndexLink,
	                  { activeClassName: 'active', to: '/about' },
	                  'About'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'button',
	              { className: _header2.default.button + ' material-icons', onClick: this.toggleSearchBox },
	              'search'
	            )
	          )
	        ),
	        _react2.default.createElement(_SearchBox2.default, { collapsed: this.state.toggleSearchBox, toggleSearchBox: this.toggleSearchBox })
	      );
	    }
	  }]);

	  return Header;
	}(_react2.default.Component);

	Header.propTypes = {
	  history: _react2.default.PropTypes.object };

	Header.defaultProps = {
	  history: {}
	};

	exports.default = Header;

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(277);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _throttleDebounce = __webpack_require__(315);

	var _reactClickOutside = __webpack_require__(318);

	var _reactClickOutside2 = _interopRequireDefault(_reactClickOutside);

	var _SearchResults = __webpack_require__(319);

	var _SearchResults2 = _interopRequireDefault(_SearchResults);

	var _ApiConnect = __webpack_require__(243);

	var _ApiConnect2 = _interopRequireDefault(_ApiConnect);

	var _SearchBox = __webpack_require__(322);

	var _SearchBox2 = _interopRequireDefault(_SearchBox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SearchBox = function (_React$Component) {
	  _inherits(SearchBox, _React$Component);

	  function SearchBox() {
	    _classCallCheck(this, SearchBox);

	    var _this = _possibleConstructorReturn(this, (SearchBox.__proto__ || Object.getPrototypeOf(SearchBox)).call(this));

	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.callAjax = (0, _throttleDebounce.debounce)(300, _this.callAjax);
	    _this.state = {
	      searchResults: null
	    };
	    return _this;
	  }

	  _createClass(SearchBox, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      _ApiConnect2.default.getConfig().then(function (config) {
	        return _this2.setState({ config: config });
	      });
	      _ApiConnect2.default.getGenres().then(function (genres) {
	        return _this2.setState({ genres: genres });
	      });
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(e) {
	      this.callAjax(e.target.value);
	    }
	  }, {
	    key: 'callAjax',
	    value: function callAjax(value) {
	      var _this3 = this;

	      _ApiConnect2.default.Search(value).then(function (searchResults) {
	        return _this3.setState({ searchResults: searchResults });
	      });
	    }
	  }, {
	    key: 'handleClickOutside',
	    value: function handleClickOutside() {
	      this.props.collapsed && this.props.toggleSearchBox();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _Classnames,
	          _Classnames2,
	          _this4 = this;

	      this.props.collapsed && this.textInput.focus();

	      var searchBoxClasses = (0, _classnames2.default)((_Classnames = {}, _defineProperty(_Classnames, _SearchBox2.default.searchbox, true), _defineProperty(_Classnames, _SearchBox2.default.collapsed, this.props.collapsed), _Classnames));

	      var resultContainerClasses = (0, _classnames2.default)((_Classnames2 = {}, _defineProperty(_Classnames2, _SearchBox2.default.resultcontainer, true), _defineProperty(_Classnames2, _SearchBox2.default.noresults, !this.state.searchResults), _defineProperty(_Classnames2, _SearchBox2.default.collapsed, this.props.collapsed), _defineProperty(_Classnames2, 'container', true), _Classnames2));

	      return _react2.default.createElement(
	        'div',
	        { className: searchBoxClasses },
	        _react2.default.createElement(
	          'div',
	          { className: 'container' },
	          _react2.default.createElement(
	            'form',
	            null,
	            _react2.default.createElement('input', {
	              placeholder: 'Search for movie...',
	              className: _SearchBox2.default.input,
	              type: 'text',
	              onChange: this.handleChange,
	              ref: function ref(input) {
	                _this4.textInput = input;
	              }
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: resultContainerClasses },
	            this.state.searchResults && this.state.genres && this.state.config && _react2.default.createElement(_SearchResults2.default, {
	              results: this.state.searchResults,
	              genres: this.state.genres,
	              config: this.state.config,
	              toggleSearchBox: this.props.toggleSearchBox
	            })
	          )
	        )
	      );
	    }
	  }]);

	  return SearchBox;
	}(_react2.default.Component);

	SearchBox.propTypes = {
	  toggleSearchBox: _react2.default.PropTypes.func,
	  collapsed: _react2.default.PropTypes.bool
	};

	SearchBox.defaultProps = {
	  collapsed: false,
	  toggleSearchBox: function toggleSearchBox() {
	    return null;
	  }
	};

	exports.default = (0, _reactClickOutside2.default)(SearchBox);

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	var throttle = __webpack_require__(316);
	var debounce = __webpack_require__(317);

	module.exports = {
		throttle: throttle,
		debounce: debounce
	};


/***/ },
/* 316 */
/***/ function(module, exports) {

	/* eslint-disable no-undefined,no-param-reassign,no-shadow */

	/**
	 * Throttle execution of a function. Especially useful for rate limiting
	 * execution of handlers on events like resize and scroll.
	 *
	 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {Boolean}   noTrailing     Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
	 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
	 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
	 *                                    the internal counter is reset)
	 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                    to `callback` when the throttled-function is executed.
	 * @param  {Boolean}   debounceMode   If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
	 *                                    schedule `callback` to execute after `delay` ms.
	 *
	 * @return {Function}  A new, throttled, function.
	 */
	module.exports = function ( delay, noTrailing, callback, debounceMode ) {

		// After wrapper has stopped being called, this timeout ensures that
		// `callback` is executed at the proper times in `throttle` and `end`
		// debounce modes.
		var timeoutID;

		// Keep track of the last time `callback` was executed.
		var lastExec = 0;

		// `noTrailing` defaults to falsy.
		if ( typeof noTrailing !== 'boolean' ) {
			debounceMode = callback;
			callback = noTrailing;
			noTrailing = undefined;
		}

		// The `wrapper` function encapsulates all of the throttling / debouncing
		// functionality and when executed will limit the rate at which `callback`
		// is executed.
		function wrapper () {

			var self = this;
			var elapsed = Number(new Date()) - lastExec;
			var args = arguments;

			// Execute `callback` and update the `lastExec` timestamp.
			function exec () {
				lastExec = Number(new Date());
				callback.apply(self, args);
			}

			// If `debounceMode` is true (at begin) this is used to clear the flag
			// to allow future `callback` executions.
			function clear () {
				timeoutID = undefined;
			}

			if ( debounceMode && !timeoutID ) {
				// Since `wrapper` is being called for the first time and
				// `debounceMode` is true (at begin), execute `callback`.
				exec();
			}

			// Clear any existing timeout.
			if ( timeoutID ) {
				clearTimeout(timeoutID);
			}

			if ( debounceMode === undefined && elapsed > delay ) {
				// In throttle mode, if `delay` time has been exceeded, execute
				// `callback`.
				exec();

			} else if ( noTrailing !== true ) {
				// In trailing throttle mode, since `delay` time has not been
				// exceeded, schedule `callback` to execute `delay` ms after most
				// recent execution.
				//
				// If `debounceMode` is true (at begin), schedule `clear` to execute
				// after `delay` ms.
				//
				// If `debounceMode` is false (at end), schedule `callback` to
				// execute after `delay` ms.
				timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
			}

		}

		// Return the wrapper function.
		return wrapper;

	};


/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	/* eslint-disable no-undefined */

	var throttle = __webpack_require__(316);

	/**
	 * Debounce execution of a function. Debouncing, unlike throttling,
	 * guarantees that a function is only executed a single time, either at the
	 * very beginning of a series of calls, or at the very end.
	 *
	 * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {Boolean}  atBegin       Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
	 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
	 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
	 * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                  to `callback` when the debounced-function is executed.
	 *
	 * @return {Function} A new, debounced function.
	 */
	module.exports = function ( delay, atBegin, callback ) {
		return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
	};


/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var hoistNonReactStatic = __webpack_require__(215);
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(34);

	module.exports = function enhanceWithClickOutside(WrappedComponent) {
	  var componentName = WrappedComponent.displayName || WrappedComponent.name;

	  var EnhancedComponent = React.createClass({
	    displayName: 'Wrapped' + componentName,

	    componentDidMount: function componentDidMount() {
	      this.__wrappedComponent = this.refs.wrappedComponent;
	      document.addEventListener('click', this.handleClickOutside, true);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	      document.removeEventListener('click', this.handleClickOutside, true);
	    },
	    handleClickOutside: function handleClickOutside(e) {
	      var domNode = ReactDOM.findDOMNode(this);
	      if ((!domNode || !domNode.contains(e.target)) && typeof this.refs.wrappedComponent.handleClickOutside === 'function') {
	        this.refs.wrappedComponent.handleClickOutside(e);
	      }
	    },
	    render: function render() {
	      return React.createElement(WrappedComponent, _extends({}, this.props, { ref: 'wrappedComponent' }));
	    }
	  });

	  return hoistNonReactStatic(EnhancedComponent, WrappedComponent);
	};

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCssTransitionGroup = __webpack_require__(235);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _reactRouter = __webpack_require__(172);

	var _SearchResults = __webpack_require__(320);

	var _SearchResults2 = _interopRequireDefault(_SearchResults);

	var _GenreList = __webpack_require__(300);

	var _GenreList2 = _interopRequireDefault(_GenreList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SearchResults = function SearchResults(props) {
	  var imageBaseUrl = props.config.images.secure_base_url;
	  var fileSize = props.config.images.logo_sizes[0];

	  var results = props.results.results.map(function (result) {
	    var path = '/movie/ ' + result.id;
	    var date = new Date(result.release_date);
	    var year = date.getFullYear();

	    var genres = props.genres.filter(function (genre) {
	      var match = result.genre_ids.filter(function (genreId) {
	        return genreId === genre.id;
	      });
	      return match[0] === genre.id;
	    });

	    return _react2.default.createElement(
	      _reactRouter.Link,
	      {
	        to: path,
	        className: _SearchResults2.default.result,
	        key: result.id,
	        onClick: props.toggleSearchBox.bind(undefined)
	      },
	      _react2.default.createElement('img', { src: imageBaseUrl + fileSize + result.poster_path, alt: '' }),
	      _react2.default.createElement(
	        'div',
	        { className: _SearchResults2.default.infocontainer },
	        _react2.default.createElement(
	          'span',
	          { className: _SearchResults2.default.title },
	          result.title
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: _SearchResults2.default.date },
	          '(' + year + ')'
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: _SearchResults2.default.genres },
	          genres && _react2.default.createElement(_GenreList2.default, { genres: genres, compact: true })
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: _SearchResults2.default.overview },
	          result.overview
	        )
	      ),
	      _react2.default.createElement(
	        'i',
	        { className: _SearchResults2.default.icon + ' material-icons' },
	        'arrow_forward'
	      )
	    );
	  });

	  return _react2.default.createElement(
	    _reactAddonsCssTransitionGroup2.default,
	    {
	      transitionName: 'searchresult',
	      transitionEnterTimeout: 300,
	      transitionLeaveTimeout: 300
	    },
	    results
	  );
	};

	SearchResults.propTypes = {
	  toggleSearchBox: _react2.default.PropTypes.func,
	  results: _react2.default.PropTypes.shape({
	    results: _react2.default.PropTypes.array
	  }),
	  config: _react2.default.PropTypes.shape({
	    images: _react2.default.PropTypes.shape({
	      secure_base_url: _react2.default.PropTypes.string,
	      logo_sizes: _react2.default.PropTypes.array
	    })
	  })
	};

	SearchResults.defaultProps = {
	  results: [],
	  config: {},
	  toggleSearchBox: function toggleSearchBox() {
	    return null;
	  }
	};

	exports.default = SearchResults;

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(321);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(289)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./SearchResults.pcss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./SearchResults.pcss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(288)();
	// imports
	exports.i(__webpack_require__(295), undefined);

	// module
	exports.push([module.id, ".SearchResults__result___7NQrX {\n  border-bottom: 1px solid #eee;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  text-decoration: none;\n  color: " + __webpack_require__(295).locals["fontcolor"] + ";\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n  width: 104%;\n  overflow: hidden\n}\n\n.SearchResults__result___7NQrX:hover {\n  background: " + __webpack_require__(295).locals["greylight"] + ";\n  color: white;\n  width: 100%\n}\n\n.SearchResults__infocontainer___1zhkT {\n  padding: 0.7em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  overflow: hidden;\n}\n\n.SearchResults__title___1wfO8 {\n  font-weight: 400;\n  font-size: 16px;\n}\n\n.SearchResults__date___rViHH, .SearchResults__genres___3aLDX {\n  margin-left: 0.5em;\n}\n\n.SearchResults__overview___20Nxj {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  font-size: 14px;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.SearchResults__icon___2Hq6W {\n  margin-left: auto;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  margin-right: 0.2em;\n  font-size: 30px;\n}\n\n.searchresult-enter {\n  height: 0;\n}\n\n.searchresult-enter-active {\n  height: 70px;\n}\n\n.searchresult-leave {\n  height: 70px;\n}\n\n.searchresult-leave-active {\n  height: 0;\n}\n", ""]);

	// exports
	exports.locals = {
		"colors": "'./colors.pcss'",
		"fontcolor": "" + __webpack_require__(295).locals["fontcolor"] + "",
		"greylight": "" + __webpack_require__(295).locals["greylight"] + "",
		"result": "SearchResults__result___7NQrX",
		"infocontainer": "SearchResults__infocontainer___1zhkT",
		"title": "SearchResults__title___1wfO8",
		"date": "SearchResults__date___rViHH",
		"genres": "SearchResults__genres___3aLDX",
		"overview": "SearchResults__overview___20Nxj",
		"icon": "SearchResults__icon___2Hq6W"
	};

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(323);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(289)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./SearchBox.pcss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./SearchBox.pcss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(288)();
	// imports
	exports.i(__webpack_require__(295), undefined);

	// module
	exports.push([module.id, ".SearchBox__searchbox___HlhW2 {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%);\n  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.15, 1, 0.33, 1);\n  transition: -webkit-transform 0.3s cubic-bezier(0.15, 1, 0.33, 1);\n  transition: transform 0.3s cubic-bezier(0.15, 1, 0.33, 1);\n  transition: transform 0.3s cubic-bezier(0.15, 1, 0.33, 1), -webkit-transform 0.3s cubic-bezier(0.15, 1, 0.33, 1);\n  background: " + __webpack_require__(295).locals["bgaltlight"] + ";\n  padding: 1em;\n}\n\n.SearchBox__input___3BP4C {\n  width: 100%;\n  padding: 1em;\n  font-size: 20px;\n}\n\n.SearchBox__resultcontainer___2-YOR {\n  background: #fff;\n  position: absolute;\n  width: 100%;\n  max-height: 70vh;\n  overflow-y: scroll !important;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%);\n}\n\n.SearchBox__collapsed___3SCGj {\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n\n.SearchBox__noresults___1PJaB {\n  max-height: 0;\n}\n", ""]);

	// exports
	exports.locals = {
		"colors": "'./colors.pcss'",
		"bgaltlight": "" + __webpack_require__(295).locals["bgaltlight"] + "",
		"searchbox": "SearchBox__searchbox___HlhW2",
		"input": "SearchBox__input___3BP4C",
		"resultcontainer": "SearchBox__resultcontainer___2-YOR",
		"collapsed": "SearchBox__collapsed___3SCGj",
		"noresults": "SearchBox__noresults___1PJaB"
	};

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(325);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(289)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./header.pcss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./header.pcss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(288)();
	// imports
	exports.i(__webpack_require__(295), undefined);

	// module
	exports.push([module.id, ".header__header___5rPIW {\n  position: relative;\n  background: " + __webpack_require__(295).locals["bgalt"] + ";\n  z-index: 100;\n}\n\n.header__navigation___2QqT4 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  line-height: 60px;\n  color: #fff;\n}\n\n.header__menu___IRCzj {\n  font-size: 30px;\n  text-align: center;\n  margin: 0;\n}\n\n.header__menulink___1BmpI {\n  display: inline;\n}\n\n.header__menulink___1BmpI a {\n  padding: 0 15px;\n  display: inline-block;\n  font-weight: 700;\n  text-decoration: none;\n  text-transform: uppercase;\n  color: #fff\n}\n\n.header__menulink___1BmpI a.header__active___2p2Vr{\n  background: " + __webpack_require__(295).locals["boxcolor"] + ";\n  color: " + __webpack_require__(295).locals["fontcolor"] + ";\n}\n\n.header__button___2ceIk {\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  outline: none;\n  color: #fff;\n  font-size: 36px;\n}\n", ""]);

	// exports
	exports.locals = {
		"colors": "'./colors.pcss'",
		"boxcolor": "" + __webpack_require__(295).locals["boxcolor"] + "",
		"fontcolor": "" + __webpack_require__(295).locals["fontcolor"] + "",
		"bgalt": "" + __webpack_require__(295).locals["bgalt"] + "",
		"header": "header__header___5rPIW",
		"navigation": "header__navigation___2QqT4",
		"menu": "header__menu___IRCzj",
		"menulink": "header__menulink___1BmpI",
		"active": "header__active___2p2Vr",
		"button": "header__button___2ceIk"
	};

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _footer = __webpack_require__(327);

	var _footer2 = _interopRequireDefault(_footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var tmdbLogo = __webpack_require__(329);

	var Footer = function Footer() {
	  return _react2.default.createElement(
	    'div',
	    { className: 'footer section section__dark' },
	    _react2.default.createElement(
	      'div',
	      { className: 'container' },
	      _react2.default.createElement('img', { className: _footer2.default.logo, src: tmdbLogo, alt: '' }),
	      _react2.default.createElement(
	        'a',
	        { href: 'https://github.com/lviit/themoviedb-react/' },
	        'https://github.com/lviit/themoviedb-react/'
	      )
	    )
	  );
	};

	exports.default = Footer;

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(328);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(289)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./footer.pcss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./footer.pcss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(288)();
	// imports


	// module
	exports.push([module.id, ".footer__logo___2yBhS {\n  display: block;\n  margin: 0 auto 2em auto;\n  width: 150px;\n}\n", ""]);

	// exports
	exports.locals = {
		"logo": "footer__logo___2yBhS"
	};

/***/ },
/* 329 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZgAAAChCAYAAAD6OamEAAAWqElEQVR4nO3de5RV5XnH8S8DCmoUxmiWVFBEtPWCmkCt9UoN1K5gNVEhNGriJQuN6cVlvLXLUq1ZKl6WRhMV0lgvtVFZJtVgKoKKGi8ljIlFUTOC4ogkgkUM4ggI/eOZk9lnz97vvr7nNr/PWrOUs/d+93vOnHmf/d4HDB4xhoIGAgcARwDjgL2BvYBhwNCiiYuIiFfrgA+AN4FlQAfwLPAK8Knrwu6uTmfCAwoEmAnANOAkYNe8iYiISENaDfwEuA9YGHVC2QGmDTgVuBA4KMuFIiLStP4XuB64F9hSeTEpwLRluMFRwIvA3Si4iIj0JwdhZX8HFgtSSRNgtsUi19PAwbmyJiIireAQLBZcj8UGp6Qmsl2BucChpWRNRERaxSLg+O6uztVxJ7hqMKOA51BwERGRvg4Fnhsycp9RcSfEBZhdgflA4THMIiLSssYA84eM3CdyJHFUgNkWaxZTcBERkSRjgLlDRu7Tp08mKsBcjZrFREQkvUOBq8Ivhjv5j8JGCIiIiGR1dHdX5zOVfwRrMG3ALbXPj4iItIhbhozc5w9xZVDgwGmUN89lE7AEW9dmQ0lpiohIubbH1o8cC2xTQnoHY6u93APVAebCEhJ/CvgB8AgKLCIizWJ7YDLwbeCYgmldRE+AqfTBTACeLJDgCuAcYF7BjImISH0dB8wC9iyQxl90d3UurLSVTSuQ0ALg8yi4iIi0gnlYmb6gQBrTwGowA4FV5FtyfwFWrdpYICMiItJ4tsW6OybmuHY1MLwNOJB8wWUFMBUFFxGRVrQRK+NX5Lh2V+CANuDwnDc/B1ib81oREWl8a7GyPo8j2oDxOS58CvW5iIj0B/OwMj+r8W3A6BwX3prjGhERaU55yvzRAwaPGLMC2CPDRZuAYWiei4hIf7ED1lyWZTLmijZgaMYbLUHBRUSkP/kIeDnjNcPyBJg3M54vIiLNb3nG84e6drSMsz7HNSIi0twyl/15AoyIiEgiBRgREfFCAUZERLxQgBERES8UYERExAsFGBER8UIBRkREvFCAERERLxRgRETECwUYERHxQgFGRES8UIAREREv+mOAmQg8ACwDtvb8LAZm9RwTEZESNFOA2er4eQAYl3B9OzC/52cK1Tt5jgOm9xy7xpHGrNA9o1yS4trFEcdd7y8qzaTPwxUsy7rX/J7z2x33Sivr77ed6oeE+THpzg+cs6ykvIpICs0UYFymYAVJXKHannA86BIsGESZE7pneLvpdixARRWGUwL/np0iH0VUPo8pSScWNBF7v4tJDvBFVN5P8B5rgXNCeQm/3ylU/87P6blORGqgVQIMWCEeFxguobpwmgOMBwb0/EwFFgSOTyf6SX4B1ZvuhAu06TGvT6H3yXkt1YHKp7jPo2yj6RsAytZO39/JAqo/y2vo/Zwrwb5iDtW/YxHxrFkDzACqg0PFaPoWcqOpLphm91zTEXhtDjCJ6gIorqkrWPuYHjo2PeH1yr2SnqIHhH5mZjh/UuD1dpJrbXnvtTNwKb3vpZ34ZsOsgvkJ1lKiamTBWsloqn8HlRpmuLYjIjXQrAEmaA7VtYpwG3uwUFqLFYpxgoVQuFmrYjbVBVrlnIn0Fmjt9BZ046gOekkFeFHhWpYva7H3EgxowQK+LEnNieHf6TX0Nt1VBAOhiNRIKwSYcF9IuHANPsEn1R6WU12LCfexQN8mrimh/4ZfDxa4tSj8g4EO/BesHVQHgbJH4gU/v7j3Mpvq31uww38B/vu8RCRCswaY8Aijig7cBXiawj3YdBbXpxAssKb0nBcOMJWCPvh62r6X8CiqLOcHC9cOqt9PGfeKEnxfZfTDBPMT7Edy1f6iOvDVNCZSR80aYKLUsjAJF9yziB7+Op/qzv1aPknXq3CNqvWVYTnuz285fQPQTGrTXCgiEVohwFSarCaR/LSepvALPoG70gsWduHhs1H3q2VwmQPsTfLn4YOvAn007jlKEB1gRKROmjXABEcZ7UzfUWFBwbb54HDhKKOp7kNwFZbBzv6guFpDlgATHtmV5vxgZ/u4mLyVca8owWbAMoJa3CjB4MgwEWlwzRpgsgj2D4TnRoQF2/vTzFcJB43KvIyo13031SygN5iGh2b7VFkFIZiPMoV/BwowIk2iPwSYcNv8dPouPRK1EkCa5pVwIJkT+m/4dd+CeS5rCZc4lYmPwUEFSf0keYQHT6hPRaRJ9IcAA1bwBptupmDLm8St3TWbdAEmOKw52IkfrLHk6dyPWvMrjWAtJjgXp8x7Vc77P6pnzq+lujmriLhRgrWa4yMiJegvAWYtfWfqx5lJttFXs0P/DaYT9bpv4VpMLZqUlpNukEURSZNkRaTB9JcAA71BZhJ9Z/9XmnYmkb0Qq6QV1VxW66HJ0LcW47MvZgH2eY3Hb3CprB1Xj1FxIpLToHpnIIO8I5zCggVwWSbRt+lmbczrcbK+P9f5kxzHyr5XWcq6Ry3yKiIp9KcajE9xQURP3CLSbynAiIiIFwowIiLihQKMiIh4oQAjIiJeKMCIiIgXCjAiIuKFAoyIiHihACMiIl4owIiIiBcKMCIi4oUCjIiIeKEAIyIiXjTLaspDgN083+MdYHPotb2AoTHnvwmsS5HuzsAeMcfW9aQTtjuwa4q009gILC0praBbge2BXwI/8JB+lNOBL/b8/xklpTkCOAzYD9gT+Az2fesG1mO/n9eB54B3c6T/OexzivM+8Psc6YbtCHzWcXwD8F7g34Ow9x5lM/b3ELY99n7KEvU3Jy2kWQLMYcCTnu+xF/BW6LUbgRNjzv8K8F8p0j0B+PeYYw8BX454/SLgH1KkncYKYFRJaQV9DQu+3wA24X/fm5OBO+mtdZ9RIK2RwJnAqcC+Ga5bCvy4Jx9RBXCUacD3HMfjvgNZ3QGc4jh+CXBt4N8jiH64gfjvzF8CP82TuRhRf3NFHAl8N+W5H/X8rAY6gV8DL2APFkXsBtyX89qt2PeqA3iYFti9tVkCjDS227A/1DILn6CjgXsp3qS7G3A5cBawTY7r9weuBGZgBfoMqmsFUe4A/gWryUY5Efg88Ksc+Qnm62TH8XXA7QXSbxa7AMcUuP4T4OfYA8RcYEuONIYUzAPAadjD7cPYw+ZvCqZXN+qDkTK0YQHgCA9pjwV+BgwumM5pwKvYdth5gkvQNj3pvApMTTh3Pdac6PJPBfMzA/dGa7OADwveoz8YjLVMPITVaP6qvtnhBOzBY0qd85GbAoyUZTssEOxfYpp7AP8N7FQgjQHADcA9wLAyMhWwM3A/1vTkKuBvxt30cjL5P7cxuJvGNgE35Uy7PxuLfffuwt2H5tv2WJPbl+qYh9wUYKRM7cA84juPs9gZeBQb8JDXAKz2cEEJ+XG5qOc+cUFmNfH9cPRcNyPnvS8DBjqO3w2sypm2wNeBZylv0E0ebVig26WOechFAUbKNgILDEVqC9tjtaH9CublMuDcgmmkdS4WaOLcgLtN/xSsNpLFKKzpL85W4PqMaUpfhwBP4B6l59suFG9Krblm6eRfD7yUcM7uxEf4d7GnSJeNWTNVJ2neS/j8WjsACxCTyD4qZyA2Uuvwgnk4Brgiw/nvAouwEVQfYDWokdgIxrRD5K8GfoENaQ5bBjxIfHv6QCwgnpE6x3Ap7trLw8BrGdIr4mOSBzyENdMQ5QOBB7CRdJ/WKQ9nYr/zZimrmibALMaeIlxuIn5o73W0Tjt0s7yXI7GO/6lk+4O8HevcLGJb4N9w94tUPICN2HnBcc4RwHewDmCXNuBHWPt9VOE5E3eH7WnYKLe3Eu4D1j91VsI51yYcL9NjlDPc2pdF2ANAUDsWOCYCB6VI41hsuPdVOfPwEXB8zLEhwGTgPOJbloYBfw48lfP+NdcsAUaa00nALdgfTRqXA98s4b7nktzctBqbuDkvRXrP9vwcB/wn8UOOAf4Eew9Rw4I7gMfpnSwaNhB7Qk3TrPcd3KPh4mpS/dUq3PPWxmMPAMcmpDMDe3BakSMPm4GFjuOPYjXO7zvOGU8TBRj1wYhv3yJdB/Z0bL5IUQNx94WAFTaHky64BM3DajNrEs67mPi/raRaxVnEr/xQMRz7vFxmJhyXaouxmsyFCecNxh6EfLkNd1PjH3m8d+kUYKQWrgDOdhz/CvaHVYbJuEexfYoNC34jZ/qv9Vy/1XHOXlhbfZTHcPcnboPVTlwuxJpU4iwFHklIQ/raig3G+PuE806l3CVzgrYArziOF53DVVMKMFIrs7HCP6zSV1PWd9E1ox0skD1f8B5PkxwQXflIqsVMx2opUXbBJnm6XIc7AIrbLbiXe9kGWyrJl3bHsaaaMKsAI7XSBszBOikr9sdGOm1X4n1cs683kb+DNuwq3IMXXPl4AHcb/hDim2ouBHZwXLsS6yeSYi7APQLS14CGsbgHNL3l6b5eqJM/vz9Led4XSr7vWNJ/uZcBS0q+fxGV2f5HYkPP5+F+WstqT9xNF49S3qTDldjciEkxx0dg7eVRw8Q3Y00xNzvSPwcb9RTs7xlG8oCJm6jPMNZdgAkpz12P9Xk0slVYoI4bqXcYVpPZVOI9DwJ+knDO/5R4P+8UYPK7tE73PYvk4akV3wPO95iXPD6LBZbfU86M/6CkiZlPlHw/V4ABG1EWNw+psghm3OS9HbDaSvB7dj62LH+cddi6Y/VwBOlXPH+J5GkHjeBh4v/WBmNDnLMsUrojtsZZlGHYA5LLUhrrgTGRmsjEh5cTju+BTcZ0+WWO+45KON6RI02XpDy6AuhHJO+jcx69KyLsRPLDwm2Us7eMmIUJx/fKmF4bcHDMT1JwAb+j17xQgBEfzsaao/JaRPpaWlDSooRZZ5on+V3Ccdd8GbDO5I8dx3ekN6icR/zmd2BLzbv2nZHs1mEbwsXxNZIsyr1YH2ZTUYARHzZio6jybBL3EjbEd32Oa11Dd8EK4TIVTW8N1lTmcj7Wl5M0P+Nu4LcF8yN9rXUcS/q+leUJbJmYpqMAI75swOa3LMpwzVKsTyPNVtRx93QpezXapPTSBKAbcI9GGwoswL3Qoha19Mc1Yi/PhmR5HEv61TAaigKM+LQOq40k9cmAjXg7jmwLeYYlPcFnbTNPsnfC8aQmNLBti5OaPpIGL/yUJt71sIENwv0Q4Wo+K9tNNPZab5E0iiy/V0heMgRsJd4/LvG+y0i/H3ze2eplWoc9gT2NjaqKshJbpiPt+4qzLOH4BMptx56QcDztnurXAdMK5KOWi1rG+RALlmm87jMjJRqPe+Z8V60y0uNWYD42QKQpKMDkdxnuxfMqzsC92VRW36c5VlMOWo01fS2k71P/GqygfquE+7yMzTGJ+17/NfB3lNO0MQj3LoPduJf8CHoRawabmCMfz9AYcyOepAmfsBPELfdTkXXI8HrgqJhj22G//4uBz8ScMxxbpmZ2xvvWjZrIpFbewZrAVgZeex+r3ZRV0/oYd5/PSGz7gDJMI345F7BCP8skvLy1EC1q6ccg3B3rr+MeABDlU2weTNTP88CV2MOW63uTtGVEQ1GAkVpahgWUNViTymTKnzj2cMLxq3F33KaxE8lLzjyUMc35WE0mi5eBn2e8RtL5Fu55VXM93bcD23AvTjNMUP0DBRiptd9gQeZ4/DTt3It7VNYobGhwms3IogwE7sRqQ3E24S4k4mStxVyLFrX04QD6bk4Wluf3m5Zrte2kuVUNRQFG6mEJ1nfgwzskr+c0FesX2zZj2oOxAJbUTDGHfHNSHiR9R3kX7hV/JZ/9sKWMXLXcRZS/KkSQa1Z/03TwgwKMtKbLSe7I/wZWUBydMs0JWKHy1YTzPiX/xmmVRTDTuIlyF1rs79qwFSheAHZPOLeMjfHi7IZtnR3nLY/3Lp1GkTWfQ7GRaVlUOhL7i6VYAXxBwnkHY9vPdmC1hxewZfQ3YE+we2LbC5xE+lWxr6XYoIU7sA3aXBMrP6DxRhINJ/soslXUdwTcdlhz2ESsQ3/fFNfMpdgySHHasBFmt+NuBnvWw729UYBpPn/T85PFFfSvAAPwz9jQ6LEpzh3X81PUi8C/FkzjY2wZ/ysc59xKvqV0fDoUm/CZxUPUbmjzZCwwVwwi+2CPNcC5BfIwNJSHoO1I12T7YIH715yayKRVbcAKrzSTYcuwEqvpuDapSutW4pe96ca9j4xEG4QV8JWfrMFlE9Z3tzLpxARDY37SBJcOkld4bigKMNLKlmMj1oosP5PG74Av4t6lMos1wI9ijt1NuiVopDwbgVPIt3hrWbYA367j/XNRgJFWtwT4U7JtDJXFYmxJkbKXP4laBHMrtqyM1M5vsQEeSfOrfLuYxlixIRMFGOkPVmCd9VdQ3pL93cAM4HCKr6EWZQVwf+i1B2mM9eX6i//Adq18vo552Irtapp2dGFDUYCR/uITbPjyvthOknm3BPgAuBEYjS3t4XOocHjiZSMsatnqPsHmF30BOJ3arpgc9gY2UKVplwNqpVFki4C7Yo4tzZnmE8SP+ng7ZRpvEJ+vuKVBXO8lDx8jyB4hvqM0b+EdtIHsy62k8Tbwt9gGXl/C+mgOx1a8jtoRcz3QCTwHPI4tzVL2xmVxXgIewxZdfJJ820jHcX2+cTt/rnJck0cjNPl8gP1+f439vT9K/N98LbyHfdfuw2qsm+uYl8IGDB4xJutSE3eRfR6GSDPYBVvJdidsrbT11G4UWpwDsXkaT+JeQkRsaf0so8PWUf5SO23Y9yePjSRvmldPd2ITlFNrpRqMSFFrqH9ACXuZdBu2iTVX1rP2ATbaq955aBjqgxERES8UYERExAsFGBER8UIBRkREvFCAERERLxRgRETECwUYERHxQgFGRES8UIAREREvFGBERMQLBRgREfFCAUZERLxQgBERES8UYERExAsFGBER8UIBRkREvFCAERERLxRgREQkjcw7ICvAiIhIGsMznv+xAoyIiCQZAIzNeM1HCjAiIpLkEGDXjNe8rQAjIiJJTs9xzXIFGBERcfkcMD3HdUsVYERExOVGYIcc1z2nACMiInG+CXwtx3VbgBcUYEREJMpXgVk5r13Y3dW5TgFGRESCtgG+C/yY/HMl50COmZkiItKSBgJfBq4E9iuQznosODVdgBmLfQgiIlJcO7AncBhwAtln60f5YXdX5zporgBzDXBJvTMhIiKxNgA3VP7RLH0wCi4iIo3v6u6uzpWVfzRDgFFwERFpfEuA64MvNHqAUXAREWl83cC07q7O7uCLjRxgFFxERBrfFuC07q7OpeEDjRpgFFxERJrDed1dnQ9GHWjEUWQKLiIijW8TcHZ3V+c9cSc0WoBRcBERaXzvAqd2d3UudJ3USE1kCi4iIo3vfuAgYGHSiY0SYBRcREQa2yLgGGAa8H6aCxqhiUzBRUSkMXUDPwNuBn6R9eJ6BxgFFxGRxrEVeBV4FngceARbvDKXPAFmed6bhQwHXgPOLCk9kWYzrN4ZkH7vE+Bj4D3gLeDNnn+XYsDgEWO2Zjh/Lrac86dlZUBERJpTd1en83iWTv5fYZ07Ci4iIpIobYDpAiYDH3nMi4iItJA0AeZDLLis8pwXERFpIUkBZjMwFVuGWUREJLWkAHMeMK8WGRERkdbiCjAzgR/WKiMiItJa4gLMHOAfa5kRERFpLVEB5jng69iMThERkVzCAWYZNpGyO+JcERGR1IIBZi02HHl1nfIiIiItpBJgNgEnAq/XMS8iItJCKgHmTOCZemZERERaSxswA7i33hkREZHW8v/lsmtHmEbYzQAAAABJRU5ErkJggg=="

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(331);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(289)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./common.pcss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./common.pcss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(288)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);", ""]);

	// module
	exports.push([module.id, " {\n}\nhtml {\n  box-sizing: border-box;\n}\n*, *:before, *:after {\n  box-sizing: border-box;\n}\nembed, img, object, video {\n  max-width: 100%;\n  height: auto;\n  vertical-align: middle;\n}\nbody {\n  font-family: 'Lato', sans-serif;\n  font-weight: 300;\n}\na {\n  color: $fontcolor;\n}\nh1, h2, h3 {\n  font-weight: 700;\n  line-height: 1em;\n  margin: 0;\n}\nh1 {\n  margin: 0.5em;\n  text-align: center;\n  font-size: 40px;\n}\nh2 {\n  font-size: 30px;\n  margin: 0 0 0.5em 0;\n}\np {\n  line-height: 25px;\n  margin: 0;\n}\nul {\n  margin: 0;\n  padding: 0;\n}\n", ""]);

	// exports


/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(333);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(289)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./layout.pcss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./layout.pcss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(288)();
	// imports
	exports.i(__webpack_require__(295), undefined);

	// module
	exports.push([module.id, " {\n}\nbody {\n  background: " + __webpack_require__(295).locals["bgcolor"] + ";\n  margin: 0;\n}\n.container {\n  max-width: 60em;\n  margin: 0 auto;\n  overflow: hidden;\n}\n.section {\n  position: relative;\n  padding: 3em;\n}\n.section .section--title {\n  text-align: center;\n  margin-bottom: 1em;\n  font-size: 50px;\n}\n.section__dark {\n  background-color: " + __webpack_require__(295).locals["bgalt"] + ";\n  color: #fff;\n}\n.section__dark a {\n  color: #fff;\n}\n.section__light {\n  background-color: " + __webpack_require__(295).locals["bgcolor"] + ";\n}\n.footer {\n  text-align: center;\n  margin-top: 2em;\n}\n/*\n  .page-wrapper {\n    transition: transform 0.5s cubic-bezier(0.15, 1, 0.33, 1);\n    position: absolute;\n    top: 55px;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 99;\n  }\n  */\n.pageSlider-enter {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n}\n.pageSlider-enter.pageSlider-enter-active {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.pageSlider-leave {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.pageSlider-leave.pageSlider-leave-active {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n}\n", ""]);

	// exports
	exports.locals = {
		"colors": "'./colors.pcss'",
		"bgcolor": "" + __webpack_require__(295).locals["bgcolor"] + "",
		"bgalt": "" + __webpack_require__(295).locals["bgalt"] + ""
	};

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(335);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(289)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./material-icons.pcss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./material-icons.pcss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(288)();
	// imports


	// module
	exports.push([module.id, "@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Material Icons'),\n    local('MaterialIcons-Regular'),\n    url(" + __webpack_require__(336) + ") format('woff2'),\n    url(" + __webpack_require__(337) + ") format('woff'),\n    url(" + __webpack_require__(338) + ") format('truetype');\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  display: inline-block;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n  /* Support for IE. */\n  -webkit-font-feature-settings: 'liga';\n          font-feature-settings: 'liga';\n}\n", ""]);

	// exports


/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/MaterialIcons-Regular.woff2";

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/MaterialIcons-Regular.woff";

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/MaterialIcons-Regular.ttf";

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(340);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(289)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./loader.pcss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./../../node_modules/postcss-loader/index.js!./loader.pcss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(288)();
	// imports


	// module
	exports.push([module.id, " {\n  @-webkit-keyframes loader__load8___1M6V3 {\n    0% {\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n    }\n  }\n  @keyframes loader__load8___1M6V3 {\n    0% {\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n    }\n  }\n}\n.loader, .loader:after {\n  border-radius: 50%;\n  width: 10em;\n  height: 10em;\n}\n.loader {\n  margin: 60px auto;\n  font-size: 8px;\n  position: absolute;\n  left: 47%;\n  top: 35%;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-left: 1.1em solid #ffffff;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n          animation: load8 1.1s infinite linear;\n}\n", ""]);

	// exports
	exports.locals = {
		"load8": "loader__load8___1M6V3"
	};

/***/ }
]);