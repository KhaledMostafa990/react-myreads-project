(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(39)},27:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(19),s=n.n(r),i=n(11),c=n(13),l=n(6),u=n(7),h=n(9),m=n(8),p=n(10),f=(n(27),"https://reactnd-books-api.udacity.com"),b=localStorage.token;b||(b=localStorage.token=Math.random().toString(36).substr(-8));var d={Accept:"application/json",Authorization:b},k=function(){return fetch("".concat(f,"/books"),{headers:d}).then(function(e){return e.json()}).then(function(e){return e.books})},g=function(e,t){return fetch("".concat(f,"/books/").concat(e.id),{method:"PUT",headers:Object(c.a)({},d,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},y=function(e){return fetch("".concat(f,"/search"),{method:"POST",headers:Object(c.a)({},d,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},v=n(0),E=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(this.props.bookImage,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{onChange:function(t){return e.props.onShelfChange(t)},value:this.props.currentValue},o.a.createElement("option",{value:"",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"}," ",this.props.bookTitle," "),o.a.createElement("div",{className:"book-authors"}," ",this.props.bookAuthors," "))}}]),t}(a.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"}," ",this.props.shelfTitle," "),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},this.props.booksIn.map(function(t){return e.props.shelfName.includes(t.shelf)?o.a.createElement("li",{key:t.id},o.a.createElement(E,{bookTitle:t.title,bookAuthors:t.authors?t.authors:"Unknown",bookImage:t.imageLinks.thumbnail,currentValue:t.shelf,onShelfChange:function(n){return e.props.onShelfChange(t,n)}})):""}))))}}]),t}(a.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement(S,{booksIn:this.props.booksIn,shelfName:this.props.shelfName.includes("currentlyReading")?"currentlyReading":"",shelfTitle:"Currently Reading",onShelfChange:this.props.onShelfChange}),o.a.createElement(S,{booksIn:this.props.booksIn,shelfName:this.props.shelfName.includes("wantToRead")?"wantToRead":"",shelfTitle:"Want To Read",onShelfChange:this.props.onShelfChange}),o.a.createElement(S,{booksIn:this.props.booksIn,shelfName:this.props.shelfName.includes("read")?"read":"",shelfTitle:"Read",onShelfChange:this.props.onShelfChange}))),o.a.createElement("div",{className:"open-search"},o.a.createElement(i.b,{to:"/search"},o.a.createElement("button",null,"Add a book"))))}}]),t}(a.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(i.b,{to:"/"},o.a.createElement("button",{className:"close-search"},"Close")),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:this.props.query,onChange:function(t){return e.props.updateQuery(t.target.value)}}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},"string"!==typeof this.props.booksFromSearch&&""!==this.props.query?this.props.booksFromSearch.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(E,{bookTitle:t.title,bookAuthors:t.authors?t.authors:"Unknown Writer",bookImage:t.imageLinks.thumbnail,currentValue:t.shelf,onShelfChange:function(n){return e.props.onShelfChange(t,n)}}))}):o.a.createElement("div",null," Search for new books and Notice the keywords should be : "))))}}]),t}(a.Component),j=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={currentBooks:[],booksFromSearch:[],query:"",shelfName:"",bookID:"",validQuery:["Android","Art","Artificial Intelligence","Astronomy","Austen","Baseball","Basketball","Bhagat","Biography","Brief","Business","Camus","Cervantes","Christie","Classics","Comics","Cook","Cricket","Cycling","Desai","Design","Development","Digital Marketing","Drama","Drawing","Dumas","Education","Everything","Fantasy","Film","Finance","First","Fitness","Football","Future","Games","Gandhi","Homer","Horror","Hugo","Ibsen","Journey","Kafka","King","Lahiri","Larsson","Learn","Literary Fiction","Make","Manage","Marquez","Money","Mystery","Negotiate","Painting","Philosophy","Photography","Poetry","Production","Programming","React","Redux","River","Robotics","Rowling","Satire","Science Fiction","Shakespeare","Singh","Swimming","Tale","Thrun","Time","Tolstoy","Travel","Ultimate","Virtual Reality","Web Development","iOS"]},n.onSearch=function(e){var t=n.state.currentBooks,a=n.state.bookID;n.setState({query:e});for(var o=n.state.validQuery.map(function(e){return e.toLowerCase()}),r=0;r<o.length;r++)o[r].includes(e)&&""!==e?y(e).then(function(e){var n=e.map(function(e){return e.id}),o=e.filter(function(e){return e.imageLinks}).map(function(e){return Object(c.a)({},e,{shelf:"none"})}).filter(function(e){return!a.includes(e.id)});return t.filter(function(e){return n.includes(e.id)}).concat(o)}).then(function(e){return n.setState({booksFromSearch:e})}).catch(function(e){return console.log(e)}):n.setState({booksFromSearch:"Invalid query"})},n.onShelfChange=function(e,t){var a=t.target.value;g(e,a),setInterval(function(){k().then(function(e){n.setState({currentBooks:e})})},200)},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;k().then(function(t){e.setState({currentBooks:t,shelfName:t.map(function(e){return e.shelf}),bookID:t.map(function(e){return e.id})})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement(v.a,{exact:!0,path:"/",render:function(){return o.a.createElement(C,{booksIn:e.state.currentBooks,onShelfChange:e.onShelfChange,shelfName:e.state.shelfName})}}),o.a.createElement(v.a,{path:"/search",render:function(){return o.a.createElement(N,{query:e.state.query,updateQuery:e.onSearch,booksFromSearch:e.state.booksFromSearch,onShelfChange:e.onShelfChange})}}))}}]),t}(o.a.Component);n(37);s.a.render(o.a.createElement(i.a,null,o.a.createElement(j,null)),document.getElementById("root"))}},[[22,2,1]]]);
//# sourceMappingURL=main.ee6163b3.chunk.js.map