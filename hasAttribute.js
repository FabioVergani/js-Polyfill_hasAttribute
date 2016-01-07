/* Polyfill for hasAttribute */

(function(e){
 var o=e,p='prototype';
 if(o!==undefined){
	o=o[p],p='hasAttribute';
	if((p in o)===false){
	 o[p]=function(s){return this.getAttribute(s)!==null;};
	};
 };
})(window.Element);
