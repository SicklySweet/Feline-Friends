(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,n){},15:function(e,a,n){},17:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(2),c=n.n(i),s=(n(14),n(3)),o=n(4),m=n(6),l=n(5),u=n(7),h=function(e){var a=e.name,n=e.username,t=e.email,i=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"cats",src:"https://robohash.org/".concat(i,"/set_set4?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,n),r.a.createElement("p",null,t)))},d=function(e){var a=e.cats;return r.a.createElement("div",null,a.map(function(e,n){return r.a.createElement(h,{key:n,id:a[n].id,name:a[n].name,username:a[n].username,email:a[n].email})}))},g=function(e){e.searchfield;var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholer:"search felines",onChange:a}))},f=[{id:1,name:"Herman Schultz",username:"Shocker",email:"shocker@villains.com"},{id:2,name:"Scott Summers",username:"Cyclops",email:"leader@xmen.com"},{id:3,name:"Wade Wilson",username:"Deadpool",email:"mercwithamouth@mercenary.com"},{id:4,name:"Michael Meowers",username:"The-Shape",email:"shape@evilwithin.com"},{id:5,name:"Cat Benatar",username:"Crimes-of-Passion",email:"mymanager@promotions.com"},{id:6,name:"Bubba Sawyer",username:"Leatherface",email:"bbq@texas.com"},{id:7,name:"Greer Grant",username:"Tigra",email:"tigra@westcoastavengers.com"},{id:8,name:"Barbara Ann Minerva",username:"Cheetah",email:"cheetah@legionofdoom.com"},{id:9,name:"Chris Catt",username:"Starlord",email:"starlord@guardians.galaxy"},{id:10,name:"Steve Mouser",username:"Captain Americat",email:"steve@catvengers.com"}],v=(n(15),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"500px"}},e.children)}),p=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(m.a)(this,Object(l.a)(a).call(this))).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={cats:[],searchfield:""},e}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({cats:f})}},{key:"render",value:function(){var e=this,a=this.state.cats.filter(function(a){return a.name.toLowerCase().includes(e.state.searchfield.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Feline Friends"),r.a.createElement(g,{searchChange:this.onSearchChange}),r.a.createElement(v,null,r.a.createElement(d,{cats:a})))}}]),a}(t.Component);n(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,n){e.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.bfebd477.chunk.js.map