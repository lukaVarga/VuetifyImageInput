!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).VuetifyImageInput=t()}(this,(function(){"use strict";function e(){return(this.overriddenMaxZoom-this.overriddenMinZoom)/1e3}var t={dark:function(){return this.theme.isDark},originalImageDataURL:function(){var e=this.originalImage;return e?e.src:null},originalImageHeight:function(){var e=this.originalImage;return e?e.naturalHeight:0},originalImageWidth:function(){var e=this.originalImage;return e?e.naturalWidth:0},overriddenMaxZoom:function(){return 2},overriddenMinZoom:function(){return 1},rtl:e,zoomDelta:function(){return(this.overriddenMaxZoom-this.overriddenMinZoom)/10},zoomSnap:e};function o(){}var n={theme:{default:{isDark:!1}}};var i={clear:function(){this.originalImage=null},flipHorizontally:function(){},flipVertically:function(){},load:function(){},rotateClockwise:function(){},rotateCounterClockwise:function(){},setZoom:function(e){this.zoom=e},zoomIn:function(){var e=this.zoomDelta;this.zoom+=e},zoomOut:function(){var e=this.zoomDelta;this.zoom-=e}},r={type:Boolean,default:!1},a={type:Boolean,default:!1},l={type:Boolean,default:!1},c={type:Boolean,default:!1},u={type:Boolean,default:!1},d={type:Boolean,default:!1},s={type:Boolean,default:!1},p={type:Boolean,default:!1},f={cancelIcon:{type:String,default:"$cancel"},clearable:r,clearIcon:{type:String,default:"$clear"},disabled:a,errorIcon:{type:String,default:"$error"},flipHorizontallyIcon:{type:String,default:"mdi-flip-horizontal"},flippable:l,flipVerticallyIcon:{type:String,default:"mdi-flip-vertical"},fullHeight:c,fullWidth:u,hideActions:d,imageBackgroundColor:String,imageHeight:{type:Number,default:256},imageWidth:{type:Number,default:256},rotatable:s,rotateClockwiseIcon:{type:String,default:"mdi-rotate-right"},rotateCounterClockwiseIcon:{type:String,default:"mdi-rotate-left"},successIcon:{type:String,default:"$success"},uploadIcon:{type:String,default:"mdi-upload"},value:String,zoomable:p,zoomInIcon:{type:String,default:"mdi-magnify-plus-outline"},zoomOutIcon:{type:String,default:"mdi-magnify-minus-outline"}};var m={functional:!0,render:function(e,t){var o=t.listeners,n=t.parent,i=t.props;return e("VBtn",{class:"ma-1",props:{disabled:n.disabled,flat:!0,icon:!0},on:o},[e("VIcon",i.icon)])}};var g={functional:!0,render:function(e,t){var o=t.parent,n=o.clear,i=o.clearIcon;return e(m,{props:{icon:i},on:{click:n}})}};var h={functional:!0,render:function(e,t){var o=t.parent,n=o.flipHorizontally,i=o.flipHorizontallyIcon;return e(m,{props:{icon:i},on:{click:n}})}};var v={functional:!0,render:function(e,t){var o=t.parent,n=o.flipVertically,i=o.flipVerticallyIcon;return e(m,{props:{icon:i},on:{click:n}})}};var y={render:function(e){return e("div",{style:{minHeight:"100px",minWidth:"100px"}})}};var b={functional:!0,render:function(e,t){var o=t.parent,n=o.rotateClockwise,i=o.rotateClockwiseIcon;return e(m,{props:{icon:i},on:{click:n}})}};var I={functional:!0,render:function(e,t){var o=t.parent,n=o.rotateCounterClockwise,i=o.rotateCounterClockwiseIcon;return e(m,{props:{icon:i},on:{click:n}})}};var w={functional:!0,render:function(e,t){var o=t.data.style;return e("div",{style:Object.assign({},{border:"4px dashed #ccc",borderRadius:"4px"},o)})}},x="#fff url('data:image/svg+xml;base64,"+btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2" fill-opacity="0.2"><rect x="1" width="1" height="1"/><rect y="1" width="1" height="1"/></svg>')+"') repeat center center / 16px 16px";var z={functional:!0,render:function(e,t){var o=t.data,n=t.parent,i=o.style,r=n.imageHeight,a=n.imageWidth;return e("div",{style:Object.assign({},{background:x,border:"1px solid #ccc",borderRadius:"4px",overflow:"hidden"},i)},[e("div",{style:{border:"4px solid #fff",bottom:"50%",boxShadow:"0 0 4000px 4000px rgba(0,0,0,0.5)",height:r+"px",pointerEvents:"none",position:"absolute",right:"50%",transform:"translate(50%,50%)",width:a+"px"}})])}};var k={functional:!0,render:function(e,t){var o=t.parent,n=o.disabled,i=o.overriddenMaxZoom,r=o.overriddenMinZoom,a=o.setZoom,l=o.zoom,c=o.zoomIn,u=o.zoomOut,d=o.zoomSnap;return e("VSlider",{class:"ma-1",props:{appendIcon:o.zoomInIcon,disabled:n,hideDetails:!0,max:i,min:r,prependIcon:o.zoomOutIcon,step:d,value:l},on:{input:a,"click:append":c,"click:prepend":u}})}};var C={beforeCreate:function(){var e={originalImage:null},t=this.$options.computed;Object.keys(e).forEach((function(o){t[o]={get:function(){return e[o]},set:function(t){e[o]=t}}}))},computed:t,data:function(){return{cancelLoad:o,loadError:!1,loading:!1,loadProgress:0,loadSuccess:!1,image:!0,zoom:1}},inject:n,methods:i,name:"VImageInput",props:f,render:function(e){var t=this.clearable,o=this.flippable,n=this.fullHeight,i=this.fullWidth,r=this.image,a=this.rotatable,l=this.zoomable;return e("div",{style:Object.assign({},{display:["-ms-inline-grid","inline-grid"],gridColumns:"1fr auto",gridRows:"1fr auto",gridTemplateColumns:"1fr auto",gridTemplateRows:"1fr auto"},n?{height:"100%"}:{},i?{width:"100%"}:{})},[e("div",{style:{gridColumn:1,gridRow:1,position:"relative"}},[e(y),e("VFadeTransition",{props:{leaveAbsolute:!0}},[e(r?z:w,{style:{bottom:0,left:0,position:"absolute",right:0,top:0}})])]),e("div",{style:Object.assign({},{display:"flex",flexDirection:"column",gridColumn:2,gridRow:1,justifyContent:"center",transition:"opacity 0.3s cubic-bezier(0.25,0.8,0.5,1)"},r?{}:{opacity:0,pointerEvents:"none"})},(t?[e(g),e("VSpacer")]:[]).concat(a?[e(b),e(I)]:[],o?[e(h),e(v)]:[])),e("div",{style:Object.assign({},{gridColumn:1,gridRow:2,transition:"opacity 0.3s cubic-bezier(0.25,0.8,0.5,1)"},r?{}:{opacity:0,pointerEvents:"none"})},l?[e(k)]:[])])}};return"undefined"!=typeof window&&window.Vue&&window.Vue.component(C.name,C),C}));
