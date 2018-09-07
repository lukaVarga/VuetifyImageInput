(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b(require("paperduck")):"function"==typeof define&&define.amd?define(["paperduck"],b):a.VuetifyImageInput=b(a.PaperDuck)})(this,function(a){"use strict";function b(a){return function(){return a}}function c(a){return"function"==typeof a}function d(a){return c(a)?a:b(a)}function e(){}a=a&&a.hasOwnProperty("default")?a["default"]:a;var f={clearable:{type:Boolean,default:!1},clearIcon:{type:[Function,String],default:function(){return this.$vuetify.icons.clear}},disabled:{type:Boolean,default:!1},flipHorizontallyIcon:{type:[Function,String],default:"flip"},flipHorizontallyIconStyle:[Function,Object],flipHorizontallyText:{type:[Function,String],default:"flip horizontally"},flipVerticallyIcon:{type:[Function,String],default:"flip"},flipVerticallyIconStyle:{type:[Function,Object],default:b({transform:"rotate(90deg)"})},flipVerticallyText:{type:[Function,String],default:"flip vertically"},hideActions:{type:Boolean,default:!1},imageEncoderOptions:{},imageHeight:{type:Number,default:256},imageType:{type:String,default:"png"},imageWidth:{type:Number,default:256},readonly:{type:Boolean,default:!1},rotateClockwiseIcon:{type:[Function,String],default:"rotate_90_degrees_ccw"},rotateClockwiseIconStyle:{type:[Function,Object],default:b({transform:"scaleX(-1)"})},rotateClockwiseText:{type:[Function,String],default:"rotate clockwise"},rotateCounterclockwiseIcon:{type:[Function,String],default:"rotate_90_degrees_ccw"},rotateCounterclockwiseIconStyle:[Function,Object],rotateCounterclockwiseText:{type:[Function,String],default:"rotate counterclockwise"},uploadIcon:{type:[Function,String],default:"cloud_upload"},uploadIconStyle:[Function,Object],value:String},g={name:"VImageInput",props:f,data:function(){return{lazyImage:void 0}},computed:{checkeredBackgroundImage:function(){return"url('data:image/svg+xml;base64,"+btoa("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\" fill-opacity=\"0.2\"><rect x=\"1\" width=\"1\" height=\"1\"/><rect y=\"1\" width=\"1\" height=\"1\"/></svg>")+"')"},image:{get:function(){return this.lazyImage},set:function(a){this.lazyImage=a,this.$emit("input",this.internalValue)}},internalValue:function(){return this.image?this.image.toDataURL("image/"+this.imageType,this.imageEncoderOptions):null}},watch:{value:{handler:function(b){this.internalValue!==b&&(this.lazyImage=a.from(b))},immediate:!0}},methods:{clear:function(){this.image=null},createActionButtonElement:function(a,b,c,e){var f=this,g=f.$createElement,h=f.disabled,i=f.readonly;b=d(b).call(this),c=d(c).call(this),e=d(e).call(this);var j,k={props:{disabled:h||i,flat:!0,icon:!0},on:{click:a}},l=function(){j=g("v-btn",k,[g("v-icon",{style:c},b)])};return e?(k.slot="activator",l(),j=g("v-tooltip",{props:{right:!0}},[j,g("span",e)])):l(),j},createClearButtonElement:function(){var a=this,b=a.$createElement,c=a.clear,e=a.clearIcon,f=a.disabled;return e=d(e).call(this),b("v-btn",{props:{disabled:f,flat:!0,icon:!0},on:{click:c}},[b("v-icon",e)])},createCropperElement:function(){var a=this,b=a.$createElement,c=a.checkeredBackgroundImage,d=a.image,e=a.imageHeight,f=a.imageWidth,g={style:{backgroundImage:c,backgroundRepeat:"repeat",backgroundSize:"16px 16px",height:e+"px",width:f+"px"}},h=[];if(d){Object.assign(g.style,{alignItems:"center",display:"flex",justifyContent:"center"});var i=b("img",{attrs:{src:d.toDataURL()}});h.push(i)}return b("div",g,h)},createEditorElement:function(){var a=this,b=a.$createElement,c=a.clearable,d=a.hideActions,e=this.createCropperElement(),f=[];return c&&f.push(this.createClearButtonElement(),b("v-spacer")),d||f.push(this.createFlipHorizontallyButtonElement(),this.createFlipVerticallyButtonElement(),this.createRotateClockwiseButtonElement(),this.createRotateCounterclockwiseButtonElement()),f.length&&(e=b("div",{style:{display:"flex"}},[e,b("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"center"}},f)])),e},createFlipHorizontallyButtonElement:function(){var a=this,b=a.flipHorizontally,c=a.flipHorizontallyIcon,d=a.flipHorizontallyIconStyle,e=a.flipHorizontallyText;return this.createActionButtonElement(b,c,d,e)},createFlipVerticallyButtonElement:function(){var a=this,b=a.flipVertically,c=a.flipVerticallyIcon,d=a.flipVerticallyIconStyle,e=a.flipVerticallyText;return this.createActionButtonElement(b,c,d,e)},createRotateClockwiseButtonElement:function(){var a=this,b=a.rotateClockwise,c=a.rotateClockwiseIcon,d=a.rotateClockwiseIconStyle,e=a.rotateClockwiseText;return this.createActionButtonElement(b,c,d,e)},createRotateCounterclockwiseButtonElement:function(){var a=this,b=a.rotateCounterclockwise,c=a.rotateCounterclockwiseIcon,d=a.rotateCounterclockwiseIconStyle,e=a.rotateCounterclockwiseText;return this.createActionButtonElement(b,c,d,e)},createUploaderElement:function(){var a=this,b=a.$createElement,c=a.disabled,e=a.readonly,f=a.upload,g=a.uploadIcon,h=a.uploadIconStyle;return g=d(g).call(this),h=d(h).call(this),b("v-card",{props:{flat:!0},style:{alignItems:"center",bottom:0,display:"flex",justifyContent:"center",left:0,position:"absolute",right:0,top:0}},[b("v-btn",{props:{color:"primary",disabled:c||e,fab:!0,large:!0},on:{click:f}},[b("v-icon",{style:h},g)])])},flipHorizontally:function(){this.image=this.image.flop()},flipVertically:function(){this.image=this.image.flip()},rotateClockwise:function(){this.image=this.image.rotate90()},rotateCounterclockwise:function(){this.image=this.image.rotate270()},upload:function(){var b=this,c=document.createElement("input");c.type="file",c.addEventListener("change",function(){a.load(c).then(function(a){b.image=a.scaleMin(b.imageWidth,b.imageHeight)}).catch(e)}),c.click()}},render:function(a){var b=[this.createEditorElement()],c=this,d=c.image;return d||b.push(this.createUploaderElement()),a("div",{style:{display:"inline",position:"relative"}},b)}};return"undefined"!=typeof window&&window.Vue&&window.Vue.component(g.name,g),g});
