(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"/kTt":function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),e=t("tBOM"),a=(t("OO+k"),function(n,l,t,u){return new(t||(t=Promise))(function(e,a){function o(n){try{i(u.next(n))}catch(l){a(l)}}function r(n){try{i(u.throw(n))}catch(l){a(l)}}function i(n){n.done?e(n.value):new t(function(l){l(n.value)}).then(o,r)}i((u=u.apply(n,l||[])).next())})}),o=function(){function n(n){this.platform=n}return n.prototype.ngOnInit=function(){return a(this,void 0,void 0,function(){return function(n,l){var t,u,e,a,o={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function r(a){return function(r){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,u&&(e=2&a[0]?u.return:a[0]?u.throw||((e=u.return)&&e.call(u),0):u.next)&&!(e=e.call(u,a[1])).done)return e;switch(u=0,e&&(a=[2&a[0],e.value]),a[0]){case 0:case 1:e=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,u=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(e=(e=o.trys).length>0&&e[e.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!e||a[1]>e[0]&&a[1]<e[3])){o.label=a[1];break}if(6===a[0]&&o.label<e[1]){o.label=e[1],e=a;break}if(e&&o.label<e[2]){o.label=e[2],o.ops.push(a);break}e[2]&&o.ops.pop(),o.trys.pop();continue}a=l.call(n,o)}catch(r){a=[6,r],u=0}finally{t=e=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,r])}}}(this,function(n){switch(n.label){case 0:return[4,this.platform.ready()];case 1:return n.sent(),[4,this.loadMap()];case 2:return n.sent(),[2]}})})},n.prototype.loadMap=function(){var n=this,l={lat:42.345573,lng:-71.098326};this.panorama=e.c.createPanorama("pano_canvas",{camera:{target:l}}),this.map=e.c.create("map_canvas",{camera:{target:l,zoom:17}}),this.marker=this.map.addMarkerSync({flat:!0,position:l}),this.panorama.bindTo("position",this.marker),this.panorama.on(e.e.PANORAMA_LOCATION_CHANGE).subscribe(function(l){n.map.animateCamera({target:l[0].latLng,duration:1e3})}),this.panorama.on(e.e.PANORAMA_CAMERA_CHANGE).subscribe(function(l){n.marker.setRotation(l[0].bearing-180)})},n}(),r=function(){return function(){}}(),i=t("pMnS"),c=t("ra/t"),p=t("ntG5"),s=t("YxxD"),b=u.nb({encapsulation:0,styles:[["#pano_canvas[_ngcontent-%COMP%]{height:90%;position:relative!important}#map_canvas[_ngcontent-%COMP%]{bottom:5%;left:5%;width:150px;height:150px;position:absolute!important;z-index:2}"]],data:{}});function f(n){return u.Eb(0,[(n()(),u.pb(0,0,null,null,10,"ion-header",[],null,null,null,c.u,c.e)),u.ob(1,49152,null,0,p.w,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,c.F,c.p)),u.ob(3,49152,null,0,p.vb,[u.h,u.k],null,null),(n()(),u.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,c.s,c.c)),u.ob(5,49152,null,0,p.g,[],null,null),(n()(),u.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,c.A,c.l)),u.ob(7,49152,null,0,p.M,[u.h,u.k],null,null),(n()(),u.pb(8,0,null,0,2,"ion-title",[],null,null,null,c.E,c.o)),u.ob(9,49152,null,0,p.tb,[u.h,u.k],null,null),(n()(),u.Db(-1,0,[" StreetView "])),(n()(),u.pb(11,0,null,null,7,"ion-content",[["padding",""]],null,null,null,c.t,c.d)),u.ob(12,49152,null,0,p.p,[u.h,u.k],null,null),(n()(),u.pb(13,0,null,0,1,"a",[["class","sourcecode"],["href","https://github.com/mapsplugin/ionic-googlemaps-quickdemo-v4/blob/master/src/app/street-view/street-view.page.ts"],["target","_blank"]],null,null,null,null,null)),(n()(),u.Db(-1,null,["[source code]"])),(n()(),u.pb(15,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),u.Db(-1,null,["Walk around in the StreetView!"])),(n()(),u.pb(17,0,null,0,1,"div",[["id","pano_canvas"]],null,null,null,null,null)),(n()(),u.pb(18,0,null,null,0,"div",[["id","map_canvas"]],null,null,null,null,null))],null,null)}function h(n){return u.Eb(0,[(n()(),u.pb(0,0,null,null,1,"app-street-view",[],null,null,null,f,b)),u.ob(1,114688,null,0,o,[s.a],null,null)],function(n,l){n(l,1,0)},null)}var w=u.lb("app-street-view",o,h,{},{},[]),d=t("Ip0R"),m=t("gIcY"),v=t("95zI"),g=t("9opb"),k=t("apKv"),y=t("B4/3"),_=t("ZYCi");t.d(l,"StreetViewPageModuleNgFactory",function(){return A});var A=u.mb(r,[],function(n){return u.vb([u.wb(512,u.j,u.bb,[[8,[i.a,w]],[3,u.j],u.x]),u.wb(4608,d.k,d.j,[u.u,[2,d.q]]),u.wb(4608,m.d,m.d,[]),u.wb(4608,v.a,v.a,[u.z,u.g]),u.wb(4608,g.a,g.a,[v.a,u.j,u.q]),u.wb(4608,k.a,k.a,[v.a,u.j,u.q]),u.wb(1073742336,d.b,d.b,[]),u.wb(1073742336,m.c,m.c,[]),u.wb(1073742336,m.a,m.a,[]),u.wb(1073742336,y.a,y.a,[]),u.wb(1073742336,_.o,_.o,[[2,_.u],[2,_.m]]),u.wb(1073742336,r,r,[]),u.wb(1024,_.k,function(){return[[{path:"",component:o}]]},[])])})}}]);