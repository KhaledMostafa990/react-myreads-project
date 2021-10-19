(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(34)},25:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(17),s=n.n(r),i=n(9),c=n(11),l=n(4),u=n(5),h=n(7),m=n(6),p=n(8),f=(n(25),"https://reactnd-books-api.udacity.com"),b=localStorage.token;b||(b=localStorage.token=Math.random().toString(36).substr(-8));var d={Accept:"application/json",Authorization:b},k=function(){return fetch("".concat(f,"/books"),{headers:d}).then(function(e){return e.json()}).then(function(e){return e.books})},g=function(e,t){return fetch("".concat(f,"/books/").concat(e.id),{method:"PUT",headers:Object(c.a)({},d,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},y=function(e){return fetch("".concat(f,"/search"),{method:"POST",headers:Object(c.a)({},d,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},v=n(0),E=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:'url(   "  '.concat(this.props.bookImage,'  "  )')}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{onChange:function(t){return e.props.onShelfChange(t)},value:this.props.currentValue},o.a.createElement("option",{value:"",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"}," ",this.props.bookTitle," "),o.a.createElement("div",{className:"book-authors"}," ",this.props.bookAuthors," "))}}]),t}(a.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"}," ",this.props.shelfTitle," "),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},this.props.booksIn.map(function(t){return e.props.shelfName.includes(t.shelf)?o.a.createElement("li",{key:t.id},o.a.createElement(E,{bookTitle:t.title,bookAuthors:t.authors?t.authors.join(" - "):"Unknown",bookImage:t.imageLinks.thumbnail,currentValue:t.shelf,onShelfChange:function(n){return e.props.onShelfChange(t,n)}})):""}))))}}]),t}(a.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement(S,{booksIn:this.props.booksIn,shelfName:this.props.shelfName.includes("currentlyReading")?"currentlyReading":"",shelfTitle:"Currently Reading",onShelfChange:this.props.onShelfChange}),o.a.createElement(S,{booksIn:this.props.booksIn,shelfName:this.props.shelfName.includes("wantToRead")?"wantToRead":"",shelfTitle:"Want To Read",onShelfChange:this.props.onShelfChange}),o.a.createElement(S,{booksIn:this.props.booksIn,shelfName:this.props.shelfName.includes("read")?"read":"",shelfTitle:"Read",onShelfChange:this.props.onShelfChange}))),o.a.createElement("div",{className:"open-search"},o.a.createElement(i.b,{className:"button",to:"/search"},"Add a book")))}}]),t}(a.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(i.b,{className:"close-search",to:"/"},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:this.props.query,onChange:function(t){return e.props.updateQuery(t.target.value)}}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},"string"!==typeof this.props.booksFromSearch?this.props.booksFromSearch.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(E,{bookTitle:t.title,bookAuthors:t.authors?t.authors.join(" - "):"Unknown",bookImage:t.imageLinks.thumbnail,currentValue:t.shelf,onShelfChange:function(n){return e.props.onShelfChange(t,n)}}))}):o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("h3",{style:{marginBottom:20}}," Search for new books and Notice the valid queries : "),"\n                                    'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', \n                                    'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', \n                                    'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design',\n                                    'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', \n                                    'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', \n                                    'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey',\n                                    'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make',\n                                    'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy',\n                                    'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River',\n                                    'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming',\n                                    'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'.\n                                "))))}}]),t}(a.Component),C=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={currentBooks:[],booksFromSearch:[],query:"",shelfName:"",bookID:""},n.onSearch=function(e){var t=n.state.currentBooks,a=n.state.bookID;n.setState({query:e}),y(e.trim()).then(function(o){if(""!==e&&o)if(o.length>0){var r=o.map(function(e){return e.id}),s=o.filter(function(e){return e.imageLinks}).map(function(e){return Object(c.a)({},e,{shelf:"none"})}).filter(function(e){return!a.includes(e.id)}),i=t.filter(function(e){return r.includes(e.id)}).concat(s);n.setState({booksFromSearch:i})}else n.setState({booksFromSearch:"Invalid query"});else n.setState({booksFromSearch:"Invalid query"})}).catch(function(e){return console.log(e)})},n.onShelfChange=function(e,t){var a=t.target.value;g(e,a).then(k().then(function(e){n.setState({currentBooks:e})}))},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;k().then(function(t){e.setState({currentBooks:t,shelfName:t.map(function(e){return e.shelf}),bookID:t.map(function(e){return e.id})})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement(v.a,{exact:!0,path:"/",render:function(){return o.a.createElement(N,{booksIn:e.state.currentBooks,onShelfChange:e.onShelfChange,shelfName:e.state.shelfName})}}),o.a.createElement(v.a,{path:"/search",render:function(){return o.a.createElement(j,{query:e.state.query,updateQuery:e.onSearch,booksFromSearch:e.state.booksFromSearch,onShelfChange:e.onShelfChange})}}))}}]),t}(o.a.Component);n(32);s.a.render(o.a.createElement(i.a,null,o.a.createElement(C,null)),document.getElementById("root"))}},[[20,2,1]]]);
//# sourceMappingURL=main.aa442f83.chunk.js.map