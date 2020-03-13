var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190703_syb_scopedata*/global.__wcc_version__='v0.5vv_20190703_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'week'])
Z([3,'weeks'])
Z([[6],[[7],[3,'canlender']],[3,'weeks']])
Z(z[0])
Z([3,'index'])
Z([3,'day'])
Z([[7],[3,'weeks']])
Z(z[4])
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[[5],[[5],[[5],[[5],[[5],[1,'uni-calender__date']],[[2,'?:'],[[2,'||'],[[2,'!=='],[[6],[[7],[3,'canlender']],[3,'month']],[[6],[[7],[3,'day']],[3,'month']]],[[6],[[7],[3,'day']],[3,'disable']]],[1,'uni-calender__disable'],[1,'']]],[[2,'?:'],[[2,'&&'],[[2,'&&'],[[2,'||'],[[2,'||'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'day']],[3,'date']],[[6],[[7],[3,'canlender']],[3,'date']]],[[2,'!'],[[6],[[7],[3,'day']],[3,'checked']]]],[[6],[[7],[3,'day']],[3,'multipleBegin']]],[[6],[[7],[3,'day']],[3,'multipleEnd']]],[[2,'=='],[[6],[[7],[3,'canlender']],[3,'month']],[[6],[[7],[3,'day']],[3,'month']]]],[[2,'!'],[[6],[[7],[3,'day']],[3,'disable']]]],[1,'uni-calender__date-current'],[1,'']]],[[2,'?:'],[[7],[3,'lunar']],[1,'uni-calender__lunar'],[1,'']]],[[2,'?:'],[[2,'!'],[[6],[[7],[3,'day']],[3,'isDay']]],[1,'uni-calender__active'],[1,'']]],[[2,'?:'],[[6],[[7],[3,'day']],[3,'isDay']],[1,'uni-calender__is-day'],[1,'']]],[[2,'?:'],[[2,'||'],[[6],[[7],[3,'day']],[3,'multipleBegin']],[[6],[[7],[3,'day']],[3,'multipleEnd']]],[1,'uni-calender__multiple'],[1,'']]],[[2,'?:'],[[6],[[7],[3,'day']],[3,'checked']],[1,'uni-calender__multiple-box'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'selectDays']],[[4],[[5],[[5],[[5],[[5],[[5],[[7],[3,'week']]],[[7],[3,'index']]],[[2,'==='],[[6],[[7],[3,'canlender']],[3,'month']],[[6],[[7],[3,'day']],[3,'month']]]],[1,'$0']],[1,'$1']]]],[[4],[[5],[[5],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'canlender.weeks']],[1,'']],[[7],[3,'week']]]]],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'']],[[7],[3,'index']]],[1,'disable']]]]]],[1,'canlender.lunar']]]]]]]]]]])
Z([3,'uni-calender__circle-box'])
Z([[7],[3,'lunar']])
Z([[6],[[7],[3,'day']],[3,'have']])
Z([[2,'&&'],[[6],[[7],[3,'day']],[3,'have']],[[2,'!'],[[7],[3,'lunar']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'maskShow']],[[2,'!'],[[7],[3,'insert']]]])
Z([[2,'||'],[[7],[3,'maskShow']],[[7],[3,'insert']]])
Z([[4],[[5],[[5],[[5],[1,'uni-calendar__box']],[[2,'?:'],[[7],[3,'aniMaskShow']],[1,'ani-calendar-show'],[1,'']]],[[2,'?:'],[[7],[3,'insert']],[1,'uni-calendar__static'],[1,'']]]])
Z([[2,'!'],[[7],[3,'insert']]])
Z([3,'uni-calenda__content'])
Z([[7],[3,'isLunar']])
Z([3,'__l'])
Z([3,'__e'])
Z([[7],[3,'canlender']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^selectDays']],[[4],[[5],[[4],[[5],[1,'selectDays']]]]]]]]])
Z(z[5])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-countdown data-v-e024b674'])
Z([[7],[3,'showDay']])
Z(z[1])
Z([[2,'!'],[[7],[3,'showColon']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showPopup']])
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[[5],[[5],[1,'uni-popup__wrapper']],[[7],[3,'type']]],[[7],[3,'ani']]],[[2,'?:'],[[7],[3,'animation']],[1,'ani'],[1,'']]],[[2,'?:'],[[2,'!'],[[7],[3,'custom']]],[1,'uni-custom'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'close']],[[4],[[5],[1,true]]]]]]]]]]])
Z(z[1])
Z([3,'uni-popup__wrapper-box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clear']],[[4],[[5],[1,'$event']]]]]]]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'w-picker-cnt']],[[2,'?:'],[[7],[3,'showPicker']],[1,'show'],[1,'']]]])
Z([[2,'=='],[[7],[3,'mode']],[1,'half']])
Z([[2,'=='],[[7],[3,'mode']],[1,'date']])
Z([[2,'=='],[[7],[3,'mode']],[1,'yearMonth']])
Z([[2,'=='],[[7],[3,'mode']],[1,'dateTime']])
Z([[2,'=='],[[7],[3,'mode']],[1,'range']])
Z([[2,'=='],[[7],[3,'mode']],[1,'time']])
Z([[2,'=='],[[7],[3,'mode']],[1,'region']])
Z([[2,'=='],[[7],[3,'mode']],[1,'selector']])
Z([[2,'=='],[[7],[3,'mode']],[1,'limit']])
Z([[2,'=='],[[7],[3,'mode']],[1,'limitHour']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'data'])
Z([[7],[3,'linkList']])
Z(z[0])
Z([[2,'!='],[[6],[[7],[3,'data']],[3,'unreadMessageCount']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'data'])
Z([[7],[3,'linkList']])
Z(z[0])
Z([3,'chatText'])
Z([[2,'=='],[[6],[[7],[3,'data']],[3,'messageName']],[1,'TextMessage']])
Z([[2,'=='],[[6],[[7],[3,'data']],[3,'messageName']],[1,'ImageMessage']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'status']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([1,true])
Z([3,'2019-5-20'])
Z(z[1])
Z(z[1])
Z([[7],[3,'selected']])
Z([3,'2019-9-2'])
Z([3,'1'])
Z(z[0])
Z([3,'vue-ref'])
Z([3,'popup'])
Z([3,'center'])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'bindCityChange']]]]]]]]])
Z([3,'region'])
Z(z[4])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'way']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'bindCityChange']]]]]]]]])
Z([3,'region'])
Z(z[4])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'section_cont'])
Z([3,'item1'])
Z([[2,'=='],[[7],[3,'status']],[1,1]])
Z(z[2])
Z([[2,'=='],[[7],[3,'status']],[1,2]])
Z([[2,'=='],[[7],[3,'status']],[1,3]])
Z(z[5])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'status']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'index-header'])
Z([[7],[3,'leftWords']])
Z([[7],[3,'input']])
Z([[2,'||'],[[7],[3,'rightWords']],[[7],[3,'rightIcon']]])
Z([3,'__l'])
Z([1,1])
Z(z[6])
Z([1,12])
Z([1,40])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'bindCityChange']]]]]]]]])
Z([3,'region'])
Z(z[4])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/uni-calendar/uni-calendar-item.wxml','./components/uni-calendar/uni-calendar.wxml','./components/uni-countdown/uni-countdown.wxml','./components/uni-load-more/uni-load-more.wxml','./components/uni-popup/uni-popup.wxml','./components/w-picker/w-picker.wxml','./pages/Copyright/Copyright.wxml','./pages/about/about.wxml','./pages/assemble/assemble.wxml','./pages/chat/chat.wxml','./pages/chat/chatContent/chatContent.wxml','./pages/feedback/feedback.wxml','./pages/freeTeaching/freeTeaching.wxml','./pages/growthDiary/growthDiary.wxml','./pages/hncjiaoxue_intro/hncjiaoxue_intro.wxml','./pages/hncjiaoxue_mulu/hncjiaoxue_mulu.wxml','./pages/index/index.wxml','./pages/login/login.wxml','./pages/message/message.wxml','./pages/my/activeCode/activeCode.wxml','./pages/my/daySignin/daySignin.wxml','./pages/my/fans/fans.wxml','./pages/my/follow/follow.wxml','./pages/my/huiyuanjifen/huiyuanjifen.wxml','./pages/my/huiyuantequan/huiyuantequan.wxml','./pages/my/huiyuanxinxi/huiyuanxinxi.wxml','./pages/my/jifenguize/jifenguize.wxml','./pages/my/lstgjl/lstgjl.wxml','./pages/my/my.wxml','./pages/my/mycollect/mycollect.wxml','./pages/my/mydiscount/mydiscount.wxml','./pages/my/shengjihuiyuan/shengjihuiyuan.wxml','./pages/my/signature/signature.wxml','./pages/my/videoGift/videoGift.wxml','./pages/myPublished/myPublished.wxml','./pages/online_Teach/onlineTeach.wxml','./pages/onlinestore/myOrder/myOrder.wxml','./pages/onlinestore/onlinestore.wxml','./pages/publishedDiary/publishedDiary.wxml','./pages/reg/reg.wxml','./pages/userInfo/userInfo.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_v()
_(cF,oH)
var cI=function(lK,oJ,aL,gg){
var eN=_mz(z,'view',['bindtap',8,'class',1,'data-event-opts',2],[],lK,oJ,gg)
var bO=_n('view')
_rz(z,bO,'class',11,lK,oJ,gg)
var oP=_v()
_(bO,oP)
if(_oz(z,12,lK,oJ,gg)){oP.wxVkey=1
}
var xQ=_v()
_(bO,xQ)
if(_oz(z,13,lK,oJ,gg)){xQ.wxVkey=1
}
var oR=_v()
_(bO,oR)
if(_oz(z,14,lK,oJ,gg)){oR.wxVkey=1
}
oP.wxXCkey=1
xQ.wxXCkey=1
oR.wxXCkey=1
_(eN,bO)
_(aL,eN)
return aL
}
oH.wxXCkey=2
_2z(z,6,cI,fE,oD,gg,oH,'day','index','index')
return cF
}
oB.wxXCkey=2
_2z(z,2,xC,e,s,gg,oB,'weeks','week','week')
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var cT=_n('view')
var hU=_v()
_(cT,hU)
if(_oz(z,0,e,s,gg)){hU.wxVkey=1
}
var oV=_v()
_(cT,oV)
if(_oz(z,1,e,s,gg)){oV.wxVkey=1
var cW=_n('view')
_rz(z,cW,'class',2,e,s,gg)
var oX=_v()
_(cW,oX)
if(_oz(z,3,e,s,gg)){oX.wxVkey=1
}
var lY=_n('view')
_rz(z,lY,'class',4,e,s,gg)
var aZ=_v()
_(lY,aZ)
if(_oz(z,5,e,s,gg)){aZ.wxVkey=1
}
var t1=_mz(z,'uni-calendar-item',['bind:__l',6,'bind:selectDays',1,'canlender',2,'data-event-opts',3,'lunar',4,'vueId',5],[],e,s,gg)
_(lY,t1)
aZ.wxXCkey=1
_(cW,lY)
oX.wxXCkey=1
_(oV,cW)
}
hU.wxXCkey=1
oV.wxXCkey=1
oV.wxXCkey=3
_(r,cT)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var b3=_n('view')
_rz(z,b3,'class',0,e,s,gg)
var o4=_v()
_(b3,o4)
if(_oz(z,1,e,s,gg)){o4.wxVkey=1
}
var x5=_v()
_(b3,x5)
if(_oz(z,2,e,s,gg)){x5.wxVkey=1
}
var o6=_v()
_(b3,o6)
if(_oz(z,3,e,s,gg)){o6.wxVkey=1
}
o4.wxXCkey=1
x5.wxXCkey=1
o6.wxXCkey=1
_(r,b3)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var h9=_v()
_(r,h9)
if(_oz(z,0,e,s,gg)){h9.wxVkey=1
var o0=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var cAB=_mz(z,'view',['catchtap',4,'class',1,'data-event-opts',2],[],e,s,gg)
var oBB=_n('slot')
_(cAB,oBB)
_(o0,cAB)
_(h9,o0)
}
h9.wxXCkey=1
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var aDB=_n('view')
_rz(z,aDB,'class',0,e,s,gg)
var tEB=_v()
_(aDB,tEB)
if(_oz(z,1,e,s,gg)){tEB.wxVkey=1
}
var eFB=_v()
_(aDB,eFB)
if(_oz(z,2,e,s,gg)){eFB.wxVkey=1
}
var bGB=_v()
_(aDB,bGB)
if(_oz(z,3,e,s,gg)){bGB.wxVkey=1
}
var oHB=_v()
_(aDB,oHB)
if(_oz(z,4,e,s,gg)){oHB.wxVkey=1
}
var xIB=_v()
_(aDB,xIB)
if(_oz(z,5,e,s,gg)){xIB.wxVkey=1
}
var oJB=_v()
_(aDB,oJB)
if(_oz(z,6,e,s,gg)){oJB.wxVkey=1
}
var fKB=_v()
_(aDB,fKB)
if(_oz(z,7,e,s,gg)){fKB.wxVkey=1
}
var cLB=_v()
_(aDB,cLB)
if(_oz(z,8,e,s,gg)){cLB.wxVkey=1
}
var hMB=_v()
_(aDB,hMB)
if(_oz(z,9,e,s,gg)){hMB.wxVkey=1
}
var oNB=_v()
_(aDB,oNB)
if(_oz(z,10,e,s,gg)){oNB.wxVkey=1
}
tEB.wxXCkey=1
eFB.wxXCkey=1
bGB.wxXCkey=1
oHB.wxXCkey=1
xIB.wxXCkey=1
oJB.wxXCkey=1
fKB.wxXCkey=1
cLB.wxXCkey=1
hMB.wxXCkey=1
oNB.wxXCkey=1
_(r,aDB)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var tSB=_v()
_(r,tSB)
var eTB=function(oVB,bUB,xWB,gg){
var fYB=_v()
_(xWB,fYB)
if(_oz(z,4,oVB,bUB,gg)){fYB.wxVkey=1
}
fYB.wxXCkey=1
return xWB
}
tSB.wxXCkey=2
_2z(z,2,eTB,e,s,gg,tSB,'data','index','index')
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var h1B=_v()
_(r,h1B)
var o2B=function(o4B,c3B,l5B,gg){
var t7B=_n('view')
_rz(z,t7B,'class',4,o4B,c3B,gg)
var e8B=_v()
_(t7B,e8B)
if(_oz(z,5,o4B,c3B,gg)){e8B.wxVkey=1
}
else{e8B.wxVkey=2
var b9B=_v()
_(e8B,b9B)
if(_oz(z,6,o4B,c3B,gg)){b9B.wxVkey=1
}
b9B.wxXCkey=1
}
e8B.wxXCkey=1
_(l5B,t7B)
return l5B
}
h1B.wxXCkey=2
_2z(z,2,o2B,e,s,gg,h1B,'data','index','index')
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var oFC=_mz(z,'uni-load-more',['bind:__l',0,'status',1,'vueId',1],[],e,s,gg)
_(r,oFC)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var tKC=_n('view')
var eLC=_mz(z,'uni-calendar',['bind:__l',0,'disableBefore',1,'endDate',1,'insert',2,'lunar',3,'selected',4,'startDate',5,'vueId',6],[],e,s,gg)
_(tKC,eLC)
var bMC=_mz(z,'uni-popup',['bind:__l',8,'class',1,'data-ref',2,'type',3,'vueId',4,'vueSlots',5],[],e,s,gg)
_(tKC,bMC)
_(r,tKC)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var hSC=_mz(z,'w-picker',['bind:__l',0,'bind:confirm',1,'class',1,'data-event-opts',2,'data-ref',3,'mode',4,'vueId',5],[],e,s,gg)
_(r,hSC)
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var tYC=_v()
_(r,tYC)
if(_oz(z,0,e,s,gg)){tYC.wxVkey=1
}
tYC.wxXCkey=1
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var b1C=_mz(z,'w-picker',['bind:__l',0,'bind:confirm',1,'class',1,'data-event-opts',2,'data-ref',3,'mode',4,'vueId',5],[],e,s,gg)
_(r,b1C)
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var x3C=_n('view')
_rz(z,x3C,'class',0,e,s,gg)
var c6C=_n('view')
_rz(z,c6C,'class',1,e,s,gg)
var h7C=_v()
_(c6C,h7C)
if(_oz(z,2,e,s,gg)){h7C.wxVkey=1
}
var o8C=_v()
_(c6C,o8C)
if(_oz(z,3,e,s,gg)){o8C.wxVkey=1
}
var c9C=_v()
_(c6C,c9C)
if(_oz(z,4,e,s,gg)){c9C.wxVkey=1
}
h7C.wxXCkey=1
o8C.wxXCkey=1
c9C.wxXCkey=1
_(x3C,c6C)
var o4C=_v()
_(x3C,o4C)
if(_oz(z,5,e,s,gg)){o4C.wxVkey=1
}
var f5C=_v()
_(x3C,f5C)
if(_oz(z,6,e,s,gg)){f5C.wxVkey=1
}
o4C.wxXCkey=1
f5C.wxXCkey=1
_(r,x3C)
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var tCD=_mz(z,'uni-load-more',['bind:__l',0,'status',1,'vueId',1],[],e,s,gg)
_(r,tCD)
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var oFD=_n('view')
_rz(z,oFD,'class',0,e,s,gg)
var xGD=_n('view')
_rz(z,xGD,'class',1,e,s,gg)
var oHD=_v()
_(xGD,oHD)
if(_oz(z,2,e,s,gg)){oHD.wxVkey=1
}
var fID=_v()
_(xGD,fID)
if(_oz(z,3,e,s,gg)){fID.wxVkey=1
}
var cJD=_v()
_(xGD,cJD)
if(_oz(z,4,e,s,gg)){cJD.wxVkey=1
}
oHD.wxXCkey=1
fID.wxXCkey=1
cJD.wxXCkey=1
_(oFD,xGD)
var hKD=_mz(z,'uni-countdown',['bind:__l',5,'day',1,'hour',2,'minute',3,'second',4,'vueId',5],[],e,s,gg)
_(oFD,hKD)
_(r,oFD)
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
var oND=_mz(z,'w-picker',['bind:__l',0,'bind:confirm',1,'class',1,'data-event-opts',2,'data-ref',3,'mode',4,'vueId',5],[],e,s,gg)
_(r,oND)
return r
}
e_[x[39]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
return r
}
e_[x[40]]={f:m40,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/my/my","pages/my/jifenguize/jifenguize","pages/my/huiyuantequan/huiyuantequan","pages/online_Teach/onlineTeach","pages/onlinestore/onlinestore","pages/myPublished/myPublished","pages/my/daySignin/daySignin","pages/onlinestore/myOrder/myOrder","pages/my/huiyuanxinxi/huiyuanxinxi","pages/my/huiyuanjifen/huiyuanjifen","pages/my/mycollect/mycollect","pages/my/lstgjl/lstgjl","pages/publishedDiary/publishedDiary","pages/chat/chat","pages/chat/chatContent/chatContent","pages/freeTeaching/freeTeaching","pages/login/login","pages/reg/reg","pages/hncjiaoxue_mulu/hncjiaoxue_mulu","pages/Copyright/Copyright","pages/my/shengjihuiyuan/shengjihuiyuan","pages/growthDiary/growthDiary","pages/hncjiaoxue_intro/hncjiaoxue_intro","pages/my/mydiscount/mydiscount","pages/my/signature/signature","pages/my/videoGift/videoGift","pages/my/activeCode/activeCode","pages/message/message","pages/my/follow/follow","pages/my/fans/fans","pages/userInfo/userInfo","pages/feedback/feedback","pages/about/about","pages/assemble/assemble"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black"},"tabBar":{"selectedColor":"#008800","backgroundColor":"#ffffff","color":"#000000","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"/static/index/index.png","selectedIconPath":"/static/index/index_check.png","biaocount":0},{"pagePath":"pages/message/message","text":"消息","iconPath":"/static/index/message.png","selectedIconPath":"/static/index/message-active.png","biaocount":1},{"pagePath":"pages/my/my","text":"我的","iconPath":"/static/index/my.png","selectedIconPath":"/static/index/my_check.png","biaocount":0}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"kxsxApp","compilerVersion":"2.6.1","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/uni-calendar/uni-calendar-item.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/uni-calendar/uni-calendar-item.wxml']=$gwx('./components/uni-calendar/uni-calendar-item.wxml');

__wxAppCode__['components/uni-calendar/uni-calendar.json']={"component":true,"usingComponents":{"uni-calendar-item":"/components/uni-calendar/uni-calendar-item"}};
__wxAppCode__['components/uni-calendar/uni-calendar.wxml']=$gwx('./components/uni-calendar/uni-calendar.wxml');

__wxAppCode__['components/uni-countdown/uni-countdown.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/uni-countdown/uni-countdown.wxml']=$gwx('./components/uni-countdown/uni-countdown.wxml');

__wxAppCode__['components/uni-load-more/uni-load-more.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/uni-load-more/uni-load-more.wxml']=$gwx('./components/uni-load-more/uni-load-more.wxml');

__wxAppCode__['components/uni-popup/uni-popup.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/uni-popup/uni-popup.wxml']=$gwx('./components/uni-popup/uni-popup.wxml');

__wxAppCode__['components/w-picker/w-picker.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/w-picker/w-picker.wxml']=$gwx('./components/w-picker/w-picker.wxml');

__wxAppCode__['pages/about/about.json']={"navigationBarTitleText":"关于我们","usingComponents":{}};
__wxAppCode__['pages/about/about.wxml']=$gwx('./pages/about/about.wxml');

__wxAppCode__['pages/assemble/assemble.json']={"navigationBarTitleText":"拼团详情","usingComponents":{}};
__wxAppCode__['pages/assemble/assemble.wxml']=$gwx('./pages/assemble/assemble.wxml');

__wxAppCode__['pages/chat/chat.json']={"navigationBarTitleText":"消息","titleNView":{"titleSize":"28rpx"},"usingComponents":{}};
__wxAppCode__['pages/chat/chat.wxml']=$gwx('./pages/chat/chat.wxml');

__wxAppCode__['pages/chat/chatContent/chatContent.json']={"titleNView":{"titleSize":"28rpx"},"usingComponents":{}};
__wxAppCode__['pages/chat/chatContent/chatContent.wxml']=$gwx('./pages/chat/chatContent/chatContent.wxml');

__wxAppCode__['pages/Copyright/Copyright.json']={"navigationBarTitleText":"版权声明","titleNView":{"titleSize":"28rpx"},"usingComponents":{}};
__wxAppCode__['pages/Copyright/Copyright.wxml']=$gwx('./pages/Copyright/Copyright.wxml');

__wxAppCode__['pages/feedback/feedback.json']={"navigationBarTitleText":"意见反馈","usingComponents":{}};
__wxAppCode__['pages/feedback/feedback.wxml']=$gwx('./pages/feedback/feedback.wxml');

__wxAppCode__['pages/freeTeaching/freeTeaching.json']={"navigationBarTitleText":"在线教学","titleNView":{"titleSize":"28rpx"},"usingComponents":{}};
__wxAppCode__['pages/freeTeaching/freeTeaching.wxml']=$gwx('./pages/freeTeaching/freeTeaching.wxml');

__wxAppCode__['pages/growthDiary/growthDiary.json']={"navigationBarTitleText":"个人日记","titleNView":{"titleSize":"28rpx"},"usingComponents":{}};
__wxAppCode__['pages/growthDiary/growthDiary.wxml']=$gwx('./pages/growthDiary/growthDiary.wxml');

__wxAppCode__['pages/hncjiaoxue_intro/hncjiaoxue_intro.json']={"navigationBarTitleText":"金木水火土","titleNView":{"titleSize":"28rpx"},"usingComponents":{}};
__wxAppCode__['pages/hncjiaoxue_intro/hncjiaoxue_intro.wxml']=$gwx('./pages/hncjiaoxue_intro/hncjiaoxue_intro.wxml');

__wxAppCode__['pages/hncjiaoxue_mulu/hncjiaoxue_mulu.json']={"navigationBarTitleText":"功能尺适用教学","titleNView":{"titleSize":"28rpx"},"usingComponents":{}};
__wxAppCode__['pages/hncjiaoxue_mulu/hncjiaoxue_mulu.wxml']=$gwx('./pages/hncjiaoxue_mulu/hncjiaoxue_mulu.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"首页","titleNView":false,"usingComponents":{"uni-load-more":"/components/uni-load-more/uni-load-more"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/login/login.json']={"navigationStyle":"custom","titleNView":false,"usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/message/message.json']={"navigationBarTitleText":"首页","titleNView":false,"usingComponents":{}};
__wxAppCode__['pages/message/message.wxml']=$gwx('./pages/message/message.wxml');

__wxAppCode__['pages/my/activeCode/activeCode.json']={"navigationBarTitleText":"激活码","titleNView":{"titleSize":"28rpx"},"usingComponents":{}};
__wxAppCode__['pages/my/activeCode/activeCode.wxml']=$gwx('./pages/my/activeCode/activeCode.wxml');

__wxAppCode__['pages/my/daySignin/daySignin.json']={"navigationBarTitleText":"每日签到","titleNView":{"titleSize":"28rpx"},"usingComponents":{"uni-calendar":"/components/uni-calendar/uni-calendar","uni-popup":"/components/uni-popup/uni-popup"}};
__wxAppCode__['pages/my/daySignin/daySignin.wxml']=$gwx('./pages/my/daySignin/daySignin.wxml');

__wxAppCode__['pages/my/fans/fans.json']={"navigationBarTitleText":"粉丝","usingComponents":{}};
__wxAppCode__['pages/my/fans/fans.wxml']=$gwx('./pages/my/fans/fans.wxml');

__wxAppCode__['pages/my/follow/follow.json']={"navigationBarTitleText":"关注的人","usingComponents":{}};
__wxAppCode__['pages/my/follow/follow.wxml']=$gwx('./pages/my/follow/follow.wxml');

__wxAppCode__['pages/my/huiyuanjifen/huiyuanjifen.json']={"navigationBarTitleText":"会员积分","titleNView":{"titleSize":"28rpx"},"usingComponents":{}};
__wxAppCode__['pages/my/huiyuanjifen/huiyuanjifen.wxml']=$gwx('./pages/my/huiyuanjifen/huiyuanjifen.wxml');

__wxAppCode__['pages/my/huiyuantequan/huiyuantequan.json']={"navigationBarTitleText":"我的特权","navigationBarBackgroundColor":"#008800","navigationBarTextStyle":"white","titleNView":{"titleSize":"28rpx"},"usingComponents":{}};
__wxAppCode__['pages/my/huiyuantequan/huiyuantequan.wxml']=$gwx('./pages/my/huiyuantequan/huiyuantequan.wxml');

__wxAppCode__['pages/my/huiyuanxinxi/huiyuanxinxi.json']={"navigationBarTitleText":"会员信息","titleNView":{"titleSize":"28rpx"},"usingComponents":{"w-picker":"/components/w-picker/w-picker"}};
__wxAppCode__['pages/my/huiyuanxinxi/huiyuanxinxi.wxml']=$gwx('./pages/my/huiyuanxinxi/huiyuanxinxi.wxml');

__wxAppCode__['pages/my/jifenguize/jifenguize.json']={"navigationBarTitleText":"积分规则","navigationBarBackgroundColor":"#008800","navigationBarTextStyle":"white","titleNView":{"titleSize":"28rpx"},"usingComponents":{}};
__wxAppCode__['pages/my/jifenguize/jifenguize.wxml']=$gwx('./pages/my/jifenguize/jifenguize.wxml');

__wxAppCode__['pages/my/lstgjl/lstgjl.json']={"navigationBarTitleText":"历史投稿记录","titleNView":{"titleSize":"28rpx"},"usingComponents":{}};
__wxAppCode__['pages/my/lstgjl/lstgjl.wxml']=$gwx('./pages/my/lstgjl/lstgjl.wxml');

__wxAppCode__['pages/my/my.json']={"navigationBarTitleText":"我的","titleNView":false,"usingComponents":{}};
__wxAppCode__['pages/my/my.wxml']=$gwx('./pages/my/my.wxml');

__wxAppCode__['pages/my/mycollect/mycollect.json']={"navigationBarTitleText":"我的收藏","titleNView":{"titleSize":"28rpx"},"usingComponents":{}};
__wxAppCode__['pages/my/mycollect/mycollect.wxml']=$gwx('./pages/my/mycollect/mycollect.wxml');

__wxAppCode__['pages/my/mydiscount/mydiscount.json']={"navigationBarTitleText":"优惠券","titleNView":{"titleSize":"28rpx"},"usingComponents":{}};
__wxAppCode__['pages/my/mydiscount/mydiscount.wxml']=$gwx('./pages/my/mydiscount/mydiscount.wxml');

__wxAppCode__['pages/my/shengjihuiyuan/shengjihuiyuan.json']={"navigationBarTitleText":"升级会员","titleNView":{"titleSize":"28rpx"},"usingComponents":{"w-picker":"/components/w-picker/w-picker"}};
__wxAppCode__['pages/my/shengjihuiyuan/shengjihuiyuan.wxml']=$gwx('./pages/my/shengjihuiyuan/shengjihuiyuan.wxml');

__wxAppCode__['pages/my/signature/signature.json']={"navigationBarTitleText":"个性签名","titleNView":{"titleSize":"28rpx"},"usingComponents":{}};
__wxAppCode__['pages/my/signature/signature.wxml']=$gwx('./pages/my/signature/signature.wxml');

__wxAppCode__['pages/my/videoGift/videoGift.json']={"navigationBarTitleText":"视频礼包","titleNView":{"titleSize":"28rpx"},"usingComponents":{}};
__wxAppCode__['pages/my/videoGift/videoGift.wxml']=$gwx('./pages/my/videoGift/videoGift.wxml');

__wxAppCode__['pages/myPublished/myPublished.json']={"navigationBarTitleText":"我的发表","titleNView":{"titleSize":"28rpx"},"usingComponents":{}};
__wxAppCode__['pages/myPublished/myPublished.wxml']=$gwx('./pages/myPublished/myPublished.wxml');

__wxAppCode__['pages/online_Teach/onlineTeach.json']={"navigationBarTitleText":"教材同步学习教学","enablePullDownRefresh":false,"titleNView":{"titleSize":"28rpx"},"usingComponents":{"uni-load-more":"/components/uni-load-more/uni-load-more"}};
__wxAppCode__['pages/online_Teach/onlineTeach.wxml']=$gwx('./pages/online_Teach/onlineTeach.wxml');

__wxAppCode__['pages/onlinestore/myOrder/myOrder.json']={"navigationBarTitleText":"我的订单","titleNView":{"titleSize":"28rpx"},"usingComponents":{}};
__wxAppCode__['pages/onlinestore/myOrder/myOrder.wxml']=$gwx('./pages/onlinestore/myOrder/myOrder.wxml');

__wxAppCode__['pages/onlinestore/onlinestore.json']={"titleNView":{"searchInput":{"align":"left","backgroundColor":"#efefef","borderRadius":"30px","placeholder":"一年级上册"},"buttons":{"text":"地图","fontSize":"16","color":"#fff"}},"usingComponents":{"uni-countdown":"/components/uni-countdown/uni-countdown"}};
__wxAppCode__['pages/onlinestore/onlinestore.wxml']=$gwx('./pages/onlinestore/onlinestore.wxml');

__wxAppCode__['pages/publishedDiary/publishedDiary.json']={"navigationBarTitleText":"发表记录","titleNView":{"titleSize":"28rpx"},"usingComponents":{}};
__wxAppCode__['pages/publishedDiary/publishedDiary.wxml']=$gwx('./pages/publishedDiary/publishedDiary.wxml');

__wxAppCode__['pages/reg/reg.json']={"navigationBarTitleText":"开心书写","titleNView":{"titleSize":"28rpx"},"usingComponents":{"w-picker":"/components/w-picker/w-picker"}};
__wxAppCode__['pages/reg/reg.wxml']=$gwx('./pages/reg/reg.wxml');

__wxAppCode__['pages/userInfo/userInfo.json']={"navigationBarTitleText":"用户信息","usingComponents":{}};
__wxAppCode__['pages/userInfo/userInfo.wxml']=$gwx('./pages/userInfo/userInfo.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0c37":function(t,n,e){"use strict";var o=e("6045"),a=e.n(o);a.a},"516e":function(t,n,e){"use strict";e.r(n);var o=e("8935"),a=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=a.a},6045:function(t,n,e){},8935:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={onLaunch:function(){},onShow:function(){},onHide:function(){}};n.default=o},e26b:function(t,n,e){"use strict";e.r(n);var o=e("516e");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("0c37");var u,r,i,c,f=e("f0c5"),l=Object(f["a"])(o["default"],u,r,!1,null,null,null,!1,i,c);n["default"]=l.exports},ee32:function(t,n,e){"use strict";(function(t){e("907b"),e("921b");var n=a(e("66fd")),o=a(e("e26b"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){r(t,n,e[n])})}return t}function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}n.default.config.productionTip=!1,o.default.mpType="app";var i=new n.default(u({},o.default));n.default.prototype.ajax=function(t,n,e){wx.request({url:"https://kxsx.kaifadanao.cn"+t,method:"post",data:n,header:{"content-type":"application/json",token:wx.getStorageSync("token")},success:function(t){if(wx.hideLoading(),0==t.data.status)wx.hideLoading(),wx.showToast({title:t.data.msg,icon:"none",mask:!0});else if(-1==t.data.status)wx.navigateTo({url:"/pages/login/login"});else if(1==t.data.status||2==t.data.status||3==t.data.status)return"function"==typeof e&&e(t.data)},fail:function(){return"function"==typeof e&&e(!1)}})},t(i).$mount()}).call(this,e("6e42")["createApp"])}},[["ee32","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function n(n) {
    for (var o, r, a = n[0], c = n[1], p = n[2], l = 0, s = []; l < a.length; l++) {
      r = a[l], u[r] && s.push(u[r][0]), u[r] = 0;
    }

    for (o in c) {
      Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
    }

    d && d(n);

    while (s.length) {
      s.shift()();
    }

    return i.push.apply(i, p || []), t();
  }

  function t() {
    for (var e, n = 0; n < i.length; n++) {
      for (var t = i[n], o = !0, r = 1; r < t.length; r++) {
        var a = t[r];
        0 !== u[a] && (o = !1);
      }

      o && (i.splice(n--, 1), e = c(c.s = t[0]));
    }

    return e;
  }

  var o = {},
      r = {
    "common/runtime": 0
  },
      u = {
    "common/runtime": 0
  },
      i = [];

  function a(e) {
    return c.p + "" + e + ".js";
  }

  function c(n) {
    if (o[n]) return o[n].exports;
    var t = o[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(t.exports, t, t.exports, c), t.l = !0, t.exports;
  }

  c.e = function (e) {
    var n = [],
        t = {
      "components/uni-load-more/uni-load-more": 1,
      "components/uni-countdown/uni-countdown": 1,
      "components/uni-calendar/uni-calendar": 1,
      "components/uni-popup/uni-popup": 1,
      "components/w-picker/w-picker": 1,
      "components/uni-calendar/uni-calendar-item": 1
    };
    r[e] ? n.push(r[e]) : 0 !== r[e] && t[e] && n.push(r[e] = new Promise(function (n, t) {
      for (var o = ({
        "components/uni-load-more/uni-load-more": "components/uni-load-more/uni-load-more",
        "components/uni-countdown/uni-countdown": "components/uni-countdown/uni-countdown",
        "components/uni-calendar/uni-calendar": "components/uni-calendar/uni-calendar",
        "components/uni-popup/uni-popup": "components/uni-popup/uni-popup",
        "components/w-picker/w-picker": "components/w-picker/w-picker",
        "components/uni-calendar/uni-calendar-item": "components/uni-calendar/uni-calendar-item"
      }[e] || e) + ".wxss", u = c.p + o, i = document.getElementsByTagName("link"), a = 0; a < i.length; a++) {
        var p = i[a],
            l = p.getAttribute("data-href") || p.getAttribute("href");
        if ("stylesheet" === p.rel && (l === o || l === u)) return n();
      }

      var s = document.getElementsByTagName("style");

      for (a = 0; a < s.length; a++) {
        p = s[a], l = p.getAttribute("data-href");
        if (l === o || l === u) return n();
      }

      var d = document.createElement("link");
      d.rel = "stylesheet", d.type = "text/css", d.onload = n, d.onerror = function (n) {
        var o = n && n.target && n.target.src || u,
            i = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
        i.request = o, delete r[e], d.parentNode.removeChild(d), t(i);
      }, d.href = u;
      var m = document.getElementsByTagName("head")[0];
      m.appendChild(d);
    }).then(function () {
      r[e] = 0;
    }));
    var o = u[e];
    if (0 !== o) if (o) n.push(o[2]);else {
      var i = new Promise(function (n, t) {
        o = u[e] = [n, t];
      });
      n.push(o[2] = i);
      var p,
          l = document.createElement("script");
      l.charset = "utf-8", l.timeout = 120, c.nc && l.setAttribute("nonce", c.nc), l.src = a(e), p = function p(n) {
        l.onerror = l.onload = null, clearTimeout(s);
        var t = u[e];

        if (0 !== t) {
          if (t) {
            var o = n && ("load" === n.type ? "missing" : n.type),
                r = n && n.target && n.target.src,
                i = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + r + ")");
            i.type = o, i.request = r, t[1](i);
          }

          u[e] = void 0;
        }
      };
      var s = setTimeout(function () {
        p({
          type: "timeout",
          target: l
        });
      }, 12e4);
      l.onerror = l.onload = p, document.head.appendChild(l);
    }
    return Promise.all(n);
  }, c.m = e, c.c = o, c.d = function (e, n, t) {
    c.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    });
  }, c.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, c.t = function (e, n) {
    if (1 & n && (e = c(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (c.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var o in e) {
      c.d(t, o, function (n) {
        return e[n];
      }.bind(null, o));
    }
    return t;
  }, c.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return c.d(n, "a", n), n;
  }, c.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, c.p = "/", c.oe = function (e) {
    throw console.error(e), e;
  };
  var p = global["webpackJsonp"] = global["webpackJsonp"] || [],
      l = p.push.bind(p);
  p.push = n, p = p.slice();

  for (var s = 0; s < p.length; s++) {
    n(p[s]);
  }

  var d = l;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(e,t,n){"use strict";function a(e){var t=Object.prototype.toString.call(e);return t.substring(8,t.length-1)}function l(){return"string"===typeof __channelId__&&__channelId__}function r(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.shift();if(l())return t.push(t.pop().replace("at ","uni-app:///")),console[r]["apply"](console,t);var i=t.map(function(e){var t=Object.prototype.toString.call(e);if("[object object]"===t.toLowerCase())try{e="---BEGIN:JSON---"+JSON.stringify(e)+"---END:JSON---"}catch(l){e="[object object]"}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var n=a(e).toUpperCase();e="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+e+"---END:"+n+"---":String(e)}return e}),o="";if(i.length>1){var s=i.pop();o=i.join("---COMMA---"),0===s.indexOf(" at ")?o+=s:o+="---COMMA---"+s}else o=i[0];console[r](o)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},"1d78":function(e,t,n){"use strict";(function(a){var l,r;(function(a,i){l=i,r="function"===typeof l?l.call(t,n,t,e):l,void 0===r||(e.exports=r)})(0,function(e){var t=function(){function e(e,t,n){this.low=0|e,this.high=0|t,this.unsigned=!!n}function t(e){return!0===(e&&e.__isLong__)}e.prototype.__isLong__,Object.defineProperty(e.prototype,"__isLong__",{value:!0,enumerable:!1,configurable:!1}),e.isLong=t;var n={},a={};function l(e,t){var l,r,o;return t?(e>>>=0,(o=0<=e&&e<256)&&(r=a[e],r)?r:(l=i(e,(0|e)<0?-1:0,!0),o&&(a[e]=l),l)):(e|=0,(o=-128<=e&&e<128)&&(r=n[e],r)?r:(l=i(e,e<0?-1:0,!1),o&&(n[e]=l),l))}function r(e,t){if(isNaN(e)||!isFinite(e))return t?d:p;if(t){if(e<0)return d;if(e>=v)return M}else{if(e<=-b)return T;if(e+1>=b)return C}return e<0?r(-e,t).neg():i(e%g|0,e/g|0,t)}function i(t,n,a){return new e(t,n,a)}e.fromInt=l,e.fromNumber=r,e.fromBits=i;var o=Math.pow;function s(e,t,n){if(0===e.length)throw Error("empty string");if("NaN"===e||"Infinity"===e||"+Infinity"===e||"-Infinity"===e)return p;if("number"===typeof t?(n=t,t=!1):t=!!t,n=n||10,n<2||36<n)throw RangeError("radix");var a;if((a=e.indexOf("-"))>0)throw Error("interior hyphen");if(0===a)return s(e.substring(1),t,n).neg();for(var l=r(o(n,8)),i=p,u=0;u<e.length;u+=8){var c=Math.min(8,e.length-u),f=parseInt(e.substring(u,u+c),n);if(c<8){var g=r(o(n,c));i=i.mul(g).add(r(f))}else i=i.mul(l),i=i.add(r(f))}return i.unsigned=t,i}function u(t){return t instanceof e?t:"number"===typeof t?r(t):"string"===typeof t?s(t):i(t.low,t.high,t.unsigned)}e.fromString=s,e.fromValue=u;var c=65536,f=1<<24,g=c*c,v=g*g,b=v/2,h=l(f),p=l(0);e.ZERO=p;var d=l(0,!0);e.UZERO=d;var y=l(1);e.ONE=y;var m=l(1,!0);e.UONE=m;var I=l(-1);e.NEG_ONE=I;var C=i(-1,2147483647,!1);e.MAX_VALUE=C;var M=i(-1,-1,!0);e.MAX_UNSIGNED_VALUE=M;var T=i(0,-2147483648,!1);e.MIN_VALUE=T;var E=e.prototype;return E.toInt=function(){return this.unsigned?this.low>>>0:this.low},E.toNumber=function(){return this.unsigned?(this.high>>>0)*g+(this.low>>>0):this.high*g+(this.low>>>0)},E.toString=function(e){if(e=e||10,e<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(this.eq(T)){var t=r(e),n=this.div(t),a=n.mul(t).sub(this);return n.toString(e)+a.toInt().toString(e)}return"-"+this.neg().toString(e)}var l=r(o(e,6),this.unsigned),i=this,s="";while(1){var u=i.div(l),c=i.sub(u.mul(l)).toInt()>>>0,f=c.toString(e);if(i=u,i.isZero())return f+s;while(f.length<6)f="0"+f;s=""+f+s}},E.getHighBits=function(){return this.high},E.getHighBitsUnsigned=function(){return this.high>>>0},E.getLowBits=function(){return this.low},E.getLowBitsUnsigned=function(){return this.low>>>0},E.getNumBitsAbs=function(){if(this.isNegative())return this.eq(T)?64:this.neg().getNumBitsAbs();for(var e=0!=this.high?this.high:this.low,t=31;t>0;t--)if(0!=(e&1<<t))break;return 0!=this.high?t+33:t+1},E.isZero=function(){return 0===this.high&&0===this.low},E.isNegative=function(){return!this.unsigned&&this.high<0},E.isPositive=function(){return this.unsigned||this.high>=0},E.isOdd=function(){return 1===(1&this.low)},E.isEven=function(){return 0===(1&this.low)},E.equals=function(e){return t(e)||(e=u(e)),(this.unsigned===e.unsigned||this.high>>>31!==1||e.high>>>31!==1)&&(this.high===e.high&&this.low===e.low)},E.eq=E.equals,E.notEquals=function(e){return!this.eq(e)},E.neq=E.notEquals,E.lessThan=function(e){return this.comp(e)<0},E.lt=E.lessThan,E.lessThanOrEqual=function(e){return this.comp(e)<=0},E.lte=E.lessThanOrEqual,E.greaterThan=function(e){return this.comp(e)>0},E.gt=E.greaterThan,E.greaterThanOrEqual=function(e){return this.comp(e)>=0},E.gte=E.greaterThanOrEqual,E.compare=function(e){if(t(e)||(e=u(e)),this.eq(e))return 0;var n=this.isNegative(),a=e.isNegative();return n&&!a?-1:!n&&a?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},E.comp=E.compare,E.negate=function(){return!this.unsigned&&this.eq(T)?T:this.not().add(y)},E.neg=E.negate,E.add=function(e){t(e)||(e=u(e));var n=this.high>>>16,a=65535&this.high,l=this.low>>>16,r=65535&this.low,o=e.high>>>16,s=65535&e.high,c=e.low>>>16,f=65535&e.low,g=0,v=0,b=0,h=0;return h+=r+f,b+=h>>>16,h&=65535,b+=l+c,v+=b>>>16,b&=65535,v+=a+s,g+=v>>>16,v&=65535,g+=n+o,g&=65535,i(b<<16|h,g<<16|v,this.unsigned)},E.subtract=function(e){return t(e)||(e=u(e)),this.add(e.neg())},E.sub=E.subtract,E.multiply=function(e){if(this.isZero())return p;if(t(e)||(e=u(e)),e.isZero())return p;if(this.eq(T))return e.isOdd()?T:p;if(e.eq(T))return this.isOdd()?T:p;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(h)&&e.lt(h))return r(this.toNumber()*e.toNumber(),this.unsigned);var n=this.high>>>16,a=65535&this.high,l=this.low>>>16,o=65535&this.low,s=e.high>>>16,c=65535&e.high,f=e.low>>>16,g=65535&e.low,v=0,b=0,d=0,y=0;return y+=o*g,d+=y>>>16,y&=65535,d+=l*g,b+=d>>>16,d&=65535,d+=o*f,b+=d>>>16,d&=65535,b+=a*g,v+=b>>>16,b&=65535,b+=l*f,v+=b>>>16,b&=65535,b+=o*c,v+=b>>>16,b&=65535,v+=n*g+a*f+l*c+o*s,v&=65535,i(d<<16|y,v<<16|b,this.unsigned)},E.mul=E.multiply,E.divide=function(e){if(t(e)||(e=u(e)),e.isZero())throw Error("division by zero");if(this.isZero())return this.unsigned?d:p;var n,a,l;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return d;if(e.gt(this.shru(1)))return m;l=d}else{if(this.eq(T)){if(e.eq(y)||e.eq(I))return T;if(e.eq(T))return y;var i=this.shr(1);return n=i.div(e).shl(1),n.eq(p)?e.isNegative()?y:I:(a=this.sub(e.mul(n)),l=n.add(a.div(e)),l)}if(e.eq(T))return this.unsigned?d:p;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();l=p}a=this;while(a.gte(e)){n=Math.max(1,Math.floor(a.toNumber()/e.toNumber()));var s=Math.ceil(Math.log(n)/Math.LN2),c=s<=48?1:o(2,s-48),f=r(n),g=f.mul(e);while(g.isNegative()||g.gt(a))n-=c,f=r(n,this.unsigned),g=f.mul(e);f.isZero()&&(f=y),l=l.add(f),a=a.sub(g)}return l},E.div=E.divide,E.modulo=function(e){return t(e)||(e=u(e)),this.sub(this.div(e).mul(e))},E.mod=E.modulo,E.not=function(){return i(~this.low,~this.high,this.unsigned)},E.and=function(e){return t(e)||(e=u(e)),i(this.low&e.low,this.high&e.high,this.unsigned)},E.or=function(e){return t(e)||(e=u(e)),i(this.low|e.low,this.high|e.high,this.unsigned)},E.xor=function(e){return t(e)||(e=u(e)),i(this.low^e.low,this.high^e.high,this.unsigned)},E.shiftLeft=function(e){return t(e)&&(e=e.toInt()),0===(e&=63)?this:e<32?i(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):i(0,this.low<<e-32,this.unsigned)},E.shl=E.shiftLeft,E.shiftRight=function(e){return t(e)&&(e=e.toInt()),0===(e&=63)?this:e<32?i(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):i(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},E.shr=E.shiftRight,E.shiftRightUnsigned=function(e){if(t(e)&&(e=e.toInt()),e&=63,0===e)return this;var n=this.high;if(e<32){var a=this.low;return i(a>>>e|n<<32-e,n>>>e,this.unsigned)}return i(32===e?n:n>>>e-32,0,this.unsigned)},E.shru=E.shiftRightUnsigned,E.toSigned=function(){return this.unsigned?i(this.low,this.high,!1):this},E.toUnsigned=function(){return this.unsigned?this:i(this.low,this.high,!0)},E.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},E.toBytesLE=function(){var e=this.high,t=this.low;return[255&t,t>>>8&255,t>>>16&255,t>>>24&255,255&e,e>>>8&255,e>>>16&255,e>>>24&255]},E.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24&255,e>>>16&255,e>>>8&255,255&e,t>>>24&255,t>>>16&255,t>>>8&255,255&t]},e}(),n=function(e){var t=function e(t,n,l){if("undefined"===typeof t&&(t=e.DEFAULT_CAPACITY),"undefined"===typeof n&&(n=e.DEFAULT_ENDIAN),"undefined"===typeof l&&(l=e.DEFAULT_NOASSERT),!l){if(t|=0,t<0)throw RangeError("Illegal capacity");n=!!n,l=!!l}this.buffer=0===t?a:new ArrayBuffer(t),this.view=0===t?null:new Uint8Array(this.buffer),this.offset=0,this.markedOffset=-1,this.limit=t,this.littleEndian=n,this.noAssert=l};t.VERSION="5.0.1",t.LITTLE_ENDIAN=!0,t.BIG_ENDIAN=!1,t.DEFAULT_CAPACITY=16,t.DEFAULT_ENDIAN=t.BIG_ENDIAN,t.DEFAULT_NOASSERT=!1,t.Long=e||null;var n=t.prototype;n.__isByteBuffer__,Object.defineProperty(n,"__isByteBuffer__",{value:!0,enumerable:!1,configurable:!1});var a=new ArrayBuffer(0),l=String.fromCharCode;function r(e){var t=0;return function(){return t<e.length?e.charCodeAt(t++):null}}function i(){var e=[],t=[];return function(){if(0===arguments.length)return t.join("")+l.apply(String,e);e.length+arguments.length>1024&&(t.push(l.apply(String,e)),e.length=0),Array.prototype.push.apply(e,arguments)}}function o(e,t,n,a,l){var r,i,o=8*l-a-1,s=(1<<o)-1,u=s>>1,c=-7,f=n?l-1:0,g=n?-1:1,v=e[t+f];for(f+=g,r=v&(1<<-c)-1,v>>=-c,c+=o;c>0;r=256*r+e[t+f],f+=g,c-=8);for(i=r&(1<<-c)-1,r>>=-c,c+=a;c>0;i=256*i+e[t+f],f+=g,c-=8);if(0===r)r=1-u;else{if(r===s)return i?NaN:1/0*(v?-1:1);i+=Math.pow(2,a),r-=u}return(v?-1:1)*i*Math.pow(2,r-a)}function s(e,t,n,a,l,r){var i,o,s,u=8*r-l-1,c=(1<<u)-1,f=c>>1,g=23===l?Math.pow(2,-24)-Math.pow(2,-77):0,v=a?0:r-1,b=a?1:-1,h=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(o=isNaN(t)?1:0,i=c):(i=Math.floor(Math.log(t)/Math.LN2),t*(s=Math.pow(2,-i))<1&&(i--,s*=2),t+=i+f>=1?g/s:g*Math.pow(2,1-f),t*s>=2&&(i++,s/=2),i+f>=c?(o=0,i=c):i+f>=1?(o=(t*s-1)*Math.pow(2,l),i+=f):(o=t*Math.pow(2,f-1)*Math.pow(2,l),i=0));l>=8;e[n+v]=255&o,v+=b,o/=256,l-=8);for(i=i<<l|o,u+=l;u>0;e[n+v]=255&i,v+=b,i/=256,u-=8);e[n+v-b]|=128*h}t.accessor=function(){return Uint8Array},t.allocate=function(e,n,a){return new t(e,n,a)},t.concat=function(e,n,a,l){"boolean"!==typeof n&&"string"===typeof n||(l=a,a=n,n=void 0);for(var r,i=0,o=0,s=e.length;o<s;++o)t.isByteBuffer(e[o])||(e[o]=t.wrap(e[o],n)),r=e[o].limit-e[o].offset,r>0&&(i+=r);if(0===i)return new t(0,a,l);var u,c=new t(i,a,l);o=0;while(o<s)u=e[o++],r=u.limit-u.offset,r<=0||(c.view.set(u.view.subarray(u.offset,u.limit),c.offset),c.offset+=r);return c.limit=c.offset,c.offset=0,c},t.isByteBuffer=function(e){return!0===(e&&e.__isByteBuffer__)},t.type=function(){return ArrayBuffer},t.wrap=function(e,a,l,r){if("string"!==typeof a&&(r=l,l=a,a=void 0),"string"===typeof e)switch("undefined"===typeof a&&(a="utf8"),a){case"base64":return t.fromBase64(e,l);case"hex":return t.fromHex(e,l);case"binary":return t.fromBinary(e,l);case"utf8":return t.fromUTF8(e,l);case"debug":return t.fromDebug(e,l);default:throw Error("Unsupported encoding: "+a)}if(null===e||"object"!==typeof e)throw TypeError("Illegal buffer");var i;if(t.isByteBuffer(e))return i=n.clone.call(e),i.markedOffset=-1,i;if(e instanceof Uint8Array)i=new t(0,l,r),e.length>0&&(i.buffer=e.buffer,i.offset=e.byteOffset,i.limit=e.byteOffset+e.byteLength,i.view=new Uint8Array(e.buffer));else if(e instanceof ArrayBuffer)i=new t(0,l,r),e.byteLength>0&&(i.buffer=e,i.offset=0,i.limit=e.byteLength,i.view=e.byteLength>0?new Uint8Array(e):null);else{if("[object Array]"!==Object.prototype.toString.call(e))throw TypeError("Illegal buffer");i=new t(e.length,l,r),i.limit=e.length;for(var o=0;o<e.length;++o)i.view[o]=e[o]}return i},n.writeBitSet=function(e,t){var n="undefined"===typeof t;if(n&&(t=this.offset),!this.noAssert){if(!(e instanceof Array))throw TypeError("Illegal BitSet: Not an array");if("number"!==typeof t||t%1!==0)throw TypeError("Illegal offset: "+t+" (not an integer)");if(t>>>=0,t<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}var a,l=t,r=e.length,i=r>>3,o=0;t+=this.writeVarint32(r,t);while(i--)a=1&!!e[o++]|(1&!!e[o++])<<1|(1&!!e[o++])<<2|(1&!!e[o++])<<3|(1&!!e[o++])<<4|(1&!!e[o++])<<5|(1&!!e[o++])<<6|(1&!!e[o++])<<7,this.writeByte(a,t++);if(o<r){var s=0;a=0;while(o<r)a|=(1&!!e[o++])<<s++;this.writeByte(a,t++)}return n?(this.offset=t,this):t-l},n.readBitSet=function(e){var t="undefined"===typeof e;t&&(e=this.offset);var n,a=this.readVarint32(e),l=a.value,r=l>>3,i=0,o=[];e+=a.length;while(r--)n=this.readByte(e++),o[i++]=!!(1&n),o[i++]=!!(2&n),o[i++]=!!(4&n),o[i++]=!!(8&n),o[i++]=!!(16&n),o[i++]=!!(32&n),o[i++]=!!(64&n),o[i++]=!!(128&n);if(i<l){var s=0;n=this.readByte(e++);while(i<l)o[i++]=!!(n>>s++&1)}return t&&(this.offset=e),o},n.readBytes=function(e,t){var n="undefined"===typeof t;if(n&&(t=this.offset),!this.noAssert){if("number"!==typeof t||t%1!==0)throw TypeError("Illegal offset: "+t+" (not an integer)");if(t>>>=0,t<0||t+e>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+"+e+") <= "+this.buffer.byteLength)}var a=this.slice(t,t+e);return n&&(this.offset+=e),a},n.writeBytes=n.append,n.writeInt8=function(e,t){var n="undefined"===typeof t;if(n&&(t=this.offset),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal value: "+e+" (not an integer)");if(e|=0,"number"!==typeof t||t%1!==0)throw TypeError("Illegal offset: "+t+" (not an integer)");if(t>>>=0,t<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}t+=1;var a=this.buffer.byteLength;return t>a&&this.resize((a*=2)>t?a:t),t-=1,this.view[t]=e,n&&(this.offset+=1),this},n.writeByte=n.writeInt8,n.readInt8=function(e){var t="undefined"===typeof e;if(t&&(e=this.offset),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal offset: "+e+" (not an integer)");if(e>>>=0,e<0||e+1>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+1) <= "+this.buffer.byteLength)}var n=this.view[e];return 128===(128&n)&&(n=-(255-n+1)),t&&(this.offset+=1),n},n.readByte=n.readInt8,n.writeUint8=function(e,t){var n="undefined"===typeof t;if(n&&(t=this.offset),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal value: "+e+" (not an integer)");if(e>>>=0,"number"!==typeof t||t%1!==0)throw TypeError("Illegal offset: "+t+" (not an integer)");if(t>>>=0,t<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}t+=1;var a=this.buffer.byteLength;return t>a&&this.resize((a*=2)>t?a:t),t-=1,this.view[t]=e,n&&(this.offset+=1),this},n.writeUInt8=n.writeUint8,n.readUint8=function(e){var t="undefined"===typeof e;if(t&&(e=this.offset),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal offset: "+e+" (not an integer)");if(e>>>=0,e<0||e+1>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+1) <= "+this.buffer.byteLength)}var n=this.view[e];return t&&(this.offset+=1),n},n.readUInt8=n.readUint8,n.writeInt16=function(e,t){var n="undefined"===typeof t;if(n&&(t=this.offset),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal value: "+e+" (not an integer)");if(e|=0,"number"!==typeof t||t%1!==0)throw TypeError("Illegal offset: "+t+" (not an integer)");if(t>>>=0,t<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}t+=2;var a=this.buffer.byteLength;return t>a&&this.resize((a*=2)>t?a:t),t-=2,this.littleEndian?(this.view[t+1]=(65280&e)>>>8,this.view[t]=255&e):(this.view[t]=(65280&e)>>>8,this.view[t+1]=255&e),n&&(this.offset+=2),this},n.writeShort=n.writeInt16,n.readInt16=function(e){var t="undefined"===typeof e;if(t&&(e=this.offset),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal offset: "+e+" (not an integer)");if(e>>>=0,e<0||e+2>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+2) <= "+this.buffer.byteLength)}var n=0;return this.littleEndian?(n=this.view[e],n|=this.view[e+1]<<8):(n=this.view[e]<<8,n|=this.view[e+1]),32768===(32768&n)&&(n=-(65535-n+1)),t&&(this.offset+=2),n},n.readShort=n.readInt16,n.writeUint16=function(e,t){var n="undefined"===typeof t;if(n&&(t=this.offset),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal value: "+e+" (not an integer)");if(e>>>=0,"number"!==typeof t||t%1!==0)throw TypeError("Illegal offset: "+t+" (not an integer)");if(t>>>=0,t<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}t+=2;var a=this.buffer.byteLength;return t>a&&this.resize((a*=2)>t?a:t),t-=2,this.littleEndian?(this.view[t+1]=(65280&e)>>>8,this.view[t]=255&e):(this.view[t]=(65280&e)>>>8,this.view[t+1]=255&e),n&&(this.offset+=2),this},n.writeUInt16=n.writeUint16,n.readUint16=function(e){var t="undefined"===typeof e;if(t&&(e=this.offset),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal offset: "+e+" (not an integer)");if(e>>>=0,e<0||e+2>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+2) <= "+this.buffer.byteLength)}var n=0;return this.littleEndian?(n=this.view[e],n|=this.view[e+1]<<8):(n=this.view[e]<<8,n|=this.view[e+1]),t&&(this.offset+=2),n},n.readUInt16=n.readUint16,n.writeInt32=function(e,t){var n="undefined"===typeof t;if(n&&(t=this.offset),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal value: "+e+" (not an integer)");if(e|=0,"number"!==typeof t||t%1!==0)throw TypeError("Illegal offset: "+t+" (not an integer)");if(t>>>=0,t<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}t+=4;var a=this.buffer.byteLength;return t>a&&this.resize((a*=2)>t?a:t),t-=4,this.littleEndian?(this.view[t+3]=e>>>24&255,this.view[t+2]=e>>>16&255,this.view[t+1]=e>>>8&255,this.view[t]=255&e):(this.view[t]=e>>>24&255,this.view[t+1]=e>>>16&255,this.view[t+2]=e>>>8&255,this.view[t+3]=255&e),n&&(this.offset+=4),this},n.writeInt=n.writeInt32,n.readInt32=function(e){var t="undefined"===typeof e;if(t&&(e=this.offset),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal offset: "+e+" (not an integer)");if(e>>>=0,e<0||e+4>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+4) <= "+this.buffer.byteLength)}var n=0;return this.littleEndian?(n=this.view[e+2]<<16,n|=this.view[e+1]<<8,n|=this.view[e],n+=this.view[e+3]<<24>>>0):(n=this.view[e+1]<<16,n|=this.view[e+2]<<8,n|=this.view[e+3],n+=this.view[e]<<24>>>0),n|=0,t&&(this.offset+=4),n},n.readInt=n.readInt32,n.writeUint32=function(e,t){var n="undefined"===typeof t;if(n&&(t=this.offset),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal value: "+e+" (not an integer)");if(e>>>=0,"number"!==typeof t||t%1!==0)throw TypeError("Illegal offset: "+t+" (not an integer)");if(t>>>=0,t<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}t+=4;var a=this.buffer.byteLength;return t>a&&this.resize((a*=2)>t?a:t),t-=4,this.littleEndian?(this.view[t+3]=e>>>24&255,this.view[t+2]=e>>>16&255,this.view[t+1]=e>>>8&255,this.view[t]=255&e):(this.view[t]=e>>>24&255,this.view[t+1]=e>>>16&255,this.view[t+2]=e>>>8&255,this.view[t+3]=255&e),n&&(this.offset+=4),this},n.writeUInt32=n.writeUint32,n.readUint32=function(e){var t="undefined"===typeof e;if(t&&(e=this.offset),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal offset: "+e+" (not an integer)");if(e>>>=0,e<0||e+4>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+4) <= "+this.buffer.byteLength)}var n=0;return this.littleEndian?(n=this.view[e+2]<<16,n|=this.view[e+1]<<8,n|=this.view[e],n+=this.view[e+3]<<24>>>0):(n=this.view[e+1]<<16,n|=this.view[e+2]<<8,n|=this.view[e+3],n+=this.view[e]<<24>>>0),t&&(this.offset+=4),n},n.readUInt32=n.readUint32,e&&(n.writeInt64=function(t,n){var a="undefined"===typeof n;if(a&&(n=this.offset),!this.noAssert){if("number"===typeof t)t=e.fromNumber(t);else if("string"===typeof t)t=e.fromString(t);else if(!(t&&t instanceof e))throw TypeError("Illegal value: "+t+" (not an integer or Long)");if("number"!==typeof n||n%1!==0)throw TypeError("Illegal offset: "+n+" (not an integer)");if(n>>>=0,n<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}"number"===typeof t?t=e.fromNumber(t):"string"===typeof t&&(t=e.fromString(t)),n+=8;var l=this.buffer.byteLength;n>l&&this.resize((l*=2)>n?l:n),n-=8;var r=t.low,i=t.high;return this.littleEndian?(this.view[n+3]=r>>>24&255,this.view[n+2]=r>>>16&255,this.view[n+1]=r>>>8&255,this.view[n]=255&r,n+=4,this.view[n+3]=i>>>24&255,this.view[n+2]=i>>>16&255,this.view[n+1]=i>>>8&255,this.view[n]=255&i):(this.view[n]=i>>>24&255,this.view[n+1]=i>>>16&255,this.view[n+2]=i>>>8&255,this.view[n+3]=255&i,n+=4,this.view[n]=r>>>24&255,this.view[n+1]=r>>>16&255,this.view[n+2]=r>>>8&255,this.view[n+3]=255&r),a&&(this.offset+=8),this},n.writeLong=n.writeInt64,n.readInt64=function(t){var n="undefined"===typeof t;if(n&&(t=this.offset),!this.noAssert){if("number"!==typeof t||t%1!==0)throw TypeError("Illegal offset: "+t+" (not an integer)");if(t>>>=0,t<0||t+8>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+8) <= "+this.buffer.byteLength)}var a=0,l=0;this.littleEndian?(a=this.view[t+2]<<16,a|=this.view[t+1]<<8,a|=this.view[t],a+=this.view[t+3]<<24>>>0,t+=4,l=this.view[t+2]<<16,l|=this.view[t+1]<<8,l|=this.view[t],l+=this.view[t+3]<<24>>>0):(l=this.view[t+1]<<16,l|=this.view[t+2]<<8,l|=this.view[t+3],l+=this.view[t]<<24>>>0,t+=4,a=this.view[t+1]<<16,a|=this.view[t+2]<<8,a|=this.view[t+3],a+=this.view[t]<<24>>>0);var r=new e(a,l,!1);return n&&(this.offset+=8),r},n.readLong=n.readInt64,n.writeUint64=function(t,n){var a="undefined"===typeof n;if(a&&(n=this.offset),!this.noAssert){if("number"===typeof t)t=e.fromNumber(t);else if("string"===typeof t)t=e.fromString(t);else if(!(t&&t instanceof e))throw TypeError("Illegal value: "+t+" (not an integer or Long)");if("number"!==typeof n||n%1!==0)throw TypeError("Illegal offset: "+n+" (not an integer)");if(n>>>=0,n<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}"number"===typeof t?t=e.fromNumber(t):"string"===typeof t&&(t=e.fromString(t)),n+=8;var l=this.buffer.byteLength;n>l&&this.resize((l*=2)>n?l:n),n-=8;var r=t.low,i=t.high;return this.littleEndian?(this.view[n+3]=r>>>24&255,this.view[n+2]=r>>>16&255,this.view[n+1]=r>>>8&255,this.view[n]=255&r,n+=4,this.view[n+3]=i>>>24&255,this.view[n+2]=i>>>16&255,this.view[n+1]=i>>>8&255,this.view[n]=255&i):(this.view[n]=i>>>24&255,this.view[n+1]=i>>>16&255,this.view[n+2]=i>>>8&255,this.view[n+3]=255&i,n+=4,this.view[n]=r>>>24&255,this.view[n+1]=r>>>16&255,this.view[n+2]=r>>>8&255,this.view[n+3]=255&r),a&&(this.offset+=8),this},n.writeUInt64=n.writeUint64,n.readUint64=function(t){var n="undefined"===typeof t;if(n&&(t=this.offset),!this.noAssert){if("number"!==typeof t||t%1!==0)throw TypeError("Illegal offset: "+t+" (not an integer)");if(t>>>=0,t<0||t+8>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+8) <= "+this.buffer.byteLength)}var a=0,l=0;this.littleEndian?(a=this.view[t+2]<<16,a|=this.view[t+1]<<8,a|=this.view[t],a+=this.view[t+3]<<24>>>0,t+=4,l=this.view[t+2]<<16,l|=this.view[t+1]<<8,l|=this.view[t],l+=this.view[t+3]<<24>>>0):(l=this.view[t+1]<<16,l|=this.view[t+2]<<8,l|=this.view[t+3],l+=this.view[t]<<24>>>0,t+=4,a=this.view[t+1]<<16,a|=this.view[t+2]<<8,a|=this.view[t+3],a+=this.view[t]<<24>>>0);var r=new e(a,l,!0);return n&&(this.offset+=8),r},n.readUInt64=n.readUint64),n.writeFloat32=function(e,t){var n="undefined"===typeof t;if(n&&(t=this.offset),!this.noAssert){if("number"!==typeof e)throw TypeError("Illegal value: "+e+" (not a number)");if("number"!==typeof t||t%1!==0)throw TypeError("Illegal offset: "+t+" (not an integer)");if(t>>>=0,t<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}t+=4;var a=this.buffer.byteLength;return t>a&&this.resize((a*=2)>t?a:t),t-=4,s(this.view,e,t,this.littleEndian,23,4),n&&(this.offset+=4),this},n.writeFloat=n.writeFloat32,n.readFloat32=function(e){var t="undefined"===typeof e;if(t&&(e=this.offset),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal offset: "+e+" (not an integer)");if(e>>>=0,e<0||e+4>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+4) <= "+this.buffer.byteLength)}var n=o(this.view,e,this.littleEndian,23,4);return t&&(this.offset+=4),n},n.readFloat=n.readFloat32,n.writeFloat64=function(e,t){var n="undefined"===typeof t;if(n&&(t=this.offset),!this.noAssert){if("number"!==typeof e)throw TypeError("Illegal value: "+e+" (not a number)");if("number"!==typeof t||t%1!==0)throw TypeError("Illegal offset: "+t+" (not an integer)");if(t>>>=0,t<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}t+=8;var a=this.buffer.byteLength;return t>a&&this.resize((a*=2)>t?a:t),t-=8,s(this.view,e,t,this.littleEndian,52,8),n&&(this.offset+=8),this},n.writeDouble=n.writeFloat64,n.readFloat64=function(e){var t="undefined"===typeof e;if(t&&(e=this.offset),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal offset: "+e+" (not an integer)");if(e>>>=0,e<0||e+8>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+8) <= "+this.buffer.byteLength)}var n=o(this.view,e,this.littleEndian,52,8);return t&&(this.offset+=8),n},n.readDouble=n.readFloat64,t.MAX_VARINT32_BYTES=5,t.calculateVarint32=function(e){return e>>>=0,e<128?1:e<16384?2:e<1<<21?3:e<1<<28?4:5},t.zigZagEncode32=function(e){return((e|=0)<<1^e>>31)>>>0},t.zigZagDecode32=function(e){return e>>>1^-(1&e)|0},n.writeVarint32=function(e,n){var a="undefined"===typeof n;if(a&&(n=this.offset),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal value: "+e+" (not an integer)");if(e|=0,"number"!==typeof n||n%1!==0)throw TypeError("Illegal offset: "+n+" (not an integer)");if(n>>>=0,n<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}var l,r=t.calculateVarint32(e);n+=r;var i=this.buffer.byteLength;n>i&&this.resize((i*=2)>n?i:n),n-=r,e>>>=0;while(e>=128)l=127&e|128,this.view[n++]=l,e>>>=7;return this.view[n++]=e,a?(this.offset=n,this):r},n.writeVarint32ZigZag=function(e,n){return this.writeVarint32(t.zigZagEncode32(e),n)},n.readVarint32=function(e){var t="undefined"===typeof e;if(t&&(e=this.offset),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal offset: "+e+" (not an integer)");if(e>>>=0,e<0||e+1>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+1) <= "+this.buffer.byteLength)}var n,a=0,l=0;do{if(!this.noAssert&&e>this.limit){var r=Error("Truncated");throw r.truncated=!0,r}n=this.view[e++],a<5&&(l|=(127&n)<<7*a),++a}while(0!==(128&n));return l|=0,t?(this.offset=e,l):{value:l,length:a}},n.readVarint32ZigZag=function(e){var n=this.readVarint32(e);return"object"===typeof n?n.value=t.zigZagDecode32(n.value):n=t.zigZagDecode32(n),n},e&&(t.MAX_VARINT64_BYTES=10,t.calculateVarint64=function(t){"number"===typeof t?t=e.fromNumber(t):"string"===typeof t&&(t=e.fromString(t));var n=t.toInt()>>>0,a=t.shiftRightUnsigned(28).toInt()>>>0,l=t.shiftRightUnsigned(56).toInt()>>>0;return 0==l?0==a?n<16384?n<128?1:2:n<1<<21?3:4:a<16384?a<128?5:6:a<1<<21?7:8:l<128?9:10},t.zigZagEncode64=function(t){return"number"===typeof t?t=e.fromNumber(t,!1):"string"===typeof t?t=e.fromString(t,!1):!1!==t.unsigned&&(t=t.toSigned()),t.shiftLeft(1).xor(t.shiftRight(63)).toUnsigned()},t.zigZagDecode64=function(t){return"number"===typeof t?t=e.fromNumber(t,!1):"string"===typeof t?t=e.fromString(t,!1):!1!==t.unsigned&&(t=t.toSigned()),t.shiftRightUnsigned(1).xor(t.and(e.ONE).toSigned().negate()).toSigned()},n.writeVarint64=function(n,a){var l="undefined"===typeof a;if(l&&(a=this.offset),!this.noAssert){if("number"===typeof n)n=e.fromNumber(n);else if("string"===typeof n)n=e.fromString(n);else if(!(n&&n instanceof e))throw TypeError("Illegal value: "+n+" (not an integer or Long)");if("number"!==typeof a||a%1!==0)throw TypeError("Illegal offset: "+a+" (not an integer)");if(a>>>=0,a<0||a+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+a+" (+0) <= "+this.buffer.byteLength)}"number"===typeof n?n=e.fromNumber(n,!1):"string"===typeof n?n=e.fromString(n,!1):!1!==n.unsigned&&(n=n.toSigned());var r=t.calculateVarint64(n),i=n.toInt()>>>0,o=n.shiftRightUnsigned(28).toInt()>>>0,s=n.shiftRightUnsigned(56).toInt()>>>0;a+=r;var u=this.buffer.byteLength;switch(a>u&&this.resize((u*=2)>a?u:a),a-=r,r){case 10:this.view[a+9]=s>>>7&1;case 9:this.view[a+8]=9!==r?128|s:127&s;case 8:this.view[a+7]=8!==r?o>>>21|128:o>>>21&127;case 7:this.view[a+6]=7!==r?o>>>14|128:o>>>14&127;case 6:this.view[a+5]=6!==r?o>>>7|128:o>>>7&127;case 5:this.view[a+4]=5!==r?128|o:127&o;case 4:this.view[a+3]=4!==r?i>>>21|128:i>>>21&127;case 3:this.view[a+2]=3!==r?i>>>14|128:i>>>14&127;case 2:this.view[a+1]=2!==r?i>>>7|128:i>>>7&127;case 1:this.view[a]=1!==r?128|i:127&i}return l?(this.offset+=r,this):r},n.writeVarint64ZigZag=function(e,n){return this.writeVarint64(t.zigZagEncode64(e),n)},n.readVarint64=function(t){var n="undefined"===typeof t;if(n&&(t=this.offset),!this.noAssert){if("number"!==typeof t||t%1!==0)throw TypeError("Illegal offset: "+t+" (not an integer)");if(t>>>=0,t<0||t+1>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+1) <= "+this.buffer.byteLength)}var a=t,l=0,r=0,i=0,o=0;if(o=this.view[t++],l=127&o,128&o&&(o=this.view[t++],l|=(127&o)<<7,(128&o||this.noAssert&&"undefined"===typeof o)&&(o=this.view[t++],l|=(127&o)<<14,(128&o||this.noAssert&&"undefined"===typeof o)&&(o=this.view[t++],l|=(127&o)<<21,(128&o||this.noAssert&&"undefined"===typeof o)&&(o=this.view[t++],r=127&o,(128&o||this.noAssert&&"undefined"===typeof o)&&(o=this.view[t++],r|=(127&o)<<7,(128&o||this.noAssert&&"undefined"===typeof o)&&(o=this.view[t++],r|=(127&o)<<14,(128&o||this.noAssert&&"undefined"===typeof o)&&(o=this.view[t++],r|=(127&o)<<21,(128&o||this.noAssert&&"undefined"===typeof o)&&(o=this.view[t++],i=127&o,(128&o||this.noAssert&&"undefined"===typeof o)&&(o=this.view[t++],i|=(127&o)<<7,128&o||this.noAssert&&"undefined"===typeof o))))))))))throw Error("Buffer overrun");var s=e.fromBits(l|r<<28,r>>>4|i<<24,!1);return n?(this.offset=t,s):{value:s,length:t-a}},n.readVarint64ZigZag=function(n){var a=this.readVarint64(n);return a&&a.value instanceof e?a.value=t.zigZagDecode64(a.value):a=t.zigZagDecode64(a),a}),n.writeCString=function(e,t){var n="undefined"===typeof t;n&&(t=this.offset);var a,l=e.length;if(!this.noAssert){if("string"!==typeof e)throw TypeError("Illegal str: Not a string");for(a=0;a<l;++a)if(0===e.charCodeAt(a))throw RangeError("Illegal str: Contains NULL-characters");if("number"!==typeof t||t%1!==0)throw TypeError("Illegal offset: "+t+" (not an integer)");if(t>>>=0,t<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}l=c.calculateUTF16asUTF8(r(e))[1],t+=l+1;var i=this.buffer.byteLength;return t>i&&this.resize((i*=2)>t?i:t),t-=l+1,c.encodeUTF16toUTF8(r(e),function(e){this.view[t++]=e}.bind(this)),this.view[t++]=0,n?(this.offset=t,this):l},n.readCString=function(e){var t="undefined"===typeof e;if(t&&(e=this.offset),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal offset: "+e+" (not an integer)");if(e>>>=0,e<0||e+1>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+1) <= "+this.buffer.byteLength)}var n,a=e,l=-1;return c.decodeUTF8toUTF16(function(){if(0===l)return null;if(e>=this.limit)throw RangeError("Illegal range: Truncated data, "+e+" < "+this.limit);return l=this.view[e++],0===l?null:l}.bind(this),n=i(),!0),t?(this.offset=e,n()):{string:n(),length:e-a}},n.writeIString=function(e,t){var n="undefined"===typeof t;if(n&&(t=this.offset),!this.noAssert){if("string"!==typeof e)throw TypeError("Illegal str: Not a string");if("number"!==typeof t||t%1!==0)throw TypeError("Illegal offset: "+t+" (not an integer)");if(t>>>=0,t<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}var a,l=t;a=c.calculateUTF16asUTF8(r(e),this.noAssert)[1],t+=4+a;var i=this.buffer.byteLength;if(t>i&&this.resize((i*=2)>t?i:t),t-=4+a,this.littleEndian?(this.view[t+3]=a>>>24&255,this.view[t+2]=a>>>16&255,this.view[t+1]=a>>>8&255,this.view[t]=255&a):(this.view[t]=a>>>24&255,this.view[t+1]=a>>>16&255,this.view[t+2]=a>>>8&255,this.view[t+3]=255&a),t+=4,c.encodeUTF16toUTF8(r(e),function(e){this.view[t++]=e}.bind(this)),t!==l+4+a)throw RangeError("Illegal range: Truncated data, "+t+" == "+(t+4+a));return n?(this.offset=t,this):t-l},n.readIString=function(e){var n="undefined"===typeof e;if(n&&(e=this.offset),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal offset: "+e+" (not an integer)");if(e>>>=0,e<0||e+4>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+4) <= "+this.buffer.byteLength)}var a=e,l=this.readUint32(e),r=this.readUTF8String(l,t.METRICS_BYTES,e+=4);return e+=r.length,n?(this.offset=e,r.string):{string:r.string,length:e-a}},t.METRICS_CHARS="c",t.METRICS_BYTES="b",n.writeUTF8String=function(e,t){var n,a="undefined"===typeof t;if(a&&(t=this.offset),!this.noAssert){if("number"!==typeof t||t%1!==0)throw TypeError("Illegal offset: "+t+" (not an integer)");if(t>>>=0,t<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}var l=t;n=c.calculateUTF16asUTF8(r(e))[1],t+=n;var i=this.buffer.byteLength;return t>i&&this.resize((i*=2)>t?i:t),t-=n,c.encodeUTF16toUTF8(r(e),function(e){this.view[t++]=e}.bind(this)),a?(this.offset=t,this):t-l},n.writeString=n.writeUTF8String,t.calculateUTF8Chars=function(e){return c.calculateUTF16asUTF8(r(e))[0]},t.calculateUTF8Bytes=function(e){return c.calculateUTF16asUTF8(r(e))[1]},t.calculateString=t.calculateUTF8Bytes,n.readUTF8String=function(e,n,a){"number"===typeof n&&(a=n,n=void 0);var l="undefined"===typeof a;if(l&&(a=this.offset),"undefined"===typeof n&&(n=t.METRICS_CHARS),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal length: "+e+" (not an integer)");if(e|=0,"number"!==typeof a||a%1!==0)throw TypeError("Illegal offset: "+a+" (not an integer)");if(a>>>=0,a<0||a+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+a+" (+0) <= "+this.buffer.byteLength)}var r,o=0,s=a;if(n===t.METRICS_CHARS){if(r=i(),c.decodeUTF8(function(){return o<e&&a<this.limit?this.view[a++]:null}.bind(this),function(e){++o,c.UTF8toUTF16(e,r)}),o!==e)throw RangeError("Illegal range: Truncated data, "+o+" == "+e);return l?(this.offset=a,r()):{string:r(),length:a-s}}if(n===t.METRICS_BYTES){if(!this.noAssert){if("number"!==typeof a||a%1!==0)throw TypeError("Illegal offset: "+a+" (not an integer)");if(a>>>=0,a<0||a+e>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+a+" (+"+e+") <= "+this.buffer.byteLength)}var u=a+e;if(c.decodeUTF8toUTF16(function(){return a<u?this.view[a++]:null}.bind(this),r=i(),this.noAssert),a!==u)throw RangeError("Illegal range: Truncated data, "+a+" == "+u);return l?(this.offset=a,r()):{string:r(),length:a-s}}throw TypeError("Unsupported metrics: "+n)},n.readString=n.readUTF8String,n.writeVString=function(e,n){var a="undefined"===typeof n;if(a&&(n=this.offset),!this.noAssert){if("string"!==typeof e)throw TypeError("Illegal str: Not a string");if("number"!==typeof n||n%1!==0)throw TypeError("Illegal offset: "+n+" (not an integer)");if(n>>>=0,n<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}var l,i,o=n;l=c.calculateUTF16asUTF8(r(e),this.noAssert)[1],i=t.calculateVarint32(l),n+=i+l;var s=this.buffer.byteLength;if(n>s&&this.resize((s*=2)>n?s:n),n-=i+l,n+=this.writeVarint32(l,n),c.encodeUTF16toUTF8(r(e),function(e){this.view[n++]=e}.bind(this)),n!==o+l+i)throw RangeError("Illegal range: Truncated data, "+n+" == "+(n+l+i));return a?(this.offset=n,this):n-o},n.readVString=function(e){var n="undefined"===typeof e;if(n&&(e=this.offset),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal offset: "+e+" (not an integer)");if(e>>>=0,e<0||e+1>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+1) <= "+this.buffer.byteLength)}var a=e,l=this.readVarint32(e),r=this.readUTF8String(l.value,t.METRICS_BYTES,e+=l.length);return e+=r.length,n?(this.offset=e,r.string):{string:r.string,length:e-a}},n.append=function(e,n,a){"number"!==typeof n&&"string"===typeof n||(a=n,n=void 0);var l="undefined"===typeof a;if(l&&(a=this.offset),!this.noAssert){if("number"!==typeof a||a%1!==0)throw TypeError("Illegal offset: "+a+" (not an integer)");if(a>>>=0,a<0||a+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+a+" (+0) <= "+this.buffer.byteLength)}e instanceof t||(e=t.wrap(e,n));var r=e.limit-e.offset;if(r<=0)return this;a+=r;var i=this.buffer.byteLength;return a>i&&this.resize((i*=2)>a?i:a),a-=r,this.view.set(e.view.subarray(e.offset,e.limit),a),e.offset+=r,l&&(this.offset+=r),this},n.appendTo=function(e,t){return e.append(this,t),this},n.assert=function(e){return this.noAssert=!e,this},n.capacity=function(){return this.buffer.byteLength},n.clear=function(){return this.offset=0,this.limit=this.buffer.byteLength,this.markedOffset=-1,this},n.clone=function(e){var n=new t(0,this.littleEndian,this.noAssert);return e?(n.buffer=new ArrayBuffer(this.buffer.byteLength),n.view=new Uint8Array(n.buffer)):(n.buffer=this.buffer,n.view=this.view),n.offset=this.offset,n.markedOffset=this.markedOffset,n.limit=this.limit,n},n.compact=function(e,t){if("undefined"===typeof e&&(e=this.offset),"undefined"===typeof t&&(t=this.limit),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal begin: Not an integer");if(e>>>=0,"number"!==typeof t||t%1!==0)throw TypeError("Illegal end: Not an integer");if(t>>>=0,e<0||e>t||t>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+e+" <= "+t+" <= "+this.buffer.byteLength)}if(0===e&&t===this.buffer.byteLength)return this;var n=t-e;if(0===n)return this.buffer=a,this.view=null,this.markedOffset>=0&&(this.markedOffset-=e),this.offset=0,this.limit=0,this;var l=new ArrayBuffer(n),r=new Uint8Array(l);return r.set(this.view.subarray(e,t)),this.buffer=l,this.view=r,this.markedOffset>=0&&(this.markedOffset-=e),this.offset=0,this.limit=n,this},n.copy=function(e,n){if("undefined"===typeof e&&(e=this.offset),"undefined"===typeof n&&(n=this.limit),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal begin: Not an integer");if(e>>>=0,"number"!==typeof n||n%1!==0)throw TypeError("Illegal end: Not an integer");if(n>>>=0,e<0||e>n||n>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+e+" <= "+n+" <= "+this.buffer.byteLength)}if(e===n)return new t(0,this.littleEndian,this.noAssert);var a=n-e,l=new t(a,this.littleEndian,this.noAssert);return l.offset=0,l.limit=a,l.markedOffset>=0&&(l.markedOffset-=e),this.copyTo(l,0,e,n),l},n.copyTo=function(e,n,a,l){var r,i;if(!this.noAssert&&!t.isByteBuffer(e))throw TypeError("Illegal target: Not a ByteBuffer");if(n=(i="undefined"===typeof n)?e.offset:0|n,a=(r="undefined"===typeof a)?this.offset:0|a,l="undefined"===typeof l?this.limit:0|l,n<0||n>e.buffer.byteLength)throw RangeError("Illegal target range: 0 <= "+n+" <= "+e.buffer.byteLength);if(a<0||l>this.buffer.byteLength)throw RangeError("Illegal source range: 0 <= "+a+" <= "+this.buffer.byteLength);var o=l-a;return 0===o?e:(e.ensureCapacity(n+o),e.view.set(this.view.subarray(a,l),n),r&&(this.offset+=o),i&&(e.offset+=o),this)},n.ensureCapacity=function(e){var t=this.buffer.byteLength;return t<e?this.resize((t*=2)>e?t:e):this},n.fill=function(e,t,n){var a="undefined"===typeof t;if(a&&(t=this.offset),"string"===typeof e&&e.length>0&&(e=e.charCodeAt(0)),"undefined"===typeof t&&(t=this.offset),"undefined"===typeof n&&(n=this.limit),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal value: "+e+" (not an integer)");if(e|=0,"number"!==typeof t||t%1!==0)throw TypeError("Illegal begin: Not an integer");if(t>>>=0,"number"!==typeof n||n%1!==0)throw TypeError("Illegal end: Not an integer");if(n>>>=0,t<0||t>n||n>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+t+" <= "+n+" <= "+this.buffer.byteLength)}if(t>=n)return this;while(t<n)this.view[t++]=e;return a&&(this.offset=t),this},n.flip=function(){return this.limit=this.offset,this.offset=0,this},n.mark=function(e){if(e="undefined"===typeof e?this.offset:e,!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal offset: "+e+" (not an integer)");if(e>>>=0,e<0||e+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+0) <= "+this.buffer.byteLength)}return this.markedOffset=e,this},n.order=function(e){if(!this.noAssert&&"boolean"!==typeof e)throw TypeError("Illegal littleEndian: Not a boolean");return this.littleEndian=!!e,this},n.LE=function(e){return this.littleEndian="undefined"===typeof e||!!e,this},n.BE=function(e){return this.littleEndian="undefined"!==typeof e&&!e,this},n.prepend=function(e,n,a){"number"!==typeof n&&"string"===typeof n||(a=n,n=void 0);var l="undefined"===typeof a;if(l&&(a=this.offset),!this.noAssert){if("number"!==typeof a||a%1!==0)throw TypeError("Illegal offset: "+a+" (not an integer)");if(a>>>=0,a<0||a+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+a+" (+0) <= "+this.buffer.byteLength)}e instanceof t||(e=t.wrap(e,n));var r=e.limit-e.offset;if(r<=0)return this;var i=r-a;if(i>0){var o=new ArrayBuffer(this.buffer.byteLength+i),s=new Uint8Array(o);s.set(this.view.subarray(a,this.buffer.byteLength),r),this.buffer=o,this.view=s,this.offset+=i,this.markedOffset>=0&&(this.markedOffset+=i),this.limit+=i,a+=i}else new Uint8Array(this.buffer);return this.view.set(e.view.subarray(e.offset,e.limit),a-r),e.offset=e.limit,l&&(this.offset-=r),this},n.prependTo=function(e,t){return e.prepend(this,t),this},n.printDebug=function(e){"function"!==typeof e&&(e=console.log.bind(console)),e(this.toString()+"\n-------------------------------------------------------------------\n"+this.toDebug(!0))},n.remaining=function(){return this.limit-this.offset},n.reset=function(){return this.markedOffset>=0?(this.offset=this.markedOffset,this.markedOffset=-1):this.offset=0,this},n.resize=function(e){if(!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal capacity: "+e+" (not an integer)");if(e|=0,e<0)throw RangeError("Illegal capacity: 0 <= "+e)}if(this.buffer.byteLength<e){var t=new ArrayBuffer(e),n=new Uint8Array(t);n.set(this.view),this.buffer=t,this.view=n}return this},n.reverse=function(e,t){if("undefined"===typeof e&&(e=this.offset),"undefined"===typeof t&&(t=this.limit),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal begin: Not an integer");if(e>>>=0,"number"!==typeof t||t%1!==0)throw TypeError("Illegal end: Not an integer");if(t>>>=0,e<0||e>t||t>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+e+" <= "+t+" <= "+this.buffer.byteLength)}return e===t?this:(Array.prototype.reverse.call(this.view.subarray(e,t)),this)},n.skip=function(e){if(!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal length: "+e+" (not an integer)");e|=0}var t=this.offset+e;if(!this.noAssert&&(t<0||t>this.buffer.byteLength))throw RangeError("Illegal length: 0 <= "+this.offset+" + "+e+" <= "+this.buffer.byteLength);return this.offset=t,this},n.slice=function(e,t){if("undefined"===typeof e&&(e=this.offset),"undefined"===typeof t&&(t=this.limit),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal begin: Not an integer");if(e>>>=0,"number"!==typeof t||t%1!==0)throw TypeError("Illegal end: Not an integer");if(t>>>=0,e<0||e>t||t>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+e+" <= "+t+" <= "+this.buffer.byteLength)}var n=this.clone();return n.offset=e,n.limit=t,n},n.toBuffer=function(e){var t=this.offset,n=this.limit;if(!this.noAssert){if("number"!==typeof t||t%1!==0)throw TypeError("Illegal offset: Not an integer");if(t>>>=0,"number"!==typeof n||n%1!==0)throw TypeError("Illegal limit: Not an integer");if(n>>>=0,t<0||t>n||n>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+t+" <= "+n+" <= "+this.buffer.byteLength)}if(!e&&0===t&&n===this.buffer.byteLength)return this.buffer;if(t===n)return a;var l=new ArrayBuffer(n-t);return new Uint8Array(l).set(new Uint8Array(this.buffer).subarray(t,n),0),l},n.toArrayBuffer=n.toBuffer,n.toString=function(e,t,n){if("undefined"===typeof e)return"ByteBufferAB(offset="+this.offset+",markedOffset="+this.markedOffset+",limit="+this.limit+",capacity="+this.capacity()+")";switch("number"===typeof e&&(e="utf8",t=e,n=t),e){case"utf8":return this.toUTF8(t,n);case"base64":return this.toBase64(t,n);case"hex":return this.toHex(t,n);case"binary":return this.toBinary(t,n);case"debug":return this.toDebug();case"columns":return this.toColumns();default:throw Error("Unsupported encoding: "+e)}};var u=function(){for(var e={},t=[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,48,49,50,51,52,53,54,55,56,57,43,47],n=[],a=0,l=t.length;a<l;++a)n[t[a]]=a;return e.encode=function(e,n){var a,l;while(null!==(a=e()))n(t[a>>2&63]),l=(3&a)<<4,null!==(a=e())?(l|=a>>4&15,n(t[63&(l|a>>4&15)]),l=(15&a)<<2,null!==(a=e())?(n(t[63&(l|a>>6&3)]),n(t[63&a])):(n(t[63&l]),n(61))):(n(t[63&l]),n(61),n(61))},e.decode=function(e,t){var a,l,r;function i(e){throw Error("Illegal character code: "+e)}while(null!==(a=e()))if(l=n[a],"undefined"===typeof l&&i(a),null!==(a=e())&&(r=n[a],"undefined"===typeof r&&i(a),t(l<<2>>>0|(48&r)>>4),null!==(a=e()))){if(l=n[a],"undefined"===typeof l){if(61===a)break;i(a)}if(t((15&r)<<4>>>0|(60&l)>>2),null!==(a=e())){if(r=n[a],"undefined"===typeof r){if(61===a)break;i(a)}t((3&l)<<6>>>0|r)}}},e.test=function(e){return/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e)},e}();n.toBase64=function(e,t){if("undefined"===typeof e&&(e=this.offset),"undefined"===typeof t&&(t=this.limit),e|=0,t|=0,e<0||t>this.capacity||e>t)throw RangeError("begin, end");var n;return u.encode(function(){return e<t?this.view[e++]:null}.bind(this),n=i()),n()},t.fromBase64=function(e,n){if("string"!==typeof e)throw TypeError("str");var a=new t(e.length/4*3,n),l=0;return u.decode(r(e),function(e){a.view[l++]=e}),a.limit=l,a},t.btoa=function(e){return t.fromBinary(e).toBase64()},t.atob=function(e){return t.fromBase64(e).toBinary()},n.toBinary=function(e,t){if("undefined"===typeof e&&(e=this.offset),"undefined"===typeof t&&(t=this.limit),e|=0,t|=0,e<0||t>this.capacity()||e>t)throw RangeError("begin, end");if(e===t)return"";var n=[],a=[];while(e<t)n.push(this.view[e++]),n.length>=1024&&(a.push(String.fromCharCode.apply(String,n)),n=[]);return a.join("")+String.fromCharCode.apply(String,n)},t.fromBinary=function(e,n){if("string"!==typeof e)throw TypeError("str");var a,l=0,r=e.length,i=new t(r,n);while(l<r){if(a=e.charCodeAt(l),a>255)throw RangeError("illegal char code: "+a);i.view[l++]=a}return i.limit=r,i},n.toDebug=function(e){var t,n=-1,a=this.buffer.byteLength,l="",r="",i="";while(n<a){if(-1!==n&&(t=this.view[n],l+=t<16?"0"+t.toString(16).toUpperCase():t.toString(16).toUpperCase(),e&&(r+=t>32&&t<127?String.fromCharCode(t):".")),++n,e&&n>0&&n%16===0&&n!==a){while(l.length<51)l+=" ";i+=l+r+"\n",l=r=""}n===this.offset&&n===this.limit?l+=n===this.markedOffset?"!":"|":n===this.offset?l+=n===this.markedOffset?"[":"<":n===this.limit?l+=n===this.markedOffset?"]":">":l+=n===this.markedOffset?"'":e||0!==n&&n!==a?" ":""}if(e&&" "!==l){while(l.length<51)l+=" ";i+=l+r+"\n"}return e?i:l},t.fromDebug=function(e,n,a){var l,r,i=e.length,o=new t((i+1)/3|0,n,a),s=0,u=0,c=!1,f=!1,g=!1,v=!1,b=!1;while(s<i){switch(l=e.charAt(s++)){case"!":if(!a){if(f||g||v){b=!0;break}f=g=v=!0}o.offset=o.markedOffset=o.limit=u,c=!1;break;case"|":if(!a){if(f||v){b=!0;break}f=v=!0}o.offset=o.limit=u,c=!1;break;case"[":if(!a){if(f||g){b=!0;break}f=g=!0}o.offset=o.markedOffset=u,c=!1;break;case"<":if(!a){if(f){b=!0;break}f=!0}o.offset=u,c=!1;break;case"]":if(!a){if(v||g){b=!0;break}v=g=!0}o.limit=o.markedOffset=u,c=!1;break;case">":if(!a){if(v){b=!0;break}v=!0}o.limit=u,c=!1;break;case"'":if(!a){if(g){b=!0;break}g=!0}o.markedOffset=u,c=!1;break;case" ":c=!1;break;default:if(!a&&c){b=!0;break}if(r=parseInt(l+e.charAt(s++),16),!a&&(isNaN(r)||r<0||r>255))throw TypeError("Illegal str: Not a debug encoded string");o.view[u++]=r,c=!0}if(b)throw TypeError("Illegal str: Invalid symbol at "+s)}if(!a){if(!f||!v)throw TypeError("Illegal str: Missing offset or limit");if(u<o.buffer.byteLength)throw TypeError("Illegal str: Not a debug encoded string (is it hex?) "+u+" < "+i)}return o},n.toHex=function(e,t){if(e="undefined"===typeof e?this.offset:e,t="undefined"===typeof t?this.limit:t,!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal begin: Not an integer");if(e>>>=0,"number"!==typeof t||t%1!==0)throw TypeError("Illegal end: Not an integer");if(t>>>=0,e<0||e>t||t>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+e+" <= "+t+" <= "+this.buffer.byteLength)}var n,a=new Array(t-e);while(e<t)n=this.view[e++],n<16?a.push("0",n.toString(16)):a.push(n.toString(16));return a.join("")},t.fromHex=function(e,n,a){if(!a){if("string"!==typeof e)throw TypeError("Illegal str: Not a string");if(e.length%2!==0)throw TypeError("Illegal str: Length not a multiple of 2")}for(var l,r=e.length,i=new t(r/2|0,n),o=0,s=0;o<r;o+=2){if(l=parseInt(e.substring(o,o+2),16),!a&&(!isFinite(l)||l<0||l>255))throw TypeError("Illegal str: Contains non-hex characters");i.view[s++]=l}return i.limit=s,i};var c=function(){var e={MAX_CODEPOINT:1114111,encodeUTF8:function(e,t){var n=null;"number"===typeof e&&(n=e,e=function(){return null});while(null!==n||null!==(n=e()))n<128?t(127&n):n<2048?(t(n>>6&31|192),t(63&n|128)):n<65536?(t(n>>12&15|224),t(n>>6&63|128),t(63&n|128)):(t(n>>18&7|240),t(n>>12&63|128),t(n>>6&63|128),t(63&n|128)),n=null},decodeUTF8:function(e,t){var n,a,l,r,i=function(e){e=e.slice(0,e.indexOf(null));var t=Error(e.toString());throw t.name="TruncatedError",t.bytes=e,t};while(null!==(n=e()))if(0===(128&n))t(n);else if(192===(224&n))null===(a=e())&&i([n,a]),t((31&n)<<6|63&a);else if(224===(240&n))(null===(a=e())||null===(l=e()))&&i([n,a,l]),t((15&n)<<12|(63&a)<<6|63&l);else{if(240!==(248&n))throw RangeError("Illegal starting byte: "+n);(null===(a=e())||null===(l=e())||null===(r=e()))&&i([n,a,l,r]),t((7&n)<<18|(63&a)<<12|(63&l)<<6|63&r)}},UTF16toUTF8:function(e,t){var n,a=null;while(1){if(null===(n=null!==a?a:e()))break;n>=55296&&n<=57343&&null!==(a=e())&&a>=56320&&a<=57343?(t(1024*(n-55296)+a-56320+65536),a=null):t(n)}null!==a&&t(a)},UTF8toUTF16:function(e,t){var n=null;"number"===typeof e&&(n=e,e=function(){return null});while(null!==n||null!==(n=e()))n<=65535?t(n):(n-=65536,t(55296+(n>>10)),t(n%1024+56320)),n=null},encodeUTF16toUTF8:function(t,n){e.UTF16toUTF8(t,function(t){e.encodeUTF8(t,n)})},decodeUTF8toUTF16:function(t,n){e.decodeUTF8(t,function(t){e.UTF8toUTF16(t,n)})},calculateCodePoint:function(e){return e<128?1:e<2048?2:e<65536?3:4},calculateUTF8:function(e){var t,n=0;while(null!==(t=e()))n+=t<128?1:t<2048?2:t<65536?3:4;return n},calculateUTF16asUTF8:function(t){var n=0,a=0;return e.UTF16toUTF8(t,function(e){++n,a+=e<128?1:e<2048?2:e<65536?3:4}),[n,a]}};return e}();return n.toUTF8=function(e,t){if("undefined"===typeof e&&(e=this.offset),"undefined"===typeof t&&(t=this.limit),!this.noAssert){if("number"!==typeof e||e%1!==0)throw TypeError("Illegal begin: Not an integer");if(e>>>=0,"number"!==typeof t||t%1!==0)throw TypeError("Illegal end: Not an integer");if(t>>>=0,e<0||e>t||t>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+e+" <= "+t+" <= "+this.buffer.byteLength)}var n;try{c.decodeUTF8toUTF16(function(){return e<t?this.view[e++]:null}.bind(this),n=i())}catch(a){if(e!==t)throw RangeError("Illegal range: Truncated data, "+e+" != "+t)}return n()},t.fromUTF8=function(e,n,a){if(!a&&"string"!==typeof e)throw TypeError("Illegal str: Not a string");var l=new t(c.calculateUTF16asUTF8(r(e),!0)[1],n,a),i=0;return c.encodeUTF16toUTF8(r(e),function(e){l.view[i++]=e}),l.limit=i,l},t}(t),l=function(e,t,n){var l={};l.ByteBuffer=e,l.c=e;var r=e;l.Long=t||null,l.VERSION="5.0.1",l.WIRE_TYPES={},l.WIRE_TYPES.VARINT=0,l.WIRE_TYPES.BITS64=1,l.WIRE_TYPES.LDELIM=2,l.WIRE_TYPES.STARTGROUP=3,l.WIRE_TYPES.ENDGROUP=4,l.WIRE_TYPES.BITS32=5,l.PACKABLE_WIRE_TYPES=[l.WIRE_TYPES.VARINT,l.WIRE_TYPES.BITS64,l.WIRE_TYPES.BITS32],l.TYPES={int32:{name:"int32",wireType:l.WIRE_TYPES.VARINT,defaultValue:0},uint32:{name:"uint32",wireType:l.WIRE_TYPES.VARINT,defaultValue:0},sint32:{name:"sint32",wireType:l.WIRE_TYPES.VARINT,defaultValue:0},int64:{name:"int64",wireType:l.WIRE_TYPES.VARINT,defaultValue:l.Long?l.Long.ZERO:void 0},uint64:{name:"uint64",wireType:l.WIRE_TYPES.VARINT,defaultValue:l.Long?l.Long.UZERO:void 0},sint64:{name:"sint64",wireType:l.WIRE_TYPES.VARINT,defaultValue:l.Long?l.Long.ZERO:void 0},bool:{name:"bool",wireType:l.WIRE_TYPES.VARINT,defaultValue:!1},double:{name:"double",wireType:l.WIRE_TYPES.BITS64,defaultValue:0},string:{name:"string",wireType:l.WIRE_TYPES.LDELIM,defaultValue:""},bytes:{name:"bytes",wireType:l.WIRE_TYPES.LDELIM,defaultValue:null},fixed32:{name:"fixed32",wireType:l.WIRE_TYPES.BITS32,defaultValue:0},sfixed32:{name:"sfixed32",wireType:l.WIRE_TYPES.BITS32,defaultValue:0},fixed64:{name:"fixed64",wireType:l.WIRE_TYPES.BITS64,defaultValue:l.Long?l.Long.UZERO:void 0},sfixed64:{name:"sfixed64",wireType:l.WIRE_TYPES.BITS64,defaultValue:l.Long?l.Long.ZERO:void 0},float:{name:"float",wireType:l.WIRE_TYPES.BITS32,defaultValue:0},enum:{name:"enum",wireType:l.WIRE_TYPES.VARINT,defaultValue:0},message:{name:"message",wireType:l.WIRE_TYPES.LDELIM,defaultValue:null},group:{name:"group",wireType:l.WIRE_TYPES.STARTGROUP,defaultValue:null}},l.MAP_KEY_TYPES=[l.TYPES.int32,l.TYPES.sint32,l.TYPES.sfixed32,l.TYPES.uint32,l.TYPES.fixed32,l.TYPES.int64,l.TYPES.sint64,l.TYPES.sfixed64,l.TYPES.uint64,l.TYPES.fixed64,l.TYPES.bool,l.TYPES.string,l.TYPES.bytes],l.ID_MIN=1,l.ID_MAX=536870911,l.convertFieldsToCamelCase=!1,l.populateAccessors=!0,l.populateDefaults=!0,l.Util=function(){var e={};return e.IS_NODE=!("object"!==typeof a||a+""!=="[object process]"||a.browser),e.XHR=function(){for(var e=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}],t=null,n=0;n<e.length;n++){try{t=e[n]()}catch(a){continue}break}if(!t)throw Error("XMLHttpRequest is not supported");return t},e.fetch=function(t,n){if(n&&"function"!=typeof n&&(n=null),e.IS_NODE)if(n)g.readFile(t,function(e,t){n(e?null:""+t)});else try{return g.readFileSync(t)}catch(l){return null}else{var a=e.XHR();if(a.open("GET",t,!!n),a.setRequestHeader("Accept","text/plain"),"function"===typeof a.overrideMimeType&&a.overrideMimeType("text/plain"),!n)return a.send(null),200==a.status||0==a.status&&"string"===typeof a.responseText?a.responseText:null;if(a.onreadystatechange=function(){4==a.readyState&&(200==a.status||0==a.status&&"string"===typeof a.responseText?n(a.responseText):n(null))},4==a.readyState)return;a.send(null)}},e.toCamelCase=function(e){return e.replace(/_([a-zA-Z])/g,function(e,t){return t.toUpperCase()})},e}(),l.Lang={DELIM:/[\s\{\}=;:\[\],'"\(\)<>]/g,RULE:/^(?:required|optional|repeated|map)$/,TYPE:/^(?:double|float|int32|uint32|sint32|int64|uint64|sint64|fixed32|sfixed32|fixed64|sfixed64|bool|string|bytes)$/,NAME:/^[a-zA-Z_][a-zA-Z_0-9]*$/,TYPEDEF:/^[a-zA-Z][a-zA-Z_0-9]*$/,TYPEREF:/^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)+$/,FQTYPEREF:/^(?:\.[a-zA-Z][a-zA-Z_0-9]*)+$/,NUMBER:/^-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+|([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?)|inf|nan)$/,NUMBER_DEC:/^(?:[1-9][0-9]*|0)$/,NUMBER_HEX:/^0[xX][0-9a-fA-F]+$/,NUMBER_OCT:/^0[0-7]+$/,NUMBER_FLT:/^([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?|inf|nan)$/,BOOL:/^(?:true|false)$/i,ID:/^(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,NEGID:/^\-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,WHITESPACE:/\s/,STRING:/(?:"([^"\\]*(?:\\.[^"\\]*)*)")|(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,STRING_DQ:/(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,STRING_SQ:/(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g},l.DotProto=function(e,t){var n={},a=function(e){this.source=e+"",this.index=0,this.line=1,this.stack=[],this._stringOpen=null},l=a.prototype;l._readString=function(){var e='"'===this._stringOpen?t.STRING_DQ:t.STRING_SQ;e.lastIndex=this.index-1;var n=e.exec(this.source);if(!n)throw Error("unterminated string");return this.index=e.lastIndex,this.stack.push(this._stringOpen),this._stringOpen=null,n[1]},l.next=function(){if(this.stack.length>0)return this.stack.shift();if(this.index>=this.source.length)return null;if(null!==this._stringOpen)return this._readString();var e,n,a;do{e=!1;while(t.WHITESPACE.test(a=this.source.charAt(this.index)))if("\n"===a&&++this.line,++this.index===this.source.length)return null;if("/"===this.source.charAt(this.index))if(++this.index,"/"===this.source.charAt(this.index)){while("\n"!==this.source.charAt(++this.index))if(this.index==this.source.length)return null;++this.index,++this.line,e=!0}else{if("*"!==(a=this.source.charAt(this.index)))return"/";do{if("\n"===a&&++this.line,++this.index===this.source.length)return null;n=a,a=this.source.charAt(this.index)}while("*"!==n||"/"!==a);++this.index,e=!0}}while(e);if(this.index===this.source.length)return null;var l=this.index;t.DELIM.lastIndex=0;var r=t.DELIM.test(this.source.charAt(l++));if(!r)while(l<this.source.length&&!t.DELIM.test(this.source.charAt(l)))++l;var i=this.source.substring(this.index,this.index=l);return'"'!==i&&"'"!==i||(this._stringOpen=i),i},l.peek=function(){if(0===this.stack.length){var e=this.next();if(null===e)return null;this.stack.push(e)}return this.stack[0]},l.skip=function(e){var t=this.next();if(t!==e)throw Error("illegal '"+t+"', '"+e+"' expected")},l.omit=function(e){return this.peek()===e&&(this.next(),!0)},l.toString=function(){return"Tokenizer ("+this.index+"/"+this.source.length+" at line "+this.line+")"},n.Tokenizer=a;var r=function(e){this.tn=new a(e),this.proto3=!1},i=r.prototype;function o(e,n){var a=-1,l=1;if("-"==e.charAt(0)&&(l=-1,e=e.substring(1)),t.NUMBER_DEC.test(e))a=parseInt(e);else if(t.NUMBER_HEX.test(e))a=parseInt(e.substring(2),16);else{if(!t.NUMBER_OCT.test(e))throw Error("illegal id value: "+(l<0?"-":"")+e);a=parseInt(e.substring(1),8)}if(a=l*a|0,!n&&a<0)throw Error("illegal id value: "+(l<0?"-":"")+e);return a}function s(e){var n=1;if("-"==e.charAt(0)&&(n=-1,e=e.substring(1)),t.NUMBER_DEC.test(e))return n*parseInt(e,10);if(t.NUMBER_HEX.test(e))return n*parseInt(e.substring(2),16);if(t.NUMBER_OCT.test(e))return n*parseInt(e.substring(1),8);if("inf"===e)return n*(1/0);if("nan"===e)return NaN;if(t.NUMBER_FLT.test(e))return n*parseFloat(e);throw Error("illegal number value: "+(n<0?"-":"")+e)}function u(e,t,n){"undefined"===typeof e[t]?e[t]=n:(Array.isArray(e[t])||(e[t]=[e[t]]),e[t].push(n))}return i.parse=function(){var e,n={name:"[ROOT]",package:null,messages:[],enums:[],imports:[],options:{},services:[]},a=!0;try{while(e=this.tn.next())switch(e){case"package":if(!a||null!==n["package"])throw Error("unexpected 'package'");if(e=this.tn.next(),!t.TYPEREF.test(e))throw Error("illegal package name: "+e);this.tn.skip(";"),n["package"]=e;break;case"import":if(!a)throw Error("unexpected 'import'");e=this.tn.peek(),"public"===e&&this.tn.next(),e=this._readString(),this.tn.skip(";"),n.imports.push(e);break;case"syntax":if(!a)throw Error("unexpected 'syntax'");this.tn.skip("="),"proto3"===(n.syntax=this._readString())&&(this.proto3=!0),this.tn.skip(";");break;case"message":this._parseMessage(n,null),a=!1;break;case"enum":this._parseEnum(n),a=!1;break;case"option":this._parseOption(n);break;case"service":this._parseService(n);break;case"extend":this._parseExtend(n);break;default:throw Error("unexpected '"+e+"'")}}catch(l){throw l.message="Parse error at line "+this.tn.line+": "+l.message,l}return delete n.name,n},r.parse=function(e){return new r(e).parse()},i._readString=function(){var e,t,n="";do{if(t=this.tn.next(),"'"!==t&&'"'!==t)throw Error("illegal string delimiter: "+t);n+=this.tn.next(),this.tn.skip(t),e=this.tn.peek()}while('"'===e||'"'===e);return n},i._readValue=function(e){var n=this.tn.peek();if('"'===n||"'"===n)return this._readString();if(this.tn.next(),t.NUMBER.test(n))return s(n);if(t.BOOL.test(n))return"true"===n.toLowerCase();if(e&&t.TYPEREF.test(n))return n;throw Error("illegal value: "+n)},i._parseOption=function(e,n){var a=this.tn.next(),l=!1;if("("===a&&(l=!0,a=this.tn.next()),!t.TYPEREF.test(a))throw Error("illegal option name: "+a);var r=a;l&&(this.tn.skip(")"),r="("+r+")",a=this.tn.peek(),t.FQTYPEREF.test(a)&&(r+=a,this.tn.next())),this.tn.skip("="),this._parseOptionValue(e,r),n||this.tn.skip(";")},i._parseOptionValue=function(e,n){var a=this.tn.peek();if("{"!==a)u(e.options,n,this._readValue(!0));else{this.tn.skip("{");while("}"!==(a=this.tn.next())){if(!t.NAME.test(a))throw Error("illegal option name: "+n+"."+a);this.tn.omit(":")?u(e.options,n+"."+a,this._readValue(!0)):this._parseOptionValue(e,n+"."+a)}}},i._parseService=function(e){var n=this.tn.next();if(!t.NAME.test(n))throw Error("illegal service name at line "+this.tn.line+": "+n);var a=n,l={name:a,rpc:{},options:{}};this.tn.skip("{");while("}"!==(n=this.tn.next()))if("option"===n)this._parseOption(l);else{if("rpc"!==n)throw Error("illegal service token: "+n);this._parseServiceRPC(l)}this.tn.omit(";"),e.services.push(l)},i._parseServiceRPC=function(e){var n="rpc",a=this.tn.next();if(!t.NAME.test(a))throw Error("illegal rpc service method name: "+a);var l=a,r={request:null,response:null,request_stream:!1,response_stream:!1,options:{}};if(this.tn.skip("("),a=this.tn.next(),"stream"===a.toLowerCase()&&(r.request_stream=!0,a=this.tn.next()),!t.TYPEREF.test(a))throw Error("illegal rpc service request type: "+a);if(r.request=a,this.tn.skip(")"),a=this.tn.next(),"returns"!==a.toLowerCase())throw Error("illegal rpc service request type delimiter: "+a);if(this.tn.skip("("),a=this.tn.next(),"stream"===a.toLowerCase()&&(r.response_stream=!0,a=this.tn.next()),r.response=a,this.tn.skip(")"),a=this.tn.peek(),"{"===a){this.tn.next();while("}"!==(a=this.tn.next())){if("option"!==a)throw Error("illegal rpc service token: "+a);this._parseOption(r)}this.tn.omit(";")}else this.tn.skip(";");"undefined"===typeof e[n]&&(e[n]={}),e[n][l]=r},i._parseMessage=function(e,n){var a=!!n,l=this.tn.next(),r={name:"",fields:[],enums:[],messages:[],options:{},services:[],oneofs:{}};if(!t.NAME.test(l))throw Error("illegal "+(a?"group":"message")+" name: "+l);r.name=l,a&&(this.tn.skip("="),n.id=o(this.tn.next()),r.isGroup=!0),l=this.tn.peek(),"["===l&&n&&this._parseFieldOptions(n),this.tn.skip("{");while("}"!==(l=this.tn.next()))if(t.RULE.test(l))this._parseMessageField(r,l);else if("oneof"===l)this._parseMessageOneOf(r);else if("enum"===l)this._parseEnum(r);else if("message"===l)this._parseMessage(r);else if("option"===l)this._parseOption(r);else if("service"===l)this._parseService(r);else if("extensions"===l)r.extensions=this._parseExtensionRanges();else if("reserved"===l)this._parseIgnored();else if("extend"===l)this._parseExtend(r);else{if(!t.TYPEREF.test(l))throw Error("illegal message token: "+l);if(!this.proto3)throw Error("illegal field rule: "+l);this._parseMessageField(r,"optional",l)}return this.tn.omit(";"),e.messages.push(r),r},i._parseIgnored=function(){while(";"!==this.tn.peek())this.tn.next();this.tn.skip(";")},i._parseMessageField=function(e,n,a){if(!t.RULE.test(n))throw Error("illegal message field rule: "+n);var l,r={rule:n,type:"",name:"",options:{},id:0};if("map"===n){if(a)throw Error("illegal type: "+a);if(this.tn.skip("<"),l=this.tn.next(),!t.TYPE.test(l)&&!t.TYPEREF.test(l))throw Error("illegal message field type: "+l);if(r.keytype=l,this.tn.skip(","),l=this.tn.next(),!t.TYPE.test(l)&&!t.TYPEREF.test(l))throw Error("illegal message field: "+l);if(r.type=l,this.tn.skip(">"),l=this.tn.next(),!t.NAME.test(l))throw Error("illegal message field name: "+l);r.name=l,this.tn.skip("="),r.id=o(this.tn.next()),l=this.tn.peek(),"["===l&&this._parseFieldOptions(r),this.tn.skip(";")}else if(a="undefined"!==typeof a?a:this.tn.next(),"group"===a){var i=this._parseMessage(e,r);if(!/^[A-Z]/.test(i.name))throw Error("illegal group name: "+i.name);r.type=i.name,r.name=i.name.toLowerCase(),this.tn.omit(";")}else{if(!t.TYPE.test(a)&&!t.TYPEREF.test(a))throw Error("illegal message field type: "+a);if(r.type=a,l=this.tn.next(),!t.NAME.test(l))throw Error("illegal message field name: "+l);r.name=l,this.tn.skip("="),r.id=o(this.tn.next()),l=this.tn.peek(),"["===l&&this._parseFieldOptions(r),this.tn.skip(";")}return e.fields.push(r),r},i._parseMessageOneOf=function(e){var n=this.tn.next();if(!t.NAME.test(n))throw Error("illegal oneof name: "+n);var a,l=n,r=[];this.tn.skip("{");while("}"!==(n=this.tn.next()))a=this._parseMessageField(e,"optional",n),a.oneof=l,r.push(a.id);this.tn.omit(";"),e.oneofs[l]=r},i._parseFieldOptions=function(e){this.tn.skip("[");var t=!0;while("]"!==this.tn.peek())t||this.tn.skip(","),this._parseOption(e,!0),t=!1;this.tn.next()},i._parseEnum=function(e){var n={name:"",values:[],options:{}},a=this.tn.next();if(!t.NAME.test(a))throw Error("illegal name: "+a);n.name=a,this.tn.skip("{");while("}"!==(a=this.tn.next()))if("option"===a)this._parseOption(n);else{if(!t.NAME.test(a))throw Error("illegal name: "+a);this.tn.skip("=");var l={name:a,id:o(this.tn.next(),!0)};a=this.tn.peek(),"["===a&&this._parseFieldOptions({options:{}}),this.tn.skip(";"),n.values.push(l)}this.tn.omit(";"),e.enums.push(n)},i._parseExtensionRanges=function(){var t,n,a,l=[];do{n=[];while(1){switch(t=this.tn.next(),t){case"min":a=e.ID_MIN;break;case"max":a=e.ID_MAX;break;default:a=s(t);break}if(n.push(a),2===n.length)break;if("to"!==this.tn.peek()){n.push(a);break}this.tn.next()}l.push(n)}while(this.tn.omit(","));return this.tn.skip(";"),l},i._parseExtend=function(e){var n=this.tn.next();if(!t.TYPEREF.test(n))throw Error("illegal extend reference: "+n);var a={ref:n,fields:[]};this.tn.skip("{");while("}"!==(n=this.tn.next()))if(t.RULE.test(n))this._parseMessageField(a,n);else{if(!t.TYPEREF.test(n))throw Error("illegal extend token: "+n);if(!this.proto3)throw Error("illegal field rule: "+n);this._parseMessageField(a,"optional",n)}return this.tn.omit(";"),e.messages.push(a),a},i.toString=function(){return"Parser at line "+this.tn.line},n.Parser=r,n}(l,l.Lang),l.Reflect=function(t){var n={},a=function(e,t,n){this.builder=e,this.parent=t,this.name=n,this.className},l=a.prototype;l.fqn=function(){var e=this.name,t=this;do{if(t=t.parent,null==t)break;e=t.name+"."+e}while(1);return e},l.toString=function(e){return(e?this.className+" ":"")+this.fqn()},l.build=function(){throw Error(this.toString(!0)+" cannot be built directly")},n.T=a;var i=function(e,t,n,l,r){a.call(this,e,t,n),this.className="Namespace",this.children=[],this.options=l||{},this.syntax=r||"proto2"},o=i.prototype=Object.create(a.prototype);o.getChildren=function(e){if(e=e||null,null==e)return this.children.slice();for(var t=[],n=0,a=this.children.length;n<a;++n)this.children[n]instanceof e&&t.push(this.children[n]);return t},o.addChild=function(e){var t;if(t=this.getChild(e.name))if(t instanceof g.Field&&t.name!==t.originalName&&null===this.getChild(t.originalName))t.name=t.originalName;else{if(!(e instanceof g.Field&&e.name!==e.originalName&&null===this.getChild(e.originalName)))throw Error("Duplicate name in namespace "+this.toString(!0)+": "+e.name);e.name=e.originalName}this.children.push(e)},o.getChild=function(e){for(var t="number"===typeof e?"id":"name",n=0,a=this.children.length;n<a;++n)if(this.children[n][t]===e)return this.children[n];return null},o.resolve=function(e,t){var a,l="string"===typeof e?e.split("."):e,r=this,i=0;if(""===l[i]){while(null!==r.parent)r=r.parent;i++}do{do{if(!(r instanceof n.Namespace)){r=null;break}if(a=r.getChild(l[i]),!a||!(a instanceof n.T)||t&&!(a instanceof n.Namespace)){r=null;break}r=a,i++}while(i<l.length);if(null!=r)break;if(null!==this.parent)return this.parent.resolve(e,t)}while(null!=r);return r},o.qn=function(e){var t=[],a=e;do{t.unshift(a.name),a=a.parent}while(null!==a);for(var l=1;l<=t.length;l++){var r=t.slice(t.length-l);if(e===this.resolve(r,e instanceof n.Namespace))return r.join(".")}return e.fqn()},o.build=function(){for(var e,t={},n=this.children,a=0,l=n.length;a<l;++a)e=n[a],e instanceof i&&(t[e.name]=e.build());return Object.defineProperty&&Object.defineProperty(t,"$options",{value:this.buildOpt()}),t},o.buildOpt=function(){for(var e={},t=Object.keys(this.options),n=0,a=t.length;n<a;++n){var l=t[n],r=this.options[t[n]];e[l]=r}return e},o.getOption=function(e){return"undefined"===typeof e?this.options:"undefined"!==typeof this.options[e]?this.options[e]:null},n.Namespace=i;var s=function(e,n,a,l){if(this.type=e,this.resolvedType=n,this.isMapKey=a,this.syntax=l,a&&t.MAP_KEY_TYPES.indexOf(e)<0)throw Error("Invalid map key type: "+e.name)},u=s.prototype;function c(e){if("string"===typeof e&&(e=t.TYPES[e]),"undefined"===typeof e.defaultValue)throw Error("default value for type "+e.name+" is not supported");return e==t.TYPES.bytes?new r(0):e.defaultValue}function f(e,n){if(e&&"number"===typeof e.low&&"number"===typeof e.high&&"boolean"===typeof e.unsigned&&e.low===e.low&&e.high===e.high)return new t.Long(e.low,e.high,"undefined"===typeof n?e.unsigned:n);if("string"===typeof e)return t.Long.fromString(e,n||!1,10);if("number"===typeof e)return t.Long.fromNumber(e,n||!1);throw Error("not convertible to Long")}s.defaultFieldValue=c,u.verifyValue=function(n){var a=function(e,t){throw Error("Illegal value for "+this.toString(!0)+" of type "+this.type.name+": "+e+" ("+t+")")}.bind(this);switch(this.type){case t.TYPES.int32:case t.TYPES.sint32:case t.TYPES.sfixed32:return("number"!==typeof n||n===n&&n%1!==0)&&a(typeof n,"not an integer"),n>4294967295?0|n:n;case t.TYPES.uint32:case t.TYPES.fixed32:return("number"!==typeof n||n===n&&n%1!==0)&&a(typeof n,"not an integer"),n<0?n>>>0:n;case t.TYPES.int64:case t.TYPES.sint64:case t.TYPES.sfixed64:if(t.Long)try{return f(n,!1)}catch(o){a(typeof n,o.message)}else a(typeof n,"requires Long.js");case t.TYPES.uint64:case t.TYPES.fixed64:if(t.Long)try{return f(n,!0)}catch(o){a(typeof n,o.message)}else a(typeof n,"requires Long.js");case t.TYPES.bool:return"boolean"!==typeof n&&a(typeof n,"not a boolean"),n;case t.TYPES["float"]:case t.TYPES["double"]:return"number"!==typeof n&&a(typeof n,"not a number"),n;case t.TYPES.string:return"string"===typeof n||n&&n instanceof String||a(typeof n,"not a string"),""+n;case t.TYPES.bytes:return e.isByteBuffer(n)?n:e.wrap(n);case t.TYPES["enum"]:var l=this.resolvedType.getChildren(t.Reflect.Enum.Value);for(i=0;i<l.length;i++){if(l[i].name==n)return l[i].id;if(l[i].id==n)return l[i].id}if("proto3"===this.syntax)return("number"!==typeof n||n===n&&n%1!==0)&&a(typeof n,"not an integer"),(n>4294967295||n<0)&&a(typeof n,"not in range for uint32"),n;a(n,"not a valid enum value");case t.TYPES.group:case t.TYPES.message:if(n&&"object"===typeof n||a(typeof n,"object expected"),n instanceof this.resolvedType.clazz)return n;if(n instanceof t.Builder.Message){var r={};for(var i in n)n.hasOwnProperty(i)&&(r[i]=n[i]);n=r}return new this.resolvedType.clazz(n)}throw Error("[INTERNAL] Illegal value for "+this.toString(!0)+": "+n+" (undefined type "+this.type+")")},u.calculateLength=function(e,n){if(null===n)return 0;var a;switch(this.type){case t.TYPES.int32:return n<0?r.calculateVarint64(n):r.calculateVarint32(n);case t.TYPES.uint32:return r.calculateVarint32(n);case t.TYPES.sint32:return r.calculateVarint32(r.zigZagEncode32(n));case t.TYPES.fixed32:case t.TYPES.sfixed32:case t.TYPES["float"]:return 4;case t.TYPES.int64:case t.TYPES.uint64:return r.calculateVarint64(n);case t.TYPES.sint64:return r.calculateVarint64(r.zigZagEncode64(n));case t.TYPES.fixed64:case t.TYPES.sfixed64:return 8;case t.TYPES.bool:return 1;case t.TYPES["enum"]:return r.calculateVarint32(n);case t.TYPES["double"]:return 8;case t.TYPES.string:return a=r.calculateUTF8Bytes(n),r.calculateVarint32(a)+a;case t.TYPES.bytes:if(n.remaining()<0)throw Error("Illegal value for "+this.toString(!0)+": "+n.remaining()+" bytes remaining");return r.calculateVarint32(n.remaining())+n.remaining();case t.TYPES.message:return a=this.resolvedType.calculate(n),r.calculateVarint32(a)+a;case t.TYPES.group:return a=this.resolvedType.calculate(n),a+r.calculateVarint32(e<<3|t.WIRE_TYPES.ENDGROUP)}throw Error("[INTERNAL] Illegal value to encode in "+this.toString(!0)+": "+n+" (unknown type)")},u.encodeValue=function(e,n,a){if(null===n)return a;switch(this.type){case t.TYPES.int32:n<0?a.writeVarint64(n):a.writeVarint32(n);break;case t.TYPES.uint32:a.writeVarint32(n);break;case t.TYPES.sint32:a.writeVarint32ZigZag(n);break;case t.TYPES.fixed32:a.writeUint32(n);break;case t.TYPES.sfixed32:a.writeInt32(n);break;case t.TYPES.int64:case t.TYPES.uint64:a.writeVarint64(n);break;case t.TYPES.sint64:a.writeVarint64ZigZag(n);break;case t.TYPES.fixed64:a.writeUint64(n);break;case t.TYPES.sfixed64:a.writeInt64(n);break;case t.TYPES.bool:"string"===typeof n?a.writeVarint32("false"===n.toLowerCase()?0:!!n):a.writeVarint32(n?1:0);break;case t.TYPES["enum"]:a.writeVarint32(n);break;case t.TYPES["float"]:a.writeFloat32(n);break;case t.TYPES["double"]:a.writeFloat64(n);break;case t.TYPES.string:a.writeVString(n);break;case t.TYPES.bytes:if(n.remaining()<0)throw Error("Illegal value for "+this.toString(!0)+": "+n.remaining()+" bytes remaining");var l=n.offset;a.writeVarint32(n.remaining()),a.append(n),n.offset=l;break;case t.TYPES.message:var i=(new r).LE();this.resolvedType.encode(n,i),a.writeVarint32(i.offset),a.append(i.flip());break;case t.TYPES.group:this.resolvedType.encode(n,a),a.writeVarint32(e<<3|t.WIRE_TYPES.ENDGROUP);break;default:throw Error("[INTERNAL] Illegal value to encode in "+this.toString(!0)+": "+n+" (unknown type)")}return a},u.decode=function(e,n,a){if(n!=this.type.wireType)throw Error("Unexpected wire type for element");var l,r;switch(this.type){case t.TYPES.int32:return 0|e.readVarint32();case t.TYPES.uint32:return e.readVarint32()>>>0;case t.TYPES.sint32:return 0|e.readVarint32ZigZag();case t.TYPES.fixed32:return e.readUint32()>>>0;case t.TYPES.sfixed32:return 0|e.readInt32();case t.TYPES.int64:return e.readVarint64();case t.TYPES.uint64:return e.readVarint64().toUnsigned();case t.TYPES.sint64:return e.readVarint64ZigZag();case t.TYPES.fixed64:return e.readUint64();case t.TYPES.sfixed64:return e.readInt64();case t.TYPES.bool:return!!e.readVarint32();case t.TYPES["enum"]:return e.readVarint32();case t.TYPES["float"]:return e.readFloat();case t.TYPES["double"]:return e.readDouble();case t.TYPES.string:return e.readVString();case t.TYPES.bytes:if(r=e.readVarint32(),e.remaining()<r)throw Error("Illegal number of bytes for "+this.toString(!0)+": "+r+" required but got only "+e.remaining());return l=e.clone(),l.limit=l.offset+r,e.offset+=r,l;case t.TYPES.message:return r=e.readVarint32(),this.resolvedType.decode(e,r);case t.TYPES.group:return this.resolvedType.decode(e,-1,a)}throw Error("[INTERNAL] Illegal decode type")},u.valueFromString=function(e){if(!this.isMapKey)throw Error("valueFromString() called on non-map-key element");switch(this.type){case t.TYPES.int32:case t.TYPES.sint32:case t.TYPES.sfixed32:case t.TYPES.uint32:case t.TYPES.fixed32:return this.verifyValue(parseInt(e));case t.TYPES.int64:case t.TYPES.sint64:case t.TYPES.sfixed64:case t.TYPES.uint64:case t.TYPES.fixed64:return this.verifyValue(e);case t.TYPES.bool:return"true"===e;case t.TYPES.string:return this.verifyValue(e);case t.TYPES.bytes:return r.fromBinary(e)}},u.valueToString=function(e){if(!this.isMapKey)throw Error("valueToString() called on non-map-key element");return this.type===t.TYPES.bytes?e.toString("binary"):e.toString()},n.Element=s;var g=function(e,t,n,a,l,r){i.call(this,e,t,n,a,r),this.className="Message",this.extensions=void 0,this.clazz=null,this.isGroup=!!l,this._fields=null,this._fieldsById=null,this._fieldsByName=null},v=g.prototype=Object.create(i.prototype);function b(e,n){var a=n.readVarint32(),l=7&a,r=a>>>3;switch(l){case t.WIRE_TYPES.VARINT:do{a=n.readUint8()}while(128===(128&a));break;case t.WIRE_TYPES.BITS64:n.offset+=8;break;case t.WIRE_TYPES.LDELIM:a=n.readVarint32(),n.offset+=a;break;case t.WIRE_TYPES.STARTGROUP:b(r,n);break;case t.WIRE_TYPES.ENDGROUP:if(r===e)return!1;throw Error("Illegal GROUPEND after unknown group: "+r+" ("+e+" expected)");case t.WIRE_TYPES.BITS32:n.offset+=4;break;default:throw Error("Illegal wire type in unknown group "+e+": "+l)}return!0}v.build=function(n){if(this.clazz&&!n)return this.clazz;var a=function(t,n){var a=n.getChildren(t.Reflect.Message.Field),l=n.getChildren(t.Reflect.Message.OneOf),i=function e(i,o){t.Builder.Message.call(this);for(var s=0,u=l.length;s<u;++s)this[l[s].name]=null;for(s=0,u=a.length;s<u;++s){var c=a[s];this[c.name]=c.repeated?[]:c.map?new t.Map(c):null,!c.required&&"proto3"!==n.syntax||null===c.defaultValue||(this[c.name]=c.defaultValue)}var f;if(arguments.length>0)if(1!==arguments.length||null===i||"object"!==typeof i||!("function"!==typeof i.encode||i instanceof e)||Array.isArray(i)||i instanceof t.Map||r.isByteBuffer(i)||i instanceof ArrayBuffer||t.Long&&i instanceof t.Long)for(s=0,u=arguments.length;s<u;++s)"undefined"!==typeof(f=arguments[s])&&this.$set(a[s].name,f);else this.$set(i)},o=i.prototype=Object.create(t.Builder.Message.prototype);o.add=function(e,a,l){var r=n._fieldsByName[e];if(!l){if(!r)throw Error(this+"#"+e+" is undefined");if(!(r instanceof t.Reflect.Message.Field))throw Error(this+"#"+e+" is not a field: "+r.toString(!0));if(!r.repeated)throw Error(this+"#"+e+" is not a repeated field");a=r.verifyValue(a,!0)}return null===this[e]&&(this[e]=[]),this[e].push(a),this},o.$add=o.add,o.set=function(e,a,l){if(e&&"object"===typeof e){for(var r in l=a,e)e.hasOwnProperty(r)&&"undefined"!==typeof(a=e[r])&&this.$set(r,a,l);return this}var i=n._fieldsByName[e];if(l)this[e]=a;else{if(!i)throw Error(this+"#"+e+" is not a field: undefined");if(!(i instanceof t.Reflect.Message.Field))throw Error(this+"#"+e+" is not a field: "+i.toString(!0));this[i.name]=a=i.verifyValue(a)}if(i&&i.oneof){var o=this[i.oneof.name];null!==a?(null!==o&&o!==i.name&&(this[o]=null),this[i.oneof.name]=i.name):o===e&&(this[i.oneof.name]=null)}return this},o.$set=o.set,o.get=function(e,a){if(a)return this[e];var l=n._fieldsByName[e];if(!l||!(l instanceof t.Reflect.Message.Field))throw Error(this+"#"+e+" is not a field: undefined");if(!(l instanceof t.Reflect.Message.Field))throw Error(this+"#"+e+" is not a field: "+l.toString(!0));return this[l.name]},o.$get=o.get;for(var s=0;s<a.length;s++){var u=a[s];u instanceof t.Reflect.Message.ExtensionField||n.builder.options.populateAccessors&&function(e){var t=e.originalName.replace(/(_[a-zA-Z])/g,function(e){return e.toUpperCase().replace("_","")});t=t.substring(0,1).toUpperCase()+t.substring(1);var a=e.originalName.replace(/([A-Z])/g,function(e){return"_"+e}),l=function(t,n){return this[e.name]=n?t:e.verifyValue(t),this},r=function(){return this[e.name]};null===n.getChild("set"+t)&&(o["set"+t]=l),null===n.getChild("set_"+a)&&(o["set_"+a]=l),null===n.getChild("get"+t)&&(o["get"+t]=r),null===n.getChild("get_"+a)&&(o["get_"+a]=r)}(u)}function c(e,n,a,l){if(null===e||"object"!==typeof e){if(l&&l instanceof t.Reflect.Enum){var i=t.Reflect.Enum.getName(l.object,e);if(null!==i)return i}return e}if(r.isByteBuffer(e))return n?e.toBase64():e.toBuffer();if(t.Long.isLong(e))return a?e.toString():t.Long.fromValue(e);var o;if(Array.isArray(e))return o=[],e.forEach(function(e,t){o[t]=c(e,n,a,l)}),o;if(o={},e instanceof t.Map){for(var s=e.entries(),u=s.next();!u.done;u=s.next())o[e.keyElem.valueToString(u.value[0])]=c(u.value[1],n,a,e.valueElem.resolvedType);return o}var f=e.$type,g=void 0;for(var v in e)e.hasOwnProperty(v)&&(f&&(g=f.getChild(v))?o[v]=c(e[v],n,a,g.resolvedType):o[v]=c(e[v],n,a));return o}return o.encode=function(t,a){"boolean"===typeof t&&(a=t,t=void 0);var l=!1;t||(t=new e,l=!0);var r=t.littleEndian;try{return n.encode(this,t.LE(),a),(l?t.flip():t).LE(r)}catch(i){throw t.LE(r),i}},i.encode=function(e,t,n){return new i(e).encode(t,n)},o.calculate=function(){return n.calculate(this)},o.encodeDelimited=function(e){var t=!1;e||(e=new r,t=!0);var a=(new r).LE();return n.encode(this,a).flip(),e.writeVarint32(a.remaining()),e.append(a),t?e.flip():e},o.encodeAB=function(){try{return this.encode().toArrayBuffer()}catch(e){throw e.encoded&&(e.encoded=e.encoded.toArrayBuffer()),e}},o.toArrayBuffer=o.encodeAB,o.encodeNB=function(){try{return this.encode().toBuffer()}catch(e){throw e.encoded&&(e.encoded=e.encoded.toBuffer()),e}},o.toBuffer=o.encodeNB,o.encode64=function(){try{return this.encode().toBase64()}catch(e){throw e.encoded&&(e.encoded=e.encoded.toBase64()),e}},o.toBase64=o.encode64,o.encodeHex=function(){try{return this.encode().toHex()}catch(e){throw e.encoded&&(e.encoded=e.encoded.toHex()),e}},o.toHex=o.encodeHex,o.toRaw=function(e,t){return c(this,!!e,!!t,this.$type)},o.encodeJSON=function(){return JSON.stringify(c(this,!0,!0,this.$type))},i.decode=function(e,t){"string"===typeof e&&(e=r.wrap(e,t||"base64")),e=r.isByteBuffer(e)?e:r.wrap(e);var a=e.littleEndian;try{var l=n.decode(e.LE());return e.LE(a),l}catch(i){throw e.LE(a),i}},i.decodeDelimited=function(e,t){if("string"===typeof e&&(e=r.wrap(e,t||"base64")),e=r.isByteBuffer(e)?e:r.wrap(e),e.remaining()<1)return null;var a=e.offset,l=e.readVarint32();if(e.remaining()<l)return e.offset=a,null;try{var i=n.decode(e.slice(e.offset,e.offset+l).LE());return e.offset+=l,i}catch(o){throw e.offset+=l,o}},i.decode64=function(e){return i.decode(e,"base64")},i.decodeHex=function(e){return i.decode(e,"hex")},i.decodeJSON=function(e){return new i(JSON.parse(e))},o.toString=function(){return n.toString()},Object.defineProperty&&(Object.defineProperty(i,"$options",{value:n.buildOpt()}),Object.defineProperty(o,"$options",{value:i["$options"]}),Object.defineProperty(i,"$type",{value:n}),Object.defineProperty(o,"$type",{value:n})),i}(t,this);this._fields=[],this._fieldsById={},this._fieldsByName={};for(var l,i=0,o=this.children.length;i<o;i++)if(l=this.children[i],l instanceof m||l instanceof g||l instanceof T){if(a.hasOwnProperty(l.name))throw Error("Illegal reflect child of "+this.toString(!0)+": "+l.toString(!0)+" cannot override static property '"+l.name+"'");a[l.name]=l.build()}else if(l instanceof g.Field)l.build(),this._fields.push(l),this._fieldsById[l.id]=l,this._fieldsByName[l.name]=l;else if(!(l instanceof g.OneOf)&&!(l instanceof M))throw Error("Illegal reflect child of "+this.toString(!0)+": "+this.children[i].toString(!0));return this.clazz=a},v.encode=function(e,t,n){for(var a,l,r=null,i=0,o=this._fields.length;i<o;++i)a=this._fields[i],l=e[a.name],a.required&&null===l?null===r&&(r=a):a.encode(n?l:a.verifyValue(l),t,e);if(null!==r){var s=Error("Missing at least one required field for "+this.toString(!0)+": "+r);throw s.encoded=t,s}return t},v.calculate=function(e){for(var t,n,a=0,l=0,r=this._fields.length;l<r;++l){if(t=this._fields[l],n=e[t.name],t.required&&null===n)throw Error("Missing at least one required field for "+this.toString(!0)+": "+t);a+=t.calculate(n,e)}return a},v.decode=function(e,n,a){n="number"===typeof n?n:-1;var l,r,i,o,s=e.offset,u=new this.clazz;while(e.offset<s+n||-1===n&&e.remaining()>0){if(l=e.readVarint32(),r=7&l,i=l>>>3,r===t.WIRE_TYPES.ENDGROUP){if(i!==a)throw Error("Illegal group end indicator for "+this.toString(!0)+": "+i+" ("+(a?a+" expected":"not a group")+")");break}if(o=this._fieldsById[i]){if(o.repeated&&!o.options.packed)u[o.name].push(o.decode(r,e));else if(o.map){var c=o.decode(r,e);u[o.name].set(c[0],c[1])}else if(u[o.name]=o.decode(r,e),o.oneof){var f=u[o.oneof.name];null!==f&&f!==o.name&&(u[f]=null),u[o.oneof.name]=o.name}}else switch(r){case t.WIRE_TYPES.VARINT:e.readVarint32();break;case t.WIRE_TYPES.BITS32:e.offset+=4;break;case t.WIRE_TYPES.BITS64:e.offset+=8;break;case t.WIRE_TYPES.LDELIM:var g=e.readVarint32();e.offset+=g;break;case t.WIRE_TYPES.STARTGROUP:while(b(i,e));break;default:throw Error("Illegal wire type for unknown field "+i+" in "+this.toString(!0)+"#decode: "+r)}}for(var v=0,h=this._fields.length;v<h;++v)if(o=this._fields[v],null===u[o.name])if("proto3"===this.syntax)u[o.name]=o.defaultValue;else{if(o.required){var p=Error("Missing at least one required field for "+this.toString(!0)+": "+o.name);throw p.decoded=u,p}t.populateDefaults&&null!==o.defaultValue&&(u[o.name]=o.defaultValue)}return u},n.Message=g;var h=function(e,n,l,r,i,o,s,u,c,f){a.call(this,e,n,o),this.className="Message.Field",this.required="required"===l,this.repeated="repeated"===l,this.map="map"===l,this.keyType=r||null,this.type=i,this.resolvedType=null,this.id=s,this.options=u||{},this.defaultValue=null,this.oneof=c||null,this.syntax=f||"proto2",this.originalName=this.name,this.element=null,this.keyElement=null,!this.builder.options.convertFieldsToCamelCase||this instanceof g.ExtensionField||(this.name=t.Util.toCamelCase(this.name))},p=h.prototype=Object.create(a.prototype);p.build=function(){this.element=new s(this.type,this.resolvedType,!1,this.syntax),this.map&&(this.keyElement=new s(this.keyType,void 0,!0,this.syntax)),"proto3"!==this.syntax||this.repeated||this.map?"undefined"!==typeof this.options["default"]&&(this.defaultValue=this.verifyValue(this.options["default"])):this.defaultValue=s.defaultFieldValue(this.type)},p.verifyValue=function(e,n){n=n||!1;var a,l=function(e,t){throw Error("Illegal value for "+this.toString(!0)+" of type "+this.type.name+": "+e+" ("+t+")")}.bind(this);if(null===e)return this.required&&l(typeof e,"required"),"proto3"===this.syntax&&this.type!==t.TYPES.message&&l(typeof e,"proto3 field without field presence cannot be null"),null;if(this.repeated&&!n){Array.isArray(e)||(e=[e]);var r=[];for(a=0;a<e.length;a++)r.push(this.element.verifyValue(e[a]));return r}return this.map&&!n?e instanceof t.Map?e:(e instanceof Object||l(typeof e,"expected ProtoBuf.Map or raw object for map field"),new t.Map(this,e)):(!this.repeated&&Array.isArray(e)&&l(typeof e,"no array expected"),this.element.verifyValue(e))},p.hasWirePresence=function(e,n){if("proto3"!==this.syntax)return null!==e;if(this.oneof&&n[this.oneof.name]===this.name)return!0;switch(this.type){case t.TYPES.int32:case t.TYPES.sint32:case t.TYPES.sfixed32:case t.TYPES.uint32:case t.TYPES.fixed32:return 0!==e;case t.TYPES.int64:case t.TYPES.sint64:case t.TYPES.sfixed64:case t.TYPES.uint64:case t.TYPES.fixed64:return 0!==e.low||0!==e.high;case t.TYPES.bool:return e;case t.TYPES["float"]:case t.TYPES["double"]:return 0!==e;case t.TYPES.string:return e.length>0;case t.TYPES.bytes:return e.remaining()>0;case t.TYPES["enum"]:return 0!==e;case t.TYPES.message:return null!==e;default:return!0}},p.encode=function(e,n,a){if(null===this.type||"object"!==typeof this.type)throw Error("[INTERNAL] Unresolved type in "+this.toString(!0)+": "+this.type);if(null===e||this.repeated&&0==e.length)return n;try{var l;if(this.repeated)if(this.options.packed&&t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType)>=0){n.writeVarint32(this.id<<3|t.WIRE_TYPES.LDELIM),n.ensureCapacity(n.offset+=1);var i=n.offset;for(l=0;l<e.length;l++)this.element.encodeValue(this.id,e[l],n);var o=n.offset-i,s=r.calculateVarint32(o);if(s>1){var u=n.slice(i,n.offset);i+=s-1,n.offset=i,n.append(u)}n.writeVarint32(o,i-s)}else for(l=0;l<e.length;l++)n.writeVarint32(this.id<<3|this.type.wireType),this.element.encodeValue(this.id,e[l],n);else this.map?e.forEach(function(e,a,l){var i=r.calculateVarint32(8|this.keyType.wireType)+this.keyElement.calculateLength(1,a)+r.calculateVarint32(16|this.type.wireType)+this.element.calculateLength(2,e);n.writeVarint32(this.id<<3|t.WIRE_TYPES.LDELIM),n.writeVarint32(i),n.writeVarint32(8|this.keyType.wireType),this.keyElement.encodeValue(1,a,n),n.writeVarint32(16|this.type.wireType),this.element.encodeValue(2,e,n)},this):this.hasWirePresence(e,a)&&(n.writeVarint32(this.id<<3|this.type.wireType),this.element.encodeValue(this.id,e,n))}catch(c){throw Error("Illegal value for "+this.toString(!0)+": "+e+" ("+c+")")}return n},p.calculate=function(e,n){if(e=this.verifyValue(e),null===this.type||"object"!==typeof this.type)throw Error("[INTERNAL] Unresolved type in "+this.toString(!0)+": "+this.type);if(null===e||this.repeated&&0==e.length)return 0;var a=0;try{var l,i;if(this.repeated)if(this.options.packed&&t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType)>=0){for(a+=r.calculateVarint32(this.id<<3|t.WIRE_TYPES.LDELIM),i=0,l=0;l<e.length;l++)i+=this.element.calculateLength(this.id,e[l]);a+=r.calculateVarint32(i),a+=i}else for(l=0;l<e.length;l++)a+=r.calculateVarint32(this.id<<3|this.type.wireType),a+=this.element.calculateLength(this.id,e[l]);else this.map?e.forEach(function(e,n,l){var i=r.calculateVarint32(8|this.keyType.wireType)+this.keyElement.calculateLength(1,n)+r.calculateVarint32(16|this.type.wireType)+this.element.calculateLength(2,e);a+=r.calculateVarint32(this.id<<3|t.WIRE_TYPES.LDELIM),a+=r.calculateVarint32(i),a+=i},this):this.hasWirePresence(e,n)&&(a+=r.calculateVarint32(this.id<<3|this.type.wireType),a+=this.element.calculateLength(this.id,e))}catch(o){throw Error("Illegal value for "+this.toString(!0)+": "+e+" ("+o+")")}return a},p.decode=function(e,n,a){var l,r,i=!this.map&&e==this.type.wireType||!a&&this.repeated&&this.options.packed&&e==t.WIRE_TYPES.LDELIM||this.map&&e==t.WIRE_TYPES.LDELIM;if(!i)throw Error("Illegal wire type for field "+this.toString(!0)+": "+e+" ("+this.type.wireType+" expected)");if(e==t.WIRE_TYPES.LDELIM&&this.repeated&&this.options.packed&&t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType)>=0&&!a){r=n.readVarint32(),r=n.offset+r;var o=[];while(n.offset<r)o.push(this.decode(this.type.wireType,n,!0));return o}if(this.map){var u=s.defaultFieldValue(this.keyType);if(l=s.defaultFieldValue(this.type),r=n.readVarint32(),n.remaining()<r)throw Error("Illegal number of bytes for "+this.toString(!0)+": "+r+" required but got only "+n.remaining());var c=n.clone();c.limit=c.offset+r,n.offset+=r;while(c.remaining()>0){var f=c.readVarint32();e=7&f;var g=f>>>3;if(1===g)u=this.keyElement.decode(c,e,g);else{if(2!==g)throw Error("Unexpected tag in map field key/value submessage");l=this.element.decode(c,e,g)}}return[u,l]}return this.element.decode(n,e,this.id)},n.Message.Field=h;var d=function(e,t,n,a,l,r,i){h.call(this,e,t,n,null,a,l,r,i),this.extension};d.prototype=Object.create(h.prototype),n.Message.ExtensionField=d;var y=function(e,t,n){a.call(this,e,t,n),this.fields=[]};n.Message.OneOf=y;var m=function(e,t,n,a,l){i.call(this,e,t,n,a,l),this.className="Enum",this.object=null};m.getName=function(e,t){for(var n,a=Object.keys(e),l=0;l<a.length;++l)if(e[n=a[l]]===t)return n;return null};var I=m.prototype=Object.create(i.prototype);I.build=function(e){if(this.object&&!e)return this.object;for(var n=new t.Builder.Enum,a=this.getChildren(m.Value),l=0,r=a.length;l<r;++l)n[a[l]["name"]]=a[l]["id"];return Object.defineProperty&&Object.defineProperty(n,"$options",{value:this.buildOpt(),enumerable:!1}),this.object=n},n.Enum=m;var C=function(e,t,n,l){a.call(this,e,t,n),this.className="Enum.Value",this.id=l};C.prototype=Object.create(a.prototype),n.Enum.Value=C;var M=function(e,t,n,l){a.call(this,e,t,n),this.field=l};M.prototype=Object.create(a.prototype),n.Extension=M;var T=function(e,t,n,a){i.call(this,e,t,n,a),this.className="Service",this.clazz=null},E=T.prototype=Object.create(i.prototype);E.build=function(e){return this.clazz&&!e?this.clazz:this.clazz=function(e,t){for(var n=function(t){e.Builder.Service.call(this),this.rpcImpl=t||function(e,t,n){setTimeout(n.bind(this,Error("Not implemented, see: https://github.com/dcodeIO/ProtoBuf.js/wiki/Services")),0)}},a=n.prototype=Object.create(e.Builder.Service.prototype),l=t.getChildren(e.Reflect.Service.RPCMethod),i=0;i<l.length;i++)(function(e){a[e.name]=function(n,a){try{try{n=e.resolvedRequestType.clazz.decode(r.wrap(n))}catch(l){if(!(l instanceof TypeError))throw l}if(null===n||"object"!==typeof n)throw Error("Illegal arguments");n instanceof e.resolvedRequestType.clazz||(n=new e.resolvedRequestType.clazz(n)),this.rpcImpl(e.fqn(),n,function(n,l){if(n)a(n);else{try{l=e.resolvedResponseType.clazz.decode(l)}catch(r){}l&&l instanceof e.resolvedResponseType.clazz?a(null,l):a(Error("Illegal response type received in service method "+t.name+"#"+e.name))}})}catch(l){setTimeout(a.bind(this,l),0)}},n[e.name]=function(t,a,l){new n(t)[e.name](a,l)},Object.defineProperty&&(Object.defineProperty(n[e.name],"$options",{value:e.buildOpt()}),Object.defineProperty(a[e.name],"$options",{value:n[e.name]["$options"]}))})(l[i]);return Object.defineProperty&&(Object.defineProperty(n,"$options",{value:t.buildOpt()}),Object.defineProperty(a,"$options",{value:n["$options"]}),Object.defineProperty(n,"$type",{value:t}),Object.defineProperty(a,"$type",{value:t})),n}(t,this)},n.Service=T;var _=function(e,t,n,l){a.call(this,e,t,n),this.className="Service.Method",this.options=l||{}},R=_.prototype=Object.create(a.prototype);R.buildOpt=o.buildOpt,n.Service.Method=_;var S=function(e,t,n,a,l,r,i,o){_.call(this,e,t,n,o),this.className="Service.RPCMethod",this.requestName=a,this.responseName=l,this.requestStream=r,this.responseStream=i,this.resolvedRequestType=null,this.resolvedResponseType=null};return S.prototype=Object.create(_.prototype),n.Service.RPCMethod=S,n}(l),l.Builder=function(e,t,n){var a=function(e){this.ns=new n.Namespace(this,null,""),this.ptr=this.ns,this.resolved=!1,this.result=null,this.files={},this.importRoot=null,this.options=e||{}},l=a.prototype;function r(e){e.messages&&e.messages.forEach(function(t){t.syntax=e.syntax,r(t)}),e.enums&&e.enums.forEach(function(t){t.syntax=e.syntax})}return a.isMessage=function(e){return"string"===typeof e.name&&("undefined"===typeof e.values&&"undefined"===typeof e.rpc)},a.isMessageField=function(e){return"string"===typeof e.rule&&"string"===typeof e.name&&"string"===typeof e.type&&"undefined"!==typeof e.id},a.isEnum=function(e){return"string"===typeof e.name&&!("undefined"===typeof e.values||!Array.isArray(e.values)||0===e.values.length)},a.isService=function(e){return!("string"!==typeof e.name||"object"!==typeof e.rpc||!e.rpc)},a.isExtend=function(e){return"string"===typeof e.ref},l.reset=function(){return this.ptr=this.ns,this},l.define=function(e){if("string"!==typeof e||!t.TYPEREF.test(e))throw Error("illegal namespace: "+e);return e.split(".").forEach(function(e){var t=this.ptr.getChild(e);null===t&&this.ptr.addChild(t=new n.Namespace(this,this.ptr,e)),this.ptr=t},this),this},l.create=function(t){if(!t)return this;if(Array.isArray(t)){if(0===t.length)return this;t=t.slice()}else t=[t];var l=[t];while(l.length>0){if(t=l.pop(),!Array.isArray(t))throw Error("not a valid namespace: "+JSON.stringify(t));while(t.length>0){var r=t.shift();if(a.isMessage(r)){var i=new n.Message(this,this.ptr,r.name,r.options,r.isGroup,r.syntax),o={};r.oneofs&&Object.keys(r.oneofs).forEach(function(e){i.addChild(o[e]=new n.Message.OneOf(this,i,e))},this),r.fields&&r.fields.forEach(function(e){if(null!==i.getChild(0|e.id))throw Error("duplicate or invalid field id in "+i.name+": "+e.id);if(e.options&&"object"!==typeof e.options)throw Error("illegal field options in "+i.name+"#"+e.name);var t=null;if("string"===typeof e.oneof&&!(t=o[e.oneof]))throw Error("illegal oneof in "+i.name+"#"+e.name+": "+e.oneof);e=new n.Message.Field(this,i,e.rule,e.keytype,e.type,e.name,e.id,e.options,t,r.syntax),t&&t.fields.push(e),i.addChild(e)},this);var s=[];if(r.enums&&r.enums.forEach(function(e){s.push(e)}),r.messages&&r.messages.forEach(function(e){s.push(e)}),r.services&&r.services.forEach(function(e){s.push(e)}),r.extensions&&("number"===typeof r.extensions[0]?i.extensions=[r.extensions]:i.extensions=r.extensions),this.ptr.addChild(i),s.length>0){l.push(t),t=s,s=null,this.ptr=i,i=null;continue}s=null}else if(a.isEnum(r))i=new n.Enum(this,this.ptr,r.name,r.options,r.syntax),r.values.forEach(function(e){i.addChild(new n.Enum.Value(this,i,e.name,e.id))},this),this.ptr.addChild(i);else if(a.isService(r))i=new n.Service(this,this.ptr,r.name,r.options),Object.keys(r.rpc).forEach(function(e){var t=r.rpc[e];i.addChild(new n.Service.RPCMethod(this,i,e,t.request,t.response,!!t.request_stream,!!t.response_stream,t.options))},this),this.ptr.addChild(i);else{if(!a.isExtend(r))throw Error("not a valid definition: "+JSON.stringify(r));if(i=this.ptr.resolve(r.ref,!0),i)r.fields.forEach(function(t){if(null!==i.getChild(0|t.id))throw Error("duplicate extended field id in "+i.name+": "+t.id);if(i.extensions){var a=!1;if(i.extensions.forEach(function(e){t.id>=e[0]&&t.id<=e[1]&&(a=!0)}),!a)throw Error("illegal extended field id in "+i.name+": "+t.id+" (not within valid ranges)")}var l=t.name;this.options.convertFieldsToCamelCase&&(l=e.Util.toCamelCase(l));var r=new n.Message.ExtensionField(this,i,t.rule,t.type,this.ptr.fqn()+"."+l,t.id,t.options),o=new n.Extension(this,this.ptr,t.name,r);r.extension=o,this.ptr.addChild(o),i.addChild(r)},this);else if(!/\.?google\.protobuf\./.test(r.ref))throw Error("extended message "+r.ref+" is not defined")}r=null,i=null}t=null,this.ptr=this.ptr.parent}return this.resolved=!1,this.result=null,this},l["import"]=function(t,n){var a="/";if("string"===typeof n){if(e.Util.IS_NODE,!0===this.files[n])return this.reset();this.files[n]=!0}else if("object"===typeof n){var l=n.root;e.Util.IS_NODE,(l.indexOf("\\")>=0||n.file.indexOf("\\")>=0)&&(a="\\");var i=l+a+n.file;if(!0===this.files[i])return this.reset();this.files[i]=!0}if(t.imports&&t.imports.length>0){var o,s=!1;"object"===typeof n?(this.importRoot=n.root,s=!0,o=this.importRoot,n=n.file,(o.indexOf("\\")>=0||n.indexOf("\\")>=0)&&(a="\\")):"string"===typeof n?this.importRoot?o=this.importRoot:n.indexOf("/")>=0?(o=n.replace(/\/[^\/]*$/,""),""===o&&(o="/")):n.indexOf("\\")>=0?(o=n.replace(/\\[^\\]*$/,""),a="\\"):o=".":o=null;for(var u=0;u<t.imports.length;u++)if("string"===typeof t.imports[u]){if(!o)throw Error("cannot determine import root");var c=t.imports[u];if("google/protobuf/descriptor.proto"===c)continue;if(c=o+a+c,!0===this.files[c])continue;/\.proto$/i.test(c)&&!e.DotProto&&(c=c.replace(/\.proto$/,".json"));var f=e.Util.fetch(c);if(null===f)throw Error("failed to import '"+c+"' in '"+n+"': file not found");/\.json$/i.test(c)?this["import"](JSON.parse(f+""),c):this["import"](e.DotProto.Parser.parse(f),c)}else n?/\.(\w+)$/.test(n)?this["import"](t.imports[u],n.replace(/^(.+)\.(\w+)$/,function(e,t,n){return t+"_import"+u+"."+n})):this["import"](t.imports[u],n+"_import"+u):this["import"](t.imports[u]);s&&(this.importRoot=null)}t["package"]&&this.define(t["package"]),t.syntax&&r(t);var g=this.ptr;return t.options&&Object.keys(t.options).forEach(function(e){g.options[e]=t.options[e]}),t.messages&&(this.create(t.messages),this.ptr=g),t.enums&&(this.create(t.enums),this.ptr=g),t.services&&(this.create(t.services),this.ptr=g),t["extends"]&&this.create(t["extends"]),this.reset()},l.resolveAll=function(){var a;if(null==this.ptr||"object"===typeof this.ptr.type)return this;if(this.ptr instanceof n.Namespace)this.ptr.children.forEach(function(e){this.ptr=e,this.resolveAll()},this);else if(this.ptr instanceof n.Message.Field){if(t.TYPE.test(this.ptr.type))this.ptr.type=e.TYPES[this.ptr.type];else{if(!t.TYPEREF.test(this.ptr.type))throw Error("illegal type reference in "+this.ptr.toString(!0)+": "+this.ptr.type);if(a=(this.ptr instanceof n.Message.ExtensionField?this.ptr.extension.parent:this.ptr.parent).resolve(this.ptr.type,!0),!a)throw Error("unresolvable type reference in "+this.ptr.toString(!0)+": "+this.ptr.type);if(this.ptr.resolvedType=a,a instanceof n.Enum){if(this.ptr.type=e.TYPES["enum"],"proto3"===this.ptr.syntax&&"proto3"!==a.syntax)throw Error("proto3 message cannot reference proto2 enum")}else{if(!(a instanceof n.Message))throw Error("illegal type reference in "+this.ptr.toString(!0)+": "+this.ptr.type);this.ptr.type=a.isGroup?e.TYPES.group:e.TYPES.message}}if(this.ptr.map){if(!t.TYPE.test(this.ptr.keyType))throw Error("illegal key type for map field in "+this.ptr.toString(!0)+": "+this.ptr.keyType);this.ptr.keyType=e.TYPES[this.ptr.keyType]}}else if(this.ptr instanceof e.Reflect.Service.Method){if(!(this.ptr instanceof e.Reflect.Service.RPCMethod))throw Error("illegal service type in "+this.ptr.toString(!0));if(a=this.ptr.parent.resolve(this.ptr.requestName,!0),!a||!(a instanceof e.Reflect.Message))throw Error("Illegal type reference in "+this.ptr.toString(!0)+": "+this.ptr.requestName);if(this.ptr.resolvedRequestType=a,a=this.ptr.parent.resolve(this.ptr.responseName,!0),!a||!(a instanceof e.Reflect.Message))throw Error("Illegal type reference in "+this.ptr.toString(!0)+": "+this.ptr.responseName);this.ptr.resolvedResponseType=a}else if(!(this.ptr instanceof e.Reflect.Message.OneOf)&&!(this.ptr instanceof e.Reflect.Extension)&&!(this.ptr instanceof e.Reflect.Enum.Value))throw Error("illegal object in namespace: "+typeof this.ptr+": "+this.ptr);return this.reset()},l.build=function(e){if(this.reset(),this.resolved||(this.resolveAll(),this.resolved=!0,this.result=null),null===this.result&&(this.result=this.ns.build()),!e)return this.result;for(var t="string"===typeof e?e.split("."):e,n=this.result,a=0;a<t.length;a++){if(!n[t[a]]){n=null;break}n=n[t[a]]}return n},l.lookup=function(e,t){return e?this.ns.resolve(e,t):this.ns},l.toString=function(){return"Builder"},a.Message=function(){},a.Enum=function(){},a.Service=function(){},a}(l,l.Lang,l.Reflect),l.Map=function(e,t){var n=function(e,n){if(!e.map)throw Error("field is not a map");if(this.field=e,this.keyElem=new t.Element(e.keyType,null,!0,e.syntax),this.valueElem=new t.Element(e.type,e.resolvedType,!1,e.syntax),this.map={},Object.defineProperty(this,"size",{get:function(){return Object.keys(this.map).length}}),n)for(var a=Object.keys(n),l=0;l<a.length;l++){var r=this.keyElem.valueFromString(a[l]),i=this.valueElem.verifyValue(n[a[l]]);this.map[this.keyElem.valueToString(r)]={key:r,value:i}}},a=n.prototype;function l(e){var t=0;return{next:function(){return t<e.length?{done:!1,value:e[t++]}:{done:!0}}}}return a.clear=function(){this.map={}},a["delete"]=function(e){var t=this.keyElem.valueToString(this.keyElem.verifyValue(e)),n=t in this.map;return delete this.map[t],n},a.entries=function(){for(var e,t=[],n=Object.keys(this.map),a=0;a<n.length;a++)t.push([(e=this.map[n[a]]).key,e.value]);return l(t)},a.keys=function(){for(var e=[],t=Object.keys(this.map),n=0;n<t.length;n++)e.push(this.map[t[n]].key);return l(e)},a.values=function(){for(var e=[],t=Object.keys(this.map),n=0;n<t.length;n++)e.push(this.map[t[n]].value);return l(e)},a.forEach=function(e,t){for(var n,a=Object.keys(this.map),l=0;l<a.length;l++)e.call(t,(n=this.map[a[l]]).value,n.key,this)},a.set=function(e,t){var n=this.keyElem.verifyValue(e),a=this.valueElem.verifyValue(t);return this.map[this.keyElem.valueToString(n)]={key:n,value:a},this},a.get=function(e){var t=this.keyElem.valueToString(this.keyElem.verifyValue(e));if(t in this.map)return this.map[t].value},a.has=function(e){var t=this.keyElem.valueToString(this.keyElem.verifyValue(e));return t in this.map},n}(0,l.Reflect),l.loadProto=function(e,t,n){return("string"===typeof t||t&&"string"===typeof t.file&&"string"===typeof t.root)&&(n=t,t=void 0),l.loadJson(l.DotProto.Parser.parse(e),t,n)},l.protoFromString=l.loadProto,l.loadProtoFile=function(e,t,n){if(t&&"object"===typeof t?(n=t,t=null):t&&"function"===typeof t||(t=null),t)return l.Util.fetch("string"===typeof e?e:e.root+"/"+e.file,function(a){if(null!==a)try{t(null,l.loadProto(a,n,e))}catch(r){t(r)}else t(Error("Failed to fetch file"))});var a=l.Util.fetch("object"===typeof e?e.root+"/"+e.file:e);return null===a?null:l.loadProto(a,n,e)},l.protoFromFile=l.loadProtoFile,l.newBuilder=function(e){return e=e||{},"undefined"===typeof e.convertFieldsToCamelCase&&(e.convertFieldsToCamelCase=l.convertFieldsToCamelCase),"undefined"===typeof e.populateAccessors&&(e.populateAccessors=l.populateAccessors),new l.Builder(e)},l.loadJson=function(e,t,n){return("string"===typeof t||t&&"string"===typeof t.file&&"string"===typeof t.root)&&(n=t,t=null),t&&"object"===typeof t||(t=l.newBuilder()),"string"===typeof e&&(e=JSON.parse(e)),t["import"](e,n),t.resolveAll(),t},l.loadJsonFile=function(e,t,n){if(t&&"object"===typeof t?(n=t,t=null):t&&"function"===typeof t||(t=null),t)return l.Util.fetch("string"===typeof e?e:e.root+"/"+e.file,function(a){if(null!==a)try{t(null,l.loadJson(JSON.parse(a),n,e))}catch(r){t(r)}else t(Error("Failed to fetch file"))});var a=l.Util.fetch("object"===typeof e?e.root+"/"+e.file:e);return null===a?null:l.loadJson(JSON.parse(a),n,e)};var i=function(e){var t,n,a,l,r,i,o,s=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);i=e.length,r=0,o="";while(r<i){do{t=s[255&e.charCodeAt(r++)]}while(r<i&&-1==t);if(-1==t)break;do{n=s[255&e.charCodeAt(r++)]}while(r<i&&-1==n);if(-1==n)break;o+=String.fromCharCode(t<<2|(48&n)>>4);do{if(a=255&e.charCodeAt(r++),61==a)return o;a=s[a]}while(r<i&&-1==a);if(-1==a)break;o+=String.fromCharCode((15&n)<<4|(60&a)>>2);do{if(l=255&e.charCodeAt(r++),61==l)return o;l=s[l]}while(r<i&&-1==l);if(-1==l)break;o+=String.fromCharCode((3&a)<<6|l)}return o},o=i("cGFja2FnZSBNb2R1bGVzOwptZXNzYWdlIHByb2J1ZiB7CiAgICBtZXNzYWdlIFNldFVzZXJTdGF0dXNJbnB1dAogICAgewogICAgICAgIG9wdGlvbmFsIGludDMyIHN0YXR1cz0xOwogICAgfQoKICAgIG1lc3NhZ2UgU2V0VXNlclN0YXR1c091dHB1dAogICAgewogICAgICAgIG9wdGlvbmFsIGludDMyIG5vdGhpbmc9MTsKICAgIH0KCiAgICBtZXNzYWdlIEdldFVzZXJTdGF0dXNJbnB1dAogICAgewogICAgICAgIG9wdGlvbmFsIGludDMyIG5vdGhpbmc9MTsKICAgIH0KCiAgICBtZXNzYWdlIEdldFVzZXJTdGF0dXNPdXRwdXQKICAgIHsKICAgICAgICBvcHRpb25hbCBzdHJpbmcgc3RhdHVzPTE7Ly8mIzIzMTvClCYjMTY4OyYjMjMwO8KIJiMxODM7JiMyMjg7JiMxOTE7JiMxNjE7JiMyMzA7woEmIzE3NTsKICAgICAgICBvcHRpb25hbCBzdHJpbmcgc3ViVXNlcklkPTI7Ly8mIzIzMjsmIzE2MjsmIzE3MTsmIzIzMjsmIzE3NDsmIzE2MjsmIzIzMzvCmMKFJiMyMzI7woDChQogICAgfQoKICAgIG1lc3NhZ2UgU3ViVXNlclN0YXR1c0lucHV0CiAgICB7CiAgICAgICAgcmVwZWF0ZWQgc3RyaW5nIHVzZXJpZCA9MTsgIC8vJiMyMzE7wpQmIzE2ODsmIzIzMDvCiCYjMTgzOyYjMjI5O8KIwpcmIzIzMjsmIzE2MTsmIzE2ODsKICAgIH0KCiAgICBtZXNzYWdlIFN1YlVzZXJTdGF0dXNPdXRwdXQKICAgIHsKICAgICAgICBvcHRpb25hbCBpbnQzMiBub3RoaW5nPTE7ICAgIC8vJiMyMjk7wo0mIzE2MDsmIzIyODsmIzE4OTvCjQogICAgfQogICAgbWVzc2FnZSBWb2lwRHluYW1pY0lucHV0CiAgICB7CiAgICAgICAgcmVxdWlyZWQgaW50MzIgIGVuZ2luZVR5cGUgPSAxOwogICAgICAgIHJlcXVpcmVkIHN0cmluZyBjaGFubmVsTmFtZSA9IDI7CiAgICAgICAgb3B0aW9uYWwgc3RyaW5nIGNoYW5uZWxFeHRyYSA9IDM7CiAgICB9CgogICAgbWVzc2FnZSBWb2lwRHluYW1pY091dHB1dAogICAgewogICAgICAgICByZXF1aXJlZCBzdHJpbmcgZHluYW1pY0tleT0xOwogICAgfQogICAgbWVzc2FnZSBOb3RpZnlNc2cgewogICAgICAgIHJlcXVpcmVkIGludDMyIHR5cGUgPSAxOwogICAgICAgIG9wdGlvbmFsIGludDY0IHRpbWUgPSAyOwogICAgICAgIG9wdGlvbmFsIHN0cmluZyBjaHJtSWQ9MzsKICAgIH0KICAgIG1lc3NhZ2UgU3luY1JlcXVlc3RNc2cgewogICAgICAgIHJlcXVpcmVkIGludDY0IHN5bmNUaW1lID0gMTsKICAgICAgICByZXF1aXJlZCBib29sIGlzcG9sbGluZyA9IDI7CiAgICAgICAgb3B0aW9uYWwgYm9vbCBpc3dlYj0zOwogICAgICAgIG9wdGlvbmFsIGJvb2wgaXNQdWxsU2VuZD00OwogICAgICAgIG9wdGlvbmFsIGJvb2wgaXNLZWVwaW5nPTU7CiAgICAgICAgb3B0aW9uYWwgaW50NjQgc2VuZEJveFN5bmNUaW1lPTY7CiAgICB9CiAgICBtZXNzYWdlIFVwU3RyZWFtTWVzc2FnZSB7CiAgICAgICAgcmVxdWlyZWQgaW50MzIgc2Vzc2lvbklkID0gMTsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgY2xhc3NuYW1lID0gMjsKICAgICAgICByZXF1aXJlZCBieXRlcyBjb250ZW50ID0gMzsKICAgICAgICBvcHRpb25hbCBzdHJpbmcgcHVzaFRleHQgPSA0OwogICAgICAgIG9wdGlvbmFsIHN0cmluZyBhcHBEYXRhID0gNTsKICAgICAgICByZXBlYXRlZCBzdHJpbmcgdXNlcklkID0gNjsKICAgIH0KICAgIG1lc3NhZ2UgRG93blN0cmVhbU1lc3NhZ2VzIHsKICAgICAgICByZXBlYXRlZCBEb3duU3RyZWFtTWVzc2FnZSBsaXN0ID0gMTsKICAgICAgICByZXF1aXJlZCBpbnQ2NCBzeW5jVGltZSA9IDI7CiAgICAgICAgb3B0aW9uYWwgYm9vbCBmaW5pc2hlZCA9IDM7CiAgICB9CiAgICBtZXNzYWdlIERvd25TdHJlYW1NZXNzYWdlIHsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgZnJvbVVzZXJJZCA9IDE7CiAgICAgICAgcmVxdWlyZWQgQ2hhbm5lbFR5cGUgdHlwZSA9IDI7CiAgICAgICAgb3B0aW9uYWwgc3RyaW5nIGdyb3VwSWQgPSAzOwogICAgICAgIHJlcXVpcmVkIHN0cmluZyBjbGFzc25hbWUgPSA0OwogICAgICAgIHJlcXVpcmVkIGJ5dGVzIGNvbnRlbnQgPSA1OwogICAgICAgIHJlcXVpcmVkIGludDY0IGRhdGFUaW1lID0gNjsKICAgICAgICByZXF1aXJlZCBpbnQ2NCBzdGF0dXMgPSA3OwogICAgICAgIG9wdGlvbmFsIGludDY0IGV4dHJhID0gODsKICAgICAgICBvcHRpb25hbCBzdHJpbmcgbXNnSWQgPSA5OwogICAgICAgIG9wdGlvbmFsIGludDMyIGRpcmVjdGlvbiA9IDEwOyAKICAgIH0KICAgIGVudW0gQ2hhbm5lbFR5cGUgewogICAgICAgIFBFUlNPTiA9IDE7CiAgICAgICAgUEVSU09OUyA9IDI7CiAgICAgICAgR1JPVVAgPSAzOwogICAgICAgIFRFTVBHUk9VUCA9IDQ7CiAgICAgICAgQ1VTVE9NRVJTRVJWSUNFID0gNTsKICAgICAgICBOT1RJRlkgPSA2OwogICAgICAgIE1DPTc7CiAgICAgICAgTVA9ODsKICAgIH0KICAgIG1lc3NhZ2UgQ3JlYXRlRGlzY3Vzc2lvbklucHV0IHsKICAgICAgICBvcHRpb25hbCBzdHJpbmcgbmFtZSA9IDE7CiAgICB9CiAgICBtZXNzYWdlIENyZWF0ZURpc2N1c3Npb25PdXRwdXQgewogICAgICAgIHJlcXVpcmVkIHN0cmluZyBpZCA9IDE7CiAgICB9CiAgICBtZXNzYWdlIENoYW5uZWxJbnZpdGF0aW9uSW5wdXQgewogICAgICAgIHJlcGVhdGVkIHN0cmluZyB1c2VycyA9IDE7CiAgICB9CiAgICBtZXNzYWdlIExlYXZlQ2hhbm5lbElucHV0IHsKICAgICAgICByZXF1aXJlZCBpbnQzMiBub3RoaW5nID0gMTsKICAgIH0KICAgIG1lc3NhZ2UgQ2hhbm5lbEV2aWN0aW9uSW5wdXQgewogICAgICAgIHJlcXVpcmVkIHN0cmluZyB1c2VyID0gMTsKICAgIH0KICAgIG1lc3NhZ2UgUmVuYW1lQ2hhbm5lbElucHV0IHsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgbmFtZSA9IDE7CiAgICB9CiAgICBtZXNzYWdlIENoYW5uZWxJbmZvSW5wdXQgewogICAgICAgIHJlcXVpcmVkIGludDMyIG5vdGhpbmcgPSAxOwogICAgfQogICAgbWVzc2FnZSBDaGFubmVsSW5mb091dHB1dCB7CiAgICAgICAgcmVxdWlyZWQgQ2hhbm5lbFR5cGUgdHlwZSA9IDE7CiAgICAgICAgcmVxdWlyZWQgc3RyaW5nIGNoYW5uZWxJZCA9IDI7CiAgICAgICAgcmVxdWlyZWQgc3RyaW5nIGNoYW5uZWxOYW1lID0gMzsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgYWRtaW5Vc2VySWQgPSA0OwogICAgICAgIHJlcGVhdGVkIHN0cmluZyBmaXJzdFRlblVzZXJJZHMgPSA1OwogICAgICAgIHJlcXVpcmVkIGludDMyIG9wZW5TdGF0dXMgPSA2OwogICAgfQogICAgbWVzc2FnZSBDaGFubmVsSW5mb3NJbnB1dCB7CiAgICAgICAgcmVxdWlyZWQgaW50MzIgcGFnZSA9IDE7CiAgICAgICAgb3B0aW9uYWwgaW50MzIgbnVtYmVyID0gMjsKICAgIH0KICAgIG1lc3NhZ2UgQ2hhbm5lbEluZm9zT3V0cHV0IHsKICAgICAgICByZXBlYXRlZCBDaGFubmVsSW5mb091dHB1dCBjaGFubmVscyA9IDE7CiAgICAgICAgcmVxdWlyZWQgaW50MzIgdG90YWwgPSAyOwogICAgfQogICAgbWVzc2FnZSBNZW1iZXJJbmZvIHsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgdXNlcklkID0gMTsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgdXNlck5hbWUgPSAyOwogICAgICAgIHJlcXVpcmVkIHN0cmluZyB1c2VyUG9ydHJhaXQgPSAzOwogICAgICAgIHJlcXVpcmVkIHN0cmluZyBleHRlbnNpb24gPSA0OwogICAgfQogICAgbWVzc2FnZSBHcm91cE1lbWJlcnNJbnB1dCB7CiAgICAgICAgcmVxdWlyZWQgaW50MzIgcGFnZSA9IDE7CiAgICAgICAgb3B0aW9uYWwgaW50MzIgbnVtYmVyID0gMjsKICAgIH0KICAgIG1lc3NhZ2UgR3JvdXBNZW1iZXJzT3V0cHV0IHsKICAgICAgICByZXBlYXRlZCBNZW1iZXJJbmZvIG1lbWJlcnMgPSAxOwogICAgICAgIHJlcXVpcmVkIGludDMyIHRvdGFsID0gMjsKICAgIH0KICAgIG1lc3NhZ2UgR2V0VXNlckluZm9JbnB1dCB7CiAgICAgICAgcmVxdWlyZWQgaW50MzIgbm90aGluZyA9IDE7CiAgICB9CiAgICBtZXNzYWdlIEdldFVzZXJJbmZvT3V0cHV0IHsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgdXNlcklkID0gMTsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgdXNlck5hbWUgPSAyOwogICAgICAgIHJlcXVpcmVkIHN0cmluZyB1c2VyUG9ydHJhaXQgPSAzOwogICAgfQogICAgbWVzc2FnZSBHZXRTZXNzaW9uSWRJbnB1dCB7CiAgICAgICAgcmVxdWlyZWQgaW50MzIgbm90aGluZyA9IDE7CiAgICB9CiAgICBtZXNzYWdlIEdldFNlc3Npb25JZE91dHB1dCB7CiAgICAgICAgcmVxdWlyZWQgaW50MzIgc2Vzc2lvbklkID0gMTsKICAgIH0KICAgIGVudW0gRmlsZVR5cGUgewogICAgICAgIGltYWdlID0gMTsKICAgICAgICBhdWRpbyA9IDI7CiAgICAgICAgdmlkZW8gPSAzOwogICAgICAgIGZpbGUgPSA0OwogICAgfQogICAgbWVzc2FnZSBHZXRRTnVwVG9rZW5JbnB1dCB7CiAgICAgICAgcmVxdWlyZWQgRmlsZVR5cGUgdHlwZSA9IDE7CiAgICB9CiAgICBtZXNzYWdlIEdldFFOZG93bmxvYWRVcmxJbnB1dCB7CiAgICAgICAgcmVxdWlyZWQgRmlsZVR5cGUgdHlwZSA9IDE7CiAgICAgICAgcmVxdWlyZWQgc3RyaW5nIGtleSA9IDI7CiAgICAgICAgb3B0aW9uYWwgc3RyaW5nICBmaWxlTmFtZSA9IDM7CiAgICB9CiAgICBtZXNzYWdlIEdldFFOdXBUb2tlbk91dHB1dCB7CiAgICAgICAgcmVxdWlyZWQgaW50NjQgZGVhZGxpbmUgPSAxOwogICAgICAgIHJlcXVpcmVkIHN0cmluZyB0b2tlbiA9IDI7CiAgICB9CiAgICBtZXNzYWdlIEdldFFOZG93bmxvYWRVcmxPdXRwdXQgewogICAgICAgIHJlcXVpcmVkIHN0cmluZyBkb3dubG9hZFVybCA9IDE7CiAgICB9CiAgICBtZXNzYWdlIEFkZDJCbGFja0xpc3RJbnB1dCB7CiAgICAgICAgcmVxdWlyZWQgc3RyaW5nIHVzZXJJZCA9IDE7CiAgICB9CiAgICBtZXNzYWdlIFJlbW92ZUZyb21CbGFja0xpc3RJbnB1dCB7CiAgICAgICAgcmVxdWlyZWQgc3RyaW5nIHVzZXJJZCA9IDE7CiAgICB9CiAgICBtZXNzYWdlIFF1ZXJ5QmxhY2tMaXN0SW5wdXQgewogICAgICAgIHJlcXVpcmVkIGludDMyIG5vdGhpbmcgPSAxOwogICAgfQogICAgbWVzc2FnZSBRdWVyeUJsYWNrTGlzdE91dHB1dCB7CiAgICAgICAgcmVwZWF0ZWQgc3RyaW5nIHVzZXJJZHMgPSAxOwogICAgfQogICAgbWVzc2FnZSBCbGFja0xpc3RTdGF0dXNJbnB1dCB7CiAgICAgICAgcmVxdWlyZWQgc3RyaW5nIHVzZXJJZCA9IDE7CiAgICB9CiAgICBtZXNzYWdlIEJsb2NrUHVzaElucHV0IHsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgYmxvY2tlZUlkID0gMTsKICAgIH0KICAgIG1lc3NhZ2UgTW9kaWZ5UGVybWlzc2lvbklucHV0IHsKICAgICAgICByZXF1aXJlZCBpbnQzMiBvcGVuU3RhdHVzID0gMTsKICAgIH0KICAgIG1lc3NhZ2UgR3JvdXBJbnB1dCB7CiAgICAgICAgcmVwZWF0ZWQgR3JvdXBJbmZvIGdyb3VwSW5mbyA9IDE7CiAgICB9CiAgICBtZXNzYWdlIEdyb3VwT3V0cHV0IHsKICAgICAgICByZXF1aXJlZCBpbnQzMiBub3RoaW5nID0gMTsKICAgIH0KICAgIG1lc3NhZ2UgR3JvdXBJbmZvIHsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgaWQgPSAxOwogICAgICAgIHJlcXVpcmVkIHN0cmluZyBuYW1lID0gMjsKICAgIH0KICAgIG1lc3NhZ2UgR3JvdXBIYXNoSW5wdXQgewogICAgICAgIHJlcXVpcmVkIHN0cmluZyB1c2VySWQgPSAxOwogICAgICAgIHJlcXVpcmVkIHN0cmluZyBncm91cEhhc2hDb2RlID0gMjsKICAgIH0KICAgIG1lc3NhZ2UgR3JvdXBIYXNoT3V0cHV0IHsKICAgICAgICByZXF1aXJlZCBHcm91cEhhc2hUeXBlIHJlc3VsdCA9IDE7CiAgICB9CiAgICBlbnVtIEdyb3VwSGFzaFR5cGUgewogICAgICAgIGdyb3VwX3N1Y2Nlc3MgPSAweDAwOwogICAgICAgIGdyb3VwX2ZhaWx1cmUgPSAweDAxOwogICAgfQogICAgbWVzc2FnZSBDaHJtSW5wdXQgewogICAgICAgIHJlcXVpcmVkIGludDMyIG5vdGhpbmcgPSAxOwogICAgfQogICAgbWVzc2FnZSBDaHJtT3V0cHV0IHsKICAgICAgICByZXF1aXJlZCBpbnQzMiBub3RoaW5nID0gMTsKICAgIH0KICAgIG1lc3NhZ2UgQ2hybVB1bGxNc2cgewogICAgICAgIHJlcXVpcmVkIGludDY0IHN5bmNUaW1lID0gMTsKICAgICAgICByZXF1aXJlZCBpbnQzMiBjb3VudCA9IDI7CiAgICB9CiAgICAKICAgIG1lc3NhZ2UgQ2hybVB1bGxNc2dOZXcgIC8vJiMyMjk7JiMxNzQ7JiMxNjI7JiMyMzA7wogmIzE4MzsmIzIzMTsmIzE3MTsmIzE3NTsmIzIzMDvCliYjMTc2OyYjMjMxO8KawoQmIzIzMDvCi8KJJiMyMjk7wo/CliYjMjMyO8KBwoomIzIyOTsmIzE2NDsmIzE2OTsmIzIyOTsmIzE3NDsmIzE2NDsmIzIzMDsmIzE4MjvCiCYjMjMwO8KBJiMxNzU7CiAgICB7CiAgICAgcmVxdWlyZWQgaW50MzIgY291bnQgPSAxOy8vJiMyMzA7wovCiSYjMjI5O8KPwpYmIzIzMDvCnSYjMTYxOyYjMjMwO8KVJiMxNzY7ICAgMDomIzIzMzvCgMKaJiMyMzE7wp8mIzE2NTsmIzIzMDvCi8KJJiMyMjk7wo/CliAgICYjMjMzO8Kdwp4wJiMyMzk7JiMxODg7wpomIzIyODsmIzE4NDsmIzE4NzsmIzIyOTvCiiYjMTY4OyYjMjMwO8KLwokmIzIyOTvCj8KWJiMyMjk7wo7ChiYjMjI5O8KPJiMxNzg7JiMyMzA7JiMxODI7wogmIzIzMDvCgSYjMTc1OyYjMjMwO8KdJiMxNjE7JiMyMzA7wpUmIzE3NjsKICAgICByZXF1aXJlZCBpbnQ2NCBzeW5jVGltZSA9IDI7Ly8mIzIyOTvCkMKMJiMyMzA7JiMxNzM7JiMxNjU7JiMyMzA7wovCiSYjMjI5O8KPwpYmIzIzMDvClyYjMTgyOyYjMjMzO8KXJiMxODA7CiAgICAgb3B0aW9uYWwgc3RyaW5nIGNocm1JZD0zOy8vJiMyMzI7woHCiiYjMjI5OyYjMTY0OyYjMTY5OyYjMjI5OyYjMTc0OyYjMTY0O0lECiAgICB9CiAgICAKICAgIG1lc3NhZ2UgUmVsYXRpb25zSW5wdXQKICAgIHsKICAgICAgICByZXF1aXJlZCBDaGFubmVsVHlwZSB0eXBlID0gMTsKICAgICAgICBvcHRpb25hbCBEb3duU3RyZWFtTWVzc2FnZSBtc2cgPTI7CiAgICAgICAgb3B0aW9uYWwgaW50MzIgY291bnQgPSAzOwogICAgICAgIG9wdGlvbmFsIGludDMyIG9mZnNldCA9IDQ7CiAgICAgICAgb3B0aW9uYWwgaW50NjQgc3RhcnRUaW1lID0gNTsKICAgICAgICBvcHRpb25hbCBpbnQ2NCBlbmRUaW1lID0gNjsKICAgIH0KICAgIG1lc3NhZ2UgUmVsYXRpb25zT3V0cHV0CiAgICB7CiAgICAgICAgcmVwZWF0ZWQgUmVsYXRpb25JbmZvIGluZm8gPSAxOwogICAgfQogICAgbWVzc2FnZSBSZWxhdGlvbkluZm8KICAgIHsKICAgICAgICByZXF1aXJlZCBDaGFubmVsVHlwZSB0eXBlID0gMTsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgdXNlcklkID0gMjsKICAgICAgICBvcHRpb25hbCBEb3duU3RyZWFtTWVzc2FnZSBtc2cgPTM7CiAgICAgICAgb3B0aW9uYWwgaW50NjQgcmVhZE1zZ1RpbWU9IDQ7CiAgICB9CiAgICBtZXNzYWdlIFJlbGF0aW9uSW5mb1JlYWRUaW1lCiAgICB7CiAgICAgICAgcmVxdWlyZWQgQ2hhbm5lbFR5cGUgdHlwZSA9IDE7CiAgICAgICAgcmVxdWlyZWQgaW50NjQgcmVhZE1zZ1RpbWU9IDI7CiAgICAgICAgcmVxdWlyZWQgc3RyaW5nIHRhcmdldElkID0gMzsKICAgIH0KICAgIG1lc3NhZ2UgQ2xlYW5IaXNNc2dJbnB1dAogICAgewogICAgICAgICByZXF1aXJlZCBzdHJpbmcgdGFyZ2V0SWQgPSAxOy8vJiMyMjk7wo8mIzE3NTsmIzIzMjvCgyYjMTg5OyYjMjMwO8KYJiMxNzU7JiMyMzE7wpQmIzE2ODsmIzIzMDvCiCYjMTgzO2lkJiMyMzk7JiMxODg7wowmIzIzMTsmIzE5MDsmIzE2NDsmIzIzMTsmIzE4NzvChGlkJiMyMzE7JiMxNzM7wokmIzIyNzvCgMKCCiAgICAgICAgIHJlcXVpcmVkIGludDY0IGRhdGFUaW1lID0gMjsvLyYjMjMwOyYjMTg0O8KFJiMyMzM7wpkmIzE2NDsmIzIzMDvClyYjMTgyOyYjMjMzO8KXJiMxODA7CiAgICAgICAgIG9wdGlvbmFsIGludDMyIGNvbnZlcnNhdGlvblR5cGU9IDM7Ly8gJiMyMjk7JiMxNjQ7wocmIzIzMzvCgMKJJiMyMjk7JiMxNzM7wpcmIzIzMDsmIzE3NDsmIzE4MTsmIzIzMDvCmsKCJiMyMjg7JiMxODQ7wo0mIzIzMzvCnMKAJiMyMzI7JiMxNjY7woEKICAgIH0KICAgIG1lc3NhZ2UgSGlzdG9yeU1lc3NhZ2VJbnB1dAogICAgewogICAgICAgIHJlcXVpcmVkIHN0cmluZyB0YXJnZXRJZCA9IDE7CiAgICAgICAgcmVxdWlyZWQgaW50NjQgZGF0YVRpbWUgPTI7CiAgICAgICAgcmVxdWlyZWQgaW50MzIgc2l6ZSAgPSAzOwogICAgfQoKICAgIG1lc3NhZ2UgSGlzdG9yeU1lc3NhZ2VzT3VwdXQKICAgIHsKICAgICAgICByZXBlYXRlZCBEb3duU3RyZWFtTWVzc2FnZSBsaXN0ID0gMTsKICAgICAgICByZXF1aXJlZCBpbnQ2NCBzeW5jVGltZSA9IDI7CiAgICAgICAgcmVxdWlyZWQgaW50MzIgaGFzTXNnID0gMzsKICAgIH0KICAgIG1lc3NhZ2UgUXVlcnlDaGF0cm9vbUluZm9JbnB1dAogICAgewogICAgIHJlcXVpcmVkIGludDMyIGNvdW50PSAxOy8vJiMyMzA7wpzCnyYjMjMwO8KcwpsmIzIzMjvCjiYjMTgzOyYjMjI5O8KPwpYmIzIzMjvCgcKKJiMyMjk7JiMxNjQ7JiMxNjk7JiMyMjk7JiMxNzQ7JiMxNjQ7JiMyMzE7wpQmIzE2ODsmIzIzMDvCiCYjMTgzOyYjMjMxO8KawoQmIzIyODsmIzE4NjsmIzE4NjsmIzIzMDvClSYjMTc2OyYjMjM5OyYjMTg4O8KMJiMyMzI7wozCgyYjMjI5O8KbJiMxODA7JiMyMjg7JiMxODQ7JiMxODY7MH4yMAogICAgIG9wdGlvbmFsIGludDMyIG9yZGVyPSAyOy8vJiMyMzA7wozCiSYjMjMwO8KXJiMxODI7JiMyMzM7wpcmIzE4MDsmIzIzMDvCjsKSJiMyMjk7JiMxODY7wo8mIzIzOTsmIzE4ODvCjCYjMjMyO8KMwoMmIzIyOTvCmyYjMTgwOyYjMjM5OyYjMTg4O8KaMCYjMjM5OyYjMTg4O8KMMSYjMjM5OyYjMTg4O8KMMi4mIzIzOTsmIzE4ODvCiDA6JiMyMjg7JiMxODQ7wo0mIzIzMjsmIzE5MTvClCYjMjI5O8Kbwp4mIzIzOTsmIzE4ODvCmzE6JiMyMzA7JiMxNzM7JiMxNjM7JiMyMjk7JiMxODY7wo8oJiMyMzA7wpzCgCYjMjMwO8KXJiMxNjk7JiMyMjk7woomIzE2MDsmIzIyOTvChSYjMTY1OykmIzIzOTsmIzE4ODvCmzI6JiMyMjk7woDCkiYjMjI5OyYjMTg2O8KPKCYjMjMwO8KcwoAmIzIzMDvCmcKaJiMyMjk7woomIzE2MDsmIzIyOTvChSYjMTY1OykmIzIzOTsmIzE4ODvCiQogICAgfQoKICAgIG1lc3NhZ2UgUXVlcnlDaGF0cm9vbUluZm9PdXRwdXQKICAgIHsKICAgICBvcHRpb25hbCBpbnQzMiB1c2VyVG90YWxOdW1zID0gMTsvLyYjMjI5OyYjMTg5O8KTJiMyMjk7wonCjSYjMjMyO8KBwoomIzIyOTsmIzE2NDsmIzE2OTsmIzIyOTsmIzE3NDsmIzE2NDsmIzIyODsmIzE4NDsmIzE3MzsmIzIzMTvCmsKEJiMyMzA7woAmIzE4NzsmIzIyODsmIzE4NjsmIzE4NjsmIzIzMDvClSYjMTc2OwogICAgIHJlcGVhdGVkIENocm1NZW1iZXIgdXNlckluZm9zID0gMjsvLyYjMjMyOyYjMTkxO8KUJiMyMjk7wpvCniYjMjMzO8KDJiMxNjg7JiMyMjk7wojChiYjMjMxO8KUJiMxNjg7JiMyMzA7wogmIzE4MzsmIzIyODsmIzE5MTsmIzE2MTsmIzIzMDvCgSYjMTc1OyYjMjI5O8KIwpcmIzIzMjsmIzE2MTsmIzE2ODsmIzIzOTsmIzE4ODvCiCYjMjI5O8KPJiMxNzA7JiMyMjk7wozChSYjMjI5O8KQJiMxNzE7dXNlcklkJiMyMjk7wpLCjGpvaW5UaW1lJiMyMjk7JiMxNzc7wp4mIzIzMDvCgCYjMTY3OyYjMjM5OyYjMTg4O8KJCiAgICB9CiAgICBtZXNzYWdlIENocm1NZW1iZXIKICAgIHsKICAgICByZXF1aXJlZCBpbnQ2NCB0aW1lID0gMTsvL01lbWJlciYjMjMxO8KawoRqb2luVGltZQogICAgIHJlcXVpcmVkIHN0cmluZyBpZCA9IDI7Ly9NZW1iZXImIzIzMTvCmsKEdXNlcklkCiAgICB9CiAgICBtZXNzYWdlIE1QRm9sbG93SW5wdXQgIC8vbXAmIzIyOTvChSYjMTc5OyYjMjMwOyYjMTc5OyYjMTY4Oy8mIzIyOTvCj8KWJiMyMzA7JiMxODI7wogmIzIyOTvChSYjMTc5OyYjMjMwOyYjMTc5OyYjMTY4OwogICAgewogICAgICAgIHJlcXVpcmVkIHN0cmluZyBpZCA9IDE7Ly9tcGlkCiAgICB9CgogICAgbWVzc2FnZSBNUEZvbGxvd091dHB1dAogICAgewogICAgICAgIHJlcXVpcmVkIGludDMyIG5vdGhpbmcgPSAxOy8vJiMyMjk7wo0mIzE2MDsmIzIyODsmIzE4OTvCjSYjMjI5OyYjMTczO8KXJiMyMzA7JiMxNzQ7JiMxODE7CiAgICAgICAgb3B0aW9uYWwgTXBJbmZvIGluZm8gPTI7Ly8mIzIyOTvChSYjMTc5OyYjMjMwOyYjMTc5OyYjMTY4OyYjMjMxO8KawoRtcGluZm8KICAgIH0KCiAgICBtZXNzYWdlIE1DRm9sbG93SW5wdXQgICAvL21jJiMyMjk7woUmIzE3OTsmIzIzMDsmIzE3OTsmIzE2ODsvJiMyMjk7wo/CliYjMjMwOyYjMTgyO8KIJiMyMjk7woUmIzE3OTsmIzIzMDsmIzE3OTsmIzE2ODsKICAgIHsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgaWQgPSAxOy8vbWNpZAogICAgfQoKICAgIG1lc3NhZ2UgTUNGb2xsb3dPdXRwdXQKICAgIHsKICAgICAgICByZXF1aXJlZCBpbnQzMiBub3RoaW5nID0gMTsvLyYjMjI5O8KNJiMxNjA7JiMyMjg7JiMxODk7wo0mIzIyOTsmIzE3MzvClyYjMjMwOyYjMTc0OyYjMTgxOwogICAgICAgIG9wdGlvbmFsIE1wSW5mbyBpbmZvID0yOy8vJiMyMjk7woUmIzE3OTsmIzIzMDsmIzE3OTsmIzE2ODsmIzIzMTvCmsKEbXBpbmZvCiAgICB9CgogICAgbWVzc2FnZSBNcEluZm8gIC8vbXAmIzIyOTvCnyYjMTg2OyYjMjMwO8KcJiMxNzI7JiMyMjg7JiMxOTE7JiMxNjE7JiMyMzA7woEmIzE3NTsKICAgIHsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgbXBpZD0xOy8vbXAvbWNpZAogICAgICAgIHJlcXVpcmVkIHN0cmluZyBuYW1lID0gMjsvL2Rpc3BsYXlOYW1lCiAgICAgICAgcmVxdWlyZWQgc3RyaW5nIHR5cGUgPSAzOy8vbXAvbWMKICAgICAgICByZXF1aXJlZCBpbnQ2NCB0aW1lPTQ7Ly8mIzIyOTvChSYjMTcyOyYjMjI4OyYjMTg4O8KXJiMyMjk7JiMxODQ7wpAmIzIyOTvCjyYjMTgzOyYjMjI4OyYjMTkxOyYjMTc0OyYjMjMwO8KUJiMxODU7JiMyMzA7wpcmIzE4MjsmIzIzMzvClyYjMTgwOwogICAgICAgIG9wdGlvbmFsIHN0cmluZyBwb3J0cmFpdFVybD01Oy8vJiMyMjk7JiMxNjQ7JiMxODA7JiMyMjk7woPCjwogICAgICAgIG9wdGlvbmFsIHN0cmluZyBleHRyYSA9NjsvLyYjMjI5O8KFJiMxODI7JiMyMjg7JiMxODc7wpYmIzIyODsmIzE5MTsmIzE2MTsmIzIzMDvCgSYjMTc1Oyhqc29uKSYjMjM5OyYjMTg4O8KMJiMyMzA7wovCiSYjMjI5O8KPwpYmIzIzMTvCmsKEJiMyMzA7wpcmIzE4MjsmIzIyOTvCgMKZJiMyMjk7wozChSYjMjI5O8KQJiMxNzE7JiMyMzI7wo/CnCYjMjI5O8KNwpUmIzIyNzvCgMKBJiMyMzE7JiMxNzQ7woAmIzIyODsmIzE4NzvCiyYjMjMxOyYjMTczO8KJJiMyMjg7JiMxOTE7JiMxNjE7JiMyMzA7woEmIzE3NTsmIzIyNzvCgMKCCiAgICB9CgogICAgbWVzc2FnZSBTZWFyY2hNcElucHV0IC8vJiMyMzA7JiMxNjA7JiMxODU7JiMyMzA7wo0mIzE3NDsmIzIyOTvChSYjMTcyOyYjMjI4OyYjMTg4O8KXJiMyMjk7JiMxODQ7wpAmIzIyOTvCjyYjMTgzO2lkJiMyMjk7JiMxNzQ7wowmIzIyOTvChSYjMTY4OyYjMjI5O8KMJiMxODU7JiMyMzM7woXCjSYjMjMwO8KfJiMxNjU7JiMyMzA7wokmIzE5MDsKICAgIHsKICAgICAgICByZXF1aXJlZCBpbnQzMiB0eXBlPTE7Ly8mIzIzMDsmIzE2MDvChyYjMjI5OyYjMTkxO8KXJiMyMjg7JiMxODk7wo0sJiMyMzA7wpcmIzE2NTsmIzIyOTvCkMKOJiMyMzA7wozCiSYjMjI4OyYjMTg5O8KNJiMyMzA7wp0mIzE2NTsmIzIyOTvCgcKaJiMyMzA7wokmIzE2OTsmIzIyOTsmIzE3NzvClQogICAgICAgIHJlcXVpcmVkIHN0cmluZyBpZD0yOy8vbXBpZC9tY2lkL2Rpc3BsYXlOYW1lCiAgICB9CgogICAgbWVzc2FnZSBTZWFyY2hNcE91dHB1dAogICAgewogICAgICAgIHJlcXVpcmVkIGludDMyIG5vdGhpbmc9MTsvLyYjMjI5O8KNJiMxNjA7JiMyMjg7JiMxODk7wo0mIzIzMTsmIzE3MjsmIzE2NjsKICAgICAgICByZXBlYXRlZCBNcEluZm8gaW5mbyA9IDI7Ly8mIzIyOTvChSYjMTcyOyYjMjI4OyYjMTg4O8KXJiMyMjk7JiMxODQ7wpAmIzIyOTvCjyYjMTgzOwogICAgfQoKICAgIG1lc3NhZ2UgUHVsbE1wSW5wdXQgLy8mIzIzMTsmIzE3MTsmIzE3NTsmIzIyODsmIzE4NDvCiiYjMjMwO8KLwokmIzIyOTvCj8KWJiMyMjk7woUmIzE3MjsmIzIyODsmIzE4ODvClyYjMjMyOyYjMTgwOyYjMTY2OyYjMjI5O8KPJiMxODM7JiMyMjg7JiMxOTE7JiMxNjE7JiMyMzA7woEmIzE3NTsKICAgIHsKICAgICAgICByZXF1aXJlZCBpbnQ2NCB0aW1lPTE7Ly8mIzIyOTvChSYjMTcyOyYjMjI4OyYjMTg4O8KXJiMyMjk7JiMxODQ7wpAmIzIyOTvCjyYjMTgzOyYjMjI4OyYjMTkxOyYjMTc0OyYjMjMwO8KUJiMxODU7JiMyMzA7wpcmIzE4MjsmIzIzMzvClyYjMTgwOwogICAgICAgIHJlcXVpcmVkIHN0cmluZyBtcGlkPTI7Ly8mIzIzMTsmIzE3MTsmIzE3NTsmIzIyODsmIzE4NDvCiiYjMjMxOyYjMTg4O8KTJiMyMjk7JiMxNzM7wpgmIzIyOTvChSYjMTcyOyYjMjI4OyYjMTg4O8KXJiMyMjk7JiMxODQ7wpAmIzIyOTvCjyYjMTgzOyYjMjMxO8KawoRpZCYjMjMxO8KawoRtZDUmIzIyODsmIzE4NDsmIzE3ODsKICAgIH0KCiAgICBtZXNzYWdlIFB1bGxNcE91dHB1dAogICAgewogICAgICAgIHJlcXVpcmVkIGludDMyIHN0YXR1cz0xOy8vJiMyMzA7wpgmIzE3NTsmIzIyOTvCkCYjMTY2OyYjMjMwO8KcwokmIzIzMDsmIzE4MzsmIzE4NzsmIzIyOTvCiiYjMTYwOyYjMjI5O8KSwowmIzIyOTvCiCYjMTYwOyYjMjMzO8KZJiMxNjQ7JiMyMzk7JiMxODg7wowmIzIyOTsmIzE2NjvCgiYjMjMwO8KewpwmIzIzMDvCnMKJJiMyMjk7wo/CmCYjMjI5O8KMwpYmIzIyOTvCiMKZJiMyMzI7JiMxOTE7wpQmIzIyOTvCm8KeJiMyMjk7woUmIzE2ODsmIzIzMzvCgyYjMTY4OyYjMjM5OyYjMTg4O8KMJiMyMjk7wpAmIzE2NjsmIzIyOTvCiMKZJiMyMzI7JiMxOTE7wpQmIzIyOTvCm8KeJiMyMzA7wpsmIzE4MDsmIzIzMDvCliYjMTc2OyYjMjMxO8KawoQKICAgICAgICByZXBlYXRlZCBNcEluZm8gaW5mbyA9IDI7Ly8mIzIyOTvChSYjMTcyOyYjMjI4OyYjMTg4O8KXJiMyMjk7JiMxODQ7wpAmIzIyOTvCjyYjMTgzOwogICAgfQogICAgbWVzc2FnZSBIaXN0b3J5TXNnSW5wdXQgIAogICAgewogICAgICAgIG9wdGlvbmFsIHN0cmluZyB0YXJnZXRJZCA9IDE7Ly8mIzIzMjvCgcKKJiMyMjk7JiMxNjQ7JiMxNjk7JiMyMjk7JiMxNzQ7JiMxNjQ7SUQKICAgICAgICBvcHRpb25hbCBpbnQ2NCB0aW1lID0gMjsvLyYjMjMwO8KfJiMxNjU7JiMyMzI7JiMxNzU7JiMxNjI7JiMyMzA7wpcmIzE4MjsmIzIzMzvClyYjMTgwOyYjMjMxO8KCJiMxODU7CiAgICAgICAgb3B0aW9uYWwgaW50MzIgY291bnQgID0gMzsvLyYjMjMwO8KLwokmIzIyOTvCj8KWJiMyMzA7wp0mIzE2MTsmIzIzMDvClSYjMTc2OwogICAgICAgIG9wdGlvbmFsIGludDMyIG9yZGVyID0gNDsvLyYjMjMwO8KLwokmIzIyOTvCj8KWJiMyMzM7JiMxNjE7JiMxODY7JiMyMjk7JiMxODY7wo8gKDEmIzIzOTsmIzE4ODvCmiYjMjMwOyYjMTczOyYjMTYzOyYjMjI5OyYjMTg2O8KPJiMyMzk7JiMxODg7wpswJiMyMzk7JiMxODg7wpomIzIyOTvCgMKSJiMyMjk7JiMxODY7wo8pCiAgICB9CgogICAgbWVzc2FnZSBIaXN0b3J5TXNnT3VwdXQgIC8vJiMyMzI7JiMxOTE7wpQmIzIyOTvCm8KeJiMyMzI7woHCiiYjMjI5OyYjMTY0OyYjMTY5OyYjMjI5OyYjMTc0OyYjMTY0OyYjMjI5O8KOwoYmIzIyOTvCjyYjMTc4OyYjMjMwOyYjMTgyO8KIJiMyMzA7woEmIzE3NTsKICAgIHsKICAgICAgICByZXBlYXRlZCBEb3duU3RyZWFtTWVzc2FnZSBsaXN0PTE7Ly8mIzIzMDvCicKAJiMyMzA7wosmIzE2NTsmIzIzMDvCnMKJJiMyMzE7wprChCYjMjMwOyYjMTgyO8KIJiMyMzA7woEmIzE3NTsmIzIzOTsmIzE4ODvCiGxpc3QmIzIyOTsmIzE2NDvCjSYjMjMxOyYjMTc3OyYjMTg3OyYjMjI5O8KewosmIzIzOTsmIzE4ODvCiQogICAgICAgIHJlcXVpcmVkIGludDY0IHN5bmNUaW1lPTI7Ly8mIzIyOTvCkMKMJiMyMzA7JiMxNzM7JiMxNjU7JiMyMzA7wpcmIzE4MjsmIzIzMzvClyYjMTgwOwogICAgICAgIHJlcXVpcmVkIGludDMyIGhhc01zZz0zOyAvLyYjMjMwO8KYJiMxNzU7JiMyMjk7wpAmIzE2NjsmIzIzMjsmIzE5MTvCmCYjMjMwO8KcwokmIzIyOTvCkMKOJiMyMzE7JiMxODc7JiMxNzM7JiMyMjk7wo7ChiYjMjI5O8KPJiMxNzg7JiMyMzA7JiMxODI7wogmIzIzMDvCgSYjMTc1OwogICAgfQogICAgbWVzc2FnZSBSdGNRdWVyeUxpc3RJbnB1dHsKICAgICAgb3B0aW9uYWwgaW50MzIgb3JkZXI9MTsgLy8mIzIzMDvCnSYjMTYxOyYjMjMwO8KVJiMxNzY7JiMyMzM7wpnCkCYjMjI5O8KIJiMxODI7JiMyMjk7wpwmIzE2ODsmIzIzMDvCnMKNJiMyMjk7woomIzE2MTsmIzIzMTsmIzE3MTsmIzE3NTsmIzIyOTvCgcKaIDEgJiMyMzA7wpgmIzE3NTsmIzIzMDsmIzE3MzsmIzE2MzsmIzIyOTsmIzE4NjvCjywyJiMyMzA7wpgmIzE3NTsmIzIyOTvCgMKSJiMyMjk7JiMxODY7wo8KICAgIH0KCiAgICBtZXNzYWdlIFJ0Y0tleURlbGV0ZUlucHV0ewogICAgICByZXBlYXRlZCBzdHJpbmcga2V5PTE7CiAgICB9CgogICAgbWVzc2FnZSBSdGNWYWx1ZUluZm97CiAgICAgIHJlcXVpcmVkIHN0cmluZyBrZXk9MTsKICAgICAgcmVxdWlyZWQgc3RyaW5nIHZhbHVlPTI7CiAgICB9CgogICAgbWVzc2FnZSBSdGNVc2VySW5mb3sKICAgICAgcmVxdWlyZWQgc3RyaW5nIHVzZXJJZD0xOwogICAgICByZXBlYXRlZCBSdGNWYWx1ZUluZm8gdXNlckRhdGE9MjsKICAgIH0KCiAgICBtZXNzYWdlIFJ0Y1VzZXJMaXN0T3V0cHV0ewogICAgICByZXBlYXRlZCBSdGNVc2VySW5mbyBsaXN0PTE7CiAgICAgIG9wdGlvbmFsIHN0cmluZyB0b2tlbj0yOwogICAgfQogICAgbWVzc2FnZSBSdGNSb29tSW5mb091dHB1dHsKICAgICAgICBvcHRpb25hbCBzdHJpbmcgcm9vbUlkID0gMTsKICAgICAgICByZXBlYXRlZCBSdGNWYWx1ZUluZm8gcm9vbURhdGEgPSAyOwogICAgICAgIG9wdGlvbmFsIGludDMyIHVzZXJDb3VudCA9IDM7CiAgICAgICAgcmVwZWF0ZWQgUnRjVXNlckluZm8gbGlzdD00OwogICAgfQogICAgbWVzc2FnZSBSdGNJbnB1dHsKICAgICAgb3B0aW9uYWwgaW50MzIgbm90aGluZz0xOwogICAgfQogICAgbWVzc2FnZSBSdGNRcnlJbnB1dHsgLy9xdWVyeSAmIzIyOTvCjyYjMTc1OyYjMjI4OyYjMTg3OyYjMTY1OyYjMjMwO8KYJiMxNzU7JiMyMzA7wp8mIzE2NTsmIzIzMjsmIzE3NTsmIzE2MjsmIzIyOTvCjcKVJiMyMjg7JiMxODQ7JiMxNzA7JiMyMjk7JiMxNzc7wp4mIzIzMDvCgCYjMTY3OyYjMjI4OyYjMTg1O8KfJiMyMjk7wo8mIzE3NTsmIzIyODsmIzE4NzsmIzE2NTsmIzIzMDvCnyYjMTY1OyYjMjMyOyYjMTc1OyYjMTYyOyYjMjI5OyYjMTY0O8KaJiMyMjg7JiMxODQ7JiMxNzA7JiMyMjk7JiMxNzc7wp4mIzIzMDvCgCYjMTY3OwogICAgICByZXF1aXJlZCBib29sIGlzSW50ZXJpb3I9MTsvLyYjMjMwO8KYJiMxNzU7JiMyMjk7wpAmIzE2NjsmIzIyODsmIzE4NDsmIzE4NjsmIzIzMjvCjiYjMTgzOyYjMjI5O8KPwpYmIzIyOTvChsKFJiMyMzM7woMmIzE2ODsmIzIzMDvClSYjMTc2OyYjMjMwO8KNJiMxNzQ7CiAgICAgIHJlcXVpcmVkIHRhcmdldFR5cGUgdGFyZ2V0PTI7CiAgICAgIHJlcGVhdGVkIHN0cmluZyBrZXk9MzsgLy8mIzIyOTvCiCYjMTYwOyYjMjMzO8KZJiMxNjQ7JiMyMzA7wozChyYjMjI5OyYjMTc0O8KaIHVzZXIgJiMyMzA7wojCliYjMjMyO8KAwoUgcm9vbSBJZCYjMjMxO8KawoQga2V5CiAgICB9CiAgICBtZXNzYWdlIFJ0Y1FyeU91dHB1dHsKICAgICAgcmVwZWF0ZWQgUnRjVmFsdWVJbmZvIG91dEluZm89MTsKICAgIH0KICAgIG1lc3NhZ2UgUnRjRGVsRGF0YUlucHV0ewogICAgICByZXBlYXRlZCBzdHJpbmcga2V5PTE7IC8vJiMyMjk7wogmIzE2MDsmIzIzMzvCmSYjMTY0OyYjMjMwO8KMwocmIzIyOTsmIzE3NDvCmiB1c2VyICYjMjMwO8KIwpYmIzIzMjvCgMKFIHJvb20gSWQmIzIzMTvCmsKEIGtleQogICAgICByZXF1aXJlZCBib29sIGlzSW50ZXJpb3I9MjsvLyYjMjMwO8KYJiMxNzU7JiMyMjk7wpAmIzE2NjsmIzIyODsmIzE4NDsmIzE4NjsmIzIyOTsmIzE2NDvChCYjMjMxO8KQwoYmIzIyOTvChsKFJiMyMzM7woMmIzE2ODsmIzIzMDvClSYjMTc2OyYjMjMwO8KNJiMxNzQ7CiAgICAgIHJlcXVpcmVkIHRhcmdldFR5cGUgdGFyZ2V0PTM7CiAgICB9CiAgICBtZXNzYWdlIFJ0Y0RhdGFJbnB1dHsgCiAgICAgIHJlcXVpcmVkIGJvb2wgaW50ZXJpb3I9MTsKICAgICAgLy8mIzIzMDvCmCYjMTc1OyYjMjI5O8KQJiMxNjY7JiMyMjg7JiMxODQ7JiMxODY7JiMyMzI7wo4mIzE4MzsmIzIyOTvCj8KWJiMyMjk7wobChSYjMjMzO8KDJiMxNjg7JiMyMzA7wpUmIzE3NjsmIzIzMDvCjSYjMTc0OwogICAgICByZXF1aXJlZCB0YXJnZXRUeXBlIHRhcmdldD0yOwogICAgICAvLyYjMjI5O8KIJiMxNjA7JiMyMzM7wpkmIzE2NDsmIzIzMDvCjMKHJiMyMjk7JiMxNzQ7wpogdXNlciAmIzIzMDvCiMKWJiMyMzI7woDChSByb29tIElkJiMyMzE7wprChCBrZXkKICAgICAgcmVwZWF0ZWQgc3RyaW5nIGtleT0zOwogICAgICBvcHRpb25hbCBzdHJpbmcgb2JqZWN0TmFtZT00OwogICAgICBvcHRpb25hbCBzdHJpbmcgY29udGVudD01OwogICAgfQogICAgbWVzc2FnZSBSdGNTZXREYXRhSW5wdXR7CiAgICAgIHJlcXVpcmVkIGJvb2wgaW50ZXJpb3I9MTsvLyYjMjMwO8KYJiMxNzU7JiMyMjk7wpAmIzE2NjsmIzIyODsmIzE4NDsmIzE4NjsmIzIyOTvCj8KRJiMyMjk7JiMxODQ7woMmIzIyOTvChsKFJiMyMzM7woMmIzE2ODsmIzIzMDvClSYjMTc2OyYjMjMwO8KNJiMxNzQ7CiAgICAgIHJlcXVpcmVkIHRhcmdldFR5cGUgdGFyZ2V0PTI7CiAgICAgIHJlcXVpcmVkIHN0cmluZyBrZXk9MzsKICAgICAgcmVxdWlyZWQgc3RyaW5nIHZhbHVlPTQ7CiAgICAgIG9wdGlvbmFsIHN0cmluZyBvYmplY3ROYW1lPTU7CiAgICAgIG9wdGlvbmFsIHN0cmluZyBjb250ZW50PTY7CiAgICB9CiAgICBtZXNzYWdlIFJ0Y091dHB1dAogICAgewogICAgICAgIG9wdGlvbmFsIGludDMyIG5vdGhpbmc9MTsgICAgLy8mIzIyOTvCjSYjMTYwOyYjMjI4OyYjMTg5O8KNCiAgICB9CiAgICBtZXNzYWdlIFJ0Y1Rva2VuT3V0cHV0ewogICAgICByZXF1aXJlZCBzdHJpbmcgcnRjVG9rZW49MTsKICAgIH0KICAgIGVudW0gdGFyZ2V0VHlwZSB7CiAgICAgIFJPT00gPTEgOwogICAgICBQRVJTT04gPSAyOwogICAgfQp9"),s=l.loadProto(o,void 0,"").build("Modules").probuf;return s}(n,t);return l})}).call(this,n("4362"))},"322b":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={appid:"__UNI__1D90AF2"};t.default=a},4362:function(e,t,n){t.nextTick=function(e){setTimeout(e,0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,a="/";t.cwd=function(){return a},t.chdir=function(t){e||(e=n("df7c")),a=e.resolve(t,a)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"45f0":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lunarInfo:[19416,19168,42352,21717,53856,55632,91476,22176,39632,21970,19168,42422,42192,53840,119381,46400,54944,44450,38320,84343,18800,42160,46261,27216,27968,109396,11104,38256,21234,18800,25958,54432,59984,28309,23248,11104,100067,37600,116951,51536,54432,120998,46416,22176,107956,9680,37584,53938,43344,46423,27808,46416,86869,19872,42416,83315,21168,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46752,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,23232,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835,37744,18936,18800,25776,92326,59984,27424,108228,43744,41696,53987,51552,54615,54432,55888,23893,22176,42704,21972,21200,43448,43344,46240,46758,44368,21920,43940,42416,21168,45683,26928,29495,27296,44368,84821,19296,42352,21732,53600,59752,54560,55968,92838,22224,19168,43476,41680,53584,62034,54560],solarMonth:[31,28,31,30,31,30,31,31,30,31,30,31],Gan:["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],Zhi:["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],Animals:["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"],solarTerm:["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"],sTermInfo:["9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","9778397bd19801ec9210c965cc920e","97b6b97bd19801ec95f8c965cc920f","97bd09801d98082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd197c36c9210c9274c91aa","97b6b97bd19801ec95f8c965cc920e","97bd09801d98082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec95f8c965cc920e","97bcf97c3598082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd07f595b0b6fc920fb0722","9778397bd097c36b0b6fc9210c8dc2","9778397bd19801ec9210c9274c920e","97b6b97bd19801ec95f8c965cc920f","97bd07f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c920e","97b6b97bd19801ec95f8c965cc920f","97bd07f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec9210c965cc920e","97bd07f1487f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c9274c920e","97bcf7f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c91aa","97b6b97bd197c36c9210c9274c920e","97bcf7f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c920e","97b6b7f0e47f531b0723b0b6fb0722","7f0e37f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36b0b70c9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e37f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc9210c8dc2","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0787b0721","7f0e27f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c91aa","97b6b7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c8dc2","977837f0e37f149b0723b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f5307f595b0b0bc920fb0722","7f0e397bd097c35b0b6fc9210c8dc2","977837f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0721","7f0e37f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc9210c8dc2","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0723b06bd","7f07e7f0e37f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f1487f595b0b0bb0b6fb0722","7f0e37f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e37f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0723b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0723b06bd","7f07e7f0e37f14998083b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14898082b0723b02d5","7f07e7f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e36665b66aa89801e9808297c35","665f67f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e36665b66a449801e9808297c35","665f67f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e36665b66a449801e9808297c35","665f67f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e26665b66a449801e9808297c35","665f67f0e37f1489801eb072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722"],nStr1:["日","一","二","三","四","五","六","七","八","九","十"],nStr2:["初","十","廿","卅"],nStr3:["正","二","三","四","五","六","七","八","九","十","冬","腊"],lYearDays:function(e){var t,n=348;for(t=32768;t>8;t>>=1)n+=this.lunarInfo[e-1900]&t?1:0;return n+this.leapDays(e)},leapMonth:function(e){return 15&this.lunarInfo[e-1900]},leapDays:function(e){return this.leapMonth(e)?65536&this.lunarInfo[e-1900]?30:29:0},monthDays:function(e,t){return t>12||t<1?-1:this.lunarInfo[e-1900]&65536>>t?30:29},solarDays:function(e,t){if(t>12||t<1)return-1;var n=t-1;return 1==n?e%4==0&&e%100!=0||e%400==0?29:28:this.solarMonth[n]},toGanZhiYear:function(e){var t=(e-3)%10,n=(e-3)%12;return 0==t&&(t=10),0==n&&(n=12),this.Gan[t-1]+this.Zhi[n-1]},toAstro:function(e,t){var n="魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯",a=[20,19,21,21,21,22,23,23,23,23,22,22];return n.substr(2*e-(t<a[e-1]?2:0),2)+"座"},toGanZhi:function(e){return this.Gan[e%10]+this.Zhi[e%12]},getTerm:function(e,t){if(e<1900||e>2100)return-1;if(t<1||t>24)return-1;var n=this.sTermInfo[e-1900],a=[parseInt("0x"+n.substr(0,5)).toString(),parseInt("0x"+n.substr(5,5)).toString(),parseInt("0x"+n.substr(10,5)).toString(),parseInt("0x"+n.substr(15,5)).toString(),parseInt("0x"+n.substr(20,5)).toString(),parseInt("0x"+n.substr(25,5)).toString()],l=[a[0].substr(0,1),a[0].substr(1,2),a[0].substr(3,1),a[0].substr(4,2),a[1].substr(0,1),a[1].substr(1,2),a[1].substr(3,1),a[1].substr(4,2),a[2].substr(0,1),a[2].substr(1,2),a[2].substr(3,1),a[2].substr(4,2),a[3].substr(0,1),a[3].substr(1,2),a[3].substr(3,1),a[3].substr(4,2),a[4].substr(0,1),a[4].substr(1,2),a[4].substr(3,1),a[4].substr(4,2),a[5].substr(0,1),a[5].substr(1,2),a[5].substr(3,1),a[5].substr(4,2)];return parseInt(l[t-1])},toChinaMonth:function(e){if(e>12||e<1)return-1;var t=this.nStr3[e-1];return t+="月",t},toChinaDay:function(e){var t;switch(e){case 10:t="初十";break;case 20:t="二十";break;case 30:t="三十";break;default:t=this.nStr2[Math.floor(e/10)],t+=this.nStr1[e%10]}return t},getAnimal:function(e){return this.Animals[(e-4)%12]},solar2lunar:function(e,t,n){if(e<1900||e>2100)return-1;if(1900==e&&1==t&&n<31)return-1;if(e)a=new Date(e,parseInt(t)-1,n);else var a=new Date;var l,r=0,i=0,o=(e=a.getFullYear(),t=a.getMonth()+1,n=a.getDate(),(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate())-Date.UTC(1900,0,31))/864e5);for(l=1900;l<2101&&o>0;l++)i=this.lYearDays(l),o-=i;o<0&&(o+=i,l--);var s=new Date,u=!1;s.getFullYear()==e&&s.getMonth()+1==t&&s.getDate()==n&&(u=!0);var c=a.getDay(),f=this.nStr1[c];0==c&&(c=7);var g=l,v=(r=this.leapMonth(l),!1);for(l=1;l<13&&o>0;l++)r>0&&l==r+1&&0==v?(--l,v=!0,i=this.leapDays(g)):i=this.monthDays(g,l),1==v&&l==r+1&&(v=!1),o-=i;0==o&&r>0&&l==r+1&&(v?v=!1:(v=!0,--l)),o<0&&(o+=i,--l);var b=l,h=o+1,p=t-1,d=this.toGanZhiYear(g),y=this.getTerm(e,2*t-1),m=this.getTerm(e,2*t),I=this.toGanZhi(12*(e-1900)+t+11);n>=y&&(I=this.toGanZhi(12*(e-1900)+t+12));var C=!1,M=null;y==n&&(C=!0,M=this.solarTerm[2*t-2]),m==n&&(C=!0,M=this.solarTerm[2*t-1]);var T=Date.UTC(e,p,1,0,0,0,0)/864e5+25567+10,E=this.toGanZhi(T+n-1),_=this.toAstro(t,n);return{lYear:g,lMonth:b,lDay:h,Animal:this.getAnimal(g),IMonthCn:(v?"闰":"")+this.toChinaMonth(b),IDayCn:this.toChinaDay(h),cYear:e,cMonth:t,cDay:n,gzYear:d,gzMonth:I,gzDay:E,isToday:u,isLeap:v,nWeek:c,ncWeek:"星期"+f,isTerm:C,Term:M,astro:_}},lunar2solar:function(e,t,n,a){a=!!a;var l=this.leapMonth(e);this.leapDays(e);if(a&&l!=t)return-1;if(2100==e&&12==t&&n>1||1900==e&&1==t&&n<31)return-1;var r=this.monthDays(e,t),i=r;if(a&&(i=this.leapDays(e,t)),e<1900||e>2100||n>i)return-1;for(var o=0,s=1900;s<e;s++)o+=this.lYearDays(s);var u=0,c=!1;for(s=1;s<t;s++)u=this.leapMonth(e),c||u<=s&&u>0&&(o+=this.leapDays(e),c=!0),o+=this.monthDays(e,s);a&&(o+=r);var f=Date.UTC(1900,1,30,0,0,0),g=new Date(864e5*(o+n-31)+f),v=g.getUTCFullYear(),b=g.getUTCMonth()+1,h=g.getUTCDate();return this.solar2lunar(v,b,h)}},l=a;t.default=l},4989:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return e<10?"0"+e:e+""},l={date:{init:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"date",l=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,o=arguments.length>6?arguments[6]:void 0,s=new Date,u=[],c=new Date(e),f=new Date(t);e>t&&(c=new Date(t),f=new Date(e));for(var g=c.getFullYear(),v=(c.getMonth(),f.getFullYear()),b=[],h=[],p=[],d=[],y=[],m=[],I=[],C=[],M=i?1*r[1]:r[1]+1,T=s.getFullYear(),E=s.getMonth()+1,_=s.getDate(),R=new Date(g,M,0).getDate(),S=g;S<=v;S++)b.push(S+"");var A=b[r[0]];switch(n){case"half":case"date":case"yearMonth":if(o&&A==T){for(var w=1;w<=E;w++)h.push(a(w));for(var O=1;O<=_;O++)p.push(a(O))}else{for(var N=1;N<=12;N++)h.push(a(N));for(var P=1;P<=R;P++)p.push(a(P))}break;default:for(var U=1;U<=12;U++)h.push(a(U));for(var k=1;k<=R;k++)p.push(a(k));break}for(var D=0;D<24;D++)d.push(a(D));for(var j=0;j<60;j+=1*l)y.push(a(j));for(var L=0;L<60;L++)m.push(a(L));switch(i&&(C=[b.indexOf(r[0]),h.indexOf(r[1]),p.indexOf(r[2]),d.indexOf(r[3]),-1==y.indexOf(r[4])?0:y.indexOf(r[4]),m.indexOf(r[5])]),n){case"range":return i?(u=[C[0],C[1],C[2],0,C[0],C[1],C[2]],{years:b,months:h,days:p,defaultVal:u}):{years:b,months:h,days:p};case"date":return i?(u=[C[0],C[1],C[2]],{years:b,months:h,days:p,defaultVal:u}):{years:b,months:h,days:p};case"half":return I=[{label:"上午",value:0},{label:"下午",value:1}],i?(u=[C[0],C[1],C[2],C[3]],{years:b,months:h,days:p,areas:I,defaultVal:u}):{years:b,months:h,days:p,areas:I};case"yearMonth":return i?(u=[C[0],C[1]],{years:b,months:h,defaultVal:u}):{years:b,months:h};case"dateTime":return i?(u=C,{years:b,months:h,days:p,hours:d,minutes:y,seconds:m,defaultVal:u}):{years:b,months:h,days:p,hours:d,minutes:y,seconds:m};case"time":return i?(u=[C[3],C[4],C[5]],{hours:d,minutes:y,seconds:m,defaultVal:u}):{hours:d,minutes:y,seconds:m}}},initMonths:function(e,t){var n=new Date,l=n.getFullYear(),r=n.getMonth()+1,i=(n.getDate(),l==e),o=[];if(i&&t)for(var s=1;s<=r;s++)o.push(a(s));else for(var u=1;u<=12;u++)o.push(a(u));return o},initDays:function(e,t,n){var l=new Date,r=l.getFullYear(),i=l.getMonth()+1,o=l.getDate(),s=r==e&&i==t,u=new Date(e,t,0).getDate(),c=[];if(s&&n)for(var f=1;f<=o;f++)c.push(a(f));else for(var g=1;g<=u;g++)c.push(a(g));return c}},limitHour:{init:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,t=new Date,n=[],l=[],r=[],i=(new Date).getHours(),o=["周日","周一","周二","周三","周四","周五","周六"],s=0;s<e;s++){var u=void 0,c=void 0,f=void 0,g=void 0;u=t.getFullYear(),c=a(t.getMonth()+1),f=a(t.getDate()),g=o[t.getDay()];var v="";switch(s){case 0:v="今天";break;case 1:v="明天";break;case 2:v="后天";break;default:v=c+"月"+f+"日 "+g;break}n.push({label:v,value:u+"-"+c+"-"+f,today:0==s}),t.setDate(t.getDate()+1)}l=i>12?[{label:"下午",value:1}]:[{label:"上午",value:0},{label:"下午",value:1}];for(var b=i>12?i-12:i;b<=12;b++)r.push({label:a(b),value:a(i>12?b+12:b)});return{date:n,areas:l,hours:r}},initAreas:function(e){var t=[],n=(new Date).getHours();return t=e.today&&n>12?[{label:"下午",value:1}]:[{label:"上午",value:0},{label:"下午",value:1}],t},initHours:function(e,t){var n=[],l=(new Date).getHours();if(e.today)if(1==t.value&&l<=12)for(var r=1;r<=12;r++)n.push({label:a(r),value:a(1==t.value?r+12:r)});else for(var i=l>12?l-12:l;i<=12;i++)n.push({label:a(i),value:a(1==t.value?i+12:i)});else for(var o=1;o<=12;o++)n.push({label:a(o),value:a(1==t.value?o+12:o)});return n}},limit:{init:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:30,i=new Date,o=new Date((new Date).getTime()+60*r*1e3),s=[],u=[],c=[],f=o.getHours(),g=Math.floor(o.getMinutes()/l)*l,v=["周日","周一","周二","周三","周四","周五","周六"],b=0;b<e;b++){var h=void 0,p=void 0,d=void 0,y=void 0;h=i.getFullYear(),p=a(i.getMonth()+1),d=a(i.getDate()),y=v[i.getDay()];var m="";switch(b){case 0:m="今天";break;case 1:m="明天";break;case 2:m="后天";break;default:m=p+"月"+d+"日 "+y;break}s.push({label:m,value:h+"-"+p+"-"+d,flag:0==b}),i.setDate(i.getDate()+1)}f<t&&(f=t),f>n&&(f=n);for(var I=1*f;I<=1*n;I++)u.push({label:a(I),value:a(I),flag:I==f});for(var C=g;C<60;C+=1*l)c.push({label:a(C),value:a(C)});return{date:s,hours:u,minutes:c}},initHours:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]?arguments[3]:30),l=arguments.length>4?arguments[4]:void 0,r=[],i=l.split("-"),o=new Date,s=o.getFullYear(),u=o.getMonth()+1,c=o.getDate(),f=new Date((new Date).getTime()+60*n*1e3),g=f.getHours(),v=s==i[0]&&u==i[1]&&c==i[2];if(g>t&&(g=t),v)for(var b=1*g;b<=1*t;b++)r.push({label:a(b),value:a(b),flag:b==g});else for(var h=1*e;h<=1*t;h++)r.push({label:a(h),value:a(h),flag:!1});return r},initMinutes:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:30,n=arguments.length>4?arguments[4]:void 0,l=arguments.length>5?arguments[5]:void 0,r=[],i=new Date((new Date).getTime()+60*t*1e3),o=n.split("-"),s=new Date,u=s.getFullYear(),c=s.getMonth()+1,f=s.getDate(),g=i.getHours(),v=Math.floor(i.getMinutes()/e)*e,b=u==o[0]&&c==o[1]&&f==o[2];if(b)if(l==g)for(var h=v;h<60;h+=1*e)r.push({label:a(h),value:a(h)});else for(var p=0;p<60;p+=1*e)r.push({label:a(p),value:a(p)});else for(var d=0;d<60;d+=1*e)r.push({label:a(d),value:a(d)});return r}},range:{init:function(e,t,n,l){new Date;var r=[],i=new Date(e),o=new Date(t);e>t&&(i=new Date(t),o=new Date(e));for(var s=i.getFullYear(),u=(i.getMonth(),o.getFullYear()),c=[],f=[],g=[],v=[],b=[],h=[],p=l?1*n[1]:n[1]+1,d=new Date(s,p,0).getDate(),y=s;y<=u;y++)c.push(y+"");for(var m=1;m<=12;m++)f.push(a(m));for(var I=1;I<=d;I++)g.push(a(I));for(var C=s;C<=u;C++)v.push(C+"");for(var M=1;M<=12;M++)b.push(a(M));for(var T=1;T<=d;T++)h.push(a(T));return l?(r=[c.indexOf(n[0]),f.indexOf(n[1]),g.indexOf(n[2]),0,v.indexOf(n[0]),b.indexOf(n[1]),h.indexOf(n[2])],{fyears:c,fmonths:f,fdays:g,tyears:v,tmonths:b,tdays:h,defaultVal:r}):{fyears:c,fmonths:f,fdays:g,tyears:v,tmonths:b,tdays:h}},initDays:function(e,t){for(var n=new Date(e,t,0).getDate(),l=[],r=1;r<=n;r++)l.push(a(r));return l}}},r=l;t.default=r},"66fd":function(e,t,n){"use strict";n.r(t),function(e){
/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function a(e){return void 0===e||null===e}function l(e){return void 0!==e&&null!==e}function r(e){return!0===e}function i(e){return!1===e}function o(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function s(e){return null!==e&&"object"===typeof e}var u=Object.prototype.toString;function c(e){return"[object Object]"===u.call(e)}function f(e){return"[object RegExp]"===u.call(e)}function g(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function v(e){return l(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function b(e){return null==e?"":Array.isArray(e)||c(e)&&e.toString===u?JSON.stringify(e,null,2):String(e)}function h(e){var t=parseFloat(e);return isNaN(t)?e:t}function p(e,t){for(var n=Object.create(null),a=e.split(","),l=0;l<a.length;l++)n[a[l]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}p("slot,component",!0);var d=p("key,ref,slot,slot-scope,is");function y(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function I(e,t){return m.call(e,t)}function C(e){var t=Object.create(null);return function(n){var a=t[n];return a||(t[n]=e(n))}}var M=/-(\w)/g,T=C(function(e){return e.replace(M,function(e,t){return t?t.toUpperCase():""})}),E=C(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),_=/\B([A-Z])/g,R=C(function(e){return e.replace(_,"-$1").toLowerCase()});function S(e,t){function n(n){var a=arguments.length;return a?a>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function A(e,t){return e.bind(t)}var w=Function.prototype.bind?A:S;function O(e,t){t=t||0;var n=e.length-t,a=new Array(n);while(n--)a[n]=e[n+t];return a}function N(e,t){for(var n in t)e[n]=t[n];return e}function P(e){for(var t={},n=0;n<e.length;n++)e[n]&&N(t,e[n]);return t}function U(e,t,n){}var k=function(e,t,n){return!1},D=function(e){return e};function j(e,t){if(e===t)return!0;var n=s(e),a=s(t);if(!n||!a)return!n&&!a&&String(e)===String(t);try{var l=Array.isArray(e),r=Array.isArray(t);if(l&&r)return e.length===t.length&&e.every(function(e,n){return j(e,t[n])});if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(l||r)return!1;var i=Object.keys(e),o=Object.keys(t);return i.length===o.length&&i.every(function(n){return j(e[n],t[n])})}catch(u){return!1}}function L(e,t){for(var n=0;n<e.length;n++)if(j(e[n],t))return n;return-1}function B(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var x=["component","directive","filter"],z=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],V={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:k,isReservedAttr:k,isUnknownElement:k,getTagNamespace:U,parsePlatformTagName:D,mustUseProp:k,async:!0,_lifecycleHooks:z},Y=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function F(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function J(e,t,n,a){Object.defineProperty(e,t,{value:n,enumerable:!!a,writable:!0,configurable:!0})}var H=new RegExp("[^"+Y.source+".$_\\d]");function Z(e){if(!H.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var G,W="__proto__"in{},K="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,$=X&&WXEnvironment.platform.toLowerCase(),Q=K&&window.navigator.userAgent.toLowerCase(),q=Q&&/msie|trident/.test(Q),ee=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),te=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===$),ne=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(K)try{var ae={};Object.defineProperty(ae,"passive",{get:function(){}}),window.addEventListener("test-passive",null,ae)}catch(nl){}var le=function(){return void 0===G&&(G=!K&&!X&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),G},re=K&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ie(e){return"function"===typeof e&&/native code/.test(e.toString())}var oe,se="undefined"!==typeof Symbol&&ie(Symbol)&&"undefined"!==typeof Reflect&&ie(Reflect.ownKeys);oe="undefined"!==typeof Set&&ie(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ue=U,ce=0,fe=function(){"undefined"!==typeof SharedObject?this.id=SharedObject.uid++:this.id=ce++,this.subs=[]};function ge(e){fe.SharedObject.targetStack.push(e),fe.SharedObject.target=e}function ve(){fe.SharedObject.targetStack.pop(),fe.SharedObject.target=fe.SharedObject.targetStack[fe.SharedObject.targetStack.length-1]}fe.prototype.addSub=function(e){this.subs.push(e)},fe.prototype.removeSub=function(e){y(this.subs,e)},fe.prototype.depend=function(){fe.SharedObject.target&&fe.SharedObject.target.addDep(this)},fe.prototype.notify=function(){var e=this.subs.slice();for(var t=0,n=e.length;t<n;t++)e[t].update()},fe.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},fe.SharedObject.target=null,fe.SharedObject.targetStack=[];var be=function(e,t,n,a,l,r,i,o){this.tag=e,this.data=t,this.children=n,this.text=a,this.elm=l,this.ns=void 0,this.context=r,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=i,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=o,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},he={child:{configurable:!0}};he.child.get=function(){return this.componentInstance},Object.defineProperties(be.prototype,he);var pe=function(e){void 0===e&&(e="");var t=new be;return t.text=e,t.isComment=!0,t};function de(e){return new be(void 0,void 0,void 0,String(e))}function ye(e){var t=new be(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var me=Array.prototype,Ie=Object.create(me),Ce=["push","pop","shift","unshift","splice","sort","reverse"];Ce.forEach(function(e){var t=me[e];J(Ie,e,function(){var n=[],a=arguments.length;while(a--)n[a]=arguments[a];var l,r=t.apply(this,n),i=this.__ob__;switch(e){case"push":case"unshift":l=n;break;case"splice":l=n.slice(2);break}return l&&i.observeArray(l),i.dep.notify(),r})});var Me=Object.getOwnPropertyNames(Ie),Te=!0;function Ee(e){Te=e}var _e=function(e){this.value=e,this.dep=new fe,this.vmCount=0,J(e,"__ob__",this),Array.isArray(e)?(W?e.push!==e.__proto__.push?Se(e,Ie,Me):Re(e,Ie):Se(e,Ie,Me),this.observeArray(e)):this.walk(e)};function Re(e,t){e.__proto__=t}function Se(e,t,n){for(var a=0,l=n.length;a<l;a++){var r=n[a];J(e,r,t[r])}}function Ae(e,t){var n;if(s(e)&&!(e instanceof be))return I(e,"__ob__")&&e.__ob__ instanceof _e?n=e.__ob__:Te&&!le()&&(Array.isArray(e)||c(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new _e(e)),t&&n&&n.vmCount++,n}function we(e,t,n,a,l){var r=new fe,i=Object.getOwnPropertyDescriptor(e,t);if(!i||!1!==i.configurable){var o=i&&i.get,s=i&&i.set;o&&!s||2!==arguments.length||(n=e[t]);var u=!l&&Ae(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=o?o.call(e):n;return fe.SharedObject.target&&(r.depend(),u&&(u.dep.depend(),Array.isArray(t)&&Pe(t))),t},set:function(t){var a=o?o.call(e):n;t===a||t!==t&&a!==a||o&&!s||(s?s.call(e,t):n=t,u=!l&&Ae(t),r.notify())}})}}function Oe(e,t,n){if(Array.isArray(e)&&g(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var a=e.__ob__;return e._isVue||a&&a.vmCount?n:a?(we(a.value,t,n),a.dep.notify(),n):(e[t]=n,n)}function Ne(e,t){if(Array.isArray(e)&&g(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||I(e,t)&&(delete e[t],n&&n.dep.notify())}}function Pe(e){for(var t=void 0,n=0,a=e.length;n<a;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&Pe(t)}_e.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)we(e,t[n])},_e.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Ae(e[t])};var Ue=V.optionMergeStrategies;function ke(e,t){if(!t)return e;for(var n,a,l,r=se?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++)n=r[i],"__ob__"!==n&&(a=e[n],l=t[n],I(e,n)?a!==l&&c(a)&&c(l)&&ke(a,l):Oe(e,n,l));return e}function De(e,t,n){return n?function(){var a="function"===typeof t?t.call(n,n):t,l="function"===typeof e?e.call(n,n):e;return a?ke(a,l):l}:t?e?function(){return ke("function"===typeof t?t.call(this,this):t,"function"===typeof e?e.call(this,this):e)}:t:e}function je(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?Le(n):n}function Le(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function Be(e,t,n,a){var l=Object.create(e||null);return t?N(l,t):l}Ue.data=function(e,t,n){return n?De(e,t,n):t&&"function"!==typeof t?e:De(e,t)},z.forEach(function(e){Ue[e]=je}),x.forEach(function(e){Ue[e+"s"]=Be}),Ue.watch=function(e,t,n,a){if(e===ne&&(e=void 0),t===ne&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var l={};for(var r in N(l,e),t){var i=l[r],o=t[r];i&&!Array.isArray(i)&&(i=[i]),l[r]=i?i.concat(o):Array.isArray(o)?o:[o]}return l},Ue.props=Ue.methods=Ue.inject=Ue.computed=function(e,t,n,a){if(!e)return t;var l=Object.create(null);return N(l,e),t&&N(l,t),l},Ue.provide=De;var xe=function(e,t){return void 0===t?e:t};function ze(e,t){var n=e.props;if(n){var a,l,r,i={};if(Array.isArray(n)){a=n.length;while(a--)l=n[a],"string"===typeof l&&(r=T(l),i[r]={type:null})}else if(c(n))for(var o in n)l=n[o],r=T(o),i[r]=c(l)?l:{type:l};else 0;e.props=i}}function Ve(e,t){var n=e.inject;if(n){var a=e.inject={};if(Array.isArray(n))for(var l=0;l<n.length;l++)a[n[l]]={from:n[l]};else if(c(n))for(var r in n){var i=n[r];a[r]=c(i)?N({from:r},i):{from:i}}else 0}}function Ye(e){var t=e.directives;if(t)for(var n in t){var a=t[n];"function"===typeof a&&(t[n]={bind:a,update:a})}}function Fe(e,t,n){if("function"===typeof t&&(t=t.options),ze(t,n),Ve(t,n),Ye(t),!t._base&&(t.extends&&(e=Fe(e,t.extends,n)),t.mixins))for(var a=0,l=t.mixins.length;a<l;a++)e=Fe(e,t.mixins[a],n);var r,i={};for(r in e)o(r);for(r in t)I(e,r)||o(r);function o(a){var l=Ue[a]||xe;i[a]=l(e[a],t[a],n,a)}return i}function Je(e,t,n,a){if("string"===typeof n){var l=e[t];if(I(l,n))return l[n];var r=T(n);if(I(l,r))return l[r];var i=E(r);if(I(l,i))return l[i];var o=l[n]||l[r]||l[i];return o}}function He(e,t,n,a){var l=t[e],r=!I(n,e),i=n[e],o=Ke(Boolean,l.type);if(o>-1)if(r&&!I(l,"default"))i=!1;else if(""===i||i===R(e)){var s=Ke(String,l.type);(s<0||o<s)&&(i=!0)}if(void 0===i){i=Ze(a,l,e);var u=Te;Ee(!0),Ae(i),Ee(u)}return i}function Ze(e,t,n){if(I(t,"default")){var a=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"===typeof a&&"Function"!==Ge(t.type)?a.call(e):a}}function Ge(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function We(e,t){return Ge(e)===Ge(t)}function Ke(e,t){if(!Array.isArray(t))return We(t,e)?0:-1;for(var n=0,a=t.length;n<a;n++)if(We(t[n],e))return n;return-1}function Xe(e,t,n){ge();try{if(t){var a=t;while(a=a.$parent){var l=a.$options.errorCaptured;if(l)for(var r=0;r<l.length;r++)try{var i=!1===l[r].call(a,e,t,n);if(i)return}catch(nl){Qe(nl,a,"errorCaptured hook")}}}Qe(e,t,n)}finally{ve()}}function $e(e,t,n,a,l){var r;try{r=n?e.apply(t,n):e.call(t),r&&!r._isVue&&v(r)&&!r._handled&&(r.catch(function(e){return Xe(e,a,l+" (Promise/async)")}),r._handled=!0)}catch(nl){Xe(nl,a,l)}return r}function Qe(e,t,n){if(V.errorHandler)try{return V.errorHandler.call(null,e,t,n)}catch(nl){nl!==e&&qe(nl,null,"config.errorHandler")}qe(e,t,n)}function qe(e,t,n){if(!K&&!X||"undefined"===typeof console)throw e;console.error(e)}var et,tt=[],nt=!1;function at(){nt=!1;var e=tt.slice(0);tt.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&ie(Promise)){var lt=Promise.resolve();et=function(){lt.then(at),te&&setTimeout(U)}}else if(q||"undefined"===typeof MutationObserver||!ie(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())et="undefined"!==typeof setImmediate&&ie(setImmediate)?function(){setImmediate(at)}:function(){setTimeout(at,0)};else{var rt=1,it=new MutationObserver(at),ot=document.createTextNode(String(rt));it.observe(ot,{characterData:!0}),et=function(){rt=(rt+1)%2,ot.data=String(rt)}}function st(e,t){var n;if(tt.push(function(){if(e)try{e.call(t)}catch(nl){Xe(nl,t,"nextTick")}else n&&n(t)}),nt||(nt=!0,et()),!e&&"undefined"!==typeof Promise)return new Promise(function(e){n=e})}var ut=new oe;function ct(e){ft(e,ut),ut.clear()}function ft(e,t){var n,a,l=Array.isArray(e);if(!(!l&&!s(e)||Object.isFrozen(e)||e instanceof be)){if(e.__ob__){var r=e.__ob__.dep.id;if(t.has(r))return;t.add(r)}if(l){n=e.length;while(n--)ft(e[n],t)}else{a=Object.keys(e),n=a.length;while(n--)ft(e[a[n]],t)}}}var gt=C(function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var a="!"===e.charAt(0);return e=a?e.slice(1):e,{name:e,once:n,capture:a,passive:t}});function vt(e,t){function n(){var e=arguments,a=n.fns;if(!Array.isArray(a))return $e(a,null,arguments,t,"v-on handler");for(var l=a.slice(),r=0;r<l.length;r++)$e(l[r],null,e,t,"v-on handler")}return n.fns=e,n}function bt(e,t,n,l,i,o){var s,u,c,f;for(s in e)u=e[s],c=t[s],f=gt(s),a(u)||(a(c)?(a(u.fns)&&(u=e[s]=vt(u,o)),r(f.once)&&(u=e[s]=i(f.name,u,f.capture)),n(f.name,u,f.capture,f.passive,f.params)):u!==c&&(c.fns=u,e[s]=c));for(s in t)a(e[s])&&(f=gt(s),l(f.name,t[s],f.capture))}function ht(e,t,n,r){var i=t.options.mpOptions&&t.options.mpOptions.properties;if(a(i))return n;var o=t.options.mpOptions.externalClasses||[],s=e.attrs,u=e.props;if(l(s)||l(u))for(var c in i){var f=R(c),g=dt(n,u,c,f,!0)||dt(n,s,c,f,!1);g&&n[c]&&-1!==o.indexOf(f)&&r[T(n[c])]&&(n[c]=r[T(n[c])])}return n}function pt(e,t,n,r){var i=t.options.props;if(a(i))return ht(e,t,{},r);var o={},s=e.attrs,u=e.props;if(l(s)||l(u))for(var c in i){var f=R(c);dt(o,u,c,f,!0)||dt(o,s,c,f,!1)}return ht(e,t,o,r)}function dt(e,t,n,a,r){if(l(t)){if(I(t,n))return e[n]=t[n],r||delete t[n],!0;if(I(t,a))return e[n]=t[a],r||delete t[a],!0}return!1}function yt(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function mt(e){return o(e)?[de(e)]:Array.isArray(e)?Ct(e):void 0}function It(e){return l(e)&&l(e.text)&&i(e.isComment)}function Ct(e,t){var n,i,s,u,c=[];for(n=0;n<e.length;n++)i=e[n],a(i)||"boolean"===typeof i||(s=c.length-1,u=c[s],Array.isArray(i)?i.length>0&&(i=Ct(i,(t||"")+"_"+n),It(i[0])&&It(u)&&(c[s]=de(u.text+i[0].text),i.shift()),c.push.apply(c,i)):o(i)?It(u)?c[s]=de(u.text+i):""!==i&&c.push(de(i)):It(i)&&It(u)?c[s]=de(u.text+i.text):(r(e._isVList)&&l(i.tag)&&a(i.key)&&l(t)&&(i.key="__vlist"+t+"_"+n+"__"),c.push(i)));return c}function Mt(e){var t=e.$options.provide;t&&(e._provided="function"===typeof t?t.call(e):t)}function Tt(e){var t=Et(e.$options.inject,e);t&&(Ee(!1),Object.keys(t).forEach(function(n){we(e,n,t[n])}),Ee(!0))}function Et(e,t){if(e){for(var n=Object.create(null),a=se?Reflect.ownKeys(e):Object.keys(e),l=0;l<a.length;l++){var r=a[l];if("__ob__"!==r){var i=e[r].from,o=t;while(o){if(o._provided&&I(o._provided,i)){n[r]=o._provided[i];break}o=o.$parent}if(!o)if("default"in e[r]){var s=e[r].default;n[r]="function"===typeof s?s.call(t):s}else 0}}return n}}function _t(e,t){if(!e||!e.length)return{};for(var n={},a=0,l=e.length;a<l;a++){var r=e[a],i=r.data;if(i&&i.attrs&&i.attrs.slot&&delete i.attrs.slot,r.context!==t&&r.fnContext!==t||!i||null==i.slot)r.asyncMeta&&r.asyncMeta.data&&"page"===r.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(r):(n.default||(n.default=[])).push(r);else{var o=i.slot,s=n[o]||(n[o]=[]);"template"===r.tag?s.push.apply(s,r.children||[]):s.push(r)}}for(var u in n)n[u].every(Rt)&&delete n[u];return n}function Rt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function St(e,t,a){var l,r=Object.keys(t).length>0,i=e?!!e.$stable:!r,o=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(i&&a&&a!==n&&o===a.$key&&!r&&!a.$hasNormal)return a;for(var s in l={},e)e[s]&&"$"!==s[0]&&(l[s]=At(t,s,e[s]))}else l={};for(var u in t)u in l||(l[u]=wt(t,u));return e&&Object.isExtensible(e)&&(e._normalized=l),J(l,"$stable",i),J(l,"$key",o),J(l,"$hasNormal",r),l}function At(e,t,n){var a=function(){var e=arguments.length?n.apply(null,arguments):n({});return e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:mt(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:a,enumerable:!0,configurable:!0}),a}function wt(e,t){return function(){return e[t]}}function Ot(e,t){var n,a,r,i,o;if(Array.isArray(e)||"string"===typeof e)for(n=new Array(e.length),a=0,r=e.length;a<r;a++)n[a]=t(e[a],a,a,a);else if("number"===typeof e)for(n=new Array(e),a=0;a<e;a++)n[a]=t(a+1,a,a,a);else if(s(e))if(se&&e[Symbol.iterator]){n=[];var u=e[Symbol.iterator](),c=u.next();while(!c.done)n.push(t(c.value,n.length,a++,a)),c=u.next()}else for(i=Object.keys(e),n=new Array(i.length),a=0,r=i.length;a<r;a++)o=i[a],n[a]=t(e[o],o,a,a);return l(n)||(n=[]),n._isVList=!0,n}function Nt(e,t,n,a){var l,r=this.$scopedSlots[e];r?(n=n||{},a&&(n=N(N({},a),n)),l=r(n,this,n._i)||t):l=this.$slots[e]||t;var i=n&&n.slot;return i?this.$createElement("template",{slot:i},l):l}function Pt(e){return Je(this.$options,"filters",e,!0)||D}function Ut(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function kt(e,t,n,a,l){var r=V.keyCodes[t]||n;return l&&a&&!V.keyCodes[t]?Ut(l,a):r?Ut(r,e):a?R(a)!==t:void 0}function Dt(e,t,n,a,l){if(n)if(s(n)){var r;Array.isArray(n)&&(n=P(n));var i=function(i){if("class"===i||"style"===i||d(i))r=e;else{var o=e.attrs&&e.attrs.type;r=a||V.mustUseProp(t,o,i)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var s=T(i),u=R(i);if(!(s in r)&&!(u in r)&&(r[i]=n[i],l)){var c=e.on||(e.on={});c["update:"+i]=function(e){n[i]=e}}};for(var o in n)i(o)}else;return e}function jt(e,t){var n=this._staticTrees||(this._staticTrees=[]),a=n[e];return a&&!t?a:(a=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Bt(a,"__static__"+e,!1),a)}function Lt(e,t,n){return Bt(e,"__once__"+t+(n?"_"+n:""),!0),e}function Bt(e,t,n){if(Array.isArray(e))for(var a=0;a<e.length;a++)e[a]&&"string"!==typeof e[a]&&xt(e[a],t+"_"+a,n);else xt(e,t,n)}function xt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function zt(e,t){if(t)if(c(t)){var n=e.on=e.on?N({},e.on):{};for(var a in t){var l=n[a],r=t[a];n[a]=l?[].concat(l,r):r}}else;return e}function Vt(e,t,n,a){t=t||{$stable:!n};for(var l=0;l<e.length;l++){var r=e[l];Array.isArray(r)?Vt(r,t,n):r&&(r.proxy&&(r.fn.proxy=!0),t[r.key]=r.fn)}return a&&(t.$key=a),t}function Yt(e,t){for(var n=0;n<t.length;n+=2){var a=t[n];"string"===typeof a&&a&&(e[t[n]]=t[n+1])}return e}function Ft(e,t){return"string"===typeof e?t+e:e}function Jt(e){e._o=Lt,e._n=h,e._s=b,e._l=Ot,e._t=Nt,e._q=j,e._i=L,e._m=jt,e._f=Pt,e._k=kt,e._b=Dt,e._v=de,e._e=pe,e._u=Vt,e._g=zt,e._d=Yt,e._p=Ft}function Ht(e,t,a,l,i){var o,s=this,u=i.options;I(l,"_uid")?(o=Object.create(l),o._original=l):(o=l,l=l._original);var c=r(u._compiled),f=!c;this.data=e,this.props=t,this.children=a,this.parent=l,this.listeners=e.on||n,this.injections=Et(u.inject,l),this.slots=function(){return s.$slots||St(e.scopedSlots,s.$slots=_t(a,l)),s.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return St(e.scopedSlots,this.slots())}}),c&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=St(e.scopedSlots,this.$slots)),u._scopeId?this._c=function(e,t,n,a){var r=ln(o,e,t,n,a,f);return r&&!Array.isArray(r)&&(r.fnScopeId=u._scopeId,r.fnContext=l),r}:this._c=function(e,t,n,a){return ln(o,e,t,n,a,f)}}function Zt(e,t,a,r,i){var o=e.options,s={},u=o.props;if(l(u))for(var c in u)s[c]=He(c,u,t||n);else l(a.attrs)&&Wt(s,a.attrs),l(a.props)&&Wt(s,a.props);var f=new Ht(a,s,i,r,e),g=o.render.call(null,f._c,f);if(g instanceof be)return Gt(g,a,f.parent,o,f);if(Array.isArray(g)){for(var v=mt(g)||[],b=new Array(v.length),h=0;h<v.length;h++)b[h]=Gt(v[h],a,f.parent,o,f);return b}}function Gt(e,t,n,a,l){var r=ye(e);return r.fnContext=n,r.fnOptions=a,t.slot&&((r.data||(r.data={})).slot=t.slot),r}function Wt(e,t){for(var n in t)e[T(n)]=t[n]}Jt(Ht.prototype);var Kt={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;Kt.prepatch(n,n)}else{var a=e.componentInstance=Qt(e,En);a.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,a=t.componentInstance=e.componentInstance;An(a,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(Pn(n,"onServiceCreated"),Pn(n,"onServiceAttached"),n._isMounted=!0,Pn(n,"mounted")),e.data.keepAlive&&(t._isMounted?Jn(n):On(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Nn(t,!0):t.$destroy())}},Xt=Object.keys(Kt);function $t(e,t,n,i,o){if(!a(e)){var u=n.$options._base;if(s(e)&&(e=u.extend(e)),"function"===typeof e){var c;if(a(e.cid)&&(c=e,e=hn(c,u),void 0===e))return bn(c,t,n,i,o);t=t||{},va(e),l(t.model)&&tn(e.options,t);var f=pt(t,e,o,n);if(r(e.options.functional))return Zt(e,f,t,n,i);var g=t.on;if(t.on=t.nativeOn,r(e.options.abstract)){var v=t.slot;t={},v&&(t.slot=v)}qt(t);var b=e.options.name||o,h=new be("vue-component-"+e.cid+(b?"-"+b:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:f,listeners:g,tag:o,children:i},c);return h}}}function Qt(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},a=e.data.inlineTemplate;return l(a)&&(n.render=a.render,n.staticRenderFns=a.staticRenderFns),new e.componentOptions.Ctor(n)}function qt(e){for(var t=e.hook||(e.hook={}),n=0;n<Xt.length;n++){var a=Xt[n],l=t[a],r=Kt[a];l===r||l&&l._merged||(t[a]=l?en(r,l):r)}}function en(e,t){var n=function(n,a){e(n,a),t(n,a)};return n._merged=!0,n}function tn(e,t){var n=e.model&&e.model.prop||"value",a=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var r=t.on||(t.on={}),i=r[a],o=t.model.callback;l(i)?(Array.isArray(i)?-1===i.indexOf(o):i!==o)&&(r[a]=[o].concat(i)):r[a]=o}var nn=1,an=2;function ln(e,t,n,a,l,i){return(Array.isArray(n)||o(n))&&(l=a,a=n,n=void 0),r(i)&&(l=an),rn(e,t,n,a,l)}function rn(e,t,n,a,r){if(l(n)&&l(n.__ob__))return pe();if(l(n)&&l(n.is)&&(t=n.is),!t)return pe();var i,o,s;(Array.isArray(a)&&"function"===typeof a[0]&&(n=n||{},n.scopedSlots={default:a[0]},a.length=0),r===an?a=mt(a):r===nn&&(a=yt(a)),"string"===typeof t)?(o=e.$vnode&&e.$vnode.ns||V.getTagNamespace(t),i=V.isReservedTag(t)?new be(V.parsePlatformTagName(t),n,a,void 0,void 0,e):n&&n.pre||!l(s=Je(e.$options,"components",t))?new be(t,n,a,void 0,void 0,e):$t(s,n,e,a,t)):i=$t(t,n,e,a);return Array.isArray(i)?i:l(i)?(l(o)&&on(i,o),l(n)&&sn(n),i):pe()}function on(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),l(e.children))for(var i=0,o=e.children.length;i<o;i++){var s=e.children[i];l(s.tag)&&(a(s.ns)||r(n)&&"svg"!==s.tag)&&on(s,t,n)}}function sn(e){s(e.style)&&ct(e.style),s(e.class)&&ct(e.class)}function un(e){e._vnode=null,e._staticTrees=null;var t=e.$options,a=e.$vnode=t._parentVnode,l=a&&a.context;e.$slots=_t(t._renderChildren,l),e.$scopedSlots=n,e._c=function(t,n,a,l){return ln(e,t,n,a,l,!1)},e.$createElement=function(t,n,a,l){return ln(e,t,n,a,l,!0)};var r=a&&a.data;we(e,"$attrs",r&&r.attrs||n,null,!0),we(e,"$listeners",t._parentListeners||n,null,!0)}var cn,fn=null;function gn(e){Jt(e.prototype),e.prototype.$nextTick=function(e){return st(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,a=n.render,l=n._parentVnode;l&&(t.$scopedSlots=St(l.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=l;try{fn=t,e=a.call(t._renderProxy,t.$createElement)}catch(nl){Xe(nl,t,"render"),e=t._vnode}finally{fn=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof be||(e=pe()),e.parent=l,e}}function vn(e,t){return(e.__esModule||se&&"Module"===e[Symbol.toStringTag])&&(e=e.default),s(e)?t.extend(e):e}function bn(e,t,n,a,l){var r=pe();return r.asyncFactory=e,r.asyncMeta={data:t,context:n,children:a,tag:l},r}function hn(e,t){if(r(e.error)&&l(e.errorComp))return e.errorComp;if(l(e.resolved))return e.resolved;var n=fn;if(n&&l(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),r(e.loading)&&l(e.loadingComp))return e.loadingComp;if(n&&!l(e.owners)){var i=e.owners=[n],o=!0,u=null,c=null;n.$on("hook:destroyed",function(){return y(i,n)});var f=function(e){for(var t=0,n=i.length;t<n;t++)i[t].$forceUpdate();e&&(i.length=0,null!==u&&(clearTimeout(u),u=null),null!==c&&(clearTimeout(c),c=null))},g=B(function(n){e.resolved=vn(n,t),o?i.length=0:f(!0)}),b=B(function(t){l(e.errorComp)&&(e.error=!0,f(!0))}),h=e(g,b);return s(h)&&(v(h)?a(e.resolved)&&h.then(g,b):v(h.component)&&(h.component.then(g,b),l(h.error)&&(e.errorComp=vn(h.error,t)),l(h.loading)&&(e.loadingComp=vn(h.loading,t),0===h.delay?e.loading=!0:u=setTimeout(function(){u=null,a(e.resolved)&&a(e.error)&&(e.loading=!0,f(!1))},h.delay||200)),l(h.timeout)&&(c=setTimeout(function(){c=null,a(e.resolved)&&b(null)},h.timeout)))),o=!1,e.loading?e.loadingComp:e.resolved}}function pn(e){return e.isComment&&e.asyncFactory}function dn(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(l(n)&&(l(n.componentOptions)||pn(n)))return n}}function yn(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Mn(e,t)}function mn(e,t){cn.$on(e,t)}function In(e,t){cn.$off(e,t)}function Cn(e,t){var n=cn;return function a(){var l=t.apply(null,arguments);null!==l&&n.$off(e,a)}}function Mn(e,t,n){cn=e,bt(t,n||{},mn,In,Cn,e),cn=void 0}function Tn(e){var t=/^hook:/;e.prototype.$on=function(e,n){var a=this;if(Array.isArray(e))for(var l=0,r=e.length;l<r;l++)a.$on(e[l],n);else(a._events[e]||(a._events[e]=[])).push(n),t.test(e)&&(a._hasHookEvent=!0);return a},e.prototype.$once=function(e,t){var n=this;function a(){n.$off(e,a),t.apply(n,arguments)}return a.fn=t,n.$on(e,a),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var a=0,l=e.length;a<l;a++)n.$off(e[a],t);return n}var r,i=n._events[e];if(!i)return n;if(!t)return n._events[e]=null,n;var o=i.length;while(o--)if(r=i[o],r===t||r.fn===t){i.splice(o,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?O(n):n;for(var a=O(arguments,1),l='event handler for "'+e+'"',r=0,i=n.length;r<i;r++)$e(n[r],t,a,t,l)}return t}}var En=null;function _n(e){var t=En;return En=e,function(){En=t}}function Rn(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Sn(e){e.prototype._update=function(e,t){var n=this,a=n.$el,l=n._vnode,r=_n(n);n._vnode=e,n.$el=l?n.__patch__(l,e):n.__patch__(n.$el,e,t,!1),r(),a&&(a.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Pn(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||y(t.$children,e),e._watcher&&e._watcher.teardown();var n=e._watchers.length;while(n--)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Pn(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function An(e,t,a,l,r){var i=l.data.scopedSlots,o=e.$scopedSlots,s=!!(i&&!i.$stable||o!==n&&!o.$stable||i&&e.$scopedSlots.$key!==i.$key),u=!!(r||e.$options._renderChildren||s);if(e.$options._parentVnode=l,e.$vnode=l,e._vnode&&(e._vnode.parent=l),e.$options._renderChildren=r,e.$attrs=l.data.attrs||n,e.$listeners=a||n,t&&e.$options.props){Ee(!1);for(var c=e._props,f=e.$options._propKeys||[],g=0;g<f.length;g++){var v=f[g],b=e.$options.props;c[v]=He(v,b,t,e)}Ee(!0),e.$options.propsData=t}e._$updateProperties&&e._$updateProperties(e),a=a||n;var h=e.$options._parentListeners;e.$options._parentListeners=a,Mn(e,a,h),u&&(e.$slots=_t(r,l.context),e.$forceUpdate())}function wn(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function On(e,t){if(t){if(e._directInactive=!1,wn(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)On(e.$children[n]);Pn(e,"activated")}}function Nn(e,t){if((!t||(e._directInactive=!0,!wn(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Nn(e.$children[n]);Pn(e,"deactivated")}}function Pn(e,t){ge();var n=e.$options[t],a=t+" hook";if(n)for(var l=0,r=n.length;l<r;l++)$e(n[l],e,null,e,a);e._hasHookEvent&&e.$emit("hook:"+t),ve()}var Un=[],kn=[],Dn={},jn=!1,Ln=!1,Bn=0;function xn(){Bn=Un.length=kn.length=0,Dn={},jn=Ln=!1}var zn=Date.now;if(K&&!q){var Vn=window.performance;Vn&&"function"===typeof Vn.now&&zn()>document.createEvent("Event").timeStamp&&(zn=function(){return Vn.now()})}function Yn(){var e,t;for(zn(),Ln=!0,Un.sort(function(e,t){return e.id-t.id}),Bn=0;Bn<Un.length;Bn++)e=Un[Bn],e.before&&e.before(),t=e.id,Dn[t]=null,e.run();var n=kn.slice(),a=Un.slice();xn(),Hn(n),Fn(a),re&&V.devtools&&re.emit("flush")}function Fn(e){var t=e.length;while(t--){var n=e[t],a=n.vm;a._watcher===n&&a._isMounted&&!a._isDestroyed&&Pn(a,"updated")}}function Jn(e){e._inactive=!1,kn.push(e)}function Hn(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,On(e[t],!0)}function Zn(e){var t=e.id;if(null==Dn[t]){if(Dn[t]=!0,Ln){var n=Un.length-1;while(n>Bn&&Un[n].id>e.id)n--;Un.splice(n+1,0,e)}else Un.push(e);jn||(jn=!0,st(Yn))}}var Gn=0,Wn=function(e,t,n,a,l){this.vm=e,l&&(e._watcher=this),e._watchers.push(this),a?(this.deep=!!a.deep,this.user=!!a.user,this.lazy=!!a.lazy,this.sync=!!a.sync,this.before=a.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Gn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new oe,this.newDepIds=new oe,this.expression="","function"===typeof t?this.getter=t:(this.getter=Z(t),this.getter||(this.getter=U)),this.value=this.lazy?void 0:this.get()};Wn.prototype.get=function(){var e;ge(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(nl){if(!this.user)throw nl;Xe(nl,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ct(e),ve(),this.cleanupDeps()}return e},Wn.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},Wn.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Wn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Zn(this)},Wn.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||s(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(nl){Xe(nl,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},Wn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Wn.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},Wn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var Kn={enumerable:!0,configurable:!0,get:U,set:U};function Xn(e,t,n){Kn.get=function(){return this[t][n]},Kn.set=function(e){this[t][n]=e},Object.defineProperty(e,n,Kn)}function $n(e){e._watchers=[];var t=e.$options;t.props&&Qn(e,t.props),t.methods&&ia(e,t.methods),t.data?qn(e):Ae(e._data={},!0),t.computed&&na(e,t.computed),t.watch&&t.watch!==ne&&oa(e,t.watch)}function Qn(e,t){var n=e.$options.propsData||{},a=e._props={},l=e.$options._propKeys=[],r=!e.$parent;r||Ee(!1);var i=function(r){l.push(r);var i=He(r,t,n,e);we(a,r,i),r in e||Xn(e,"_props",r)};for(var o in t)i(o);Ee(!0)}function qn(e){var t=e.$options.data;t=e._data="function"===typeof t?ea(t,e):t||{},c(t)||(t={});var n=Object.keys(t),a=e.$options.props,l=(e.$options.methods,n.length);while(l--){var r=n[l];0,a&&I(a,r)||F(r)||Xn(e,"_data",r)}Ae(t,!0)}function ea(e,t){ge();try{return e.call(t,t)}catch(nl){return Xe(nl,t,"data()"),{}}finally{ve()}}var ta={lazy:!0};function na(e,t){var n=e._computedWatchers=Object.create(null),a=le();for(var l in t){var r=t[l],i="function"===typeof r?r:r.get;0,a||(n[l]=new Wn(e,i||U,U,ta)),l in e||aa(e,l,r)}}function aa(e,t,n){var a=!le();"function"===typeof n?(Kn.get=a?la(t):ra(n),Kn.set=U):(Kn.get=n.get?a&&!1!==n.cache?la(t):ra(n.get):U,Kn.set=n.set||U),Object.defineProperty(e,t,Kn)}function la(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),fe.SharedObject.target&&t.depend(),t.value}}function ra(e){return function(){return e.call(this,this)}}function ia(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?U:w(t[n],e)}function oa(e,t){for(var n in t){var a=t[n];if(Array.isArray(a))for(var l=0;l<a.length;l++)sa(e,n,a[l]);else sa(e,n,a)}}function sa(e,t,n,a){return c(n)&&(a=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,a)}function ua(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Oe,e.prototype.$delete=Ne,e.prototype.$watch=function(e,t,n){var a=this;if(c(t))return sa(a,e,t,n);n=n||{},n.user=!0;var l=new Wn(a,e,t,n);if(n.immediate)try{t.call(a,l.value)}catch(r){Xe(r,a,'callback for immediate watcher "'+l.expression+'"')}return function(){l.teardown()}}}var ca=0;function fa(e){e.prototype._init=function(e){var t=this;t._uid=ca++,t._isVue=!0,e&&e._isComponent?ga(t,e):t.$options=Fe(va(t.constructor),e||{},t),t._renderProxy=t,t._self=t,Rn(t),yn(t),un(t),Pn(t,"beforeCreate"),"mp-toutiao"!==t.mpHost&&Tt(t),$n(t),"mp-toutiao"!==t.mpHost&&Mt(t),"mp-toutiao"!==t.mpHost&&Pn(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function ga(e,t){var n=e.$options=Object.create(e.constructor.options),a=t._parentVnode;n.parent=t.parent,n._parentVnode=a;var l=a.componentOptions;n.propsData=l.propsData,n._parentListeners=l.listeners,n._renderChildren=l.children,n._componentTag=l.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function va(e){var t=e.options;if(e.super){var n=va(e.super),a=e.superOptions;if(n!==a){e.superOptions=n;var l=ba(e);l&&N(e.extendOptions,l),t=e.options=Fe(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function ba(e){var t,n=e.options,a=e.sealedOptions;for(var l in n)n[l]!==a[l]&&(t||(t={}),t[l]=n[l]);return t}function ha(e){this._init(e)}function pa(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=O(arguments,1);return n.unshift(this),"function"===typeof e.install?e.install.apply(e,n):"function"===typeof e&&e.apply(null,n),t.push(e),this}}function da(e){e.mixin=function(e){return this.options=Fe(this.options,e),this}}function ya(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,a=n.cid,l=e._Ctor||(e._Ctor={});if(l[a])return l[a];var r=e.name||n.options.name;var i=function(e){this._init(e)};return i.prototype=Object.create(n.prototype),i.prototype.constructor=i,i.cid=t++,i.options=Fe(n.options,e),i["super"]=n,i.options.props&&ma(i),i.options.computed&&Ia(i),i.extend=n.extend,i.mixin=n.mixin,i.use=n.use,x.forEach(function(e){i[e]=n[e]}),r&&(i.options.components[r]=i),i.superOptions=n.options,i.extendOptions=e,i.sealedOptions=N({},i.options),l[a]=i,i}}function ma(e){var t=e.options.props;for(var n in t)Xn(e.prototype,"_props",n)}function Ia(e){var t=e.options.computed;for(var n in t)aa(e.prototype,n,t[n])}function Ca(e){x.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&c(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"===typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}function Ma(e){return e&&(e.Ctor.options.name||e.tag)}function Ta(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!f(e)&&e.test(t)}function Ea(e,t){var n=e.cache,a=e.keys,l=e._vnode;for(var r in n){var i=n[r];if(i){var o=Ma(i.componentOptions);o&&!t(o)&&_a(n,r,a,l)}}}function _a(e,t,n,a){var l=e[t];!l||a&&l.tag===a.tag||l.componentInstance.$destroy(),e[t]=null,y(n,t)}fa(ha),ua(ha),Tn(ha),Sn(ha),gn(ha);var Ra=[String,RegExp,Array],Sa={name:"keep-alive",abstract:!0,props:{include:Ra,exclude:Ra,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)_a(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(t){Ea(e,function(e){return Ta(t,e)})}),this.$watch("exclude",function(t){Ea(e,function(e){return!Ta(t,e)})})},render:function(){var e=this.$slots.default,t=dn(e),n=t&&t.componentOptions;if(n){var a=Ma(n),l=this,r=l.include,i=l.exclude;if(r&&(!a||!Ta(r,a))||i&&a&&Ta(i,a))return t;var o=this,s=o.cache,u=o.keys,c=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;s[c]?(t.componentInstance=s[c].componentInstance,y(u,c),u.push(c)):(s[c]=t,u.push(c),this.max&&u.length>parseInt(this.max)&&_a(s,u[0],u,this._vnode)),t.data.keepAlive=!0}return t||e&&e[0]}},Aa={KeepAlive:Sa};function wa(e){var t={get:function(){return V}};Object.defineProperty(e,"config",t),e.util={warn:ue,extend:N,mergeOptions:Fe,defineReactive:we},e.set=Oe,e.delete=Ne,e.nextTick=st,e.observable=function(e){return Ae(e),e},e.options=Object.create(null),x.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,N(e.options.components,Aa),pa(e),da(e),ya(e),Ca(e)}wa(ha),Object.defineProperty(ha.prototype,"$isServer",{get:le}),Object.defineProperty(ha.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(ha,"FunctionalRenderContext",{value:Ht}),ha.version="2.6.11";var Oa="[object Array]",Na="[object Object]";function Pa(e,t){var n={};return Ua(e,t),ka(e,t,"",n),n}function Ua(e,t){if(e!==t){var n=ja(e),a=ja(t);if(n==Na&&a==Na){if(Object.keys(e).length>=Object.keys(t).length)for(var l in t){var r=e[l];void 0===r?e[l]=null:Ua(r,t[l])}}else n==Oa&&a==Oa&&e.length>=t.length&&t.forEach(function(t,n){Ua(e[n],t)})}}function ka(e,t,n,a){if(e!==t){var l=ja(e),r=ja(t);if(l==Na)if(r!=Na||Object.keys(e).length<Object.keys(t).length)Da(a,n,e);else{var i=function(l){var r=e[l],i=t[l],o=ja(r),s=ja(i);if(o!=Oa&&o!=Na)r!=t[l]&&Da(a,(""==n?"":n+".")+l,r);else if(o==Oa)s!=Oa?Da(a,(""==n?"":n+".")+l,r):r.length<i.length?Da(a,(""==n?"":n+".")+l,r):r.forEach(function(e,t){ka(e,i[t],(""==n?"":n+".")+l+"["+t+"]",a)});else if(o==Na)if(s!=Na||Object.keys(r).length<Object.keys(i).length)Da(a,(""==n?"":n+".")+l,r);else for(var u in r)ka(r[u],i[u],(""==n?"":n+".")+l+"."+u,a)};for(var o in e)i(o)}else l==Oa?r!=Oa?Da(a,n,e):e.length<t.length?Da(a,n,e):e.forEach(function(e,l){ka(e,t[l],n+"["+l+"]",a)}):Da(a,n,e)}}function Da(e,t,n){e[t]=n}function ja(e){return Object.prototype.toString.call(e)}function La(e){if(e.__next_tick_callbacks&&e.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var t=e.$scope;console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+e._uid+"]:flushCallbacks["+e.__next_tick_callbacks.length+"]")}var n=e.__next_tick_callbacks.slice(0);e.__next_tick_callbacks.length=0;for(var a=0;a<n.length;a++)n[a]()}}function Ba(e){return Un.find(function(t){return e._watcher===t})}function xa(e,t){if(!e.__next_tick_pending&&!Ba(e)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=e.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+e._uid+"]:nextVueTick")}return st(t,e)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var a=e.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+e._uid+"]:nextMPTick")}var l;if(e.__next_tick_callbacks||(e.__next_tick_callbacks=[]),e.__next_tick_callbacks.push(function(){if(t)try{t.call(e)}catch(nl){Xe(nl,e,"nextTick")}else l&&l(e)}),!t&&"undefined"!==typeof Promise)return new Promise(function(e){l=e})}function za(e){var t=Object.create(null),n=[].concat(Object.keys(e._data||{}),Object.keys(e._computedWatchers||{}));return n.reduce(function(t,n){return t[n]=e[n],t},t),Object.assign(t,e.$mp.data||{}),Array.isArray(e.$options.behaviors)&&-1!==e.$options.behaviors.indexOf("uni://form-field")&&(t["name"]=e.name,t["value"]=e.value),JSON.parse(JSON.stringify(t))}var Va=function(e,t){var n=this;if(null!==t&&("page"===this.mpType||"component"===this.mpType)){var a=this.$scope,l=Object.create(null);try{l=za(this)}catch(o){console.error(o)}l.__webviewId__=a.data.__webviewId__;var r=Object.create(null);Object.keys(l).forEach(function(e){r[e]=a.data[e]});var i=Pa(l,r);Object.keys(i).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+this._uid+"]差量更新",JSON.stringify(i)),this.__next_tick_pending=!0,a.setData(i,function(){n.__next_tick_pending=!1,La(n)})):La(this)}};function Ya(){}function Fa(e,t,n){if(!e.mpType)return e;"app"===e.mpType&&(e.$options.render=Ya),e.$options.render||(e.$options.render=Ya),"mp-toutiao"!==e.mpHost&&Pn(e,"beforeMount");var a=function(){e._update(e._render(),n)};return new Wn(e,a,U,{before:function(){e._isMounted&&!e._isDestroyed&&Pn(e,"beforeUpdate")}},!0),n=!1,e}function Ja(e,t){return l(e)||l(t)?Ha(e,Za(t)):""}function Ha(e,t){return e?t?e+" "+t:e:t||""}function Za(e){return Array.isArray(e)?Ga(e):s(e)?Wa(e):"string"===typeof e?e:""}function Ga(e){for(var t,n="",a=0,r=e.length;a<r;a++)l(t=Za(e[a]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function Wa(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var Ka=C(function(e){var t={},n=/;(?![^(]*\))/g,a=/:(.+)/;return e.split(n).forEach(function(e){if(e){var n=e.split(a);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t});function Xa(e){return Array.isArray(e)?P(e):"string"===typeof e?Ka(e):e}var $a=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Qa(e,t){var n=t.split("."),a=n[0];return 0===a.indexOf("__$n")&&(a=parseInt(a.replace("__$n",""))),1===n.length?e[a]:Qa(e[a],n.slice(1).join("."))}function qa(e){e.config.errorHandler=function(e){var t=getApp();t&&t.onError?t.onError(e):console.error(e)};var t=e.prototype.$emit;e.prototype.$emit=function(e){return this.$scope&&e&&this.$scope["triggerEvent"](e,{__args__:O(arguments,1)}),t.apply(this,arguments)},e.prototype.$nextTick=function(e){return xa(this,e)},$a.forEach(function(t){e.prototype[t]=function(e){return this.$scope&&this.$scope[t]?this.$scope[t](e):"undefined"!==typeof my?"createSelectorQuery"===t?my.createSelectorQuery(e):"createIntersectionObserver"===t?my.createIntersectionObserver(e):void 0:void 0}}),e.prototype.__init_provide=Mt,e.prototype.__init_injections=Tt,e.prototype.__call_hook=function(e,t){var n=this;ge();var a,l=n.$options[e],r=e+" hook";if(l)for(var i=0,o=l.length;i<o;i++)a=$e(l[i],n,t?[t]:null,n,r);return n._hasHookEvent&&n.$emit("hook:"+e,t),ve(),a},e.prototype.__set_model=function(e,t,n,a){Array.isArray(a)&&(-1!==a.indexOf("trim")&&(n=n.trim()),-1!==a.indexOf("number")&&(n=this._n(n))),e||(e=this),e[t]=n},e.prototype.__set_sync=function(e,t,n){e||(e=this),e[t]=n},e.prototype.__get_orig=function(e){return c(e)&&e["$orig"]||e},e.prototype.__get_value=function(e,t){return Qa(t||this,e)},e.prototype.__get_class=function(e,t){return Ja(t,e)},e.prototype.__get_style=function(e,t){if(!e&&!t)return"";var n=Xa(e),a=t?N(t,n):n;return Object.keys(a).map(function(e){return R(e)+":"+a[e]}).join(";")},e.prototype.__map=function(e,t){var n,a,l,r,i;if(Array.isArray(e)){for(n=new Array(e.length),a=0,l=e.length;a<l;a++)n[a]=t(e[a],a);return n}if(s(e)){for(r=Object.keys(e),n=Object.create(null),a=0,l=r.length;a<l;a++)i=r[a],n[i]=t(e[i],i,a);return n}return[]}}var el=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function tl(e){var t=e.extend;e.extend=function(e){e=e||{};var n=e.methods;return n&&Object.keys(n).forEach(function(t){-1!==el.indexOf(t)&&(e[t]=n[t],delete n[t])}),t.call(this,e)};var n=e.config.optionMergeStrategies,a=n.created;el.forEach(function(e){n[e]=a}),e.prototype.__lifecycle_hooks__=el}ha.prototype.__patch__=Va,ha.prototype.$mount=function(e,t){return Fa(this,e,t)},tl(ha),qa(ha),t["default"]=ha}.call(this,n("c8ba"))},"6e42":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.createApp=bt,t.createComponent=Et,t.createPage=Tt,t.default=void 0;var a=l(n("66fd"));function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){return s(e)||o(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(e,t){var n=[],a=!0,l=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done);a=!0)if(n.push(i.value),t&&n.length===t)break}catch(s){l=!0,r=s}finally{try{a||null==o["return"]||o["return"]()}finally{if(l)throw r}}return n}function s(e){if(Array.isArray(e))return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){return v(e)||g(e)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function g(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function v(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}var b=Object.prototype.toString,h=Object.prototype.hasOwnProperty;function p(e){return"function"===typeof e}function d(e){return"string"===typeof e}function y(e){return"[object Object]"===b.call(e)}function m(e,t){return h.call(e,t)}function I(){}function C(e){var t=Object.create(null);return function(n){var a=t[n];return a||(t[n]=e(n))}}var M=/-(\w)/g,T=C(function(e){return e.replace(M,function(e,t){return t?t.toUpperCase():""})}),E=["invoke","success","fail","complete","returnValue"],_={},R={};function S(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?A(n):n}function A(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function w(e,t){var n=e.indexOf(t);-1!==n&&e.splice(n,1)}function O(e,t){Object.keys(t).forEach(function(n){-1!==E.indexOf(n)&&p(t[n])&&(e[n]=S(e[n],t[n]))})}function N(e,t){e&&t&&Object.keys(t).forEach(function(n){-1!==E.indexOf(n)&&p(t[n])&&w(e[n],t[n])})}function P(e,t){"string"===typeof e&&y(t)?O(R[e]||(R[e]={}),t):y(e)&&O(_,e)}function U(e,t){"string"===typeof e?y(t)?N(R[e],t):delete R[e]:y(e)&&N(_,e)}function k(e){return function(t){return e(t)||t}}function D(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then}function j(e,t){for(var n=!1,a=0;a<e.length;a++){var l=e[a];if(n)n=Promise.then(k(l));else{var r=l(t);if(D(r)&&(n=Promise.resolve(r)),!1===r)return{then:function(){}}}}return n||{then:function(e){return e(t)}}}function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(e[n])){var a=t[n];t[n]=function(t){j(e[n],t).then(function(e){return p(a)&&a(e)||e})}}}),t}function B(e,t){var n=[];Array.isArray(_.returnValue)&&n.push.apply(n,c(_.returnValue));var a=R[e];return a&&Array.isArray(a.returnValue)&&n.push.apply(n,c(a.returnValue)),n.forEach(function(e){t=e(t)||t}),t}function x(e){var t=Object.create(null);Object.keys(_).forEach(function(e){"returnValue"!==e&&(t[e]=_[e].slice())});var n=R[e];return n&&Object.keys(n).forEach(function(e){"returnValue"!==e&&(t[e]=(t[e]||[]).concat(n[e]))}),t}function z(e,t,n){for(var a=arguments.length,l=new Array(a>3?a-3:0),r=3;r<a;r++)l[r-3]=arguments[r];var i=x(e);if(i&&Object.keys(i).length){if(Array.isArray(i.invoke)){var o=j(i.invoke,n);return o.then(function(e){return t.apply(void 0,[L(i,e)].concat(l))})}return t.apply(void 0,[L(i,n)].concat(l))}return t.apply(void 0,[n].concat(l))}var V={returnValue:function(e){return D(e)?e.then(function(e){return e[1]}).catch(function(e){return e[0]}):e}},Y=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,F=/^create|Manager$/,J=/^on/;function H(e){return F.test(e)}function Z(e){return Y.test(e)}function G(e){return J.test(e)&&"onPush"!==e}function W(e){return e.then(function(e){return[null,e]}).catch(function(e){return[e]})}function K(e){return!(H(e)||Z(e)||G(e))}function X(e,t){return K(e)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length,l=new Array(a>1?a-1:0),r=1;r<a;r++)l[r-1]=arguments[r];return p(n.success)||p(n.fail)||p(n.complete)?B(e,z.apply(void 0,[e,t,n].concat(l))):B(e,W(new Promise(function(a,r){z.apply(void 0,[e,t,Object.assign({},n,{success:a,fail:r})].concat(l)),Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){throw n})})})})))}:t}var $=1e-4,Q=750,q=!1,ee=0,te=0;function ne(){var e=wx.getSystemInfoSync(),t=e.platform,n=e.pixelRatio,a=e.windowWidth;ee=a,te=n,q="ios"===t}function ae(e,t){if(0===ee&&ne(),e=Number(e),0===e)return 0;var n=e/Q*(t||ee);return n<0&&(n=-n),n=Math.floor(n+$),0===n?1!==te&&q?.5:1:e<0?-n:n}var le={promiseInterceptor:V},re=Object.freeze({__proto__:null,upx2px:ae,interceptors:le,addInterceptor:P,removeInterceptor:U}),ie={},oe=[],se=[],ue=["success","fail","cancel","complete"];function ce(e,t,n){return function(a){return t(ge(e,a,n))}}function fe(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},l=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(y(t)){var r=!0===l?t:{};for(var i in p(n)&&(n=n(t,r)||{}),t)if(m(n,i)){var o=n[i];p(o)&&(o=o(t[i],t,r)),o?d(o)?r[o]=t[i]:y(o)&&(r[o.name?o.name:i]=o.value):console.warn("app-plus ".concat(e,"暂不支持").concat(i))}else-1!==ue.indexOf(i)?r[i]=ce(e,t[i],a):l||(r[i]=t[i]);return r}return p(t)&&(t=ce(e,t,a)),t}function ge(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return p(ie.returnValue)&&(t=ie.returnValue(e,t)),fe(e,t,n,{},a)}function ve(e,t){if(m(ie,e)){var n=ie[e];return n?function(t,a){var l=n;p(n)&&(l=n(t)),t=fe(e,t,l.args,l.returnValue);var r=[t];"undefined"!==typeof a&&r.push(a);var i=wx[l.name||e].apply(wx,r);return Z(e)?ge(e,i,l.returnValue,H(e)):i}:function(){console.error("app-plus 暂不支持".concat(e))}}return t}var be=Object.create(null),he=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function pe(e){return function(t){var n=t.fail,a=t.complete,l={errMsg:"".concat(e,":fail:暂不支持 ").concat(e," 方法")};p(n)&&n(l),p(a)&&a(l)}}he.forEach(function(e){be[e]=pe(e)});var de=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return e||(e=new a.default),e};var e}();function ye(e,t,n){return e[t].apply(e,n)}function me(){return ye(de(),"$on",Array.prototype.slice.call(arguments))}function Ie(){return ye(de(),"$off",Array.prototype.slice.call(arguments))}function Ce(){return ye(de(),"$once",Array.prototype.slice.call(arguments))}function Me(){return ye(de(),"$emit",Array.prototype.slice.call(arguments))}var Te=Object.freeze({__proto__:null,$on:me,$off:Ie,$once:Ce,$emit:Me});function Ee(e){return"undefined"!==typeof weex?weex.requireModule(e):__requireNativePlugin__(e)}function _e(e){e.$processed=!0,e.postMessage=function(t){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:t},e.id)};var t=[];if(e.onMessage=function(e){t.push(e)},e.$consumeMessage=function(e){t.forEach(function(t){return t(e)})},e.__uniapp_mask_id){var n=e.__uniapp_mask,a="0"===e.__uniapp_mask_id?{setStyle:function(e){var t=e.mask;Ee("uni-tabview").setMask({color:t})}}:plus.webview.getWebviewById(e.__uniapp_mask_id),l=e.show,r=e.hide,i=e.close,o=function(){a.setStyle({mask:n})},s=function(){a.setStyle({mask:"none"})};e.show=function(){o();for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return l.apply(e,n)},e.hide=function(){s();for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return r.apply(e,n)},e.close=function(){s(),t=[];for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return i.apply(e,a)}}}function Re(e){var t=plus.webview.getWebviewById(e);return t&&!t.$processed&&_e(t),t}var Se=Object.freeze({__proto__:null,getSubNVueById:Re,requireNativePlugin:Ee}),Ae=Page,we=Component,Oe=/:/g,Ne=C(function(e){return T(e.replace(Oe,"-"))});function Pe(e){if(wx.canIUse("nextTick")){var t=e.triggerEvent;e.triggerEvent=function(n){for(var a=arguments.length,l=new Array(a>1?a-1:0),r=1;r<a;r++)l[r-1]=arguments[r];return t.apply(e,[Ne(n)].concat(l))}}}function Ue(e,t){var n=t[e];t[e]=n?function(){Pe(this);for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return n.apply(this,t)}:function(){Pe(this)}}Page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ue("onLoad",e),Ae(e)},Component=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ue("created",e),we(e)};var ke=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function De(e,t){var n=e.$mp[e.mpType];t.forEach(function(t){m(n,t)&&(e[t]=n[t])})}function je(e,t){if(!t)return!0;if(a.default.options&&Array.isArray(a.default.options[e]))return!0;if(t=t.default||t,p(t))return!!p(t.extendOptions[e])||!!(t.super&&t.super.options&&Array.isArray(t.super.options[e]));if(p(t[e]))return!0;var n=t.mixins;return Array.isArray(n)?!!n.find(function(t){return je(e,t)}):void 0}function Le(e,t,n){t.forEach(function(t){je(t,n)&&(e[t]=function(e){return this.$vm&&this.$vm.__call_hook(t,e)})})}function Be(e,t){var n;return t=t.default||t,p(t)?(n=t,t=n.extendOptions):n=e.extend(t),[n,t]}function xe(e,t){if(Array.isArray(t)&&t.length){var n=Object.create(null);t.forEach(function(e){n[e]=!0}),e.$scopedSlots=e.$slots=n}}function ze(e,t){e=(e||"").split(",");var n=e.length;1===n?t._$vueId=e[0]:2===n&&(t._$vueId=e[0],t._$vuePid=e[1])}function Ve(e,t){var n=e.data||{},a=e.methods||{};if("function"===typeof n)try{n=n.call(t)}catch(l){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(l){}return y(n)||(n={}),Object.keys(a).forEach(function(e){-1!==t.__lifecycle_hooks__.indexOf(e)||m(n,e)||(n[e]=a[e])}),n}var Ye=[String,Number,Boolean,Object,Array,null];function Fe(e){return function(t,n){this.$vm&&(this.$vm[e]=t)}}function Je(e,t){var n=e["behaviors"],a=e["extends"],l=e["mixins"],r=e["props"];r||(e["props"]=r=[]);var i=[];return Array.isArray(n)&&n.forEach(function(e){i.push(e.replace("uni://","wx".concat("://"))),"uni://form-field"===e&&(Array.isArray(r)?(r.push("name"),r.push("value")):(r["name"]={type:String,default:""},r["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),y(a)&&a.props&&i.push(t({properties:Ze(a.props,!0)})),Array.isArray(l)&&l.forEach(function(e){y(e)&&e.props&&i.push(t({properties:Ze(e.props,!0)}))}),i}function He(e,t,n,a){return Array.isArray(t)&&1===t.length?t[0]:t}function Ze(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return t||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(e,t){var n=Object.create(null);e.forEach(function(e){n[e]=!0}),this.setData({$slots:n})}}),Array.isArray(e)?e.forEach(function(e){n[e]={type:null,observer:Fe(e)}}):y(e)&&Object.keys(e).forEach(function(t){var a=e[t];if(y(a)){var l=a["default"];p(l)&&(l=l()),a.type=He(t,a.type),n[t]={type:-1!==Ye.indexOf(a.type)?a.type:null,value:l,observer:Fe(t)}}else{var r=He(t,a);n[t]={type:-1!==Ye.indexOf(r)?r:null,observer:Fe(t)}}}),n}function Ge(e){try{e.mp=JSON.parse(JSON.stringify(e))}catch(t){}return e.stopPropagation=I,e.preventDefault=I,e.target=e.target||{},m(e,"detail")||(e.detail={}),y(e.detail)&&(e.target=Object.assign({},e.target,e.detail)),e}function We(e,t){var n=e;return t.forEach(function(t){var a=t[0],l=t[2];if(a||"undefined"!==typeof l){var r=t[1],i=t[3],o=a?e.__get_value(a,n):n;Number.isInteger(o)?n=l:r?Array.isArray(o)?n=o.find(function(t){return e.__get_value(r,t)===l}):y(o)?n=Object.keys(o).find(function(t){return e.__get_value(r,o[t])===l}):console.error("v-for 暂不支持循环数据：",o):n=o[l],i&&(n=e.__get_value(i,n))}}),n}function Ke(e,t,n){var a={};return Array.isArray(t)&&t.length&&t.forEach(function(t,l){"string"===typeof t?t?"$event"===t?a["$"+l]=n:0===t.indexOf("$event.")?a["$"+l]=e.__get_value(t.replace("$event.",""),n):a["$"+l]=e.__get_value(t):a["$"+l]=e:a["$"+l]=We(e,t)}),a}function Xe(e){for(var t={},n=1;n<e.length;n++){var a=e[n];t[a[0]]=a[1]}return t}function $e(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],l=arguments.length>4?arguments[4]:void 0,r=arguments.length>5?arguments[5]:void 0,i=!1;if(l&&(i=t.currentTarget&&t.currentTarget.dataset&&"wx"===t.currentTarget.dataset.comType,!n.length))return i?[t]:t.detail.__args__||t.detail;var o=Ke(e,a,t),s=[];return n.forEach(function(e){"$event"===e?"__set_model"!==r||l?l&&!i?s.push(t.detail.__args__[0]):s.push(t):s.push(t.target.value):Array.isArray(e)&&"o"===e[0]?s.push(Xe(e)):"string"===typeof e&&m(o,e)?s.push(o[e]):s.push(e)}),s}var Qe="~",qe="^";function et(e,t){return e===t||"regionchange"===t&&("begin"===e||"end"===e)}function tt(e){var t=this;e=Ge(e);var n=(e.currentTarget||e.target).dataset;if(!n)return console.warn("事件信息不存在");var a=n.eventOpts||n["event-opts"];if(!a)return console.warn("事件信息不存在");var l=e.type,r=[];return a.forEach(function(n){var a=n[0],i=n[1],o=a.charAt(0)===qe;a=o?a.slice(1):a;var s=a.charAt(0)===Qe;a=s?a.slice(1):a,i&&et(l,a)&&i.forEach(function(n){var a=n[0];if(a){var l=t.$vm;if(l.$options.generic&&l.$parent&&l.$parent.$parent&&(l=l.$parent.$parent),"$emit"===a)return void l.$emit.apply(l,$e(t.$vm,e,n[1],n[2],o,a));var i=l[a];if(!p(i))throw new Error(" _vm.".concat(a," is not a function"));if(s){if(i.once)return;i.once=!0}r.push(i.apply(l,$e(t.$vm,e,n[1],n[2],o,a)))}})}),"input"===l&&1===r.length&&"undefined"!==typeof r[0]?r[0]:void 0}var nt=["onShow","onHide","onError","onPageNotFound"];function at(e,t){var n=t.mocks,l=t.initRefs;e.$options.store&&(a.default.prototype.$store=e.$options.store),a.default.prototype.mpHost="app-plus",a.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=u({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(l(this),De(this,n)))}});var r={onLaunch:function(t){this.$vm||(this.$vm=e,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",t),this.$vm.__call_hook("onLaunch",t))}};r.globalData=e.$options.globalData||{};var i=e.$options.methods;return i&&Object.keys(i).forEach(function(e){r[e]=i[e]}),Le(r,nt),r}var lt=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function rt(e,t){for(var n,a=e.$children,l=a.length-1;l>=0;l--){var r=a[l];if(r.$scope._$vueId===t)return r}for(var i=a.length-1;i>=0;i--)if(n=rt(a[i],t),n)return n}function it(e){return Behavior(e)}function ot(){return!!this.route}function st(e){this.triggerEvent("__l",e)}function ut(e){var t=e.$scope;Object.defineProperty(e,"$refs",{get:function(){var e={},n=t.selectAllComponents(".vue-ref");n.forEach(function(t){var n=t.dataset.ref;e[n]=t.$vm||t});var a=t.selectAllComponents(".vue-ref-in-for");return a.forEach(function(t){var n=t.dataset.ref;e[n]||(e[n]=[]),e[n].push(t.$vm||t)}),e}})}function ct(e){var t,n=e.detail||e.value,a=n.vuePid,l=n.vueOptions;a&&(t=rt(this.$vm,a)),t||(t=this.$vm),l.parent=t}function ft(e){return at(e,{mocks:lt,initRefs:ut})}var gt=["onUniNViewMessage"];function vt(e){var t=ft(e);return Le(t,gt),t}function bt(e){return App(vt(e)),e}function ht(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.isPage,l=t.initRelation,i=Be(a.default,e),o=r(i,2),s=o[0],u=o[1],c={multipleSlots:!0,addGlobalClass:!0},f={options:c,data:Ve(u,a.default.prototype),behaviors:Je(u,it),properties:Ze(u.props,!1,u.__file),lifetimes:{attached:function(){var e=this.properties,t={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:e};ze(e.vueId,this),l.call(this,{vuePid:this._$vuePid,vueOptions:t}),this.$vm=new s(t),xe(this.$vm,e.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm&&this.$vm.$destroy()}},pageLifetimes:{show:function(e){this.$vm&&this.$vm.__call_hook("onPageShow",e)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(e){this.$vm&&this.$vm.__call_hook("onPageResize",e)}},methods:{__l:ct,__e:tt}};return Array.isArray(u.wxsCallMethods)&&u.wxsCallMethods.forEach(function(e){f.methods[e]=function(t){return this.$vm[e](t)}}),n?f:[f,s]}function pt(e){return ht(e,{isPage:ot,initRelation:st})}function dt(e){var t=pt(e);return t.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},t}var yt=["onShow","onHide","onUnload"];function mt(e,t){t.isPage,t.initRelation;var n=dt(e);return Le(n.methods,yt,e),n.methods.onLoad=function(e){this.$vm.$mp.query=e,this.$vm.__call_hook("onLoad",e)},n}function It(e){return mt(e,{isPage:ot,initRelation:st})}yt.push.apply(yt,ke);var Ct=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Mt(e){var t=It(e);return Le(t.methods,Ct),t}function Tt(e){return Component(Mt(e))}function Et(e){return Component(dt(e))}oe.forEach(function(e){ie[e]=!1}),se.forEach(function(e){var t=ie[e]&&ie[e].name?ie[e].name:e;wx.canIUse(t)||(ie[e]=!1)});var _t={};Object.keys(re).forEach(function(e){_t[e]=re[e]}),Object.keys(Te).forEach(function(e){_t[e]=Te[e]}),Object.keys(Se).forEach(function(e){_t[e]=X(e,Se[e])}),Object.keys(wx).forEach(function(e){(m(wx,e)||m(ie,e))&&(_t[e]=X(e,ve(e,wx[e])))}),"undefined"!==typeof e&&(e.uni=_t,e.UniEmitter=Te),wx.createApp=bt,wx.createPage=Tt,wx.createComponent=Et;var Rt=_t,St=Rt;t.default=St}).call(this,n("c8ba"))},"7e8e":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[[{label:"市辖区",value:"1101"}],[{label:"市辖区",value:"1201"}],[{label:"石家庄市",value:"1301"},{label:"唐山市",value:"1302"},{label:"秦皇岛市",value:"1303"},{label:"邯郸市",value:"1304"},{label:"邢台市",value:"1305"},{label:"保定市",value:"1306"},{label:"张家口市",value:"1307"},{label:"承德市",value:"1308"},{label:"沧州市",value:"1309"},{label:"廊坊市",value:"1310"},{label:"衡水市",value:"1311"}],[{label:"太原市",value:"1401"},{label:"大同市",value:"1402"},{label:"阳泉市",value:"1403"},{label:"长治市",value:"1404"},{label:"晋城市",value:"1405"},{label:"朔州市",value:"1406"},{label:"晋中市",value:"1407"},{label:"运城市",value:"1408"},{label:"忻州市",value:"1409"},{label:"临汾市",value:"1410"},{label:"吕梁市",value:"1411"}],[{label:"呼和浩特市",value:"1501"},{label:"包头市",value:"1502"},{label:"乌海市",value:"1503"},{label:"赤峰市",value:"1504"},{label:"通辽市",value:"1505"},{label:"鄂尔多斯市",value:"1506"},{label:"呼伦贝尔市",value:"1507"},{label:"巴彦淖尔市",value:"1508"},{label:"乌兰察布市",value:"1509"},{label:"兴安盟",value:"1522"},{label:"锡林郭勒盟",value:"1525"},{label:"阿拉善盟",value:"1529"}],[{label:"沈阳市",value:"2101"},{label:"大连市",value:"2102"},{label:"鞍山市",value:"2103"},{label:"抚顺市",value:"2104"},{label:"本溪市",value:"2105"},{label:"丹东市",value:"2106"},{label:"锦州市",value:"2107"},{label:"营口市",value:"2108"},{label:"阜新市",value:"2109"},{label:"辽阳市",value:"2110"},{label:"盘锦市",value:"2111"},{label:"铁岭市",value:"2112"},{label:"朝阳市",value:"2113"},{label:"葫芦岛市",value:"2114"}],[{label:"长春市",value:"2201"},{label:"吉林市",value:"2202"},{label:"四平市",value:"2203"},{label:"辽源市",value:"2204"},{label:"通化市",value:"2205"},{label:"白山市",value:"2206"},{label:"松原市",value:"2207"},{label:"白城市",value:"2208"},{label:"延边朝鲜族自治州",value:"2224"}],[{label:"哈尔滨市",value:"2301"},{label:"齐齐哈尔市",value:"2302"},{label:"鸡西市",value:"2303"},{label:"鹤岗市",value:"2304"},{label:"双鸭山市",value:"2305"},{label:"大庆市",value:"2306"},{label:"伊春市",value:"2307"},{label:"佳木斯市",value:"2308"},{label:"七台河市",value:"2309"},{label:"牡丹江市",value:"2310"},{label:"黑河市",value:"2311"},{label:"绥化市",value:"2312"},{label:"大兴安岭地区",value:"2327"}],[{label:"市辖区",value:"3101"}],[{label:"南京市",value:"3201"},{label:"无锡市",value:"3202"},{label:"徐州市",value:"3203"},{label:"常州市",value:"3204"},{label:"苏州市",value:"3205"},{label:"南通市",value:"3206"},{label:"连云港市",value:"3207"},{label:"淮安市",value:"3208"},{label:"盐城市",value:"3209"},{label:"扬州市",value:"3210"},{label:"镇江市",value:"3211"},{label:"泰州市",value:"3212"},{label:"宿迁市",value:"3213"}],[{label:"杭州市",value:"3301"},{label:"宁波市",value:"3302"},{label:"温州市",value:"3303"},{label:"嘉兴市",value:"3304"},{label:"湖州市",value:"3305"},{label:"绍兴市",value:"3306"},{label:"金华市",value:"3307"},{label:"衢州市",value:"3308"},{label:"舟山市",value:"3309"},{label:"台州市",value:"3310"},{label:"丽水市",value:"3311"}],[{label:"合肥市",value:"3401"},{label:"芜湖市",value:"3402"},{label:"蚌埠市",value:"3403"},{label:"淮南市",value:"3404"},{label:"马鞍山市",value:"3405"},{label:"淮北市",value:"3406"},{label:"铜陵市",value:"3407"},{label:"安庆市",value:"3408"},{label:"黄山市",value:"3410"},{label:"滁州市",value:"3411"},{label:"阜阳市",value:"3412"},{label:"宿州市",value:"3413"},{label:"六安市",value:"3415"},{label:"亳州市",value:"3416"},{label:"池州市",value:"3417"},{label:"宣城市",value:"3418"}],[{label:"福州市",value:"3501"},{label:"厦门市",value:"3502"},{label:"莆田市",value:"3503"},{label:"三明市",value:"3504"},{label:"泉州市",value:"3505"},{label:"漳州市",value:"3506"},{label:"南平市",value:"3507"},{label:"龙岩市",value:"3508"},{label:"宁德市",value:"3509"}],[{label:"南昌市",value:"3601"},{label:"景德镇市",value:"3602"},{label:"萍乡市",value:"3603"},{label:"九江市",value:"3604"},{label:"新余市",value:"3605"},{label:"鹰潭市",value:"3606"},{label:"赣州市",value:"3607"},{label:"吉安市",value:"3608"},{label:"宜春市",value:"3609"},{label:"抚州市",value:"3610"},{label:"上饶市",value:"3611"}],[{label:"济南市",value:"3701"},{label:"青岛市",value:"3702"},{label:"淄博市",value:"3703"},{label:"枣庄市",value:"3704"},{label:"东营市",value:"3705"},{label:"烟台市",value:"3706"},{label:"潍坊市",value:"3707"},{label:"济宁市",value:"3708"},{label:"泰安市",value:"3709"},{label:"威海市",value:"3710"},{label:"日照市",value:"3711"},{label:"莱芜市",value:"3712"},{label:"临沂市",value:"3713"},{label:"德州市",value:"3714"},{label:"聊城市",value:"3715"},{label:"滨州市",value:"3716"},{label:"菏泽市",value:"3717"}],[{label:"郑州市",value:"4101"},{label:"开封市",value:"4102"},{label:"洛阳市",value:"4103"},{label:"平顶山市",value:"4104"},{label:"安阳市",value:"4105"},{label:"鹤壁市",value:"4106"},{label:"新乡市",value:"4107"},{label:"焦作市",value:"4108"},{label:"濮阳市",value:"4109"},{label:"许昌市",value:"4110"},{label:"漯河市",value:"4111"},{label:"三门峡市",value:"4112"},{label:"南阳市",value:"4113"},{label:"商丘市",value:"4114"},{label:"信阳市",value:"4115"},{label:"周口市",value:"4116"},{label:"驻马店市",value:"4117"},{label:"省直辖县级行政区划",value:"4190"}],[{label:"武汉市",value:"4201"},{label:"黄石市",value:"4202"},{label:"十堰市",value:"4203"},{label:"宜昌市",value:"4205"},{label:"襄阳市",value:"4206"},{label:"鄂州市",value:"4207"},{label:"荆门市",value:"4208"},{label:"孝感市",value:"4209"},{label:"荆州市",value:"4210"},{label:"黄冈市",value:"4211"},{label:"咸宁市",value:"4212"},{label:"随州市",value:"4213"},{label:"恩施土家族苗族自治州",value:"4228"},{label:"省直辖县级行政区划",value:"4290"}],[{label:"长沙市",value:"4301"},{label:"株洲市",value:"4302"},{label:"湘潭市",value:"4303"},{label:"衡阳市",value:"4304"},{label:"邵阳市",value:"4305"},{label:"岳阳市",value:"4306"},{label:"常德市",value:"4307"},{label:"张家界市",value:"4308"},{label:"益阳市",value:"4309"},{label:"郴州市",value:"4310"},{label:"永州市",value:"4311"},{label:"怀化市",value:"4312"},{label:"娄底市",value:"4313"},{label:"湘西土家族苗族自治州",value:"4331"}],[{label:"广州市",value:"4401"},{label:"韶关市",value:"4402"},{label:"深圳市",value:"4403"},{label:"珠海市",value:"4404"},{label:"汕头市",value:"4405"},{label:"佛山市",value:"4406"},{label:"江门市",value:"4407"},{label:"湛江市",value:"4408"},{label:"茂名市",value:"4409"},{label:"肇庆市",value:"4412"},{label:"惠州市",value:"4413"},{label:"梅州市",value:"4414"},{label:"汕尾市",value:"4415"},{label:"河源市",value:"4416"},{label:"阳江市",value:"4417"},{label:"清远市",value:"4418"},{label:"东莞市",value:"4419"},{label:"中山市",value:"4420"},{label:"潮州市",value:"4451"},{label:"揭阳市",value:"4452"},{label:"云浮市",value:"4453"}],[{label:"南宁市",value:"4501"},{label:"柳州市",value:"4502"},{label:"桂林市",value:"4503"},{label:"梧州市",value:"4504"},{label:"北海市",value:"4505"},{label:"防城港市",value:"4506"},{label:"钦州市",value:"4507"},{label:"贵港市",value:"4508"},{label:"玉林市",value:"4509"},{label:"百色市",value:"4510"},{label:"贺州市",value:"4511"},{label:"河池市",value:"4512"},{label:"来宾市",value:"4513"},{label:"崇左市",value:"4514"}],[{label:"海口市",value:"4601"},{label:"三亚市",value:"4602"},{label:"三沙市",value:"4603"},{label:"儋州市",value:"4604"},{label:"省直辖县级行政区划",value:"4690"}],[{label:"市辖区",value:"5001"},{label:"县",value:"5002"}],[{label:"成都市",value:"5101"},{label:"自贡市",value:"5103"},{label:"攀枝花市",value:"5104"},{label:"泸州市",value:"5105"},{label:"德阳市",value:"5106"},{label:"绵阳市",value:"5107"},{label:"广元市",value:"5108"},{label:"遂宁市",value:"5109"},{label:"内江市",value:"5110"},{label:"乐山市",value:"5111"},{label:"南充市",value:"5113"},{label:"眉山市",value:"5114"},{label:"宜宾市",value:"5115"},{label:"广安市",value:"5116"},{label:"达州市",value:"5117"},{label:"雅安市",value:"5118"},{label:"巴中市",value:"5119"},{label:"资阳市",value:"5120"},{label:"阿坝藏族羌族自治州",value:"5132"},{label:"甘孜藏族自治州",value:"5133"},{label:"凉山彝族自治州",value:"5134"}],[{label:"贵阳市",value:"5201"},{label:"六盘水市",value:"5202"},{label:"遵义市",value:"5203"},{label:"安顺市",value:"5204"},{label:"毕节市",value:"5205"},{label:"铜仁市",value:"5206"},{label:"黔西南布依族苗族自治州",value:"5223"},{label:"黔东南苗族侗族自治州",value:"5226"},{label:"黔南布依族苗族自治州",value:"5227"}],[{label:"昆明市",value:"5301"},{label:"曲靖市",value:"5303"},{label:"玉溪市",value:"5304"},{label:"保山市",value:"5305"},{label:"昭通市",value:"5306"},{label:"丽江市",value:"5307"},{label:"普洱市",value:"5308"},{label:"临沧市",value:"5309"},{label:"楚雄彝族自治州",value:"5323"},{label:"红河哈尼族彝族自治州",value:"5325"},{label:"文山壮族苗族自治州",value:"5326"},{label:"西双版纳傣族自治州",value:"5328"},{label:"大理白族自治州",value:"5329"},{label:"德宏傣族景颇族自治州",value:"5331"},{label:"怒江傈僳族自治州",value:"5333"},{label:"迪庆藏族自治州",value:"5334"}],[{label:"拉萨市",value:"5401"},{label:"日喀则市",value:"5402"},{label:"昌都市",value:"5403"},{label:"林芝市",value:"5404"},{label:"山南市",value:"5405"},{label:"那曲地区",value:"5424"},{label:"阿里地区",value:"5425"}],[{label:"西安市",value:"6101"},{label:"铜川市",value:"6102"},{label:"宝鸡市",value:"6103"},{label:"咸阳市",value:"6104"},{label:"渭南市",value:"6105"},{label:"延安市",value:"6106"},{label:"汉中市",value:"6107"},{label:"榆林市",value:"6108"},{label:"安康市",value:"6109"},{label:"商洛市",value:"6110"}],[{label:"兰州市",value:"6201"},{label:"嘉峪关市",value:"6202"},{label:"金昌市",value:"6203"},{label:"白银市",value:"6204"},{label:"天水市",value:"6205"},{label:"武威市",value:"6206"},{label:"张掖市",value:"6207"},{label:"平凉市",value:"6208"},{label:"酒泉市",value:"6209"},{label:"庆阳市",value:"6210"},{label:"定西市",value:"6211"},{label:"陇南市",value:"6212"},{label:"临夏回族自治州",value:"6229"},{label:"甘南藏族自治州",value:"6230"}],[{label:"西宁市",value:"6301"},{label:"海东市",value:"6302"},{label:"海北藏族自治州",value:"6322"},{label:"黄南藏族自治州",value:"6323"},{label:"海南藏族自治州",value:"6325"},{label:"果洛藏族自治州",value:"6326"},{label:"玉树藏族自治州",value:"6327"},{label:"海西蒙古族藏族自治州",value:"6328"}],[{label:"银川市",value:"6401"},{label:"石嘴山市",value:"6402"},{label:"吴忠市",value:"6403"},{label:"固原市",value:"6404"},{label:"中卫市",value:"6405"}],[{label:"乌鲁木齐市",value:"6501"},{label:"克拉玛依市",value:"6502"},{label:"吐鲁番市",value:"6504"},{label:"哈密市",value:"6505"},{label:"昌吉回族自治州",value:"6523"},{label:"博尔塔拉蒙古自治州",value:"6527"},{label:"巴音郭楞蒙古自治州",value:"6528"},{label:"阿克苏地区",value:"6529"},{label:"克孜勒苏柯尔克孜自治州",value:"6530"},{label:"喀什地区",value:"6531"},{label:"和田地区",value:"6532"},{label:"伊犁哈萨克自治州",value:"6540"},{label:"塔城地区",value:"6542"},{label:"阿勒泰地区",value:"6543"},{label:"自治区直辖县级行政区划",value:"6590"}],[{label:"台北",value:"6601"},{label:"高雄",value:"6602"},{label:"基隆",value:"6603"},{label:"台中",value:"6604"},{label:"台南",value:"6605"},{label:"新竹",value:"6606"},{label:"嘉义",value:"6607"},{label:"宜兰",value:"6608"},{label:"桃园",value:"6609"},{label:"苗栗",value:"6610"},{label:"彰化",value:"6611"},{label:"南投",value:"6612"},{label:"云林",value:"6613"},{label:"屏东",value:"6614"},{label:"台东",value:"6615"},{label:"花莲",value:"6616"},{label:"澎湖",value:"6617"}],[{label:"香港岛",value:"6701"},{label:"九龙",value:"6702"},{label:"新界",value:"6703"}],[{label:"澳门半岛",value:"6801"},{label:"氹仔岛",value:"6802"},{label:"路环岛",value:"6803"},{label:"路氹城",value:"6804"}]],l=a;t.default=l},8189:function(e){e.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-25720200116005",_inBundle:!1,_integrity:"sha512-RZFw3WAaS/CZTzzv9JPaWvmoNitojD/06vPdHSzlqZi8GbuE222lFuyochEjrGkG8rPPrWHAnwfoPBuQVtkfdg==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25720200116005.tgz",_shasum:"08bb17aba91c84a981f33d74153aa3dd07b578ad",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"a129bde60de35f7ef497f43d5a45b4556231995c",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-25720200116005"}},"907b":function(e,t,n){},"921b":function(e,t,n){"use strict";(function(e){var t=n("8189");function a(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}var f=t.version,g="https://tongji.dcloud.io/uni/stat",v="https://tongji.dcloud.io/uni/stat.gif",b=1800,h=300,p=10,d="__DC_STAT_UUID",y="__DC_UUID_VALUE";function m(){var t="";if("n"===T()){try{t=plus.runtime.getDCloudId()}catch(n){t=""}return t}try{t=e.getStorageSync(d)}catch(n){t=y}if(!t){t=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(d,t)}catch(n){e.setStorageSync(d,y)}}return t}var I=function(e){var t=Object.keys(e),n=t.sort(),a={},l="";for(var r in n)a[n[r]]=e[n[r]],l+=n[r]+"="+e[n[r]]+"&";return{sign:"",options:l.substr(0,l.length-1)}},C=function(e){var t="";for(var n in e)t+=n+"="+e[n]+"&";return t.substr(0,t.length-1)},M=function(){return parseInt((new Date).getTime()/1e3)},T=function(){var e={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return e["app-plus"]},E=function(){var t="";return"wx"!==T()&&"qq"!==T()||e.canIUse("getAccountInfoSync")&&(t=e.getAccountInfoSync().miniProgram.appId||""),t},_=function(){return"n"===T()?plus.runtime.version:""},R=function(){var e=T(),t="";return"n"===e&&(t=plus.runtime.channel),t},S=function(t){var n=T(),a="";return t||("wx"===n&&(a=e.getLaunchOptionsSync().scene),a)},A="First__Visit__Time",w="Last__Visit__Time",O=function(){var t=e.getStorageSync(A),n=0;return t?n=t:(n=M(),e.setStorageSync(A,n),e.removeStorageSync(w)),n},N=function(){var t=e.getStorageSync(w),n=0;return n=t||"",e.setStorageSync(w,M()),n},P="__page__residence__time",U=0,k=0,D=function(){return U=M(),"n"===T()&&e.setStorageSync(P,M()),U},j=function(){return k=M(),"n"===T()&&(U=e.getStorageSync(P)),k-U},L="Total__Visit__Count",B=function(){var t=e.getStorageSync(L),n=1;return t&&(n=t,n++),e.setStorageSync(L,n),n},x=function(e){var t={};for(var n in e)t[n]=encodeURIComponent(e[n]);return t},z=0,V=0,Y=function(){var e=(new Date).getTime();return z=e,V=0,e},F=function(){var e=(new Date).getTime();return V=e,e},J=function(e){var t=0;if(0!==z&&(t=V-z),t=parseInt(t/1e3),t=t<1?1:t,"app"===e){var n=t>h;return{residenceTime:t,overtime:n}}if("page"===e){var a=t>b;return{residenceTime:t,overtime:a}}return{residenceTime:t}},H=function(){var e=getCurrentPages(),t=e[e.length-1],n=t.$vm;return"bd"===T()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},Z=function(e){var t=getCurrentPages(),n=t[t.length-1],a=n.$vm,l=e._query,r=l&&"{}"!==JSON.stringify(l)?"?"+JSON.stringify(l):"";return e._query="","bd"===T()?a.$mp&&a.$mp.page.is+r:a.$scope&&a.$scope.route+r||a.$mp&&a.$mp.page.route+r},G=function(e){return!!("page"===e.mpType||e.$mp&&"page"===e.$mp.mpType||"page"===e.$options.mpType)},W=function(e,t){return e?"string"!==typeof e?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):e.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof t&&"object"!==typeof t?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof t&&t.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===e&&"string"!==typeof t?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},K=n("e857").default,X=n("322b").default||n("322b"),$=e.getSystemInfoSync(),Q=function(){function t(){s(this,t),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:T(),mpn:E(),ak:X.appid,usv:f,v:_(),ch:R(),cn:"",pn:"",ct:"",t:M(),tt:"",p:"android"===$.platform?"a":"i",brand:$.brand||"",md:$.model,sv:$.system.replace(/(Android|iOS)\s/,""),mpsdk:$.SDKVersion||"",mpv:$.version||"",lang:$.language,pr:$.pixelRatio,ww:$.windowWidth,wh:$.windowHeight,sw:$.screenWidth,sh:$.screenHeight}}return c(t,[{key:"_applicationShow",value:function(){if(this.__licationHide){F();var e=J("app");if(e.overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(e,t){this.__licationHide=!0,F();var n=J();Y();var a=Z(this);this._sendHideRequest({urlref:a,urlref_ts:n.residenceTime},t)}},{key:"_pageShow",value:function(){var e=Z(this),t=H();if(this._navigationBarTitle.config=K&&K.pages[t]&&K.pages[t].titleNView&&K.pages[t].titleNView.titleText||K&&K.pages[t]&&K.pages[t].navigationBarTitleText||"",this.__licationShow)return Y(),this.__licationShow=!1,void(this._lastPageRoute=e);F(),this._lastPageRoute=e;var n=J("page");if(n.overtime){var a={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(a)}Y()}},{key:"_pageHide",value:function(){if(!this.__licationHide){F();var e=J("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:e.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(e){this._sendEventRequest({key:e},0)}},{key:"_sendReportRequest",value:function(e){this._navigationBarTitle.lt="1";var t=e.query&&"{}"!==JSON.stringify(e.query)?"?"+JSON.stringify(e.query):"";this.statData.lt="1",this.statData.url=e.path+t||"",this.statData.t=M(),this.statData.sc=S(e.scene),this.statData.fvts=O(),this.statData.lvts=N(),this.statData.tvc=B(),"n"===T()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(e){var t=e.url,n=e.urlref,a=e.urlref_ts;this._navigationBarTitle.lt="11";var l={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:t,tt:this.statData.tt,urlref:n,urlref_ts:a,ch:this.statData.ch,usv:this.statData.usv,t:M(),p:this.statData.p};this.request(l)}},{key:"_sendHideRequest",value:function(e,t){var n=e.urlref,a=e.urlref_ts,l={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:a,ch:this.statData.ch,usv:this.statData.usv,t:M(),p:this.statData.p};this.request(l,t)}},{key:"_sendEventRequest",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.key,n=void 0===t?"":t,a=e.value,l=void 0===a?"":a,r=this._lastPageRoute,i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:r,ch:this.statData.ch,e_n:n,e_v:"object"===typeof l?JSON.stringify(l):l.toString(),usv:this.statData.usv,t:M(),p:this.statData.p};this.request(i)}},{key:"getNetworkInfo",value:function(){var t=this;e.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var e=this;plus.runtime.getProperty(plus.runtime.appid,function(t){e.statData.v=t.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var t=this;X.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,n){var a=this,l=M(),r=this._navigationBarTitle;t.ttn=r.page,t.ttpj=r.config,t.ttc=r.report;var i=this._reportingRequestData;if("n"===T()&&(i=e.getStorageSync("__UNI__STAT__DATA")||{}),i[t.lt]||(i[t.lt]=[]),i[t.lt].push(t),"n"===T()&&e.setStorageSync("__UNI__STAT__DATA",i),!(j()<p)||n){var o=this._reportingRequestData;"n"===T()&&(o=e.getStorageSync("__UNI__STAT__DATA")),D();var s=[],u=[],c=[],g=function(e){var t=o[e];t.forEach(function(t){var n=C(t);0===e?s.push(n):3===e?c.push(n):u.push(n)})};for(var v in o)g(v);s.push.apply(s,u.concat(c));var b={usv:f,t:l,requests:JSON.stringify(s)};this._reportingRequestData={},"n"===T()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==T()||"a"!==this.statData.p?this._sendRequest(b):setTimeout(function(){a._sendRequest(b)},200):this.imageRequest(b)}}},{key:"_sendRequest",value:function(t){var n=this;e.request({url:g,method:"POST",data:t,success:function(){},fail:function(e){++n._retry<3&&setTimeout(function(){n._sendRequest(t)},1e3)}})}},{key:"imageRequest",value:function(e){var t=new Image,n=I(x(e)).options;t.src=v+"?"+n}},{key:"sendEvent",value:function(e,t){W(e,t)||("title"!==e?this._sendEventRequest({key:e,value:"object"===typeof t?JSON.stringify(t):t},1):this._navigationBarTitle.report=t)}}]),t}(),q=function(t){function n(){var t;return s(this,n),t=a(this,r(n).call(this)),t.instance=null,"function"===typeof e.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return i(n,t),c(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),c(n,[{key:"addInterceptorInit",value:function(){var t=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;e.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var n=this;t?e.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var t=this;e.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(e,t){this.self=t,D(),this.__licationShow=!0,this._sendReportRequest(e,!0)}},{key:"load",value:function(e,t){if(!t.$scope&&!t.$mp){var n=getCurrentPages();t.$scope=n[n.length-1]}this.self=t,this._query=e}},{key:"show",value:function(e){this.self=e,G(e)?this._pageShow(e):this._applicationShow(e)}},{key:"ready",value:function(e){}},{key:"hide",value:function(e){this.self=e,G(e)?this._pageHide(e):this._applicationHide(e,!0)}},{key:"error",value:function(e){this._platform;var t="";t=e.message?e.stack:JSON.stringify(e);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:t,usv:this.statData.usv,t:M(),p:this.statData.p};this.request(n)}}]),n}(Q),ee=q.getInstance(),te=!1,ne={onLaunch:function(e){ee.report(e,this)},onReady:function(){ee.ready(this)},onLoad:function(e){if(ee.load(e,this),this.$scope&&this.$scope.onShareAppMessage){var t=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(e){return ee.interceptShare(!1),t.call(this,e)}}},onShow:function(){te=!1,ee.show(this)},onHide:function(){te=!0,ee.hide(this)},onUnload:function(){te?te=!1:ee.hide(this)},onError:function(e){ee.error(e)}};function ae(){var t=n("66fd");(t.default||t).mixin(ne),e.report=function(e,t){ee.sendEvent(e,t)}}ae()}).call(this,n("6e42")["default"])},"9e92":function(module,exports,__webpack_require__){"use strict";(function(__f__){!function(e,t){module.exports=t()}(window,function(){var Polling={SetUserStatusInput:function(){var e={};this.setStatus=function(t){e.status=t},this.toArrayBuffer=function(){return e}},SetUserStatusOutput:function(){var e={};this.setNothing=function(t){e.nothing=t},this.toArrayBuffer=function(){return e}},GetUserStatusInput:function(){var e={};this.setNothing=function(t){e.nothing=t},this.toArrayBuffer=function(){return e}},GetUserStatusOutput:function(){var e={};this.setStatus=function(t){e.status=t},this.setSubUserId=function(t){e.subUserId=t},this.toArrayBuffer=function(){return e}},VoipDynamicInput:function(){var e={};this.setEngineType=function(t){e.engineType=t},this.setChannelName=function(t){e.channelName=t},this.setChannelExtra=function(t){e.channelExtra=t},this.toArrayBuffer=function(){return e}},VoipDynamicOutput:function(){var e={};this.setDynamicKey=function(t){e.dynamicKey=t},this.toArrayBuffer=function(){return e}},SubUserStatusInput:function(){var e={};this.setUserid=function(t){e.userid=t},this.toArrayBuffer=function(){return e}},SubUserStatusOutput:function(){var e={};this.setNothing=function(t){e.nothing=t},this.toArrayBuffer=function(){return e}},CleanHisMsgInput:function(){var e={};this.setTargetId=function(t){e.targetId=t},this.setDataTime=function(t){e.dataTime=t},this.setConversationType=function(t){e.conversationType=t},this.toArrayBuffer=function(){return e}},DeleteMsgInput:function(){var e={};this.setType=function(t){e.type=t},this.setConversationId=function(t){e.conversationId=t},this.setMsgs=function(t){e.msgs=t},this.toArrayBuffer=function(){return e}},DeleteMsg:function(){var e={};this.setMsgId=function(t){e.msgId=t},this.setMsgDataTime=function(t){e.msgDataTime=t},this.setDirect=function(t){e.direct=t},this.toArrayBuffer=function(){return e}},DeleteMsgOutput:function(){var e={};this.setNothing=function(t){e.nothing=t},this.toArrayBuffer=function(){return e}},SearchMpInput:function(){var e={};this.setType=function(t){e.type=t},this.setId=function(t){e.id=t},this.toArrayBuffer=function(){return e}},SearchMpOutput:function(){var e={};this.setNothing=function(t){e.nothing=t},this.setInfo=function(t){e.info=t},this.toArrayBuffer=function(){return e}},MpInfo:function(){var e={};this.setMpid=function(t){e.mpid=t},this.setName=function(t){e.name=t},this.setType=function(t){e.type=t},this.setTime=function(t){e.time=t},this.setPortraitUri=function(t){e.portraitUrl=t},this.setExtra=function(t){e.extra=t},this.toArrayBuffer=function(){return e}},PullMpInput:function(){var e={};this.setMpid=function(t){e.mpid=t},this.setTime=function(t){e.time=t},this.toArrayBuffer=function(){return e}},PullMpOutput:function(){var e={};this.setStatus=function(t){e.status=t},this.setInfo=function(t){e.info=t},this.toArrayBuffer=function(){return e}},MPFollowInput:function(){var e={};this.setId=function(t){e.id=t},this.toArrayBuffer=function(){return e}},MPFollowOutput:function(){var e={};this.setNothing=function(t){e.nothing=t},this.setInfo=function(t){e.info=t},this.toArrayBuffer=function(){return e}},NotifyMsg:function(){var e={};this.setType=function(t){e.type=t},this.setTime=function(t){e.time=t},this.setChrmId=function(t){e.chrmId=t},this.toArrayBuffer=function(){return e}},SyncRequestMsg:function(){var e={};this.setSyncTime=function(t){e.syncTime=t||0},this.setIspolling=function(t){e.ispolling=!!t},this.setIsweb=function(t){e.isweb=!!t},this.setIsPullSend=function(t){e.isPullSend=!!t},this.setSendBoxSyncTime=function(t){e.sendBoxSyncTime=t},this.toArrayBuffer=function(){return e}},UpStreamMessage:function(){var e={};this.setSessionId=function(t){e.sessionId=t},this.setClassname=function(t){e.classname=t},this.setContent=function(t){t&&(e.content=t)},this.setPushText=function(t){e.pushText=t},this.setUserId=function(t){e.userId=t},this.setAppData=function(t){e.appData=t},this.toArrayBuffer=function(){return e}},DownStreamMessages:function(){var e={};this.setList=function(t){e.list=t},this.setSyncTime=function(t){e.syncTime=t},this.setFinished=function(t){e.finished=t},this.toArrayBuffer=function(){return e}},DownStreamMessage:function(){var e={};this.setFromUserId=function(t){e.fromUserId=t},this.setType=function(t){e.type=t},this.setGroupId=function(t){e.groupId=t},this.setClassname=function(t){e.classname=t},this.setContent=function(t){t&&(e.content=t)},this.setDataTime=function(t){e.dataTime=t},this.setStatus=function(t){e.status=t},this.setMsgId=function(t){e.msgId=t},this.toArrayBuffer=function(){return e}},CreateDiscussionInput:function(){var e={};this.setName=function(t){e.name=t},this.toArrayBuffer=function(){return e}},CreateDiscussionOutput:function(){var e={};this.setId=function(t){e.id=t},this.toArrayBuffer=function(){return e}},ChannelInvitationInput:function(){var e={};this.setUsers=function(t){e.users=t},this.toArrayBuffer=function(){return e}},LeaveChannelInput:function(){var e={};this.setNothing=function(t){e.nothing=t},this.toArrayBuffer=function(){return e}},QueryChatroomInfoInput:function(){var e={};this.setCount=function(t){e.count=t},this.setOrder=function(t){e.order=t},this.toArrayBuffer=function(){return e}},QueryChatroomInfoOutput:function(){var e={};this.setUserTotalNums=function(t){e.userTotalNums=t},this.setUserInfos=function(t){e.userInfos=t},this.toArrayBuffer=function(){return e}},ChannelEvictionInput:function(){var e={};this.setUser=function(t){e.user=t},this.toArrayBuffer=function(){return e}},RenameChannelInput:function(){var e={};this.setName=function(t){e.name=t},this.toArrayBuffer=function(){return e}},ChannelInfoInput:function(){var e={};this.setNothing=function(t){e.nothing=t},this.toArrayBuffer=function(){return e}},ChannelInfoOutput:function(){var e={};this.setType=function(t){e.type=t},this.setChannelId=function(t){e.channelId=t},this.setChannelName=function(t){e.channelName=t},this.setAdminUserId=function(t){e.adminUserId=t},this.setFirstTenUserIds=function(t){e.firstTenUserIds=t},this.setOpenStatus=function(t){e.openStatus=t},this.toArrayBuffer=function(){return e}},ChannelInfosInput:function(){var e={};this.setPage=function(t){e.page=t},this.setNumber=function(t){e.number=t},this.toArrayBuffer=function(){return e}},ChannelInfosOutput:function(){var e={};this.setChannels=function(t){e.channels=t},this.setTotal=function(t){e.total=t},this.toArrayBuffer=function(){return e}},MemberInfo:function(){var e={};this.setUserId=function(t){e.userId=t},this.setUserName=function(t){e.userName=t},this.setUserPortrait=function(t){e.userPortrait=t},this.setExtension=function(t){e.extension=t},this.toArrayBuffer=function(){return e}},GroupMembersInput:function(){var e={};this.setPage=function(t){e.page=t},this.setNumber=function(t){e.number=t},this.toArrayBuffer=function(){return e}},GroupMembersOutput:function(){var e={};this.setMembers=function(t){e.members=t},this.setTotal=function(t){e.total=t},this.toArrayBuffer=function(){return e}},GetUserInfoInput:function(){var e={};this.setNothing=function(t){e.nothing=t},this.toArrayBuffer=function(){return e}},GetUserInfoOutput:function(){var e={};this.setUserId=function(t){e.userId=t},this.setUserName=function(t){e.userName=t},this.setUserPortrait=function(t){e.userPortrait=t},this.toArrayBuffer=function(){return e}},GetSessionIdInput:function(){var e={};this.setNothing=function(t){e.nothing=t},this.toArrayBuffer=function(){return e}},GetSessionIdOutput:function(){var e={};this.setSessionId=function(t){e.sessionId=t},this.toArrayBuffer=function(){return e}},GetQNupTokenInput:function(){var e={};this.setType=function(t){e.type=t},this.toArrayBuffer=function(){return e}},GetQNupTokenOutput:function(){var e={};this.setDeadline=function(t){e.deadline=t},this.setToken=function(t){e.token=t},this.toArrayBuffer=function(){return e}},GetQNdownloadUrlInput:function(){var e={};this.setType=function(t){e.type=t},this.setKey=function(t){e.key=t},this.setFileName=function(t){e.fileName=t},this.toArrayBuffer=function(){return e}},GetQNdownloadUrlOutput:function(){var e={};this.setDownloadUrl=function(t){e.downloadUrl=t},this.toArrayBuffer=function(){return e}},Add2BlackListInput:function(){var e={};this.setUserId=function(t){e.userId=t},this.toArrayBuffer=function(){return e}},RemoveFromBlackListInput:function(){var e={};this.setUserId=function(t){e.userId=t},this.toArrayBuffer=function(){return e}},QueryBlackListInput:function(){var e={};this.setNothing=function(t){e.nothing=t},this.toArrayBuffer=function(){return e}},QueryBlackListOutput:function(){var e={};this.setUserIds=function(t){e.userIds=t},this.toArrayBuffer=function(){return e}},BlackListStatusInput:function(){var e={};this.setUserId=function(t){e.userId=t},this.toArrayBuffer=function(){return e}},BlockPushInput:function(){var e={};this.setBlockeeId=function(t){e.blockeeId=t},this.toArrayBuffer=function(){return e}},ModifyPermissionInput:function(){var e={};this.setOpenStatus=function(t){e.openStatus=t},this.toArrayBuffer=function(){return e}},GroupInput:function(){var e={};this.setGroupInfo=function(t){for(var n=0,a=[];n<t.length;n++)a.push({id:t[n].getContent().id,name:t[n].getContent().name});e.groupInfo=a},this.toArrayBuffer=function(){return e}},GroupOutput:function(){var e={};this.setNothing=function(t){e.nothing=t},this.toArrayBuffer=function(){return e}},GroupInfo:function(){var e={};this.setId=function(t){e.id=t},this.setName=function(t){e.name=t},this.getContent=function(){return e},this.toArrayBuffer=function(){return e}},GroupHashInput:function(){var e={};this.setUserId=function(t){e.userId=t},this.setGroupHashCode=function(t){e.groupHashCode=t},this.toArrayBuffer=function(){return e}},GroupHashOutput:function(){var e={};this.setResult=function(t){e.result=t},this.toArrayBuffer=function(){return e}},ChrmInput:function(){var e={};this.setNothing=function(t){e.nothing=t},this.toArrayBuffer=function(){return e}},ChrmOutput:function(){var e={};this.setNothing=function(t){e.nothing=t},this.toArrayBuffer=function(){return e}},ChrmPullMsg:function(){var e={};this.setSyncTime=function(t){e.syncTime=t},this.setCount=function(t){e.count=t},this.toArrayBuffer=function(){return e}},RelationsInput:function(){var e={};this.setType=function(t){e.type=t},this.setMsg=function(t){e.msg=t},this.setCount=function(t){e.count=t},this.toArrayBuffer=function(){return e}},RelationsOutput:function(){var e={};this.setInfo=function(t){e.info=t},this.toArrayBuffer=function(){return e}},RelationInfo:function(){var e={};this.setType=function(t){e.type=t},this.setUserId=function(t){e.userId=t},this.setMsg=function(t){e.msg=t},this.toArrayBuffer=function(){return e}},HistoryMessageInput:function(){var e={};this.setTargetId=function(t){e.targetId=t},this.setDataTime=function(t){e.dataTime=t},this.setSize=function(t){e.size=t},this.toArrayBuffer=function(){return e}},HistoryMessagesOuput:function(){var e={};this.setList=function(t){e.list=t},this.setSyncTime=function(t){e.syncTime=t},this.setHasMsg=function(t){e.hasMsg=t},this.toArrayBuffer=function(){return e}},HistoryMsgInput:function(){var e={};this.setTargetId=function(t){e.targetId=t},this.setTime=function(t){e.time=t},this.setCount=function(t){e.count=t},this.setOrder=function(t){e.order=t},this.toArrayBuffer=function(){return e}},HistoryMsgOuput:function(){var e={};this.setList=function(t){e.list=t},this.setSyncTime=function(t){e.syncTime=t},this.setHasMsg=function(t){e.hasMsg=t},this.toArrayBuffer=function(){return e}}};for(var f in Polling)Polling[f].decode=function(b){var back={},val=JSON.parse(b)||eval("("+b+")");for(var i in val)back[i]=val[i],back["get"+i.charAt(0).toUpperCase()+i.slice(1)]=function(){return val[i]};return back};var md5=function(){function e(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function t(e,t){return e<<t|e>>>32-t}function n(n,a,l,r,i,o){return e(t(e(e(a,n),e(r,o)),i),l)}function a(e,t,a,l,r,i,o){return n(t&a|~t&l,e,t,r,i,o)}function l(e,t,a,l,r,i,o){return n(t&l|a&~l,e,t,r,i,o)}function r(e,t,a,l,r,i,o){return n(t^a^l,e,t,r,i,o)}function i(e,t,a,l,r,i,o){return n(a^(t|~l),e,t,r,i,o)}function o(t,n){t[n>>5]|=128<<n%32,t[14+(n+64>>>9<<4)]=n;var o,s,u,c,f,g=1732584193,v=-271733879,b=-1732584194,h=271733878;for(o=0;o<t.length;o+=16)s=g,u=v,c=b,f=h,g=a(g,v,b,h,t[o],7,-680876936),h=a(h,g,v,b,t[o+1],12,-389564586),b=a(b,h,g,v,t[o+2],17,606105819),v=a(v,b,h,g,t[o+3],22,-1044525330),g=a(g,v,b,h,t[o+4],7,-176418897),h=a(h,g,v,b,t[o+5],12,1200080426),b=a(b,h,g,v,t[o+6],17,-1473231341),v=a(v,b,h,g,t[o+7],22,-45705983),g=a(g,v,b,h,t[o+8],7,1770035416),h=a(h,g,v,b,t[o+9],12,-1958414417),b=a(b,h,g,v,t[o+10],17,-42063),v=a(v,b,h,g,t[o+11],22,-1990404162),g=a(g,v,b,h,t[o+12],7,1804603682),h=a(h,g,v,b,t[o+13],12,-40341101),b=a(b,h,g,v,t[o+14],17,-1502002290),v=a(v,b,h,g,t[o+15],22,1236535329),g=l(g,v,b,h,t[o+1],5,-165796510),h=l(h,g,v,b,t[o+6],9,-1069501632),b=l(b,h,g,v,t[o+11],14,643717713),v=l(v,b,h,g,t[o],20,-373897302),g=l(g,v,b,h,t[o+5],5,-701558691),h=l(h,g,v,b,t[o+10],9,38016083),b=l(b,h,g,v,t[o+15],14,-660478335),v=l(v,b,h,g,t[o+4],20,-405537848),g=l(g,v,b,h,t[o+9],5,568446438),h=l(h,g,v,b,t[o+14],9,-1019803690),b=l(b,h,g,v,t[o+3],14,-187363961),v=l(v,b,h,g,t[o+8],20,1163531501),g=l(g,v,b,h,t[o+13],5,-1444681467),h=l(h,g,v,b,t[o+2],9,-51403784),b=l(b,h,g,v,t[o+7],14,1735328473),v=l(v,b,h,g,t[o+12],20,-1926607734),g=r(g,v,b,h,t[o+5],4,-378558),h=r(h,g,v,b,t[o+8],11,-2022574463),b=r(b,h,g,v,t[o+11],16,1839030562),v=r(v,b,h,g,t[o+14],23,-35309556),g=r(g,v,b,h,t[o+1],4,-1530992060),h=r(h,g,v,b,t[o+4],11,1272893353),b=r(b,h,g,v,t[o+7],16,-155497632),v=r(v,b,h,g,t[o+10],23,-1094730640),g=r(g,v,b,h,t[o+13],4,681279174),h=r(h,g,v,b,t[o],11,-358537222),b=r(b,h,g,v,t[o+3],16,-722521979),v=r(v,b,h,g,t[o+6],23,76029189),g=r(g,v,b,h,t[o+9],4,-640364487),h=r(h,g,v,b,t[o+12],11,-421815835),b=r(b,h,g,v,t[o+15],16,530742520),v=r(v,b,h,g,t[o+2],23,-995338651),g=i(g,v,b,h,t[o],6,-198630844),h=i(h,g,v,b,t[o+7],10,1126891415),b=i(b,h,g,v,t[o+14],15,-1416354905),v=i(v,b,h,g,t[o+5],21,-57434055),g=i(g,v,b,h,t[o+12],6,1700485571),h=i(h,g,v,b,t[o+3],10,-1894986606),b=i(b,h,g,v,t[o+10],15,-1051523),v=i(v,b,h,g,t[o+1],21,-2054922799),g=i(g,v,b,h,t[o+8],6,1873313359),h=i(h,g,v,b,t[o+15],10,-30611744),b=i(b,h,g,v,t[o+6],15,-1560198380),v=i(v,b,h,g,t[o+13],21,1309151649),g=i(g,v,b,h,t[o+4],6,-145523070),h=i(h,g,v,b,t[o+11],10,-1120210379),b=i(b,h,g,v,t[o+2],15,718787259),v=i(v,b,h,g,t[o+9],21,-343485551),g=e(g,s),v=e(v,u),b=e(b,c),h=e(h,f);return[g,v,b,h]}function s(e){var t,n="";for(t=0;t<32*e.length;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function u(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;for(t=0;t<8*e.length;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return n}function c(e){return s(o(u(e),8*e.length))}function f(e,t){var n,a,l=u(e),r=[],i=[];for(r[15]=i[15]=void 0,l.length>16&&(l=o(l,8*e.length)),n=0;n<16;n+=1)r[n]=909522486^l[n],i[n]=1549556828^l[n];return a=o(r.concat(u(t)),512+8*t.length),s(o(i.concat(a),640))}function g(e){var t,n,a="0123456789abcdef",l="";for(n=0;n<e.length;n+=1)t=e.charCodeAt(n),l+=a.charAt(t>>>4&15)+a.charAt(15&t);return l}function v(e){return unescape(encodeURIComponent(e))}function b(e){return c(v(e))}function h(e){return g(b(e))}function p(e,t){return f(v(e),v(t))}function d(e,t){return g(p(e,t))}function y(e,t,n){return t?n?p(t,e):d(t,e):n?b(e):h(e)}return y}(),RongIMLib,RongIMLib,RongIMLib;!function(e){!function(e){e[e.ALL=1]="ALL",e[e.PART=2]="PART"}(e.MentionedType||(e.MentionedType={})),e.MentionedType,function(e){e[e.CUSTOMER_SERVICE=1]="CUSTOMER_SERVICE",e[e.RECALL=2]="RECALL"}(e.MethodType||(e.MethodType={})),e.MethodType,function(e){e[e.IN_BLACK_LIST=0]="IN_BLACK_LIST",e[e.NOT_IN_BLACK_LIST=1]="NOT_IN_BLACK_LIST"}(e.BlacklistStatus||(e.BlacklistStatus={})),e.BlacklistStatus,function(e){e[e.XHR_POLLING=0]="XHR_POLLING",e[e.WEBSOCKET=1]="WEBSOCKET",e[e.HTTP=0]="HTTP",e[e.HTTPS=1]="HTTPS"}(e.ConnectionChannel||(e.ConnectionChannel={})),e.ConnectionChannel,function(e){e[e.ONLY_ROBOT=1]="ONLY_ROBOT",e[e.ONLY_HUMAN=2]="ONLY_HUMAN",e[e.ROBOT_FIRST=3]="ROBOT_FIRST",e[e.HUMAN_FIRST=4]="HUMAN_FIRST"}(e.CustomerType||(e.CustomerType={})),e.CustomerType,function(e){e[e.NONE=0]="NONE",e[e.SQQUENCE=1]="SQQUENCE",e[e.REVERSE=2]="REVERSE"}(e.GetChatRoomType||(e.GetChatRoomType={})),e.GetChatRoomType,function(e){e[e.CONNECTED=0]="CONNECTED",e[e.CONNECTING=1]="CONNECTING",e[e.DISCONNECTED=2]="DISCONNECTED",e[e.KICKED_OFFLINE_BY_OTHER_CLIENT=6]="KICKED_OFFLINE_BY_OTHER_CLIENT",e[e.WEBSOCKET_UNAVAILABLE=7]="WEBSOCKET_UNAVAILABLE",e[e.NETWORK_UNAVAILABLE=3]="NETWORK_UNAVAILABLE",e[e.DOMAIN_INCORRECT=12]="DOMAIN_INCORRECT",e[e.APPKEY_IS_FAKE=20]="APPKEY_IS_FAKE",e[e.CONNECTION_CLOSED=4]="CONNECTION_CLOSED",e[e.ULTRALIMIT=1101]="ULTRALIMIT",e[e.REQUEST_NAVI=201]="REQUEST_NAVI",e[e.RESPONSE_NAVI=202]="RESPONSE_NAVI",e[e.RESPONSE_NAVI_ERROR=203]="RESPONSE_NAVI_ERROR",e[e.RESPONSE_NAVI_TIMEOUT=204]="RESPONSE_NAVI_TIMEOUT"}(e.ConnectionStatus||(e.ConnectionStatus={})),e.ConnectionStatus,function(e){e[e.DO_NOT_DISTURB=0]="DO_NOT_DISTURB",e[e.NOTIFY=1]="NOTIFY"}(e.ConversationNotificationStatus||(e.ConversationNotificationStatus={})),e.ConversationNotificationStatus,function(e){e[e.NONE=0]="NONE",e[e.PRIVATE=1]="PRIVATE",e[e.DISCUSSION=2]="DISCUSSION",e[e.GROUP=3]="GROUP",e[e.CHATROOM=4]="CHATROOM",e[e.CUSTOMER_SERVICE=5]="CUSTOMER_SERVICE",e[e.SYSTEM=6]="SYSTEM",e[e.APP_PUBLIC_SERVICE=7]="APP_PUBLIC_SERVICE",e[e.PUBLIC_SERVICE=8]="PUBLIC_SERVICE"}(e.ConversationType||(e.ConversationType={})),e.ConversationType,function(e){e[e.OPENED=0]="OPENED",e[e.CLOSED=1]="CLOSED"}(e.DiscussionInviteStatus||(e.DiscussionInviteStatus={})),e.DiscussionInviteStatus,function(e){e[e.RECALL_MESSAGE=25101]="RECALL_MESSAGE",e[e.SEND_FREQUENCY_TOO_FAST=20604]="SEND_FREQUENCY_TOO_FAST",e[e.RC_MSG_UNAUTHORIZED=20406]="RC_MSG_UNAUTHORIZED",e[e.RC_DISCUSSION_GROUP_ID_INVALID=20407]="RC_DISCUSSION_GROUP_ID_INVALID",e[e.FORBIDDEN_IN_GROUP=22408]="FORBIDDEN_IN_GROUP",e[e.NOT_IN_DISCUSSION=21406]="NOT_IN_DISCUSSION",e[e.NOT_IN_GROUP=22406]="NOT_IN_GROUP",e[e.NOT_IN_CHATROOM=23406]="NOT_IN_CHATROOM",e[e.FORBIDDEN_IN_CHATROOM=23408]="FORBIDDEN_IN_CHATROOM",e[e.RC_CHATROOM_USER_KICKED=23409]="RC_CHATROOM_USER_KICKED",e[e.RC_CHATROOM_NOT_EXIST=23410]="RC_CHATROOM_NOT_EXIST",e[e.RC_CHATROOM_IS_FULL=23411]="RC_CHATROOM_IS_FULL",e[e.RC_CHATROOM_PATAMETER_INVALID=23412]="RC_CHATROOM_PATAMETER_INVALID",e[e.CHATROOM_GET_HISTORYMSG_ERROR=23413]="CHATROOM_GET_HISTORYMSG_ERROR",e[e.CHATROOM_NOT_OPEN_HISTORYMSG_STORE=23414]="CHATROOM_NOT_OPEN_HISTORYMSG_STORE",e[e.SENSITIVE_SHIELD=21501]="SENSITIVE_SHIELD",e[e.SENSITIVE_REPLACE=21502]="SENSITIVE_REPLACE",e[e.TIMEOUT=-1]="TIMEOUT",e[e.UNKNOWN=-2]="UNKNOWN",e[e.JOIN_IN_DISCUSSION=21407]="JOIN_IN_DISCUSSION",e[e.CREATE_DISCUSSION=21408]="CREATE_DISCUSSION",e[e.INVITE_DICUSSION=21409]="INVITE_DICUSSION",e[e.GET_USERINFO_ERROR=23407]="GET_USERINFO_ERROR",e[e.REJECTED_BY_BLACKLIST=405]="REJECTED_BY_BLACKLIST",e[e.RC_NET_CHANNEL_INVALID=30001]="RC_NET_CHANNEL_INVALID",e[e.RC_NET_UNAVAILABLE=30002]="RC_NET_UNAVAILABLE",e[e.RC_MSG_RESP_TIMEOUT=30003]="RC_MSG_RESP_TIMEOUT",e[e.RC_HTTP_SEND_FAIL=30004]="RC_HTTP_SEND_FAIL",e[e.RC_HTTP_REQ_TIMEOUT=30005]="RC_HTTP_REQ_TIMEOUT",e[e.RC_HTTP_RECV_FAIL=30006]="RC_HTTP_RECV_FAIL",e[e.RC_NAVI_RESOURCE_ERROR=30007]="RC_NAVI_RESOURCE_ERROR",e[e.RC_NODE_NOT_FOUND=30008]="RC_NODE_NOT_FOUND",e[e.RC_DOMAIN_NOT_RESOLVE=30009]="RC_DOMAIN_NOT_RESOLVE",e[e.RC_SOCKET_NOT_CREATED=30010]="RC_SOCKET_NOT_CREATED",e[e.RC_SOCKET_DISCONNECTED=30011]="RC_SOCKET_DISCONNECTED",e[e.RC_PING_SEND_FAIL=30012]="RC_PING_SEND_FAIL",e[e.RC_PONG_RECV_FAIL=30013]="RC_PONG_RECV_FAIL",e[e.RC_MSG_SEND_FAIL=30014]="RC_MSG_SEND_FAIL",e[e.RC_CONN_ACK_TIMEOUT=31e3]="RC_CONN_ACK_TIMEOUT",e[e.RC_CONN_PROTO_VERSION_ERROR=31001]="RC_CONN_PROTO_VERSION_ERROR",e[e.RC_CONN_ID_REJECT=31002]="RC_CONN_ID_REJECT",e[e.RC_CONN_SERVER_UNAVAILABLE=31003]="RC_CONN_SERVER_UNAVAILABLE",e[e.RC_CONN_USER_OR_PASSWD_ERROR=31004]="RC_CONN_USER_OR_PASSWD_ERROR",e[e.RC_CONN_NOT_AUTHRORIZED=31005]="RC_CONN_NOT_AUTHRORIZED",e[e.RC_CONN_REDIRECTED=31006]="RC_CONN_REDIRECTED",e[e.RC_CONN_PACKAGE_NAME_INVALID=31007]="RC_CONN_PACKAGE_NAME_INVALID",e[e.RC_CONN_APP_BLOCKED_OR_DELETED=31008]="RC_CONN_APP_BLOCKED_OR_DELETED",e[e.RC_CONN_USER_BLOCKED=31009]="RC_CONN_USER_BLOCKED",e[e.RC_DISCONN_KICK=31010]="RC_DISCONN_KICK",e[e.RC_DISCONN_EXCEPTION=31011]="RC_DISCONN_EXCEPTION",e[e.RC_QUERY_ACK_NO_DATA=32001]="RC_QUERY_ACK_NO_DATA",e[e.RC_MSG_DATA_INCOMPLETE=32002]="RC_MSG_DATA_INCOMPLETE",e[e.BIZ_ERROR_CLIENT_NOT_INIT=33001]="BIZ_ERROR_CLIENT_NOT_INIT",e[e.BIZ_ERROR_DATABASE_ERROR=33002]="BIZ_ERROR_DATABASE_ERROR",e[e.BIZ_ERROR_INVALID_PARAMETER=33003]="BIZ_ERROR_INVALID_PARAMETER",e[e.BIZ_ERROR_NO_CHANNEL=33004]="BIZ_ERROR_NO_CHANNEL",e[e.BIZ_ERROR_RECONNECT_SUCCESS=33005]="BIZ_ERROR_RECONNECT_SUCCESS",e[e.BIZ_ERROR_CONNECTING=33006]="BIZ_ERROR_CONNECTING",e[e.MSG_ROAMING_SERVICE_UNAVAILABLE=33007]="MSG_ROAMING_SERVICE_UNAVAILABLE",e[e.MSG_INSERT_ERROR=33008]="MSG_INSERT_ERROR",e[e.MSG_DEL_ERROR=33009]="MSG_DEL_ERROR",e[e.CONVER_REMOVE_ERROR=34001]="CONVER_REMOVE_ERROR",e[e.CONVER_GETLIST_ERROR=34002]="CONVER_GETLIST_ERROR",e[e.CONVER_SETOP_ERROR=34003]="CONVER_SETOP_ERROR",e[e.CONVER_TOTAL_UNREAD_ERROR=34004]="CONVER_TOTAL_UNREAD_ERROR",e[e.CONVER_TYPE_UNREAD_ERROR=34005]="CONVER_TYPE_UNREAD_ERROR",e[e.CONVER_ID_TYPE_UNREAD_ERROR=34006]="CONVER_ID_TYPE_UNREAD_ERROR",e[e.CONVER_CLEAR_ERROR=34007]="CONVER_CLEAR_ERROR",e[e.CLEAR_HIS_ERROR=34010]="CLEAR_HIS_ERROR",e[e.CLEAR_HIS_TYPE_ERROR=34008]="CLEAR_HIS_TYPE_ERROR",e[e.CLEAR_HIS_TIME_ERROR=34011]="CLEAR_HIS_TIME_ERROR",e[e.CONVER_GET_ERROR=34009]="CONVER_GET_ERROR",e[e.GROUP_SYNC_ERROR=35001]="GROUP_SYNC_ERROR",e[e.GROUP_MATCH_ERROR=35002]="GROUP_MATCH_ERROR",e[e.CHATROOM_ID_ISNULL=36001]="CHATROOM_ID_ISNULL",e[e.CHARTOOM_JOIN_ERROR=36002]="CHARTOOM_JOIN_ERROR",e[e.CHATROOM_HISMESSAGE_ERROR=36003]="CHATROOM_HISMESSAGE_ERROR",e[e.BLACK_ADD_ERROR=37001]="BLACK_ADD_ERROR",e[e.BLACK_GETSTATUS_ERROR=37002]="BLACK_GETSTATUS_ERROR",e[e.BLACK_REMOVE_ERROR=37003]="BLACK_REMOVE_ERROR",e[e.DRAF_GET_ERROR=38001]="DRAF_GET_ERROR",e[e.DRAF_SAVE_ERROR=38002]="DRAF_SAVE_ERROR",e[e.DRAF_REMOVE_ERROR=38003]="DRAF_REMOVE_ERROR",e[e.SUBSCRIBE_ERROR=39001]="SUBSCRIBE_ERROR",e[e.QNTKN_FILETYPE_ERROR=41001]="QNTKN_FILETYPE_ERROR",e[e.QNTKN_GET_ERROR=41002]="QNTKN_GET_ERROR",e[e.COOKIE_ENABLE=51001]="COOKIE_ENABLE",e[e.GET_MESSAGE_BY_ID_ERROR=61001]="GET_MESSAGE_BY_ID_ERROR",e[e.HAVNODEVICEID=24001]="HAVNODEVICEID",e[e.DEVICEIDISHAVE=24002]="DEVICEIDISHAVE",e[e.SUCCESS=0]="SUCCESS",e[e.FEILD=24009]="FEILD",e[e.VOIPISNULL=24013]="VOIPISNULL",e[e.NOENGINETYPE=24010]="NOENGINETYPE",e[e.NULLCHANNELNAME=24011]="NULLCHANNELNAME",e[e.VOIPDYANMICERROR=24012]="VOIPDYANMICERROR",e[e.NOVOIP=24014]="NOVOIP",e[e.INTERNALERRROR=24015]="INTERNALERRROR",e[e.VOIPCLOSE=24016]="VOIPCLOSE",e[e.CLOSE_BEFORE_OPEN=51001]="CLOSE_BEFORE_OPEN",e[e.ALREADY_IN_USE=51002]="ALREADY_IN_USE",e[e.INVALID_CHANNEL_NAME=51003]="INVALID_CHANNEL_NAME",e[e.VIDEO_CONTAINER_IS_NULL=51004]="VIDEO_CONTAINER_IS_NULL",e[e.DELETE_MESSAGE_ID_IS_NULL=61001]="DELETE_MESSAGE_ID_IS_NULL",e[e.CANCEL=1]="CANCEL",e[e.REJECT=2]="REJECT",e[e.HANGUP=3]="HANGUP",e[e.BUSYLINE=4]="BUSYLINE",e[e.NO_RESPONSE=5]="NO_RESPONSE",e[e.ENGINE_UN_SUPPORTED=6]="ENGINE_UN_SUPPORTED",e[e.NETWORK_ERROR=7]="NETWORK_ERROR",e[e.REMOTE_CANCEL=11]="REMOTE_CANCEL",e[e.REMOTE_REJECT=12]="REMOTE_REJECT",e[e.REMOTE_HANGUP=13]="REMOTE_HANGUP",e[e.REMOTE_BUSYLINE=14]="REMOTE_BUSYLINE",e[e.REMOTE_NO_RESPONSE=15]="REMOTE_NO_RESPONSE",e[e.REMOTE_ENGINE_UN_SUPPORTED=16]="REMOTE_ENGINE_UN_SUPPORTED",e[e.REMOTE_NETWORK_ERROR=17]="REMOTE_NETWORK_ERROR",e[e.VOIP_NOT_AVALIABLE=18]="VOIP_NOT_AVALIABLE"}(e.ErrorCode||(e.ErrorCode={})),e.ErrorCode,function(e){e[e.MEDIA_AUDIO=1]="MEDIA_AUDIO",e[e.MEDIA_VEDIO=2]="MEDIA_VEDIO"}(e.VoIPMediaType||(e.VoIPMediaType={})),e.VoIPMediaType,function(e){e[e.IMAGE=1]="IMAGE",e[e.AUDIO=2]="AUDIO",e[e.VIDEO=3]="VIDEO",e[e.FILE=100]="FILE"}(e.MediaType||(e.MediaType={})),e.MediaType,function(e){e[e.SEND=1]="SEND",e[e.RECEIVE=2]="RECEIVE"}(e.MessageDirection||(e.MessageDirection={})),e.MessageDirection,function(e){e[e.IMAGE=1]="IMAGE",e[e.AUDIO=2]="AUDIO",e[e.VIDEO=3]="VIDEO",e[e.FILE=4]="FILE"}(e.FileType||(e.FileType={})),e.FileType,function(e){e[e.RC_REAL_TIME_LOCATION_NOT_INIT=-1]="RC_REAL_TIME_LOCATION_NOT_INIT",e[e.RC_REAL_TIME_LOCATION_SUCCESS=0]="RC_REAL_TIME_LOCATION_SUCCESS",e[e.RC_REAL_TIME_LOCATION_GPS_DISABLED=1]="RC_REAL_TIME_LOCATION_GPS_DISABLED",e[e.RC_REAL_TIME_LOCATION_CONVERSATION_NOT_SUPPORT=2]="RC_REAL_TIME_LOCATION_CONVERSATION_NOT_SUPPORT",e[e.RC_REAL_TIME_LOCATION_IS_ON_GOING=3]="RC_REAL_TIME_LOCATION_IS_ON_GOING",e[e.RC_REAL_TIME_LOCATION_EXCEED_MAX_PARTICIPANT=4]="RC_REAL_TIME_LOCATION_EXCEED_MAX_PARTICIPANT",e[e.RC_REAL_TIME_LOCATION_JOIN_FAILURE=5]="RC_REAL_TIME_LOCATION_JOIN_FAILURE",e[e.RC_REAL_TIME_LOCATION_START_FAILURE=6]="RC_REAL_TIME_LOCATION_START_FAILURE",e[e.RC_REAL_TIME_LOCATION_NETWORK_UNAVAILABLE=7]="RC_REAL_TIME_LOCATION_NETWORK_UNAVAILABLE"}(e.RealTimeLocationErrorCode||(e.RealTimeLocationErrorCode={})),e.RealTimeLocationErrorCode,function(e){e[e.RC_REAL_TIME_LOCATION_STATUS_IDLE=0]="RC_REAL_TIME_LOCATION_STATUS_IDLE",e[e.RC_REAL_TIME_LOCATION_STATUS_INCOMING=1]="RC_REAL_TIME_LOCATION_STATUS_INCOMING",e[e.RC_REAL_TIME_LOCATION_STATUS_OUTGOING=2]="RC_REAL_TIME_LOCATION_STATUS_OUTGOING",e[e.RC_REAL_TIME_LOCATION_STATUS_CONNECTED=3]="RC_REAL_TIME_LOCATION_STATUS_CONNECTED"}(e.RealTimeLocationStatus||(e.RealTimeLocationStatus={})),e.RealTimeLocationStatus,function(e){e[e.READ=1]="READ",e[e.LISTENED=2]="LISTENED",e[e.DOWNLOADED=4]="DOWNLOADED",e[e.RETRIEVED=8]="RETRIEVED",e[e.UNREAD=0]="UNREAD"}(e.ReceivedStatus||(e.ReceivedStatus={})),e.ReceivedStatus,function(e){e[e.READ=1]="READ",e[e.LISTENED=2]="LISTENED",e[e.DOWNLOADED=4]="DOWNLOADED",e[e.RETRIEVED=8]="RETRIEVED",e[e.UNREAD=0]="UNREAD"}(e.ReadStatus||(e.ReadStatus={})),e.ReadStatus,function(e){e[e.EXACT=0]="EXACT",e[e.FUZZY=1]="FUZZY"}(e.SearchType||(e.SearchType={})),e.SearchType,function(e){e[e.SENDING=10]="SENDING",e[e.FAILED=20]="FAILED",e[e.SENT=30]="SENT",e[e.RECEIVED=40]="RECEIVED",e[e.READ=50]="READ",e[e.DESTROYED=60]="DESTROYED"}(e.SentStatus||(e.SentStatus={})),e.SentStatus,function(e){e[e.ACCEPTED=0]="ACCEPTED",e[e.UNACCEPTABLE_PROTOCOL_VERSION=1]="UNACCEPTABLE_PROTOCOL_VERSION",e[e.IDENTIFIER_REJECTED=2]="IDENTIFIER_REJECTED",e[e.SERVER_UNAVAILABLE=3]="SERVER_UNAVAILABLE",e[e.TOKEN_INCORRECT=4]="TOKEN_INCORRECT",e[e.NOT_AUTHORIZED=5]="NOT_AUTHORIZED",e[e.REDIRECT=6]="REDIRECT",e[e.PACKAGE_ERROR=7]="PACKAGE_ERROR",e[e.APP_BLOCK_OR_DELETE=8]="APP_BLOCK_OR_DELETE",e[e.BLOCK=9]="BLOCK",e[e.TOKEN_EXPIRE=10]="TOKEN_EXPIRE",e[e.DEVICE_ERROR=11]="DEVICE_ERROR"}(e.ConnectionState||(e.ConnectionState={})),e.ConnectionState,function(e){e[e.ROOM=1]="ROOM",e[e.PERSON=2]="PERSON"}(e.RTCAPIType||(e.RTCAPIType={})),e.RTCAPIType}(RongIMLib||(RongIMLib={})),function(e){var t=function(){function t(){}return t.getInstance=function(){if(!t._instance)throw new Error("RongIMClient is not initialized. Call .init() method first.");return t._instance},t.showError=function(e){console&&console.error&&__f__("error",JSON.stringify(e)," at rongyunIM\\rongyun.js:1")},t.logger=function(e){var n=e.code,a=t.LogFactory[n]||e;a.funcName=e.funcName,a.msg=e.msg||a.msg,t._memoryStore.depend.showError&&t.showError(a)},t.logCallback=function(e,n){return{onSuccess:e.onSuccess,onError:function(a){t.logger({code:a,funcName:n}),e.onError(a)}}},t.logSendCallback=function(e,n){return{onSuccess:e.onSuccess,onError:function(a,l){t.logger({code:a,funcName:n}),e.onError(a,l)},onBefore:e.onBefore}},t.init=function(n,a,l,r){if(t._instance)return t._memoryStore.sdkInfo;t._instance=new t,l=l||{};var i="http://",o="ws://";"https:"==location.protocol&&(o="wss://",i="https://");var s=!1;"function"!=typeof WebSocket&&(s=!0);var u=function(){var e=typeof WebSocket,t="number"==typeof WebSocket.OPEN;return e&&t};"object"==typeof WebSocket&&u()&&(s=!1);var c=function(){return document.documentElement.addBehavior};e.RongUtil.supportLocalStorage()?t._storageProvider=new e.LocalStorageProvider:c()?t._storageProvider=new e.UserDataProvider:t._storageProvider=new e.MemeoryProvider;var f=t._storageProvider.getItem("serverIndex");t.serverStore.index=f||0;var g="{0}{1}",v={api:"api.cn.ronghub.com"};e.RongUtil.forEach(v,function(t,n){v[n]=e.RongUtil.stringFormat(g,[i,t])}),e.RongUtil.forEach(v,function(t,n){var a=n in l,r={path:l[n],tmpl:g,protocol:i,sub:!0};t=a?e.RongUtil.formatProtoclPath(r):t,l[n]=t});var b=l.navigaters||[];l.navi&&(b=[l.navi]),!l.navi&&e.RongUtil.isEqual(b.length,0)&&(b=["nav.cn.ronghub.com","nav2-cn.ronghub.com"]),e.RongUtil.forEach(b,function(t,n){var a={path:t,tmpl:g,protocol:i,sub:!0};t=e.RongUtil.formatProtoclPath(a),b[n]=t});var h={protobuf:"cdn.ronghub.com/protobuf-2.3.5.min.js"};e.RongUtil.forEach(h,function(t,n){h[n]=e.RongUtil.stringFormat(g,[i,t])}),e.RongUtil.extend(h,l);var p={isPolling:s,wsScheme:o,protocol:i,showError:!0,openMp:!0,snifferTime:2e3,naviTimeout:5e3,navigaters:b,maxNaviRetry:10};delete l.navigaters,e.RongUtil.extend(p,l),e.RongUtil.isFunction(l.protobuf)&&(t.Protobuf=l.protobuf),t.userStatusObserver=new e.RongObserver,(new e.FeaturePatcher).patchAll();var d={token:"",callback:null,lastReadTime:new e.LimitableMap,historyMessageLimit:new e.MemoryCache,conversationList:[],appKey:n,publicServiceMap:new e.PublicServiceMap,providerType:1,deltaTime:0,filterMessages:[],isSyncRemoteConverList:!0,otherDevice:!1,custStore:{},converStore:{latestMessage:{}},connectAckTime:0,voipStategy:0,isFirstPingMsg:!0,depend:l,listenerList:t._memoryStore.listenerList,notification:{}};t._memoryStore=d,a&&"[object Object]"==Object.prototype.toString.call(a)?t._dataAccessProvider=a:t._dataAccessProvider=new e.ServerDataProvider,l.appCallback=r;var y=t._dataAccessProvider.init(n,l);return t._memoryStore.sdkInfo=y,t._dataAccessProvider.setServerInfo({navi:location.protocol+l.navi+"/navi.xml"}),t.MessageParams={TextMessage:{objectName:"RC:TxtMsg",msgTag:new e.MessageTag(!0,!0)},ImageMessage:{objectName:"RC:ImgMsg",msgTag:new e.MessageTag(!0,!0)},DiscussionNotificationMessage:{objectName:"RC:DizNtf",msgTag:new e.MessageTag(!1,!0)},VoiceMessage:{objectName:"RC:VcMsg",msgTag:new e.MessageTag(!0,!0)},RichContentMessage:{objectName:"RC:ImgTextMsg",msgTag:new e.MessageTag(!0,!0)},FileMessage:{objectName:"RC:FileMsg",msgTag:new e.MessageTag(!0,!0)},HQVoiceMessage:{objectName:"RC:HQVCMsg",msgTag:new e.MessageTag(!0,!0)},HandshakeMessage:{objectName:"",msgTag:new e.MessageTag(!0,!0)},UnknownMessage:{objectName:"",msgTag:new e.MessageTag(!0,!0)},LocationMessage:{objectName:"RC:LBSMsg",msgTag:new e.MessageTag(!0,!0)},InformationNotificationMessage:{objectName:"RC:InfoNtf",msgTag:new e.MessageTag(!1,!0)},ContactNotificationMessage:{objectName:"RC:ContactNtf",msgTag:new e.MessageTag(!1,!0)},ProfileNotificationMessage:{objectName:"RC:ProfileNtf",msgTag:new e.MessageTag(!1,!0)},CommandNotificationMessage:{objectName:"RC:CmdNtf",msgTag:new e.MessageTag(!0,!0)},PublicServiceRichContentMessage:{objectName:"RC:PSImgTxtMsg",msgTag:new e.MessageTag(!0,!0)},PublicServiceMultiRichContentMessage:{objectName:"RC:PSMultiImgTxtMsg",msgTag:new e.MessageTag(!0,!0)},JrmfRedPacketMessage:{objectName:"RCJrmf:RpMsg",msgTag:new e.MessageTag(!0,!0)},JrmfRedPacketOpenedMessage:{objectName:"RCJrmf:RpOpendMsg",msgTag:new e.MessageTag(!0,!0)},GroupNotificationMessage:{objectName:"RC:GrpNtf",msgTag:new e.MessageTag(!1,!0)},CommandMessage:{objectName:"RC:CmdMsg",msgTag:new e.MessageTag(!1,!1)},TypingStatusMessage:{objectName:"RC:TypSts",msgTag:new e.MessageTag(!1,!1)},PublicServiceCommandMessage:{objectName:"RC:PSCmd",msgTag:new e.MessageTag(!1,!1)},RecallCommandMessage:{objectName:"RC:RcCmd",msgTag:new e.MessageTag(!1,!0)},SyncReadStatusMessage:{objectName:"RC:SRSMsg",msgTag:new e.MessageTag(!1,!1)},ReadReceiptRequestMessage:{objectName:"RC:RRReqMsg",msgTag:new e.MessageTag(!1,!1)},ReadReceiptResponseMessage:{objectName:"RC:RRRspMsg",msgTag:new e.MessageTag(!1,!1)},ChangeModeResponseMessage:{objectName:"RC:CsChaR",msgTag:new e.MessageTag(!1,!1)},ChangeModeMessage:{objectName:"RC:CSCha",msgTag:new e.MessageTag(!1,!1)},EvaluateMessage:{objectName:"RC:CsEva",msgTag:new e.MessageTag(!1,!1)},CustomerContact:{objectName:"RC:CsContact",msgTag:new e.MessageTag(!1,!1)},HandShakeMessage:{objectName:"RC:CsHs",msgTag:new e.MessageTag(!1,!1)},HandShakeResponseMessage:{objectName:"RC:CsHsR",msgTag:new e.MessageTag(!1,!1)},SuspendMessage:{objectName:"RC:CsSp",msgTag:new e.MessageTag(!1,!1)},TerminateMessage:{objectName:"RC:CsEnd",msgTag:new e.MessageTag(!1,!1)},CustomerStatusUpdateMessage:{objectName:"RC:CsUpdate",msgTag:new e.MessageTag(!1,!1)},ReadReceiptMessage:{objectName:"RC:ReadNtf",msgTag:new e.MessageTag(!1,!1)}},t.MessageParams.AcceptMessage={objectName:"RC:VCAccept",msgTag:new e.MessageTag(!1,!1)},t.MessageParams.RingingMessage={objectName:"RC:VCRinging",msgTag:new e.MessageTag(!1,!1)},t.MessageParams.SummaryMessage={objectName:"RC:VCSummary",msgTag:new e.MessageTag(!1,!1)},t.MessageParams.HungupMessage={objectName:"RC:VCHangup",msgTag:new e.MessageTag(!1,!1)},t.MessageParams.InviteMessage={objectName:"RC:VCInvite",msgTag:new e.MessageTag(!1,!1)},t.MessageParams.MediaModifyMessage={objectName:"RC:VCModifyMedia",msgTag:new e.MessageTag(!1,!1)},t.MessageParams.MemberModifyMessage={objectName:"RC:VCModifyMem",msgTag:new e.MessageTag(!1,!1)},t.MessageType={TextMessage:"TextMessage",ImageMessage:"ImageMessage",DiscussionNotificationMessage:"DiscussionNotificationMessage",VoiceMessage:"VoiceMessage",RichContentMessage:"RichContentMessage",HandshakeMessage:"HandshakeMessage",UnknownMessage:"UnknownMessage",LocationMessage:"LocationMessage",InformationNotificationMessage:"InformationNotificationMessage",ContactNotificationMessage:"ContactNotificationMessage",ProfileNotificationMessage:"ProfileNotificationMessage",CommandNotificationMessage:"CommandNotificationMessage",CommandMessage:"CommandMessage",TypingStatusMessage:"TypingStatusMessage",ChangeModeResponseMessage:"ChangeModeResponseMessage",ChangeModeMessage:"ChangeModeMessage",EvaluateMessage:"EvaluateMessage",HandShakeMessage:"HandShakeMessage",HandShakeResponseMessage:"HandShakeResponseMessage",SuspendMessage:"SuspendMessage",TerminateMessage:"TerminateMessage",CustomerContact:"CustomerContact",CustomerStatusUpdateMessage:"CustomerStatusUpdateMessage",SyncReadStatusMessage:"SyncReadStatusMessage",ReadReceiptRequestMessage:"ReadReceiptRequestMessage",ReadReceiptResponseMessage:"ReadReceiptResponseMessage",FileMessage:"FileMessage",HQVoiceMessage:"HQVoiceMessage",AcceptMessage:"AcceptMessage",RingingMessage:"RingingMessage",SummaryMessage:"SummaryMessage",HungupMessage:"HungupMessage",InviteMessage:"InviteMessage",MediaModifyMessage:"MediaModifyMessage",MemberModifyMessage:"MemberModifyMessage",JrmfRedPacketMessage:"JrmfRedPacketMessage",JrmfRedPacketOpenedMessage:"JrmfRedPacketOpenedMessage",GroupNotificationMessage:"GroupNotificationMessage",PublicServiceRichContentMessage:"PublicServiceRichContentMessage",PublicServiceMultiRichContentMessage:"PublicServiceMultiRichContentMessage",PublicServiceCommandMessage:"PublicServiceCommandMessage",RecallCommandMessage:"RecallCommandMessage",ReadReceiptMessage:"ReadReceiptMessage"},t.LogFactory={"-1":{code:"-1",msg:"æœåŠ¡å™¨è¶…æ—¶"},"-2":{code:"-2",msg:"æœªçŸ¥åŽŸå› å¤±è´¥"},"-3":{code:"-3",msg:"å‚æ•°é”™è¯¯"},"-4":{code:"-4",msg:"å‚æ•°ä¸æ­£ç¡®æˆ–å°šæœªå®žä¾‹åŒ–"},25101:{code:"25101",msg:"æ’¤å›žæ¶ˆæ¯å‚æ•°é”™è¯¯",desc:"è¯·æ£€æŸ¥æ’¤å›žæ¶ˆæ¯å‚æ•° https://rongcloud.github.io/websdk-demo/api-test.html"},25102:{code:"25101",msg:"åªèƒ½æ’¤å›žè‡ªå‘å‘é€çš„æ¶ˆæ¯"},20604:{code:"20604",msg:"å‘é€é¢‘çŽ‡è¿‡å¿«",desc:"https://developer.rongcloud.cn/ticket/info/9Q3L6vRKd1cLS7rycA==?type=1"},20406:{code:"20406",msg:"è¢«ç¦è¨€"},23407:{code:"23407",msg:"èŽ·å–ç”¨æˆ·å¤±è´¥"},20407:{code:"20407",msg:"ç¾¤ç»„Idæ— æ•ˆ"},22408:{code:"22408",msg:"ç¾¤ç»„è¢«ç¦è¨€"},22406:{code:"22406",msg:"ä¸åœ¨ç¾¤ç»„"},35001:{code:"35001",msg:"ç¾¤ç»„åŒæ­¥å¼‚å¸¸"},35002:{code:"35002",msg:"åŒ¹é…ç¾¤ä¿¡æ¯å¼‚å¸¸"},21406:{code:"21406",msg:"ä¸åœ¨è®¨è®ºç»„"},21407:{code:"21407",msg:"åŠ å…¥è®¨è®ºå¤±è´¥"},21408:{code:"21408",msg:"åˆ›å»ºè®¨è®ºç»„å¤±è´¥"},21409:{code:"21409",msg:"è®¾ç½®è®¨è®ºç»„é‚€è¯·çŠ¶æ€å¤±è´¥"},23406:{code:"23406",msg:"ä¸åœ¨èŠå¤©å®¤"},23408:{code:"23408",msg:"èŠå¤©å®¤è¢«ç¦è¨€"},23409:{code:"23409",msg:"èŠå¤©å®¤ä¸­æˆå‘˜è¢«è¸¢å‡º"},23410:{code:"23410",msg:"èŠå¤©å®¤ä¸å­˜åœ¨"},23411:{code:"23411",msg:"èŠå¤©å®¤æˆå‘˜å·²æ»¡"},23412:{code:"23412",msg:"èŽ·å–èŠå¤©å®¤ä¿¡æ¯å‚æ•°æ— æ•ˆ"},23413:{code:"23413",msg:"èŠå¤©å®¤å¼‚å¸¸"},23414:{code:"23414",msg:"æ²¡æœ‰æ‰“å¼€èŠå¤©å®¤æ¶ˆæ¯å­˜å‚¨"},36001:{code:"36001",msg:"åŠ å…¥èŠå¤©å®¤Idä¸ºç©º"},36002:{code:"36002",msg:"åŠ å…¥èŠå¤©å®¤å¤±è´¥"},36003:{code:"36003",msg:"æ‹‰å–èŠå¤©å®¤åŽ†å²æ¶ˆæ¯å¤±è´¥"},24001:{code:"24001",msg:"æ²¡æœ‰æ³¨å†ŒDeviveId ä¹Ÿå°±æ˜¯ç”¨æˆ·æ²¡æœ‰ç™»é™†"},24002:{code:"24002",msg:"ç”¨æˆ·å·²ç»å­˜åœ¨"},0:{code:"0",msg:"æˆåŠŸ"},24009:{code:"24009",msg:"æ²¡æœ‰å¯¹åº”çš„ç”¨æˆ·æˆ–token"},24013:{code:"24013",msg:"voipä¸ºç©º"},24010:{code:"24010",msg:"ä¸æ”¯æŒçš„Voipå¼•æ“Ž"},24011:{code:"24011",msg:"channelName æ˜¯ç©º"},24012:{code:"24012",msg:"ç”ŸæˆVoipkeyå¤±è´¥"},24014:{code:"24014",msg:"æ²¡æœ‰é…ç½®voip"},24015:{code:"24015",msg:"æœåŠ¡å™¨å†…éƒ¨é”™è¯¯"},24016:{code:"24016",msg:"VOIP close"},30001:{code:"30001",msg:"é€šä¿¡è¿‡ç¨‹ä¸­ï¼Œå½“å‰Socketä¸å­˜åœ¨"},30002:{code:"30002",msg:"Socketè¿žæŽ¥ä¸å¯ç”¨"},30003:{code:"30003",msg:"é€šä¿¡è¶…æ—¶"},30004:{code:"30004",msg:"å¯¼èˆªæ“ä½œæ—¶ï¼ŒHttpè¯·æ±‚å¤±è´¥"},30005:{code:"30005",msg:"HTTPè¯·æ±‚å¤±è´¥"},30006:{code:"30006",msg:"HTTPæŽ¥æ”¶å¤±è´¥"},30007:{code:"30007",msg:"å¯¼èˆªèµ„æºé”™è¯¯"},30008:{code:"30008",msg:"æ²¡æœ‰æœ‰æ•ˆæ•°æ®"},30009:{code:"30009",msg:"ä¸å­˜åœ¨æœ‰æ•ˆ IP åœ°å€"},30010:{code:"30010",msg:"åˆ›å»º Socket å¤±è´¥"},30011:{code:"30011",msg:" Socket è¢«æ–­å¼€"},30012:{code:"30012",msg:"PING æ“ä½œå¤±è´¥"},30013:{code:"30013",msg:"PING è¶…æ—¶"},30014:{code:"30014",msg:"æ¶ˆæ¯å‘é€å¤±è´¥"},30016:{code:"30016",msg:"æ¶ˆæ¯å¤§å°è¶…é™ï¼Œæœ€å¤§ 128 KB"},31000:{code:"31000",msg:"åš connect è¿žæŽ¥æ—¶ï¼Œæ”¶åˆ°çš„ ACK è¶…æ—¶"},31001:{code:"31001",msg:"å‚æ•°é”™è¯¯"},31002:{code:"31002",msg:"å‚æ•°é”™è¯¯ï¼ŒApp Id é”™è¯¯"},31003:{code:"31003",msg:"æœåŠ¡å™¨ä¸å¯ç”¨"},31004:{code:"31004",msg:"Token é”™è¯¯"},31005:{code:"31005",msg:"App Id ä¸Ž Token ä¸åŒ¹é…"},31006:{code:"31006",msg:"é‡å®šå‘ï¼Œåœ°å€é”™è¯¯"},31007:{code:"31007",msg:"NAME ä¸ŽåŽå°æ³¨å†Œä¿¡æ¯ä¸ä¸€è‡´"},31008:{code:"31008",msg:"APP è¢«å±è”½ã€åˆ é™¤æˆ–ä¸å­˜åœ¨"},31009:{code:"31009",msg:"ç”¨æˆ·è¢«å±è”½"},31010:{code:"31010",msg:"Disconnectï¼Œç”±æœåŠ¡å™¨è¿”å›žï¼Œæ¯”å¦‚ç”¨æˆ·äº’è¸¢"},31011:{code:"31011",msg:"Disconnectï¼Œç”±æœåŠ¡å™¨è¿”å›žï¼Œæ¯”å¦‚ç”¨æˆ·äº’è¸¢"},32001:{code:"32001",msg:"åè®®å±‚å†…éƒ¨é”™è¯¯ã€‚queryï¼Œä¸Šä¼ ä¸‹è½½è¿‡ç¨‹ä¸­æ•°æ®é”™è¯¯"},32002:{code:"32002",msg:"åè®®å±‚å†…éƒ¨é”™è¯¯"},33001:{code:"33001",msg:"æœªè°ƒç”¨ init åˆå§‹åŒ–å‡½æ•°"},33002:{code:"33002",msg:"æ•°æ®åº“åˆå§‹åŒ–å¤±è´¥"},33003:{code:"33003",msg:"ä¼ å…¥å‚æ•°æ— æ•ˆ"},33004:{code:"33004",msg:"é€šé“æ— æ•ˆ"},33005:{code:"33005",msg:"é‡æ–°è¿žæŽ¥æˆåŠŸ"},33006:{code:"33006",msg:"è¿žæŽ¥ä¸­ï¼Œå†è°ƒç”¨ connect è¢«æ‹’ç»"},33007:{code:"33007",msg:"æ¶ˆæ¯æ¼«æ¸¸æœåŠ¡æœªå¼€é€š"},33008:{code:"33008",msg:"æ¶ˆæ¯æ·»åŠ å¤±è´¥"},33009:{code:"33009",msg:"æ¶ˆæ¯åˆ é™¤å¤±è´¥"},34001:{code:"34001",msg:"åˆ é™¤ä¼šè¯å¤±è´¥"},34002:{code:"34002",msg:"æ‹‰å–åŽ†å²æ¶ˆæ¯å¤±è´¥"},34003:{code:"34003",msg:"ä¼šè¯æŒ‡å®šå¼‚å¸¸"},34004:{code:"34004",msg:"èŽ·å–ä¼šè¯æœªè¯»æ¶ˆæ¯æ€»æ•°å¤±è´¥"},34005:{code:"34005",msg:"èŽ·å–æŒ‡å®šä¼šè¯ç±»åž‹æœªè¯»æ¶ˆæ¯æ•°å¼‚å¸¸"},34006:{code:"34006",msg:"èŽ·å–æŒ‡å®šç”¨æˆ·ID&ä¼šè¯ç±»åž‹æœªè¯»æ¶ˆæ¯æ•°å¼‚å¸¸"},34007:{code:"34007",msg:"æ¸…é™¤ä¼šè¯æ¶ˆæ¯å¼‚å¸¸"},34008:{code:"34008",msg:"èŽ·å–ä¼šè¯æ¶ˆæ¯å¼‚å¸¸"},34009:{code:"34009",msg:"æ¸…é™¤åŽ†å²æ¶ˆæ¯ä¼šè¯ç±»åž‹ä¸æ­£ç¡®"},34010:{code:"34010",msg:"æ¸…é™¤åŽ†å²æ¶ˆæ¯å¤±è´¥ï¼Œè¯·æ£€æŸ¥ä¼ å…¥å‚æ•°"},37001:{code:"37001",msg:"åŠ å…¥é»‘åå•å¼‚å¸¸"},37002:{code:"37002",msg:"èŽ·å¾—æŒ‡å®šäººå‘˜å†é»‘åå•ä¸­çš„çŠ¶æ€å¼‚å¸¸"},37003:{code:"37003",msg:"ç§»é™¤é»‘åå•å¼‚å¸¸"},405:{code:"405",msg:"åœ¨é»‘åå•ä¸­"},38001:{code:"38001",msg:"èŽ·å–è‰ç¨¿å¤±è´¥"},38002:{code:"38002",msg:"ä¿å­˜è‰ç¨¿å¤±è´¥"},38003:{code:"38003",msg:"åˆ é™¤è‰ç¨¿å¤±è´¥"},39001:{code:"39001",msg:"å…³æ³¨å…¬ä¼—å·å¤±è´¥"},41001:{code:"41001",msg:"æ–‡ä»¶ç±»åž‹é”™è¯¯"},41002:{code:"41002",msg:"èŽ·å–ä¸ƒç‰›tokenå¤±è´¥"},51001:{code:"51001",msg:"æœªå®‰è£…æˆ–æœªå¯åŠ¨æ’ä»¶"},51002:{code:"51002",msg:"è§†é¢‘å·²ç»å­˜åœ¨"},51003:{code:"51003",msg:"æ— æ•ˆçš„channelName"},51004:{code:"51004",msg:"è§†é¢‘å†…å®¹ä¸ºç©º"},61001:{code:"61001",msg:"åˆ é™¤æ¶ˆæ¯æ•°ç»„é•¿åº¦ä¸º 0"}},y},t.initApp=function(e,n){t.init(e.appkey,e.dataAccessProvider,e.opts,function(){var e=t._instance;n(null,e)})},t.connect=function(n,a,l,r){e.CheckParam.getInstance().check(["string","object","string|null|object|global|undefined","object|null|global|undefined"],"connect",!0,arguments);var i={onSuccess:a.onSuccess,onTokenIncorrect:a.onTokenIncorrect,onError:function(e){t.logger({code:e,funcName:"connect"}),a.onError(e)}};t._dataAccessProvider.connect(n,i,l,r)},t.reconnect=function(e,n){var a={onSuccess:e.onSuccess,onTokenIncorrect:e.onTokenIncorrect,onError:function(n){t.logger({code:n,funcName:"connect"}),e.onError(n)}};t._dataAccessProvider.reconnect(a,n)},t.registerMessageType=function(e,n,a,l,r){t._dataAccessProvider.registerMessageType(e,n,a,l,r),t.RegisterMessage[e].messageName=e,t.MessageType[e]=e,t.MessageParams[e]={objectName:n,msgTag:a}},t.prototype.registerMessageTypes=function(e){e=e||{},t._dataAccessProvider.registerMessageTypes(e)},t.setConnectionStatusListener=function(e){t._dataAccessProvider?t._dataAccessProvider.setConnectionStatusListener(e):t._memoryStore.listenerList.push(e)},t.statusWatch=function(e){"function"==typeof e&&t.statusListeners.push(e)},t.setOnReceiveMessageListener=function(e){t._dataAccessProvider?t._dataAccessProvider.setOnReceiveMessageListener(e):t._memoryStore.listenerList.push(e)},t.prototype.logout=function(){t._dataAccessProvider.logout()},t.prototype.disconnect=function(){t._dataAccessProvider.disconnect()},t.prototype.startCustomService=function(n,a,l){if(n&&a){var r=new e.HandShakeMessage(l),i=this;e.RongIMClient._memoryStore.custStore.isInit=!0,t.getInstance().sendMessage(e.ConversationType.CUSTOMER_SERVICE,n,r,{onSuccess:function(e){e.isBlack?(a.onError(),i.stopCustomeService(n,{onSuccess:function(){},onError:function(){}})):a.onSuccess()},onError:function(){a.onError()},onBefore:function(){}})}},t.prototype.stopCustomeService=function(n,a){if(n&&a){var l=t._memoryStore.custStore[n];if(l){var r=new e.SuspendMessage({sid:l.sid,uid:l.uid,pid:l.pid});this.sendCustMessage(n,r,{onSuccess:function(){setTimeout(function(){a.onSuccess()})},onError:function(){setTimeout(function(){a.onError()})}})}}},t.prototype.switchToHumanMode=function(n,a){if(n&&a){var l=t._memoryStore.custStore[n];if(l){var r=new e.ChangeModeMessage({sid:l.sid,uid:l.uid,pid:l.pid});this.sendCustMessage(n,r,a)}}},t.prototype.evaluateRebotCustomService=function(n,a,l,r){if(n&&r){var i=t._memoryStore.custStore[n];if(i){var o=new e.EvaluateMessage({sid:i.sid,uid:i.uid,pid:i.pid,isRobotResolved:a,sugest:l,type:0});this.sendCustMessage(n,o,r)}}},t.prototype.evaluateHumanCustomService=function(n,a,l,r){if(n&&r){var i=t._memoryStore.custStore[n];if(i){var o=new e.EvaluateMessage({sid:i.sid,uid:i.uid,pid:i.pid,humanValue:a,sugest:l,type:1});this.sendCustMessage(n,o,r)}}},t.prototype.sendCustMessage=function(n,a,l){t.getInstance().sendMessage(e.ConversationType.CUSTOMER_SERVICE,n,a,{onSuccess:function(e){l.onSuccess()},onError:function(){l.onError()},onBefore:function(){}})},t.prototype.getCurrentConnectionStatus=function(){return t._dataAccessProvider.getCurrentConnectionStatus()},t.prototype.getConnectionChannel=function(){return e.Transportations._TransportType==e.Socket.XHR_POLLING?e.ConnectionChannel.XHR_POLLING:e.Transportations._TransportType==e.Socket.WEBSOCKET?e.ConnectionChannel.WEBSOCKET:void 0},t.prototype.getStorageProvider=function(){return 1==t._memoryStore.providerType?"ServerDataProvider":"OtherDataProvider"},t.prototype.setFilterMessages=function(e){"[object Array]"==Object.prototype.toString.call(e)&&(t._memoryStore.filterMessages=e)},t.prototype.getAgoraDynamicKey=function(e,n,a){t._dataAccessProvider.getAgoraDynamicKey(e,n,a)},t.prototype.getCurrentUserId=function(){return e.Bridge._client.userId},t.prototype.getDeltaTime=function(){return t._dataAccessProvider.getDelaTime()},t.prototype.getMessage=function(e,n){t._dataAccessProvider.getMessage(e,t.logCallback(n,"getMessage"))},t.prototype.deleteLocalMessages=function(e,n,a,l){t._dataAccessProvider.removeLocalMessage(e,n,a,t.logCallback(l,"deleteLocalMessages"))},t.prototype.updateMessage=function(e,n){t._dataAccessProvider.updateMessage(e,t.logCallback(n,"updateMessage"))},t.prototype.clearData=function(){return t._dataAccessProvider.clearData()},t.prototype.clearMessages=function(e,n,a){t._dataAccessProvider.clearMessages(e,n,{onSuccess:function(e){setTimeout(function(){a.onSuccess(e)})},onError:function(e){setTimeout(function(){t.logger({code:e,funcName:"clearMessages"}),a.onError(e)})}})},t.prototype.clearMessagesUnreadStatus=function(e,n,a){t._dataAccessProvider.updateMessages(e,n,"readStatus",null,{onSuccess:function(e){setTimeout(function(){a.onSuccess(e)})},onError:function(e){setTimeout(function(){t.logger({code:e,funcName:"clearMessagesUnreadStatus"}),a.onError(e)})}})},t.prototype.deleteRemoteMessages=function(n,a,l,r){if(e.CheckParam.getInstance().check(["number","string|number","array","object"],"deleteRemoteMessages",!1,arguments),0==l.length){var i=e.ErrorCode.DELETE_MESSAGE_ID_IS_NULL;return t.logger({code:i,funcName:"deleteRemoteMessages"}),void r.onError(e.ErrorCode.DELETE_MESSAGE_ID_IS_NULL)}l.length>100&&(l.length=100),r.onSuccess(!0)},t.prototype.deleteMessages=function(e,n,a,l){t._dataAccessProvider.removeMessage(e,n,a,{onSuccess:function(e){setTimeout(function(){l.onSuccess(e)})},onError:function(e){setTimeout(function(){t.logger({code:e,funcName:"deleteMessages"}),l.onError(e)})}})},t.prototype.sendLocalMessage=function(n,a){e.CheckParam.getInstance().check(["object","object"],"sendLocalMessage",!1,arguments),t._dataAccessProvider.updateMessage(n),this.sendMessage(n.conversationType,n.targetId,n.content,t.logSendCallback(a,"sendLocalMessage"))},t.prototype.sendMessage=function(n,a,l,r,i,o,s,u,c){e.CheckParam.getInstance().check(["number","string|number","object","object","undefined|object|null|global|boolean","undefined|object|null|global|string","undefined|object|null|global|string","undefined|object|null|global|number","undefined|object|null|global"],"sendMessage",!1,arguments),t._dataAccessProvider.sendMessage(n,a,l,t.logSendCallback(r,"sendMessage"),i,o,s,u,c)},t.prototype.sendReceiptResponse=function(e,n,a){t._dataAccessProvider.sendReceiptResponse(e,n,t.logSendCallback(a,"sendReceiptResponse"))},t.prototype.sendTypingStatusMessage=function(e,n,a,l){t._dataAccessProvider.sendTypingStatusMessage(e,n,a,t.logSendCallback(l,"sendTypingStatusMessage"))},t.prototype.sendStatusMessage=function(e,t,n){throw new Error("Not implemented yet")},t.prototype.sendTextMessage=function(e,n,a,l){t._dataAccessProvider.sendTextMessage(e,n,a,t.logSendCallback(l,"sendTextMessage"))},t.prototype.sendRecallMessage=function(n,a){var l=t.logSendCallback(a,"sendRecallMessage");if(n.senderUserId==e.Bridge._client.userId)t._dataAccessProvider.sendRecallMessage(n,l);else{l=t.logSendCallback(a,"sendRecallMessage");l.onError(e.ErrorCode.RECALL_MESSAGE,n)}},t.prototype.insertMessage=function(e,n,a,l){t._dataAccessProvider.addMessage(e,n,a,t.logCallback(l,"insertMessage"))},t.prototype.setMessageContent=function(e,n,a){t._dataAccessProvider.setMessageContent(e,n,a)},t.prototype.setMessageSearchField=function(e,n,a){t._dataAccessProvider.setMessageContent(e,n,a)},t.prototype.getHistoryMessages=function(n,a,l,r,i,o,s){if(e.CheckParam.getInstance().check(["number","string|number","number|null|global|object","number","object","undefined|object|null|global|string","number|null|global|object"],"getHistoryMessages",!1,arguments),r>20)throw new Error("HistroyMessage count must be less than or equal to 20!");if(n.valueOf()<0)throw new Error("ConversationType must be greater than -1");t._dataAccessProvider.getHistoryMessages(n,a,l,r,t.logCallback(i,"getHistoryMessages"),o,s)},t.prototype.getRemoteHistoryMessages=function(n,a,l,r,i,o){e.CheckParam.getInstance().check(["number","string|number","number|null|global|object","number","object","undefined|null|global|object"],"getRemoteHistoryMessages",!1,arguments);var s={errorCode:e.ErrorCode.RC_CONN_PROTO_VERSION_ERROR,funcName:"getRemoteHistoryMessages"};return r>20?(t.logger(s),void i.onError(e.ErrorCode.RC_CONN_PROTO_VERSION_ERROR)):n.valueOf()<0?(t.logger(s),void i.onError(e.ErrorCode.RC_CONN_PROTO_VERSION_ERROR)):void t._dataAccessProvider.getRemoteHistoryMessages(n,a,l,r,t.logCallback(i,"getRemoteHistoryMessages"),o)},t.prototype.clearHistoryMessages=function(e,n){t._dataAccessProvider.clearHistoryMessages(e,n)},t.prototype.clearRemoteHistoryMessages=function(e,n){t._dataAccessProvider.clearRemoteHistoryMessages(e,t.logCallback(n,"clearRemoteHistoryMessages"))},t.prototype.hasRemoteUnreadMessages=function(e,n){t._dataAccessProvider.hasRemoteUnreadMessages(e,t.logCallback(n,"hasRemoteUnreadMessages"))},t.prototype.getTotalUnreadCount=function(e,n){t._dataAccessProvider.getTotalUnreadCount({onSuccess:function(t){setTimeout(function(){e.onSuccess(t)})},onError:function(n){setTimeout(function(){t.logger({code:n,funcName:"getTotalUnreadCount"}),e.onError(n)})}},n)},t.prototype.getConversationUnreadCount=function(e,n){t._dataAccessProvider.getConversationUnreadCount(e,{onSuccess:function(e){setTimeout(function(){n.onSuccess(e)})},onError:function(e){setTimeout(function(){t.logger({code:e,funcName:"getConversationUnreadCount"}),n.onError(e)})}})},t.prototype.getUnreadCount=function(e,n,a){t._dataAccessProvider.getUnreadCount(e,n,{onSuccess:function(e){setTimeout(function(){a.onSuccess(e)})},onError:function(e){setTimeout(function(){t.logger({code:e,funcName:"getUnreadCount"}),a.onError(e)})}})},t.prototype.setUnreadCount=function(n,a,l){e.CheckParam.getInstance().check(["number","string","number"],"setUnreadCount",!1,arguments),t._dataAccessProvider.setUnreadCount(n,a,l)},t.prototype.clearUnreadCountByTimestamp=function(e,n,a,l){t._dataAccessProvider.clearUnreadCountByTimestamp(e,n,a,t.logCallback(l,"clearUnreadCountByTimestamp"))},t.prototype.clearUnreadCount=function(e,n,a){t._dataAccessProvider.clearUnreadCount(e,n,{onSuccess:function(e){setTimeout(function(){a.onSuccess(e)})},onError:function(e){setTimeout(function(){t.logger({code:e,funcName:"clearUnreadCount"}),a.onError(e)})}})},t.prototype.clearTotalUnreadCount=function(e){t._dataAccessProvider.clearTotalUnreadCount({onSuccess:function(t){e.onSuccess(t)},onError:function(n){setTimeout(function(){t.logger({code:n,funcName:"clearTotalUnreadCount"}),e.onError(n)})}})},t.prototype.clearLocalStorage=function(e){t._storageProvider.clearItem(),e()},t.prototype.setMessageExtra=function(e,n,a){t._dataAccessProvider.setMessageExtra(e,n,{onSuccess:function(e){setTimeout(function(){a.onSuccess(e)})},onError:function(e){setTimeout(function(){t.logger({code:e,funcName:"setMessageExtra"}),a.onError(e)})}})},t.prototype.setMessageReceivedStatus=function(e,n,a){t._dataAccessProvider.setMessageReceivedStatus(e,n,{onSuccess:function(e){setTimeout(function(){a.onSuccess(e)})},onError:function(e){setTimeout(function(){t.logger({code:e,funcName:"setMessageReceivedStatus"}),a.onError(e)})}})},t.prototype.setMessageStatus=function(e,n,a,l,r){t._dataAccessProvider.setMessageStatus(e,n,a,l,t.logCallback(r,"setMessageStatus"))},t.prototype.setMessageSentStatus=function(e,n,a){t._dataAccessProvider.setMessageSentStatus(e,n,{onSuccess:function(e){setTimeout(function(){a.onSuccess(e)})},onError:function(e){setTimeout(function(){t.logger({code:e,funcName:"setMessageSentStatus"}),a.onError(e)})}})},t.prototype.clearTextMessageDraft=function(n,a){e.CheckParam.getInstance().check(["number","string|number","object"],"clearTextMessageDraft",!1,arguments);var l="darf_"+n+"_"+a;return delete t._memoryStore[l],!0},t.prototype.getTextMessageDraft=function(n,a){if(e.CheckParam.getInstance().check(["number","string|number","object"],"getTextMessageDraft",!1,arguments),""==a||n<0)throw new Error("params error : "+e.ErrorCode.DRAF_GET_ERROR);var l="darf_"+n+"_"+a;return t._memoryStore[l]},t.prototype.saveTextMessageDraft=function(n,a,l){e.CheckParam.getInstance().check(["number","string|number","string","object"],"saveTextMessageDraft",!1,arguments);var r="darf_"+n+"_"+a;return t._memoryStore[r]=l,!0},t.prototype.searchConversationByContent=function(e,n,a){t._dataAccessProvider.searchConversationByContent(e,t.logCallback(n,"searchConversationByContent"),a)},t.prototype.searchMessageByContent=function(e,n,a,l,r,i,o){t._dataAccessProvider.searchMessageByContent(e,n,a,l,r,i,t.logCallback(o,"searchMessageByContent"))},t.prototype.clearCache=function(){t._dataAccessProvider.clearCache()},t.prototype.clearConversations=function(n){for(var a=[],l=1;l<arguments.length;l++)a[l-1]=arguments[l];0==a.length&&(a=[e.ConversationType.CHATROOM,e.ConversationType.CUSTOMER_SERVICE,e.ConversationType.DISCUSSION,e.ConversationType.GROUP,e.ConversationType.PRIVATE,e.ConversationType.SYSTEM,e.ConversationType.PUBLIC_SERVICE,e.ConversationType.APP_PUBLIC_SERVICE]),t._dataAccessProvider.clearConversations(a,{onSuccess:function(e){setTimeout(function(){n.onSuccess(e)})},onError:function(e){setTimeout(function(){t.logger({code:e,funcName:"clearConversations"}),n.onError(e)})}})},t.prototype.getConversation=function(n,a,l){e.CheckParam.getInstance().check(["number","string|number","object"],"getConversation",!1,arguments),t._dataAccessProvider.getConversation(n,a,{onSuccess:function(e){setTimeout(function(){l.onSuccess(e)})},onError:function(e){setTimeout(function(){t.logger({code:e,funcName:"getConversation"}),l.onError(e)})}})},t.prototype.pottingConversation=function(n){var a=this,l=!1;t._dataAccessProvider.getConversation(n.type,n.userId,{onSuccess:function(r){r?l=!0:r=new e.Conversation,r.conversationType=n.type,r.targetId=n.userId,r.latestMessage=e.MessageUtil.messageParser(n.msg),r.latestMessageId=r.latestMessage.messageId,r.objectName=r.latestMessage.objectName,r.receivedStatus=r.latestMessage.receivedStatus,r.receivedTime=r.latestMessage.receiveTime,r.sentStatus=r.latestMessage.sentStatus,r.sentTime=r.latestMessage.sentTime;var i=t._storageProvider.getItem("mentioneds_"+e.Bridge._client.userId+"_"+r.conversationType+"_"+r.targetId);if(i){var o=JSON.parse(i);r.mentionedMsg=o[n.type+"_"+n.userId]}if(!l)if(e.RongUtil.supportLocalStorage()){var s=t._storageProvider.getItem("cu"+e.Bridge._client.userId+n.type+n.userId);r.unreadMessageCount=Number(s)}else r.unreadMessageCount=0;r.conversationType==e.ConversationType.DISCUSSION&&a.getDiscussion(n.userId,{onSuccess:function(e){r.conversationTitle=e.name},onError:function(e){}}),t._dataAccessProvider.addConversation(r,{onSuccess:function(e){}})},onError:function(e){}})},t.prototype.addConversation=function(e,n){t._dataAccessProvider.addConversation(e,n)},t.prototype.sortConversationList=function(e){for(var n=[],a=0,l=e.length;a<l;a++)if(e[a])if(e[a].isTop)n.push(e[a]),e.splice(a,1);else for(var r=0;r<l-a-1;r++)if(e[r].sentTime<e[r+1].sentTime){var i=e[r];e[r]=e[r+1],e[r+1]=i}return t._memoryStore.conversationList=n.concat(e)},t.prototype.getConversationList=function(n,a,l,r){e.CheckParam.getInstance().check(["object","null|undefined|array|object|global","number|undefined|null|object|global","boolean|undefined|null|object|global"],"getConversationList",!1,arguments),t._dataAccessProvider.getConversationList({onSuccess:function(e){a||t._dataAccessProvider?setTimeout(function(){n.onSuccess(e)}):setTimeout(function(){n.onSuccess(t._memoryStore.conversationList)})},onError:function(e){setTimeout(function(){t.logger({code:e,funcName:"getConversationList"}),n.onError(e)})}},a,l,r)},t.prototype.getRemoteConversationList=function(n,a,l,r){e.CheckParam.getInstance().check(["object","null|array|object|global","number|undefined|null|object|global","boolean|undefined|null|object|global"],"getRemoteConversationList",!1,arguments),t._dataAccessProvider.getRemoteConversationList(t.logCallback(n,"getRemoteConversationList"),a,l,r)},t.prototype.updateConversation=function(e){return t._dataAccessProvider.updateConversation(e)},t.prototype.createConversation=function(t,n,a){e.CheckParam.getInstance().check(["number","string|number","string"],"createConversation",!1,arguments);var l=new e.Conversation;return l.targetId=n,l.conversationType=t,l.conversationTitle=a,l.latestMessage={},l.unreadMessageCount=0,l},t.prototype.removeConversation=function(n,a,l){e.CheckParam.getInstance().check(["number","string|number","object"],"removeConversation",!1,arguments),t._dataAccessProvider.removeConversation(n,a,t.logCallback(l,"removeConversation"))},t.prototype.setConversationHidden=function(n,a,l){e.CheckParam.getInstance().check(["number","string|number","boolean"],"setConversationHidden",!1,arguments),t._dataAccessProvider.setConversationHidden(n,a,l)},t.prototype.setConversationToTop=function(n,a,l,r){e.CheckParam.getInstance().check(["number","string|number","boolean","object"],"setConversationToTop",!1,arguments),t._dataAccessProvider.setConversationToTop(n,a,l,{onSuccess:function(e){setTimeout(function(){r.onSuccess(e)})},onError:function(e){setTimeout(function(){t.logger({code:e,funcName:"setConversationToTop"}),r.onError(e)})}})},t.prototype.getConversationNotificationStatus=function(e,n,a){var l={conversationType:e,targetId:n};t._dataAccessProvider.getConversationNotificationStatus(l,t.logCallback(a,"getConversationNotificationStatus"))},t.prototype.setConversationNotificationStatus=function(e,n,a,l){var r={conversationType:e,targetId:n,status:status};t._dataAccessProvider.setConversationNotificationStatus(r,t.logCallback(l,"setConversationNotificationStatus"))},t.prototype.getNotificationQuietHours=function(e){throw new Error("Not implemented yet")},t.prototype.removeNotificationQuietHours=function(e){throw new Error("Not implemented yet")},t.prototype.setNotificationQuietHours=function(e,t,n){throw new Error("Not implemented yet")},t.prototype.addMemberToDiscussion=function(n,a,l){e.CheckParam.getInstance().check(["string","array","object"],"addMemberToDiscussion",!1,arguments),t._dataAccessProvider.addMemberToDiscussion(n,a,t.logCallback(l,"addMemberToDiscussion"))},t.prototype.createDiscussion=function(n,a,l){e.CheckParam.getInstance().check(["string","array","object"],"createDiscussion",!1,arguments),t._dataAccessProvider.createDiscussion(n,a,l)},t.prototype.getDiscussion=function(n,a){e.CheckParam.getInstance().check(["string","object"],"getDiscussion",!1,arguments),t._dataAccessProvider.getDiscussion(n,t.logCallback(a,"getDiscussion"))},t.prototype.quitDiscussion=function(n,a){e.CheckParam.getInstance().check(["string","object"],"quitDiscussion",!1,arguments),t._dataAccessProvider.quitDiscussion(n,t.logCallback(a,"quitDiscussion"))},t.prototype.removeMemberFromDiscussion=function(n,a,l){e.CheckParam.getInstance().check(["string","string","object"],"removeMemberFromDiscussion",!1,arguments),t._dataAccessProvider.removeMemberFromDiscussion(n,a,t.logCallback(l,"removeMemberFromDiscussion"))},t.prototype.setDiscussionInviteStatus=function(n,a,l){e.CheckParam.getInstance().check(["string","number","object"],"setDiscussionInviteStatus",!1,arguments),t._dataAccessProvider.setDiscussionInviteStatus(n,a,t.logCallback(l,"setDiscussionInviteStatus"))},t.prototype.setDiscussionName=function(n,a,l){e.CheckParam.getInstance().check(["string","string","object"],"setDiscussionName",!1,arguments),t._dataAccessProvider.setDiscussionName(n,a,t.logCallback(l,"setDiscussionName"))},t.prototype.joinChatRoom=function(n,a,l){e.CheckParam.getInstance().check(["string|number","number","object"],"joinChatRoom",!1,arguments),""!=n?t._dataAccessProvider.joinChatRoom(n,a,t.logCallback(l,"joinChatRoom")):setTimeout(function(){var n=e.ErrorCode.CHATROOM_ID_ISNULL;t.logger({code:n,funcName:"joinChatRoom"}),l.onError(e.ErrorCode.CHATROOM_ID_ISNULL)})},t.prototype.setDeviceInfo=function(e){t._dataAccessProvider.setDeviceInfo(e)},t.prototype.setChatroomHisMessageTimestamp=function(n,a){e.CheckParam.getInstance().check(["string|number","number"],"setChatroomHisMessageTimestamp",!1,arguments),t._dataAccessProvider.setChatroomHisMessageTimestamp(n,a)},t.prototype.getChatRoomHistoryMessages=function(n,a,l,r){e.CheckParam.getInstance().check(["string|number","number","number","object"],"getChatRoomHistoryMessages",!1,arguments),t._dataAccessProvider.getChatRoomHistoryMessages(n,a,l,t.logCallback(r,"getChatRoomHistoryMessages"))},t.prototype.getChatRoomInfo=function(n,a,l,r){e.CheckParam.getInstance().check(["string|number","number","number","object"],"getChatRoomInfo",!1,arguments),t._dataAccessProvider.getChatRoomInfo(n,a,l,t.logCallback(r,"getChatRoomInfo"))},t.prototype.quitChatRoom=function(n,a){e.CheckParam.getInstance().check(["string|number","object"],"quitChatRoom",!1,arguments),t._dataAccessProvider.quitChatRoom(n,t.logCallback(a,"quitChatRoom"))},t.prototype.getRemotePublicServiceList=function(e,n){t._dataAccessProvider.getRemotePublicServiceList(t.logCallback(e,"getRemotePublicServiceList"),n)},t.prototype.getPublicServiceList=function(n){t._memoryStore.depend.openMp&&(e.CheckParam.getInstance().check(["object"],"getPublicServiceList",!1,arguments),this.getRemotePublicServiceList(t.logCallback(n,"getPublicServiceList")))},t.prototype.getPublicServiceProfile=function(n,a,l){t._memoryStore.depend.openMp&&(e.CheckParam.getInstance().check(["number","string|number","object"],"getPublicServiceProfile",!1,arguments),t._dataAccessProvider.getPublicServiceProfile(n,a,t.logCallback(l,"getPublicServiceProfile")))},t.prototype.pottingPublicSearchType=function(e,n){if(t._memoryStore.depend.openMp){var a=0;return 0==e?(a|=3,a|=0==n?12:48):1==e?(a|=1,a|=0==n?8:32):(a|=2,a|=0==e?4:16),a}},t.prototype.searchPublicService=function(n,a,l){if(t._memoryStore.depend.openMp){e.CheckParam.getInstance().check(["number","string","object"],"searchPublicService",!1,arguments);var r=new t.Protobuf.SearchMpInput;r.setType(this.pottingPublicSearchType(0,n)),r.setId(a),t.bridge.queryMsg(29,e.MessageUtil.ArrayForm(r.toArrayBuffer()),e.Bridge._client.userId,t.logCallback(l,"searchPublicService"),"SearchMpOutput")}},t.prototype.searchPublicServiceByType=function(n,a,l,r){if(t._memoryStore.depend.openMp){e.CheckParam.getInstance().check(["number","number","string","object"],"searchPublicServiceByType",!1,arguments);var i=n==e.ConversationType.APP_PUBLIC_SERVICE?2:1,o=new t.Protobuf.SearchMpInput;o.setType(this.pottingPublicSearchType(i,a)),o.setId(l),t.bridge.queryMsg(29,e.MessageUtil.ArrayForm(o.toArrayBuffer()),e.Bridge._client.userId,t.logCallback(r,"searchPublicServiceByType"),"SearchMpOutput")}},t.prototype.subscribePublicService=function(n,a,l){if(t._memoryStore.depend.openMp){e.CheckParam.getInstance().check(["number","string|number","object"],"subscribePublicService",!1,arguments);var r=new t.Protobuf.MPFollowInput,i=this,o=n==e.ConversationType.APP_PUBLIC_SERVICE?"mcFollow":"mpFollow";r.setId(a),t.bridge.queryMsg(o,e.MessageUtil.ArrayForm(r.toArrayBuffer()),e.Bridge._client.userId,{onSuccess:function(){i.getRemotePublicServiceList({onSuccess:function(){},onError:function(){}}),l.onSuccess()},onError:function(e){var n=e;t.logger({code:n,funcName:"subscribePublicService"}),l.onError(e)}},"MPFollowOutput")}},t.prototype.unsubscribePublicService=function(n,a,l){if(t._memoryStore.depend.openMp){e.CheckParam.getInstance().check(["number","string|number","object"],"unsubscribePublicService",!1,arguments);var r=new t.Protobuf.MPFollowInput,i=n==e.ConversationType.APP_PUBLIC_SERVICE?"mcUnFollow":"mpUnFollow";r.setId(a),t.bridge.queryMsg(i,e.MessageUtil.ArrayForm(r.toArrayBuffer()),e.Bridge._client.userId,{onSuccess:function(){t._memoryStore.publicServiceMap.remove(n,a),l.onSuccess()},onError:function(e){var n=e;t.logger({code:n,funcName:"unsubscribePublicService"}),l.onError(e)}},"MPFollowOutput")}},t.prototype.addToBlacklist=function(n,a){e.CheckParam.getInstance().check(["string|number","object"],"addToBlacklist",!1,arguments),t._dataAccessProvider.addToBlacklist(n,t.logCallback(a,"addToBlacklist"))},t.prototype.getBlacklist=function(n){e.CheckParam.getInstance().check(["object"],"getBlacklist",!1,arguments),t._dataAccessProvider.getBlacklist(n)},t.prototype.getBlacklistStatus=function(n,a){e.CheckParam.getInstance().check(["string|number","object"],"getBlacklistStatus",!1,arguments),t._dataAccessProvider.getBlacklistStatus(n,t.logCallback(a,"getBlacklistStatus"))},t.prototype.removeFromBlacklist=function(n,a){e.CheckParam.getInstance().check(["string|number","object"],"removeFromBlacklist",!1,arguments),t._dataAccessProvider.removeFromBlacklist(n,t.logCallback(a,"removeFromBlacklist"))},t.prototype.getFileToken=function(n,a){e.CheckParam.getInstance().check(["number","object"],"getQngetFileTokenTkn",!1,arguments),t._dataAccessProvider.getFileToken(n,t.logCallback(a,"getFileToken"))},t.prototype.getFileUrl=function(n,a,l,r){e.CheckParam.getInstance().check(["number","string","string|global|object|null","object"],"getFileUrl",!1,arguments),t._dataAccessProvider.getFileUrl(n,a,l,t.logCallback(r,"getFileUrl"))},t.prototype.addRealTimeLocationListener=function(e,t,n){throw new Error("Not implemented yet")},t.prototype.getRealTimeLocation=function(e,t){throw new Error("Not implemented yet")},t.prototype.getRealTimeLocationCurrentState=function(e,t){throw new Error("Not implemented yet")},t.prototype.getRealTimeLocationParticipants=function(e,t){throw new Error("Not implemented yet")},t.prototype.joinRealTimeLocation=function(e,t){throw new Error("Not implemented yet")},t.prototype.quitRealTimeLocation=function(e,t){throw new Error("Not implemented yet")},t.prototype.startRealTimeLocation=function(e,t){throw new Error("Not implemented yet")},t.prototype.updateRealTimeLocationStatus=function(e,t,n,a){throw new Error("Not implemented yet")},t.prototype.startCall=function(n,a,l,r,i,o){if(e.CheckParam.getInstance().check(["number","string|number","array","number","string","object"],"startCall",!1,arguments),t._memoryStore.voipStategy)t._voipProvider.startCall(n,a,l,r,i,t.logCallback(o,"startCall"));else{var s=e.ErrorCode.VOIP_NOT_AVALIABLE;t.logger({code:s,funcName:"startCall"}),o.onError(e.ErrorCode.VOIP_NOT_AVALIABLE)}},t.prototype.joinCall=function(n,a){if(e.CheckParam.getInstance().check(["number","object"],"joinCall",!1,arguments),t._memoryStore.voipStategy)t._voipProvider.joinCall(n,t.logCallback(a,"joinCall"));else{var l=e.ErrorCode.VOIP_NOT_AVALIABLE;t.logger({code:l,funcName:"joinCall"}),a.onError(e.ErrorCode.VOIP_NOT_AVALIABLE)}},t.prototype.hungupCall=function(n,a,l){e.CheckParam.getInstance().check(["number","string","number"],"hungupCall",!1,arguments),t._memoryStore.voipStategy&&t._voipProvider.hungupCall(n,a,l)},t.prototype.changeMediaType=function(n,a,l,r){if(e.CheckParam.getInstance().check(["number","string","number","object"],"changeMediaType",!1,arguments),t._memoryStore.voipStategy)t._voipProvider.changeMediaType(n,a,l,t.logCallback(r,"changeMediaType"));else{var i=e.ErrorCode.VOIP_NOT_AVALIABLE;t.logger({code:i,funcName:"changeMediaType"}),r.onError(e.ErrorCode.VOIP_NOT_AVALIABLE)}},t.prototype.getUnreadMentionedMessages=function(e,n){return t._dataAccessProvider.getUnreadMentionedMessages(e,n)},t.prototype.clearListeners=function(){t._dataAccessProvider.clearListeners()},t.prototype.getUserStatus=function(e,n){t._dataAccessProvider.getUserStatus(e,t.logCallback(n,"getUserStatus"))},t.prototype.setUserStatus=function(e,n){t._dataAccessProvider.setUserStatus(e,t.logCallback(n,"setUserStatus"))},t.prototype.setUserStatusListener=function(e,n){var a=e.userIds,l=e.multiple;t.userStatusObserver.watch({key:a,func:n,multiple:l}),t._dataAccessProvider.setUserStatusListener(e,n)},t.messageWatch=function(e){t.RTCListener=e},t.prototype.getRTCUserInfoList=function(n,a){e.CheckParam.getInstance().check(["object","object"],"getRTCUserInfoList",!1,arguments),t._dataAccessProvider.getRTCUserInfoList(n,a)},t.prototype.getRTCUserList=function(n,a){e.CheckParam.getInstance().check(["object","object"],"getRTCUserList",!1,arguments),t._dataAccessProvider.getRTCUserList(n,a)},t.prototype.setRTCUserInfo=function(n,a,l){e.CheckParam.getInstance().check(["object","object","object"],"setRTCUserInfo",!1,arguments),t._dataAccessProvider.setRTCUserInfo(n,a,l)},t.prototype.removeRTCUserInfo=function(n,a,l){e.CheckParam.getInstance().check(["object","object","object"],"removeRTCUserInfo",!1,arguments),t._dataAccessProvider.removeRTCUserInfo(n,a,l)},t.prototype.getRTCRoomInfo=function(n,a){e.CheckParam.getInstance().check(["object","object"],"getRTCRoomInfo",!1,arguments),t._dataAccessProvider.getRTCRoomInfo(n,a)},t.prototype.setRTCRoomInfo=function(n,a,l){e.CheckParam.getInstance().check(["object","object","object"],"setRTCRoomInfo",!1,arguments),t._dataAccessProvider.setRTCRoomInfo(n,a,l)},t.prototype.removeRTCRoomInfo=function(n,a,l){e.CheckParam.getInstance().check(["object","object","object"],"removeRTCRoomInfo",!1,arguments),t._dataAccessProvider.removeRTCRoomInfo(n,a,l)},t.prototype.joinRTCRoom=function(n,a){e.CheckParam.getInstance().check(["object","object"],"joinRTCRoom",!1,arguments),t._dataAccessProvider.joinRTCRoom(n,a)},t.prototype.quitRTCRoom=function(n,a){e.CheckParam.getInstance().check(["object","object"],"quitRTCRoom",!1,arguments),t._dataAccessProvider.quitRTCRoom(n,a)},t.prototype.RTCPing=function(n,a){e.CheckParam.getInstance().check(["object","object"],"RTCPing",!1,arguments),t._dataAccessProvider.RTCPing(n,a)},t.prototype.setRTCUserData=function(n,a,l,r,i,o){e.CheckParam.getInstance().check(["string","string","string","boolean","object","global|object|null|undefined"],"setRTCUserData",!1,arguments),t._dataAccessProvider.setRTCUserData(n,a,l,r,i,o)},t.prototype.getRTCUserData=function(n,a,l,r){e.CheckParam.getInstance().check(["string","array","boolean","object","global|object|null"],"getRTCUserData",!1,arguments),t._dataAccessProvider.getRTCUserData(n,a,l,r)},t.prototype.removeRTCUserData=function(n,a,l,r,i){e.CheckParam.getInstance().check(["string","array","boolean","object","global|object|null|undefined"],"removeRTCUserData",!1,arguments),t._dataAccessProvider.removeRTCUserData(n,a,l,r,i)},t.prototype.setRTCRoomData=function(n,a,l,r,i,o){e.CheckParam.getInstance().check(["string","string","string","boolean","object","global|object|null|undefined"],"setRTCRoomData",!1,arguments),t._dataAccessProvider.setRTCRoomData(n,a,l,r,i,o)},t.prototype.getRTCRoomData=function(n,a,l,r){e.CheckParam.getInstance().check(["string","array","boolean","object"],"getRTCRoomData",!1,arguments),t._dataAccessProvider.getRTCRoomData(n,a,l,r)},t.prototype.removeRTCRoomData=function(n,a,l,r,i){e.CheckParam.getInstance().check(["string","array","boolean","object","global|object|null|undefined"],"removeRTCRoomData",!1,arguments),t._dataAccessProvider.removeRTCRoomData(n,a,l,r,i)},t.prototype.getNavi=function(){return t._dataAccessProvider.getNavi()},t.prototype.getRTCToken=function(n,a){return e.CheckParam.getInstance().check(["object","object"],"getRTCToken",!1,arguments),t._dataAccessProvider.getRTCToken(n,a)},t.prototype.getAppInfo=function(){return{appKey:t._memoryStore.appKey}},t.RTCListener=function(){},t.currentServer="",t.LogFactory={},t.MessageType={},t.RegisterMessage={},t._memoryStore={listenerList:[],isPullFinished:!1,syncMsgQueue:[]},t.isNotPullMsg=!1,t.userStatusObserver=null,t.sdkver="2.5.0",t.otherDeviceLoginCount=0,t.serverStore={index:0},t.isFirstConnect=!0,t.statusListeners=[],t.userStatusListener=null,t}();e.RongIMClient=t}(RongIMLib||(RongIMLib={})),function(e){!function(e){e[e.AT_MOST_ONCE=0]="AT_MOST_ONCE",e[e.AT_LEAST_ONCE=1]="AT_LEAST_ONCE",e[e.EXACTLY_ONCE=2]="EXACTLY_ONCE",e[e.DEFAULT=3]="DEFAULT"}(e.Qos||(e.Qos={}));var t=e.Qos;!function(e){e[e.CONNECT=1]="CONNECT",e[e.CONNACK=2]="CONNACK",e[e.PUBLISH=3]="PUBLISH",e[e.PUBACK=4]="PUBACK",e[e.QUERY=5]="QUERY",e[e.QUERYACK=6]="QUERYACK",e[e.QUERYCON=7]="QUERYCON",e[e.SUBSCRIBE=8]="SUBSCRIBE",e[e.SUBACK=9]="SUBACK",e[e.UNSUBSCRIBE=10]="UNSUBSCRIBE",e[e.UNSUBACK=11]="UNSUBACK",e[e.PINGREQ=12]="PINGREQ",e[e.PINGRESP=13]="PINGRESP",e[e.DISCONNECT=14]="DISCONNECT"}(e.Type||(e.Type={}));var n=(e.Type,["invtDiz","crDiz","qnUrl","userInf","dizInf","userInf","joinGrp","quitDiz","exitGrp","evctDiz",["","ppMsgP","pdMsgP","pgMsgP","chatMsg","pcMsgP","","pmcMsgN","pmpMsgN","","","","prMsgS"],"pdOpen","rename","uGcmpr","qnTkn","destroyChrm","createChrm","exitChrm","queryChrm","joinChrm","pGrps","addBlack","rmBlack","getBlack","blackStat","addRelation","qryRelation","delRelation","pullMp","schMp","qnTkn","qnUrl","qryVoipK","delMsg","qryCHMsg","getUserStatus","setUserStatus","subUserStatus","cleanHisMsg"]),a=function(){function t(n,a){this.connectionStatus=-1;var r=a.appId,i=encodeURIComponent(a.token),o=a.sdkVer,s=a.apiVer;this.self=a,this.socket=l.getInstance().createServer();var u=this,c=e.RongIMClient._storageProvider,f=c.getItem("servers");f=JSON.parse(f)||[];var g=e.RongIMClient._memoryStore.depend,v=function(t){u.url=e.RongUtil.tplEngine("{host}/websocket?appId={appId}&token={token}&sdkVer={sdkVer}&apiVer={apiVer}",{host:t,appId:r,token:i,sdkVer:o,apiVer:s}),u.socket.connect(u.url,n);var a=c.getItem("rong_current_user");e.Navigation.Endpoint={host:t,userId:a}};({ws:function(){for(var t=new e.Timer({timeout:15e3}),n=[],a=[],l=!1,r=function(){for(var e=0;e<n.length;e++){var t=n[e];clearTimeout(t)}for(e=0;e<a.length;e++)a[e].abort();n.length=0,a.length=0},i=function(i,o){var s=i.url,u=i.time;if(!l){var c=setTimeout(function(){var n=function(){l||(r(),l=!0,t.pause(),o(s))},i=e.MessageUtil.detectCMP({url:s,success:n,fail:function(e){__f__("log",e," at rongyunIM\\rongyun.js:3")}});a.push(i)},u);n.push(c)}},o=function(t){var n=/(http|https):\/\/([^\/]+)/i,a=t.match(n)[2];e.RongIMClient.currentServer=a,v(a)},s="{protocol}{server}/ping?r={random}",c=0;c<f.length;c++){var b=f[c];b&&(b=e.RongUtil.tplEngine(s,{protocol:g.protocol,server:b,random:e.RongUtil.getTimestamp()}),i({url:b,time:1e3*c},o))}t.resume(function(){e.Navigation.clear(),r(),u.socket.fire("StatusChanged",e.ConnectionStatus.NETWORK_UNAVAILABLE)})},comet:function(){var e=f[0];v(e)}})[g.isPolling?"comet":"ws"]();var b=t._ConnectionStatusListener,h="object"==typeof b,p=this;p.socket.on("StatusChanged",function(t){if(!h)throw new Error("setConnectStatusListener:Parameter format is incorrect");var n=t==e.ConnectionStatus.NETWORK_UNAVAILABLE,l=!e.RongIMClient._memoryStore.depend.isPolling;if(e.RongIMClient.isFirstConnect&&n&&l&&(t=e.ConnectionStatus.WEBSOCKET_UNAVAILABLE),n){var r=e.RongIMClient._storageProvider,i=r.getItem("servers");i=JSON.parse(i);var o=e.RongIMClient.currentServer;if(o){var s=e.RongUtil.indexOf(i,o);if(!e.RongUtil.isEqual(s,-1)){var u=i.splice(s,1)[0];i.push(u),r.setItem("servers",JSON.stringify(i))}}}p.connectionStatus=t,setTimeout(function(){b.onChanged(t)}),t==e.ConnectionStatus.DISCONNECTED&&a.clearHeartbeat(),t==e.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT&&e.RongIMClient.otherDeviceLoginCount++,t==e.ConnectionStatus.CONNECTED&&(e.RongIMClient.isFirstConnect=!1),t==e.ConnectionStatus.WEBSOCKET_UNAVAILABLE&&(p.changeConnectType(),e.RongIMClient.isFirstConnect=!1,e.RongIMClient.connect(a.token,e.RongIMClient._memoryStore.callback))}),this.socket.on("message",a.handler.handleMessage),this.socket.on("disconnect",function(e){u.socket.fire("StatusChanged",e||2)})}return t.prototype.changeConnectType=function(){e.RongIMClient._memoryStore.depend.isPolling=!e.RongIMClient._memoryStore.depend.isPolling,new e.FeatureDectector},t.prototype.writeAndFlush=function(e){this.socket.send(e)},t.prototype.reconnect=function(t){e.MessageIdHandler.clearMessageId(),this.socket=this.socket.reconnect(),t&&(this.self.reconnectObj=t)},t.prototype.disconnect=function(e){this.socket.disconnect(e)},t}();e.Channel=a;var l=function(){function t(){this.socket=null,this._events={}}return t.getInstance=function(){return new t},t.prototype.connect=function(t,n){return this.socket&&(t&&(e.RongIMClient._storageProvider.setItem("rongSDK",this.checkTransport()),this.on("connect",n||new Function)),t&&(this.currentURL=t),this.socket.createTransport(t)),this},t.prototype.createServer=function(){var e=this.getTransport(this.checkTransport());if(null===e)throw new Error("the channel was not supported");return e},t.prototype.getTransport=function(n){return n==t.XHR_POLLING?this.socket=new e.PollingTransportation(this):n==t.WEBSOCKET&&(this.socket=new e.SocketTransportation(this)),this},t.prototype.send=function(e){this.socket&&(this.checkTransport()==t.WEBSOCKET?this.socket.send(e):this.socket.send(this._encode(e)))},t.prototype.onMessage=function(e){this.fire("message",e)},t.prototype.disconnect=function(e){return this.socket.disconnect(e),this.fire("disconnect",e),this},t.prototype.reconnect=function(){if(this.currentURL&&e.RongIMClient._storageProvider.getItem("rongSDK"))return this.connect(this.currentURL,null);throw new Error("reconnect:no have URL")},t.prototype.checkTransport=function(){return e.RongIMClient._memoryStore.depend.isPolling&&(e.Transportations._TransportType=t.XHR_POLLING),e.Transportations._TransportType},t.prototype.fire=function(e,t){if(e in this._events)for(var n=0,a=this._events[e].length;n<a;n++)this._events[e][n](t);return this},t.prototype.on=function(t,n){return"function"==typeof n&&t?(t in this._events?-1==e.MessageUtil.indexOf(this._events,n)&&this._events[t].push(n):this._events[t]=[n],this):this},t.prototype.removeEvent=function(e,t){if(e in this._events)for(var n=0,a=this._events[e].length;n<a;n++)this._events[e][n]==t&&this._events[e].splice(n,1);return this},t.prototype._encode=function(t){var n="?messageid="+t.getMessageId()+"&header="+t.getHeaderFlag()+"&sessionid="+e.RongIMClient._storageProvider.getItem("sId"+e.Navigation.Endpoint.userId);return/(PubAckMessage|QueryConMessage)/.test(t._name)||(n+="&topic="+t.getTopic()+"&targetid="+(t.getTargetId()||"")),{url:n,data:"getData"in t?t.getData():""}},t.XHR_POLLING="xhr-polling",t.WEBSOCKET="websocket",t}();e.Socket=l;var r=function(){function n(t,n){this.timeoutMillis=6e3,this.timeout_=0,this.sdkVer="",this.apiVer=Math.floor(1e6*Math.random()),this.channel=null,this.handler=null,this.userId="",this.reconnectObj={},this.heartbeat=0,this.pullMsgHearbeat=0,this.chatroomId="",this.SyncTimeQueue=[],this.cacheMessageIds=[],this.token=t,this.appId=n,this.SyncTimeQueue.state="complete",this.sdkVer=e.RongIMClient.sdkver}return n.prototype.resumeTimer=function(){var t=this;this.timeout_=setTimeout(function(){t.channel.disconnect(e.ConnectionStatus.NETWORK_UNAVAILABLE)},this.timeoutMillis)},n.prototype.pauseTimer=function(){this.timeout_&&(clearTimeout(this.timeout_),this.timeout_=0)},n.prototype.connect=function(t){this.handler=new o(this),this.handler.setConnectCallback(t);var n=this;this.channel=new a(function(){e.Transportations._TransportType==l.WEBSOCKET&&n.keepLive()},this),this.channel.socket.fire("StatusChanged",e.ConnectionStatus.CONNECTING)},n.prototype.checkSocket=function(t){this.channel.writeAndFlush(new e.PingReqMessage);var n=0,a=setInterval(function(){e.RongIMClient._memoryStore.isFirstPingMsg?n>15&&(clearInterval(a),t.onError()):(clearInterval(a),t.onSuccess()),n++},100)},n.prototype.keepLive=function(){this.heartbeat>0&&clearInterval(this.heartbeat);var t=this;t.heartbeat=setInterval(function(){t.resumeTimer(),t.channel.writeAndFlush(new e.PingReqMessage)},3e4),t.pullMsgHearbeat>0&&clearInterval(t.pullMsgHearbeat),t.pullMsgHearbeat=setInterval(function(){t.syncTime(!0,void 0,void 0,!1)},18e4)},n.prototype.clearHeartbeat=function(){clearInterval(this.heartbeat),this.heartbeat=0,this.pauseTimer(),clearInterval(this.pullMsgHearbeat),this.pullMsgHearbeat=0},n.prototype.publishMessage=function(n,a,l,r,i){var o=e.MessageIdHandler.messageIdPlus(this.channel.reconnect);if(o){var s=new e.PublishMessage(n,a,l);s.setMessageId(o),r?(s.setQos(t.AT_LEAST_ONCE),this.handler.putCallback(new e.PublishCallback(r.onSuccess,r.onError),s.getMessageId(),i)):s.setQos(t.AT_MOST_ONCE),this.channel.writeAndFlush(s)}},n.prototype.queryMessage=function(t,a,l,r,i,o){if("userInf"==t&&n.userInfoMapping[l])i.onSuccess(n.userInfoMapping[l]);else{var s=e.MessageIdHandler.messageIdPlus(this.channel.reconnect);if(s){var u=new e.QueryMessage(t,a,l);u.setMessageId(s),u.setQos(r),this.handler.putCallback(new e.QueryCallback(i.onSuccess,i.onError),u.getMessageId(),o),this.channel.writeAndFlush(u)}}},n.prototype.invoke=function(n,a,l){var r,o,s,u,c=this,f=this.SyncTimeQueue.shift();if(void 0!=f){this.SyncTimeQueue.state="pending";var g=e.SyncTimeUtil.get(),v=g.sent;if(2!=f.type)r=g.received,o=new e.RongIMClient.Protobuf.SyncRequestMsg,o.setIspolling(!1),s="pullMsg",u=this.userId,o.setSendBoxSyncTime(v);else if(u=f.chrmId||c.chatroomId,r=e.RongIMClient._memoryStore.lastReadTime.get(u+i._client.userId+"CST")||0,o=new e.RongIMClient.Protobuf.ChrmPullMsg,o.setCount(0),s="chrmPull",!u)throw new Error("syncTime:Received messages of chatroom but was not init");if(f.pulltime<=r)return this.SyncTimeQueue.state="complete",void this.invoke(n,u,l);n&&"setIsPullSend"in o&&o.setIsPullSend(!0),o.setSyncTime(r),this.queryMessage(s,e.MessageUtil.ArrayForm(o.toArrayBuffer()),u,t.AT_LEAST_ONCE,{onSuccess:function(t){var a=e.MessageUtil.int64ToTimestamp(t.syncTime),o=u,f="chrmPull"==s;if(f)o+=i._client.userId+"CST",e.RongIMClient._memoryStore.lastReadTime.set(o,a);else{var g=e.RongIMClient._storageProvider;a>g.getItem(o)&&g.setItem(o,a)}var b=t.list,h=t.finished;f&&(h=!0),void 0===h&&(h=!0),e.RongIMClient._memoryStore.isPullFinished=h;for(var p=e.RongIMClient._memoryStore.connectAckTime,d=0,y=b.length,m=y;d<y;d++){m-=1;var I=b[d],C=e.MessageUtil.int64ToTimestamp(I.dataTime);if(C>(I.direction==e.MessageDirection.SEND?v:r)){var M=C<p;i._client.handler.onReceived(I,void 0,M,m,!1,h)}}c.SyncTimeQueue.state="complete",c.invoke(n,u,l)},onError:function(e){c.SyncTimeQueue.state="complete",c.invoke(n,u,l)}},"DownStreamMessages")}},n.prototype.syncTime=function(e,t,n,a){this.SyncTimeQueue.push({type:e,pulltime:t,chrmId:n}),1==this.SyncTimeQueue.length&&"complete"==this.SyncTimeQueue.state&&this.invoke(!e,n,a)},n.prototype.__init=function(t){this.handler=new o(this),this.handler.setConnectCallback(e.RongIMClient._memoryStore.callback),this.channel=new a(t,this)},n.userInfoMapping={},n}();e.Client=r;var i=function(){function l(){}return l.getInstance=function(){return new l},l.prototype.connect=function(t,n,a){if(e.RongIMClient.Protobuf)return l._client=(new e.Navigation).connect(t,n,a),l._client},l.prototype.setListener=function(e){"object"==typeof e&&("function"==typeof e.onChanged?a._ConnectionStatusListener=e:"function"==typeof e.onReceived&&(a._ReceiveMessageListener=e))},l.prototype.reconnect=function(e){l._client.channel.reconnect(e)},l.prototype.disconnect=function(){l._client.channel.disconnect(2)},l.prototype.queryMsg=function(e,a,r,i,o){"string"!=typeof e&&(e=n[e]),l._client.queryMessage(e,a,r,t.AT_MOST_ONCE,i,o)},l.prototype.pubMsg=function(t,a,r,i,o,s){"number"==typeof s?s==e.MethodType.CUSTOMER_SERVICE?l._client.publishMessage("pcuMsgP",a,r,i,o):s==e.MethodType.RECALL&&l._client.publishMessage("recallMsg",a,r,i,o):l._client.publishMessage(n[10][t],a,r,i,o)},l}();e.Bridge=i;var o=function(){function t(e){if(this.map={},this.connectCallback=null,!a._ReceiveMessageListener)throw new Error("please set onReceiveMessageListener");this._onReceived=a._ReceiveMessageListener.onReceived,this._client=e,this.syncMsgMap=new Object}return t.prototype.putCallback=function(e,t,n){var a={Callback:e,Message:n};a.Callback.resumeTimer(),this.map[t]=a},t.prototype.setConnectCallback=function(t){t&&(this.connectCallback=new e.ConnectAck(t.onSuccess,t.onError,this._client))},t.prototype.onReceived=function(t,n,a,l,r){var o,s,u;if("PublishMessage"!=t._name)o=t,e.RongIMClient._storageProvider.setItem(this._client.userId,e.MessageUtil.int64ToTimestamp(o.dataTime));else{if("s_ntf"==t.getTopic())return o=e.RongIMClient.Protobuf.NotifyMsg.decode(t.getData()),void this._client.syncTime(o.type,e.MessageUtil.int64ToTimestamp(o.time),o.chrmId);if("s_msg"==t.getTopic()){o=e.RongIMClient.Protobuf.DownStreamMessage.decode(t.getData());var c=e.MessageUtil.int64ToTimestamp(o.dataTime);e.RongIMClient._storageProvider.setItem(this._client.userId,c),e.RongIMClient._memoryStore.lastReadTime.get(this._client.userId,c)}else{if("s_stat"==t.getTopic())return o=e.RongIMClient.Protobuf.GetUserStatusOutput.decode(t.getData()),o=e.RongInnerTools.convertUserStatus(o),void e.RongIMClient.userStatusObserver.notify({key:o.userId,entity:o});if(i._client.sdkVer&&"1.0.0"==i._client.sdkVer)return;o=e.RongIMClient.Protobuf.UpStreamMessage.decode(t.getData());var f=t.getTopic(),g=f.substr(0,2);"pp"==g?o.type=1:"pd"==g?o.type=2:"pg"==g?o.type=3:"ch"==g?o.type=4:"pc"==g&&(o.type=5),o.groupId=t.getTargetId(),o.fromUserId=this._client.userId,o.dataTime=Date.parse((new Date).toString())}if(!o)return}var v=e.RongIMClient._memoryStore.isPullFinished;if(v||a){if(s=e.MessageUtil.messageParser(o,this._onReceived,a),12==s.conversationType)return e.RongIMClient.RTCListener(s);if(t.getTopic&&"recallMsg"==t.getTopic()){var b=s.content;s.conversationType=b.conversationType,s.targetId=b.targetId,s.messageId=null}if(n&&(s.messageUId=n.getMessageUId(),s.sentTime=n.getTimestamp(),e.RongIMClient._storageProvider.setItem(this._client.userId,s.sentTime)),null!==s){if(s.conversationType!=e.ConversationType.CHATROOM&&(e.RongIMClient.MessageParams[s.messageType].msgTag.getMessageTag()>=0&&e.SyncTimeUtil.set(s),s.messageDirection==e.MessageDirection.SEND)){var h=e.RongIMClient._storageProvider,p=e.Bridge._client.userId,d=h.getItem("last_sentTime_"+p)||0;if(s.sentTime<=d&&!r)return}if(e.RongIMClient.MessageParams[s.messageType].msgTag.getMessageTag()>0){if(u=e.RongIMClient._dataAccessProvider.getConversation(s.conversationType,s.targetId,{onSuccess:function(){},onError:function(){}}),u||(u=e.RongIMClient.getInstance().createConversation(s.conversationType,s.targetId,"")),s.messageDirection==e.MessageDirection.RECEIVE&&64==(64&o.status)){var y=e.RongIMClient._storageProvider.getItem("mentioneds_"+i._client.userId+"_"+s.conversationType+"_"+s.targetId),m=s.conversationType+"_"+s.targetId,I={};if(s.content&&s.content.mentionedInfo&&(I[m]={uid:s.messageUId,time:s.sentTime,mentionedInfo:s.content.mentionedInfo},e.RongIMClient._storageProvider.setItem("mentioneds_"+i._client.userId+"_"+s.conversationType+"_"+s.targetId,JSON.stringify(I)),y=JSON.stringify(I)),y){I=JSON.parse(y);u.mentionedMsg=I[m]}}if(s.messageDirection==e.MessageDirection.RECEIVE&&s.senderUserId!=i._client.userId&&(u.unreadMessageCount=u.unreadMessageCount+1,e.RongUtil.supportLocalStorage())){var C=e.RongIMClient._storageProvider.getItem("cu"+i._client.userId+u.conversationType+u.targetId),M=Number(C)+1;e.RongIMClient._storageProvider.setItem("cu"+i._client.userId+u.conversationType+s.targetId,M),u.unreadMessageCount=M}u.receivedTime=(new Date).getTime(),u.receivedStatus=s.receivedStatus,u.senderUserId=s.sendUserId,u.notificationStatus=e.ConversationNotificationStatus.DO_NOT_DISTURB,u.latestMessageId=s.messageId,u.latestMessage=s,u.sentTime=s.sentTime,e.RongIMClient._dataAccessProvider.addConversation(u,{onSuccess:function(e){},onError:function(){}})}if(s.conversationType!=e.ConversationType.CUSTOMER_SERVICE||"ChangeModeResponseMessage"!=s.messageType&&"SuspendMessage"!=s.messageType&&"HandShakeResponseMessage"!=s.messageType&&"TerminateMessage"!=s.messageType&&"CustomerStatusUpdateMessage"!=s.messageType&&"TextMessage"!=s.messageType&&"InformationNotificationMessage"!=s.messageType||e.RongIMClient._memoryStore.custStore.isInit){if(s.conversationType==e.ConversationType.CUSTOMER_SERVICE&&"HandShakeResponseMessage"!=s.messageType){if(!e.RongIMClient._memoryStore.custStore[s.targetId])return;if("TerminateMessage"==s.messageType&&e.RongIMClient._memoryStore.custStore[s.targetId].sid!=s.content.sid)return}if(s.messageType===e.RongIMClient.MessageType.HandShakeResponseMessage){var T=s.content.data;e.RongIMClient._memoryStore.custStore[s.targetId]=T,T.serviceType!=e.CustomerType.ONLY_HUMAN&&T.serviceType!=e.CustomerType.HUMAN_FIRST||"1"==T.notAutoCha&&e.RongIMClient.getInstance().switchToHumanMode(s.targetId,{onSuccess:function(){},onError:function(){}})}var E=new Date,_=E.getMonth()+1,R=E.getFullYear()+"/"+(1==_.toString().length?"0"+_:_)+"/"+E.getDate(),S=new Date(R).getTime()-s.sentTime<0;if(e.RongUtil.supportLocalStorage()&&s.messageType===e.RongIMClient.MessageType.ReadReceiptRequestMessage&&S&&s.messageDirection==e.MessageDirection.SEND){var A=i._client.userId+s.content.messageUId+"SENT";e.RongIMClient._storageProvider.setItem(A,JSON.stringify({count:0,dealtime:s.sentTime,userIds:{}}))}else if(e.RongUtil.supportLocalStorage()&&s.messageType===e.RongIMClient.MessageType.ReadReceiptRequestMessage&&S){var w=i._client.userId+s.conversationType+s.targetId+"RECEIVED",O=JSON.parse(e.RongIMClient._storageProvider.getItem(w));if(O)if(s.senderUserId in O){if(!O[s.senderUserId].uIds||!O[s.senderUserId].uIds||-1!=O[s.senderUserId].uIds.indexOf(s.content.messageUId))return;O[s.senderUserId].uIds.push(s.content.messageUId),O[s.senderUserId].dealtime=s.sentTime,O[s.senderUserId].isResponse=!1,e.RongIMClient._storageProvider.setItem(w,JSON.stringify(O))}else{var N={uIds:[s.content.messageUId],dealtime:s.sentTime,isResponse:!1};O[s.senderUserId]=N,e.RongIMClient._storageProvider.setItem(w,JSON.stringify(O))}else{var P={};P[s.senderUserId]={uIds:[s.content.messageUId],dealtime:s.sentTime,isResponse:!1},e.RongIMClient._storageProvider.setItem(w,JSON.stringify(P))}}if(e.RongUtil.supportLocalStorage()&&s.messageType===e.RongIMClient.MessageType.ReadReceiptResponseMessage&&S){var U,k=s.content,D=k.receiptMessageDic[i._client.userId];A="";if(s.receiptResponse||(s.receiptResponse={}),D){for(var j=[],L=0,B=D.length;L<B;L++)A=i._client.userId+D[L]+"SENT",!(U=JSON.parse(e.RongIMClient._storageProvider.getItem(A)))||s.senderUserId in U.userIds||(j.push(D[L]),U.count+=1,U.userIds[s.senderUserId]=s.sentTime,s.receiptResponse[D[L]]=U.count,e.RongIMClient._storageProvider.setItem(A,JSON.stringify(U)));k.receiptMessageDic[i._client.userId]=j,s.content=k}}var x=this;if(e.RongIMClient._voipProvider&&["AcceptMessage","RingingMessage","HungupMessage","InviteMessage","MediaModifyMessage","MemberModifyMessage"].indexOf(s.messageType)>-1)setTimeout(function(){e.RongIMClient._voipProvider.onReceived(s)});else{var z=l||0,V=!v;setTimeout(function(){x._onReceived(s,z,V)})}}}}},t.prototype.handleMessage=function(t){if(t)switch(t._name){case"ConnAckMessage":i._client.handler.connectCallback.process(t.getStatus(),t.getUserId(),t.getTimestamp());break;case"PublishMessage":t.getSyncMsg()||0==t.getQos()||i._client.channel.writeAndFlush(new e.PubAckMessage(t.getMessageId())),t.getSyncMsg()&&!e.RongIMClient._memoryStore.depend.isPolling?i._client.handler.syncMsgMap[t.getMessageId()]=t:i._client.handler.onReceived(t);break;case"QueryAckMessage":0!=t.getQos()&&i._client.channel.writeAndFlush(new e.QueryConMessage(t.getMessageId()));var n=i._client.handler.map[t.getMessageId()];n&&(n.Callback.process(t.getStatus(),t.getData(),t.getDate(),n.Message),delete i._client.handler.map[t.getMessageId()]);break;case"PubAckMessage":var a=i._client.handler.map[t.getMessageId()];if(a)a.Callback.process(t.getStatus()||0,t.getMessageUId(),t.getTimestamp(),a.Message,t.getMessageId()),delete i._client.handler.map[t.getMessageId()];else{var l=e.Bridge._client.userId;e.RongIMClient._storageProvider.setItem("last_sentTime_"+l,t.timestamp),i._client.handler.onReceived(i._client.handler.syncMsgMap[t.messageId],t,null,null,!0),delete i._client.handler.syncMsgMap[t.getMessageId()]}break;case"PingRespMessage":e.RongIMClient._memoryStore.isFirstPingMsg?e.RongIMClient._memoryStore.isFirstPingMsg=!1:i._client.pauseTimer();break;case"DisconnectMessage":i._client.channel.disconnect(t.getStatus())}},t}();e.MessageHandler=o}(RongIMLib||(RongIMLib={}));var __extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},RongIMLib,RongIMLib,RongIMLib,RongIMLib,RongIMLib,RongIMLib;!function(e){var t=function(){function t(e){this.timeout=null,this.onError=null,e&&"number"==typeof e?this.timeoutMillis=e:(this.timeoutMillis=3e4,this.onError=e)}return t.prototype.resumeTimer=function(){var e=this;this.timeoutMillis>0&&!this.timeout&&(this.timeout=setTimeout(function(){e.readTimeOut(!0)},this.timeoutMillis))},t.prototype.pauseTimer=function(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)},t.prototype.readTimeOut=function(t){t&&this.onError?this.onError(e.ErrorCode.TIMEOUT):this.pauseTimer()},t}();e.MessageCallback=t;var n=function(){function t(){this.publicServiceList=[]}return t.getInstance=function(){return new t},t.prototype.pottingProfile=function(t){var n;this.profile=new e.PublicServiceProfile,n=JSON.parse(t.extra),this.profile.isGlobal=n.isGlobal,this.profile.introduction=n.introduction,this.profile.menu=n.menu,this.profile.hasFollowed=n.follow,this.profile.publicServiceId=t.mpid,this.profile.name=t.name,this.profile.portraitUri=t.portraitUrl,this.profile.conversationType="mc"==t.type?e.ConversationType.APP_PUBLIC_SERVICE:e.ConversationType.PUBLIC_SERVICE,this.publicServiceList.push(this.profile)},t.prototype.mapping=function(t,n){switch(n){case"GetUserInfoOutput":return new e.UserInfo(t.userId,t.userName,t.userPortrait);case"GetQNupTokenOutput":return{deadline:e.MessageUtil.int64ToTimestamp(t.deadline),token:t.token};case"GetQNdownloadUrlOutput":return{downloadUrl:t.downloadUrl};case"CreateDiscussionOutput":return t.id;case"ChannelInfoOutput":var a=new e.Discussion;return a.creatorId=t.adminUserId,a.id=t.channelId,a.memberIdList=t.firstTenUserIds,a.name=t.channelName,a.isOpen=t.openStatus,a;case"GroupHashOutput":return t.result;case"QueryBlackListOutput":return t.userIds;case"SearchMpOutput":case"PullMpOutput":if(t.info){var l=this;Array.forEach(t.info,function(e){setTimeout(function(){l.pottingProfile(e)},100)})}return this.publicServiceList;default:return t}},t}();e.CallbackMapping=n;var a=function(n){function a(e,t){n.call(this,t),this._cb=e,this._timeout=t}return __extends(a,n),a.prototype.process=function(t,n,a,l,r){if(this.readTimeOut(),0==t){if(l&&(l.setSentStatus=t),e.RongIMClient._memoryStore.isPullFinished){var i=e.Bridge._client.userId;e.RongIMClient._storageProvider.setItem("last_sentTime_"+i,a),e.SyncTimeUtil.set({messageDirection:e.MessageDirection.SEND,sentTime:a})}this._cb({messageUId:n,timestamp:a,messageId:r})}else this._timeout(t,{messageUId:n,sentTime:a})},a.prototype.readTimeOut=function(e){t.prototype.readTimeOut.call(this,e)},a}(t);e.PublishCallback=a;var l=function(a){function l(e,t){a.call(this,t),this._cb=e,this._timeout=t}return __extends(l,a),l.prototype.process=function(t,a,l,r){if(this.readTimeOut(),r&&a&&0==t){try{a=n.getInstance().mapping(e.RongIMClient.Protobuf[r].decode(a),r)}catch(g){return void this._timeout(e.ErrorCode.UNKNOWN)}"GetUserInfoOutput"==r&&(e.Client.userInfoMapping[a.userId]=a),this._cb(a)}else t>0?this._timeout(t):this._cb(t)},l.prototype.readTimeOut=function(e){t.prototype.readTimeOut.call(this,e)},l}(t);e.QueryCallback=l;var r=function(n){function a(e,t,a){n.call(this,t),this._client=a,this._cb=e,this._timeout=t}return __extends(a,n),a.prototype.process=function(t,n,a){if(this.readTimeOut(),0==t){this._client.userId=n;var l=this;if(!e.RongIMClient._memoryStore.depend.isPolling&&e.RongIMClient._memoryStore.isFirstPingMsg?e.Bridge._client.checkSocket({onSuccess:function(){e.RongIMClient.isNotPullMsg||l._client.syncTime(void 0,void 0,void 0,!0)},onError:function(){e.RongIMClient._memoryStore.isFirstPingMsg=!1,e.RongIMClient.getInstance().disconnect(),e.RongIMClient.connect(e.RongIMClient._memoryStore.token,e.RongIMClient._memoryStore.callback)}}):e.RongIMClient.isNotPullMsg||l._client.syncTime(void 0,void 0,void 0,!0),e.Bridge._client.channel.socket.fire("StatusChanged",0),this._client.reconnectObj.onSuccess)this._client.reconnectObj.onSuccess(n),delete this._client.reconnectObj.onSuccess;else{var r=this;setTimeout(function(){r._cb(n)},500)}e.RongIMClient._memoryStore.connectAckTime=a,(new Date).getTime()-a?e.RongIMClient._memoryStore.deltaTime=(new Date).getTime()-a:e.RongIMClient._memoryStore.deltaTime=0}else if(6==t){e.RongIMClient.getInstance().disconnect();r=this;var i=r._client,o=i.appId,s=i.token;(new e.Navigation).requestNavi(s,o,function(){i.clearHeartbeat();var t=new e.Client(s,o);e.Bridge._client=t,t.__init(function(){"websocket"==e.Transportations._TransportType&&t.keepLive()})},r._timeout,!1)}else e.Bridge._client.channel.socket.socket._status=t,this._client.reconnectObj.onError?(this._client.reconnectObj.onError(t),delete this._client.reconnectObj.onError):this._timeout(t)},a.prototype.readTimeOut=function(e){t.prototype.readTimeOut.call(this,e)},a}(t);e.ConnectAck=r}(RongIMLib||(RongIMLib={})),function(e){var t=function(){function t(){}return t.clear=function(){var t=e.RongIMClient._storageProvider;t.removeItem("rc_uid"),t.removeItem("serverIndex"),t.removeItem("rongSDK")},t.prototype.getNaviSuccess=function(t){var n=e.RongIMClient._storageProvider;n.setItem("fullnavi",JSON.stringify(t));var a=t.server;a&&(a+=",");var l=t.backupServer||"",r="{server}{backupServer}",i=e.RongUtil.tplEngine(r,{server:a,backupServer:l});i=i.split(","),n.setItem("servers",JSON.stringify(i));var o=e.RongIMClient._memoryStore.token,s=e.InnerUtil.getUId(o);n.setItem("rc_uid",s);var u=t.userId;if(n.setItem("current_user",u),t.voipCallInfo){var c=JSON.parse(t.voipCallInfo);e.RongIMClient._memoryStore.voipStategy=c.strategy,n.setItem("voipStrategy",c.strategy)}var f=t.openMp;n.setItem("openMp"+s,f),e.RongIMClient._memoryStore.depend.openMp=f},t.prototype.connect=function(t,n,a){var l=e.RongIMClient._storageProvider.getItem("appId");l&&l!=t&&(e.RongIMClient._storageProvider.clearItem(),e.RongIMClient._storageProvider.setItem("appId",t)),l||e.RongIMClient._storageProvider.setItem("appId",t);var r=new e.Client(n,t);return this.requestNavi(n,t,function(){r.connect(a)},a.onError,!0),r},t.prototype.requestNavi=function(n,a,l,r,i){if(i){var o=md5(n).slice(8,16),s=e.RongIMClient._storageProvider,u=s.getItem("rongSDK"),c=e.Transportations._TransportType==u,f=s.getItem("rc_uid"),g=f==o,v=s.getItem("servers"),b="string"==typeof v;if(g&&c&&b){e.RongIMClient._memoryStore.voipStategy=s.getItem("voipStrategy");var h=s.getItem("openMp"+o);return e.RongIMClient._memoryStore.depend.openMp=h,void l()}}t.clear();var p=e.Channel._ConnectionStatusListener,d=e.RongIMClient._memoryStore.depend,y=d.navigaters,m=d.naviTimeout,I=d.maxNaviRetry,C=this,M=new e.Timer({timeout:m}),T=1,E=function(){return T>=I},_=new e.IndexTools({items:y,onwheel:function(){T+=1}}),R=function t(){if(E())r(e.ConnectionStatus.RESPONSE_NAVI_ERROR);else{var i=_.get(),o=y[i];_.add();var s=function(t){M.pause(),p.onChanged(e.ConnectionStatus.RESPONSE_NAVI);var n=t.code;e.RongUtil.isEqual(n,200)&&(C.getNaviSuccess(t),l()),e.RongUtil.isEqual(n,401)&&r(e.ConnectionState.TOKEN_INCORRECT),e.RongUtil.isEqual(n,403)&&p.onChanged(e.ConnectionStatus.APPKEY_IS_FAKE)},u=function(n){e.RongUtil.isEqual(n,0)||(M.pause(),p.onChanged(e.ConnectionStatus.RESPONSE_NAVI_ERROR),t())};p.onChanged(e.ConnectionStatus.REQUEST_NAVI);var c=C.request(o,a,n,s,u);M.resume(function(){p.onChanged(e.ConnectionStatus.RESPONSE_NAVI_TIMEOUT),c.abort(),t()})}};R()},t.prototype.request=function(t,n,a,l,r){var i=e.RongIMClient._memoryStore.depend,o=i.isPolling?"cometnavi":"navi";a=encodeURIComponent(a);var s=e.RongIMClient.sdkver,u=e.RongUtil.getTimestamp(),c="{navi}/{path}.js?appId={appId}&token={token}&callBack=null&v={sdkver}&r={random}",f=e.RongUtil.tplEngine(c,{navi:t,path:o,appId:n,token:a,sdkver:s,random:u});return e.RongUtil.request({url:f,success:function(e){e=e.replace("null(","").replace(");","");var t=e.lastIndexOf(")");t==e.length-1&&(e=e.substr(0,t)),l(JSON.parse(e))},error:function(e,t){401==e||403==e?l(JSON.parse(t)):r(e)}})},t.Endpoint=new Object,t}();e.Navigation=t}(RongIMLib||(RongIMLib={})),function(e){var t=function(){function t(t){this._name="BaseMessage",this.lengthSize=0,t instanceof e.Header?this._header=t:this._header=new e.Header(t,!1,e.Qos.AT_MOST_ONCE,!1)}return t.prototype.read=function(e,t){this.readMessage(e,t)},t.prototype.write=function(t){var n=new e.BinaryHelper,a=n.convertStream(t);return this._headerCode=this.getHeaderFlag(),a.write(this._headerCode),this.writeMessage(a),a},t.prototype.getHeaderFlag=function(){return this._header.encode()},t.prototype.getLengthSize=function(){return this.lengthSize},t.prototype.toBytes=function(){return this.write([]).getBytesArray()},t.prototype.isRetained=function(){return this._header.retain},t.prototype.setRetained=function(e){this._header.retain=e},t.prototype.setQos=function(t){this._header.qos="[object Object]"==Object.prototype.toString.call(t)?t:e.Qos[t]},t.prototype.setDup=function(e){this._header.dup=e},t.prototype.isDup=function(){return this._header.dup},t.prototype.getType=function(){return this._header.type},t.prototype.getQos=function(){return this._header.qos},t.prototype.messageLength=function(){return 0},t.prototype.writeMessage=function(e){},t.prototype.readMessage=function(e,t){},t.prototype.init=function(e){var t,n,a=this;for(n in e)e.hasOwnProperty(n)&&(t=n.replace(/^\w/,function(e){var t=e.charCodeAt(0);return"set"+(t>=97?String.fromCharCode(-33&t):e)}))in a&&("status"==n?a[t](disconnectStatus[e[n]]?disconnectStatus[e[n]]:e[n]):a[t](e[n]))},t}();e.BaseMessage=t;var n=function(t){function n(n){switch(t.call(this,0==arguments.length||3==arguments.length?e.Type.CONNECT:arguments[0]),this._name="ConnectMessage",this.CONNECT_HEADER_SIZE=12,this.protocolId="RCloud",this.binaryHelper=new e.BinaryHelper,this.protocolVersion=3,arguments.length){case 0:case 1:case 3:if(!arguments[0]||arguments[0].length>64)throw new Error("ConnectMessage:Client Id cannot be null and must be at most 64 characters long: "+arguments[0]);this.clientId=arguments[0],this.cleanSession=arguments[1],this.keepAlive=arguments[2]}}return __extends(n,t),n.prototype.messageLength=function(){var e=this.binaryHelper.toMQttString(this.clientId).length;return e+=this.binaryHelper.toMQttString(this.willTopic).length,e+=this.binaryHelper.toMQttString(this.will).length,e+=this.binaryHelper.toMQttString(this.appId).length,(e+=this.binaryHelper.toMQttString(this.token).length)+this.CONNECT_HEADER_SIZE},n.prototype.readMessage=function(e){this.protocolId=e.readUTF(),this.protocolVersion=e.readByte();var t=e.readByte();if(this.hasAppId=(128&t)>0,this.hasToken=(64&t)>0,this.retainWill=(32&t)>0,this.willQos=t>>3&3,this.hasWill=(4&t)>0,this.cleanSession=(32&t)>0,this.keepAlive=256*e.read()+e.read(),this.clientId=e.readUTF(),this.hasWill&&(this.willTopic=e.readUTF(),this.will=e.readUTF()),this.hasAppId)try{this.appId=e.readUTF()}catch(n){throw new Error(n)}if(this.hasToken)try{this.token=e.readUTF()}catch(n){throw new Error(n)}return e},n.prototype.writeMessage=function(e){var t=this.binaryHelper.convertStream(e);t.writeUTF(this.protocolId),t.write(this.protocolVersion);var n=this.cleanSession?2:0;return n|=this.hasWill?4:0,n|=this.willQos?this.willQos>>3:0,n|=this.retainWill?32:0,n|=this.hasToken?64:0,n|=this.hasAppId?128:0,t.write(n),t.writeChar(this.keepAlive),t.writeUTF(this.clientId),this.hasWill&&(t.writeUTF(this.willTopic),t.writeUTF(this.will)),this.hasAppId&&t.writeUTF(this.appId),this.hasToken&&t.writeUTF(this.token),t},n}(t);e.ConnectMessage=n;var a=function(t){function n(n){t.call(this,0==arguments.length?e.Type.CONNACK:1==arguments.length?arguments[0]instanceof e.Header?arguments[0]:e.Type.CONNACK:null),this._name="ConnAckMessage",this.MESSAGE_LENGTH=2,this.binaryHelper=new e.BinaryHelper;var a=this;switch(arguments.length){case 0:case 1:if(!(arguments[0]instanceof e.Header)&&arguments[0]in e.ConnectionState){if(null==arguments[0])throw new Error("ConnAckMessage:The status of ConnAskMessage can't be null");a.setStatus(arguments[0])}}}return __extends(n,t),n.prototype.messageLength=function(){var e=this.MESSAGE_LENGTH;return this.userId&&(e+=this.binaryHelper.toMQttString(this.userId).length),e},n.prototype.readMessage=function(e,t){e.read();var n=+e.read();if(!(n>=0&&n<=12))throw new Error("Unsupported CONNACK code:"+n);if(this.setStatus(n),t>this.MESSAGE_LENGTH){this.setUserId(e.readUTF());var a=(e.readUTF(),e.readLong());this.setTimestamp(a)}},n.prototype.writeMessage=function(e){var t=this.binaryHelper.convertStream(e);switch(t.write(128),+status){case 0:case 1:case 2:case 5:case 6:t.write(+status);break;case 3:case 4:t.write(3);break;default:throw new Error("Unsupported CONNACK code:"+status)}return this.userId&&t.writeUTF(this.userId),t},n.prototype.setStatus=function(e){this.status=e},n.prototype.setUserId=function(e){this.userId=e},n.prototype.getStatus=function(){return this.status},n.prototype.getUserId=function(){return this.userId},n.prototype.setTimestamp=function(e){this.timestrap=e},n.prototype.getTimestamp=function(){return this.timestrap},n}(t);e.ConnAckMessage=a;var l=function(t){function n(n){t.call(this,n instanceof e.Header?n:e.Type.DISCONNECT),this._name="DisconnectMessage",this.MESSAGE_LENGTH=2,this.binaryHelper=new e.BinaryHelper,n instanceof e.Header||n in e.ConnectionStatus&&(this.status=n)}return __extends(n,t),n.prototype.messageLength=function(){return this.MESSAGE_LENGTH},n.prototype.readMessage=function(e){e.read();var t=+e.read();if(!(t>=0&&t<=5))throw new Error("Unsupported CONNACK code:"+t);this.setStatus(disconnectStatus[t]?disconnectStatus[t]:t)},n.prototype.writeMessage=function(e){var t=this.binaryHelper.convertStream(e);if(t.write(0),!(+status>=1&&+status<=3))throw new Error("Unsupported CONNACK code:"+status);t.write(+status-1)},n.prototype.setStatus=function(e){this.status=e},n.prototype.getStatus=function(){return this.status},n}(t);e.DisconnectMessage=l;var r=function(t){function n(n){t.call(this,n&&n instanceof e.Header?n:e.Type.PINGREQ),this._name="PingReqMessage"}return __extends(n,t),n}(t);e.PingReqMessage=r;var i=function(t){function n(n){t.call(this,n&&n instanceof e.Header?n:e.Type.PINGRESP),this._name="PingRespMessage"}return __extends(n,t),n}(t);e.PingRespMessage=i;var o=function(t){function n(n){t.call(this,n),this._name="RetryableMessage",this.binaryHelper=new e.BinaryHelper}return __extends(n,t),n.prototype.messageLength=function(){return 2},n.prototype.writeMessage=function(e){var t=this.binaryHelper.convertStream(e),n=this.getMessageId(),a=255&n,l=(65280&n)>>8;return t.write(l),t.write(a),t},n.prototype.readMessage=function(e,t){var n=256*e.read()+e.read();this.setMessageId(parseInt(n,10))},n.prototype.setMessageId=function(e){this.messageId=e},n.prototype.getMessageId=function(){return this.messageId},n}(t);e.RetryableMessage=o;var s=function(t){function n(n){t.call(this,n instanceof e.Header?n:e.Type.PUBACK),this.msgLen=2,this.date=0,this.millisecond=0,this.timestamp=0,this.binaryHelper=new e.BinaryHelper,this._name="PubAckMessage",n instanceof e.Header||t.prototype.setMessageId.call(this,n)}return __extends(n,t),n.prototype.messageLength=function(){return this.msgLen},n.prototype.writeMessage=function(e){var t=this.binaryHelper.convertStream(e);o.prototype.writeMessage.call(this,t)},n.prototype.readMessage=function(e,t){o.prototype.readMessage.call(this,e),this.date=e.readInt(),this.status=256*e.read()+e.read(),this.millisecond=256*e.read()+e.read(),this.timestamp=1e3*this.date+this.millisecond,this.messageUId=e.readUTF()},n.prototype.setStatus=function(e){this.status=e},n.prototype.setTimestamp=function(e){this.timestamp=e},n.prototype.setMessageUId=function(e){this.messageUId=e},n.prototype.getStatus=function(){return this.status},n.prototype.getDate=function(){return this.date},n.prototype.getTimestamp=function(){return this.timestamp},n.prototype.getMessageUId=function(){return this.messageUId},n}(o);e.PubAckMessage=s;var u=function(t){function n(n,a,l){t.call(this,1==arguments.length&&n instanceof e.Header?n:3==arguments.length?e.Type.PUBLISH:0),this._name="PublishMessage",this.binaryHelper=new e.BinaryHelper,this.syncMsg=!1,3==arguments.length&&(this.topic=n,this.targetId=l,this.data="string"==typeof a?this.binaryHelper.toMQttString(a):a)}return __extends(n,t),n.prototype.messageLength=function(){var e=10;return e+=this.binaryHelper.toMQttString(this.topic).length,e+=this.binaryHelper.toMQttString(this.targetId).length,e+this.data.length},n.prototype.writeMessage=function(e){var t=this.binaryHelper.convertStream(e);t.writeUTF(this.topic),t.writeUTF(this.targetId),o.prototype.writeMessage.apply(this,arguments),t.write(this.data)},n.prototype.readMessage=function(e,t){var n=6;this.date=e.readInt(),this.topic=e.readUTF(),n+=this.binaryHelper.toMQttString(this.topic).length,this.targetId=e.readUTF(),n+=this.binaryHelper.toMQttString(this.targetId).length,o.prototype.readMessage.apply(this,arguments),this.data=new Array(t-n),this.data=e.read(this.data)},n.prototype.setTopic=function(e){this.topic=e},n.prototype.setData=function(e){this.data=e},n.prototype.setTargetId=function(e){this.targetId=e},n.prototype.setDate=function(e){this.date=e},n.prototype.setSyncMsg=function(e){this.syncMsg=e},n.prototype.getSyncMsg=function(){return this.syncMsg},n.prototype.getTopic=function(){return this.topic},n.prototype.getData=function(){return this.data},n.prototype.getTargetId=function(){return this.targetId},n.prototype.getDate=function(){return this.date},n}(o);e.PublishMessage=u;var c=function(t){function n(n,a,l){t.call(this,n instanceof e.Header?n:3==arguments.length?e.Type.QUERY:null),this.binaryHelper=new e.BinaryHelper,this._name="QueryMessage",3==arguments.length&&(this.data="string"==typeof a?this.binaryHelper.toMQttString(a):a,this.topic=n,this.targetId=l)}return __extends(n,t),n.prototype.messageLength=function(){var e=0;return e+=this.binaryHelper.toMQttString(this.topic).length,e+=this.binaryHelper.toMQttString(this.targetId).length,e+=2,e+this.data.length},n.prototype.writeMessage=function(e){var t=this.binaryHelper.convertStream(e);t.writeUTF(this.topic),t.writeUTF(this.targetId),o.prototype.writeMessage.call(this,t),t.write(this.data)},n.prototype.readMessage=function(e,t){var n=0;this.topic=e.readUTF(),this.targetId=e.readUTF(),n+=this.binaryHelper.toMQttString(this.topic).length,n+=this.binaryHelper.toMQttString(this.targetId).length,this.readMessage.apply(this,arguments),n+=2,this.data=new Array(t-n),e.read(this.data)},n.prototype.setTopic=function(e){this.topic=e},n.prototype.setData=function(e){this.data=e},n.prototype.setTargetId=function(e){this.targetId=e},n.prototype.getTopic=function(){return this.topic},n.prototype.getData=function(){return this.data},n.prototype.getTargetId=function(){return this.targetId},n}(o);e.QueryMessage=c;var f=function(t){function n(n){t.call(this,n instanceof e.Header?n:e.Type.QUERYCON),this._name="QueryConMessage",n instanceof e.Header||t.prototype.setMessageId.call(this,n)}return __extends(n,t),n}(o);e.QueryConMessage=f;var g=function(t){function n(n){t.call(this,n),this._name="QueryAckMessage",this.binaryHelper=new e.BinaryHelper}return __extends(n,t),n.prototype.readMessage=function(e,t){o.prototype.readMessage.call(this,e),this.date=e.readInt(),this.setStatus(256*e.read()+e.read()),t>0&&(this.data=new Array(t-8),this.data=e.read(this.data))},n.prototype.getData=function(){return this.data},n.prototype.getStatus=function(){return this.status},n.prototype.getDate=function(){return this.date},n.prototype.setDate=function(e){this.date=e},n.prototype.setStatus=function(e){this.status=e},n.prototype.setData=function(e){this.data=e},n}(o);e.QueryAckMessage=g}(RongIMLib||(RongIMLib={})),function(e){var t=function(){function t(t){var n=new e.BinaryHelper;this.out=n.convertStream(t)}return t.prototype.writeMessage=function(t){t instanceof e.BaseMessage&&t.write(this.out)},t}();e.MessageOutputStream=t;var n=function(){function t(t,n){if(n)this.flags=t.headerCode;else{var a=(new e.BinaryHelper).convertStream(t);this.flags=a.readByte(),this._in=a}this.header=new e.Header(this.flags),this.isPolling=n,this.In=t}return t.prototype.readMessage=function(){switch(this.header.getType()){case 1:this.msg=new e.ConnectMessage(this.header);break;case 2:this.msg=new e.ConnAckMessage(this.header);break;case 3:this.msg=new e.PublishMessage(this.header),this.msg.setSyncMsg(this.header.getSyncMsg());break;case 4:this.msg=new e.PubAckMessage(this.header);break;case 5:this.msg=new e.QueryMessage(this.header);break;case 6:this.msg=new e.QueryAckMessage(this.header);break;case 7:this.msg=new e.QueryConMessage(this.header);break;case 9:case 11:case 13:this.msg=new e.PingRespMessage(this.header);break;case 8:case 10:case 12:this.msg=new e.PingReqMessage(this.header);break;case 14:this.msg=new e.DisconnectMessage(this.header);break;default:throw new Error("No support for deserializing "+this.header.getType()+" messages")}return this.isPolling?this.msg.init(this.In):this.msg.read(this._in,this.In.length-1),this.msg},t}();e.MessageInputStream=n;var a=function(){function t(t,n,a,l){this.retain=!1,this.qos=e.Qos.AT_LEAST_ONCE,this.dup=!1,this.syncMsg=!1,t&&+t==t&&1==arguments.length?(this.retain=(1&t)>0,this.qos=(6&t)>>1,this.dup=(8&t)>0,this.type=t>>4&15,this.syncMsg=8==(8&t)):(this.type=t,this.retain=n,this.qos=a,this.dup=l)}return t.prototype.getSyncMsg=function(){return this.syncMsg},t.prototype.getType=function(){return this.type},t.prototype.encode=function(){var t=this;switch(this.qos){case e.Qos[0]:t.qos=e.Qos.AT_MOST_ONCE;break;case e.Qos[1]:t.qos=e.Qos.AT_LEAST_ONCE;break;case e.Qos[2]:t.qos=e.Qos.EXACTLY_ONCE;break;case e.Qos[3]:t.qos=e.Qos.DEFAULT}var n=this.type<<4;return n|=this.retain?1:0,n|=this.qos<<1,n|(this.dup?8:0)},t.prototype.toString=function(){return"Header [type="+this.type+",retain="+this.retain+",qos="+this.qos+",dup="+this.dup+"]"},t}();e.Header=a;var l=function(){function e(){}return e.prototype.writeUTF=function(e,t){for(var n=[],a=0,l=0,r=e.length;l<r;l++){var i=e.charCodeAt(l);i>=0&&i<=127?(a+=1,n.push(i)):i>=128&&i<=2047?(a+=2,n.push(192|31&i>>6),n.push(128|63&i)):i>=2048&&i<=65535&&(a+=3,n.push(224|15&i>>12),n.push(128|63&i>>6),n.push(128|63&i))}for(l=0,r=n.length;l<r;l++)n[l]>255&&(n[l]&=255);return t?n:a<=255?[0,a].concat(n):[a>>8,255&a].concat(n)},e.prototype.readUTF=function(e){if("[object String]"==Object.prototype.toString.call(e))return e;for(var t="",n=e,a=0,l=n.length;a<l;a++){n[a]<0&&(n[a]+=256);var r=n[a].toString(2),i=r.match(/^1+?(?=0)/);if(i&&8==r.length){for(var o=i[0].length,s="",u=0;u<o;u++)s+=n[u+a].toString(2).slice(2);t+=String.fromCharCode(parseInt(s,2)),a+=o-1}else t+=String.fromCharCode(n[a])}return t},e.prototype.convertStream=function(e){return e instanceof r?e:new r(e)},e.prototype.toMQttString=function(e){return this.writeUTF(e)},e}();e.BinaryHelper=l;var r=function(){function e(e){this.position=0,this.writen=0,this.poolLen=0,this.binaryHelper=new l,this.pool=e,this.poolLen=e.length}return e.prototype.check=function(){return this.position>=this.pool.length},e.prototype.readInt=function(){if(this.check())return-1;for(var e="",t=0;t<4;t++){var n=this.pool[this.position++].toString(16);1==n.length&&(n="0"+n),e+=n.toString(16)}return parseInt(e,16)},e.prototype.readLong=function(){if(this.check())return-1;for(var e="",t=0;t<8;t++){var n=this.pool[this.position++].toString(16);1==n.length&&(n="0"+n),e+=n}return parseInt(e,16)},e.prototype.readTimestamp=function(){if(this.check())return-1;for(var e="",t=0;t<8;t++)e+=this.pool[this.position++].toString(16);return e=e.substring(2,8),parseInt(e,16)},e.prototype.readUTF=function(){if(this.check())return-1;var e=this.readByte()<<8|this.readByte();return this.binaryHelper.readUTF(this.pool.subarray(this.position,this.position+=e))},e.prototype.readByte=function(){if(this.check())return-1;var e=this.pool[this.position++];return e>255&&(e&=255),e},e.prototype.read=function(e){return e?this.pool.subarray(this.position,this.poolLen):this.readByte()},e.prototype.write=function(e){var t=e;return"[object array]"==Object.prototype.toString.call(t).toLowerCase()?[].push.apply(this.pool,t):+t==t&&(t>255&&(t&=255),this.pool.push(t),this.writen++),t},e.prototype.writeChar=function(e){if(+e!=e)throw new Error("writeChar:arguments type is error");this.write(e>>8&255),this.write(255&e),this.writen+=2},e.prototype.writeUTF=function(e){var t=this.binaryHelper.writeUTF(e);[].push.apply(this.pool,t),this.writen+=t.length},e.prototype.toComplements=function(){for(var e=this.pool,t=0;t<this.poolLen;t++)e[t]>128&&(e[t]-=256);return e},e.prototype.getBytesArray=function(e){return e?this.toComplements():this.pool},e}();e.RongIMStream=r}(RongIMLib||(RongIMLib={})),function(e){var t=function(){function t(e){return this.connected=!1,this.isClose=!1,this.queue=[],this.empty=new Function,this._socket=e,this}return t.prototype.createTransport=function(t,n){if(!t)throw new Error("URL can't be empty");this.url=t;var a=e.RongIMClient._memoryStore.depend,l=a.wsScheme;return t=e.RongUtil.tplEngine("{wsScheme}{url}",{wsScheme:l,url:t}),this.socket=new WebSocket(t),this.socket.binaryType="arraybuffer",this.addEvent(),this.socket},t.prototype.send=function(t){if(this.connected||this.isClose){if(!this.isClose){var n=new e.RongIMStream([]);new e.MessageOutputStream(n).writeMessage(t);var a=n.getBytesArray(!0),l=new Int8Array(a);return this.socket.send(l.buffer),this}this._socket.fire("StatusChanged",e.ConnectionStatus.CONNECTION_CLOSED)}else this.queue.push(t)},t.prototype.onData=function(t){return e.MessageUtil.isArray(t)?this._socket.onMessage(new e.MessageInputStream(t).readMessage()):this._socket.onMessage(new e.MessageInputStream(e.MessageUtil.ArrayFormInput(t)).readMessage()),""},t.prototype.onClose=function(t){var n=this;n.isClose=!0,n.socket=this.empty,e.Bridge._client.clearHeartbeat(),1006!=t.code||this._status?n._status=0:n._socket.fire("StatusChanged",e.ConnectionStatus.NETWORK_UNAVAILABLE)},t.prototype.onError=function(e){throw new Error(e)},t.prototype.addEvent=function(){var e=this;e.socket.onopen=function(){e.connected=!0,e.isClose=!1,e.doQueue(),e._socket.fire("connect")},e.socket.onmessage=function(t){"string"==typeof t.data?e.onData(t.data.split(",")):e.onData(t.data)},e.socket.onerror=function(t){e.onError(t)},e.socket.onclose=function(t){e.onClose(t)}},t.prototype.doQueue=function(){for(var e=this,t=0,n=e.queue.length;t<n;t++)e.send(e.queue[t])},t.prototype.disconnect=function(e){var t=this;t.socket.readyState&&(t.isClose=!0,e&&(t._status=e),t.socket.close())},t.prototype.reconnect=function(){this.disconnect(),this.createTransport(this.url)},t.prototype.close=function(){this.socket.close()},t}();e.SocketTransportation=t}(RongIMLib||(RongIMLib={})),function(e){var t=function(){function t(e){return this.empty=new Function,this.connected=!1,this.pid=+new Date+Math.random()+"",this.queue=[],this.socket=e,this}return t.prototype.createTransport=function(t,n){if(!t)throw new Error("Url is empty,Please check it!");this.url=t;var a=e.RongIMClient._storageProvider.getItem("sId"+e.Navigation.Endpoint.userId),l=this;return a?(setTimeout(function(){l.onSuccess('{"status":0,"userId":"'+e.Navigation.Endpoint.userId+'","headerCode":32,"messageId":0,"sessionid":"'+a+'"}'),l.connected=!0},500),this):(this.getRequest(t,!0),this)},t.prototype.requestFactory=function(t,n,a){var l=this.XmlHttpRequest();return a&&(l.multipart=!0),l.open(n||"GET",e.RongIMClient._memoryStore.depend.protocol+t),"POST"==n&&"setRequestHeader"in l&&l.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=utf-8"),l},t.prototype.getRequest=function(e,t){var n=this;n.xhr=this.requestFactory(e+"&pid="+encodeURIComponent(n.pid),"GET"),"onload"in n.xhr?(n.xhr.onload=function(){n.xhr.onload=n.empty,"lost params"==this.responseText?n.onError():n.onSuccess(this.responseText,t)},n.xhr.onerror=function(){n.disconnect()}):n.xhr.onreadystatechange=function(){4==n.xhr.readyState&&(n.xhr.onreadystatechange=n.empty,/^(200|202)$/.test(n.xhr.status)?n.onSuccess(n.xhr.responseText,t):/^(400|403)$/.test(n.xhr.status)?n.onError():n.disconnect())},n.xhr.send()},t.prototype.send=function(t){var n=this,a=n.sendxhr=this.requestFactory(e.Navigation.Endpoint.host+"/websocket"+t.url+"&pid="+encodeURIComponent(n.pid),"POST");"onload"in a?(a.onload=function(){a.onload=n.empty,n.onData(a.responseText)},a.onerror=function(){a.onerror=n.empty}):a.onreadystatechange=function(){4==a.readyState&&(this.onreadystatechange=this.empty,/^(202|200)$/.test(a.status)&&n.onData(a.responseText))},a.send(JSON.stringify(t.data))},t.prototype.onData=function(t,n){if(t&&"lost params"!=t){var a=this,l=JSON.parse(t);return l.userId&&(e.Navigation.Endpoint.userId=l.userId),n&&e.RongIMClient._storageProvider.setItem("sId"+e.Navigation.Endpoint.userId,n),e.MessageUtil.isArray(l)||(l=[l]),Array.forEach(l,function(t){a.socket.fire("message",new e.MessageInputStream(t,!0).readMessage())}),""}},t.prototype.XmlHttpRequest=function(){var e="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest;return"undefined"!=typeof XMLHttpRequest&&e?new XMLHttpRequest:"undefined"!=typeof XDomainRequest?new XDomainRequest:new ActiveXObject("Microsoft.XMLHTTP")},t.prototype.onClose=function(){this.xhr&&(this.xhr.onload?this.xhr.onreadystatechange=this.xhr.onload=this.empty:this.xhr.onreadystatechange=this.empty,this.xhr.abort(),this.xhr=null),this.sendxhr&&(this.sendxhr.onload?this.sendxhr.onreadystatechange=this.sendxhr.onload=this.empty:this.sendxhr.onreadystatechange=this.empty,this.sendxhr.abort(),this.sendxhr=null)},t.prototype.disconnect=function(){e.RongIMClient._storageProvider.removeItem("sId"+e.Navigation.Endpoint.userId),e.RongIMClient._storageProvider.removeItem(e.Navigation.Endpoint.userId+"msgId"),this.onClose()},t.prototype.reconnect=function(){this.disconnect(),this.createTransport(this.url)},t.prototype.onSuccess=function(t,n){var a=t.match(/"sessionid":"\S+?(?=")/);if(this.onData(t,a?a[0].slice(13):0),/"headerCode":-32,/.test(t))return e.RongIMClient._storageProvider.removeItem("sId"+e.Navigation.Endpoint.userId),void e.RongIMClient._storageProvider.removeItem(e.Navigation.Endpoint.userId+"msgId");this.getRequest(e.Navigation.Endpoint.host+"/pullmsg.js?sessionid="+e.RongIMClient._storageProvider.getItem("sId"+e.Navigation.Endpoint.userId)+"&timestrap="+encodeURIComponent((new Date).getTime()+Math.random()+"")),this.connected=!0,n&&this.socket.fire("connect")},t.prototype.onError=function(){e.RongIMClient._storageProvider.removeItem("sId"+e.Navigation.Endpoint.userId),e.RongIMClient._storageProvider.removeItem(e.Navigation.Endpoint.userId+"msgId"),this.onClose(),this.connected=!1,this.socket.fire("disconnect")},t.prototype.close=function(){this.xhr.abort(),this.sendxhr=null},t}();e.PollingTransportation=t}(RongIMLib||(RongIMLib={}));var typeMapping={"RC:TxtMsg":"TextMessage","RC:ImgMsg":"ImageMessage","RC:VcMsg":"VoiceMessage","RC:ImgTextMsg":"RichContentMessage","RC:FileMsg":"FileMessage","RC:HQVCMsg":"HQVoiceMessage","RC:LBSMsg":"LocationMessage","RC:InfoNtf":"InformationNotificationMessage","RC:ContactNtf":"ContactNotificationMessage","RC:ProfileNtf":"ProfileNotificationMessage","RC:CmdNtf":"CommandNotificationMessage","RC:DizNtf":"DiscussionNotificationMessage","RC:CmdMsg":"CommandMessage","RC:TypSts":"TypingStatusMessage","RC:CsChaR":"ChangeModeResponseMessage","RC:CsHsR":"HandShakeResponseMessage","RC:CsEnd":"TerminateMessage","RC:CsSp":"SuspendMessage","RC:CsUpdate":"CustomerStatusUpdateMessage","RC:ReadNtf":"ReadReceiptMessage","RC:VCAccept":"AcceptMessage","RC:VCRinging":"RingingMessage","RC:VCSummary":"SummaryMessage","RC:VCHangup":"HungupMessage","RC:VCInvite":"InviteMessage","RC:VCModifyMedia":"MediaModifyMessage","RC:VCModifyMem":"MemberModifyMessage","RC:CsContact":"CustomerContact","RC:PSImgTxtMsg":"PublicServiceRichContentMessage","RC:PSMultiImgTxtMsg":"PublicServiceMultiRichContentMessage","RC:GrpNtf":"GroupNotificationMessage","RC:PSCmd":"PublicServiceCommandMessage","RC:RcCmd":"RecallCommandMessage","RC:SRSMsg":"SyncReadStatusMessage","RC:RRReqMsg":"ReadReceiptRequestMessage","RC:RRRspMsg":"ReadReceiptResponseMessage","RCJrmf:RpMsg":"JrmfRedPacketMessage","RCJrmf:RpOpendMsg":"JrmfRedPacketOpenedMessage"},registerMessageTypeMapping={},HistoryMsgType={4:"qryCMsg",2:"qryDMsg",3:"qryGMsg",1:"qryPMsg",6:"qrySMsg",7:"qryPMsg",8:"qryPMsg",5:"qryCMsg"},disconnectStatus={1:6},RongIMLib,RongIMLib,RongIMLib,RongIMLib,RongIMLib,RongIMLib,RongIMLib,RongIMLib,RongIMLib,RongIMLib,RongIMLib,RongIMLib,RongIMLib,RongIMLib,RongIMLib,RongIMLib;return function(RongIMLib){var Transportations=function(){function e(){}return e._TransportType=RongIMLib.Socket.WEBSOCKET,e}();RongIMLib.Transportations=Transportations;var SyncTimeUtil=function(){function e(){}return e.$getKey=function(e){var t=RongIMLib.Bridge._client,n=t.userId,a=1==e.messageDirection?"send":"receive",l=RongIMLib.RongIMClient._memoryStore.appKey;return RongIMLib.RongUtil.tplEngine("{appkey}_{userId}_{direction}box",{appkey:l,userId:n,direction:a})},e.set=function(t){var n=e.$getKey(t),a=t.sentTime;RongIMLib.RongIMClient._storageProvider.setItem(n,a)},e.get=function(){var t=e.$getKey({messageDirection:RongIMLib.MessageDirection.SEND}),n=e.$getKey({messageDirection:RongIMLib.MessageDirection.RECEIVE}),a=RongIMLib.RongIMClient._storageProvider;return{sent:Number(a.getItem(t)||0),received:Number(a.getItem(n)||0)}},e}();RongIMLib.SyncTimeUtil=SyncTimeUtil;var MessageUtil=function(){function MessageUtil(){}return MessageUtil.checkStorageSize=function(){return JSON.stringify(localStorage).length<468e4},MessageUtil.getFirstKey=function(e){var t="";for(var n in e){t=n;break}return t},MessageUtil.isEmpty=function(e){var t=!0;for(var n in e){t=!1;break}return t},MessageUtil.ArrayForm=function(e){if("[object ArrayBuffer]"==Object.prototype.toString.call(e)){var t=new Int8Array(e);return[].slice.call(t)}return e},MessageUtil.ArrayFormInput=function(e){return"[object ArrayBuffer]"==Object.prototype.toString.call(e)?new Uint8Array(e):e},MessageUtil.indexOf=function(e,t,n){for(var a=e.length,l=n<0?Math.max(0,+n):n||0;l<a;l++)if(e[l]==t)return l;return-1},MessageUtil.isArray=function(e){return"[object Array]"==Object.prototype.toString.call(e)},MessageUtil.forEach=function(e,t){return[].forEach?function(e,t){[].forEach.call(e,t)}:function(e,t){for(var n=0;n<e.length;n++)t.call(e,e[n],n,e)}},MessageUtil.remove=function(e,t){for(var n=0,a=e.length;n<a;n++)if(t(e[n]))return e.splice(n,1)[0];return null},MessageUtil.int64ToTimestamp=function(e,t){if(void 0===e.low)return e;var n=e.low;n<0&&(n+=4294967296),n=n.toString(16);var a=parseInt(e.high.toString(16)+"00000000".replace(new RegExp("0{"+n.length+"}$"),n),16);return t?new Date(a):a},MessageUtil.messageParser=function(entity,onReceived,offlineMsg){var message=new RongIMLib.Message,content=entity.content,de,objectName=entity.classname,val,isUseDef=!1;try{RongIMLib.RongIMClient._memoryStore.depend.isPolling?(val=(new RongIMLib.BinaryHelper).readUTF(content.offset?MessageUtil.ArrayForm(content.buffer).slice(content.offset,content.limit):content),de=JSON.parse(val)):(val=(new RongIMLib.BinaryHelper).readUTF(content.offset?MessageUtil.ArrayFormInput(content.buffer).subarray(content.offset,content.limit):content),de=JSON.parse(val))}catch(ex){de=val,isUseDef=!0}if(objectName in typeMapping){var str="new RongIMLib."+typeMapping[objectName]+"(de)";message.content=eval(str),message.messageType=typeMapping[objectName]}else if(objectName in registerMessageTypeMapping){var str="new RongIMLib.RongIMClient.RegisterMessage."+registerMessageTypeMapping[objectName]+"(de)";message.content=isUseDef?eval(str).decode(de):eval(str),message.messageType=registerMessageTypeMapping[objectName]}else message.content=new RongIMLib.UnknownMessage({content:de,objectName:objectName}),message.messageType="UnknownMessage";var dateTime=MessageUtil.int64ToTimestamp(entity.dataTime);message.sentTime=dateTime>0?dateTime:+new Date,message.senderUserId=entity.fromUserId,message.conversationType=entity.type,entity.fromUserId==RongIMLib.Bridge._client.userId?message.targetId=entity.groupId:message.targetId=/^[234]$/.test(entity.type||entity.getType())?entity.groupId:message.senderUserId;var selfUserId=RongIMLib.Bridge._client.userId,isSelfSend=1==entity.direction||message.senderUserId===selfUserId;isSelfSend?(message.messageDirection=RongIMLib.MessageDirection.SEND,message.senderUserId=RongIMLib.Bridge._client.userId):message.messageDirection=RongIMLib.MessageDirection.RECEIVE;var isSelfToSelf=message.senderUserId===selfUserId&&message.targetId===selfUserId;return isSelfToSelf&&(message.messageDirection=RongIMLib.MessageDirection.RECEIVE),message.messageUId=entity.msgId,message.receivedTime=(new Date).getTime(),message.messageId=message.conversationType+"_"+~~(16777215*Math.random()),message.objectName=objectName,message.receivedStatus=RongIMLib.ReceivedStatus.READ,2==(2&entity.status)&&(message.receivedStatus=RongIMLib.ReceivedStatus.RETRIEVED),message.offLineMessage=!!offlineMsg,offlineMsg||RongIMLib.RongIMClient._memoryStore.connectAckTime>message.sentTime&&(message.offLineMessage=!0),message},MessageUtil.detectCMP=function(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){4==t.readyState&&(200==t.status?e.success():e.fail(t.status))};var n=e.url,a=e.url;n=e.method||"GET";t.open(n,a);var l=e.headers;for(var r in l){var i=l[r];t.setRequestHeader(r,i)}var o=JSON.stringify(e.body||{});return t.send(o),t},MessageUtil.sign={converNum:1,msgNum:1,isMsgStart:!0,isConvStart:!0},MessageUtil}();RongIMLib.MessageUtil=MessageUtil;var MessageIdHandler=function(){function e(){}return e.init=function(){this.messageId=+(RongIMLib.RongIMClient._storageProvider.getItem(RongIMLib.Navigation.Endpoint.userId+"msgId")||RongIMLib.RongIMClient._storageProvider.setItem(RongIMLib.Navigation.Endpoint.userId+"msgId",0)||0)},e.messageIdPlus=function(e){return RongIMLib.RongIMClient._memoryStore.depend.isPolling&&this.init(),this.messageId>=65535?(e(),!1):(this.messageId++,RongIMLib.RongIMClient._memoryStore.depend.isPolling&&RongIMLib.RongIMClient._storageProvider.setItem(RongIMLib.Navigation.Endpoint.userId+"msgId",this.messageId),this.messageId)},e.clearMessageId=function(){this.messageId=0,RongIMLib.RongIMClient._memoryStore.depend.isPolling&&RongIMLib.RongIMClient._storageProvider.setItem(RongIMLib.Navigation.Endpoint.userId+"msgId",this.messageId)},e.getMessageId=function(){return RongIMLib.RongIMClient._memoryStore.depend.isPolling&&this.init(),this.messageId},e.messageId=0,e}();RongIMLib.MessageIdHandler=MessageIdHandler;var RongInnerTools=function(){function e(){}return e.convertUserStatus=function(e){e=RongIMLib.RongUtil.rename(e,{subUserId:"userId"});var t=JSON.parse(e.status),n=t.us;return n?(e.status=RongIMLib.RongUtil.rename(n,{o:"online",p:"platform",s:"status"}),e):e},e}();RongIMLib.RongInnerTools=RongInnerTools}(RongIMLib||(RongIMLib={})),function(e){var t=function(){function e(e){throw new Error("This method is abstract, you must implement this method in inherited class.")}return e.obtain=function(){throw new Error("This method is abstract, you must implement this method in inherited class.")},e}();e.MessageContent=t;var n=function(e){function t(){e.apply(this,arguments)}return __extends(t,e),t}(t);e.NotificationMessage=n;var a=function(e){function t(){e.apply(this,arguments)}return __extends(t,e),t}(t);e.StatusMessage=a;var l=function(){function t(){}return t.modelClone=function(e){var t={};for(var n in e)"messageName"!=n&&"encode"!=n&&(t[n]=e[n]);return t},t.modleCreate=function(t,n){var a=function a(l){var r=this;for(var i in t)r[t[i]]=l[t[i]];a.prototype.messageName=n,a.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))}};return a},t}();e.ModelUtil=l}(RongIMLib||(RongIMLib={})),function(e){var t=function(){function t(e){this.messageName="CustomerStatusMessage",this.status=e.status}return t.obtain=function(){return null},t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.CustomerStatusMessage=t;var n=function(){function t(e){this.messageName="ChangeModeResponseMessage",this.code=e.code,this.data=e.data,this.msg=e.msg}return t.obtain=function(){return null},t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.ChangeModeResponseMessage=n;var a=function(){function t(e){this.messageName="ChangeModeMessage",this.uid=e.uid,this.sid=e.sid,this.pid=e.pid}return t.obtain=function(){return null},t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.ChangeModeMessage=a;var l=function(){function t(e){this.messageName="CustomerStatusUpdateMessage",this.serviceStatus=e.serviceStatus,this.sid=e.sid}return t.obtain=function(){return null},t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.CustomerStatusUpdateMessage=l;var r=function(){function t(e){this.messageName="HandShakeMessage",e&&(this.requestInfo=e.requestInfo,this.userInfo=e.userInfo)}return t.obtain=function(){return null},t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.HandShakeMessage=r;var i=function(){function t(e){this.messageName="CustomerContact",this.page=e.page,this.nickName=e.nickName,this.routingInfo=e.routingInfo,this.info=e.info,this.requestInfo=e.requestInfo}return t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.CustomerContact=i;var o=function(){function t(e){this.messageName="EvaluateMessage",this.uid=e.uid,this.sid=e.sid,this.pid=e.pid,this.source=e.source,this.suggest=e.suggest,this.isresolve=e.isresolve,this.type=e.type}return t.obtain=function(){return null},t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.EvaluateMessage=o;var s=function(){function t(e){this.messageName="HandShakeResponseMessage",this.msg=e.msg,this.status=e.status,this.data=e.data}return t.obtain=function(){return null},t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.HandShakeResponseMessage=s;var u=function(){function t(e){this.messageName="SuspendMessage",this.uid=e.uid,this.sid=e.sid,this.pid=e.pid}return t.obtain=function(){return null},t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.SuspendMessage=u;var c=function(){function t(e){this.messageName="TerminateMessage",this.code=e.code,this.msg=e.msg,this.sid=e.sid}return t.obtain=function(){return null},t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.TerminateMessage=c}(RongIMLib||(RongIMLib={})),function(e){var t=function(){function e(e){this.messageName="IsTypingStatusMessage"}return e.prototype.encode=function(){},e.prototype.getMessage=function(){return null},e}();e.IsTypingStatusMessage=t}(RongIMLib||(RongIMLib={})),function(e){var t=function(){function t(e){if(this.messageName="InformationNotificationMessage",0==arguments.length)throw new Error("Can not instantiate with empty parameters, use obtain method instead -> InformationNotificationMessage.");this.message=e.message,this.extra=e.extra,e.user&&(this.user=e.user)}return t.obtain=function(e){return new t({message:e,extra:""})},t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.InformationNotificationMessage=t;var n=function(){function t(e){if(this.messageName="CommandMessage",0==arguments.length)throw new Error("Can not instantiate with empty parameters, use obtain method instead -> CommandMessage.");try{"[object String]"==Object.prototype.toString.call(e.data)?this.data=JSON.parse(e.data):this.data=e.data}catch(t){this.data=e.data}this.name=e.name,this.extra=e.extra}return t.obtain=function(e){return new t({data:e,extra:""})},t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.CommandMessage=n;var a=function(){function n(e){if(this.messageName="ContactNotificationMessage",0==arguments.length)throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ContactNotificationMessage.");this.operation=e.operation,this.targetUserId=e.targetUserId,this.message=e.message,this.extra=e.extra,this.sourceUserId=e.sourceUserId,e.user&&(this.user=e.user)}return n.obtain=function(e,n,a,l){return new t({operation:e,sourceUserId:n,targetUserId:a,message:l})},n.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},n.CONTACT_OPERATION_ACCEPT_RESPONSE="ContactOperationAcceptResponse",n.CONTACT_OPERATION_REJECT_RESPONSE="ContactOperationRejectResponse",n.CONTACT_OPERATION_REQUEST="ContactOperationRequest",n}();e.ContactNotificationMessage=a;var l=function(){function t(e){if(this.messageName="ProfileNotificationMessage",0==arguments.length)throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ProfileNotificationMessage.");this.operation=e.operation;try{"[object String]"==Object.prototype.toString.call(e.data)?this.data=JSON.parse(e.data):this.data=e.data}catch(t){this.data=e.data}this.extra=e.extra,e.user&&(this.user=e.user)}return t.obtain=function(e,n){return new t({operation:e,data:n})},t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.ProfileNotificationMessage=l;var r=function(){function t(e){if(this.messageName="CommandNotificationMessage",0==arguments.length)throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ProfileNotificationMessage.");try{"[object String]"==Object.prototype.toString.call(e.data)?this.data=JSON.parse(e.data):this.data=e.data}catch(t){this.data=e.data}this.name=e.name,this.extra=e.extra,e.user&&(this.user=e.user)}return t.obtain=function(e,n){return new t({name:e,data:n,extra:""})},t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.CommandNotificationMessage=r;var i=function(){function t(e){if(this.messageName="DiscussionNotificationMessage",0==arguments.length)throw new Error("Can not instantiate with empty parameters, use obtain method instead -> DiscussionNotificationMessage.");this.extra=e.extra,this.extension=e.extension,this.type=e.type,this.isHasReceived=e.isHasReceived,this.operation=e.operation,this.user=e.user,e.user&&(this.user=e.user)}return t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.DiscussionNotificationMessage=i;var o=function(){function t(e){if(this.messageName="GroupNotificationMessage",0==arguments.length)throw new Error("Can not instantiate with empty parameters, use obtain method instead -> GroupNotificationMessage.");e.operatorUserId&&(this.operatorUserId=e.operatorUserId),e.operation&&(this.operation=e.operation),e.data&&(this.data=e.data),e.message&&(this.message=e.message),e.extra&&(this.extra=e.extra)}return t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.GroupNotificationMessage=o}(RongIMLib||(RongIMLib={})),function(e){var t=function(){function t(e){if(this.messageName="TextMessage",0==arguments.length)throw new Error("Can not instantiate with empty parameters, use obtain method instead -> TextMessage.");this.content=e.content,this.extra=e.extra,e.user&&(this.user=e.user),e.mentionedInfo&&(this.mentionedInfo=e.mentionedInfo)}return t.obtain=function(e){return new t({extra:"",content:e})},t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.TextMessage=t;var n=function(){function t(e){if(this.messageName="TypingStatusMessage",0==arguments.length)throw new Error("Can not instantiate with empty parameters, use obtain method instead -> TypingStatusMessage.");this.typingContentType=e.typingContentType,this.data=e.data}return t.obtain=function(e,n){return new t({typingContentType:e,data:n})},t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.TypingStatusMessage=n;var a=function(){function t(e){if(this.messageName="ReadReceiptMessage",0==arguments.length)throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ReadReceiptMessage.");this.lastMessageSendTime=e.lastMessageSendTime,this.messageUId=e.messageUId,this.type=e.type}return t.obtain=function(e,n,a){return new t({messageUId:e,lastMessageSendTime:n,type:a})},t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.ReadReceiptMessage=a;var l=function(){function t(e){if(this.messageName="VoiceMessage",0==arguments.length)throw new Error("Can not instantiate with empty parameters, use obtain method instead -> VoiceMessage.");this.content=e.content,this.duration=e.duration,this.extra=e.extra,e.user&&(this.user=e.user),e.mentionedInfo&&(this.mentionedInfo=e.mentionedInfo)}return t.obtain=function(e,n){return new t({content:e,duration:n,extra:""})},t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.VoiceMessage=l;var r=function(){function t(e){this.messageName="RecallCommandMessage",this.messageUId=e.messageUId,this.conversationType=e.conversationType,this.targetId=e.targetId,this.sentTime=e.sentTime,e.extra&&(this.extra=e.extra),e.user&&(this.user=e.user)}return t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.RecallCommandMessage=r;var i=function(){function t(e){if(this.messageName="ImageMessage",0==arguments.length)throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ImageMessage.");this.content=e.content,this.imageUri=e.imageUri,e.extra&&(this.extra=e.extra),e.user&&(this.user=e.user),e.mentionedInfo&&(this.mentionedInfo=e.mentionedInfo)}return t.obtain=function(e,n){return new t({content:e,imageUri:n,extra:""})},t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.ImageMessage=i;var o=function(){function t(e){if(this.messageName="LocationMessage",0==arguments.length)throw new Error("Can not instantiate with empty parameters, use obtain method instead -> LocationMessage.");this.latitude=e.latitude,this.longitude=e.longitude,this.poi=e.poi,this.content=e.content,this.extra=e.extra,e.user&&(this.user=e.user),e.mentionedInfo&&(this.mentionedInfo=e.mentionedInfo)}return t.obtain=function(e,n,a,l){return new t({latitude:e,longitude:n,poi:a,content:l,extra:""})},t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.LocationMessage=o;var s=function(){function t(e){if(this.messageName="RichContentMessage",0==arguments.length)throw new Error("Can not instantiate with empty parameters, use obtain method instead -> RichContentMessage.");this.title=e.title,this.content=e.content,this.imageUri=e.imageUri,this.extra=e.extra,this.url=e.url,e.user&&(this.user=e.user)}return t.obtain=function(e,n,a,l){return new t({title:e,content:n,imageUri:a,url:l,extra:""})},t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.RichContentMessage=s;var u=function(){function e(e){this.messageName="JrmfRedPacketMessage",e&&(this.message=e)}return e.prototype.encode=function(){return""},e}();e.JrmfRedPacketMessage=u;var c=function(){function e(e){this.messageName="JrmfRedPacketOpenedMessage",e&&(this.message=e)}return e.prototype.encode=function(){return""},e}();e.JrmfRedPacketOpenedMessage=c;var f=function(){function e(e){if(this.messageName="UnknownMessage",0==arguments.length)throw new Error("Can not instantiate with empty parameters, use obtain method instead -> UnknownMessage.");this.message=e}return e.prototype.encode=function(){return""},e}();e.UnknownMessage=f;var g=function(){function t(e){if(this.messageName="PublicServiceCommandMessage",0==arguments.length)throw new Error("Can not instantiate with empty parameters, use obtain method instead -> PublicServiceCommandMessage.");this.content=e.content,this.extra=e.extra,this.menuItem=e.menuItem,e.user&&(this.user=e.user),e.mentionedInfo&&(this.mentionedInfo=e.mentionedInfo)}return t.obtain=function(e){return new t({content:"",command:"",menuItem:e,extra:""})},t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.PublicServiceCommandMessage=g;var v=function(){function e(e){this.messageName="PublicServiceMultiRichContentMessage",this.richContentMessages=e}return e.prototype.encode=function(){return null},e}();e.PublicServiceMultiRichContentMessage=v;var b=function(){function t(e){this.messageName="SyncReadStatusMessage",e.lastMessageSendTime&&(this.lastMessageSendTime=e.lastMessageSendTime)}return t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.SyncReadStatusMessage=b;var h=function(){function t(e){this.messageName="ReadReceiptRequestMessage",e.messageUId&&(this.messageUId=e.messageUId)}return t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.ReadReceiptRequestMessage=h;var p=function(){function t(e){this.messageName="ReadReceiptResponseMessage",e.receiptMessageDic&&(this.receiptMessageDic=e.receiptMessageDic)}return t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.ReadReceiptResponseMessage=p;var d=function(){function t(e){this.messageName="PublicServiceRichContentMessage",this.richContentMessage=e}return t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.PublicServiceRichContentMessage=d;var y=function(){function t(e){this.messageName="FileMessage",e.name&&(this.name=e.name),e.size&&(this.size=e.size),e.type&&(this.type=e.type),e.fileUrl&&(this.fileUrl=e.fileUrl),e.extra&&(this.extra=e.extra),e.user&&(this.user=e.user)}return t.obtain=function(e){return new t({name:e.name,size:e.size,type:e.type,fileUrl:e.fileUrl})},t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.FileMessage=y;var m=function(){function t(e){this.messageName="HQVoiceMessage",this.type=e.type||"aac",e.localPath&&(this.localPath=e.localPath),e.remoteUrl&&(this.remoteUrl=e.remoteUrl),e.duration&&(this.duration=e.duration),e.extra&&(this.extra=e.extra),e.user&&(this.user=e.user)}return t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.HQVoiceMessage=m;var I=function(){function t(e){this.messageName="AcceptMessage",this.mediaId=e.mediaId,this.callId=e.callId,this.mediaType=e.mediaType,this.mode=e.mode,this.subInfo=e.subInfo}return t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.AcceptMessage=I;var C=function(){function t(e){this.messageName="RingingMessage",this.callId=e.callId}return t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.RingingMessage=C;var M=function(){function t(e){this.messageName="SummaryMessage",this.caller=e.caller,this.inviter=e.inviter,this.mediaType=e.mediaType,this.memberIdList=e.memberIdList,this.startTime=e.startTime,this.connectedTime=e.connectedTime,this.duration=e.duration,this.status=e.status}return t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.SummaryMessage=M;var T=function(){function t(e){this.messageName="HungupMessage",this.callId=e.callId,this.reason=e.reason,this.mode=e.mode,this.subInfo=e.subInfo}return t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.HungupMessage=T;var E=function(){function t(e){this.messageName="InviteMessage",this.mediaId=e.mediaId,this.callId=e.callId,this.engineType=e.engineType,this.channelInfo=e.channelInfo,this.mediaType=e.mediaType,this.extra=e.extra,this.inviteUserIds=e.inviteUserIds,this.observerUserIds=e.observerUserIds,this.mode=e.mode,this.subInfo=e.subInfo}return t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.InviteMessage=E;var _=function(){function t(e){this.messageName="MediaModifyMessage",this.callId=e.callId,this.mediaType=e.mediaType,this.mode=e.mode,this.subInfo=e.subInfo}return t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.MediaModifyMessage=_;var R=function(){function t(e){this.messageName="MemberModifyMessage",this.modifyMemType=e.modifyMemType,this.callId=e.callId,this.caller=e.caller,this.engineType=e.engineType,this.channelInfo=e.channelInfo,this.mediaType=e.mediaType,this.extra=e.extra,this.inviteUserIds=e.inviteUserIds,this.existedMemberStatusList=e.existedMemberStatusList,this.existedUserPofiles=e.existedUserPofiles,this.observerUserIds=e.observerUserIds,this.mode=e.mode,this.subInfo=e.subInfo}return t.prototype.encode=function(){return JSON.stringify(e.ModelUtil.modelClone(this))},t}();e.MemberModifyMessage=R}(RongIMLib||(RongIMLib={})),function(e){var t=function(){function e(e,t){this.Id=e,this.Key=t}return e}();e.ChannelInfo=t;var n=function(){function e(e,t,n){this.platform=e,this.online=t,this.status=n}return e}();e.UserStatus=n;var a=function(){function e(e,t,n){}return e}();e.MentionedInfo=a;var l=function(){function e(e,t,n){this.msgId=e,this.msgDataTime=t,this.direct=n}return e}();e.DeleteMessage=l;var r=function(){function e(e,t,n){}return e}();e.CustomServiceConfig=r;var i=function(){function e(e,t,n,a,l,r,i){}return e}();e.CustomServiceSession=i;var o=function(){function t(e,t,n,a,l,r,i,o,s,u,c,f,g,v,b,h,p,d,y,m,I){this.conversationTitle=e,this.conversationType=t,this.draft=n,this.isTop=a,this.latestMessage=l,this.latestMessageId=r,this.notificationStatus=i,this.objectName=o,this.receivedStatus=s,this.receivedTime=u,this.senderUserId=c,this.senderUserName=f,this.sentStatus=g,this.sentTime=v,this.targetId=b,this.unreadMessageCount=h,this.senderPortraitUri=p,this.isHidden=d,this.mentionedMsg=y,this.hasUnreadMention=m,this._readTime=I}return t.prototype.setTop=function(){e.RongIMClient._dataAccessProvider.addConversation(this,{onSuccess:function(e){}})},t}();e.Conversation=o;var s=function(){function e(e,t,n,a,l){this.creatorId=e,this.id=t,this.memberIdList=n,this.name=a,this.isOpen=l}return e}();e.Discussion=s;var u=function(){function e(e,t,n){this.id=e,this.name=t,this.portraitUri=n}return e}();e.Group=u;var c=function(){function e(e,t,n,a,l,r,i,o,s,u,c,f,g,v,b,h,p){this.content=e,this.conversationType=t,this.extra=n,this.objectName=a,this.messageDirection=l,this.messageId=r,this.receivedStatus=i,this.receivedTime=o,this.senderUserId=s,this.sentStatus=u,this.sentTime=c,this.targetId=f,this.messageType=g,this.messageUId=v,this.isLocalMessage=b,this.offLineMessage=h,this.receiptResponse=p}return e}();e.Message=c;var f=function(){function e(e,t){this.isCounted=e,this.isPersited=t}return e.prototype.getMessageTag=function(){return this.isCounted&&this.isPersited?3:this.isCounted?2:this.isPersited?1:this.isCounted||this.isPersited?void 0:0},e.getTagByStatus=function(e){var t={3:{isCounted:!0,isPersited:!0},2:{isCounted:!0,isPersited:!1},1:{isCounted:!0,isPersited:!0},0:{isCounted:!0,isPersited:!0}};return t[e]||t[3]},e}();e.MessageTag=f;var g=function(){function e(e,t,n,a,l){this.id=e,this.name=t,this.type=n,this.sunMenuItems=a,this.url=l}return e}();e.PublicServiceMenuItem=g;var v=function(){function e(e,t,n,a,l,r,i,o){this.conversationType=e,this.introduction=t,this.menu=n,this.name=a,this.portraitUri=l,this.publicServiceId=r,this.hasFollowed=i,this.isGlobal=o}return e}();e.PublicServiceProfile=v;var b=function(){function e(e,t,n){this.id=e,this.name=t,this.portraitUri=n}return e}();e.UserInfo=b;var h=function(){function e(e,t){this.id=e,this.token=t}return e}();e.User=h;var p=function(){function e(e,t,n){this.id=e,this.user=t,this.mode=n}return e}();e.Room=p}(RongIMLib||(RongIMLib={})),function(e){var t=function(){function t(){this.userStatusListener=null}return t.prototype.init=function(t,n){new e.FeatureDectector(n.appCallback)},t.prototype.connect=function(t,n,a,l){e.RongIMClient.bridge=e.Bridge.getInstance(),e.RongIMClient._memoryStore.token=t,e.RongIMClient._memoryStore.callback=n,a=a||"",l=l||{};var r=!1,i=!1;if(e.Bridge._client&&e.Bridge._client.channel&&(r=e.Bridge._client.channel.connectionStatus==e.ConnectionStatus.CONNECTING,i=e.Bridge._client.channel.connectionStatus==e.ConnectionStatus.CONNECTED),!i&&!r){if(e.RongIMClient.otherDeviceLoginCount>5)return void n.onError(e.ConnectionStatus.ULTRALIMIT);l.force&&e.RongIMClient._storageProvider.removeItem("servers");for(var o=0,s=e.RongIMClient._memoryStore.listenerList.length;o<s;o++)e.RongIMClient.bridge.setListener(e.RongIMClient._memoryStore.listenerList[o]);e.RongIMClient._memoryStore.listenerList.length=0,e.RongIMClient.bridge.connect(e.RongIMClient._memoryStore.appKey,t,{onSuccess:function(e){setTimeout(function(){n.onSuccess(e)})},onError:function(t){t!=e.ConnectionState.TOKEN_INCORRECT&&t?setTimeout(function(){n.onError(t)}):setTimeout(function(){n.onTokenIncorrect()})}})}},t.prototype.reconnect=function(t,n){var a=e.RongIMClient._memoryStore,l=a.token;if(!l)throw new Error("reconnect: token is empty.");if(e.Bridge._client&&e.Bridge._client.channel&&e.Bridge._client.channel.connectionStatus!=e.ConnectionStatus.CONNECTED&&e.Bridge._client.channel.connectionStatus!=e.ConnectionStatus.CONNECTING){n=n||{};var r=n.auto?"auto":"custom";({auto:function(){var a=function(t){var n=t.step(),a=t.url,l=function(){e.RongUtil.request({url:a,success:function(){t.done()},error:function(){r()}})},r=function(){var a=n();if("done"!=a)setTimeout(l,a);else{var r=e.ConnectionStatus.NETWORK_UNAVAILABLE;t.done(r)}};r()},r=e.RongIMClient._memoryStore.depend.protocol,i=n.url||"cdn.ronghub.com/RongIMLib-2.2.6.min.js",o={protocol:r,path:i};i=e.RongUtil.formatProtoclPath(o);var s=n.rate||[100,1e3,3e3,6e3,1e4,18e3];s.push("done"),a({url:i,step:function(){var e=0;return function(){var t=s[e];return e++,t}},done:function(n){n?t.onError(n):e.RongIMClient.connect(l,t)}})},custom:function(){e.RongIMClient.connect(l,t)}})[r]()}},t.prototype.logout=function(){e.RongIMClient.bridge.disconnect(),e.RongIMClient.bridge=null},t.prototype.disconnect=function(){e.RongIMClient.bridge.disconnect()},t.prototype.sendReceiptResponse=function(t,n,a){var l=e.Bridge._client.userId+t+n+"RECEIVED",r=this;if(e.RongUtil.supportLocalStorage()){var i=JSON.parse(e.RongIMClient._storageProvider.getItem(l));if(i){var o=[];for(var s in i){var u={};u[s]=i[s].uIds,i[s].isResponse||o.push(u)}if(0==o.length)return void a.onSuccess();var c=setInterval(function(){1==o.length&&clearInterval(c);var s=o.splice(0,1)[0],u=new e.ReadReceiptResponseMessage({receiptMessageDic:s});r.sendMessage(t,n,u,{onSuccess:function(t){var n=e.MessageUtil.getFirstKey(s);i[n].isResponse=!0,e.RongIMClient._storageProvider.setItem(l,JSON.stringify(i)),a.onSuccess(t)},onError:function(e,t){a.onError(e,t)}})},200)}else a.onSuccess()}else a.onSuccess()},t.prototype.sendTypingStatusMessage=function(t,n,a,l){var r=this;a in e.RongIMClient.MessageParams&&r.sendMessage(t,n,e.TypingStatusMessage.obtain(e.RongIMClient.MessageParams[a].objectName,""),{onSuccess:function(){setTimeout(function(){l.onSuccess()})},onError:function(e){setTimeout(function(){l.onError(e,null)})},onBefore:function(){}})},t.prototype.sendRecallMessage=function(t,n){var a=new e.RecallCommandMessage({conversationType:t.conversationType,targetId:t.targetId,sentTime:t.sentTime,messageUId:t.messageUId,extra:t.extra,user:t.user});this.sendMessage(t.conversationType,t.senderUserId,a,n,!1,null,null,2)},t.prototype.sendTextMessage=function(t,n,a,l){var r=e.TextMessage.obtain(a);this.sendMessage(t,n,r,l)},t.prototype.getRemoteHistoryMessages=function(t,n,a,l,r,i){if(l<=1)throw new Error("the count must be greater than 1.");i=i||{};var o=i.order||0,s=function(){return[t,n,"_",o].join("")},u=s();e.RongUtil.isNumber(a)||(a=e.RongIMClient._memoryStore.lastReadTime.get(u));var c=e.RongIMClient._memoryStore,f=c.historyMessageLimit,g=f.get(u)||{},v=g.hasMore;if(!v&&g.time==a&&0==o)return r.onSuccess([],v);var b=new e.RongIMClient.Protobuf.HistoryMsgInput;b.setTargetId(n),b.setTime(a),b.setCount(l),b.setOrder(o),e.RongIMClient.bridge.queryMsg(HistoryMsgType[t],e.MessageUtil.ArrayForm(b.toArrayBuffer()),n,{onSuccess:function(t){var a=e.MessageUtil.int64ToTimestamp(t.syncTime);e.RongIMClient._memoryStore.lastReadTime.set(u,a),f.set(u,{hasMore:!!t.hasMsg,time:a});var l,i=t.list.reverse(),o=null,s=e.SentStatus.READ;if(e.RongUtil.supportLocalStorage())for(var c=0,g=i.length;c<g;c++)o=e.MessageUtil.messageParser(i[c]),l=JSON.parse(e.RongIMClient._storageProvider.getItem(e.Bridge._client.userId+o.messageUId+"SENT")),l&&(o.receiptResponse||(o.receiptResponse={}),o.receiptResponse[o.messageUId]=l.count),o.sentStatus=s,o.targetId=n,i[c]=o;else for(c=0,g=i.length;c<g;c++){o=e.MessageUtil.messageParser(i[c]);o.sentStatus=s,i[c]=o}setTimeout(function(){r.onSuccess(i,!!t.hasMsg)})},onError:function(e){setTimeout(function(){r.onError(e)})}},"HistoryMessagesOuput")},t.prototype.hasRemoteUnreadMessages=function(t,n){var a=null;window.RCCallback=function(e){setTimeout(function(){n.onSuccess(!!+e.status)}),a.parentNode.removeChild(a)},a=document.createElement("script"),a.src=e.RongIMClient._memoryStore.depend.api+"/message/exist.js?appKey="+encodeURIComponent(e.RongIMClient._memoryStore.appKey)+"&token="+encodeURIComponent(t)+"&callBack=RCCallback&_="+e.RongUtil.getTimestamp(),document.body.appendChild(a),a.onerror=function(){setTimeout(function(){n.onError(e.ErrorCode.UNKNOWN)}),a.parentNode.removeChild(a)}},t.prototype.getRemoteConversationList=function(t,n,a){var l=new e.RongIMClient.Protobuf.RelationsInput,r=this;l.setType(1),void 0===a?l.setCount(0):l.setCount(a),e.RongIMClient.bridge.queryMsg(26,e.MessageUtil.ArrayForm(l.toArrayBuffer()),e.Bridge._client.userId,{onSuccess:function(a){if(a.info){a.info=a.info.reverse();for(var l=0,i=a.info.length;l<i;l++)e.RongIMClient.getInstance().pottingConversation(a.info[l])}var o=e.RongIMClient._memoryStore.conversationList;setTimeout(function(){if(n)return t.onSuccess(r.filterConversations(n,o));t.onSuccess(o)})},onError:function(e){t.onError(e)}},"RelationsOutput")},t.prototype.addMemberToDiscussion=function(t,n,a){var l=new e.RongIMClient.Protobuf.ChannelInvitationInput;l.setUsers(n),e.RongIMClient.bridge.queryMsg(0,e.MessageUtil.ArrayForm(l.toArrayBuffer()),t,{onSuccess:function(){setTimeout(function(){a.onSuccess()})},onError:function(e){setTimeout(function(){a.onError(e)})}})},t.prototype.createDiscussion=function(t,n,a){var l=new e.RongIMClient.Protobuf.CreateDiscussionInput,r=this;l.setName(t),e.RongIMClient.bridge.queryMsg(1,e.MessageUtil.ArrayForm(l.toArrayBuffer()),e.Bridge._client.userId,{onSuccess:function(e){n.length>0&&r.addMemberToDiscussion(e,n,{onSuccess:function(){},onError:function(e){setTimeout(function(){a.onError(e)})}}),setTimeout(function(){a.onSuccess(e)})},onError:function(e){setTimeout(function(){a.onError(e)})}},"CreateDiscussionOutput")},t.prototype.getDiscussion=function(t,n){var a=new e.RongIMClient.Protobuf.ChannelInfoInput;a.setNothing(1),e.RongIMClient.bridge.queryMsg(4,e.MessageUtil.ArrayForm(a.toArrayBuffer()),t,{onSuccess:function(e){setTimeout(function(){n.onSuccess(e)})},onError:function(e){setTimeout(function(){n.onError(e)})}},"ChannelInfoOutput")},t.prototype.quitDiscussion=function(t,n){var a=new e.RongIMClient.Protobuf.LeaveChannelInput;a.setNothing(1),e.RongIMClient.bridge.queryMsg(7,e.MessageUtil.ArrayForm(a.toArrayBuffer()),t,{onSuccess:function(){setTimeout(function(){n.onSuccess()})},onError:function(e){setTimeout(function(){n.onError(e)})}})},t.prototype.removeMemberFromDiscussion=function(t,n,a){var l=new e.RongIMClient.Protobuf.ChannelEvictionInput;l.setUser(n),e.RongIMClient.bridge.queryMsg(9,e.MessageUtil.ArrayForm(l.toArrayBuffer()),t,{onSuccess:function(){setTimeout(function(){a.onSuccess()})},onError:function(e){setTimeout(function(){a.onError(e)})}})},t.prototype.setDiscussionInviteStatus=function(t,n,a){var l=new e.RongIMClient.Protobuf.ModifyPermissionInput;l.setOpenStatus(n.valueOf()),e.RongIMClient.bridge.queryMsg(11,e.MessageUtil.ArrayForm(l.toArrayBuffer()),t,{onSuccess:function(e){setTimeout(function(){a.onSuccess()})},onError:function(e){setTimeout(function(){a.onError(e)})}})},t.prototype.setDiscussionName=function(t,n,a){var l=new e.RongIMClient.Protobuf.RenameChannelInput;l.setName(n),e.RongIMClient.bridge.queryMsg(12,e.MessageUtil.ArrayForm(l.toArrayBuffer()),t,{onSuccess:function(){setTimeout(function(){a.onSuccess()})},onError:function(e){a.onError(e)}})},t.prototype.joinChatRoom=function(t,n,a){var l=new e.RongIMClient.Protobuf.ChrmInput;l.setNothing(1),e.Bridge._client.chatroomId=t,e.RongIMClient.bridge.queryMsg(19,e.MessageUtil.ArrayForm(l.toArrayBuffer()),t,{onSuccess:function(){setTimeout(function(){a.onSuccess()});var l=new e.RongIMClient.Protobuf.ChrmPullMsg;0==n&&(n=-1),l.setCount(n),l.setSyncTime(0),e.Bridge._client.queryMessage("chrmPull",e.MessageUtil.ArrayForm(l.toArrayBuffer()),t,1,{onSuccess:function(n){var a=n.list,l=e.MessageUtil.int64ToTimestamp(n.syncTime),r=a[a.length-1];r&&(r=e.MessageUtil.messageParser(r),l=r.sentTime),e.RongIMClient._memoryStore.lastReadTime.set(t+e.Bridge._client.userId+"CST",l);for(var i=e.Bridge._client,o=0,s=a.length;o<s;o++){var u="R"+a[o].msgId;if(!(u in i.cacheMessageIds)){i.cacheMessageIds[u]=!0;var c=e.RongUtil.keys(i.cacheMessageIds);if(c.length>10&&(u=c[0],delete i.cacheMessageIds[u]),e.RongIMClient._memoryStore.filterMessages.length>0)for(var f=0,g=e.RongIMClient._memoryStore.filterMessages.length;f<g;f++)e.RongIMClient.MessageParams[e.RongIMClient._memoryStore.filterMessages[f]].objectName!=a[o].classname&&i.handler.onReceived(a[o]);else i.handler.onReceived(a[o])}}},onError:function(t){setTimeout(function(){a.onError(e.ErrorCode.CHATROOM_HISMESSAGE_ERROR)})}},"DownStreamMessages")},onError:function(e){setTimeout(function(){a.onError(e)})}},"ChrmOutput")},t.prototype.getChatRoomInfo=function(t,n,a,l){var r=new e.RongIMClient.Protobuf.QueryChatroomInfoInput;r.setCount(n),r.setOrder(a),e.RongIMClient.bridge.queryMsg("queryChrmI",e.MessageUtil.ArrayForm(r.toArrayBuffer()),t,{onSuccess:function(t){t.userInfos.forEach(function(t){t.time=e.MessageUtil.int64ToTimestamp(t.time)}),setTimeout(function(){l.onSuccess(t)})},onError:function(e){setTimeout(function(){l.onError(e)})}},"QueryChatroomInfoOutput")},t.prototype.quitChatRoom=function(t,n){var a=new e.RongIMClient.Protobuf.ChrmInput;a.setNothing(1),e.RongIMClient.bridge.queryMsg(17,e.MessageUtil.ArrayForm(a.toArrayBuffer()),t,{onSuccess:function(){setTimeout(function(){n.onSuccess()})},onError:function(e){setTimeout(function(){n.onError(e)})}},"ChrmOutput")},t.prototype.setChatroomHisMessageTimestamp=function(t,n){e.RongIMClient._memoryStore.lastReadTime.set("chrhis_"+t,n)},t.prototype.getChatRoomHistoryMessages=function(t,n,a,l){var r=new e.RongIMClient.Protobuf.HistoryMsgInput;r.setTargetId(t);var i=e.RongIMClient._memoryStore.lastReadTime.get("chrhis_"+t)||0;r.setTime(i),r.setCount(n),r.setOrder(a),e.RongIMClient.bridge.queryMsg(34,e.MessageUtil.ArrayForm(r.toArrayBuffer()),e.Bridge._client.userId,{onSuccess:function(n){e.RongIMClient._memoryStore.lastReadTime.set("chrhis_"+t,e.MessageUtil.int64ToTimestamp(n.syncTime));for(var a=n.list.reverse(),r=0,i=a.length;r<i;r++)a[r]=e.MessageUtil.messageParser(a[r]);setTimeout(function(){l.onSuccess(a,!!n.hasMsg)})},onError:function(e){setTimeout(function(){l.onError(e)})}},"HistoryMsgOuput")},t.prototype.setMessageStatus=function(e,t,n,a,l){setTimeout(function(){l.onSuccess(!0)})},t.prototype.addToBlacklist=function(t,n){var a=new e.RongIMClient.Protobuf.Add2BlackListInput;a.setUserId(t),e.RongIMClient.bridge.queryMsg(21,e.MessageUtil.ArrayForm(a.toArrayBuffer()),t,{onSuccess:function(){setTimeout(function(){n.onSuccess()})},onError:function(e){setTimeout(function(){n.onError(e)})}})},t.prototype.getBlacklist=function(t){var n=new e.RongIMClient.Protobuf.QueryBlackListInput;n.setNothing(1),e.RongIMClient.bridge.queryMsg(23,e.MessageUtil.ArrayForm(n.toArrayBuffer()),e.Bridge._client.userId,{onSuccess:function(e){setTimeout(function(){t.onSuccess(e)})},onError:function(e){setTimeout(function(){t.onError(e)})}},"QueryBlackListOutput")},t.prototype.getBlacklistStatus=function(t,n){var a=new e.RongIMClient.Protobuf.BlackListStatusInput;a.setUserId(t),e.RongIMClient.bridge.queryMsg(24,e.MessageUtil.ArrayForm(a.toArrayBuffer()),t,{onSuccess:function(t){setTimeout(function(){n.onSuccess(e.BlacklistStatus[t])})},onError:function(e){setTimeout(function(){n.onError(e)})}})},t.prototype.removeFromBlacklist=function(t,n){var a=new e.RongIMClient.Protobuf.RemoveFromBlackListInput;a.setUserId(t),e.RongIMClient.bridge.queryMsg(22,e.MessageUtil.ArrayForm(a.toArrayBuffer()),t,{onSuccess:function(){setTimeout(function(){n.onSuccess()})},onError:function(e){setTimeout(function(){n.onError(e)})}})},t.prototype.getFileToken=function(t,n){if(/(1|2|3|4)/.test(t.toString())){var a=new e.RongIMClient.Protobuf.GetQNupTokenInput;a.setType(t),e.RongIMClient.bridge.queryMsg(30,e.MessageUtil.ArrayForm(a.toArrayBuffer()),e.Bridge._client.userId,{onSuccess:function(e){setTimeout(function(){n.onSuccess(e)})},onError:function(e){setTimeout(function(){n.onError(e)})}},"GetQNupTokenOutput")}else setTimeout(function(){n.onError(e.ErrorCode.QNTKN_FILETYPE_ERROR)})},t.prototype.getFileUrl=function(t,n,a,l){if(/(1|2|3|4)/.test(t.toString())){var r=new e.RongIMClient.Protobuf.GetQNdownloadUrlInput;r.setType(t),r.setKey(n),a&&r.setFileName(a),e.RongIMClient.bridge.queryMsg(31,e.MessageUtil.ArrayForm(r.toArrayBuffer()),e.Bridge._client.userId,{onSuccess:function(e){setTimeout(function(){l.onSuccess(e)})},onError:function(e){setTimeout(function(){l.onError(e)})}},"GetQNdownloadUrlOutput")}else setTimeout(function(){l.onError(e.ErrorCode.QNTKN_FILETYPE_ERROR)})},t.prototype.sendMessage=function(t,n,a,l,r,i,o,s,u){if(e.Bridge._client.channel){if(!e.Bridge._client.channel.socket.socket.connected)throw setTimeout(function(){l.onError(e.ErrorCode.TIMEOUT,null)}),new Error("connect is timeout! postion:sendMessage");var c=t==e.ConversationType.DISCUSSION||t==e.ConversationType.GROUP,f=new e.RongIMClient.Protobuf.UpStreamMessage;if(r&&c?f.setSessionId(7):f.setSessionId(e.RongIMClient.MessageParams[a.messageName].msgTag.getMessageTag()),i&&f.setPushText(i),o&&f.setAppData(o),c&&a.messageName==e.RongIMClient.MessageType.ReadReceiptResponseMessage){var g=a;if(g.receiptMessageDic){var v=[];for(var b in g.receiptMessageDic)v.push(b);f.setUserId(v)}}c&&a.messageName==e.RongIMClient.MessageType.SyncReadStatusMessage&&f.setUserId(e.Bridge._client.userId),u=u||{};var h=u.userIds;c&&h&&f.setUserId(h),f.setClassname(e.RongIMClient.MessageParams[a.messageName].objectName),f.setContent(a.encode());var p=f.toArrayBuffer();"[object ArrayBuffer]"==Object.prototype.toString.call(p)&&(p=[].slice.call(new Int8Array(p)));var d=this,y=new e.Message,m=this.getConversation(t,n);3==e.RongIMClient.MessageParams[a.messageName].msgTag.getMessageTag()&&(m||(m=e.RongIMClient.getInstance().createConversation(t,n,"")),m.sentTime=(new Date).getTime(),m.sentStatus=e.SentStatus.SENDING,m.senderUserName="",m.senderUserId=e.Bridge._client.userId,m.notificationStatus=e.ConversationNotificationStatus.DO_NOT_DISTURB,m.latestMessage=y,m.unreadMessageCount=0,e.RongIMClient._dataAccessProvider.addConversation(m,{onSuccess:function(e){}})),e.RongIMClient._memoryStore.converStore=m,y.content=a,y.conversationType=t,y.senderUserId=e.Bridge._client.userId,y.objectName=e.RongIMClient.MessageParams[a.messageName].objectName,y.targetId=n,y.sentTime=(new Date).getTime(),y.messageDirection=e.MessageDirection.SEND,y.sentStatus=e.SentStatus.SENT,y.messageType=a.messageName,e.RongIMClient.bridge.pubMsg(t.valueOf(),p,n,{onSuccess:function(r){if(r&&r.timestamp&&e.RongIMClient._memoryStore.lastReadTime.set("converST_"+e.Bridge._client.userId+t+n,r.timestamp),(t==e.ConversationType.DISCUSSION||t==e.ConversationType.GROUP)&&a.messageName==e.RongIMClient.MessageType.ReadReceiptRequestMessage){var i=y.content,o=e.Bridge._client.userId+i.messageUId+"SENT";e.RongIMClient._storageProvider.setItem(o,JSON.stringify({count:0,dealtime:r.timestamp,userIds:{}}))}if(3==e.RongIMClient.MessageParams[y.messageType].msgTag.getMessageTag()){var s=e.RongIMClient._memoryStore.converStore;s.sentStatus=y.sentStatus,s.latestMessage=y,d.updateConversation(s),e.RongIMClient._dataAccessProvider.addMessage(t,n,y,{onSuccess:function(t){y=t,y.messageUId=r.messageUId,y.sentTime=r.timestamp,y.sentStatus=e.SentStatus.SENT,y.messageId=r.messageId,e.RongIMClient._dataAccessProvider.updateMessage(y)},onError:function(){}})}setTimeout(function(){s&&d.updateConversation(s),y.sentTime=r.timestamp,y.messageUId=r.messageUId,l.onSuccess(y)})},onError:function(a,r){y.sentStatus=e.SentStatus.FAILED,r&&(y.messageUId=r.messageUId,y.sentTime=r.sentTime),3==e.RongIMClient.MessageParams[y.messageType].msgTag.getMessageTag()&&(e.RongIMClient._memoryStore.converStore.latestMessage=y),e.RongIMClient._dataAccessProvider.addMessage(t,n,y,{onSuccess:function(t){y.messageId=t.messageId,e.RongIMClient._dataAccessProvider.updateMessage(y)},onError:function(){}}),setTimeout(function(){l.onError(a,y)})}},null,s),l.onBefore&&l.onBefore(e.MessageIdHandler.messageId),y.messageId=e.MessageIdHandler.messageId+""}else setTimeout(function(){l.onError(e.ErrorCode.RC_NET_UNAVAILABLE,null)})},t.prototype.setConnectionStatusListener=function(t){var n={onChanged:function(n){t.onChanged(n),e.RongUtil.forEach(e.RongIMClient.statusListeners,function(e){e(n)})}};e.RongIMClient.bridge?e.RongIMClient.bridge.setListener(n):e.RongIMClient._memoryStore.listenerList.push(n)},t.prototype.setOnReceiveMessageListener=function(t){e.RongIMClient.bridge?e.RongIMClient.bridge.setListener(t):e.RongIMClient._memoryStore.listenerList.push(t)},t.prototype.registerMessageType=function(t,n,a,l,r){if(!t)throw new Error("messageType can't be empty,postion -> registerMessageType");if(!n)throw new Error("objectName can't be empty,postion -> registerMessageType");if("[object Array]"==Object.prototype.toString.call(l)){var i=e.ModelUtil.modleCreate(l,t);e.RongIMClient.RegisterMessage[t]=i}else{if("[object Function]"!=Object.prototype.toString.call(l)&&"[object Object]"!=Object.prototype.toString.call(l))throw new Error("The index of 3 parameter was wrong type  must be object or function or array-> registerMessageType");if(!l.encode)throw new Error("encode method has not realized or messageName is undefined-> registerMessageType");if(!l.decode)throw new Error("decode method has not realized -> registerMessageType")}registerMessageTypeMapping[n]=t},t.prototype.registerMessageTypes=function(t){var n=[],a=function(e){var t=[];for(var n in e)t.push(n);return t};for(var l in t){var r=t[l],i=r.proto,o=a(i),s=r.flag||3,u=e.MessageTag.getTagByStatus(s);s=new e.MessageTag(u.isCounted,u.isPersited),n.push({type:l,name:r.name,flag:s,protos:o})}for(var c=function(t){var n=t.type,a=t.name,l=t.flag,r=t.protos;e.RongIMClient.registerMessageType(n,a,l,r)},f=0,g=n.length;f<g;f++){r=n[f];c(r)}},t.prototype.addConversation=function(t,n){for(var a=!0,l=0,r=e.RongIMClient._memoryStore.conversationList.length;l<r;l++)if(e.RongIMClient._memoryStore.conversationList[l].conversationType===t.conversationType&&e.RongIMClient._memoryStore.conversationList[l].targetId===t.targetId){e.RongIMClient._memoryStore.conversationList.unshift(e.RongIMClient._memoryStore.conversationList.splice(l,1)[0]),a=!1;break}a&&e.RongIMClient._memoryStore.conversationList.unshift(t),n&&n.onSuccess(!0)},t.prototype.updateConversation=function(t){for(var n,a=0,l=e.RongIMClient._memoryStore.conversationList.length;a<l;a++){var r=e.RongIMClient._memoryStore.conversationList[a];if(t.conversationType===r.conversationType&&t.targetId===r.targetId){t.conversationTitle&&(r.conversationTitle=t.conversationTitle),t.senderUserName&&(r.senderUserName=t.senderUserName),t.senderPortraitUri&&(r.senderPortraitUri=t.senderPortraitUri),t.latestMessage&&(r.latestMessage=t.latestMessage),t.sentStatus&&(r.sentStatus=t.sentStatus);break}}return n},t.prototype.removeConversation=function(t,n,a){var l=new e.RongIMClient.Protobuf.RelationsInput;l.setType(t),e.RongIMClient.bridge.queryMsg(27,e.MessageUtil.ArrayForm(l.toArrayBuffer()),n,{onSuccess:function(){for(var l=e.RongIMClient._memoryStore.conversationList,r=l.length,i=0;i<r;i++)if(l[i].conversationType==t&&n==l[i].targetId){l.splice(i,1);break}a.onSuccess(!0)},onError:function(e){setTimeout(function(){a.onError(e)})}})},t.prototype.getMessage=function(t,n){n.onSuccess(new e.Message)},t.prototype.addMessage=function(e,t,n,a){a&&a.onSuccess(n)},t.prototype.removeMessage=function(t,n,a,l){e.RongIMClient.getInstance().deleteRemoteMessages(t,n,a,l)},t.prototype.removeLocalMessage=function(e,t,n,a){a.onSuccess(!0)},t.prototype.updateMessage=function(e,t){t&&t.onSuccess(e)},t.prototype.clearRemoteHistoryMessages=function(t,n){var a=new e.RongIMClient.Protobuf.CleanHisMsgInput,l=t.conversationType,r={1:"cleanPMsg",2:"cleanDMsg",3:"cleanGMsg",5:"cleanCMsg",6:"cleanSMsg"},i=r[l];if(i){var o=t.timestamp;if("number"==typeof o){a.setDataTime(o);var s=t.targetId;a.setTargetId(s),e.RongIMClient.bridge.queryMsg(i,e.MessageUtil.ArrayForm(a.toArrayBuffer()),s,{onSuccess:function(e){n.onSuccess(!e)},onError:function(t){1==t&&(t=e.ErrorCode.CLEAR_HIS_ERROR),setTimeout(function(){n.onError(t)})}})}else n.onError(e.ErrorCode.CLEAR_HIS_TIME_ERROR)}else n.onError(e.ErrorCode.CLEAR_HIS_TYPE_ERROR)},t.prototype.clearHistoryMessages=function(e,t){this.clearRemoteHistoryMessages(e,t)},t.prototype.clearMessages=function(e,t,n){},t.prototype.updateMessages=function(t,n,a,l,r){var i=this;"readStatus"==a&&e.RongIMClient._memoryStore.conversationList.length>0&&i.getConversationList({onSuccess:function(e){Array.forEach(e,function(e){e.conversationType==t&&e.targetId==n&&(e.unreadMessageCount=0)})},onError:function(e){setTimeout(function(){r.onError(e)})}},null),setTimeout(function(){r.onSuccess(!0)})},t.prototype.getConversation=function(t,n,a){for(var l=null,r=0,i=e.RongIMClient._memoryStore.conversationList.length;r<i;r++)if(e.RongIMClient._memoryStore.conversationList[r].conversationType==t&&e.RongIMClient._memoryStore.conversationList[r].targetId==n&&(l=e.RongIMClient._memoryStore.conversationList[r],e.RongUtil.supportLocalStorage())){var o=e.RongIMClient._storageProvider.getItem("cu"+e.Bridge._client.userId+t+n);0==l.unreadMessageCount&&(l.unreadMessageCount=Number(o))}return setTimeout(function(){a&&a.onSuccess(l)}),l},t.prototype.filterConversations=function(t,n){var a=[];return e.RongUtil.forEach(t,function(t){e.RongUtil.forEach(n,function(e){e.conversationType==t&&a.push(e)})}),a},t.prototype.getConversationList=function(t,n,a,l){var r=this,i=e.RongIMClient._memoryStore.isSyncRemoteConverList,o=e.RongIMClient._memoryStore.conversationList,s=o.length>a;i||!s?e.RongIMClient.getInstance().getRemoteConversationList({onSuccess:function(n){e.RongUtil.supportLocalStorage()&&Array.forEach(e.RongIMClient._memoryStore.conversationList,function(t){var n=e.RongIMClient._storageProvider.getItem("cu"+e.Bridge._client.userId+t.conversationType+t.targetId);0==t.unreadMessageCount&&(t.unreadMessageCount=Number(n))}),e.RongIMClient._memoryStore.isSyncRemoteConverList=!1,setTimeout(function(){t.onSuccess(n)})},onError:function(e){setTimeout(function(){t.onError(e)})}},n,a,l):setTimeout(function(){var e=o.slice(0,a);n&&(e=r.filterConversations(n,e)),t.onSuccess(e)})},t.prototype.clearCache=function(){var t=e.RongIMClient._memoryStore||{};t.conversationList=[],t.isSyncRemoteConverList=!0},t.prototype.clearConversations=function(t,n){Array.forEach(t,function(t){Array.forEach(e.RongIMClient._memoryStore.conversationList,function(n){t==n.conversationType&&e.RongIMClient.getInstance().removeConversation(n.conversationType,n.targetId,{onSuccess:function(){},onError:function(){}})})}),setTimeout(function(){n.onSuccess(!0)})},t.prototype.setMessageContent=function(e,t,n){},t.prototype.setMessageSearchField=function(e,t,n){},t.prototype.getHistoryMessages=function(t,n,a,l,r,i,o){var s={objectname:i,order:o};e.RongIMClient.getInstance().getRemoteHistoryMessages(t,n,a,l,r,s)},t.prototype.getTotalUnreadCount=function(t,n){var a=0,l=e.RongIMClient._storageProvider;if(n)e.RongUtil.forEach(n,function(t){var n=l.getItemKeyList("cu"+e.Bridge._client.userId+t);e.RongUtil.forEach(n,function(e){var t=l.getItem(e),n=Number(t)||0;a+=n})});else{var r=l.getItemKeyList("cu"+e.Bridge._client.userId);e.RongUtil.forEach(r,function(e){var t=l.getItem(e),n=Number(t)||0;a+=n})}t.onSuccess(a)},t.prototype.getConversationUnreadCount=function(t,n){var a=0;Array.forEach(t,function(t){Array.forEach(e.RongIMClient._memoryStore.conversationList,function(e){e.conversationType==t&&(a+=e.unreadMessageCount)})}),setTimeout(function(){n.onSuccess(a)})},t.prototype.setUnreadCount=function(t,n,a){var l=e.RongIMClient._storageProvider,r="cu"+e.Bridge._client.userId+t+n;l.setItem(r,a)},t.prototype.getUnreadCount=function(t,n,a){var l="cu"+e.Bridge._client.userId+t+n,r=e.RongIMClient._storageProvider.getItem(l),i=Number(r);setTimeout(function(){a.onSuccess(i||0)})},t.prototype.cleanMentioneds=function(t){if(t){t.mentionedMsg=null;var n=t.targetId,a=t.conversationType,l=e.RongIMClient._storageProvider.getItem("mentioneds_"+e.Bridge._client.userId+"_"+a+"_"+n);if(l){var r=JSON.parse(l);delete r[a+"_"+n],e.MessageUtil.isEmpty(r)?e.RongIMClient._storageProvider.removeItem("mentioneds_"+e.Bridge._client.userId+"_"+a+"_"+n):e.RongIMClient._storageProvider.setItem("mentioneds_"+e.Bridge._client.userId+"_"+a+"_"+n,JSON.stringify(r))}}},t.prototype.clearUnreadCountByTimestamp=function(e,t,n,a){setTimeout(function(){a.onSuccess(!0)})},t.prototype.clearUnreadCount=function(t,n,a){var l=this;e.RongIMClient._storageProvider.removeItem("cu"+e.Bridge._client.userId+t+n),this.getConversation(t,n,{onSuccess:function(e){e&&(e.unreadMessageCount=0,l.cleanMentioneds(e)),setTimeout(function(){a.onSuccess(!0)})},onError:function(e){setTimeout(function(){a.onError(e)})}})},t.prototype.clearTotalUnreadCount=function(t){var n=e.RongIMClient._memoryStore.conversationList,a=this;if(n)for(var l=0;l<n.length;l++){var r=n[l];r&&(r.unreadMessageCount=0,a.cleanMentioneds(r))}var i=e.RongIMClient._storageProvider.getItemKeyList("cu"+e.Bridge._client.userId);e.RongUtil.forEach(i,function(t){e.RongIMClient._storageProvider.removeItem(t)}),setTimeout(function(){t.onSuccess(!0)})},t.prototype.setConversationToTop=function(e,t,n,a){var l=this;this.getConversation(e,t,{onSuccess:function(e){e.isTop=n,l.addConversation(e,a),setTimeout(function(){a.onSuccess(!0)})},onError:function(e){setTimeout(function(){a.onError(e)})}})},t.prototype.getConversationNotificationStatus=function(t,n){var a=t.targetId,l=t.conversationType,r=e.RongIMClient._memoryStore.notification,i=function(){return l+"_"+a},o=i(),s=r[o];if("number"!=typeof s){var u={1:"qryPPush",3:"qryDPush"},c=u[l];if(c){var f=new e.RongIMClient.Protobuf.BlockPushInput;f.setBlockeeId(a);var g=e.Bridge._client.userId,v=function(e){r[o]=e,setTimeout(function(){n.onSuccess(e)})};e.RongIMClient.bridge.queryMsg(c,e.MessageUtil.ArrayForm(f.toArrayBuffer()),g,{onSuccess:function(e){v(e)},onError:function(e){1==e?v(e):setTimeout(function(){n.onError(e)})}})}else n.onError(8001)}else n.onSuccess(s)},t.prototype.setConversationNotificationStatus=function(t,n){var a=t.conversationType,l=t.targetId,r=t.status,i=function(){return a+"_"+r},o={"1_1":"blkPPush","3_1":"blkDPush","1_0":"unblkPPush","3_0":"unblkDPush"},s=i();e.RongIMClient._memoryStore.notification[s]=r;var u=o[s];if(u){var c=new e.RongIMClient.Protobuf.BlockPushInput;c.setBlockeeId(l);var f=e.Bridge._client.userId;e.RongIMClient.bridge.queryMsg(u,e.MessageUtil.ArrayForm(c.toArrayBuffer()),f,{onSuccess:function(e){setTimeout(function(){n.onSuccess(e)})},onError:function(e){setTimeout(function(){n.onError(e)})}})}else setTimeout(function(){n.onError(8001)})},t.prototype.getUserStatus=function(t,n){var a=new e.RongIMClient.Protobuf.GetUserStatusInput;t=e.Bridge._client.userId,e.RongIMClient.bridge.queryMsg(35,e.MessageUtil.ArrayForm(a.toArrayBuffer()),t,{onSuccess:function(t){t=e.RongInnerTools.convertUserStatus(t),setTimeout(function(){n.onSuccess(t)})},onError:function(e){setTimeout(function(){n.onError(e)})}},"GetUserStatusOutput")},t.prototype.setUserStatus=function(t,n){var a=new e.RongIMClient.Protobuf.SetUserStatusInput,l=e.Bridge._client.userId;t&&a.setStatus(t),e.RongIMClient.bridge.queryMsg(36,e.MessageUtil.ArrayForm(a.toArrayBuffer()),l,{onSuccess:function(e){setTimeout(function(){n.onSuccess(!0)})},onError:function(e){setTimeout(function(){n.onError(e)})}},"SetUserStatusOutput")},t.prototype.subscribeUserStatus=function(t,n){var a=new e.RongIMClient.Protobuf.SubUserStatusInput,l=e.Bridge._client.userId;a.setUserid(t),e.RongIMClient.bridge.queryMsg(37,e.MessageUtil.ArrayForm(a.toArrayBuffer()),l,{onSuccess:function(e){setTimeout(function(){n&&n.onSuccess(!0)})},onError:function(e){setTimeout(function(){n&&n.onError(e)})}},"SubUserStatusOutput")},t.prototype.setUserStatusListener=function(t,n){e.RongIMClient.userStatusListener=n;var a=t.userIds||[];a.length&&e.RongIMClient._dataAccessProvider.subscribeUserStatus(a)},t.prototype.clearListeners=function(){},t.prototype.setServerInfo=function(e){},t.prototype.getUnreadMentionedMessages=function(e,t){return null},t.prototype.setConversationHidden=function(e,t,n){},t.prototype.setMessageExtra=function(e,t,n){setTimeout(function(){n.onSuccess(!0)})},t.prototype.setMessageReceivedStatus=function(e,t,n){setTimeout(function(){n.onSuccess(!0)})},t.prototype.setMessageSentStatus=function(e,t,n){setTimeout(function(){n.onSuccess(!0)})},t.prototype.getAllConversations=function(e){setTimeout(function(){e.onSuccess([])})},t.prototype.getConversationByContent=function(e,t){setTimeout(function(){t.onSuccess([])})},t.prototype.getMessagesFromConversation=function(e,t,n,a){setTimeout(function(){a.onSuccess([])})},t.prototype.searchConversationByContent=function(e,t,n){setTimeout(function(){t.onSuccess([])})},t.prototype.searchMessageByContent=function(e,t,n,a,l,r,i){setTimeout(function(){i.onSuccess([])})},t.prototype.getDelaTime=function(){return e.RongIMClient._memoryStore.deltaTime},t.prototype.getCurrentConnectionStatus=function(){var t=e.Bridge._client||{},n=t.channel||{},a=e.ConnectionStatus.CONNECTION_CLOSED;return"number"==typeof n.connectionStatus&&(a=n.connectionStatus),a},t.prototype.getAgoraDynamicKey=function(t,n,a){var l=new e.RongIMClient.Protobuf.VoipDynamicInput;l.setEngineType(t),l.setChannelName(n),e.RongIMClient.bridge.queryMsg(32,e.MessageUtil.ArrayForm(l.toArrayBuffer()),e.Bridge._client.userId,{onSuccess:function(e){setTimeout(function(){a.onSuccess(e)})},onError:function(e){setTimeout(function(){a.onError(e)})}},"VoipDynamicOutput")},t.prototype.setDeviceInfo=function(e){},t.prototype.setEnvironment=function(e){},t.prototype.clearData=function(){return!0},t.prototype.getPublicServiceProfile=function(t,n,a){var l=e.RongIMClient._memoryStore.publicServiceMap.get(t,n);setTimeout(function(){a.onSuccess(l)})},t.prototype.getRemotePublicServiceList=function(t,n){if(e.RongIMClient._memoryStore.depend.openMp){var a=new e.RongIMClient.Protobuf.PullMpInput;n?a.setTime(n):a.setTime(0),a.setMpid(""),e.RongIMClient.bridge.queryMsg(28,e.MessageUtil.ArrayForm(a.toArrayBuffer()),e.Bridge._client.userId,{onSuccess:function(n){e.RongIMClient._memoryStore.publicServiceMap.publicServiceList.length=0,e.RongIMClient._memoryStore.publicServiceMap.publicServiceList=n,setTimeout(function(){t&&t.onSuccess(n)})},onError:function(e){setTimeout(function(){t&&t.onError(e)})}},"PullMpOutput")}},t.prototype.getRTCUserInfoList=function(t,n){var a=new e.RongIMClient.Protobuf.RtcQueryListInput;a.setOrder(2),e.RongIMClient.bridge.queryMsg("rtcUData",e.MessageUtil.ArrayForm(a.toArrayBuffer()),t.id,{onSuccess:function(t){var a={},l=t.list;e.RongUtil.forEach(l,function(t){var n=t.userId,l={};e.RongUtil.forEach(t.userData,function(e){var t=e.key,n=e.value;l[t]=n}),a[n]=l}),n.onSuccess(a)},onError:function(e){n.onError(e)}},"RtcUserListOutput")},t.prototype.getRTCUserList=function(t,n){var a=new e.RongIMClient.Protobuf.RtcQueryListInput;a.setOrder(2),e.RongIMClient.bridge.queryMsg("rtcUList",e.MessageUtil.ArrayForm(a.toArrayBuffer()),t.id,{onSuccess:function(e){n.onSuccess({users:e.list})},onError:function(e){n.onError(e)}},"RtcUserListOutput")},t.prototype.setRTCUserInfo=function(t,n,a){var l=new e.RongIMClient.Protobuf.RtcValueInfo;l.setKey(n.key),l.setValue(n.value),e.RongIMClient.bridge.queryMsg("rtcUPut",e.MessageUtil.ArrayForm(l.toArrayBuffer()),t.id,{onSuccess:function(){a.onSuccess(!0)},onError:function(e){a.onError(e)}})},t.prototype.removeRTCUserInfo=function(t,n,a){var l=new e.RongIMClient.Protobuf.RtcKeyDeleteInput,r=n.keys||[];e.RongUtil.isArray(r)||(r=[r]),l.setKey(r),e.RongIMClient.bridge.queryMsg("rtcUDel",e.MessageUtil.ArrayForm(l.toArrayBuffer()),t.id,{onSuccess:function(){a.onSuccess(!0)},onError:function(e){a.onError(e)}})},t.prototype.getRTCRoomInfo=function(t,n){var a=new e.RongIMClient.Protobuf.RtcQueryListInput;a.setOrder(2),e.RongIMClient.bridge.queryMsg("rtcRInfo",e.MessageUtil.ArrayForm(a.toArrayBuffer()),t.id,{onSuccess:function(t){var a={id:t.roomId,total:t.userCount};e.RongUtil.forEach(t.roomData,function(e){a[e.key]=e.value}),n.onSuccess(a)},onError:function(e){n.onError(e)}},"RtcRoomInfoOutput")},t.prototype.setRTCRoomInfo=function(t,n,a){var l=new e.RongIMClient.Protobuf.RtcValueInfo;l.setKey(n.key),l.setValue(n.value),e.RongIMClient.bridge.queryMsg("rtcRPut",e.MessageUtil.ArrayForm(l.toArrayBuffer()),t.id,{onSuccess:function(){a.onSuccess(!0)},onError:function(e){a.onError(e)}})},t.prototype.removeRTCRoomInfo=function(t,n,a){var l=new e.RongIMClient.Protobuf.RtcKeyDeleteInput,r=n.keys||[];e.RongUtil.isArray(r)||(r=[r]),l.setKey(r),e.RongIMClient.bridge.queryMsg("rtcRDel",e.MessageUtil.ArrayForm(l.toArrayBuffer()),t.id,{onSuccess:function(){a.onSuccess(!0)},onError:function(e){a.onError(e)}})},t.prototype.joinRTCRoom=function(t,n){var a=new e.RongIMClient.Protobuf.RtcInput;a.setNothing(t.mode),e.RongIMClient.bridge.queryMsg("rtcRJoin_data",e.MessageUtil.ArrayForm(a.toArrayBuffer()),t.id,{onSuccess:function(t){var a={},l=t.list,r=t.token;e.RongUtil.forEach(l,function(t){var n=t.userId,l={};e.RongUtil.forEach(t.userData,function(e){var t=e.key,n=e.value;l[t]=n}),a[n]=l}),n.onSuccess({users:a,token:r})},onError:function(e){n.onError(e)}},"RtcUserListOutput")},t.prototype.quitRTCRoom=function(t,n){var a=new e.RongIMClient.Protobuf.SetUserStatusInput;e.RongIMClient.bridge.queryMsg("rtcRExit",e.MessageUtil.ArrayForm(a.toArrayBuffer()),t.id,{onSuccess:function(){n.onSuccess(!0)},onError:function(e){n.onError(e)}})},t.prototype.RTCPing=function(t,n){var a=new e.RongIMClient.Protobuf.RtcInput;e.RongIMClient.bridge.queryMsg("rtcPing",e.MessageUtil.ArrayForm(a.toArrayBuffer()),t.id,n)},t.prototype.setRTCData=function(t,n,a,l,r,i,o){var s=new e.RongIMClient.Protobuf.RtcSetDataInput;s.setInterior(l),s.setTarget(r),s.setKey(n),s.setValue(a),o=o||{};var u=o.name,c=o.content;u&&s.setObjectName(u),c&&(e.RongUtil.isString(c)||(c=JSON.stringify(c)),s.setContent(c)),e.RongIMClient.bridge.queryMsg("rtcSetData",e.MessageUtil.ArrayForm(s.toArrayBuffer()),t,i,"RtcOutput")},t.prototype.getRTCData=function(t,n,a,l,r){var i=new e.RongIMClient.Protobuf.RtcDataInput;i.setInterior(a),i.setTarget(l),i.setKey(n),e.RongIMClient.bridge.queryMsg("rtcQryData",e.MessageUtil.ArrayForm(i.toArrayBuffer()),t,{onSuccess:function(t){var n={},a=t.outInfo;e.RongUtil.forEach(a,function(e){n[e.key]=e.value}),r.onSuccess(n)},onError:r.onError},"RtcQryOutput")},t.prototype.removeRTCData=function(t,n,a,l,r,i){var o=new e.RongIMClient.Protobuf.RtcDataInput;o.setInterior(a),o.setTarget(l),o.setKey(n),i=i||{};var s=i.name,u=i.content;s&&o.setObjectName(s),u&&(e.RongUtil.isString(u)||(u=JSON.stringify(u)),o.setContent(u)),e.RongIMClient.bridge.queryMsg("rtcDelData",e.MessageUtil.ArrayForm(o.toArrayBuffer()),t,r,"RtcOutput")},t.prototype.setRTCUserData=function(t,n,a,l,r,i){this.setRTCData(t,n,a,l,e.RTCAPIType.PERSON,r,i)},t.prototype.getRTCUserData=function(t,n,a,l,r){this.getRTCData(t,n,a,e.RTCAPIType.PERSON,l)},t.prototype.removeRTCUserData=function(t,n,a,l,r){this.removeRTCData(t,n,a,e.RTCAPIType.PERSON,l,r)},t.prototype.setRTCRoomData=function(t,n,a,l,r,i){this.setRTCData(t,n,a,l,e.RTCAPIType.ROOM,r,i)},t.prototype.getRTCRoomData=function(t,n,a,l,r){this.getRTCData(t,n,a,e.RTCAPIType.ROOM,l)},t.prototype.removeRTCRoomData=function(t,n,a,l,r){this.removeRTCData(t,n,a,e.RTCAPIType.ROOM,l,r)},t.prototype.getNavi=function(){var t=e.RongIMClient._storageProvider.getItem("fullnavi")||"{}";return JSON.parse(t)},t.prototype.getRTCToken=function(t,n){var a=new e.RongIMClient.Protobuf.RtcInput;e.RongIMClient.bridge.queryMsg("rtcToken",e.MessageUtil.ArrayForm(a.toArrayBuffer()),t.id,{onSuccess:function(e){n.onSuccess(e)},onError:function(e){n.onError(e)}},"RtcTokenOutput")},t}();e.ServerDataProvider=t}(RongIMLib||(RongIMLib={})),function(e){var t=function(){function t(e){this.version="2.8.27",this.userId="",this.useConsole=!1,this.appKey="",this.token="",this.addon=e}return t.prototype.init=function(e,t){this.appKey=e,this.useConsole&&__f__("log","init"," at rongyunIM\\rongyun.js:6"),t=t||{},t.version=this.version;var n=this.addon.initWithAppkey(e,t.dbPath,t);return n&&(n=JSON.parse(n)),this.addon.registerMessageType("RC:VcMsg",3),this.addon.registerMessageType("RC:ImgTextMsg",3),this.addon.registerMessageType("RC:FileMsg",3),this.addon.registerMessageType("RC:LBSMsg",3),this.addon.registerMessageType("RC:PSImgTxtMsg",3),this.addon.registerMessageType("RC:PSMultiImgTxtMsg",3),this.addon.registerMessageType("RCJrmf:RpMsg",3),this.addon.registerMessageType("RCJrmf:RpOpendMsg",1),this.addon.registerMessageType("RC:GrpNtf",1),this.addon.registerMessageType("RC:DizNtf",0),this.addon.registerMessageType("RC:InfoNtf",0),this.addon.registerMessageType("RC:ContactNtf",0),this.addon.registerMessageType("RC:ProfileNtf",0),this.addon.registerMessageType("RC:CmdNtf",0),this.addon.registerMessageType("RC:CmdMsg",0),this.addon.registerMessageType("RC:TypSts",0),this.addon.registerMessageType("RC:CsChaR",0),this.addon.registerMessageType("RC:CsHsR",0),this.addon.registerMessageType("RC:CsEnd",0),this.addon.registerMessageType("RC:CsSp",0),this.addon.registerMessageType("RC:CsUpdate",0),this.addon.registerMessageType("RC:CsContact",0),this.addon.registerMessageType("RC:ReadNtf",0),this.addon.registerMessageType("RC:VCAccept",0),this.addon.registerMessageType("RC:VCRinging",0),this.addon.registerMessageType("RC:VCSummary",0),this.addon.registerMessageType("RC:VCHangup",0),this.addon.registerMessageType("RC:VCInvite",0),this.addon.registerMessageType("RC:VCModifyMedia",0),this.addon.registerMessageType("RC:VCModifyMem",0),this.addon.registerMessageType("RC:PSCmd",0),this.addon.registerMessageType("RC:RcCmd",0),this.addon.registerMessageType("RC:SRSMsg",0),this.addon.registerMessageType("RC:RRReqMsg",0),this.addon.registerMessageType("RC:RRRspMsg",0),n},t.prototype.connect=function(t,n,a,l){this.useConsole&&__f__("log","connect"," at rongyunIM\\rongyun.js:6"),this.userId=a,this.connectCallback=n,e.Bridge._client={userId:a},l=l||{};var r=!!l.openMp,i=!!l.openUS;l.type&&this.addon.setEnvironment(!0),this.addon.connectWithToken(t,a,l.serverList,r,i)},t.prototype.setServerInfo=function(e){"setServerInfo"in this.addon&&this.addon.setServerInfo(e.navi)},t.prototype.logout=function(){this.useConsole&&__f__("log","logout"," at rongyunIM\\rongyun.js:6"),this.disconnect()},t.prototype.disconnect=function(){this.useConsole&&__f__("log","disconnect"," at rongyunIM\\rongyun.js:6"),this.addon.disconnect(!0)},t.prototype.clearListeners=function(){this.addon.setOnReceiveStatusListener(),this.addon.setConnectionStatusListener(),this.addon.setOnReceiveMessageListener()},t.prototype.clearData=function(){return this.useConsole&&__f__("log","clearData"," at rongyunIM\\rongyun.js:6"),this.addon.clearData()},t.prototype.setConnectionStatusListener=function(t){var n=this;n.connectListener=t,this.useConsole&&__f__("log","setConnectionStatusListener"," at rongyunIM\\rongyun.js:6"),n.addon&&n.addon.setConnectionStatusListener(function(a){switch(a){case 10:setTimeout(function(){t.onChanged(e.ConnectionStatus.CONNECTING)});break;case 31004:setTimeout(function(){n.connectCallback.onTokenIncorrect()});break;case 1:case 8:case 9:case 11:case 12:case 31011:case 3e4:case 30002:setTimeout(function(){t.onChanged(e.ConnectionStatus.DISCONNECTED)});break;case 0:case 33005:setTimeout(function(){n.connectCallback.onSuccess(n.userId),t.onChanged(e.ConnectionStatus.CONNECTED)});break;case 6:setTimeout(function(){t.onChanged(e.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT)});break;default:setTimeout(function(){t.onChanged(a)})}})},t.prototype.setOnReceiveMessageListener=function(t){var n=this;n.messageListener=t,this.useConsole&&__f__("log","setOnReceiveMessageListener"," at rongyunIM\\rongyun.js:7"),n.addon&&n.addon.setOnReceiveMessageListener(function(a,l,r,i){var o=n.buildMessage(a);o.offLineMessage=r,setTimeout(function(){["AcceptMessage","RingingMessage","HungupMessage","InviteMessage","MediaModifyMessage","MemberModifyMessage"].indexOf(o.messageType)>-1?e.RongIMClient._voipProvider&&e.RongIMClient._voipProvider.onReceived(o):t.onReceived(o,l,i)})})},t.prototype.sendTypingStatusMessage=function(t,n,a,l){var r=this;this.useConsole&&__f__("log","sendTypingStatusMessage"," at rongyunIM\\rongyun.js:7"),a in e.RongIMClient.MessageParams&&r.sendMessage(t,n,e.TypingStatusMessage.obtain(e.RongIMClient.MessageParams[a].objectName,""),{onSuccess:function(){setTimeout(function(){l.onSuccess()})},onError:function(e){setTimeout(function(){l.onError(e,null)})},onBefore:function(){}})},t.prototype.setMessageStatus=function(e,t,n,a,l){this.addon.updateMessageReceiptStatus(e,t,n),l.onSuccess(!0)},t.prototype.sendTextMessage=function(t,n,a,l){var r=e.TextMessage.obtain(a);this.useConsole&&__f__("log","sendTextMessage"," at rongyunIM\\rongyun.js:7"),this.sendMessage(t,n,r,l)},t.prototype.getRemoteHistoryMessages=function(t,n,a,l,r,i){try{var o=this;o.useConsole&&__f__("log","getRemoteHistoryMessages"," at rongyunIM\\rongyun.js:7"),o.addon.getRemoteHistoryMessages(t,n,a||0,l,function(t,n){var a=t?JSON.parse(t).list:[],l=[];a.reverse();for(var i=0,s=a.length;i<s;i++){var u=o.buildMessage(a[i].obj);u.sentStatus=e.SentStatus.READ,l[i]=u}r.onSuccess(l,!!n)},function(e){r.onError(e)})}catch(s){r.onError(s)}},t.prototype.getRemoteConversationList=function(e,t,n,a){try{this.useConsole&&__f__("log","getRemoteConversationList"," at rongyunIM\\rongyun.js:7");var l=t||[1,2,3,4,5,6,7,8],r=this.addon.getConversationList(l),i=JSON.parse(r).list,o=[],s=this,u=0;i.reverse(),a="boolean"==typeof a&&a;for(var c=0,f=i.length;c<f;c++){var g=i[c].obj,v=JSON.parse(g);if(""!=v){if(1==v.isHidden&&a)continue;o[u]=s.buildConversation(g),u++}}o.reverse();var b=o.length;n=n||b,b>n&&(o.length=n),e.onSuccess(o)}catch(h){e.onError(h)}},t.prototype.removeConversation=function(t,n,a){try{this.useConsole&&__f__("log","removeConversation"," at rongyunIM\\rongyun.js:7"),this.addon.removeConversation(t,n);for(var l=e.RongIMClient._memoryStore.conversationList,r=l.length,i=0;i<r;i++)if(l[i].conversationType==t&&n==l[i].targetId){l.splice(i,1);break}a.onSuccess(!0)}catch(o){a.onError(o)}},t.prototype.joinChatRoom=function(e,t,n){this.useConsole&&__f__("log","joinChatRoom"," at rongyunIM\\rongyun.js:7"),this.addon.joinChatRoom(e,t,function(){n.onSuccess()},function(e){n.onError(e)})},t.prototype.quitChatRoom=function(e,t){this.useConsole&&__f__("log","quitChatRoom"," at rongyunIM\\rongyun.js:7"),this.addon.quitChatRoom(e,function(){t.onSuccess()},function(e){t.onError(e)})},t.prototype.addToBlacklist=function(e,t){this.useConsole&&__f__("log","addToBlacklist"," at rongyunIM\\rongyun.js:7"),this.addon.addToBlacklist(e,function(){t.onSuccess()},function(e){t.onError(e)})},t.prototype.getBlacklist=function(e){this.useConsole&&__f__("log","getBlacklist"," at rongyunIM\\rongyun.js:7"),this.addon.getBlacklist(function(t){e.onSuccess(t)},function(t){e.onError(t)})},t.prototype.getBlacklistStatus=function(e,t){this.useConsole&&__f__("log","getBlacklistStatus"," at rongyunIM\\rongyun.js:7"),this.addon.getBlacklistStatus(e,function(e){t.onSuccess(e)},function(e){t.onError(e)})},t.prototype.removeFromBlacklist=function(e,t){this.useConsole&&__f__("log","removeFromBlacklist"," at rongyunIM\\rongyun.js:7"),this.addon.removeFromBlacklist(e,function(){t.onSuccess()},function(e){t.onError(e)})},t.prototype.sendMessage=function(t,n,a,l,r,i,o,s,u){var c=this,f=[];c.useConsole&&__f__("log","sendMessage"," at rongyunIM\\rongyun.js:7"),u=u||{};var g=t==e.ConversationType.DISCUSSION||t==e.ConversationType.GROUP;if(g&&a.messageName==e.RongIMClient.MessageType.ReadReceiptResponseMessage){f=[];var v=a;if(v.receiptMessageDic){var b=[];for(var h in v.receiptMessageDic)b.push(h);f=b}}g&&a.messageName==e.RongIMClient.MessageType.SyncReadStatusMessage&&(f=[],f.push(c.userId));var p=u.userIds;g&&p&&(f=p);var d=c.addon.sendMessage(t,n,e.RongIMClient.MessageParams[a.messageName].objectName,a.encode(),i||"",o||"",function(e){},function(t,n){var a=c.buildMessage(t),r=e.ErrorCode.SENSITIVE_REPLACE;if(n==r)return l.onError(r,a);l.onSuccess(a)},function(e,t){l.onError(t,c.buildMessage(e))},f,r),y=JSON.parse(d);l.onBefore&&l.onBefore(y.messageId),e.MessageIdHandler.messageId=y.messageId},t.prototype.registerMessageType=function(t,n,a,l,r){this.useConsole&&__f__("log","registerMessageType"," at rongyunIM\\rongyun.js:7"),this.addon.registerMessageType(n,a.getMessageTag(),r);var i=e.ModelUtil.modleCreate(l,t);e.RongIMClient.RegisterMessage[t]=i,e.RongIMClient.RegisterMessage[t].messageName=t,registerMessageTypeMapping[n]=t,e.RongIMClient.MessageType[t]=t,e.RongIMClient.MessageParams[t]={objectName:n,msgTag:a},typeMapping[n]=t},t.prototype.registerMessageTypes=function(t){var n=[],a=function(e){var t=[];for(var n in e)t.push(n);return t};for(var l in t){var r=t[l],i=r.proto,o=a(i),s=r.flag||3,u=e.MessageTag.getTagByStatus(s);s=new e.MessageTag(u.isCounted,u.isPersited),n.push({type:l,name:r.name,flag:s,protos:o})}for(var c=function(t){var n=t.type,a=t.name,l=t.flag,r=t.protos;e.RongIMClient.registerMessageType(n,a,l,r)},f=0,g=n.length;f<g;f++){r=n[f];c(r)}},t.prototype.addMessage=function(t,n,a,l){this.useConsole&&__f__("log","addMessage"," at rongyunIM\\rongyun.js:7");var r=a.direction,i=this.addon.insertMessage(t,n,a.senderUserId,a.objectName,JSON.stringify(a.content),function(){l.onSuccess(o.buildMessage(i))},function(){l.onError(e.ErrorCode.MSG_INSERT_ERROR)},r),o=this},t.prototype.removeMessage=function(e,t,n,a){},t.prototype.removeLocalMessage=function(e,t,n,a){try{this.useConsole&&__f__("log","removeLocalMessage"," at rongyunIM\\rongyun.js:7"),this.addon.deleteMessages(n),a.onSuccess(!0)}catch(l){a.onError(l)}},t.prototype.getMessage=function(e,t){try{this.useConsole&&__f__("log","getMessage"," at rongyunIM\\rongyun.js:7");var n=this.buildMessage(this.addon.getMessage(e));t.onSuccess(n)}catch(a){t.onError(a)}},t.prototype.clearMessages=function(e,t,n){try{this.useConsole&&__f__("log","clearMessages"," at rongyunIM\\rongyun.js:7"),this.addon.clearMessages(e,t),n.onSuccess(!0)}catch(a){n.onError(a)}},t.prototype.setUnreadCount=function(e,t,n){},t.prototype.getConversation=function(e,t,n){try{this.useConsole&&__f__("log","getConversation"," at rongyunIM\\rongyun.js:7");var a=this.addon.getConversation(e,t);n.onSuccess(this.buildConversation(a))}catch(l){n.onError(l)}},t.prototype.getConversationList=function(e,t,n,a){this.useConsole&&__f__("log","getConversationList"," at rongyunIM\\rongyun.js:7"),this.getRemoteConversationList(e,t,n,a)},t.prototype.clearCache=function(){var t=e.RongIMClient._memoryStore||{};t.conversationList=[],t.isSyncRemoteConverList},t.prototype.clearConversations=function(e,t){try{this.useConsole&&__f__("log","clearConversations"," at rongyunIM\\rongyun.js:7"),this.addon.clearConversations(),t.onSuccess(!0)}catch(n){t.onError(n)}},t.prototype.setMessageContent=function(e,t,n){t=JSON.stringify(t),this.addon.setMessageContent(e,t,n)},t.prototype.setMessageSearchField=function(e,t,n){t=JSON.stringify(t),this.addon.setMessageContent(e,t,n)},t.prototype.getHistoryMessages=function(t,n,a,l,r,i,o){if(this.useConsole&&__f__("log","getHistoryMessages"," at rongyunIM\\rongyun.js:7"),l<=0)r.onError(e.ErrorCode.TIMEOUT);else{i=i||"",o=void 0===o||o;try{var s=this.addon.getHistoryMessages(t,n,a||0,l,i,o),u=s?JSON.parse(s).list:[],c=[],f=this;u.reverse();for(var g=0,v=u.length;g<v;g++){var b=f.buildMessage(u[g].obj);c[g]=b}r.onSuccess(c,v==l)}catch(h){r.onError(h)}}},t.prototype.clearRemoteHistoryMessages=function(t,n){var a=t.conversationType,l=t.targetId,r=t.timestamp;return{1:!0,2:!0,3:!0,5:!0,6:!0}[a]?"number"!=typeof r?void n.onError(e.ErrorCode.CLEAR_HIS_TIME_ERROR):void this.addon.clearRemoteHistoryMessages(+a,l,r,function(){n.onSuccess(!0)},function(t){1==t&&(t=e.ErrorCode.CLEAR_HIS_ERROR),n.onError(t)}):void n.onError(e.ErrorCode.CLEAR_HIS_TYPE_ERROR)},t.prototype.clearHistoryMessages=function(t,n){var a=+t.conversationType,l=t.targetId;try{this.addon.clearMessages(a,l),n.onSuccess(!0)}catch(f){__f__("log",f," at rongyunIM\\rongyun.js:7"),n.onError(e.ErrorCode.CLEAR_HIS_ERROR)}},t.prototype.getTotalUnreadCount=function(e,t){try{var n;this.useConsole&&__f__("log","getTotalUnreadCount"," at rongyunIM\\rongyun.js:7"),n=t?this.addon.getTotalUnreadCount(t):this.addon.getTotalUnreadCount(),e.onSuccess(n)}catch(a){e.onError(a)}},t.prototype.getConversationUnreadCount=function(e,t){this.useConsole&&__f__("log","getConversationUnreadCount"," at rongyunIM\\rongyun.js:7"),this.getTotalUnreadCount(t,e)},t.prototype.getUnreadCount=function(e,t,n){try{this.useConsole&&__f__("log","getUnreadCount"," at rongyunIM\\rongyun.js:7");var a=this.addon.getUnreadCount(e,t);n.onSuccess(a)}catch(l){n.onError(l)}},t.prototype.clearUnreadCount=function(e,t,n){try{this.useConsole&&__f__("log","clearUnreadCount"," at rongyunIM\\rongyun.js:7"),this.addon.clearUnreadCount(e,t),n.onSuccess(!0)}catch(a){n.onError(a)}},t.prototype.clearTotalUnreadCount=function(e){this.useConsole&&__f__("log","clearTotalUnreadCount"," at rongyunIM\\rongyun.js:7")},t.prototype.clearUnreadCountByTimestamp=function(e,t,n,a){try{this.useConsole&&__f__("log","clearUnreadCountByTimestamp"," at rongyunIM\\rongyun.js:7"),this.addon.clearUnreadCountByTimestamp(e,t,n),a.onSuccess(!0)}catch(l){a.onError(l)}},t.prototype.setConversationToTop=function(e,t,n,a){try{this.useConsole&&__f__("log","setConversationToTop"," at rongyunIM\\rongyun.js:7"),this.addon.setConversationToTop(e,t,n),a.onSuccess(!0)}catch(l){a.onError(l)}},t.prototype.setConversationHidden=function(e,t,n){this.addon.setConversationHidden(e,t,n)},t.prototype.setMessageReceivedStatus=function(e,t,n){try{this.useConsole&&__f__("log","setMessageReceivedStatus"," at rongyunIM\\rongyun.js:7"),this.addon.setMessageReceivedStatus(e,t),n.onSuccess(!0)}catch(a){n.onError(a)}},t.prototype.setMessageSentStatus=function(e,t,n){try{this.useConsole&&__f__("log","setMessageSentStatus"," at rongyunIM\\rongyun.js:7"),this.addon.setMessageSentStatus(e,t),n.onSuccess(!0)}catch(a){n.onError(a)}},t.prototype.getFileToken=function(e,t){this.useConsole&&__f__("log","getFileToken"," at rongyunIM\\rongyun.js:7"),this.addon.getUploadToken(e,function(e){t.onSuccess({token:e})},function(e){t.onError(e)})},t.prototype.getFileUrl=function(e,t,n,a){this.useConsole&&__f__("log","getFileUrl"," at rongyunIM\\rongyun.js:7"),this.addon.getDownloadUrl(e,t,n,function(e){a.onSuccess({downloadUrl:e})},function(e){a.onError(e)})},t.prototype.searchConversationByContent=function(e,t,n){var a=[];a=void 0===n?[1,2,3,4,5,6,7]:n;try{this.useConsole&&__f__("log","searchConversationByContent"," at rongyunIM\\rongyun.js:7");var l=this.addon.searchConversationByContent(a,e),r=JSON.parse(l).list,i=[],o=this;r.reverse();for(var s=0,u=r.length;s<u;s++)i[s]=o.buildConversation(r[s].obj);t.onSuccess(i)}catch(c){t.onError(c)}},t.prototype.searchMessageByContent=function(e,t,n,a,l,r,i){var o=this;try{this.useConsole&&__f__("log","searchMessageByContent"," at rongyunIM\\rongyun.js:7"),this.addon.searchMessageByContent(e,t,n,a,l,r,function(e,t){var n=e?JSON.parse(e).list:[],a=[];n.reverse();for(var l=0,r=n.length;l<r;l++)a[l]=o.buildMessage(n[l].obj);i.onSuccess(a,t)})}catch(s){i.onError(s)}},t.prototype.getChatRoomInfo=function(e,t,n,a){this.useConsole&&__f__("log","getChatRoomInfo"," at rongyunIM\\rongyun.js:7"),this.addon.getChatroomInfo(e,t,n,function(e,t){var n=e?JSON.parse(e).list:[],l={userInfos:[],userTotalNums:t};if(n.length>0)for(var r=0,i=n.length;r<i;r++)l.userInfos.push(JSON.parse(n[r].obj));a.onSuccess(l)},function(e){a.onError(e)})},t.prototype.setChatroomHisMessageTimestamp=function(e,t){},t.prototype.getChatRoomHistoryMessages=function(e,t,n,a){},t.prototype.getDelaTime=function(){return this.addon.getDeltaTime()},t.prototype.getUserStatus=function(t,n){this.addon.getUserStatus(t,function(t){var a=e.RongInnerTools.convertUserStatus({status:t,userId:""});n.onSuccess(a)},function(e){n.onError(e)})},t.prototype.setUserStatus=function(e,t){this.addon.setUserStatus(e,function(){t.onSuccess(!0)},function(e){t.onError(e)})},t.prototype.subscribeUserStatus=function(e,t){this.addon.subscribeUserStatus(e,function(){t&&t.onSuccess(!0)},function(e){t&&t.onError(e)})},t.prototype.setUserStatusListener=function(t,n){this.addon.setOnReceiveStatusListener(function(t,n){var a=e.RongInnerTools.convertUserStatus({userId:t,status:n});e.RongIMClient.userStatusObserver.notify({key:t,entity:a})});var a=t.userIds||[];a.length&&e.RongIMClient._dataAccessProvider.subscribeUserStatus(a)},t.prototype.getUnreadMentionedMessages=function(e,t){for(var n=this,a=JSON.parse(n.addon.getUnreadMentionedMessages(e,t)).list,l=0,r=a.length;l<r;l++){var i=JSON.parse(a[l].obj);i.content=JSON.parse(i.content),a[l]=i}return a},t.prototype.hasRemoteUnreadMessages=function(e,t){t.onSuccess(!1)},t.prototype.sendRecallMessage=function(e,t){var n=this;n.addon.recallMessage("RC:RcCmd",JSON.stringify(e),e.push||"",function(){e.objectName="RC:RcCmd",t.onSuccess(n.buildMessage(JSON.stringify(e)))},function(e){t.onError(e)})},t.prototype.updateMessage=function(e,t){},t.prototype.updateMessages=function(e,t,n,a,l){},t.prototype.reconnect=function(e){},t.prototype.sendReceiptResponse=function(e,t,n){},t.prototype.setMessageExtra=function(e,t,n){},t.prototype.addMemberToDiscussion=function(e,t,n){},t.prototype.createDiscussion=function(e,t,n){},t.prototype.getDiscussion=function(e,t){},t.prototype.quitDiscussion=function(e,t){},t.prototype.removeMemberFromDiscussion=function(e,t,n){},t.prototype.setDiscussionInviteStatus=function(e,t,n){},t.prototype.setDiscussionName=function(e,t,n){},t.prototype.setEnvironment=function(e){this.addon.setEnvironment(e)},t.prototype.addConversation=function(e,t){},t.prototype.updateConversation=function(e){return null},t.prototype.getConversationNotificationStatus=function(t,n){var a=t.conversationType,l=t.targetId,r=e.RongIMClient._memoryStore.notification,i=a+"_"+l,o=r[i];"number"!=typeof o?this.addon.getConversationNotificationStatus(a,l,function(e){r[i]=e,n.onSuccess(e)},function(e){n.onError(e)}):n.onSuccess(o)},t.prototype.setConversationNotificationStatus=function(t,n){var a=t.conversationType,l=t.targetId,r=t.status;e.RongIMClient._memoryStore.notification[a+"_"+l]=r;var i=!!r;this.addon.setConversationNotificationStatus(a,l,i,function(){n.onSuccess(r)},function(e){n.onError(e)})},t.prototype.getCurrentConnectionStatus=function(){return this.addon.getConnectionStatus()},t.prototype.getAgoraDynamicKey=function(e,t,n){this.addon.getVoIPKey(e,t,"",function(e){n.onSuccess(e)},function(e){n.onError(e)})},t.prototype.getPublicServiceProfile=function(t,n,a){var l=e.RongIMClient._memoryStore.publicServiceMap.get(t,n);a.onSuccess(l)},t.prototype.setDeviceInfo=function(e){var t=e.id||"";this.addon.setDeviceId(t)},t.prototype.getRemotePublicServiceList=function(t,n){var a=[],l=this.addon.getAccounts(),r=function(e){var t={hasFollowed:!1,isGlobal:!1,menu:null};if(!e.obj){var n={error:e};throw new Error("å…¬ä¼—è´¦å·æ•°æ®æ ¼å¼é”™è¯¯: "+JSON.stringify(n))}var a=JSON.parse(e.obj),l={aType:"conversationType",aId:"publicServiceId",aName:"introduction",aUri:"portraitUri",follow:"hasFollowed",isGlobal:"isGlobal"};for(var r in a){var i=a[r];if("aExtra"==r){var o=JSON.parse(i);t.hasFollowed=o.follow,t.isGlobal=o.isGlobal,t.menu=o.menu}var s=l[r];s&&(t[s]=i)}return t};if(l){l=JSON.parse(l);for(var i=l.list,o=0,s=i.length;o<s;o++){var u=i[o];u=r(u),a.push(u)}}a.length>0&&(e.RongIMClient._memoryStore.publicServiceMap.publicServiceList.length=0,e.RongIMClient._memoryStore.publicServiceMap.publicServiceList=a),t.onSuccess(e.RongIMClient._memoryStore.publicServiceMap.publicServiceList)},t.prototype.buildMessage=function(t){var n=new e.Message,a=JSON.parse(t);n.conversationType=a.conversationType,n.targetId=a.targetId,n.messageDirection=a.direction,n.senderUserId=a.senderUserId,a.direction==e.MessageDirection.RECEIVE?n.receivedStatus=a.status:a.direction==e.MessageDirection.SEND&&(n.sentStatus=a.status),n.sentTime=a.sentTime,n.objectName=a.objectName;var l=a.content?JSON.parse(a.content):a.content,r=typeMapping[a.objectName]||registerMessageTypeMapping[a.objectName];return l&&(l.messageName=r),n.content=l,n.messageId=a.messageId,n.messageUId=a.messageUid,n.messageType=r,n},t.prototype.buildConversation=function(t){if(""===t)return null;var n=new e.Conversation,a=JSON.parse(t),l=a.lastestMsg?this.buildMessage(a.lastestMsg):{};n.conversationTitle=a.title,n.conversationType=a.conversationType,n.draft=a.draft,n.isTop=a.isTop,n.isHidden=a.isHidden,l.conversationType=a.conversationType,l.targetId=a.targetId,n.latestMessage=l,n.latestMessageId=l.messageId,n.latestMessage.messageType=typeMapping[l.objectName]||registerMessageTypeMapping[l.objectName],n.objectName=l.objectName,n.receivedStatus=e.ReceivedStatus.READ,n.sentTime=l.sentTime,n.senderUserId=l.senderUserId,n.sentStatus=l.status,n.targetId=a.targetId,n.unreadMessageCount=a.unreadCount,n.hasUnreadMention=a.m_hasUnreadMention;var r=this.getUnreadMentionedMessages(a.conversationType,a.targetId);if(r.length>0){var i=r.pop();n.mentionedMsg={uid:i.messageUid,time:i.sentTime,mentionedInfo:i.content.mentionedInfo,sendUserId:i.senderUserId}}return n},t.prototype.getRTCUserInfoList=function(e,t){},t.prototype.setRTCUserInfo=function(e,t,n){},t.prototype.removeRTCUserInfo=function(e,t,n){},t.prototype.getRTCUserList=function(e,t){},t.prototype.getRTCRoomInfo=function(e,t){},t.prototype.setRTCRoomInfo=function(e,t,n){},t.prototype.removeRTCRoomInfo=function(e,t,n){},t.prototype.joinRTCRoom=function(e,t){},t.prototype.quitRTCRoom=function(e,t){},t.prototype.RTCPing=function(e,t){},t.prototype.setRTCUserData=function(e,t,n,a,l,r){},t.prototype.getRTCUserData=function(e,t,n,a,l){},t.prototype.removeRTCUserData=function(e,t,n,a,l){},t.prototype.setRTCRoomData=function(e,t,n,a,l,r){},t.prototype.getRTCRoomData=function(e,t,n,a,l){},t.prototype.removeRTCRoomData=function(e,t,n,a,l){},t.prototype.getNavi=function(){},t.prototype.getRTCToken=function(e,t){},t}();e.VCDataProvider=t}(RongIMLib||(RongIMLib={})),function(e){var t=function(){function e(){this._memeoryStore={},this.prefix="rong_"}return e.prototype.setItem=function(e,t){this._memeoryStore[e]=decodeURIComponent(t)},e.prototype.getItem=function(e){return this._memeoryStore[e]},e.prototype.removeItem=function(e){this.getItem(e)&&delete this._memeoryStore[e]},e.prototype.getItemKey=function(e){var t=this,n=null,a=new RegExp(e+"\\w+");for(var l in t._memeoryStore)l.match(a)&&(n=l);return n},e.prototype.getItemKeyList=function(e){var t=this.prefix,n=this,a=[],l=new RegExp(e+"\\w+");for(var r in n._memeoryStore)r.match(l)&&(r=r.substring(t.length),a.push(r));return a},e.prototype.clearItem=function(){var e=this;for(var t in e._memeoryStore)delete e._memeoryStore[t]},e.prototype.onOutOfQuota=function(){return 4096},e}();e.MemeoryProvider=t}(RongIMLib||(RongIMLib={})),function(e){var t=function(){function t(){this.prefix="rong_",this._host="";var t=new Date,n=t.getMonth()+1,a=t.getFullYear()+"/"+(1==n.toString().length?"0"+n:n)+"/"+t.getDate(),l=new Date(a).getTime();for(var r in localStorage){if(r.lastIndexOf("RECEIVED")>-1){var i=JSON.parse(localStorage.getItem(r));for(var o in i)l-i[o].dealtime>0&&delete i[o];e.RongUtil.isEmpty(i)?localStorage.removeItem(r):localStorage.setItem(r,JSON.stringify(i))}r.lastIndexOf("SENT")>-1&&l-JSON.parse(localStorage.getItem(r)).dealtime>0&&localStorage.removeItem(r)}}return t.prototype.setItem=function(e,t){e&&(-1==e.indexOf(this.prefix)&&(e=this.prefix+e),localStorage.setItem(e,t))},t.prototype.getItem=function(e){return e?(-1==e.indexOf(this.prefix)&&(e=this.prefix+e),localStorage.getItem(e||"")):""},t.prototype.getItemKey=function(e){var t="",n=this.prefix+e;for(var a in localStorage)if(0==a.indexOf(n)){t=a;break}return t},t.prototype.getItemKeyList=function(e){var t=[],n=this.prefix,a=n+e;for(var l in localStorage)0==l.indexOf(a)&&(l=l.substring(n.length),t.push(l));return t},t.prototype.removeItem=function(e){e&&(-1==e.indexOf(this.prefix)&&(e=this.prefix+e),localStorage.removeItem(e.toString()))},t.prototype.clearItem=function(){var e=this;for(var t in localStorage)t.indexOf(e.prefix)>-1&&e.removeItem(t)},t.prototype.onOutOfQuota=function(){return JSON.stringify(localStorage).length},t}();e.LocalStorageProvider=t}(RongIMLib||(RongIMLib={})),function(e){var t=function(){function e(){this.opersistName="RongIMLib",this.keyManager="RongUserDataKeyManager",this._host="",this.prefix="rong_",this.oPersist=document.createElement("div"),this.oPersist.style.display="none",this.oPersist.style.behavior="url('#default#userData')",document.body.appendChild(this.oPersist),this.oPersist.load(this.opersistName)}return e.prototype.setItem=function(e,t){e&&-1==e.indexOf(this.prefix)&&(e=this.prefix+e),this.oPersist.setAttribute(e,t);var n=this.getItem(this.keyManager);n?-1==n.indexOf(e)&&(n+=","+e):n=e,this.oPersist.setAttribute(this.prefix+this.keyManager,n),this.oPersist.save(this.opersistName)},e.prototype.getItem=function(e){return e&&-1==e.indexOf(this.prefix)&&(e=this.prefix+e),e?this.oPersist.getAttribute(e):e},e.prototype.removeItem=function(e){e&&-1==e.indexOf(this.prefix)&&(e=this.prefix+e),this.oPersist.removeAttribute(e),this.oPersist.save(this.opersistName);for(var t=this.getItem(this.keyManager),n=t&&t.split(",")||[],a=0,l=n.length;a<l;a++)n[a]==e&&n.splice(a,1);this.oPersist.setAttribute(this.prefix+this.keyManager,n.join(",")),this.oPersist.save(this.opersistName)},e.prototype.getItemKey=function(e){var t=null,n=this.getItem(this.keyManager),a=n&&n.split(",")||[],l=this.prefix+e;if(a.length)for(var r=0,i=a.length;r<i;r++)if(a[r]&&0==a[r].indexOf(l)){t=a[r];break}return t},e.prototype.getItemKeyList=function(e){var t=[],n=this.getItem(this.keyManager),a=n&&n.split(",")||[],l=this.prefix,r=l+e;if(a.length)for(var i=0,o=a.length;i<o;i++)if(a[i]&&0==a[i].indexOf(r)){var s=a[i];s=s.substring(l.length),t.push(a[i])}return t},e.prototype.clearItem=function(){var e=this.getItem(this.keyManager),t=[],n=this;if(e&&(t=e.split(",")),t.length){for(var a=0,l=t.length;a<l;a++)t[a]&&n.removeItem(t[a]);n.removeItem(n.keyManager)}},e.prototype.onOutOfQuota=function(){return 10485760},e}();e.UserDataProvider=t}(RongIMLib||(RongIMLib={})),function(e){var t=function(){function t(t){if(this.script=document.createElement("script"),this.head=document.getElementsByTagName("head")[0],"WebSocket"in window&&"ArrayBuffer"in window&&3===WebSocket.prototype.CLOSED&&!e.RongIMClient._memoryStore.depend.isPolling){if(e.Transportations._TransportType=e.Socket.WEBSOCKET,!e.RongIMClient.Protobuf){var n=e.RongIMClient._memoryStore.depend.protobuf,a=this.script;a.src=n,this.head.appendChild(a),a.onload=a.onreadystatechange=function(){if(!(this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(a.onload=a.onreadystatechange=null,t&&t(),t))){var n=e.RongIMClient._memoryStore.token,l=e.RongIMClient._memoryStore.callback;n&&e.RongIMClient.connect(n,l)}}}}else e.Transportations._TransportType="xhr-polling",e.RongIMClient.Protobuf=Polling}return t}();e.FeatureDectector=t}(RongIMLib||(RongIMLib={})),function(RongIMLib){var FeaturePatcher=function(){function FeaturePatcher(){}return FeaturePatcher.prototype.patchAll=function(){this.patchJSON(),this.patchForEach()},FeaturePatcher.prototype.patchForEach=function(){Array.forEach||(Array.forEach=function(e,t){for(var n=0;n<e.length;n++)t.call(e,e[n],n,e)})},FeaturePatcher.prototype.patchJSON=function(){window.JSON||(window.JSON=function(){function JSON(){}return JSON.parse=function(sJSON){return eval("("+sJSON+")")},JSON.stringify=function(e){return this.str("",{"":e})},JSON.str=function(e,t){var n,a,l,r,i,o=t[e],s=this;switch(o&&"object"==typeof o&&"function"==typeof o.toJSON&&(o=o.toJSON(e)),typeof o){case"string":return s.quote(o);case"number":return isFinite(o)?String(o):"null";case"boolean":case"null":return String(o);case"object":if(!o)return"null";if(i=[],"[object Array]"===Object.prototype.toString.apply(o)){for(r=o.length,n=0;n<r;n+=1)i[n]=s.str(n,o)||"null";return 0===i.length?"[]":"["+i.join(",")+"]"}for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(l=s.str(a,o))&&i.push(s.quote(a)+":"+l);return 0===i.length?"{}":"{"+i.join(",")+"}"}},JSON.quote=function(e){var t=this;return t.rx_escapable.lastIndex=0,t.rx_escapable.test(e)?'"'+e.replace(t.rx_escapable,function(e){var n=t.meta[e];return"string"==typeof n?n:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'},JSON.rx_escapable=new RegExp('[\\"\\\\"\0--ÂŸÂ­Ø€-Ø„Üáž´ážµâ€Œ-â€\u2028-â€¯â -â¯\ufeffï¿°-ï¿¿]',"g"),JSON.meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"''":"\\''","\\":"\\\\"},JSON}())},FeaturePatcher}();RongIMLib.FeaturePatcher=FeaturePatcher}(RongIMLib||(RongIMLib={})),function(e){!function(){function e(){}e.prototype.load=function(e,t,n){var a=document.createElement("script");a.async=!0,t&&(a.addEventListener?a.addEventListener("load",function(e){var n=e.target||e.srcElement;t(n.src)},!1):a.readyState&&(a.onreadystatechange=function(e){var n=e.srcElement;t(n.src)})),n&&(a.onerror=function(e){var t=e.target||e.srcElement;n(t.src)}),(document.head||document.getElementsByTagName("head")[0]).appendChild(a),a.src=e}}()}(RongIMLib||(RongIMLib={})),function(e){var t=function(){function e(){this.publicServiceList=[]}return e.prototype.get=function(e,t){for(var n=0,a=this.publicServiceList.length;n<a;n++)if(this.publicServiceList[n].conversationType==e&&t==this.publicServiceList[n].publicServiceId)return this.publicServiceList[n]},e.prototype.add=function(e){for(var t=!0,n=this,a=0,l=this.publicServiceList.length;a<l;a++)if(n.publicServiceList[a].conversationType==e.conversationType&&e.publicServiceId==n.publicServiceList[a].publicServiceId){this.publicServiceList.unshift(this.publicServiceList.splice(a,1)[0]),t=!1;break}t&&this.publicServiceList.unshift(e)},e.prototype.replace=function(e){for(var t=this,n=0,a=this.publicServiceList.length;n<a;n++)if(t.publicServiceList[n].conversationType==e.conversationType&&e.publicServiceId==t.publicServiceList[n].publicServiceId){t.publicServiceList.splice(n,1,e);break}},e.prototype.remove=function(e,t){for(var n=this,a=0,l=this.publicServiceList.length;a<l;a++)if(n.publicServiceList[a].conversationType==e&&t==n.publicServiceList[a].publicServiceId){this.publicServiceList.splice(a,1);break}},e}();e.PublicServiceMap=t;var n=function(){function e(){this.conversationList=[]}return e.prototype.get=function(e,t){for(var n=0,a=this.conversationList.length;n<a;n++)if(this.conversationList[n].conversationType==e&&this.conversationList[n].targetId==t)return this.conversationList[n];return null},e.prototype.add=function(e){for(var t=!0,n=0,a=this.conversationList.length;n<a;n++)if(this.conversationList[n].conversationType===e.conversationType&&this.conversationList[n].targetId===e.targetId){this.conversationList.unshift(this.conversationList.splice(n,1)[0]),t=!1;break}t&&this.conversationList.unshift(e)},e.prototype.replace=function(e){for(var t=0,n=this.conversationList.length;t<n;t++)if(this.conversationList[t].conversationType===e.conversationType&&this.conversationList[t].targetId===e.targetId){this.conversationList.splice(t,1,e);break}},e.prototype.remove=function(e){for(var t=0,n=this.conversationList.length;t<n;t++)if(this.conversationList[t].conversationType===e.conversationType&&this.conversationList[t].targetId===e.targetId){this.conversationList.splice(t,1);break}},e}();e.ConversationMap=n;var a=function(){function t(){}return t.getInstance=function(){return t._instance||(t._instance=new t),t._instance},t.prototype.logger=function(t,n,a){e.RongIMClient.logger({code:t,funcName:n,msg:a})},t.prototype.check=function(t,n,a,l){if(e.RongIMClient._dataAccessProvider||a){for(var r=0,i=l.length;r<i;r++)if(!new RegExp(this.getType(l[r])).test(t[r])){var o="ç¬¬"+(r+1)+"ä¸ªå‚æ•°é”™è¯¯, é”™è¯¯ç±»åž‹ï¼š"+this.getType(l[r])+" ["+t[r]+"] -> ä½ç½®:"+n;this.logger("-3",n,o)}}else{o="è¯¥å‚æ•°ä¸æ­£ç¡®æˆ–å°šæœªå®žä¾‹åŒ–RongIMClient -> ä½ç½®:"+n;this.logger("-4",n,o)}},t.prototype.getType=function(e){var t=Object.prototype.toString.call(e).toLowerCase();return t.slice(8,t.length-1)},t.prototype.checkCookieDisable=function(){document.cookie="checkCookie=1";var e=document.cookie.match(new RegExp("(^| )checkCookie=([^;]*)(;|$)")),t=!1;return e||(t=!0),document.cookie="checkCookie=1;expires=Thu, 01-Jan-1970 00:00:01 GMT",t},t}();e.CheckParam=a;var l=function(){function e(e){this.map={},this.keys=[],this.limit=e||10}return e.prototype.set=function(e,t){this.map[e]=t},e.prototype.get=function(e){return this.map[e]||0},e.prototype.remove=function(e){delete this.map[e]},e}();e.LimitableMap=l;var r=function(){function e(){this.cache={}}return e.prototype.set=function(e,t){this.cache[e]=t},e.prototype.get=function(e){return this.cache[e]},e.prototype.remove=function(e){delete this.cache[e]},e}();e.MemoryCache=r;var i=function(){function e(e){var t=this;t.xmlhttp=null,t.options=e;var n="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest;"undefined"!=typeof XMLHttpRequest&&n?t.xmlhttp=new XMLHttpRequest:"undefined"!=typeof XDomainRequest?t.xmlhttp=new XDomainRequest:t.xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")}return e.prototype.send=function(e){var t=this;t.options.url||(t.options.url="http://upload.qiniu.com/putb64/-1"),t.xmlhttp.onreadystatechange=function(){4==t.xmlhttp.readyState&&(t.options.type?e():e(JSON.parse(t.xmlhttp.responseText.replace(/'/g,'"'))))},t.xmlhttp.open("POST",t.options.url,!0),t.xmlhttp.withCredentials=!1,"setRequestHeader"in t.xmlhttp&&(t.options.type?t.xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=utf-8"):(t.xmlhttp.setRequestHeader("Content-type","application/octet-stream"),t.xmlhttp.setRequestHeader("Authorization","UpToken "+t.options.token))),t.xmlhttp.send(t.options.type?"appKey="+t.options.appKey+"&deviceId="+t.options.deviceId+"&timestamp="+t.options.timestamp+"&deviceInfo="+t.options.deviceInfo+"&privateInfo="+JSON.stringify(t.options.privateInfo):t.options.base64)},e}();e.RongAjax=i;var o=function(){function e(){}return e.noop=function(){},e.isEmpty=function(e){var t=!0;for(var n in e){t=!1;break}return t},e.MD5=function(e,t,n){return md5(e,t,n)},e.isObject=function(e){return"[object Object]"==Object.prototype.toString.call(e)},e.isArray=function(e){return"[object Array]"==Object.prototype.toString.call(e)},e.isString=function(e){return"[object String]"==Object.prototype.toString.call(e)},e.isFunction=function(e){return"[object Function]"==Object.prototype.toString.call(e)},e.isUndefined=function(e){return"[object Undefined]"==Object.prototype.toString.call(e)},e.isEqual=function(e,t){return e===t},e.indexOf=function(e,t){for(var n=-1,a=0;a<e.length;a++)if(t===e[a]){n=a;break}return n},e.stringFormat=function(e,t){for(var n=0,a=t.length;n<a;n++){var l=t[n],r=new RegExp("\\{"+n+"\\}","g");e=e.replace(r,l)}return e},e.tplEngine=function(e,t,n){function a(t){return e.replace(n||/{([^}]+)}/g,function(e,n){return"\\"==e.charAt(0)?e.slice(1):void 0!=t[n]?t[n]:"{"+n+"}"})}"[object Array]"!==Object.prototype.toString.call(t)&&(t=[t]);for(var l=[],r=0,i=t.length;r<i;r++)l.push(a(t[r]));return l.join("")},e.forEach=function(t,n){n=n||e.noop;var a=function(){for(var e in t)t.hasOwnProperty(e)&&n(t[e],e,t)},l=function(){for(var e=0,a=t.length;e<a;e++)n(t[e],e)};e.isObject(t)&&a(),e.isArray(t)&&l()},e.extend=function(t,n,a,l){return e.forEach(t,function(e,t){var a=t in n;l&&a&&(n[t]=e),a||(n[t]=e)}),n},e.createXHR=function(){var e={XMLHttpRequest:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return new XMLHttpRequest}),XDomainRequest:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return new XDomainRequest}),ActiveXObject:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return new ActiveXObject("Microsoft.XMLHTTP")})},t="function"==typeof XMLHttpRequest,n="function"==typeof XDomainRequest;return e[t?"XMLHttpRequest":n?"XDomainRequest":"ActiveXObject"]()},e.request=function(t){var n=t.url,a=t.success,l=t.error,r=t.method||"GET",i=e.createXHR();return i.onreadystatechange=function(){if(4==i.readyState){var e=i.status;200==e?a(i.responseText):l(e,i.responseText)}},i.open(r,n,!0),i.send(null),i},e.formatProtoclPath=function(t){var n=t.path,a=t.protocol,l=t.tmpl||"{0}{1}",r=t.sub,i="://",o=n.indexOf(i);return o>-1&&(o+=i.length,n=n.substring(o)),r&&(o=n.indexOf("/"))>-1&&(n=n.substr(0,o)),e.stringFormat(l,[a,n])},e.supportLocalStorage=function(){var e=!1;if("object"==typeof localStorage)try{var t="RC_TMP_KEY",n="RC_TMP_VAL";localStorage.setItem(t,n),localStorage.getItem(t)==n&&(e=!0)}catch(a){__f__("log","localStorage is disabled."," at rongyunIM\\rongyun.js:8")}return e},e.rename=function(t,n){var a=e.isObject(t);a&&(t=[t]),t=JSON.parse(JSON.stringify(t));var l=function(e,t,a){delete a[t],t=n[t],a[t]=e};return e.forEach(t,function(t){e.forEach(t,function(t,a,r){(a in n?l:e.noop)(t,a,r)})}),a?t[0]:t},e.some=function(e,t){for(var n=!1,a=0,l=e.length;a<l;a++)if(t(e[a])){n=!0;break}return n},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t},e.isNumber=function(e){return"[object Number]"==Object.prototype.toString.call(e)},e.getTimestamp=function(){return(new Date).getTime()},e}();e.RongUtil=o;var s=function(){function e(){this.watchers={}}return e.prototype.genUId=function(e){return[e,(new Date).getTime()].join("_")},e.prototype.watch=function(e){var t=this,n=e.key,a=e.multiple;n=o.isArray(n)?n:[n];var l=e.func;o.forEach(n,function(e){e=a?t.genUId(e):e,t.watchers[e]=l})},e.prototype.notify=function(e){var t=this,n=e.key,a=e.entity;for(var l in t.watchers)0==l.indexOf(n)&&t.watchers[l](a)},e.prototype.remove=function(){},e}();e.RongObserver=s;var u=function(){function e(e){this.timeout=0,this.timers=[],this.timeout=e.timeout}return e.prototype.resume=function(e){var t=setTimeout(e,this.timeout);this.timers.push(t)},e.prototype.pause=function(){o.forEach(this.timers,function(e){clearTimeout(e)})},e}();e.Timer=u;var c=function(){function e(e){this.items=[],this.index=0,this.onwheel=function(){},this.items=e.items,this.onwheel=e.onwheel}return e.prototype.get=function(){var e=this,t=e.items,n=e.index,a=n>=t.length;return a&&e.onwheel(),a?0:n},e.prototype.add=function(){this.index+=1},e}();e.IndexTools=c;var f=function(){function e(){}return e.getUId=function(e){return md5(e).slice(8,16)},e}();e.InnerUtil=f}(RongIMLib||(RongIMLib={})),RongIMLib})}).call(this,__webpack_require__("0de9")["default"])},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(a){"object"===typeof window&&(n=window)}e.exports=n},d2e9:function(e,t,n){"use strict";(function(e){}).call(this,n("0de9")["default"])},d5db:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[{label:"北京市",value:"11"},{label:"天津市",value:"12"},{label:"河北省",value:"13"},{label:"山西省",value:"14"},{label:"内蒙古自治区",value:"15"},{label:"辽宁省",value:"21"},{label:"吉林省",value:"22"},{label:"黑龙江省",value:"23"},{label:"上海市",value:"31"},{label:"江苏省",value:"32"},{label:"浙江省",value:"33"},{label:"安徽省",value:"34"},{label:"福建省",value:"35"},{label:"江西省",value:"36"},{label:"山东省",value:"37"},{label:"河南省",value:"41"},{label:"湖北省",value:"42"},{label:"湖南省",value:"43"},{label:"广东省",value:"44"},{label:"广西壮族自治区",value:"45"},{label:"海南省",value:"46"},{label:"重庆市",value:"50"},{label:"四川省",value:"51"},{label:"贵州省",value:"52"},{label:"云南省",value:"53"},{label:"西藏自治区",value:"54"},{label:"陕西省",value:"61"},{label:"甘肃省",value:"62"},{label:"青海省",value:"63"},{label:"宁夏回族自治区",value:"64"},{label:"新疆维吾尔自治区",value:"65"},{label:"台湾",value:"66"},{label:"香港",value:"67"},{label:"澳门",value:"68"}],l=a;t.default=l},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,a=e.length-1;a>=0;a--){var l=e[a];"."===l?e.splice(a,1):".."===l?(e.splice(a,1),n++):n&&(e.splice(a,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,l=function(e){return a.exec(e).slice(1)};function r(e,t){if(e.filter)return e.filter(t);for(var n=[],a=0;a<e.length;a++)t(e[a],a,e)&&n.push(e[a]);return n}t.resolve=function(){for(var t="",a=!1,l=arguments.length-1;l>=-1&&!a;l--){var i=l>=0?arguments[l]:e.cwd();if("string"!==typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,a="/"===i.charAt(0))}return t=n(r(t.split("/"),function(e){return!!e}),!a).join("/"),(a?"/":"")+t||"."},t.normalize=function(e){var a=t.isAbsolute(e),l="/"===i(e,-1);return e=n(r(e.split("/"),function(e){return!!e}),!a).join("/"),e||a||(e="."),e&&l&&(e+="/"),(a?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,n){function a(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var l=a(e.split("/")),r=a(n.split("/")),i=Math.min(l.length,r.length),o=i,s=0;s<i;s++)if(l[s]!==r[s]){o=s;break}var u=[];for(s=o;s<l.length;s++)u.push("..");return u=u.concat(r.slice(o)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=l(e),n=t[0],a=t[1];return n||a?(a&&(a=a.substr(0,a.length-1)),n+a):"."},t.basename=function(e,t){var n=l(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){return l(e)[3]};var i="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e4ab:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[[[{label:"东城区",value:"110101"},{label:"西城区",value:"110102"},{label:"朝阳区",value:"110105"},{label:"丰台区",value:"110106"},{label:"石景山区",value:"110107"},{label:"海淀区",value:"110108"},{label:"门头沟区",value:"110109"},{label:"房山区",value:"110111"},{label:"通州区",value:"110112"},{label:"顺义区",value:"110113"},{label:"昌平区",value:"110114"},{label:"大兴区",value:"110115"},{label:"怀柔区",value:"110116"},{label:"平谷区",value:"110117"},{label:"密云区",value:"110118"},{label:"延庆区",value:"110119"}]],[[{label:"和平区",value:"120101"},{label:"河东区",value:"120102"},{label:"河西区",value:"120103"},{label:"南开区",value:"120104"},{label:"河北区",value:"120105"},{label:"红桥区",value:"120106"},{label:"东丽区",value:"120110"},{label:"西青区",value:"120111"},{label:"津南区",value:"120112"},{label:"北辰区",value:"120113"},{label:"武清区",value:"120114"},{label:"宝坻区",value:"120115"},{label:"滨海新区",value:"120116"},{label:"宁河区",value:"120117"},{label:"静海区",value:"120118"},{label:"蓟州区",value:"120119"}]],[[{label:"长安区",value:"130102"},{label:"桥西区",value:"130104"},{label:"新华区",value:"130105"},{label:"井陉矿区",value:"130107"},{label:"裕华区",value:"130108"},{label:"藁城区",value:"130109"},{label:"鹿泉区",value:"130110"},{label:"栾城区",value:"130111"},{label:"井陉县",value:"130121"},{label:"正定县",value:"130123"},{label:"行唐县",value:"130125"},{label:"灵寿县",value:"130126"},{label:"高邑县",value:"130127"},{label:"深泽县",value:"130128"},{label:"赞皇县",value:"130129"},{label:"无极县",value:"130130"},{label:"平山县",value:"130131"},{label:"元氏县",value:"130132"},{label:"赵县",value:"130133"},{label:"石家庄高新技术产业开发区",value:"130171"},{label:"石家庄循环化工园区",value:"130172"},{label:"辛集市",value:"130181"},{label:"晋州市",value:"130183"},{label:"新乐市",value:"130184"}],[{label:"路南区",value:"130202"},{label:"路北区",value:"130203"},{label:"古冶区",value:"130204"},{label:"开平区",value:"130205"},{label:"丰南区",value:"130207"},{label:"丰润区",value:"130208"},{label:"曹妃甸区",value:"130209"},{label:"滦县",value:"130223"},{label:"滦南县",value:"130224"},{label:"乐亭县",value:"130225"},{label:"迁西县",value:"130227"},{label:"玉田县",value:"130229"},{label:"唐山市芦台经济技术开发区",value:"130271"},{label:"唐山市汉沽管理区",value:"130272"},{label:"唐山高新技术产业开发区",value:"130273"},{label:"河北唐山海港经济开发区",value:"130274"},{label:"遵化市",value:"130281"},{label:"迁安市",value:"130283"}],[{label:"海港区",value:"130302"},{label:"山海关区",value:"130303"},{label:"北戴河区",value:"130304"},{label:"抚宁区",value:"130306"},{label:"青龙满族自治县",value:"130321"},{label:"昌黎县",value:"130322"},{label:"卢龙县",value:"130324"},{label:"秦皇岛市经济技术开发区",value:"130371"},{label:"北戴河新区",value:"130372"}],[{label:"邯山区",value:"130402"},{label:"丛台区",value:"130403"},{label:"复兴区",value:"130404"},{label:"峰峰矿区",value:"130406"},{label:"肥乡区",value:"130407"},{label:"永年区",value:"130408"},{label:"临漳县",value:"130423"},{label:"成安县",value:"130424"},{label:"大名县",value:"130425"},{label:"涉县",value:"130426"},{label:"磁县",value:"130427"},{label:"邱县",value:"130430"},{label:"鸡泽县",value:"130431"},{label:"广平县",value:"130432"},{label:"馆陶县",value:"130433"},{label:"魏县",value:"130434"},{label:"曲周县",value:"130435"},{label:"邯郸经济技术开发区",value:"130471"},{label:"邯郸冀南新区",value:"130473"},{label:"武安市",value:"130481"}],[{label:"桥东区",value:"130502"},{label:"桥西区",value:"130503"},{label:"邢台县",value:"130521"},{label:"临城县",value:"130522"},{label:"内丘县",value:"130523"},{label:"柏乡县",value:"130524"},{label:"隆尧县",value:"130525"},{label:"任县",value:"130526"},{label:"南和县",value:"130527"},{label:"宁晋县",value:"130528"},{label:"巨鹿县",value:"130529"},{label:"新河县",value:"130530"},{label:"广宗县",value:"130531"},{label:"平乡县",value:"130532"},{label:"威县",value:"130533"},{label:"清河县",value:"130534"},{label:"临西县",value:"130535"},{label:"河北邢台经济开发区",value:"130571"},{label:"南宫市",value:"130581"},{label:"沙河市",value:"130582"}],[{label:"竞秀区",value:"130602"},{label:"莲池区",value:"130606"},{label:"满城区",value:"130607"},{label:"清苑区",value:"130608"},{label:"徐水区",value:"130609"},{label:"涞水县",value:"130623"},{label:"阜平县",value:"130624"},{label:"定兴县",value:"130626"},{label:"唐县",value:"130627"},{label:"高阳县",value:"130628"},{label:"容城县",value:"130629"},{label:"涞源县",value:"130630"},{label:"望都县",value:"130631"},{label:"安新县",value:"130632"},{label:"易县",value:"130633"},{label:"曲阳县",value:"130634"},{label:"蠡县",value:"130635"},{label:"顺平县",value:"130636"},{label:"博野县",value:"130637"},{label:"雄县",value:"130638"},{label:"保定高新技术产业开发区",value:"130671"},{label:"保定白沟新城",value:"130672"},{label:"涿州市",value:"130681"},{label:"定州市",value:"130682"},{label:"安国市",value:"130683"},{label:"高碑店市",value:"130684"}],[{label:"桥东区",value:"130702"},{label:"桥西区",value:"130703"},{label:"宣化区",value:"130705"},{label:"下花园区",value:"130706"},{label:"万全区",value:"130708"},{label:"崇礼区",value:"130709"},{label:"张北县",value:"130722"},{label:"康保县",value:"130723"},{label:"沽源县",value:"130724"},{label:"尚义县",value:"130725"},{label:"蔚县",value:"130726"},{label:"阳原县",value:"130727"},{label:"怀安县",value:"130728"},{label:"怀来县",value:"130730"},{label:"涿鹿县",value:"130731"},{label:"赤城县",value:"130732"},{label:"张家口市高新技术产业开发区",value:"130771"},{label:"张家口市察北管理区",value:"130772"},{label:"张家口市塞北管理区",value:"130773"}],[{label:"双桥区",value:"130802"},{label:"双滦区",value:"130803"},{label:"鹰手营子矿区",value:"130804"},{label:"承德县",value:"130821"},{label:"兴隆县",value:"130822"},{label:"滦平县",value:"130824"},{label:"隆化县",value:"130825"},{label:"丰宁满族自治县",value:"130826"},{label:"宽城满族自治县",value:"130827"},{label:"围场满族蒙古族自治县",value:"130828"},{label:"承德高新技术产业开发区",value:"130871"},{label:"平泉市",value:"130881"}],[{label:"新华区",value:"130902"},{label:"运河区",value:"130903"},{label:"沧县",value:"130921"},{label:"青县",value:"130922"},{label:"东光县",value:"130923"},{label:"海兴县",value:"130924"},{label:"盐山县",value:"130925"},{label:"肃宁县",value:"130926"},{label:"南皮县",value:"130927"},{label:"吴桥县",value:"130928"},{label:"献县",value:"130929"},{label:"孟村回族自治县",value:"130930"},{label:"河北沧州经济开发区",value:"130971"},{label:"沧州高新技术产业开发区",value:"130972"},{label:"沧州渤海新区",value:"130973"},{label:"泊头市",value:"130981"},{label:"任丘市",value:"130982"},{label:"黄骅市",value:"130983"},{label:"河间市",value:"130984"}],[{label:"安次区",value:"131002"},{label:"广阳区",value:"131003"},{label:"固安县",value:"131022"},{label:"永清县",value:"131023"},{label:"香河县",value:"131024"},{label:"大城县",value:"131025"},{label:"文安县",value:"131026"},{label:"大厂回族自治县",value:"131028"},{label:"廊坊经济技术开发区",value:"131071"},{label:"霸州市",value:"131081"},{label:"三河市",value:"131082"}],[{label:"桃城区",value:"131102"},{label:"冀州区",value:"131103"},{label:"枣强县",value:"131121"},{label:"武邑县",value:"131122"},{label:"武强县",value:"131123"},{label:"饶阳县",value:"131124"},{label:"安平县",value:"131125"},{label:"故城县",value:"131126"},{label:"景县",value:"131127"},{label:"阜城县",value:"131128"},{label:"河北衡水经济开发区",value:"131171"},{label:"衡水滨湖新区",value:"131172"},{label:"深州市",value:"131182"}]],[[{label:"小店区",value:"140105"},{label:"迎泽区",value:"140106"},{label:"杏花岭区",value:"140107"},{label:"尖草坪区",value:"140108"},{label:"万柏林区",value:"140109"},{label:"晋源区",value:"140110"},{label:"清徐县",value:"140121"},{label:"阳曲县",value:"140122"},{label:"娄烦县",value:"140123"},{label:"山西转型综合改革示范区",value:"140171"},{label:"古交市",value:"140181"}],[{label:"城区",value:"140202"},{label:"矿区",value:"140203"},{label:"南郊区",value:"140211"},{label:"新荣区",value:"140212"},{label:"阳高县",value:"140221"},{label:"天镇县",value:"140222"},{label:"广灵县",value:"140223"},{label:"灵丘县",value:"140224"},{label:"浑源县",value:"140225"},{label:"左云县",value:"140226"},{label:"大同县",value:"140227"},{label:"山西大同经济开发区",value:"140271"}],[{label:"城区",value:"140302"},{label:"矿区",value:"140303"},{label:"郊区",value:"140311"},{label:"平定县",value:"140321"},{label:"盂县",value:"140322"},{label:"山西阳泉经济开发区",value:"140371"}],[{label:"城区",value:"140402"},{label:"郊区",value:"140411"},{label:"长治县",value:"140421"},{label:"襄垣县",value:"140423"},{label:"屯留县",value:"140424"},{label:"平顺县",value:"140425"},{label:"黎城县",value:"140426"},{label:"壶关县",value:"140427"},{label:"长子县",value:"140428"},{label:"武乡县",value:"140429"},{label:"沁县",value:"140430"},{label:"沁源县",value:"140431"},{label:"山西长治高新技术产业园区",value:"140471"},{label:"潞城市",value:"140481"}],[{label:"城区",value:"140502"},{label:"沁水县",value:"140521"},{label:"阳城县",value:"140522"},{label:"陵川县",value:"140524"},{label:"泽州县",value:"140525"},{label:"高平市",value:"140581"}],[{label:"朔城区",value:"140602"},{label:"平鲁区",value:"140603"},{label:"山阴县",value:"140621"},{label:"应县",value:"140622"},{label:"右玉县",value:"140623"},{label:"怀仁县",value:"140624"},{label:"山西朔州经济开发区",value:"140671"}],[{label:"榆次区",value:"140702"},{label:"榆社县",value:"140721"},{label:"左权县",value:"140722"},{label:"和顺县",value:"140723"},{label:"昔阳县",value:"140724"},{label:"寿阳县",value:"140725"},{label:"太谷县",value:"140726"},{label:"祁县",value:"140727"},{label:"平遥县",value:"140728"},{label:"灵石县",value:"140729"},{label:"介休市",value:"140781"}],[{label:"盐湖区",value:"140802"},{label:"临猗县",value:"140821"},{label:"万荣县",value:"140822"},{label:"闻喜县",value:"140823"},{label:"稷山县",value:"140824"},{label:"新绛县",value:"140825"},{label:"绛县",value:"140826"},{label:"垣曲县",value:"140827"},{label:"夏县",value:"140828"},{label:"平陆县",value:"140829"},{label:"芮城县",value:"140830"},{label:"永济市",value:"140881"},{label:"河津市",value:"140882"}],[{label:"忻府区",value:"140902"},{label:"定襄县",value:"140921"},{label:"五台县",value:"140922"},{label:"代县",value:"140923"},{label:"繁峙县",value:"140924"},{label:"宁武县",value:"140925"},{label:"静乐县",value:"140926"},{label:"神池县",value:"140927"},{label:"五寨县",value:"140928"},{label:"岢岚县",value:"140929"},{label:"河曲县",value:"140930"},{label:"保德县",value:"140931"},{label:"偏关县",value:"140932"},{label:"五台山风景名胜区",value:"140971"},{label:"原平市",value:"140981"}],[{label:"尧都区",value:"141002"},{label:"曲沃县",value:"141021"},{label:"翼城县",value:"141022"},{label:"襄汾县",value:"141023"},{label:"洪洞县",value:"141024"},{label:"古县",value:"141025"},{label:"安泽县",value:"141026"},{label:"浮山县",value:"141027"},{label:"吉县",value:"141028"},{label:"乡宁县",value:"141029"},{label:"大宁县",value:"141030"},{label:"隰县",value:"141031"},{label:"永和县",value:"141032"},{label:"蒲县",value:"141033"},{label:"汾西县",value:"141034"},{label:"侯马市",value:"141081"},{label:"霍州市",value:"141082"}],[{label:"离石区",value:"141102"},{label:"文水县",value:"141121"},{label:"交城县",value:"141122"},{label:"兴县",value:"141123"},{label:"临县",value:"141124"},{label:"柳林县",value:"141125"},{label:"石楼县",value:"141126"},{label:"岚县",value:"141127"},{label:"方山县",value:"141128"},{label:"中阳县",value:"141129"},{label:"交口县",value:"141130"},{label:"孝义市",value:"141181"},{label:"汾阳市",value:"141182"}]],[[{label:"新城区",value:"150102"},{label:"回民区",value:"150103"},{label:"玉泉区",value:"150104"},{label:"赛罕区",value:"150105"},{label:"土默特左旗",value:"150121"},{label:"托克托县",value:"150122"},{label:"和林格尔县",value:"150123"},{label:"清水河县",value:"150124"},{label:"武川县",value:"150125"},{label:"呼和浩特金海工业园区",value:"150171"},{label:"呼和浩特经济技术开发区",value:"150172"}],[{label:"东河区",value:"150202"},{label:"昆都仑区",value:"150203"},{label:"青山区",value:"150204"},{label:"石拐区",value:"150205"},{label:"白云鄂博矿区",value:"150206"},{label:"九原区",value:"150207"},{label:"土默特右旗",value:"150221"},{label:"固阳县",value:"150222"},{label:"达尔罕茂明安联合旗",value:"150223"},{label:"包头稀土高新技术产业开发区",value:"150271"}],[{label:"海勃湾区",value:"150302"},{label:"海南区",value:"150303"},{label:"乌达区",value:"150304"}],[{label:"红山区",value:"150402"},{label:"元宝山区",value:"150403"},{label:"松山区",value:"150404"},{label:"阿鲁科尔沁旗",value:"150421"},{label:"巴林左旗",value:"150422"},{label:"巴林右旗",value:"150423"},{label:"林西县",value:"150424"},{label:"克什克腾旗",value:"150425"},{label:"翁牛特旗",value:"150426"},{label:"喀喇沁旗",value:"150428"},{label:"宁城县",value:"150429"},{label:"敖汉旗",value:"150430"}],[{label:"科尔沁区",value:"150502"},{label:"科尔沁左翼中旗",value:"150521"},{label:"科尔沁左翼后旗",value:"150522"},{label:"开鲁县",value:"150523"},{label:"库伦旗",value:"150524"},{label:"奈曼旗",value:"150525"},{label:"扎鲁特旗",value:"150526"},{label:"通辽经济技术开发区",value:"150571"},{label:"霍林郭勒市",value:"150581"}],[{label:"东胜区",value:"150602"},{label:"康巴什区",value:"150603"},{label:"达拉特旗",value:"150621"},{label:"准格尔旗",value:"150622"},{label:"鄂托克前旗",value:"150623"},{label:"鄂托克旗",value:"150624"},{label:"杭锦旗",value:"150625"},{label:"乌审旗",value:"150626"},{label:"伊金霍洛旗",value:"150627"}],[{label:"海拉尔区",value:"150702"},{label:"扎赉诺尔区",value:"150703"},{label:"阿荣旗",value:"150721"},{label:"莫力达瓦达斡尔族自治旗",value:"150722"},{label:"鄂伦春自治旗",value:"150723"},{label:"鄂温克族自治旗",value:"150724"},{label:"陈巴尔虎旗",value:"150725"},{label:"新巴尔虎左旗",value:"150726"},{label:"新巴尔虎右旗",value:"150727"},{label:"满洲里市",value:"150781"},{label:"牙克石市",value:"150782"},{label:"扎兰屯市",value:"150783"},{label:"额尔古纳市",value:"150784"},{label:"根河市",value:"150785"}],[{label:"临河区",value:"150802"},{label:"五原县",value:"150821"},{label:"磴口县",value:"150822"},{label:"乌拉特前旗",value:"150823"},{label:"乌拉特中旗",value:"150824"},{label:"乌拉特后旗",value:"150825"},{label:"杭锦后旗",value:"150826"}],[{label:"集宁区",value:"150902"},{label:"卓资县",value:"150921"},{label:"化德县",value:"150922"},{label:"商都县",value:"150923"},{label:"兴和县",value:"150924"},{label:"凉城县",value:"150925"},{label:"察哈尔右翼前旗",value:"150926"},{label:"察哈尔右翼中旗",value:"150927"},{label:"察哈尔右翼后旗",value:"150928"},{label:"四子王旗",value:"150929"},{label:"丰镇市",value:"150981"}],[{label:"乌兰浩特市",value:"152201"},{label:"阿尔山市",value:"152202"},{label:"科尔沁右翼前旗",value:"152221"},{label:"科尔沁右翼中旗",value:"152222"},{label:"扎赉特旗",value:"152223"},{label:"突泉县",value:"152224"}],[{label:"二连浩特市",value:"152501"},{label:"锡林浩特市",value:"152502"},{label:"阿巴嘎旗",value:"152522"},{label:"苏尼特左旗",value:"152523"},{label:"苏尼特右旗",value:"152524"},{label:"东乌珠穆沁旗",value:"152525"},{label:"西乌珠穆沁旗",value:"152526"},{label:"太仆寺旗",value:"152527"},{label:"镶黄旗",value:"152528"},{label:"正镶白旗",value:"152529"},{label:"正蓝旗",value:"152530"},{label:"多伦县",value:"152531"},{label:"乌拉盖管委会",value:"152571"}],[{label:"阿拉善左旗",value:"152921"},{label:"阿拉善右旗",value:"152922"},{label:"额济纳旗",value:"152923"},{label:"内蒙古阿拉善经济开发区",value:"152971"}]],[[{label:"和平区",value:"210102"},{label:"沈河区",value:"210103"},{label:"大东区",value:"210104"},{label:"皇姑区",value:"210105"},{label:"铁西区",value:"210106"},{label:"苏家屯区",value:"210111"},{label:"浑南区",value:"210112"},{label:"沈北新区",value:"210113"},{label:"于洪区",value:"210114"},{label:"辽中区",value:"210115"},{label:"康平县",value:"210123"},{label:"法库县",value:"210124"},{label:"新民市",value:"210181"}],[{label:"中山区",value:"210202"},{label:"西岗区",value:"210203"},{label:"沙河口区",value:"210204"},{label:"甘井子区",value:"210211"},{label:"旅顺口区",value:"210212"},{label:"金州区",value:"210213"},{label:"普兰店区",value:"210214"},{label:"长海县",value:"210224"},{label:"瓦房店市",value:"210281"},{label:"庄河市",value:"210283"}],[{label:"铁东区",value:"210302"},{label:"铁西区",value:"210303"},{label:"立山区",value:"210304"},{label:"千山区",value:"210311"},{label:"台安县",value:"210321"},{label:"岫岩满族自治县",value:"210323"},{label:"海城市",value:"210381"}],[{label:"新抚区",value:"210402"},{label:"东洲区",value:"210403"},{label:"望花区",value:"210404"},{label:"顺城区",value:"210411"},{label:"抚顺县",value:"210421"},{label:"新宾满族自治县",value:"210422"},{label:"清原满族自治县",value:"210423"}],[{label:"平山区",value:"210502"},{label:"溪湖区",value:"210503"},{label:"明山区",value:"210504"},{label:"南芬区",value:"210505"},{label:"本溪满族自治县",value:"210521"},{label:"桓仁满族自治县",value:"210522"}],[{label:"元宝区",value:"210602"},{label:"振兴区",value:"210603"},{label:"振安区",value:"210604"},{label:"宽甸满族自治县",value:"210624"},{label:"东港市",value:"210681"},{label:"凤城市",value:"210682"}],[{label:"古塔区",value:"210702"},{label:"凌河区",value:"210703"},{label:"太和区",value:"210711"},{label:"黑山县",value:"210726"},{label:"义县",value:"210727"},{label:"凌海市",value:"210781"},{label:"北镇市",value:"210782"}],[{label:"站前区",value:"210802"},{label:"西市区",value:"210803"},{label:"鲅鱼圈区",value:"210804"},{label:"老边区",value:"210811"},{label:"盖州市",value:"210881"},{label:"大石桥市",value:"210882"}],[{label:"海州区",value:"210902"},{label:"新邱区",value:"210903"},{label:"太平区",value:"210904"},{label:"清河门区",value:"210905"},{label:"细河区",value:"210911"},{label:"阜新蒙古族自治县",value:"210921"},{label:"彰武县",value:"210922"}],[{label:"白塔区",value:"211002"},{label:"文圣区",value:"211003"},{label:"宏伟区",value:"211004"},{label:"弓长岭区",value:"211005"},{label:"太子河区",value:"211011"},{label:"辽阳县",value:"211021"},{label:"灯塔市",value:"211081"}],[{label:"双台子区",value:"211102"},{label:"兴隆台区",value:"211103"},{label:"大洼区",value:"211104"},{label:"盘山县",value:"211122"}],[{label:"银州区",value:"211202"},{label:"清河区",value:"211204"},{label:"铁岭县",value:"211221"},{label:"西丰县",value:"211223"},{label:"昌图县",value:"211224"},{label:"调兵山市",value:"211281"},{label:"开原市",value:"211282"}],[{label:"双塔区",value:"211302"},{label:"龙城区",value:"211303"},{label:"朝阳县",value:"211321"},{label:"建平县",value:"211322"},{label:"喀喇沁左翼蒙古族自治县",value:"211324"},{label:"北票市",value:"211381"},{label:"凌源市",value:"211382"}],[{label:"连山区",value:"211402"},{label:"龙港区",value:"211403"},{label:"南票区",value:"211404"},{label:"绥中县",value:"211421"},{label:"建昌县",value:"211422"},{label:"兴城市",value:"211481"}]],[[{label:"南关区",value:"220102"},{label:"宽城区",value:"220103"},{label:"朝阳区",value:"220104"},{label:"二道区",value:"220105"},{label:"绿园区",value:"220106"},{label:"双阳区",value:"220112"},{label:"九台区",value:"220113"},{label:"农安县",value:"220122"},{label:"长春经济技术开发区",value:"220171"},{label:"长春净月高新技术产业开发区",value:"220172"},{label:"长春高新技术产业开发区",value:"220173"},{label:"长春汽车经济技术开发区",value:"220174"},{label:"榆树市",value:"220182"},{label:"德惠市",value:"220183"}],[{label:"昌邑区",value:"220202"},{label:"龙潭区",value:"220203"},{label:"船营区",value:"220204"},{label:"丰满区",value:"220211"},{label:"永吉县",value:"220221"},{label:"吉林经济开发区",value:"220271"},{label:"吉林高新技术产业开发区",value:"220272"},{label:"吉林中国新加坡食品区",value:"220273"},{label:"蛟河市",value:"220281"},{label:"桦甸市",value:"220282"},{label:"舒兰市",value:"220283"},{label:"磐石市",value:"220284"}],[{label:"铁西区",value:"220302"},{label:"铁东区",value:"220303"},{label:"梨树县",value:"220322"},{label:"伊通满族自治县",value:"220323"},{label:"公主岭市",value:"220381"},{label:"双辽市",value:"220382"}],[{label:"龙山区",value:"220402"},{label:"西安区",value:"220403"},{label:"东丰县",value:"220421"},{label:"东辽县",value:"220422"}],[{label:"东昌区",value:"220502"},{label:"二道江区",value:"220503"},{label:"通化县",value:"220521"},{label:"辉南县",value:"220523"},{label:"柳河县",value:"220524"},{label:"梅河口市",value:"220581"},{label:"集安市",value:"220582"}],[{label:"浑江区",value:"220602"},{label:"江源区",value:"220605"},{label:"抚松县",value:"220621"},{label:"靖宇县",value:"220622"},{label:"长白朝鲜族自治县",value:"220623"},{label:"临江市",value:"220681"}],[{label:"宁江区",value:"220702"},{label:"前郭尔罗斯蒙古族自治县",value:"220721"},{label:"长岭县",value:"220722"},{label:"乾安县",value:"220723"},{label:"吉林松原经济开发区",value:"220771"},{label:"扶余市",value:"220781"}],[{label:"洮北区",value:"220802"},{label:"镇赉县",value:"220821"},{label:"通榆县",value:"220822"},{label:"吉林白城经济开发区",value:"220871"},{label:"洮南市",value:"220881"},{label:"大安市",value:"220882"}],[{label:"延吉市",value:"222401"},{label:"图们市",value:"222402"},{label:"敦化市",value:"222403"},{label:"珲春市",value:"222404"},{label:"龙井市",value:"222405"},{label:"和龙市",value:"222406"},{label:"汪清县",value:"222424"},{label:"安图县",value:"222426"}]],[[{label:"道里区",value:"230102"},{label:"南岗区",value:"230103"},{label:"道外区",value:"230104"},{label:"平房区",value:"230108"},{label:"松北区",value:"230109"},{label:"香坊区",value:"230110"},{label:"呼兰区",value:"230111"},{label:"阿城区",value:"230112"},{label:"双城区",value:"230113"},{label:"依兰县",value:"230123"},{label:"方正县",value:"230124"},{label:"宾县",value:"230125"},{label:"巴彦县",value:"230126"},{label:"木兰县",value:"230127"},{label:"通河县",value:"230128"},{label:"延寿县",value:"230129"},{label:"尚志市",value:"230183"},{label:"五常市",value:"230184"}],[{label:"龙沙区",value:"230202"},{label:"建华区",value:"230203"},{label:"铁锋区",value:"230204"},{label:"昂昂溪区",value:"230205"},{label:"富拉尔基区",value:"230206"},{label:"碾子山区",value:"230207"},{label:"梅里斯达斡尔族区",value:"230208"},{label:"龙江县",value:"230221"},{label:"依安县",value:"230223"},{label:"泰来县",value:"230224"},{label:"甘南县",value:"230225"},{label:"富裕县",value:"230227"},{label:"克山县",value:"230229"},{label:"克东县",value:"230230"},{label:"拜泉县",value:"230231"},{label:"讷河市",value:"230281"}],[{label:"鸡冠区",value:"230302"},{label:"恒山区",value:"230303"},{label:"滴道区",value:"230304"},{label:"梨树区",value:"230305"},{label:"城子河区",value:"230306"},{label:"麻山区",value:"230307"},{label:"鸡东县",value:"230321"},{label:"虎林市",value:"230381"},{label:"密山市",value:"230382"}],[{label:"向阳区",value:"230402"},{label:"工农区",value:"230403"},{label:"南山区",value:"230404"},{label:"兴安区",value:"230405"},{label:"东山区",value:"230406"},{label:"兴山区",value:"230407"},{label:"萝北县",value:"230421"},{label:"绥滨县",value:"230422"}],[{label:"尖山区",value:"230502"},{label:"岭东区",value:"230503"},{label:"四方台区",value:"230505"},{label:"宝山区",value:"230506"},{label:"集贤县",value:"230521"},{label:"友谊县",value:"230522"},{label:"宝清县",value:"230523"},{label:"饶河县",value:"230524"}],[{label:"萨尔图区",value:"230602"},{label:"龙凤区",value:"230603"},{label:"让胡路区",value:"230604"},{label:"红岗区",value:"230605"},{label:"大同区",value:"230606"},{label:"肇州县",value:"230621"},{label:"肇源县",value:"230622"},{label:"林甸县",value:"230623"},{label:"杜尔伯特蒙古族自治县",value:"230624"},{label:"大庆高新技术产业开发区",value:"230671"}],[{label:"伊春区",value:"230702"},{label:"南岔区",value:"230703"},{label:"友好区",value:"230704"},{label:"西林区",value:"230705"},{label:"翠峦区",value:"230706"},{label:"新青区",value:"230707"},{label:"美溪区",value:"230708"},{label:"金山屯区",value:"230709"},{label:"五营区",value:"230710"},{label:"乌马河区",value:"230711"},{label:"汤旺河区",value:"230712"},{label:"带岭区",value:"230713"},{label:"乌伊岭区",value:"230714"},{label:"红星区",value:"230715"},{label:"上甘岭区",value:"230716"},{label:"嘉荫县",value:"230722"},{label:"铁力市",value:"230781"}],[{label:"向阳区",value:"230803"},{label:"前进区",value:"230804"},{label:"东风区",value:"230805"},{label:"郊区",value:"230811"},{label:"桦南县",value:"230822"},{label:"桦川县",value:"230826"},{label:"汤原县",value:"230828"},{label:"同江市",value:"230881"},{label:"富锦市",value:"230882"},{label:"抚远市",value:"230883"}],[{label:"新兴区",value:"230902"},{label:"桃山区",value:"230903"},{label:"茄子河区",value:"230904"},{label:"勃利县",value:"230921"}],[{label:"东安区",value:"231002"},{label:"阳明区",value:"231003"},{label:"爱民区",value:"231004"},{label:"西安区",value:"231005"},{label:"林口县",value:"231025"},{label:"牡丹江经济技术开发区",value:"231071"},{label:"绥芬河市",value:"231081"},{label:"海林市",value:"231083"},{label:"宁安市",value:"231084"},{label:"穆棱市",value:"231085"},{label:"东宁市",value:"231086"}],[{label:"爱辉区",value:"231102"},{label:"嫩江县",value:"231121"},{label:"逊克县",value:"231123"},{label:"孙吴县",value:"231124"},{label:"北安市",value:"231181"},{label:"五大连池市",value:"231182"}],[{label:"北林区",value:"231202"},{label:"望奎县",value:"231221"},{label:"兰西县",value:"231222"},{label:"青冈县",value:"231223"},{label:"庆安县",value:"231224"},{label:"明水县",value:"231225"},{label:"绥棱县",value:"231226"},{label:"安达市",value:"231281"},{label:"肇东市",value:"231282"},{label:"海伦市",value:"231283"}],[{label:"加格达奇区",value:"232701"},{label:"松岭区",value:"232702"},{label:"新林区",value:"232703"},{label:"呼中区",value:"232704"},{label:"呼玛县",value:"232721"},{label:"塔河县",value:"232722"},{label:"漠河县",value:"232723"}]],[[{label:"黄浦区",value:"310101"},{label:"徐汇区",value:"310104"},{label:"长宁区",value:"310105"},{label:"静安区",value:"310106"},{label:"普陀区",value:"310107"},{label:"虹口区",value:"310109"},{label:"杨浦区",value:"310110"},{label:"闵行区",value:"310112"},{label:"宝山区",value:"310113"},{label:"嘉定区",value:"310114"},{label:"浦东新区",value:"310115"},{label:"金山区",value:"310116"},{label:"松江区",value:"310117"},{label:"青浦区",value:"310118"},{label:"奉贤区",value:"310120"},{label:"崇明区",value:"310151"}]],[[{label:"玄武区",value:"320102"},{label:"秦淮区",value:"320104"},{label:"建邺区",value:"320105"},{label:"鼓楼区",value:"320106"},{label:"浦口区",value:"320111"},{label:"栖霞区",value:"320113"},{label:"雨花台区",value:"320114"},{label:"江宁区",value:"320115"},{label:"六合区",value:"320116"},{label:"溧水区",value:"320117"},{label:"高淳区",value:"320118"}],[{label:"锡山区",value:"320205"},{label:"惠山区",value:"320206"},{label:"滨湖区",value:"320211"},{label:"梁溪区",value:"320213"},{label:"新吴区",value:"320214"},{label:"江阴市",value:"320281"},{label:"宜兴市",value:"320282"}],[{label:"鼓楼区",value:"320302"},{label:"云龙区",value:"320303"},{label:"贾汪区",value:"320305"},{label:"泉山区",value:"320311"},{label:"铜山区",value:"320312"},{label:"丰县",value:"320321"},{label:"沛县",value:"320322"},{label:"睢宁县",value:"320324"},{label:"徐州经济技术开发区",value:"320371"},{label:"新沂市",value:"320381"},{label:"邳州市",value:"320382"}],[{label:"天宁区",value:"320402"},{label:"钟楼区",value:"320404"},{label:"新北区",value:"320411"},{label:"武进区",value:"320412"},{label:"金坛区",value:"320413"},{label:"溧阳市",value:"320481"}],[{label:"虎丘区",value:"320505"},{label:"吴中区",value:"320506"},{label:"相城区",value:"320507"},{label:"姑苏区",value:"320508"},{label:"吴江区",value:"320509"},{label:"苏州工业园区",value:"320571"},{label:"常熟市",value:"320581"},{label:"张家港市",value:"320582"},{label:"昆山市",value:"320583"},{label:"太仓市",value:"320585"}],[{label:"崇川区",value:"320602"},{label:"港闸区",value:"320611"},{label:"通州区",value:"320612"},{label:"海安县",value:"320621"},{label:"如东县",value:"320623"},{label:"南通经济技术开发区",value:"320671"},{label:"启东市",value:"320681"},{label:"如皋市",value:"320682"},{label:"海门市",value:"320684"}],[{label:"连云区",value:"320703"},{label:"海州区",value:"320706"},{label:"赣榆区",value:"320707"},{label:"东海县",value:"320722"},{label:"灌云县",value:"320723"},{label:"灌南县",value:"320724"},{label:"连云港经济技术开发区",value:"320771"},{label:"连云港高新技术产业开发区",value:"320772"}],[{label:"淮安区",value:"320803"},{label:"淮阴区",value:"320804"},{label:"清江浦区",value:"320812"},{label:"洪泽区",value:"320813"},{label:"涟水县",value:"320826"},{label:"盱眙县",value:"320830"},{label:"金湖县",value:"320831"},{label:"淮安经济技术开发区",value:"320871"}],[{label:"亭湖区",value:"320902"},{label:"盐都区",value:"320903"},{label:"大丰区",value:"320904"},{label:"响水县",value:"320921"},{label:"滨海县",value:"320922"},{label:"阜宁县",value:"320923"},{label:"射阳县",value:"320924"},{label:"建湖县",value:"320925"},{label:"盐城经济技术开发区",value:"320971"},{label:"东台市",value:"320981"}],[{label:"广陵区",value:"321002"},{label:"邗江区",value:"321003"},{label:"江都区",value:"321012"},{label:"宝应县",value:"321023"},{label:"扬州经济技术开发区",value:"321071"},{label:"仪征市",value:"321081"},{label:"高邮市",value:"321084"}],[{label:"京口区",value:"321102"},{label:"润州区",value:"321111"},{label:"丹徒区",value:"321112"},{label:"镇江新区",value:"321171"},{label:"丹阳市",value:"321181"},{label:"扬中市",value:"321182"},{label:"句容市",value:"321183"}],[{label:"海陵区",value:"321202"},{label:"高港区",value:"321203"},{label:"姜堰区",value:"321204"},{label:"泰州医药高新技术产业开发区",value:"321271"},{label:"兴化市",value:"321281"},{label:"靖江市",value:"321282"},{label:"泰兴市",value:"321283"}],[{label:"宿城区",value:"321302"},{label:"宿豫区",value:"321311"},{label:"沭阳县",value:"321322"},{label:"泗阳县",value:"321323"},{label:"泗洪县",value:"321324"},{label:"宿迁经济技术开发区",value:"321371"}]],[[{label:"上城区",value:"330102"},{label:"下城区",value:"330103"},{label:"江干区",value:"330104"},{label:"拱墅区",value:"330105"},{label:"西湖区",value:"330106"},{label:"滨江区",value:"330108"},{label:"萧山区",value:"330109"},{label:"余杭区",value:"330110"},{label:"富阳区",value:"330111"},{label:"临安区",value:"330112"},{label:"桐庐县",value:"330122"},{label:"淳安县",value:"330127"},{label:"建德市",value:"330182"}],[{label:"海曙区",value:"330203"},{label:"江北区",value:"330205"},{label:"北仑区",value:"330206"},{label:"镇海区",value:"330211"},{label:"鄞州区",value:"330212"},{label:"奉化区",value:"330213"},{label:"象山县",value:"330225"},{label:"宁海县",value:"330226"},{label:"余姚市",value:"330281"},{label:"慈溪市",value:"330282"}],[{label:"鹿城区",value:"330302"},{label:"龙湾区",value:"330303"},{label:"瓯海区",value:"330304"},{label:"洞头区",value:"330305"},{label:"永嘉县",value:"330324"},{label:"平阳县",value:"330326"},{label:"苍南县",value:"330327"},{label:"文成县",value:"330328"},{label:"泰顺县",value:"330329"},{label:"温州经济技术开发区",value:"330371"},{label:"瑞安市",value:"330381"},{label:"乐清市",value:"330382"}],[{label:"南湖区",value:"330402"},{label:"秀洲区",value:"330411"},{label:"嘉善县",value:"330421"},{label:"海盐县",value:"330424"},{label:"海宁市",value:"330481"},{label:"平湖市",value:"330482"},{label:"桐乡市",value:"330483"}],[{label:"吴兴区",value:"330502"},{label:"南浔区",value:"330503"},{label:"德清县",value:"330521"},{label:"长兴县",value:"330522"},{label:"安吉县",value:"330523"}],[{label:"越城区",value:"330602"},{label:"柯桥区",value:"330603"},{label:"上虞区",value:"330604"},{label:"新昌县",value:"330624"},{label:"诸暨市",value:"330681"},{label:"嵊州市",value:"330683"}],[{label:"婺城区",value:"330702"},{label:"金东区",value:"330703"},{label:"武义县",value:"330723"},{label:"浦江县",value:"330726"},{label:"磐安县",value:"330727"},{label:"兰溪市",value:"330781"},{label:"义乌市",value:"330782"},{label:"东阳市",value:"330783"},{label:"永康市",value:"330784"}],[{label:"柯城区",value:"330802"},{label:"衢江区",value:"330803"},{label:"常山县",value:"330822"},{label:"开化县",value:"330824"},{label:"龙游县",value:"330825"},{label:"江山市",value:"330881"}],[{label:"定海区",value:"330902"},{label:"普陀区",value:"330903"},{label:"岱山县",value:"330921"},{label:"嵊泗县",value:"330922"}],[{label:"椒江区",value:"331002"},{label:"黄岩区",value:"331003"},{label:"路桥区",value:"331004"},{label:"三门县",value:"331022"},{label:"天台县",value:"331023"},{label:"仙居县",value:"331024"},{label:"温岭市",value:"331081"},{label:"临海市",value:"331082"},{label:"玉环市",value:"331083"}],[{label:"莲都区",value:"331102"},{label:"青田县",value:"331121"},{label:"缙云县",value:"331122"},{label:"遂昌县",value:"331123"},{label:"松阳县",value:"331124"},{label:"云和县",value:"331125"},{label:"庆元县",value:"331126"},{label:"景宁畲族自治县",value:"331127"},{label:"龙泉市",value:"331181"}]],[[{label:"瑶海区",value:"340102"},{label:"庐阳区",value:"340103"},{label:"蜀山区",value:"340104"},{label:"包河区",value:"340111"},{label:"长丰县",value:"340121"},{label:"肥东县",value:"340122"},{label:"肥西县",value:"340123"},{label:"庐江县",value:"340124"},{label:"合肥高新技术产业开发区",value:"340171"},{label:"合肥经济技术开发区",value:"340172"},{label:"合肥新站高新技术产业开发区",value:"340173"},{label:"巢湖市",value:"340181"}],[{label:"镜湖区",value:"340202"},{label:"弋江区",value:"340203"},{label:"鸠江区",value:"340207"},{label:"三山区",value:"340208"},{label:"芜湖县",value:"340221"},{label:"繁昌县",value:"340222"},{label:"南陵县",value:"340223"},{label:"无为县",value:"340225"},{label:"芜湖经济技术开发区",value:"340271"},{label:"安徽芜湖长江大桥经济开发区",value:"340272"}],[{label:"龙子湖区",value:"340302"},{label:"蚌山区",value:"340303"},{label:"禹会区",value:"340304"},{label:"淮上区",value:"340311"},{label:"怀远县",value:"340321"},{label:"五河县",value:"340322"},{label:"固镇县",value:"340323"},{label:"蚌埠市高新技术开发区",value:"340371"},{label:"蚌埠市经济开发区",value:"340372"}],[{label:"大通区",value:"340402"},{label:"田家庵区",value:"340403"},{label:"谢家集区",value:"340404"},{label:"八公山区",value:"340405"},{label:"潘集区",value:"340406"},{label:"凤台县",value:"340421"},{label:"寿县",value:"340422"}],[{label:"花山区",value:"340503"},{label:"雨山区",value:"340504"},{label:"博望区",value:"340506"},{label:"当涂县",value:"340521"},{label:"含山县",value:"340522"},{label:"和县",value:"340523"}],[{label:"杜集区",value:"340602"},{label:"相山区",value:"340603"},{label:"烈山区",value:"340604"},{label:"濉溪县",value:"340621"}],[{label:"铜官区",value:"340705"},{label:"义安区",value:"340706"},{label:"郊区",value:"340711"},{label:"枞阳县",value:"340722"}],[{label:"迎江区",value:"340802"},{label:"大观区",value:"340803"},{label:"宜秀区",value:"340811"},{label:"怀宁县",value:"340822"},{label:"潜山县",value:"340824"},{label:"太湖县",value:"340825"},{label:"宿松县",value:"340826"},{label:"望江县",value:"340827"},{label:"岳西县",value:"340828"},{label:"安徽安庆经济开发区",value:"340871"},{label:"桐城市",value:"340881"}],[{label:"屯溪区",value:"341002"},{label:"黄山区",value:"341003"},{label:"徽州区",value:"341004"},{label:"歙县",value:"341021"},{label:"休宁县",value:"341022"},{label:"黟县",value:"341023"},{label:"祁门县",value:"341024"}],[{label:"琅琊区",value:"341102"},{label:"南谯区",value:"341103"},{label:"来安县",value:"341122"},{label:"全椒县",value:"341124"},{label:"定远县",value:"341125"},{label:"凤阳县",value:"341126"},{label:"苏滁现代产业园",value:"341171"},{label:"滁州经济技术开发区",value:"341172"},{label:"天长市",value:"341181"},{label:"明光市",value:"341182"}],[{label:"颍州区",value:"341202"},{label:"颍东区",value:"341203"},{label:"颍泉区",value:"341204"},{label:"临泉县",value:"341221"},{label:"太和县",value:"341222"},{label:"阜南县",value:"341225"},{label:"颍上县",value:"341226"},{label:"阜阳合肥现代产业园区",value:"341271"},{label:"阜阳经济技术开发区",value:"341272"},{label:"界首市",value:"341282"}],[{label:"埇桥区",value:"341302"},{label:"砀山县",value:"341321"},{label:"萧县",value:"341322"},{label:"灵璧县",value:"341323"},{label:"泗县",value:"341324"},{label:"宿州马鞍山现代产业园区",value:"341371"},{label:"宿州经济技术开发区",value:"341372"}],[{label:"金安区",value:"341502"},{label:"裕安区",value:"341503"},{label:"叶集区",value:"341504"},{label:"霍邱县",value:"341522"},{label:"舒城县",value:"341523"},{label:"金寨县",value:"341524"},{label:"霍山县",value:"341525"}],[{label:"谯城区",value:"341602"},{label:"涡阳县",value:"341621"},{label:"蒙城县",value:"341622"},{label:"利辛县",value:"341623"}],[{label:"贵池区",value:"341702"},{label:"东至县",value:"341721"},{label:"石台县",value:"341722"},{label:"青阳县",value:"341723"}],[{label:"宣州区",value:"341802"},{label:"郎溪县",value:"341821"},{label:"广德县",value:"341822"},{label:"泾县",value:"341823"},{label:"绩溪县",value:"341824"},{label:"旌德县",value:"341825"},{label:"宣城市经济开发区",value:"341871"},{label:"宁国市",value:"341881"}]],[[{label:"鼓楼区",value:"350102"},{label:"台江区",value:"350103"},{label:"仓山区",value:"350104"},{label:"马尾区",value:"350105"},{label:"晋安区",value:"350111"},{label:"闽侯县",value:"350121"},{label:"连江县",value:"350122"},{label:"罗源县",value:"350123"},{label:"闽清县",value:"350124"},{label:"永泰县",value:"350125"},{label:"平潭县",value:"350128"},{label:"福清市",value:"350181"},{label:"长乐市",value:"350182"}],[{label:"思明区",value:"350203"},{label:"海沧区",value:"350205"},{label:"湖里区",value:"350206"},{label:"集美区",value:"350211"},{label:"同安区",value:"350212"},{label:"翔安区",value:"350213"}],[{label:"城厢区",value:"350302"},{label:"涵江区",value:"350303"},{label:"荔城区",value:"350304"},{label:"秀屿区",value:"350305"},{label:"仙游县",value:"350322"}],[{label:"梅列区",value:"350402"},{label:"三元区",value:"350403"},{label:"明溪县",value:"350421"},{label:"清流县",value:"350423"},{label:"宁化县",value:"350424"},{label:"大田县",value:"350425"},{label:"尤溪县",value:"350426"},{label:"沙县",value:"350427"},{label:"将乐县",value:"350428"},{label:"泰宁县",value:"350429"},{label:"建宁县",value:"350430"},{label:"永安市",value:"350481"}],[{label:"鲤城区",value:"350502"},{label:"丰泽区",value:"350503"},{label:"洛江区",value:"350504"},{label:"泉港区",value:"350505"},{label:"惠安县",value:"350521"},{label:"安溪县",value:"350524"},{label:"永春县",value:"350525"},{label:"德化县",value:"350526"},{label:"金门县",value:"350527"},{label:"石狮市",value:"350581"},{label:"晋江市",value:"350582"},{label:"南安市",value:"350583"}],[{label:"芗城区",value:"350602"},{label:"龙文区",value:"350603"},{label:"云霄县",value:"350622"},{label:"漳浦县",value:"350623"},{label:"诏安县",value:"350624"},{label:"长泰县",value:"350625"},{label:"东山县",value:"350626"},{label:"南靖县",value:"350627"},{label:"平和县",value:"350628"},{label:"华安县",value:"350629"},{label:"龙海市",value:"350681"}],[{label:"延平区",value:"350702"},{label:"建阳区",value:"350703"},{label:"顺昌县",value:"350721"},{label:"浦城县",value:"350722"},{label:"光泽县",value:"350723"},{label:"松溪县",value:"350724"},{label:"政和县",value:"350725"},{label:"邵武市",value:"350781"},{label:"武夷山市",value:"350782"},{label:"建瓯市",value:"350783"}],[{label:"新罗区",value:"350802"},{label:"永定区",value:"350803"},{label:"长汀县",value:"350821"},{label:"上杭县",value:"350823"},{label:"武平县",value:"350824"},{label:"连城县",value:"350825"},{label:"漳平市",value:"350881"}],[{label:"蕉城区",value:"350902"},{label:"霞浦县",value:"350921"},{label:"古田县",value:"350922"},{label:"屏南县",value:"350923"},{label:"寿宁县",value:"350924"},{label:"周宁县",value:"350925"},{label:"柘荣县",value:"350926"},{label:"福安市",value:"350981"},{label:"福鼎市",value:"350982"}]],[[{label:"东湖区",value:"360102"},{label:"西湖区",value:"360103"},{label:"青云谱区",value:"360104"},{label:"湾里区",value:"360105"},{label:"青山湖区",value:"360111"},{label:"新建区",value:"360112"},{label:"南昌县",value:"360121"},{label:"安义县",value:"360123"},{label:"进贤县",value:"360124"}],[{label:"昌江区",value:"360202"},{label:"珠山区",value:"360203"},{label:"浮梁县",value:"360222"},{label:"乐平市",value:"360281"}],[{label:"安源区",value:"360302"},{label:"湘东区",value:"360313"},{label:"莲花县",value:"360321"},{label:"上栗县",value:"360322"},{label:"芦溪县",value:"360323"}],[{label:"濂溪区",value:"360402"},{label:"浔阳区",value:"360403"},{label:"柴桑区",value:"360404"},{label:"武宁县",value:"360423"},{label:"修水县",value:"360424"},{label:"永修县",value:"360425"},{label:"德安县",value:"360426"},{label:"都昌县",value:"360428"},{label:"湖口县",value:"360429"},{label:"彭泽县",value:"360430"},{label:"瑞昌市",value:"360481"},{label:"共青城市",value:"360482"},{label:"庐山市",value:"360483"}],[{label:"渝水区",value:"360502"},{label:"分宜县",value:"360521"}],[{label:"月湖区",value:"360602"},{label:"余江县",value:"360622"},{label:"贵溪市",value:"360681"}],[{label:"章贡区",value:"360702"},{label:"南康区",value:"360703"},{label:"赣县区",value:"360704"},{label:"信丰县",value:"360722"},{label:"大余县",value:"360723"},{label:"上犹县",value:"360724"},{label:"崇义县",value:"360725"},{label:"安远县",value:"360726"},{label:"龙南县",value:"360727"},{label:"定南县",value:"360728"},{label:"全南县",value:"360729"},{label:"宁都县",value:"360730"},{label:"于都县",value:"360731"},{label:"兴国县",value:"360732"},{label:"会昌县",value:"360733"},{label:"寻乌县",value:"360734"},{label:"石城县",value:"360735"},{label:"瑞金市",value:"360781"}],[{label:"吉州区",value:"360802"},{label:"青原区",value:"360803"},{label:"吉安县",value:"360821"},{label:"吉水县",value:"360822"},{label:"峡江县",value:"360823"},{label:"新干县",value:"360824"},{label:"永丰县",value:"360825"},{label:"泰和县",value:"360826"},{label:"遂川县",value:"360827"},{label:"万安县",value:"360828"},{label:"安福县",value:"360829"},{label:"永新县",value:"360830"},{label:"井冈山市",value:"360881"}],[{label:"袁州区",value:"360902"},{label:"奉新县",value:"360921"},{label:"万载县",value:"360922"},{label:"上高县",value:"360923"},{label:"宜丰县",value:"360924"},{label:"靖安县",value:"360925"},{label:"铜鼓县",value:"360926"},{label:"丰城市",value:"360981"},{label:"樟树市",value:"360982"},{label:"高安市",value:"360983"}],[{label:"临川区",value:"361002"},{label:"东乡区",value:"361003"},{label:"南城县",value:"361021"},{label:"黎川县",value:"361022"},{label:"南丰县",value:"361023"},{label:"崇仁县",value:"361024"},{label:"乐安县",value:"361025"},{label:"宜黄县",value:"361026"},{label:"金溪县",value:"361027"},{label:"资溪县",value:"361028"},{label:"广昌县",value:"361030"}],[{label:"信州区",value:"361102"},{label:"广丰区",value:"361103"},{label:"上饶县",value:"361121"},{label:"玉山县",value:"361123"},{label:"铅山县",value:"361124"},{label:"横峰县",value:"361125"},{label:"弋阳县",value:"361126"},{label:"余干县",value:"361127"},{label:"鄱阳县",value:"361128"},{label:"万年县",value:"361129"},{label:"婺源县",value:"361130"},{label:"德兴市",value:"361181"}]],[[{label:"历下区",value:"370102"},{label:"市中区",value:"370103"},{label:"槐荫区",value:"370104"},{label:"天桥区",value:"370105"},{label:"历城区",value:"370112"},{label:"长清区",value:"370113"},{label:"章丘区",value:"370114"},{label:"平阴县",value:"370124"},{label:"济阳县",value:"370125"},{label:"商河县",value:"370126"},{label:"济南高新技术产业开发区",value:"370171"}],[{label:"市南区",value:"370202"},{label:"市北区",value:"370203"},{label:"黄岛区",value:"370211"},{label:"崂山区",value:"370212"},{label:"李沧区",value:"370213"},{label:"城阳区",value:"370214"},{label:"即墨区",value:"370215"},{label:"青岛高新技术产业开发区",value:"370271"},{label:"胶州市",value:"370281"},{label:"平度市",value:"370283"},{label:"莱西市",value:"370285"}],[{label:"淄川区",value:"370302"},{label:"张店区",value:"370303"},{label:"博山区",value:"370304"},{label:"临淄区",value:"370305"},{label:"周村区",value:"370306"},{label:"桓台县",value:"370321"},{label:"高青县",value:"370322"},{label:"沂源县",value:"370323"}],[{label:"市中区",value:"370402"},{label:"薛城区",value:"370403"},{label:"峄城区",value:"370404"},{label:"台儿庄区",value:"370405"},{label:"山亭区",value:"370406"},{label:"滕州市",value:"370481"}],[{label:"东营区",value:"370502"},{label:"河口区",value:"370503"},{label:"垦利区",value:"370505"},{label:"利津县",value:"370522"},{label:"广饶县",value:"370523"},{label:"东营经济技术开发区",value:"370571"},{label:"东营港经济开发区",value:"370572"}],[{label:"芝罘区",value:"370602"},{label:"福山区",value:"370611"},{label:"牟平区",value:"370612"},{label:"莱山区",value:"370613"},{label:"长岛县",value:"370634"},{label:"烟台高新技术产业开发区",value:"370671"},{label:"烟台经济技术开发区",value:"370672"},{label:"龙口市",value:"370681"},{label:"莱阳市",value:"370682"},{label:"莱州市",value:"370683"},{label:"蓬莱市",value:"370684"},{label:"招远市",value:"370685"},{label:"栖霞市",value:"370686"},{label:"海阳市",value:"370687"}],[{label:"潍城区",value:"370702"},{label:"寒亭区",value:"370703"},{label:"坊子区",value:"370704"},{label:"奎文区",value:"370705"},{label:"临朐县",value:"370724"},{label:"昌乐县",value:"370725"},{label:"潍坊滨海经济技术开发区",value:"370772"},{label:"青州市",value:"370781"},{label:"诸城市",value:"370782"},{label:"寿光市",value:"370783"},{label:"安丘市",value:"370784"},{label:"高密市",value:"370785"},{label:"昌邑市",value:"370786"}],[{label:"任城区",value:"370811"},{label:"兖州区",value:"370812"},{label:"微山县",value:"370826"},{label:"鱼台县",value:"370827"},{label:"金乡县",value:"370828"},{label:"嘉祥县",value:"370829"},{label:"汶上县",value:"370830"},{label:"泗水县",value:"370831"},{label:"梁山县",value:"370832"},{label:"济宁高新技术产业开发区",value:"370871"},{label:"曲阜市",value:"370881"},{label:"邹城市",value:"370883"}],[{label:"泰山区",value:"370902"},{label:"岱岳区",value:"370911"},{label:"宁阳县",value:"370921"},{label:"东平县",value:"370923"},{label:"新泰市",value:"370982"},{label:"肥城市",value:"370983"}],[{label:"环翠区",value:"371002"},{label:"文登区",value:"371003"},{label:"威海火炬高技术产业开发区",value:"371071"},{label:"威海经济技术开发区",value:"371072"},{label:"威海临港经济技术开发区",value:"371073"},{label:"荣成市",value:"371082"},{label:"乳山市",value:"371083"}],[{label:"东港区",value:"371102"},{label:"岚山区",value:"371103"},{label:"五莲县",value:"371121"},{label:"莒县",value:"371122"},{label:"日照经济技术开发区",value:"371171"},{label:"日照国际海洋城",value:"371172"}],[{label:"莱城区",value:"371202"},{label:"钢城区",value:"371203"}],[{label:"兰山区",value:"371302"},{label:"罗庄区",value:"371311"},{label:"河东区",value:"371312"},{label:"沂南县",value:"371321"},{label:"郯城县",value:"371322"},{label:"沂水县",value:"371323"},{label:"兰陵县",value:"371324"},{label:"费县",value:"371325"},{label:"平邑县",value:"371326"},{label:"莒南县",value:"371327"},{label:"蒙阴县",value:"371328"},{label:"临沭县",value:"371329"},{label:"临沂高新技术产业开发区",value:"371371"},{label:"临沂经济技术开发区",value:"371372"},{label:"临沂临港经济开发区",value:"371373"}],[{label:"德城区",value:"371402"},{label:"陵城区",value:"371403"},{label:"宁津县",value:"371422"},{label:"庆云县",value:"371423"},{label:"临邑县",value:"371424"},{label:"齐河县",value:"371425"},{label:"平原县",value:"371426"},{label:"夏津县",value:"371427"},{label:"武城县",value:"371428"},{label:"德州经济技术开发区",value:"371471"},{label:"德州运河经济开发区",value:"371472"},{label:"乐陵市",value:"371481"},{label:"禹城市",value:"371482"}],[{label:"东昌府区",value:"371502"},{label:"阳谷县",value:"371521"},{label:"莘县",value:"371522"},{label:"茌平县",value:"371523"},{label:"东阿县",value:"371524"},{label:"冠县",value:"371525"},{label:"高唐县",value:"371526"},{label:"临清市",value:"371581"}],[{label:"滨城区",value:"371602"},{label:"沾化区",value:"371603"},{label:"惠民县",value:"371621"},{label:"阳信县",value:"371622"},{label:"无棣县",value:"371623"},{label:"博兴县",value:"371625"},{label:"邹平县",value:"371626"}],[{label:"牡丹区",value:"371702"},{label:"定陶区",value:"371703"},{label:"曹县",value:"371721"},{label:"单县",value:"371722"},{label:"成武县",value:"371723"},{label:"巨野县",value:"371724"},{label:"郓城县",value:"371725"},{label:"鄄城县",value:"371726"},{label:"东明县",value:"371728"},{label:"菏泽经济技术开发区",value:"371771"},{label:"菏泽高新技术开发区",value:"371772"}]],[[{label:"中原区",value:"410102"},{label:"二七区",value:"410103"},{label:"管城回族区",value:"410104"},{label:"金水区",value:"410105"},{label:"上街区",value:"410106"},{label:"惠济区",value:"410108"},{label:"中牟县",value:"410122"},{label:"郑州经济技术开发区",value:"410171"},{label:"郑州高新技术产业开发区",value:"410172"},{label:"郑州航空港经济综合实验区",value:"410173"},{label:"巩义市",value:"410181"},{label:"荥阳市",value:"410182"},{label:"新密市",value:"410183"},{label:"新郑市",value:"410184"},{label:"登封市",value:"410185"}],[{label:"龙亭区",value:"410202"},{label:"顺河回族区",value:"410203"},{label:"鼓楼区",value:"410204"},{label:"禹王台区",value:"410205"},{label:"祥符区",value:"410212"},{label:"杞县",value:"410221"},{label:"通许县",value:"410222"},{label:"尉氏县",value:"410223"},{label:"兰考县",value:"410225"}],[{label:"老城区",value:"410302"},{label:"西工区",value:"410303"},{label:"瀍河回族区",value:"410304"},{label:"涧西区",value:"410305"},{label:"吉利区",value:"410306"},{label:"洛龙区",value:"410311"},{label:"孟津县",value:"410322"},{label:"新安县",value:"410323"},{label:"栾川县",value:"410324"},{label:"嵩县",value:"410325"},{label:"汝阳县",value:"410326"},{label:"宜阳县",value:"410327"},{label:"洛宁县",value:"410328"},{label:"伊川县",value:"410329"},{label:"洛阳高新技术产业开发区",value:"410371"},{label:"偃师市",value:"410381"}],[{label:"新华区",value:"410402"},{label:"卫东区",value:"410403"},{label:"石龙区",value:"410404"},{label:"湛河区",value:"410411"},{label:"宝丰县",value:"410421"},{label:"叶县",value:"410422"},{label:"鲁山县",value:"410423"},{label:"郏县",value:"410425"},{label:"平顶山高新技术产业开发区",value:"410471"},{label:"平顶山市新城区",value:"410472"},{label:"舞钢市",value:"410481"},{label:"汝州市",value:"410482"}],[{label:"文峰区",value:"410502"},{label:"北关区",value:"410503"},{label:"殷都区",value:"410505"},{label:"龙安区",value:"410506"},{label:"安阳县",value:"410522"},{label:"汤阴县",value:"410523"},{label:"滑县",value:"410526"},{label:"内黄县",value:"410527"},{label:"安阳高新技术产业开发区",value:"410571"},{label:"林州市",value:"410581"}],[{label:"鹤山区",value:"410602"},{label:"山城区",value:"410603"},{label:"淇滨区",value:"410611"},{label:"浚县",value:"410621"},{label:"淇县",value:"410622"},{label:"鹤壁经济技术开发区",value:"410671"}],[{label:"红旗区",value:"410702"},{label:"卫滨区",value:"410703"},{label:"凤泉区",value:"410704"},{label:"牧野区",value:"410711"},{label:"新乡县",value:"410721"},{label:"获嘉县",value:"410724"},{label:"原阳县",value:"410725"},{label:"延津县",value:"410726"},{label:"封丘县",value:"410727"},{label:"长垣县",value:"410728"},{label:"新乡高新技术产业开发区",value:"410771"},{label:"新乡经济技术开发区",value:"410772"},{label:"新乡市平原城乡一体化示范区",value:"410773"},{label:"卫辉市",value:"410781"},{label:"辉县市",value:"410782"}],[{label:"解放区",value:"410802"},{label:"中站区",value:"410803"},{label:"马村区",value:"410804"},{label:"山阳区",value:"410811"},{label:"修武县",value:"410821"},{label:"博爱县",value:"410822"},{label:"武陟县",value:"410823"},{label:"温县",value:"410825"},{label:"焦作城乡一体化示范区",value:"410871"},{label:"沁阳市",value:"410882"},{label:"孟州市",value:"410883"}],[{label:"华龙区",value:"410902"},{label:"清丰县",value:"410922"},{label:"南乐县",value:"410923"},{label:"范县",value:"410926"},{label:"台前县",value:"410927"},{label:"濮阳县",value:"410928"},{label:"河南濮阳工业园区",value:"410971"},{label:"濮阳经济技术开发区",value:"410972"}],[{label:"魏都区",value:"411002"},{label:"建安区",value:"411003"},{label:"鄢陵县",value:"411024"},{label:"襄城县",value:"411025"},{label:"许昌经济技术开发区",value:"411071"},{label:"禹州市",value:"411081"},{label:"长葛市",value:"411082"}],[{label:"源汇区",value:"411102"},{label:"郾城区",value:"411103"},{label:"召陵区",value:"411104"},{label:"舞阳县",value:"411121"},{label:"临颍县",value:"411122"},{label:"漯河经济技术开发区",value:"411171"}],[{label:"湖滨区",value:"411202"},{label:"陕州区",value:"411203"},{label:"渑池县",value:"411221"},{label:"卢氏县",value:"411224"},{label:"河南三门峡经济开发区",value:"411271"},{label:"义马市",value:"411281"},{label:"灵宝市",value:"411282"}],[{label:"宛城区",value:"411302"},{label:"卧龙区",value:"411303"},{label:"南召县",value:"411321"},{label:"方城县",value:"411322"},{label:"西峡县",value:"411323"},{label:"镇平县",value:"411324"},{label:"内乡县",value:"411325"},{label:"淅川县",value:"411326"},{label:"社旗县",value:"411327"},{label:"唐河县",value:"411328"},{label:"新野县",value:"411329"},{label:"桐柏县",value:"411330"},{label:"南阳高新技术产业开发区",value:"411371"},{label:"南阳市城乡一体化示范区",value:"411372"},{label:"邓州市",value:"411381"}],[{label:"梁园区",value:"411402"},{label:"睢阳区",value:"411403"},{label:"民权县",value:"411421"},{label:"睢县",value:"411422"},{label:"宁陵县",value:"411423"},{label:"柘城县",value:"411424"},{label:"虞城县",value:"411425"},{label:"夏邑县",value:"411426"},{label:"豫东综合物流产业聚集区",value:"411471"},{label:"河南商丘经济开发区",value:"411472"},{label:"永城市",value:"411481"}],[{label:"浉河区",value:"411502"},{label:"平桥区",value:"411503"},{label:"罗山县",value:"411521"},{label:"光山县",value:"411522"},{label:"新县",value:"411523"},{label:"商城县",value:"411524"},{label:"固始县",value:"411525"},{label:"潢川县",value:"411526"},{label:"淮滨县",value:"411527"},{label:"息县",value:"411528"},{label:"信阳高新技术产业开发区",value:"411571"}],[{label:"川汇区",value:"411602"},{label:"扶沟县",value:"411621"},{label:"西华县",value:"411622"},{label:"商水县",value:"411623"},{label:"沈丘县",value:"411624"},{label:"郸城县",value:"411625"},{label:"淮阳县",value:"411626"},{label:"太康县",value:"411627"},{label:"鹿邑县",value:"411628"},{label:"河南周口经济开发区",value:"411671"},{label:"项城市",value:"411681"}],[{label:"驿城区",value:"411702"},{label:"西平县",value:"411721"},{label:"上蔡县",value:"411722"},{label:"平舆县",value:"411723"},{label:"正阳县",value:"411724"},{label:"确山县",value:"411725"},{label:"泌阳县",value:"411726"},{label:"汝南县",value:"411727"},{label:"遂平县",value:"411728"},{label:"新蔡县",value:"411729"},{label:"河南驻马店经济开发区",value:"411771"}],[{label:"济源市",value:"419001"}]],[[{label:"江岸区",value:"420102"},{label:"江汉区",value:"420103"},{label:"硚口区",value:"420104"},{label:"汉阳区",value:"420105"},{label:"武昌区",value:"420106"},{label:"青山区",value:"420107"},{label:"洪山区",value:"420111"},{label:"东西湖区",value:"420112"},{label:"汉南区",value:"420113"},{label:"蔡甸区",value:"420114"},{label:"江夏区",value:"420115"},{label:"黄陂区",value:"420116"},{label:"新洲区",value:"420117"}],[{label:"黄石港区",value:"420202"},{label:"西塞山区",value:"420203"},{label:"下陆区",value:"420204"},{label:"铁山区",value:"420205"},{label:"阳新县",value:"420222"},{label:"大冶市",value:"420281"}],[{label:"茅箭区",value:"420302"},{label:"张湾区",value:"420303"},{label:"郧阳区",value:"420304"},{label:"郧西县",value:"420322"},{label:"竹山县",value:"420323"},{label:"竹溪县",value:"420324"},{label:"房县",value:"420325"},{label:"丹江口市",value:"420381"}],[{label:"西陵区",value:"420502"},{label:"伍家岗区",value:"420503"},{label:"点军区",value:"420504"},{label:"猇亭区",value:"420505"},{label:"夷陵区",value:"420506"},{label:"远安县",value:"420525"},{label:"兴山县",value:"420526"},{label:"秭归县",value:"420527"},{label:"长阳土家族自治县",value:"420528"},{label:"五峰土家族自治县",value:"420529"},{label:"宜都市",value:"420581"},{label:"当阳市",value:"420582"},{label:"枝江市",value:"420583"}],[{label:"襄城区",value:"420602"},{label:"樊城区",value:"420606"},{label:"襄州区",value:"420607"},{label:"南漳县",value:"420624"},{label:"谷城县",value:"420625"},{label:"保康县",value:"420626"},{label:"老河口市",value:"420682"},{label:"枣阳市",value:"420683"},{label:"宜城市",value:"420684"}],[{label:"梁子湖区",value:"420702"},{label:"华容区",value:"420703"},{label:"鄂城区",value:"420704"}],[{label:"东宝区",value:"420802"},{label:"掇刀区",value:"420804"},{label:"京山县",value:"420821"},{label:"沙洋县",value:"420822"},{label:"钟祥市",value:"420881"}],[{label:"孝南区",value:"420902"},{label:"孝昌县",value:"420921"},{label:"大悟县",value:"420922"},{label:"云梦县",value:"420923"},{label:"应城市",value:"420981"},{label:"安陆市",value:"420982"},{label:"汉川市",value:"420984"}],[{label:"沙市区",value:"421002"},{label:"荆州区",value:"421003"},{label:"公安县",value:"421022"},{label:"监利县",value:"421023"},{label:"江陵县",value:"421024"},{label:"荆州经济技术开发区",value:"421071"},{label:"石首市",value:"421081"},{label:"洪湖市",value:"421083"},{label:"松滋市",value:"421087"}],[{label:"黄州区",value:"421102"},{label:"团风县",value:"421121"},{label:"红安县",value:"421122"},{label:"罗田县",value:"421123"},{label:"英山县",value:"421124"},{label:"浠水县",value:"421125"},{label:"蕲春县",value:"421126"},{label:"黄梅县",value:"421127"},{label:"龙感湖管理区",value:"421171"},{label:"麻城市",value:"421181"},{label:"武穴市",value:"421182"}],[{label:"咸安区",value:"421202"},{label:"嘉鱼县",value:"421221"},{label:"通城县",value:"421222"},{label:"崇阳县",value:"421223"},{label:"通山县",value:"421224"},{label:"赤壁市",value:"421281"}],[{label:"曾都区",value:"421303"},{label:"随县",value:"421321"},{label:"广水市",value:"421381"}],[{label:"恩施市",value:"422801"},{label:"利川市",value:"422802"},{label:"建始县",value:"422822"},{label:"巴东县",value:"422823"},{label:"宣恩县",value:"422825"},{label:"咸丰县",value:"422826"},{label:"来凤县",value:"422827"},{label:"鹤峰县",value:"422828"}],[{label:"仙桃市",value:"429004"},{label:"潜江市",value:"429005"},{label:"天门市",value:"429006"},{label:"神农架林区",value:"429021"}]],[[{label:"芙蓉区",value:"430102"},{label:"天心区",value:"430103"},{label:"岳麓区",value:"430104"},{label:"开福区",value:"430105"},{label:"雨花区",value:"430111"},{label:"望城区",value:"430112"},{label:"长沙县",value:"430121"},{label:"浏阳市",value:"430181"},{label:"宁乡市",value:"430182"}],[{label:"荷塘区",value:"430202"},{label:"芦淞区",value:"430203"},{label:"石峰区",value:"430204"},{label:"天元区",value:"430211"},{label:"株洲县",value:"430221"},{label:"攸县",value:"430223"},{label:"茶陵县",value:"430224"},{label:"炎陵县",value:"430225"},{label:"云龙示范区",value:"430271"},{label:"醴陵市",value:"430281"}],[{label:"雨湖区",value:"430302"},{label:"岳塘区",value:"430304"},{label:"湘潭县",value:"430321"},{label:"湖南湘潭高新技术产业园区",value:"430371"},{label:"湘潭昭山示范区",value:"430372"},{label:"湘潭九华示范区",value:"430373"},{label:"湘乡市",value:"430381"},{label:"韶山市",value:"430382"}],[{label:"珠晖区",value:"430405"},{label:"雁峰区",value:"430406"},{label:"石鼓区",value:"430407"},{label:"蒸湘区",value:"430408"},{label:"南岳区",value:"430412"},{label:"衡阳县",value:"430421"},{label:"衡南县",value:"430422"},{label:"衡山县",value:"430423"},{label:"衡东县",value:"430424"},{label:"祁东县",value:"430426"},{label:"衡阳综合保税区",value:"430471"},{label:"湖南衡阳高新技术产业园区",value:"430472"},{label:"湖南衡阳松木经济开发区",value:"430473"},{label:"耒阳市",value:"430481"},{label:"常宁市",value:"430482"}],[{label:"双清区",value:"430502"},{label:"大祥区",value:"430503"},{label:"北塔区",value:"430511"},{label:"邵东县",value:"430521"},{label:"新邵县",value:"430522"},{label:"邵阳县",value:"430523"},{label:"隆回县",value:"430524"},{label:"洞口县",value:"430525"},{label:"绥宁县",value:"430527"},{label:"新宁县",value:"430528"},{label:"城步苗族自治县",value:"430529"},{label:"武冈市",value:"430581"}],[{label:"岳阳楼区",value:"430602"},{label:"云溪区",value:"430603"},{label:"君山区",value:"430611"},{label:"岳阳县",value:"430621"},{label:"华容县",value:"430623"},{label:"湘阴县",value:"430624"},{label:"平江县",value:"430626"},{label:"岳阳市屈原管理区",value:"430671"},{label:"汨罗市",value:"430681"},{label:"临湘市",value:"430682"}],[{label:"武陵区",value:"430702"},{label:"鼎城区",value:"430703"},{label:"安乡县",value:"430721"},{label:"汉寿县",value:"430722"},{label:"澧县",value:"430723"},{label:"临澧县",value:"430724"},{label:"桃源县",value:"430725"},{label:"石门县",value:"430726"},{label:"常德市西洞庭管理区",value:"430771"},{label:"津市市",value:"430781"}],[{label:"永定区",value:"430802"},{label:"武陵源区",value:"430811"},{label:"慈利县",value:"430821"},{label:"桑植县",value:"430822"}],[{label:"资阳区",value:"430902"},{label:"赫山区",value:"430903"},{label:"南县",value:"430921"},{label:"桃江县",value:"430922"},{label:"安化县",value:"430923"},{label:"益阳市大通湖管理区",value:"430971"},{label:"湖南益阳高新技术产业园区",value:"430972"},{label:"沅江市",value:"430981"}],[{label:"北湖区",value:"431002"},{label:"苏仙区",value:"431003"},{label:"桂阳县",value:"431021"},{label:"宜章县",value:"431022"},{label:"永兴县",value:"431023"},{label:"嘉禾县",value:"431024"},{label:"临武县",value:"431025"},{label:"汝城县",value:"431026"},{label:"桂东县",value:"431027"},{label:"安仁县",value:"431028"},{label:"资兴市",value:"431081"}],[{label:"零陵区",value:"431102"},{label:"冷水滩区",value:"431103"},{label:"祁阳县",value:"431121"},{label:"东安县",value:"431122"},{label:"双牌县",value:"431123"},{label:"道县",value:"431124"},{label:"江永县",value:"431125"},{label:"宁远县",value:"431126"},{label:"蓝山县",value:"431127"},{label:"新田县",value:"431128"},{label:"江华瑶族自治县",value:"431129"},{label:"永州经济技术开发区",value:"431171"},{label:"永州市金洞管理区",value:"431172"},{label:"永州市回龙圩管理区",value:"431173"}],[{label:"鹤城区",value:"431202"},{label:"中方县",value:"431221"},{label:"沅陵县",value:"431222"},{label:"辰溪县",value:"431223"},{label:"溆浦县",value:"431224"},{label:"会同县",value:"431225"},{label:"麻阳苗族自治县",value:"431226"},{label:"新晃侗族自治县",value:"431227"},{label:"芷江侗族自治县",value:"431228"},{label:"靖州苗族侗族自治县",value:"431229"},{label:"通道侗族自治县",value:"431230"},{label:"怀化市洪江管理区",value:"431271"},{label:"洪江市",value:"431281"}],[{label:"娄星区",value:"431302"},{label:"双峰县",value:"431321"},{label:"新化县",value:"431322"},{label:"冷水江市",value:"431381"},{label:"涟源市",value:"431382"}],[{label:"吉首市",value:"433101"},{label:"泸溪县",value:"433122"},{label:"凤凰县",value:"433123"},{label:"花垣县",value:"433124"},{label:"保靖县",value:"433125"},{label:"古丈县",value:"433126"},{label:"永顺县",value:"433127"},{label:"龙山县",value:"433130"},{label:"湖南吉首经济开发区",value:"433172"},{label:"湖南永顺经济开发区",value:"433173"}]],[[{label:"荔湾区",value:"440103"},{label:"越秀区",value:"440104"},{label:"海珠区",value:"440105"},{label:"天河区",value:"440106"},{label:"白云区",value:"440111"},{label:"黄埔区",value:"440112"},{label:"番禺区",value:"440113"},{label:"花都区",value:"440114"},{label:"南沙区",value:"440115"},{label:"从化区",value:"440117"},{label:"增城区",value:"440118"}],[{label:"武江区",value:"440203"},{label:"浈江区",value:"440204"},{label:"曲江区",value:"440205"},{label:"始兴县",value:"440222"},{label:"仁化县",value:"440224"},{label:"翁源县",value:"440229"},{label:"乳源瑶族自治县",value:"440232"},{label:"新丰县",value:"440233"},{label:"乐昌市",value:"440281"},{label:"南雄市",value:"440282"}],[{label:"罗湖区",value:"440303"},{label:"福田区",value:"440304"},{label:"南山区",value:"440305"},{label:"宝安区",value:"440306"},{label:"龙岗区",value:"440307"},{label:"盐田区",value:"440308"},{label:"龙华区",value:"440309"},{label:"坪山区",value:"440310"}],[{label:"香洲区",value:"440402"},{label:"斗门区",value:"440403"},{label:"金湾区",value:"440404"}],[{label:"龙湖区",value:"440507"},{label:"金平区",value:"440511"},{label:"濠江区",value:"440512"},{label:"潮阳区",value:"440513"},{label:"潮南区",value:"440514"},{label:"澄海区",value:"440515"},{label:"南澳县",value:"440523"}],[{label:"禅城区",value:"440604"},{label:"南海区",value:"440605"},{label:"顺德区",value:"440606"},{label:"三水区",value:"440607"},{label:"高明区",value:"440608"}],[{label:"蓬江区",value:"440703"},{label:"江海区",value:"440704"},{label:"新会区",value:"440705"},{label:"台山市",value:"440781"},{label:"开平市",value:"440783"},{label:"鹤山市",value:"440784"},{label:"恩平市",value:"440785"}],[{label:"赤坎区",value:"440802"},{label:"霞山区",value:"440803"},{label:"坡头区",value:"440804"},{label:"麻章区",value:"440811"},{label:"遂溪县",value:"440823"},{label:"徐闻县",value:"440825"},{label:"廉江市",value:"440881"},{label:"雷州市",value:"440882"},{label:"吴川市",value:"440883"}],[{label:"茂南区",value:"440902"},{label:"电白区",value:"440904"},{label:"高州市",value:"440981"},{label:"化州市",value:"440982"},{label:"信宜市",value:"440983"}],[{label:"端州区",value:"441202"},{label:"鼎湖区",value:"441203"},{label:"高要区",value:"441204"},{label:"广宁县",value:"441223"},{label:"怀集县",value:"441224"},{label:"封开县",value:"441225"},{label:"德庆县",value:"441226"},{label:"四会市",value:"441284"}],[{label:"惠城区",value:"441302"},{label:"惠阳区",value:"441303"},{label:"博罗县",value:"441322"},{label:"惠东县",value:"441323"},{label:"龙门县",value:"441324"}],[{label:"梅江区",value:"441402"},{label:"梅县区",value:"441403"},{label:"大埔县",value:"441422"},{label:"丰顺县",value:"441423"},{label:"五华县",value:"441424"},{label:"平远县",value:"441426"},{label:"蕉岭县",value:"441427"},{label:"兴宁市",value:"441481"}],[{label:"城区",value:"441502"},{label:"海丰县",value:"441521"},{label:"陆河县",value:"441523"},{label:"陆丰市",value:"441581"}],[{label:"源城区",value:"441602"},{label:"紫金县",value:"441621"},{label:"龙川县",value:"441622"},{label:"连平县",value:"441623"},{label:"和平县",value:"441624"},{label:"东源县",value:"441625"}],[{label:"江城区",value:"441702"},{label:"阳东区",value:"441704"},{label:"阳西县",value:"441721"},{label:"阳春市",value:"441781"}],[{label:"清城区",value:"441802"},{label:"清新区",value:"441803"},{label:"佛冈县",value:"441821"},{label:"阳山县",value:"441823"},{label:"连山壮族瑶族自治县",value:"441825"},{label:"连南瑶族自治县",value:"441826"},{label:"英德市",value:"441881"},{label:"连州市",value:"441882"}],[{label:"东莞市",value:"441900"}],[{label:"中山市",value:"442000"}],[{label:"湘桥区",value:"445102"},{label:"潮安区",value:"445103"},{label:"饶平县",value:"445122"}],[{label:"榕城区",value:"445202"},{label:"揭东区",value:"445203"},{label:"揭西县",value:"445222"},{label:"惠来县",value:"445224"},{label:"普宁市",value:"445281"}],[{label:"云城区",value:"445302"},{label:"云安区",value:"445303"},{label:"新兴县",value:"445321"},{label:"郁南县",value:"445322"},{label:"罗定市",value:"445381"}]],[[{label:"兴宁区",value:"450102"},{label:"青秀区",value:"450103"},{label:"江南区",value:"450105"},{label:"西乡塘区",value:"450107"},{label:"良庆区",value:"450108"},{label:"邕宁区",value:"450109"},{label:"武鸣区",value:"450110"},{label:"隆安县",value:"450123"},{label:"马山县",value:"450124"},{label:"上林县",value:"450125"},{label:"宾阳县",value:"450126"},{label:"横县",value:"450127"}],[{label:"城中区",value:"450202"},{label:"鱼峰区",value:"450203"},{label:"柳南区",value:"450204"},{label:"柳北区",value:"450205"},{label:"柳江区",value:"450206"},{label:"柳城县",value:"450222"},{label:"鹿寨县",value:"450223"},{label:"融安县",value:"450224"},{label:"融水苗族自治县",value:"450225"},{label:"三江侗族自治县",value:"450226"}],[{label:"秀峰区",value:"450302"},{label:"叠彩区",value:"450303"},{label:"象山区",value:"450304"},{label:"七星区",value:"450305"},{label:"雁山区",value:"450311"},{label:"临桂区",value:"450312"},{label:"阳朔县",value:"450321"},{label:"灵川县",value:"450323"},{label:"全州县",value:"450324"},{label:"兴安县",value:"450325"},{label:"永福县",value:"450326"},{label:"灌阳县",value:"450327"},{label:"龙胜各族自治县",value:"450328"},{label:"资源县",value:"450329"},{label:"平乐县",value:"450330"},{label:"荔浦县",value:"450331"},{label:"恭城瑶族自治县",value:"450332"}],[{label:"万秀区",value:"450403"},{label:"长洲区",value:"450405"},{label:"龙圩区",value:"450406"},{label:"苍梧县",value:"450421"},{label:"藤县",value:"450422"},{label:"蒙山县",value:"450423"},{label:"岑溪市",value:"450481"}],[{label:"海城区",value:"450502"},{label:"银海区",value:"450503"},{label:"铁山港区",value:"450512"},{label:"合浦县",value:"450521"}],[{label:"港口区",value:"450602"},{label:"防城区",value:"450603"},{label:"上思县",value:"450621"},{label:"东兴市",value:"450681"}],[{label:"钦南区",value:"450702"},{label:"钦北区",value:"450703"},{label:"灵山县",value:"450721"},{label:"浦北县",value:"450722"}],[{label:"港北区",value:"450802"},{label:"港南区",value:"450803"},{label:"覃塘区",value:"450804"},{label:"平南县",value:"450821"},{label:"桂平市",value:"450881"}],[{label:"玉州区",value:"450902"},{label:"福绵区",value:"450903"},{label:"容县",value:"450921"},{label:"陆川县",value:"450922"},{label:"博白县",value:"450923"},{label:"兴业县",value:"450924"},{label:"北流市",value:"450981"}],[{label:"右江区",value:"451002"},{label:"田阳县",value:"451021"},{label:"田东县",value:"451022"},{label:"平果县",value:"451023"},{label:"德保县",value:"451024"},{label:"那坡县",value:"451026"},{label:"凌云县",value:"451027"},{label:"乐业县",value:"451028"},{label:"田林县",value:"451029"},{label:"西林县",value:"451030"},{label:"隆林各族自治县",value:"451031"},{label:"靖西市",value:"451081"}],[{label:"八步区",value:"451102"},{label:"平桂区",value:"451103"},{label:"昭平县",value:"451121"},{label:"钟山县",value:"451122"},{label:"富川瑶族自治县",value:"451123"}],[{label:"金城江区",value:"451202"},{label:"宜州区",value:"451203"},{label:"南丹县",value:"451221"},{label:"天峨县",value:"451222"},{label:"凤山县",value:"451223"},{label:"东兰县",value:"451224"},{label:"罗城仫佬族自治县",value:"451225"},{label:"环江毛南族自治县",value:"451226"},{label:"巴马瑶族自治县",value:"451227"},{label:"都安瑶族自治县",value:"451228"},{label:"大化瑶族自治县",value:"451229"}],[{label:"兴宾区",value:"451302"},{label:"忻城县",value:"451321"},{label:"象州县",value:"451322"},{label:"武宣县",value:"451323"},{label:"金秀瑶族自治县",value:"451324"},{label:"合山市",value:"451381"}],[{label:"江州区",value:"451402"},{label:"扶绥县",value:"451421"},{label:"宁明县",value:"451422"},{label:"龙州县",value:"451423"},{label:"大新县",value:"451424"},{label:"天等县",value:"451425"},{label:"凭祥市",value:"451481"}]],[[{label:"秀英区",value:"460105"},{label:"龙华区",value:"460106"},{label:"琼山区",value:"460107"},{label:"美兰区",value:"460108"}],[{label:"海棠区",value:"460202"},{label:"吉阳区",value:"460203"},{label:"天涯区",value:"460204"},{label:"崖州区",value:"460205"}],[{label:"西沙群岛",value:"460321"},{label:"南沙群岛",value:"460322"},{label:"中沙群岛的岛礁及其海域",value:"460323"}],[{label:"儋州市",value:"460400"}],[{label:"五指山市",value:"469001"},{label:"琼海市",value:"469002"},{label:"文昌市",value:"469005"},{label:"万宁市",value:"469006"},{label:"东方市",value:"469007"},{label:"定安县",value:"469021"},{label:"屯昌县",value:"469022"},{label:"澄迈县",value:"469023"},{label:"临高县",value:"469024"},{label:"白沙黎族自治县",value:"469025"},{label:"昌江黎族自治县",value:"469026"},{label:"乐东黎族自治县",value:"469027"},{label:"陵水黎族自治县",value:"469028"},{label:"保亭黎族苗族自治县",value:"469029"},{label:"琼中黎族苗族自治县",value:"469030"}]],[[{label:"万州区",value:"500101"},{label:"涪陵区",value:"500102"},{label:"渝中区",value:"500103"},{label:"大渡口区",value:"500104"},{label:"江北区",value:"500105"},{label:"沙坪坝区",value:"500106"},{label:"九龙坡区",value:"500107"},{label:"南岸区",value:"500108"},{label:"北碚区",value:"500109"},{label:"綦江区",value:"500110"},{label:"大足区",value:"500111"},{label:"渝北区",value:"500112"},{label:"巴南区",value:"500113"},{label:"黔江区",value:"500114"},{label:"长寿区",value:"500115"},{label:"江津区",value:"500116"},{label:"合川区",value:"500117"},{label:"永川区",value:"500118"},{label:"南川区",value:"500119"},{label:"璧山区",value:"500120"},{label:"铜梁区",value:"500151"},{label:"潼南区",value:"500152"},{label:"荣昌区",value:"500153"},{label:"开州区",value:"500154"},{label:"梁平区",value:"500155"},{label:"武隆区",value:"500156"}],[{label:"城口县",value:"500229"},{label:"丰都县",value:"500230"},{label:"垫江县",value:"500231"},{label:"忠县",value:"500233"},{label:"云阳县",value:"500235"},{label:"奉节县",value:"500236"},{label:"巫山县",value:"500237"},{label:"巫溪县",value:"500238"},{label:"石柱土家族自治县",value:"500240"},{label:"秀山土家族苗族自治县",value:"500241"},{label:"酉阳土家族苗族自治县",value:"500242"},{label:"彭水苗族土家族自治县",value:"500243"}]],[[{label:"锦江区",value:"510104"},{label:"青羊区",value:"510105"},{label:"金牛区",value:"510106"},{label:"武侯区",value:"510107"},{label:"成华区",value:"510108"},{label:"龙泉驿区",value:"510112"},{label:"青白江区",value:"510113"},{label:"新都区",value:"510114"},{label:"温江区",value:"510115"},{label:"双流区",value:"510116"},{label:"郫都区",value:"510117"},{label:"金堂县",value:"510121"},{label:"大邑县",value:"510129"},{label:"蒲江县",value:"510131"},{label:"新津县",value:"510132"},{label:"都江堰市",value:"510181"},{label:"彭州市",value:"510182"},{label:"邛崃市",value:"510183"},{label:"崇州市",value:"510184"},{label:"简阳市",value:"510185"}],[{label:"自流井区",value:"510302"},{label:"贡井区",value:"510303"},{label:"大安区",value:"510304"},{label:"沿滩区",value:"510311"},{label:"荣县",value:"510321"},{label:"富顺县",value:"510322"}],[{label:"东区",value:"510402"},{label:"西区",value:"510403"},{label:"仁和区",value:"510411"},{label:"米易县",value:"510421"},{label:"盐边县",value:"510422"}],[{label:"江阳区",value:"510502"},{label:"纳溪区",value:"510503"},{label:"龙马潭区",value:"510504"},{label:"泸县",value:"510521"},{label:"合江县",value:"510522"},{label:"叙永县",value:"510524"},{label:"古蔺县",value:"510525"}],[{label:"旌阳区",value:"510603"},{label:"罗江区",value:"510604"},{label:"中江县",value:"510623"},{label:"广汉市",value:"510681"},{label:"什邡市",value:"510682"},{label:"绵竹市",value:"510683"}],[{label:"涪城区",value:"510703"},{label:"游仙区",value:"510704"},{label:"安州区",value:"510705"},{label:"三台县",value:"510722"},{label:"盐亭县",value:"510723"},{label:"梓潼县",value:"510725"},{label:"北川羌族自治县",value:"510726"},{label:"平武县",value:"510727"},{label:"江油市",value:"510781"}],[{label:"利州区",value:"510802"},{label:"昭化区",value:"510811"},{label:"朝天区",value:"510812"},{label:"旺苍县",value:"510821"},{label:"青川县",value:"510822"},{label:"剑阁县",value:"510823"},{label:"苍溪县",value:"510824"}],[{label:"船山区",value:"510903"},{label:"安居区",value:"510904"},{label:"蓬溪县",value:"510921"},{label:"射洪县",value:"510922"},{label:"大英县",value:"510923"}],[{label:"市中区",value:"511002"},{label:"东兴区",value:"511011"},{label:"威远县",value:"511024"},{label:"资中县",value:"511025"},{label:"内江经济开发区",value:"511071"},{label:"隆昌市",value:"511083"}],[{label:"市中区",value:"511102"},{label:"沙湾区",value:"511111"},{label:"五通桥区",value:"511112"},{label:"金口河区",value:"511113"},{label:"犍为县",value:"511123"},{label:"井研县",value:"511124"},{label:"夹江县",value:"511126"},{label:"沐川县",value:"511129"},{label:"峨边彝族自治县",value:"511132"},{label:"马边彝族自治县",value:"511133"},{label:"峨眉山市",value:"511181"}],[{label:"顺庆区",value:"511302"},{label:"高坪区",value:"511303"},{label:"嘉陵区",value:"511304"},{label:"南部县",value:"511321"},{label:"营山县",value:"511322"},{label:"蓬安县",value:"511323"},{label:"仪陇县",value:"511324"},{label:"西充县",value:"511325"},{label:"阆中市",value:"511381"}],[{label:"东坡区",value:"511402"},{label:"彭山区",value:"511403"},{label:"仁寿县",value:"511421"},{label:"洪雅县",value:"511423"},{label:"丹棱县",value:"511424"},{label:"青神县",value:"511425"}],[{label:"翠屏区",value:"511502"},{label:"南溪区",value:"511503"},{label:"宜宾县",value:"511521"},{label:"江安县",value:"511523"},{label:"长宁县",value:"511524"},{label:"高县",value:"511525"},{label:"珙县",value:"511526"},{label:"筠连县",value:"511527"},{label:"兴文县",value:"511528"},{label:"屏山县",value:"511529"}],[{label:"广安区",value:"511602"},{label:"前锋区",value:"511603"},{label:"岳池县",value:"511621"},{label:"武胜县",value:"511622"},{label:"邻水县",value:"511623"},{label:"华蓥市",value:"511681"}],[{label:"通川区",value:"511702"},{label:"达川区",value:"511703"},{label:"宣汉县",value:"511722"},{label:"开江县",value:"511723"},{label:"大竹县",value:"511724"},{label:"渠县",value:"511725"},{label:"达州经济开发区",value:"511771"},{label:"万源市",value:"511781"}],[{label:"雨城区",value:"511802"},{label:"名山区",value:"511803"},{label:"荥经县",value:"511822"},{label:"汉源县",value:"511823"},{label:"石棉县",value:"511824"},{label:"天全县",value:"511825"},{label:"芦山县",value:"511826"},{label:"宝兴县",value:"511827"}],[{label:"巴州区",value:"511902"},{label:"恩阳区",value:"511903"},{label:"通江县",value:"511921"},{label:"南江县",value:"511922"},{label:"平昌县",value:"511923"},{label:"巴中经济开发区",value:"511971"}],[{label:"雁江区",value:"512002"},{label:"安岳县",value:"512021"},{label:"乐至县",value:"512022"}],[{label:"马尔康市",value:"513201"},{label:"汶川县",value:"513221"},{label:"理县",value:"513222"},{label:"茂县",value:"513223"},{label:"松潘县",value:"513224"},{label:"九寨沟县",value:"513225"},{label:"金川县",value:"513226"},{label:"小金县",value:"513227"},{label:"黑水县",value:"513228"},{label:"壤塘县",value:"513230"},{label:"阿坝县",value:"513231"},{label:"若尔盖县",value:"513232"},{label:"红原县",value:"513233"}],[{label:"康定市",value:"513301"},{label:"泸定县",value:"513322"},{label:"丹巴县",value:"513323"},{label:"九龙县",value:"513324"},{label:"雅江县",value:"513325"},{label:"道孚县",value:"513326"},{label:"炉霍县",value:"513327"},{label:"甘孜县",value:"513328"},{label:"新龙县",value:"513329"},{label:"德格县",value:"513330"},{label:"白玉县",value:"513331"},{label:"石渠县",value:"513332"},{label:"色达县",value:"513333"},{label:"理塘县",value:"513334"},{label:"巴塘县",value:"513335"},{label:"乡城县",value:"513336"},{label:"稻城县",value:"513337"},{label:"得荣县",value:"513338"}],[{label:"西昌市",value:"513401"},{label:"木里藏族自治县",value:"513422"},{label:"盐源县",value:"513423"},{label:"德昌县",value:"513424"},{label:"会理县",value:"513425"},{label:"会东县",value:"513426"},{label:"宁南县",value:"513427"},{label:"普格县",value:"513428"},{label:"布拖县",value:"513429"},{label:"金阳县",value:"513430"},{label:"昭觉县",value:"513431"},{label:"喜德县",value:"513432"},{label:"冕宁县",value:"513433"},{label:"越西县",value:"513434"},{label:"甘洛县",value:"513435"},{label:"美姑县",value:"513436"},{label:"雷波县",value:"513437"}]],[[{label:"南明区",value:"520102"},{label:"云岩区",value:"520103"},{label:"花溪区",value:"520111"},{label:"乌当区",value:"520112"},{label:"白云区",value:"520113"},{label:"观山湖区",value:"520115"},{label:"开阳县",value:"520121"},{label:"息烽县",value:"520122"},{label:"修文县",value:"520123"},{label:"清镇市",value:"520181"}],[{label:"钟山区",value:"520201"},{label:"六枝特区",value:"520203"},{label:"水城县",value:"520221"},{label:"盘州市",value:"520281"}],[{label:"红花岗区",value:"520302"},{label:"汇川区",value:"520303"},{label:"播州区",value:"520304"},{label:"桐梓县",value:"520322"},{label:"绥阳县",value:"520323"},{label:"正安县",value:"520324"},{label:"道真仡佬族苗族自治县",value:"520325"},{label:"务川仡佬族苗族自治县",value:"520326"},{label:"凤冈县",value:"520327"},{label:"湄潭县",value:"520328"},{label:"余庆县",value:"520329"},{label:"习水县",value:"520330"},{label:"赤水市",value:"520381"},{label:"仁怀市",value:"520382"}],[{label:"西秀区",value:"520402"},{label:"平坝区",value:"520403"},{label:"普定县",value:"520422"},{label:"镇宁布依族苗族自治县",value:"520423"},{label:"关岭布依族苗族自治县",value:"520424"},{label:"紫云苗族布依族自治县",value:"520425"}],[{label:"七星关区",value:"520502"},{label:"大方县",value:"520521"},{label:"黔西县",value:"520522"},{label:"金沙县",value:"520523"},{label:"织金县",value:"520524"},{label:"纳雍县",value:"520525"},{label:"威宁彝族回族苗族自治县",value:"520526"},{label:"赫章县",value:"520527"}],[{label:"碧江区",value:"520602"},{label:"万山区",value:"520603"},{label:"江口县",value:"520621"},{label:"玉屏侗族自治县",value:"520622"},{label:"石阡县",value:"520623"},{label:"思南县",value:"520624"},{label:"印江土家族苗族自治县",value:"520625"},{label:"德江县",value:"520626"},{label:"沿河土家族自治县",value:"520627"},{label:"松桃苗族自治县",value:"520628"}],[{label:"兴义市",value:"522301"},{label:"兴仁县",value:"522322"},{label:"普安县",value:"522323"},{label:"晴隆县",value:"522324"},{label:"贞丰县",value:"522325"},{label:"望谟县",value:"522326"},{label:"册亨县",value:"522327"},{label:"安龙县",value:"522328"}],[{label:"凯里市",value:"522601"},{label:"黄平县",value:"522622"},{label:"施秉县",value:"522623"},{label:"三穗县",value:"522624"},{label:"镇远县",value:"522625"},{label:"岑巩县",value:"522626"},{label:"天柱县",value:"522627"},{label:"锦屏县",value:"522628"},{label:"剑河县",value:"522629"},{label:"台江县",value:"522630"},{label:"黎平县",value:"522631"},{label:"榕江县",value:"522632"},{label:"从江县",value:"522633"},{label:"雷山县",value:"522634"},{label:"麻江县",value:"522635"},{label:"丹寨县",value:"522636"}],[{label:"都匀市",value:"522701"},{label:"福泉市",value:"522702"},{label:"荔波县",value:"522722"},{label:"贵定县",value:"522723"},{label:"瓮安县",value:"522725"},{label:"独山县",value:"522726"},{label:"平塘县",value:"522727"},{label:"罗甸县",value:"522728"},{label:"长顺县",value:"522729"},{label:"龙里县",value:"522730"},{label:"惠水县",value:"522731"},{label:"三都水族自治县",value:"522732"}]],[[{label:"五华区",value:"530102"},{label:"盘龙区",value:"530103"},{label:"官渡区",value:"530111"},{label:"西山区",value:"530112"},{label:"东川区",value:"530113"},{label:"呈贡区",value:"530114"},{label:"晋宁区",value:"530115"},{label:"富民县",value:"530124"},{label:"宜良县",value:"530125"},{label:"石林彝族自治县",value:"530126"},{label:"嵩明县",value:"530127"},{label:"禄劝彝族苗族自治县",value:"530128"},{label:"寻甸回族彝族自治县",value:"530129"},{label:"安宁市",value:"530181"}],[{label:"麒麟区",value:"530302"},{label:"沾益区",value:"530303"},{label:"马龙县",value:"530321"},{label:"陆良县",value:"530322"},{label:"师宗县",value:"530323"},{label:"罗平县",value:"530324"},{label:"富源县",value:"530325"},{label:"会泽县",value:"530326"},{label:"宣威市",value:"530381"}],[{label:"红塔区",value:"530402"},{label:"江川区",value:"530403"},{label:"澄江县",value:"530422"},{label:"通海县",value:"530423"},{label:"华宁县",value:"530424"},{label:"易门县",value:"530425"},{label:"峨山彝族自治县",value:"530426"},{label:"新平彝族傣族自治县",value:"530427"},{label:"元江哈尼族彝族傣族自治县",value:"530428"}],[{label:"隆阳区",value:"530502"},{label:"施甸县",value:"530521"},{label:"龙陵县",value:"530523"},{label:"昌宁县",value:"530524"},{label:"腾冲市",value:"530581"}],[{label:"昭阳区",value:"530602"},{label:"鲁甸县",value:"530621"},{label:"巧家县",value:"530622"},{label:"盐津县",value:"530623"},{label:"大关县",value:"530624"},{label:"永善县",value:"530625"},{label:"绥江县",value:"530626"},{label:"镇雄县",value:"530627"},{label:"彝良县",value:"530628"},{label:"威信县",value:"530629"},{label:"水富县",value:"530630"}],[{label:"古城区",value:"530702"},{label:"玉龙纳西族自治县",value:"530721"},{label:"永胜县",value:"530722"},{label:"华坪县",value:"530723"},{label:"宁蒗彝族自治县",value:"530724"}],[{label:"思茅区",value:"530802"},{label:"宁洱哈尼族彝族自治县",value:"530821"},{label:"墨江哈尼族自治县",value:"530822"},{label:"景东彝族自治县",value:"530823"},{label:"景谷傣族彝族自治县",value:"530824"},{label:"镇沅彝族哈尼族拉祜族自治县",value:"530825"},{label:"江城哈尼族彝族自治县",value:"530826"},{label:"孟连傣族拉祜族佤族自治县",value:"530827"},{label:"澜沧拉祜族自治县",value:"530828"},{label:"西盟佤族自治县",value:"530829"}],[{label:"临翔区",value:"530902"},{label:"凤庆县",value:"530921"},{label:"云县",value:"530922"},{label:"永德县",value:"530923"},{label:"镇康县",value:"530924"},{label:"双江拉祜族佤族布朗族傣族自治县",value:"530925"},{label:"耿马傣族佤族自治县",value:"530926"},{label:"沧源佤族自治县",value:"530927"}],[{label:"楚雄市",value:"532301"},{label:"双柏县",value:"532322"},{label:"牟定县",value:"532323"},{label:"南华县",value:"532324"},{label:"姚安县",value:"532325"},{label:"大姚县",value:"532326"},{label:"永仁县",value:"532327"},{label:"元谋县",value:"532328"},{label:"武定县",value:"532329"},{label:"禄丰县",value:"532331"}],[{label:"个旧市",value:"532501"},{label:"开远市",value:"532502"},{label:"蒙自市",value:"532503"},{label:"弥勒市",value:"532504"},{label:"屏边苗族自治县",value:"532523"},{label:"建水县",value:"532524"},{label:"石屏县",value:"532525"},{label:"泸西县",value:"532527"},{label:"元阳县",value:"532528"},{label:"红河县",value:"532529"},{label:"金平苗族瑶族傣族自治县",value:"532530"},{label:"绿春县",value:"532531"},{label:"河口瑶族自治县",value:"532532"}],[{label:"文山市",value:"532601"},{label:"砚山县",value:"532622"},{label:"西畴县",value:"532623"},{label:"麻栗坡县",value:"532624"},{label:"马关县",value:"532625"},{label:"丘北县",value:"532626"},{label:"广南县",value:"532627"},{label:"富宁县",value:"532628"}],[{label:"景洪市",value:"532801"},{label:"勐海县",value:"532822"},{label:"勐腊县",value:"532823"}],[{label:"大理市",value:"532901"},{label:"漾濞彝族自治县",value:"532922"},{label:"祥云县",value:"532923"},{label:"宾川县",value:"532924"},{label:"弥渡县",value:"532925"},{label:"南涧彝族自治县",value:"532926"},{label:"巍山彝族回族自治县",value:"532927"},{label:"永平县",value:"532928"},{label:"云龙县",value:"532929"},{label:"洱源县",value:"532930"},{label:"剑川县",value:"532931"},{label:"鹤庆县",value:"532932"}],[{label:"瑞丽市",value:"533102"},{label:"芒市",value:"533103"},{label:"梁河县",value:"533122"},{label:"盈江县",value:"533123"},{label:"陇川县",value:"533124"}],[{label:"泸水市",value:"533301"},{label:"福贡县",value:"533323"},{label:"贡山独龙族怒族自治县",value:"533324"},{label:"兰坪白族普米族自治县",value:"533325"}],[{label:"香格里拉市",value:"533401"},{label:"德钦县",value:"533422"},{label:"维西傈僳族自治县",value:"533423"}]],[[{label:"城关区",value:"540102"},{label:"堆龙德庆区",value:"540103"},{label:"林周县",value:"540121"},{label:"当雄县",value:"540122"},{label:"尼木县",value:"540123"},{label:"曲水县",value:"540124"},{label:"达孜县",value:"540126"},{label:"墨竹工卡县",value:"540127"},{label:"格尔木藏青工业园区",value:"540171"},{label:"拉萨经济技术开发区",value:"540172"},{label:"西藏文化旅游创意园区",value:"540173"},{label:"达孜工业园区",value:"540174"}],[{label:"桑珠孜区",value:"540202"},{label:"南木林县",value:"540221"},{label:"江孜县",value:"540222"},{label:"定日县",value:"540223"},{label:"萨迦县",value:"540224"},{label:"拉孜县",value:"540225"},{label:"昂仁县",value:"540226"},{label:"谢通门县",value:"540227"},{label:"白朗县",value:"540228"},{label:"仁布县",value:"540229"},{label:"康马县",value:"540230"},{label:"定结县",value:"540231"},{label:"仲巴县",value:"540232"},{label:"亚东县",value:"540233"},{label:"吉隆县",value:"540234"},{label:"聂拉木县",value:"540235"},{label:"萨嘎县",value:"540236"},{label:"岗巴县",value:"540237"}],[{label:"卡若区",value:"540302"},{label:"江达县",value:"540321"},{label:"贡觉县",value:"540322"},{label:"类乌齐县",value:"540323"},{label:"丁青县",value:"540324"},{label:"察雅县",value:"540325"},{label:"八宿县",value:"540326"},{label:"左贡县",value:"540327"},{label:"芒康县",value:"540328"},{label:"洛隆县",value:"540329"},{label:"边坝县",value:"540330"}],[{label:"巴宜区",value:"540402"},{label:"工布江达县",value:"540421"},{label:"米林县",value:"540422"},{label:"墨脱县",value:"540423"},{label:"波密县",value:"540424"},{label:"察隅县",value:"540425"},{label:"朗县",value:"540426"}],[{label:"乃东区",value:"540502"},{label:"扎囊县",value:"540521"},{label:"贡嘎县",value:"540522"},{label:"桑日县",value:"540523"},{label:"琼结县",value:"540524"},{label:"曲松县",value:"540525"},{label:"措美县",value:"540526"},{label:"洛扎县",value:"540527"},{label:"加查县",value:"540528"},{label:"隆子县",value:"540529"},{label:"错那县",value:"540530"},{label:"浪卡子县",value:"540531"}],[{label:"那曲县",value:"542421"},{label:"嘉黎县",value:"542422"},{label:"比如县",value:"542423"},{label:"聂荣县",value:"542424"},{label:"安多县",value:"542425"},{label:"申扎县",value:"542426"},{label:"索县",value:"542427"},{label:"班戈县",value:"542428"},{label:"巴青县",value:"542429"},{label:"尼玛县",value:"542430"},{label:"双湖县",value:"542431"}],[{label:"普兰县",value:"542521"},{label:"札达县",value:"542522"},{label:"噶尔县",value:"542523"},{label:"日土县",value:"542524"},{label:"革吉县",value:"542525"},{label:"改则县",value:"542526"},{label:"措勤县",value:"542527"}]],[[{label:"新城区",value:"610102"},{label:"碑林区",value:"610103"},{label:"莲湖区",value:"610104"},{label:"灞桥区",value:"610111"},{label:"未央区",value:"610112"},{label:"雁塔区",value:"610113"},{label:"阎良区",value:"610114"},{label:"临潼区",value:"610115"},{label:"长安区",value:"610116"},{label:"高陵区",value:"610117"},{label:"鄠邑区",value:"610118"},{label:"蓝田县",value:"610122"},{label:"周至县",value:"610124"}],[{label:"王益区",value:"610202"},{label:"印台区",value:"610203"},{label:"耀州区",value:"610204"},{label:"宜君县",value:"610222"}],[{label:"渭滨区",value:"610302"},{label:"金台区",value:"610303"},{label:"陈仓区",value:"610304"},{label:"凤翔县",value:"610322"},{label:"岐山县",value:"610323"},{label:"扶风县",value:"610324"},{label:"眉县",value:"610326"},{label:"陇县",value:"610327"},{label:"千阳县",value:"610328"},{label:"麟游县",value:"610329"},{label:"凤县",value:"610330"},{label:"太白县",value:"610331"}],[{label:"秦都区",value:"610402"},{label:"杨陵区",value:"610403"},{label:"渭城区",value:"610404"},{label:"三原县",value:"610422"},{label:"泾阳县",value:"610423"},{label:"乾县",value:"610424"},{label:"礼泉县",value:"610425"},{label:"永寿县",value:"610426"},{label:"彬县",value:"610427"},{label:"长武县",value:"610428"},{label:"旬邑县",value:"610429"},{label:"淳化县",value:"610430"},{label:"武功县",value:"610431"},{label:"兴平市",value:"610481"}],[{label:"临渭区",value:"610502"},{label:"华州区",value:"610503"},{label:"潼关县",value:"610522"},{label:"大荔县",value:"610523"},{label:"合阳县",value:"610524"},{label:"澄城县",value:"610525"},{label:"蒲城县",value:"610526"},{label:"白水县",value:"610527"},{label:"富平县",value:"610528"},{label:"韩城市",value:"610581"},{label:"华阴市",value:"610582"}],[{label:"宝塔区",value:"610602"},{label:"安塞区",value:"610603"},{label:"延长县",value:"610621"},{label:"延川县",value:"610622"},{label:"子长县",value:"610623"},{label:"志丹县",value:"610625"},{label:"吴起县",value:"610626"},{label:"甘泉县",value:"610627"},{label:"富县",value:"610628"},{label:"洛川县",value:"610629"},{label:"宜川县",value:"610630"},{label:"黄龙县",value:"610631"},{label:"黄陵县",value:"610632"}],[{label:"汉台区",value:"610702"},{label:"南郑区",value:"610703"},{label:"城固县",value:"610722"},{label:"洋县",value:"610723"},{label:"西乡县",value:"610724"},{label:"勉县",value:"610725"},{label:"宁强县",value:"610726"},{label:"略阳县",value:"610727"},{label:"镇巴县",value:"610728"},{label:"留坝县",value:"610729"},{label:"佛坪县",value:"610730"}],[{label:"榆阳区",value:"610802"},{label:"横山区",value:"610803"},{label:"府谷县",value:"610822"},{label:"靖边县",value:"610824"},{label:"定边县",value:"610825"},{label:"绥德县",value:"610826"},{label:"米脂县",value:"610827"},{label:"佳县",value:"610828"},{label:"吴堡县",value:"610829"},{label:"清涧县",value:"610830"},{label:"子洲县",value:"610831"},{label:"神木市",value:"610881"}],[{label:"汉滨区",value:"610902"},{label:"汉阴县",value:"610921"},{label:"石泉县",value:"610922"},{label:"宁陕县",value:"610923"},{label:"紫阳县",value:"610924"},{label:"岚皋县",value:"610925"},{label:"平利县",value:"610926"},{label:"镇坪县",value:"610927"},{label:"旬阳县",value:"610928"},{label:"白河县",value:"610929"}],[{label:"商州区",value:"611002"},{label:"洛南县",value:"611021"},{label:"丹凤县",value:"611022"},{label:"商南县",value:"611023"},{label:"山阳县",value:"611024"},{label:"镇安县",value:"611025"},{label:"柞水县",value:"611026"}]],[[{label:"城关区",value:"620102"},{label:"七里河区",value:"620103"},{label:"西固区",value:"620104"},{label:"安宁区",value:"620105"},{label:"红古区",value:"620111"},{label:"永登县",value:"620121"},{label:"皋兰县",value:"620122"},{label:"榆中县",value:"620123"},{label:"兰州新区",value:"620171"}],[{label:"嘉峪关市",value:"620201"}],[{label:"金川区",value:"620302"},{label:"永昌县",value:"620321"}],[{label:"白银区",value:"620402"},{label:"平川区",value:"620403"},{label:"靖远县",value:"620421"},{label:"会宁县",value:"620422"},{label:"景泰县",value:"620423"}],[{label:"秦州区",value:"620502"},{label:"麦积区",value:"620503"},{label:"清水县",value:"620521"},{label:"秦安县",value:"620522"},{label:"甘谷县",value:"620523"},{label:"武山县",value:"620524"},{label:"张家川回族自治县",value:"620525"}],[{label:"凉州区",value:"620602"},{label:"民勤县",value:"620621"},{label:"古浪县",value:"620622"},{label:"天祝藏族自治县",value:"620623"}],[{label:"甘州区",value:"620702"},{label:"肃南裕固族自治县",value:"620721"},{label:"民乐县",value:"620722"},{label:"临泽县",value:"620723"},{label:"高台县",value:"620724"},{label:"山丹县",value:"620725"}],[{label:"崆峒区",value:"620802"},{label:"泾川县",value:"620821"},{label:"灵台县",value:"620822"},{label:"崇信县",value:"620823"},{label:"华亭县",value:"620824"},{label:"庄浪县",value:"620825"},{label:"静宁县",value:"620826"},{label:"平凉工业园区",value:"620871"}],[{label:"肃州区",value:"620902"},{label:"金塔县",value:"620921"},{label:"瓜州县",value:"620922"},{label:"肃北蒙古族自治县",value:"620923"},{label:"阿克塞哈萨克族自治县",value:"620924"},{label:"玉门市",value:"620981"},{label:"敦煌市",value:"620982"}],[{label:"西峰区",value:"621002"},{label:"庆城县",value:"621021"},{label:"环县",value:"621022"},{label:"华池县",value:"621023"},{label:"合水县",value:"621024"},{label:"正宁县",value:"621025"},{label:"宁县",value:"621026"},{label:"镇原县",value:"621027"}],[{label:"安定区",value:"621102"},{label:"通渭县",value:"621121"},{label:"陇西县",value:"621122"},{label:"渭源县",value:"621123"},{label:"临洮县",value:"621124"},{label:"漳县",value:"621125"},{label:"岷县",value:"621126"}],[{label:"武都区",value:"621202"},{label:"成县",value:"621221"},{label:"文县",value:"621222"},{label:"宕昌县",value:"621223"},{label:"康县",value:"621224"},{label:"西和县",value:"621225"},{label:"礼县",value:"621226"},{label:"徽县",value:"621227"},{label:"两当县",value:"621228"}],[{label:"临夏市",value:"622901"},{label:"临夏县",value:"622921"},{label:"康乐县",value:"622922"},{label:"永靖县",value:"622923"},{label:"广河县",value:"622924"},{label:"和政县",value:"622925"},{label:"东乡族自治县",value:"622926"},{label:"积石山保安族东乡族撒拉族自治县",value:"622927"}],[{label:"合作市",value:"623001"},{label:"临潭县",value:"623021"},{label:"卓尼县",value:"623022"},{label:"舟曲县",value:"623023"},{label:"迭部县",value:"623024"},{label:"玛曲县",value:"623025"},{label:"碌曲县",value:"623026"},{label:"夏河县",value:"623027"}]],[[{label:"城东区",value:"630102"},{label:"城中区",value:"630103"},{label:"城西区",value:"630104"},{label:"城北区",value:"630105"},{label:"大通回族土族自治县",value:"630121"},{label:"湟中县",value:"630122"},{label:"湟源县",value:"630123"}],[{label:"乐都区",value:"630202"},{label:"平安区",value:"630203"},{label:"民和回族土族自治县",value:"630222"},{label:"互助土族自治县",value:"630223"},{label:"化隆回族自治县",value:"630224"},{label:"循化撒拉族自治县",value:"630225"}],[{label:"门源回族自治县",value:"632221"},{label:"祁连县",value:"632222"},{label:"海晏县",value:"632223"},{label:"刚察县",value:"632224"}],[{label:"同仁县",value:"632321"},{label:"尖扎县",value:"632322"},{label:"泽库县",value:"632323"},{label:"河南蒙古族自治县",value:"632324"}],[{label:"共和县",value:"632521"},{label:"同德县",value:"632522"},{label:"贵德县",value:"632523"},{label:"兴海县",value:"632524"},{label:"贵南县",value:"632525"}],[{label:"玛沁县",value:"632621"},{label:"班玛县",value:"632622"},{label:"甘德县",value:"632623"},{label:"达日县",value:"632624"},{label:"久治县",value:"632625"},{label:"玛多县",value:"632626"}],[{label:"玉树市",value:"632701"},{label:"杂多县",value:"632722"},{label:"称多县",value:"632723"},{label:"治多县",value:"632724"},{label:"囊谦县",value:"632725"},{label:"曲麻莱县",value:"632726"}],[{label:"格尔木市",value:"632801"},{label:"德令哈市",value:"632802"},{label:"乌兰县",value:"632821"},{label:"都兰县",value:"632822"},{label:"天峻县",value:"632823"},{label:"大柴旦行政委员会",value:"632857"},{label:"冷湖行政委员会",value:"632858"},{label:"茫崖行政委员会",value:"632859"}]],[[{label:"兴庆区",value:"640104"},{label:"西夏区",value:"640105"},{label:"金凤区",value:"640106"},{label:"永宁县",value:"640121"},{label:"贺兰县",value:"640122"},{label:"灵武市",value:"640181"}],[{label:"大武口区",value:"640202"},{label:"惠农区",value:"640205"},{label:"平罗县",value:"640221"}],[{label:"利通区",value:"640302"},{label:"红寺堡区",value:"640303"},{label:"盐池县",value:"640323"},{label:"同心县",value:"640324"},{label:"青铜峡市",value:"640381"}],[{label:"原州区",value:"640402"},{label:"西吉县",value:"640422"},{label:"隆德县",value:"640423"},{label:"泾源县",value:"640424"},{label:"彭阳县",value:"640425"}],[{label:"沙坡头区",value:"640502"},{label:"中宁县",value:"640521"},{label:"海原县",value:"640522"}]],[[{label:"天山区",value:"650102"},{label:"沙依巴克区",value:"650103"},{label:"新市区",value:"650104"},{label:"水磨沟区",value:"650105"},{label:"头屯河区",value:"650106"},{label:"达坂城区",value:"650107"},{label:"米东区",value:"650109"},{label:"乌鲁木齐县",value:"650121"},{label:"乌鲁木齐经济技术开发区",value:"650171"},{label:"乌鲁木齐高新技术产业开发区",value:"650172"}],[{label:"独山子区",value:"650202"},{label:"克拉玛依区",value:"650203"},{label:"白碱滩区",value:"650204"},{label:"乌尔禾区",value:"650205"}],[{label:"高昌区",value:"650402"},{label:"鄯善县",value:"650421"},{label:"托克逊县",value:"650422"}],[{label:"伊州区",value:"650502"},{label:"巴里坤哈萨克自治县",value:"650521"},{label:"伊吾县",value:"650522"}],[{label:"昌吉市",value:"652301"},{label:"阜康市",value:"652302"},{label:"呼图壁县",value:"652323"},{label:"玛纳斯县",value:"652324"},{label:"奇台县",value:"652325"},{label:"吉木萨尔县",value:"652327"},{label:"木垒哈萨克自治县",value:"652328"}],[{label:"博乐市",value:"652701"},{label:"阿拉山口市",value:"652702"},{label:"精河县",value:"652722"},{label:"温泉县",value:"652723"}],[{label:"库尔勒市",value:"652801"},{label:"轮台县",value:"652822"},{label:"尉犁县",value:"652823"},{label:"若羌县",value:"652824"},{label:"且末县",value:"652825"},{label:"焉耆回族自治县",value:"652826"},{label:"和静县",value:"652827"},{label:"和硕县",value:"652828"},{label:"博湖县",value:"652829"},{label:"库尔勒经济技术开发区",value:"652871"}],[{label:"阿克苏市",value:"652901"},{label:"温宿县",value:"652922"},{label:"库车县",value:"652923"},{label:"沙雅县",value:"652924"},{label:"新和县",value:"652925"},{label:"拜城县",value:"652926"},{label:"乌什县",value:"652927"},{label:"阿瓦提县",value:"652928"},{label:"柯坪县",value:"652929"}],[{label:"阿图什市",value:"653001"},{label:"阿克陶县",value:"653022"},{label:"阿合奇县",value:"653023"},{label:"乌恰县",value:"653024"}],[{label:"喀什市",value:"653101"},{label:"疏附县",value:"653121"},{label:"疏勒县",value:"653122"},{label:"英吉沙县",value:"653123"},{label:"泽普县",value:"653124"},{label:"莎车县",value:"653125"},{label:"叶城县",value:"653126"},{label:"麦盖提县",value:"653127"},{label:"岳普湖县",value:"653128"},{label:"伽师县",value:"653129"},{label:"巴楚县",value:"653130"},{label:"塔什库尔干塔吉克自治县",value:"653131"}],[{label:"和田市",value:"653201"},{label:"和田县",value:"653221"},{label:"墨玉县",value:"653222"},{label:"皮山县",value:"653223"},{label:"洛浦县",value:"653224"},{label:"策勒县",value:"653225"},{label:"于田县",value:"653226"},{label:"民丰县",value:"653227"}],[{label:"伊宁市",value:"654002"},{label:"奎屯市",value:"654003"},{label:"霍尔果斯市",value:"654004"},{label:"伊宁县",value:"654021"},{label:"察布查尔锡伯自治县",value:"654022"},{label:"霍城县",value:"654023"},{label:"巩留县",value:"654024"},{label:"新源县",value:"654025"},{label:"昭苏县",value:"654026"},{label:"特克斯县",value:"654027"},{label:"尼勒克县",value:"654028"}],[{label:"塔城市",value:"654201"},{label:"乌苏市",value:"654202"},{label:"额敏县",value:"654221"},{label:"沙湾县",value:"654223"},{label:"托里县",value:"654224"},{label:"裕民县",value:"654225"},{label:"和布克赛尔蒙古自治县",value:"654226"}],[{label:"阿勒泰市",value:"654301"},{label:"布尔津县",value:"654321"},{label:"富蕴县",value:"654322"},{label:"福海县",value:"654323"},{label:"哈巴河县",value:"654324"},{label:"青河县",value:"654325"},{label:"吉木乃县",value:"654326"}],[{label:"石河子市",value:"659001"},{label:"阿拉尔市",value:"659002"},{label:"图木舒克市",value:"659003"},{label:"五家渠市",value:"659004"},{label:"铁门关市",value:"659006"}]],[[{label:"台北",value:"660101"}],[{label:"高雄",value:"660201"}],[{label:"基隆",value:"660301"}],[{label:"台中",value:"660401"}],[{label:"台南",value:"660501"}],[{label:"新竹",value:"660601"}],[{label:"嘉义",value:"660701"}],[{label:"宜兰",value:"660801"}],[{label:"桃园",value:"660901"}],[{label:"苗栗",value:"661001"}],[{label:"彰化",value:"661101"}],[{label:"南投",value:"661201"}],[{label:"云林",value:"661301"}],[{label:"屏东",value:"661401"}],[{label:"台东",value:"661501"}],[{label:"花莲",value:"661601"}],[{label:"澎湖",value:"661701"}]],[[{label:"香港岛",value:"670101"}],[{label:"九龙",value:"670201"}],[{label:"新界",value:"670301"}]],[[{label:"澳门半岛",value:"680101"}],[{label:"氹仔岛",value:"680201"}],[{label:"路环岛",value:"680301"}],[{label:"路氹城",value:"680401"}]]],l=a;t.default=l},e857:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={pages:{"pages/index/index":{navigationBarTitleText:"首页",titleNView:!1},"pages/my/my":{navigationBarTitleText:"我的",titleNView:!1},"pages/my/jifenguize/jifenguize":{navigationBarTitleText:"积分规则",navigationBarBackgroundColor:"#008800",navigationBarTextStyle:"white",titleNView:{titleSize:"28rpx"}},"pages/my/huiyuantequan/huiyuantequan":{navigationBarTitleText:"我的特权",navigationBarBackgroundColor:"#008800",navigationBarTextStyle:"white",titleNView:{titleSize:"28rpx"}},"pages/online_Teach/onlineTeach":{navigationBarTitleText:"教材同步学习教学",enablePullDownRefresh:!1,titleNView:{titleSize:"28rpx"}},"pages/onlinestore/onlinestore":{titleNView:{searchInput:{align:"left",backgroundColor:"#efefef",borderRadius:"30px",placeholder:"一年级上册"},buttons:{text:"地图",fontSize:"16",color:"#fff"}}},"pages/myPublished/myPublished":{navigationBarTitleText:"我的发表",titleNView:{titleSize:"28rpx"}},"pages/my/daySignin/daySignin":{navigationBarTitleText:"每日签到",titleNView:{titleSize:"28rpx"}},"pages/onlinestore/myOrder/myOrder":{navigationBarTitleText:"我的订单",titleNView:{titleSize:"28rpx"}},"pages/my/huiyuanxinxi/huiyuanxinxi":{navigationBarTitleText:"会员信息",titleNView:{titleSize:"28rpx"}},"pages/my/huiyuanjifen/huiyuanjifen":{navigationBarTitleText:"会员积分",titleNView:{titleSize:"28rpx"}},"pages/my/mycollect/mycollect":{navigationBarTitleText:"我的收藏",titleNView:{titleSize:"28rpx"}},"pages/my/lstgjl/lstgjl":{navigationBarTitleText:"历史投稿记录",titleNView:{titleSize:"28rpx"}},"pages/publishedDiary/publishedDiary":{navigationBarTitleText:"发表记录",titleNView:{titleSize:"28rpx"}},"pages/chat/chat":{navigationBarTitleText:"消息",titleNView:{titleSize:"28rpx"}},"pages/chat/chatContent/chatContent":{titleNView:{titleSize:"28rpx"}},"pages/freeTeaching/freeTeaching":{navigationBarTitleText:"在线教学",titleNView:{titleSize:"28rpx"}},"pages/login/login":{navigationStyle:"custom",titleNView:!1},"pages/reg/reg":{navigationBarTitleText:"开心书写",titleNView:{titleSize:"28rpx"}},"pages/hncjiaoxue_mulu/hncjiaoxue_mulu":{navigationBarTitleText:"功能尺适用教学",titleNView:{titleSize:"28rpx"}},"pages/Copyright/Copyright":{navigationBarTitleText:"版权声明",titleNView:{titleSize:"28rpx"}},"pages/my/shengjihuiyuan/shengjihuiyuan":{navigationBarTitleText:"升级会员",titleNView:{titleSize:"28rpx"}},"pages/growthDiary/growthDiary":{navigationBarTitleText:"个人日记",titleNView:{titleSize:"28rpx"}},"pages/hncjiaoxue_intro/hncjiaoxue_intro":{navigationBarTitleText:"金木水火土",titleNView:{titleSize:"28rpx"}},"pages/my/mydiscount/mydiscount":{navigationBarTitleText:"优惠券",titleNView:{titleSize:"28rpx"}},"pages/my/signature/signature":{navigationBarTitleText:"个性签名",titleNView:{titleSize:"28rpx"}},"pages/my/videoGift/videoGift":{navigationBarTitleText:"视频礼包",titleNView:{titleSize:"28rpx"}},"pages/my/activeCode/activeCode":{navigationBarTitleText:"激活码",titleNView:{titleSize:"28rpx"}},"pages/message/message":{navigationBarTitleText:"首页",titleNView:!1},"pages/my/follow/follow":{navigationBarTitleText:"关注的人"},"pages/my/fans/fans":{navigationBarTitleText:"粉丝"},"pages/userInfo/userInfo":{navigationBarTitleText:"用户信息"},"pages/feedback/feedback":{navigationBarTitleText:"意见反馈"},"pages/about/about":{navigationBarTitleText:"关于我们"},"pages/assemble/assemble":{navigationBarTitleText:"拼团详情"}},globalStyle:{backgroundTextStyle:"light",navigationBarBackgroundColor:"#FFFFFF",navigationBarTextStyle:"black"}};t.default=a},f0c5:function(e,t,n){"use strict";function a(e,t,n,a,l,r,i,o,s,u){var c,f="function"===typeof e?e.options:e;if(s&&(f.components=Object.assign(s,f.components||{})),u&&((u.beforeCreate||(u.beforeCreate=[])).unshift(function(){this[u.__module]=this}),(f.mixins||(f.mixins=[])).push(u)),t&&(f.render=t,f.staticRenderFns=n,f._compiled=!0),a&&(f.functional=!0),r&&(f._scopeId="data-v-"+r),i?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),l&&l.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},f._ssrRegister=c):l&&(c=o?function(){l.call(this,this.$root.$options.shadowRoot)}:l),c)if(f.functional){f._injectStyles=c;var g=f.render;f.render=function(e,t){return c.call(t),g(e,t)}}else{var v=f.beforeCreate;f.beforeCreate=v?[].concat(v,c):[c]}return{exports:e,options:f}}n.d(t,"a",function(){return a})}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/uni-calendar/uni-calendar-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-calendar/uni-calendar-item.js';

define('components/uni-calendar/uni-calendar-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-calendar/uni-calendar-item"], {
  "02d2": function d2(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("dff6"),
        a = e.n(u);

    for (var c in u) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(c);
    }

    t["default"] = a.a;
  },
  "7b2e": function b2e(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("c059"),
        a = e("02d2");

    for (var c in a) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(c);
    }

    e("8ca2");
    var r,
        i = e("f0c5"),
        f = Object(i["a"])(a["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], r);
    t["default"] = f.exports;
  },
  "8ca2": function ca2(n, t, e) {
    "use strict";

    var u = e("b657"),
        a = e.n(u);
    a.a;
  },
  b657: function b657(n, t, e) {},
  c059: function c059(n, t, e) {
    "use strict";

    var u,
        a = function a() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        c = [];

    e.d(t, "b", function () {
      return a;
    }), e.d(t, "c", function () {
      return c;
    }), e.d(t, "a", function () {
      return u;
    });
  },
  dff6: function dff6(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "UniCalendarItem",
      props: {
        canlender: {
          type: null,
          default: function _default() {
            return {};
          }
        },
        lunar: {
          type: Boolean,
          default: !1
        }
      },
      data: function data() {
        return {};
      },
      created: function created() {},
      methods: {
        selectDays: function selectDays(n, t, e, u, a) {
          this.$emit("selectDays", {
            week: n,
            index: t,
            ischeck: e,
            isDay: u,
            lunar: a
          });
        }
      }
    };
    t.default = u;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-calendar/uni-calendar-item-create-component', {
  'components/uni-calendar/uni-calendar-item-create-component': function componentsUniCalendarUniCalendarItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("7b2e"));
  }
}, [['components/uni-calendar/uni-calendar-item-create-component']]]);
});
require('components/uni-calendar/uni-calendar-item.js');
__wxRoute = 'components/uni-calendar/uni-calendar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-calendar/uni-calendar.js';

define('components/uni-calendar/uni-calendar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-calendar/uni-calendar"], {
  2425: function _(t, e, a) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var n = i(a("45f0"));

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function r(t, e) {
      return u(t) || l(t, e) || s();
    }

    function s() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    function l(t, e) {
      var a = [],
          n = !0,
          i = !1,
          r = void 0;

      try {
        for (var s, l = t[Symbol.iterator](); !(n = (s = l.next()).done); n = !0) {
          if (a.push(s.value), e && a.length === e) break;
        }
      } catch (u) {
        i = !0, r = u;
      } finally {
        try {
          n || null == l["return"] || l["return"]();
        } finally {
          if (i) throw r;
        }
      }

      return a;
    }

    function u(t) {
      if (Array.isArray(t)) return t;
    }

    var o = function o() {
      return a.e("components/uni-calendar/uni-calendar-item").then(a.bind(null, "7b2e"));
    },
        h = {
      name: "UniCalendar",
      components: {
        uniCalendarItem: o
      },
      props: {
        date: {
          type: String,
          default: ""
        },
        selected: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        lunar: {
          type: Boolean,
          default: !1
        },
        disableBefore: {
          type: Boolean,
          default: !1
        },
        startDate: {
          type: String,
          default: ""
        },
        endDate: {
          type: String,
          default: ""
        },
        range: {
          type: Boolean,
          default: !1
        },
        insert: {
          type: Boolean,
          default: !1
        }
      },
      data: function data() {
        return {
          maskShow: !1,
          aniMaskShow: !1,
          dateShow: !1,
          canlender: {
            weeks: []
          },
          multiple: 0,
          multipleDates: {
            begin: "",
            end: "",
            data: []
          },
          isLunar: !1
        };
      },
      watch: {
        date: function date() {
          this.init();
        },
        selected: function selected() {
          this.init();
        },
        lunar: function lunar(t) {
          this.isLunar = t, this.init();
        },
        disableBefore: function disableBefore() {
          this.init();
        },
        startDate: function startDate() {
          this.init();
        },
        endDate: function endDate() {
          this.init();
        }
      },
      created: function created() {
        this.init();
      },
      methods: {
        init: function init() {
          this.getMonthAll(0, this.date, !0);
        },
        open: function open() {
          var t = this;
          this.maskShow = !0, this.multiple = 0, this.multipleDates.data = [], this.multipleDates.begin = "", this.multipleDates.end = "", this.init(), this.$nextTick(function () {
            setTimeout(function () {
              return t.aniMaskShow = !0;
            }, 30);
          });
        },
        close: function close() {
          var t = this;
          this.aniMaskShow = !1, this.$nextTick(function () {
            setTimeout(function () {
              return t.maskShow = !1;
            }, 300);
          });
        },
        confirm: function confirm() {
          this.setEmit("confirm"), this.close();
        },
        getMonthAll: function getMonthAll(t, e) {
          "" === e && (e = new Date());
          var a = this.getWeek(this.getDate(e, t, "month"));
          this.canlender = a, this.insert && this.setEmit("change");
        },
        setEmit: function setEmit(t) {
          var e = this.canlender;
          this.$emit(t, {
            range: this.range ? this.multipleDates : {},
            year: e.year,
            month: e.month,
            date: e.date,
            lunar: e.lunar,
            clockinfo: e.clockinfo || {},
            fulldate: e.year + "-" + e.month + "-" + e.date
          });
        },
        isDisableBefore: function isDisableBefore(t, e, a) {
          var n = this.date || new Date(),
              i = t + "-" + e + "-" + a,
              r = !1,
              s = !1;
          return this.startDate && (r = this.dateCompare(this.startDate, i)), this.endDate && (s = this.dateCompare(this.getDate(this.endDate, 1), i)), this.disableBefore ? this.startDate ? !this.dateCompare(this.getDate(n, 0), i) || !r || s : this.endDate ? !this.dateCompare(this.getDate(n, 0), i) || s : !this.dateCompare(this.getDate(n, 0), i) : this.startDate ? !r || s : !!this.endDate && s;
        },
        backtoday: function backtoday() {
          this.getMonthAll(0, this.date);
        },
        dataBefor: function dataBefor(t, e) {
          var a = this.canlender.year + "-" + this.canlender.month + "-" + this.canlender.date;
          this.getMonthAll(t, a);
        },
        selectDays: function selectDays(t) {
          var e = t.week,
              a = t.index,
              n = t.ischeck,
              i = t.isDay;

          if (n && !i) {
            var r = this.canlender,
                s = r.weeks[e][a].month < 10 ? "0" + r.weeks[e][a].month : r.weeks[e][a].month,
                l = r.weeks[e][a].date < 10 ? "0" + r.weeks[e][a].date : r.weeks[e][a].date,
                u = r.year + "-" + s + "-" + l;
            if (this.isClick = !0, 0 === this.multiple) this.multipleDates.begin = u, this.multiple = 1;else if (1 === this.multiple) {
              this.multiple = 2, this.multipleDates.data && (this.multipleDates.data = []);
              var o = this.dateCompare(this.multipleDates.begin, u);
              o ? (this.multipleDates.data = this.geDateAll(this.multipleDates.begin, u), this.multipleDates.end = u) : (this.multipleDates.data = this.geDateAll(u, this.multipleDates.begin), this.multipleDates.end = this.multipleDates.begin, this.multipleDates.begin = u);
            } else this.multiple = 0, this.multipleDates.data = [], this.multipleDates.begin = "", this.multipleDates.end = "";
            this.getMonthAll(0, u);
          }
        },
        getWeek: function getWeek(t) {
          var e = this;
          "object" !== typeof t && (t = t.replace(/-/g, "/"));

          for (var a = this.selected, i = this.getDate(this.date || new Date()), s = this.getNewDate(t), l = s.year, u = s.month, o = s.date, h = s.day, c = [], d = {
            firstDay: new Date(l, u - 1, 1).getDay(),
            lastMonthDays: [],
            currentMonthDys: [],
            nextMonthDays: [],
            endDay: new Date(l, u, 0).getDay(),
            weeks: []
          }, f = d.firstDay; f > 0; f--) {
            var D = new Date(l, u - 1, 1 - f).getDate() + "";
            d.lastMonthDays.push({
              date: D,
              month: u - 1,
              disable: this.isDisableBefore(l, u - 1, D),
              lunar: this.getlunar(l, u - 1, D),
              isDay: !1
            });
          }

          for (var m = {
            have: !1
          }, p = function p(t) {
            for (var n = !1, s = {}, h = 0; h < a.length; h++) {
              var c = a[h].date.split("-");
              Number(l) === Number(c[0]) && Number(u) === Number(c[1]) && Number(t) === Number(c[2]) && (n = !0, s.have = !0, s.date = a[h].date, a[h].info && (s.info = a[h].info), "{}" !== JSON.stringify(a[h].data) && void 0 === a[h].data || (s.data = a[h].data), Number(l) === Number(c[0]) && Number(u) === Number(c[1]) && Number(o) === Number(c[2]) && (m = s));
            }

            var f = e.multipleDates,
                D = f.begin,
                p = f.end,
                g = f.data,
                b = D.split("-"),
                y = r(b, 3),
                v = y[0],
                w = y[1],
                k = y[2],
                M = p.split("-"),
                N = r(M, 3),
                B = N[0],
                C = N[1],
                A = N[2],
                S = !1,
                T = !1,
                x = !1;
            g.forEach(function (e, a) {
              var n = e.split("-"),
                  i = r(n, 3),
                  s = i[0],
                  o = i[1],
                  h = i[2];
              l === Number(s) && u === Number(o) && t === Number(h) && (S = !0);
            }), l === Number(v) && u === Number(w) && t === Number(k) && (T = !0), l === Number(B) && u === Number(C) && t === Number(A) && (x = !0), d.currentMonthDys.push({
              checked: !!e.range && S,
              multipleBegin: !!e.range && T,
              multipleEnd: !!e.range && x,
              date: t + "",
              month: u,
              have: n,
              clockinfo: s,
              disable: e.isDisableBefore(l, u, t + ""),
              lunar: e.getlunar(l, u, t + ""),
              isDay: i === l + "-" + (u < 10 ? "0" + u : u) + "-" + (t < 10 ? "0" + t : t)
            });
          }, g = 1; g <= new Date(l, u, 0).getDate(); g++) {
            p(g);
          }

          for (var b = 42 - (d.lastMonthDays.length + d.currentMonthDys.length), y = 1; y < b + 1; y++) {
            d.nextMonthDays.push({
              date: y + "",
              month: u + 1,
              disable: this.isDisableBefore(l, u + 1, y + ""),
              lunar: this.getlunar(l, u + 1, y + ""),
              isDay: !1
            });
          }

          c = c.concat(d.lastMonthDays, d.currentMonthDys, d.nextMonthDays);

          for (var v = 0; v < c.length; v++) {
            v % 7 === 0 && (d.weeks[parseInt(v / 7)] = new Array(7)), d.weeks[parseInt(v / 7)][v % 7] = c[v];
          }

          return {
            weeks: d.weeks,
            month: u,
            date: o,
            day: h,
            year: l,
            clockinfo: m,
            lunar: n.default.solar2lunar(l, u, o),
            lastDate: d.currentMonthDys[d.currentMonthDys.length - 1].date
          };
        },
        getlunar: function getlunar(t, e, a) {
          return n.default.solar2lunar(t, e, a).IDayCn;
        },
        getNewDate: function getNewDate(t) {
          var e = new Date(t);
          return {
            year: e.getFullYear(),
            month: e.getMonth() + 1,
            date: e.getDate(),
            day: e.getDay()
          };
        },
        getDate: function getDate(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "day";
          "object" !== typeof t && (t = t.replace(/-/g, "/"));
          var n = new Date(t);

          switch (a) {
            case "day":
              n.setDate(n.getDate() + e);
              break;

            case "month":
              n.setMonth(n.getMonth() + e);
              break;

            case "year":
              n.setFullYear(n.getFullYear() + e);
              break;
          }

          var i = n.getFullYear(),
              r = n.getMonth() + 1 < 10 ? "0" + (n.getMonth() + 1) : n.getMonth() + 1,
              s = n.getDate() < 10 ? "0" + n.getDate() : n.getDate();
          return i + "-" + r + "-" + s;
        },
        dateCompare: function dateCompare(t, e) {
          return t = new Date(t.replace("-", "/").replace("-", "/")), e = new Date(e.replace("-", "/").replace("-", "/")), t <= e;
        },
        geDateAll: function geDateAll(t, e) {
          var a = [],
              n = t.split("-"),
              i = e.split("-"),
              r = new Date();
          r.setUTCFullYear(n[0], n[1] - 1, n[2]);
          var s = new Date();
          s.setUTCFullYear(i[0], i[1] - 1, i[2]);

          for (var l = r.getTime() - 864e5, u = s.getTime() - 864e5, o = l; o <= u;) {
            o += 864e5, a.push(this.getDate(new Date(parseInt(o))));
          }

          return a;
        }
      }
    };

    e.default = h;
  },
  6164: function _(t, e, a) {
    "use strict";

    var n,
        i = function i() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        r = [];

    a.d(e, "b", function () {
      return i;
    }), a.d(e, "c", function () {
      return r;
    }), a.d(e, "a", function () {
      return n;
    });
  },
  7261: function _(t, e, a) {},
  a7f2: function a7f2(t, e, a) {
    "use strict";

    var n = a("7261"),
        i = a.n(n);
    i.a;
  },
  cab4: function cab4(t, e, a) {
    "use strict";

    a.r(e);
    var n = a("2425"),
        i = a.n(n);

    for (var r in n) {
      "default" !== r && function (t) {
        a.d(e, t, function () {
          return n[t];
        });
      }(r);
    }

    e["default"] = i.a;
  },
  cda9: function cda9(t, e, a) {
    "use strict";

    a.r(e);
    var n = a("6164"),
        i = a("cab4");

    for (var r in i) {
      "default" !== r && function (t) {
        a.d(e, t, function () {
          return i[t];
        });
      }(r);
    }

    a("a7f2");
    var s,
        l = a("f0c5"),
        u = Object(l["a"])(i["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], s);
    e["default"] = u.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-calendar/uni-calendar-create-component', {
  'components/uni-calendar/uni-calendar-create-component': function componentsUniCalendarUniCalendarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("cda9"));
  }
}, [['components/uni-calendar/uni-calendar-create-component']]]);
});
require('components/uni-calendar/uni-calendar.js');
__wxRoute = 'components/uni-countdown/uni-countdown';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-countdown/uni-countdown.js';

define('components/uni-countdown/uni-countdown.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-countdown/uni-countdown"], {
  "2d9e": function d9e(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var o = {
      name: "UniCountdown",
      props: {
        showDay: {
          type: Boolean,
          default: !0
        },
        showColon: {
          type: Boolean,
          default: !0
        },
        backgroundColor: {
          type: String,
          default: "#FFFFFF"
        },
        borderColor: {
          type: String,
          default: "#000000"
        },
        color: {
          type: String,
          default: "#000000"
        },
        splitorColor: {
          type: String,
          default: "#000000"
        },
        day: {
          type: Number,
          default: 0
        },
        hour: {
          type: Number,
          default: 0
        },
        minute: {
          type: Number,
          default: 0
        },
        second: {
          type: Number,
          default: 0
        }
      },
      data: function data() {
        return {
          timer: null,
          syncFlag: !1,
          d: "00",
          h: "00",
          i: "00",
          s: "00",
          leftTime: 0,
          seconds: 0
        };
      },
      watch: {
        day: function day(t) {
          this.changeFlag();
        },
        hour: function hour(t) {
          this.changeFlag();
        },
        minute: function minute(t) {
          this.changeFlag();
        },
        second: function second(t) {
          this.changeFlag();
        }
      },
      created: function created(t) {
        this.startData();
      },
      beforeDestroy: function beforeDestroy() {
        clearInterval(this.timer);
      },
      methods: {
        toSeconds: function toSeconds(t, n, e, o) {
          return 60 * t * 60 * 24 + 60 * n * 60 + 60 * e + o;
        },
        timeUp: function timeUp() {
          clearInterval(this.timer), this.$emit("timeup");
        },
        countDown: function countDown() {
          var t = this.seconds,
              n = 0,
              e = 0,
              o = 0,
              i = 0;
          t > 0 ? (n = Math.floor(t / 86400), e = Math.floor(t / 3600) - 24 * n, o = Math.floor(t / 60) - 24 * n * 60 - 60 * e, i = Math.floor(t) - 24 * n * 60 * 60 - 60 * e * 60 - 60 * o) : this.timeUp(), n < 10 && (n = "0" + n), e < 10 && (e = "0" + e), o < 10 && (o = "0" + o), i < 10 && (i = "0" + i), this.d = n, this.h = e, this.i = o, this.s = i;
        },
        startData: function startData() {
          var t = this;
          this.seconds = this.toSeconds(this.day, this.hour, this.minute, this.second), this.seconds <= 0 || (this.countDown(), this.timer = setInterval(function () {
            t.seconds--, t.seconds < 0 ? t.timeUp() : t.countDown();
          }, 1e3));
        },
        changeFlag: function changeFlag() {
          this.syncFlag || (this.seconds = this.toSeconds(this.day, this.hour, this.minute, this.second), this.startData(), this.syncFlag = !0);
        }
      }
    };
    n.default = o;
  },
  "7e92": function e92(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("2d9e"),
        i = e.n(o);

    for (var a in o) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(a);
    }

    n["default"] = i.a;
  },
  a366: function a366(t, n, e) {
    "use strict";

    var o = e("b989"),
        i = e.n(o);
    i.a;
  },
  a496: function a496(t, n, e) {
    "use strict";

    var o,
        i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "b", function () {
      return i;
    }), e.d(n, "c", function () {
      return a;
    }), e.d(n, "a", function () {
      return o;
    });
  },
  ada4: function ada4(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("a496"),
        i = e("7e92");

    for (var a in i) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(a);
    }

    e("a366");
    var s,
        u = e("f0c5"),
        r = Object(u["a"])(i["default"], o["b"], o["c"], !1, null, "e024b674", null, !1, o["a"], s);
    n["default"] = r.exports;
  },
  b989: function b989(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-countdown/uni-countdown-create-component', {
  'components/uni-countdown/uni-countdown-create-component': function componentsUniCountdownUniCountdownCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ada4"));
  }
}, [['components/uni-countdown/uni-countdown-create-component']]]);
});
require('components/uni-countdown/uni-countdown.js');
__wxRoute = 'components/uni-load-more/uni-load-more';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-load-more/uni-load-more.js';

define('components/uni-load-more/uni-load-more.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-load-more/uni-load-more"], {
  "118a": function a(t, n, e) {},
  "1d787": function d787(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("af56"),
        u = e("ae91");

    for (var a in u) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(a);
    }

    e("f368");
    var r,
        c = e("f0c5"),
        f = Object(c["a"])(u["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], r);
    n["default"] = f.exports;
  },
  "34ab": function ab(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var o = {
      name: "UniLoadMore",
      props: {
        status: {
          type: String,
          default: "more"
        },
        showIcon: {
          type: Boolean,
          default: !0
        },
        color: {
          type: String,
          default: "#777777"
        },
        contentText: {
          type: Object,
          default: function _default() {
            return {
              contentdown: "上拉显示更多",
              contentrefresh: "正在加载...",
              contentnomore: "没有更多数据了"
            };
          }
        }
      },
      data: function data() {
        return {};
      }
    };
    n.default = o;
  },
  ae91: function ae91(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("34ab"),
        u = e.n(o);

    for (var a in o) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(a);
    }

    n["default"] = u.a;
  },
  af56: function af56(t, n, e) {
    "use strict";

    var o,
        u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "b", function () {
      return u;
    }), e.d(n, "c", function () {
      return a;
    }), e.d(n, "a", function () {
      return o;
    });
  },
  f368: function f368(t, n, e) {
    "use strict";

    var o = e("118a"),
        u = e.n(o);
    u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-load-more/uni-load-more-create-component', {
  'components/uni-load-more/uni-load-more-create-component': function componentsUniLoadMoreUniLoadMoreCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("1d787"));
  }
}, [['components/uni-load-more/uni-load-more-create-component']]]);
});
require('components/uni-load-more/uni-load-more.js');
__wxRoute = 'components/uni-popup/uni-popup';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-popup/uni-popup.js';

define('components/uni-popup/uni-popup.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-popup/uni-popup"], {
  "23dd": function dd(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("e5d1"),
        u = e.n(o);

    for (var i in o) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(i);
    }

    n["default"] = u.a;
  },
  6680: function _(t, n, e) {},
  a27d: function a27d(t, n, e) {
    "use strict";

    var o = e("6680"),
        u = e.n(o);
    u.a;
  },
  ce5c: function ce5c(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("f536"),
        u = e("23dd");

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    e("a27d");
    var a,
        c = e("f0c5"),
        s = Object(c["a"])(u["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], a);
    n["default"] = s.exports;
  },
  e5d1: function e5d1(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var o = {
      name: "UniPopup",
      props: {
        animation: {
          type: Boolean,
          default: !0
        },
        type: {
          type: String,
          default: "center"
        },
        custom: {
          type: Boolean,
          default: !1
        },
        maskClick: {
          type: Boolean,
          default: !0
        },
        show: {
          type: Boolean,
          default: !0
        }
      },
      data: function data() {
        return {
          ani: "",
          showPopup: !1
        };
      },
      watch: {
        show: function show(t) {
          t ? this.open() : this.close();
        }
      },
      created: function created() {},
      methods: {
        clear: function clear() {},
        open: function open() {
          var t = this;
          this.$emit("change", {
            show: !0
          }), this.showPopup = !0, this.$nextTick(function () {
            setTimeout(function () {
              t.ani = "uni-" + t.type;
            }, 30);
          });
        },
        close: function close(t) {
          var n = this;
          !this.maskClick && t || (this.$emit("change", {
            show: !1
          }), this.ani = "", this.$nextTick(function () {
            setTimeout(function () {
              n.showPopup = !1;
            }, 300);
          }));
        }
      }
    };
    n.default = o;
  },
  f536: function f536(t, n, e) {
    "use strict";

    var o,
        u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "b", function () {
      return u;
    }), e.d(n, "c", function () {
      return i;
    }), e.d(n, "a", function () {
      return o;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-popup/uni-popup-create-component', {
  'components/uni-popup/uni-popup-create-component': function componentsUniPopupUniPopupCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ce5c"));
  }
}, [['components/uni-popup/uni-popup-create-component']]]);
});
require('components/uni-popup/uni-popup.js');
__wxRoute = 'components/w-picker/w-picker';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/w-picker/w-picker.js';

define('components/w-picker/w-picker.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/w-picker/w-picker"], {
  1952: function _(t, a, e) {
    "use strict";

    var r,
        s = function s() {
      var t = this,
          a = t.$createElement;
      t._self._c;
    },
        n = [];

    e.d(a, "b", function () {
      return s;
    }), e.d(a, "c", function () {
      return n;
    }), e.d(a, "a", function () {
      return r;
    });
  },
  "46da": function da(t, a, e) {
    "use strict";

    e.r(a);
    var r = e("1952"),
        s = e("e2fe");

    for (var n in s) {
      "default" !== n && function (t) {
        e.d(a, t, function () {
          return s[t];
        });
      }(n);
    }

    e("a69e");
    var l,
        d = e("f0c5"),
        u = Object(d["a"])(s["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], l);
    a["default"] = u.exports;
  },
  "484a": function a(t, _a, e) {},
  "623b": function b(t, a, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.default = void 0;
      var r = d(e("d5db")),
          s = d(e("7e8e")),
          n = d(e("e4ab")),
          l = d(e("4989"));

      function d(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      function u(t, a) {
        for (var e = 0; e < a.length; e++) {
          if (t === a[e]) return !0;
        }

        throw new Error("mode无效，请选择有效的mode!");
      }

      var i = {
        data: function data() {
          return {
            result: [],
            data: {},
            checkArr: [],
            checkValue: [],
            pickVal: [],
            showPicker: !1,
            resultStr: "",
            itemHeight: "height: ".concat(t.upx2px(88), "px;")
          };
        },
        computed: {},
        props: {
          mode: {
            type: String,
            validator: function validator(t) {
              var a = ["half", "date", "dateTime", "yearMonth", "time", "region", "selector", "limit", "limitHour", "range"];
              return u(t, a);
            },
            default: function _default() {
              return "date";
            }
          },
          themeColor: {
            type: String,
            default: function _default() {
              return "#f5a200";
            }
          },
          startYear: {
            type: [String, Number],
            default: function _default() {
              return "1970";
            }
          },
          endYear: {
            type: [String, Number],
            default: function _default() {
              return new Date().getFullYear() + "";
            }
          },
          defaultVal: {
            type: Array,
            default: function _default() {
              return [0, 0, 0, 0, 0, 0, 0];
            }
          },
          step: {
            type: [String, Number],
            default: 1
          },
          current: {
            type: Boolean,
            default: !1
          },
          selectList: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          dayStep: {
            type: [String, Number],
            default: 7
          },
          startHour: {
            type: [String, Number],
            default: 8
          },
          endHour: {
            type: [String, Number],
            default: 20
          },
          minuteStep: {
            type: [String, Number],
            default: 10
          },
          afterStep: {
            type: [String, Number],
            default: 30
          },
          disabledAfter: {
            type: Boolean,
            default: !1
          }
        },
        watch: {
          mode: function mode() {
            this.initData();
          },
          selectList: function selectList() {
            this.initData();
          }
        },
        methods: {
          getRegionVal: function getRegionVal(t) {
            var a = t[0],
                e = t[1],
                l = t[2],
                d = 0,
                u = 0,
                i = 0;
            r.default.map(function (t, e) {
              t.label == a && (d = e);
            }), s.default[d].map(function (t, a) {
              t.label == e && (u = a);
            }), n.default[d][u].map(function (t, a) {
              t.label == l && (i = a);
            });
            var c = [d, u, i];
            return c;
          },
          useCurrent: function useCurrent() {
            var t = new Date(),
                a = t.getFullYear().toString(),
                e = this.formatNum(t.getMonth() + 1).toString(),
                r = this.formatNum(t.getDate()).toString(),
                s = this.formatNum(t.getHours()).toString(),
                n = this.formatNum(t.getMinutes()).toString(),
                l = this.formatNum(t.getSeconds()).toString();
            return this.current ? [a, e, r, s, (Math.floor(n / this.step) * this.step).toString(), l] : this.defaultVal;
          },
          formatNum: function formatNum(t) {
            return t < 10 ? "0" + t : t + "";
          },
          maskTap: function maskTap() {
            this.showPicker = !1;
          },
          show: function show() {
            this.showPicker = !0;
          },
          hide: function hide() {
            this.showPicker = !1;
          },
          pickerCancel: function pickerCancel() {
            this.$emit("cancel", {
              checkArr: this.checkArr,
              defaultVal: this.pickVal
            }), this.showPicker = !1;
          },
          pickerConfirm: function pickerConfirm(a) {
            switch (this.mode) {
              case "range":
                var e = this.checkArr,
                    r = new Date(e[0], e[1], e[2]),
                    s = new Date(e[3], e[4], e[5]),
                    n = this.pickVal;
                r > s ? (this.checkArr = [e[3], e[4], e[5], e[0], e[1], e[2]], this.pickVal = [n[4], n[5], n[6], 0, n[0], n[1], n[2]], this.$emit("confirm", {
                  checkArr: this.checkArr,
                  from: e[3] + "-" + e[4] + "-" + e[5],
                  to: e[0] + "-" + e[1] + "-" + e[2],
                  defaultVal: this.pickVal,
                  result: this.resultStr
                })) : this.$emit("confirm", {
                  checkArr: this.checkArr,
                  from: e[0] + "-" + e[1] + "-" + e[2],
                  to: e[3] + "-" + e[4] + "-" + e[5],
                  defaultVal: this.pickVal,
                  result: this.resultStr
                });
                break;

              case "limit":
                var l = new Date().getTime(),
                    d = new Date(this.resultStr.replace(/-/g, "/")).getTime();
                if (l > d) return void t.showModal({
                  title: "提示",
                  content: "选择时间必须大于当前时间",
                  confirmColor: this.themeColor
                });
                this.$emit("confirm", {
                  checkArr: this.checkArr,
                  defaultVal: this.pickVal,
                  result: this.resultStr
                });
                break;

              case "region":
                this.$emit("confirm", {
                  checkArr: this.checkArr,
                  checkValue: this.checkValue,
                  defaultVal: this.pickVal,
                  result: this.resultStr
                });
                break;

              default:
                this.$emit("confirm", {
                  checkArr: this.checkArr,
                  defaultVal: this.pickVal,
                  result: this.resultStr
                });
                break;
            }

            this.showPicker = !1;
          },
          bindChange: function bindChange(t) {
            var a,
                e,
                r,
                d,
                u,
                i,
                c,
                o,
                h,
                f = this,
                m = t.detail.value,
                g = "",
                y = "",
                k = "",
                b = "",
                p = "",
                v = "",
                S = f.checkArr,
                A = [],
                V = [],
                w = f.mode;

            switch (w) {
              case "limitHour":
                if (d = f.data.date[m[0]], u = f.data.areas[m[1]], f.data.hours[m[2]], d.value != S[0].value) {
                  m[1] = 0, m[2] = 0;
                  var H = l.default.limitHour.initAreas(d);
                  f.data.areas = H;
                  var D = l.default.limitHour.initHours(d, f.data.areas[m[1]]);
                  f.data.hours = D;
                }

                if (u.value != S[1].value) {
                  m[2] = 0;
                  var M = l.default.limitHour.initHours(d, f.data.areas[m[1]]);
                  f.data.hours = M;
                }

                i = f.data.date[m[0]] || f.data.date[f.data.date.length - 1], c = f.data.areas[m[1]] || f.data.areas[f.data.areas.length - 1], o = f.data.hours[m[2]] || f.data.hours[f.data.hours.length - 1], f.checkArr = [i, c, o], f.resultStr = "".concat(i.value + " " + c.label + " " + o.label + "时");
                break;

              case "limit":
                if (d = f.data.date[m[0]], u = f.data.hours[m[1]], d.value != S[0].value) {
                  var N = l.default.limit.initHours(f.startHour, f.endHour, f.minuteStep, f.afterStep, d.value),
                      C = l.default.limit.initMinutes(f.startHour, f.endHour, f.minuteStep, f.afterStep, d.value, u.value);
                  f.data.hours = N, f.data.minutes = C;
                }

                if (u.value != S[1].value) {
                  var $ = l.default.limit.initMinutes(f.startHour, f.endHour, f.minuteStep, f.afterStep, d.value, u.value);
                  f.data.minutes = $;
                }

                i = f.data.date[m[0]] || f.data.date[f.data.date.length - 1], o = f.data.hours[m[1]] || f.data.hours[f.data.hours.length - 1], h = f.data.minutes[m[2]] || f.data.minutes[f.data.minutes.length - 1], f.checkArr = [i, o, h], f.resultStr = "".concat(i.value + " " + o.value + ":" + h.value + ":00");
                break;

              case "range":
                var T = f.data.fyears[m[0]] || f.data.fyears[f.data.fyears.length - 1],
                    Y = f.data.fmonths[m[1]] || f.data.fmonths[f.data.fmonths.length - 1],
                    P = f.data.fdays[m[2]] || f.data.fdays[f.data.fdays.length - 1],
                    x = f.data.tyears[m[4]] || f.data.tyears[f.data.tyears.length - 1],
                    _ = f.data.tmonths[m[5]] || f.data.tmonths[f.data.tmonths.length - 1],
                    L = f.data.tdays[m[6]] || f.data.tdays[f.data.tdays.length - 1];

                T != S[0] && (A = l.default.range.initDays(T, Y), f.data.fdays = A), Y != S[1] && (A = l.default.range.initDays(T, Y), f.data.fdays = A), x != S[3] && (A = l.default.range.initDays(x, _), f.data.tdays = A), _ != S[4] && (A = l.default.range.initDays(x, _), f.data.tdays = A), f.checkArr = [T, Y, P, x, _, L], f.resultStr = "".concat(T + "-" + Y + "-" + P + "至" + x + "-" + _ + "-" + L);
                break;

              case "half":
                g = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], y = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], r = f.data.areas[m[3]] || f.data.areas[f.data.areas.length - 1], g != S[0] && (A = l.default.date.initDays(g, y, f.disabledAfter), V = l.default.date.initMonths(g, f.disabledAfter), f.data.days = A, f.data.months = V), y != S[1] && (A = l.default.date.initDays(g, y, f.disabledAfter), f.data.days = A), f.checkArr = [g, y, k, r], f.resultStr = "".concat(g + "-" + y + "-" + k + r.label);
                break;

              case "date":
                g = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], y = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], g != S[0] && (A = l.default.date.initDays(g, y, f.disabledAfter), V = l.default.date.initMonths(g, f.disabledAfter), f.data.days = A, f.data.months = V), y != S[1] && (A = l.default.date.initDays(g, y, f.disabledAfter), f.data.days = A), f.checkArr = [g, y, k], f.resultStr = "".concat(g + "-" + y + "-" + k);
                break;

              case "yearMonth":
                g = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], y = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], g != S[0] && (V = l.default.date.initMonths(g, f.disabledAfter), f.data.months = V), f.checkArr = [g, y], f.resultStr = "".concat(g + "-" + y);
                break;

              case "dateTime":
                g = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], y = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], b = f.data.hours[m[3]] || f.data.hours[f.data.hours.length - 1], p = f.data.minutes[m[4]] || f.data.minutes[f.data.minutes.length - 1], v = f.data.seconds[m[5]] || f.data.seconds[f.data.seconds.length - 1], g != S[0] && (A = l.default.date.initDays(g, y), f.data.days = A), y != S[1] && (A = l.default.date.initDays(g, y), f.data.days = A), f.checkArr = [g, y, k, b, p, v], f.resultStr = "".concat(g + "-" + y + "-" + k + " " + b + ":" + p + ":" + v);
                break;

              case "time":
                b = f.data.hours[m[0]] || f.data.hours[f.data.hours.length - 1], p = f.data.minutes[m[1]] || f.data.minutes[f.data.minutes.length - 1], v = f.data.seconds[m[2]] || f.data.seconds[f.data.seconds.length - 1], f.checkArr = [b, p, v], f.resultStr = "".concat(b + ":" + p + ":" + v);
                break;

              case "region":
                a = f.data.provinces[m[0]].label, e = f.data.citys[m[1]].label, r = f.data.areas[m[2]].label, a != S[0] && (f.data.citys = s.default[m[0]], f.data.areas = n.default[m[0]][0], m[1] = 0, m[2] = 0, e = f.data.citys[m[1]].label, r = f.data.areas[m[2]].label), e != S[1] && (f.data.areas = n.default[m[0]][m[1]], m[2] = 0, r = f.data.areas[m[2]].label), f.checkArr = [a, e, r], f.checkValue = [f.data.provinces[m[0]].value, f.data.citys[m[1]].value, f.data.areas[m[2]].value], f.resultStr = a + e + r;
                break;

              case "selector":
                f.checkArr = f.data[m[0]] || f.data[f.data.length - 1], f.resultStr = f.data[m[0]].label || f.data[f.data.length - 1].label;
                break;
            }

            f.$nextTick(function () {
              f.pickVal = m;
            });
          },
          initData: function initData() {
            var t,
                a,
                e,
                d,
                u,
                i,
                c,
                o,
                h,
                f,
                m,
                g,
                y = this,
                k = {},
                b = y.mode,
                p = [];

            switch (b) {
              case "region":
                p = y.getRegionVal(y.defaultVal), k = {
                  provinces: r.default,
                  citys: s.default[p[0]],
                  areas: n.default[p[0]][p[1]]
                };
                break;

              case "selector":
                k = y.selectList, p = y.defaultVal;
                break;

              case "limit":
                k = l.default.limit.init(y.dayStep, y.startHour, y.endHour, y.minuteStep, y.afterStep), p = k.defaultVal && y.current ? k.defaultVal : y.defaultVal;
                break;

              case "limitHour":
                k = l.default.limitHour.init(y.dayStep), p = k.defaultVal && y.current ? k.defaultVal : y.defaultVal;
                break;

              case "range":
                k = l.default.range.init(y.startYear, y.endYear, y.useCurrent(), y.current), p = k.defaultVal && y.current ? k.defaultVal : y.defaultVal;
                break;

              default:
                k = l.default.date.init(y.startYear, y.endYear, y.mode, y.step, y.useCurrent(), y.current, y.disabledAfter), p = k.defaultVal && y.current ? k.defaultVal : y.defaultVal;
                break;
            }

            switch (y.data = k, b) {
              case "limitHour":
                f = k.date[p[0]] || k.date[k.date.length - 1], m = k.areas[p[2]] || k.areas[k.areas.length - 1], g = k.hours[p[1]] || k.hours[k.hours.length - 1], y.checkArr = [f, m, g], y.resultStr = "".concat(f.value + " " + m.label + " " + g.label + "时");
                break;

              case "limit":
                f = k.date[p[0]] || k.date[k.date.length - 1], m = k.hours[p[1]] || k.hours[k.hours.length - 1], g = k.minutes[p[2]] || k.minutes[k.minutes.length - 1], y.checkArr = [f, m, g], y.resultStr = "".concat(f.value + " " + m.value + ":" + g.value + ":00");
                break;

              case "range":
                var v = k.fyears[p[0]] || k.fyears[k.fyears.length - 1],
                    S = k.fmonths[p[1]] || k.fmonths[k.fmonths.length - 1],
                    A = k.fdays[p[2]] || k.fdays[k.fdays.length - 1],
                    V = k.tyears[p[4]] || k.tyears[k.tyears.length - 1],
                    w = k.tmonths[p[5]] || k.tmonths[k.tmonths.length - 1],
                    H = k.tdays[p[6]] || k.tdays[k.tdays.length - 1];
                y.checkArr = [v, S, A, V, w, H], y.resultStr = "".concat(v + "-" + S + "-" + A + "至" + V + "-" + w + "-" + H);
                break;

              case "half":
                t = k.years[p[0]] || k.years[k.years.length - 1], a = k.months[p[1]] || k.months[k.months.length - 1], e = k.days[p[2]] || k.days[k.days.length - 1], h = k.areas[p[3]] || k.areas[k.areas.length - 1], y.checkArr = [t, a, e, h], y.resultStr = "".concat(t + "-" + a + "-" + e + " " + h.label);
                break;

              case "date":
                t = k.years[p[0]] || k.years[k.years.length - 1], a = k.months[p[1]] || k.months[k.months.length - 1], e = k.days[p[2]] || k.days[k.days.length - 1], y.checkArr = [t, a, e], y.resultStr = "".concat(t + "-" + a + "-" + e);
                break;

              case "yearMonth":
                t = k.years[p[0]] || k.years[k.years.length - 1], a = k.months[p[1]] || k.months[k.months.length - 1], y.checkArr = [t, a], y.resultStr = "".concat(t + "-" + a);
                break;

              case "dateTime":
                t = k.years[p[0]] || k.years[k.years.length - 1], a = k.months[p[1]] || k.months[k.months.length - 1], e = k.days[p[2]] || k.days[k.days.length - 1], d = k.hours[p[3]] || k.hours[k.hours.length - 1], u = k.minutes[p[4]] || k.minutes[k.minutes.length - 1], i = k.seconds[p[5]] || k.seconds[k.seconds.length - 1], y.resultStr = "".concat(t + "-" + a + "-" + e + " " + d + ":" + u + ":" + i), y.checkArr = [t, a, e, d, u];
                break;

              case "time":
                d = k.hours[p[0]] || k.hours[k.hours.length - 1], u = k.minutes[p[1]] || k.minutes[k.minutes.length - 1], i = k.seconds[p[2]] || k.seconds[k.seconds.length - 1], y.checkArr = [d, u, i], y.resultStr = "".concat(d + ":" + u + ":" + i);
                break;

              case "region":
                c = k.provinces[p[0]], o = k.citys[p[1]], h = k.areas[p[2]], y.checkArr = [c.label, o.label, h.label], y.checkValue = [c.value, o.value, h.value], y.resultStr = c.label + o.label + h.label;
                break;

              case "selector":
                y.checkArr = k[p[0]] || k[k.length - 1], y.resultStr = k[p[0]].label || k[k.length - 1].label;
                break;
            }

            y.$nextTick(function () {
              y.pickVal = p;
            });
          }
        },
        mounted: function mounted() {
          this.initData();
        }
      };
      a.default = i;
    }).call(this, e("6e42")["default"]);
  },
  a69e: function a69e(t, a, e) {
    "use strict";

    var r = e("484a"),
        s = e.n(r);
    s.a;
  },
  e2fe: function e2fe(t, a, e) {
    "use strict";

    e.r(a);
    var r = e("623b"),
        s = e.n(r);

    for (var n in r) {
      "default" !== n && function (t) {
        e.d(a, t, function () {
          return r[t];
        });
      }(n);
    }

    a["default"] = s.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/w-picker/w-picker-create-component', {
  'components/w-picker/w-picker-create-component': function componentsWPickerWPickerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("46da"));
  }
}, [['components/w-picker/w-picker-create-component']]]);
});
require('components/w-picker/w-picker.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{3457:function(e,n,t){"use strict";(function(e,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("d2e9");var a=function(){return t.e("components/uni-load-more/uni-load-more").then(t.bind(null,"1d787"))},u={data:function(){return{swiperImges:[],onlineTeaching:[],status:"more",statusTypes:[{value:"more",text:"加载前"},{value:"loading",text:"加载中"},{value:"noMore",text:"没有更多"}],contentText:{contentdown:"查看更多",contentrefresh:"加载中",contentnomore:"没有更多"},recomItem:[{name:"测试1",id:1}]}},components:{uniLoadMore:a},onLoad:function(){},onPullDownRefresh:function(){e("log","下拉"," at pages\\index\\index.vue:266"),setTimeout(function(){o.stopPullDownRefresh()},1e3)},onReachBottom:function(){var e=this;e.status="loading",this.load()},methods:{load:function(){var e=this.recomItem.length,n=this.recomItem[e-1].id;if(n++,n<5){var t={name:"测试"+n,id:n};this.recomItem.push(t),this.status="more"}else this.status="noMore"}},mounted:function(){var e=this;o.request({url:"https://kxsx.kaifadanao.cn/api/index/index",method:"POST",data:{},header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(n){1==n.data.status&&(e.swiperImges=n.data.data.banner,e.onlineTeaching=n.data.data.smodel)},fail:function(){},complete:function(){}})}};n.default=u}).call(this,t("0de9")["default"],t("6e42")["default"])},"362d":function(e,n,t){"use strict";t.r(n);var o=t("a30a"),a=t("3f24");for(var u in a)"default"!==u&&function(e){t.d(n,e,function(){return a[e]})}(u);t("584a");var i,r=t("f0c5"),c=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);n["default"]=c.exports},"3f24":function(e,n,t){"use strict";t.r(n);var o=t("3457"),a=t.n(o);for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);n["default"]=a.a},"49ec":function(e,n,t){},"584a":function(e,n,t){"use strict";var o=t("49ec"),a=t.n(o);a.a},a30a:function(e,n,t){"use strict";var o={"uni-load-more":()=>t.e("components/uni-load-more/uni-load-more").then(t.bind(null,"1d787"))},a=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"b",function(){return a}),t.d(n,"c",function(){return u}),t.d(n,"a",function(){return o})},ce7a:function(e,n,t){"use strict";(function(e){t("907b"),t("921b");o(t("66fd"));var n=o(t("362d"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])}},[["ce7a","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/my/my';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/my.js';

define('pages/my/my.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{"0a44":function(n,t,e){},"138d":function(n,t,e){"use strict";e.r(t);var u=e("8c3a"),a=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=a.a},"3af7":function(n,t,e){"use strict";var u=e("0a44"),a=e.n(u);a.a},"8c3a":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{recomItem:[{name:"测试1",id:1}]}}};t.default=u},"8d8b":function(n,t,e){"use strict";(function(n){e("907b"),e("921b");u(e("66fd"));var t=u(e("c35d"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},9064:function(n,t,e){"use strict";var u,a=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return c}),e.d(t,"a",function(){return u})},c35d:function(n,t,e){"use strict";e.r(t);var u=e("9064"),a=e("138d");for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);e("3af7");var r,f=e("f0c5"),o=Object(f["a"])(a["default"],u["b"],u["c"],!1,null,"7a73ba84",null,!1,u["a"],r);t["default"]=o.exports}},[["8d8b","common/runtime","common/vendor"]]]);
});
require('pages/my/my.js');
__wxRoute = 'pages/my/jifenguize/jifenguize';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/jifenguize/jifenguize.js';

define('pages/my/jifenguize/jifenguize.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/jifenguize/jifenguize"],{"1df3":function(n,t,e){"use strict";var u=e("9a47"),c=e.n(u);c.a},4420:function(n,t,e){"use strict";e.r(t);var u=e("9f72"),c=e("c44e");for(var f in c)"default"!==f&&function(n){e.d(t,n,function(){return c[n]})}(f);e("1df3");var r,a=e("f0c5"),i=Object(a["a"])(c["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);t["default"]=i.exports},"9a47":function(n,t,e){},"9f72":function(n,t,e){"use strict";var u,c=function(){var n=this,t=n.$createElement;n._self._c},f=[];e.d(t,"b",function(){return c}),e.d(t,"c",function(){return f}),e.d(t,"a",function(){return u})},b1c8:function(n,t,e){},c44e:function(n,t,e){"use strict";e.r(t);var u=e("b1c8"),c=e.n(u);for(var f in u)"default"!==f&&function(n){e.d(t,n,function(){return u[n]})}(f);t["default"]=c.a},e5e1:function(n,t,e){"use strict";(function(n){e("907b"),e("921b");u(e("66fd"));var t=u(e("4420"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])}},[["e5e1","common/runtime","common/vendor"]]]);
});
require('pages/my/jifenguize/jifenguize.js');
__wxRoute = 'pages/my/huiyuantequan/huiyuantequan';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/huiyuantequan/huiyuantequan.js';

define('pages/my/huiyuantequan/huiyuantequan.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/huiyuantequan/huiyuantequan"],{1922:function(n,t,u){"use strict";var a=u("d090"),e=u.n(a);e.a},"1d76":function(n,t,u){},"397d":function(n,t,u){"use strict";u.r(t);var a=u("fda6"),e=u("a51f");for(var c in e)"default"!==c&&function(n){u.d(t,n,function(){return e[n]})}(c);u("1922");var r,f=u("f0c5"),o=Object(f["a"])(e["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);t["default"]=o.exports},a51f:function(n,t,u){"use strict";u.r(t);var a=u("1d76"),e=u.n(a);for(var c in a)"default"!==c&&function(n){u.d(t,n,function(){return a[n]})}(c);t["default"]=e.a},c449:function(n,t,u){"use strict";(function(n){u("907b"),u("921b");a(u("66fd"));var t=a(u("397d"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,u("6e42")["createPage"])},d090:function(n,t,u){},fda6:function(n,t,u){"use strict";var a,e=function(){var n=this,t=n.$createElement;n._self._c},c=[];u.d(t,"b",function(){return e}),u.d(t,"c",function(){return c}),u.d(t,"a",function(){return a})}},[["c449","common/runtime","common/vendor"]]]);
});
require('pages/my/huiyuantequan/huiyuantequan.js');
__wxRoute = 'pages/online_Teach/onlineTeach';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/online_Teach/onlineTeach.js';

define('pages/online_Teach/onlineTeach.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/online_Teach/onlineTeach"],{"2a5c":function(t,e,n){},"4f43":function(t,e,n){"use strict";n.r(e);var o=n("b187"),c=n("ad31");for(var i in c)"default"!==i&&function(t){n.d(e,t,function(){return c[t]})}(i);n("b225");var a,u=n("f0c5"),l=Object(u["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=l.exports},"566d":function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"1d787"))},i={data:function(){return{status:"more",statusTypes:[{value:"more",text:"加载前"},{value:"loading",text:"加载中"},{value:"noMore",text:"没有更多"}],collectClick:{index:1,text:"未收藏",img:"../../static/jctbxzjx/shoucangwei.png"},catalogue:{checkId:0,catalogueData:[{text:"一年级上册",id:0},{text:"一年级下册",id:1},{text:"二年级上册",id:2},{text:"二年级下册",id:3},{text:"三年级上册",id:4},{text:"三年级下册",id:5},{text:"四年级上册",id:6},{text:"四年级下册",id:7},{text:"五年级上册",id:8},{text:"五年级下册",id:9},{text:"六年级上册",id:10},{text:"六年级下册",id:11}]}}},components:{uniLoadMore:c},onLoad:function(){},onReachBottom:function(){t("log","上拉"," at pages\\online_Teach\\onlineTeach.vue:121");var e=this;e.status="loading",o.showNavigationBarLoading(),setTimeout(function(){e.status="more",o.hideNavigationBarLoading()},1e3)},methods:{load:function(){t("log",1," at pages\\online_Teach\\onlineTeach.vue:133")},collect:function(t){var e=this;1==e.collectClick.index?(e.collectClick.text="已收藏",e.collectClick.img="../../static/jctbxzjx/shoucangyi.png",e.collectClick.index=2):(e.collectClick.text="未收藏",e.collectClick.img="../../static/jctbxzjx/shoucangwei.png",e.collectClick.index=1)},checkData:function(t){var e=t.currentTarget.id;this.catalogue.checkId=e}},mounted:function(){}};e.default=i}).call(this,n("0de9")["default"],n("6e42")["default"])},ad31:function(t,e,n){"use strict";n.r(e);var o=n("566d"),c=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=c.a},b187:function(t,e,n){"use strict";var o={"uni-load-more":()=>n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"1d787"))},c=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return c}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return o})},b225:function(t,e,n){"use strict";var o=n("2a5c"),c=n.n(o);c.a},fae2:function(t,e,n){"use strict";(function(t){n("907b"),n("921b");o(n("66fd"));var e=o(n("4f43"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["fae2","common/runtime","common/vendor"]]]);
});
require('pages/online_Teach/onlineTeach.js');
__wxRoute = 'pages/onlinestore/onlinestore';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/onlinestore/onlinestore.js';

define('pages/onlinestore/onlinestore.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/onlinestore/onlinestore"],{"1d83":function(n,t,e){},"29cb":function(n,t,e){"use strict";var u={"uni-countdown":()=>e.e("components/uni-countdown/uni-countdown").then(e.bind(null,"ada4"))},o=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"b",function(){return o}),e.d(t,"c",function(){return i}),e.d(t,"a",function(){return u})},6781:function(n,t,e){"use strict";(function(n,u){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return e.e("components/uni-countdown/uni-countdown").then(e.bind(null,"ada4"))},i={data:function(){return{tabindex:1,tabIndex:0,contentList:["关注","推荐","热点","体育","财经"],goodslist:[{price:"250"},{price:"250"},{price:"250"}],tabBars:[{name:"关注",id:"guanzhu"},{name:"推荐",id:"tuijian"},{name:"热点",id:"redian"},{name:"体育",id:"tiyu"},{name:"财经",id:"caijing"}],swiperHeight:0}},components:{uniCountdown:o},mounted:function(){n.request({})},methods:{toggleTab:function(n){u("log",n," at pages\\onlinestore\\onlinestore.vue:138"),this.tabIndex=n},tabChange:function(n){u("log",n.detail," at pages\\onlinestore\\onlinestore.vue:142");var t=n.detail.current;this.tabIndex=t}}};t.default=i}).call(this,e("6e42")["default"],e("0de9")["default"])},"74ec1":function(n,t,e){"use strict";e.r(t);var u=e("29cb"),o=e("eb58");for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);e("d506");var a,c=e("f0c5"),r=Object(c["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);t["default"]=r.exports},a68b:function(n,t,e){"use strict";(function(n){e("907b"),e("921b");u(e("66fd"));var t=u(e("74ec1"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},d506:function(n,t,e){"use strict";var u=e("1d83"),o=e.n(u);o.a},eb58:function(n,t,e){"use strict";e.r(t);var u=e("6781"),o=e.n(u);for(var i in u)"default"!==i&&function(n){e.d(t,n,function(){return u[n]})}(i);t["default"]=o.a}},[["a68b","common/runtime","common/vendor"]]]);
});
require('pages/onlinestore/onlinestore.js');
__wxRoute = 'pages/myPublished/myPublished';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myPublished/myPublished.js';

define('pages/myPublished/myPublished.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myPublished/myPublished"],{"0b01":function(n,t,u){},"25f0":function(n,t,u){"use strict";u.r(t);var e=u("f28c"),c=u("b7a2");for(var f in c)"default"!==f&&function(n){u.d(t,n,function(){return c[n]})}(f);u("5be1");var r,a=u("f0c5"),o=Object(a["a"])(c["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);t["default"]=o.exports},"5be1":function(n,t,u){"use strict";var e=u("9155"),c=u.n(e);c.a},9155:function(n,t,u){},b7a2:function(n,t,u){"use strict";u.r(t);var e=u("0b01"),c=u.n(e);for(var f in e)"default"!==f&&function(n){u.d(t,n,function(){return e[n]})}(f);t["default"]=c.a},f0c8:function(n,t,u){"use strict";(function(n){u("907b"),u("921b");e(u("66fd"));var t=e(u("25f0"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,u("6e42")["createPage"])},f28c:function(n,t,u){"use strict";var e,c=function(){var n=this,t=n.$createElement;n._self._c},f=[];u.d(t,"b",function(){return c}),u.d(t,"c",function(){return f}),u.d(t,"a",function(){return e})}},[["f0c8","common/runtime","common/vendor"]]]);
});
require('pages/myPublished/myPublished.js');
__wxRoute = 'pages/my/daySignin/daySignin';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/daySignin/daySignin.js';

define('pages/my/daySignin/daySignin.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/daySignin/daySignin"],{6299:function(n,e,t){"use strict";(function(n){t("907b"),t("921b");u(t("66fd"));var e=u(t("c8d0"));function u(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},"847a":function(n,e,t){"use strict";var u={"uni-calendar":()=>Promise.all([t.e("common/vendor"),t.e("components/uni-calendar/uni-calendar")]).then(t.bind(null,"cda9")),"uni-popup":()=>t.e("components/uni-popup/uni-popup").then(t.bind(null,"ce5c"))},c=function(){var n=this,e=n.$createElement;n._self._c},o=[];t.d(e,"b",function(){return c}),t.d(e,"c",function(){return o}),t.d(e,"a",function(){return u})},"8c24":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){return Promise.all([t.e("common/vendor"),t.e("components/uni-calendar/uni-calendar")]).then(t.bind(null,"cda9"))},c=function(){return t.e("components/uni-popup/uni-popup").then(t.bind(null,"ce5c"))},o={components:{uniCalendar:u,uniPopup:c},data:function(){return{isSign:{nowTime:""},selected:[{date:"2019-9-5"}]}},onLoad:function(){var n=new Date,e=n.getFullYear(),t=n.getMonth()+1,u=n.getDate(),c=e+"-"+t+"-"+u;this.isSign.nowTime=c},methods:{show:function(){var n=new Date,e=n.getFullYear(),t=n.getMonth()+1,u=n.getDate(),c={date:e+"-"+t+"-"+u},o=this;o.selected[o.selected.length-1].date!=c.date?o.selected.push(c):(o.$refs.popup.open(),setTimeout(function(n){o.$refs.popup.close()},1e3))}},mounted:function(){}};e.default=o},c3a8:function(n,e,t){"use strict";var u=t("ecee"),c=t.n(u);c.a},c60c:function(n,e,t){"use strict";t.r(e);var u=t("8c24"),c=t.n(u);for(var o in u)"default"!==o&&function(n){t.d(e,n,function(){return u[n]})}(o);e["default"]=c.a},c8d0:function(n,e,t){"use strict";t.r(e);var u=t("847a"),c=t("c60c");for(var o in c)"default"!==o&&function(n){t.d(e,n,function(){return c[n]})}(o);t("c3a8");var a,i=t("f0c5"),r=Object(i["a"])(c["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);e["default"]=r.exports},ecee:function(n,e,t){}},[["6299","common/runtime","common/vendor"]]]);
});
require('pages/my/daySignin/daySignin.js');
__wxRoute = 'pages/onlinestore/myOrder/myOrder';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/onlinestore/myOrder/myOrder.js';

define('pages/onlinestore/myOrder/myOrder.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/onlinestore/myOrder/myOrder"],{"4b0d":function(n,t,e){"use strict";(function(n){e("907b"),e("921b");r(e("66fd"));var t=r(e("63b3"));function r(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},5495:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{currentId:"1",section:[{name:"全部",typeId:"0"},{name:"待付款",typeId:"1"},{name:"待发货",typeId:"2"},{name:"待收货",typeId:"3"},{name:"退货",typeId:"4"}]}},onLoad:function(n){this.currentId=n.currentId}};t.default=r},"63b3":function(n,t,e){"use strict";e.r(t);var r=e("a959"),u=e("c588");for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);e("f7d9");var a,o=e("f0c5"),f=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);t["default"]=f.exports},a959:function(n,t,e){"use strict";var r,u=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"b",function(){return u}),e.d(t,"c",function(){return c}),e.d(t,"a",function(){return r})},c588:function(n,t,e){"use strict";e.r(t);var r=e("5495"),u=e.n(r);for(var c in r)"default"!==c&&function(n){e.d(t,n,function(){return r[n]})}(c);t["default"]=u.a},cbf5:function(n,t,e){},f7d9:function(n,t,e){"use strict";var r=e("cbf5"),u=e.n(r);u.a}},[["4b0d","common/runtime","common/vendor"]]]);
});
require('pages/onlinestore/myOrder/myOrder.js');
__wxRoute = 'pages/my/huiyuanxinxi/huiyuanxinxi';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/huiyuanxinxi/huiyuanxinxi.js';

define('pages/my/huiyuanxinxi/huiyuanxinxi.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/huiyuanxinxi/huiyuanxinxi"],{"216d":function(n,e,t){"use strict";(function(n){t("907b"),t("921b");i(t("66fd"));var e=i(t("bcb0"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},"69e2":function(n,e,t){},"74ec":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"46da"))},a={components:{wPicker:i},data:function(){return{gender:["男","女"],array:["一年级","二年级","三年级","四年级","五年级","六年级"],uploadInfo:{nickname:"",avatar:"",gender:"",birthday:"",mobile:"",grade:"",province:"",city:"",area:"",region:[],classes:[]}}},onLoad:function(){},methods:{bindSexChange:function(n){this.uploadInfo.gender=n.target.value},bindBirthdayChange:function(n){this.uploadInfo.birthday=n.target.value},bindClassChange:function(n){this.uploadInfo.grade=n.target.value},toggleTab:function(){this.$refs.region.show()},bindCityChange:function(n){this.uploadInfo.region=n.checkArr},sengjibtn:function(){n("log",1," at pages\\my\\huiyuanxinxi\\huiyuanxinxi.vue:127")}},mounted:function(){}};e.default=a}).call(this,t("0de9")["default"])},b892:function(n,e,t){"use strict";var i=t("69e2"),a=t.n(i);a.a},bcb0:function(n,e,t){"use strict";t.r(e);var i=t("fd3e"),a=t("d631");for(var o in a)"default"!==o&&function(n){t.d(e,n,function(){return a[n]})}(o);t("b892");var u,r=t("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);e["default"]=c.exports},d631:function(n,e,t){"use strict";t.r(e);var i=t("74ec"),a=t.n(i);for(var o in i)"default"!==o&&function(n){t.d(e,n,function(){return i[n]})}(o);e["default"]=a.a},fd3e:function(n,e,t){"use strict";var i={"w-picker":()=>Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"46da"))},a=function(){var n=this,e=n.$createElement;n._self._c},o=[];t.d(e,"b",function(){return a}),t.d(e,"c",function(){return o}),t.d(e,"a",function(){return i})}},[["216d","common/runtime","common/vendor"]]]);
});
require('pages/my/huiyuanxinxi/huiyuanxinxi.js');
__wxRoute = 'pages/my/huiyuanjifen/huiyuanjifen';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/huiyuanjifen/huiyuanjifen.js';

define('pages/my/huiyuanjifen/huiyuanjifen.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/huiyuanjifen/huiyuanjifen"],{"009b":function(n,t,u){"use strict";(function(n){u("907b"),u("921b");e(u("66fd"));var t=e(u("647b"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,u("6e42")["createPage"])},"1e9f":function(n,t,u){"use strict";var e=u("e166"),c=u.n(e);c.a},4513:function(n,t,u){"use strict";u.r(t);var e=u("c8ff"),c=u.n(e);for(var f in e)"default"!==f&&function(n){u.d(t,n,function(){return e[n]})}(f);t["default"]=c.a},"647b":function(n,t,u){"use strict";u.r(t);var e=u("dc43"),c=u("4513");for(var f in c)"default"!==f&&function(n){u.d(t,n,function(){return c[n]})}(f);u("1e9f");var r,a=u("f0c5"),i=Object(a["a"])(c["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);t["default"]=i.exports},c8ff:function(n,t,u){},dc43:function(n,t,u){"use strict";var e,c=function(){var n=this,t=n.$createElement;n._self._c},f=[];u.d(t,"b",function(){return c}),u.d(t,"c",function(){return f}),u.d(t,"a",function(){return e})},e166:function(n,t,u){}},[["009b","common/runtime","common/vendor"]]]);
});
require('pages/my/huiyuanjifen/huiyuanjifen.js');
__wxRoute = 'pages/my/mycollect/mycollect';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/mycollect/mycollect.js';

define('pages/my/mycollect/mycollect.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/mycollect/mycollect"],{"2c4c":function(n,t,c){},"584e":function(n,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{currentId:"1",section:[{navtabimg:"../../../static/my/collectshipin-wei.png",clicknavtabimg:"../../../static/my/collectshipin-yi.png",name:"视频",typeId:"1"},{navtabimg:"../../../static/my/collectyinpin-wei.png",clicknavtabimg:"../../../static/my/collectyinpin-yi.png",name:"音频",typeId:"2"},{navtabimg:"../../../static/my/chanpin-wei.png",clicknavtabimg:"../../../static/my/chanpin-yi.png",name:"产品",typeId:"3"}]}},onLoad:function(n){this.currentId=n.currentId}};t.default=e},"6e79":function(n,t,c){"use strict";c.r(t);var e=c("584e"),i=c.n(e);for(var a in e)"default"!==a&&function(n){c.d(t,n,function(){return e[n]})}(a);t["default"]=i.a},"70be":function(n,t,c){"use strict";var e=c("2c4c"),i=c.n(e);i.a},"92e9":function(n,t,c){"use strict";var e,i=function(){var n=this,t=n.$createElement;n._self._c},a=[];c.d(t,"b",function(){return i}),c.d(t,"c",function(){return a}),c.d(t,"a",function(){return e})},b645:function(n,t,c){"use strict";(function(n){c("907b"),c("921b");e(c("66fd"));var t=e(c("c9cb"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,c("6e42")["createPage"])},c9cb:function(n,t,c){"use strict";c.r(t);var e=c("92e9"),i=c("6e79");for(var a in i)"default"!==a&&function(n){c.d(t,n,function(){return i[n]})}(a);c("70be");var u,r=c("f0c5"),o=Object(r["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],u);t["default"]=o.exports}},[["b645","common/runtime","common/vendor"]]]);
});
require('pages/my/mycollect/mycollect.js');
__wxRoute = 'pages/my/lstgjl/lstgjl';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/lstgjl/lstgjl.js';

define('pages/my/lstgjl/lstgjl.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/lstgjl/lstgjl"],{"629a":function(n,t,e){"use strict";e.r(t);var a=e("ca61"),u=e("8123");for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);e("faa4");var r,f=e("f0c5"),o=Object(f["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);t["default"]=o.exports},8123:function(n,t,e){"use strict";e.r(t);var a=e("8f2e"),u=e.n(a);for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);t["default"]=u.a},"8f2e":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{currentId:"1",section:[{name:"书法作品",typeId:"1"},{name:"绘画作品",typeId:"2"},{name:"阅读朗诵",typeId:"3"},{name:"快乐书写",typeId:"4"}]}},load:function(){}};t.default=a},ca61:function(n,t,e){"use strict";var a,u=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"b",function(){return u}),e.d(t,"c",function(){return c}),e.d(t,"a",function(){return a})},cabe:function(n,t,e){"use strict";(function(n){e("907b"),e("921b");a(e("66fd"));var t=a(e("629a"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},f2a3:function(n,t,e){},faa4:function(n,t,e){"use strict";var a=e("f2a3"),u=e.n(a);u.a}},[["cabe","common/runtime","common/vendor"]]]);
});
require('pages/my/lstgjl/lstgjl.js');
__wxRoute = 'pages/publishedDiary/publishedDiary';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/publishedDiary/publishedDiary.js';

define('pages/publishedDiary/publishedDiary.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/publishedDiary/publishedDiary"],{"146a":function(n,t,e){"use strict";(function(n){e("907b"),e("921b");u(e("66fd"));var t=u(e("6806"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"21f2":function(n,t,e){"use strict";e.r(t);var u=e("b87d"),f=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=f.a},5132:function(n,t,e){"use strict";var u,f=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"b",function(){return f}),e.d(t,"c",function(){return r}),e.d(t,"a",function(){return u})},6806:function(n,t,e){"use strict";e.r(t);var u=e("5132"),f=e("21f2");for(var r in f)"default"!==r&&function(n){e.d(t,n,function(){return f[n]})}(r);e("f7f4");var a,i=e("f0c5"),c=Object(i["a"])(f["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);t["default"]=c.exports},b87d:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{isOpen:["公开","私密"],open:0}},methods:{bindIsOpen:function(n){this.open=n.target.value}}};t.default=u},f7f4:function(n,t,e){"use strict";var u=e("ff97"),f=e.n(u);f.a},ff97:function(n,t,e){}},[["146a","common/runtime","common/vendor"]]]);
});
require('pages/publishedDiary/publishedDiary.js');
__wxRoute = 'pages/chat/chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/chat.js';

define('pages/chat/chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/chat"],{"3c55":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(a("9e92")),c=o(a("1d78"));function o(t){return t&&t.__esModule?t:{default:t}}var u=n.default.RongIMClient,r="pwe86ga5p4d36",i={data:function(){return{userMsg:{name:"空白",userId:"924756420",portraitUri:"https://kxsx-front-pic.oss-cn-beijing.aliyuncs.com/pic/20190815/156587576839.png"},linkList:[]}},onLoad:function(){var e=this,a=(new Date,"ZU5g/RRMEU2RUhfRT95FS0roF+1VR/NPRNBHO7cp39u44UVUi937DYiUHhlkx7cZdusSShxRe04zVZ0awUjVo2Y1rIY6tpSV");u.init(r,null,{protobuf:c.default}),u.setConnectionStatusListener({onChanged:function(e){switch(e){case n.default.ConnectionStatus.CONNECTED:t("log","链接成功"," at pages\\chat\\chat.vue:60");break;case n.default.ConnectionStatus.CONNECTING:t("log","正在链接"," at pages\\chat\\chat.vue:63");break;case n.default.ConnectionStatus.DISCONNECTED:t("log","断开连接"," at pages\\chat\\chat.vue:66");break;case n.default.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:t("log","其他设备登录, 本端被踢"," at pages\\chat\\chat.vue:69");break;case n.default.ConnectionStatus.DOMAIN_INCORRECT:t("log","域名不正确, 请至开发者后台查看安全域名配置"," at pages\\chat\\chat.vue:72");break;case n.default.ConnectionStatus.NETWORK_UNAVAILABLE:t("log","网络不可用, 此时可调用 reconnect 进行重连"," at pages\\chat\\chat.vue:75");break;default:t("log","链接状态为",e," at pages\\chat\\chat.vue:78");break}}}),u.setOnReceiveMessageListener({onReceived:function(a){var c=[n.default.ConversationType.PRIVATE],o=150;u.getInstance().getConversationList({onSuccess:function(t){for(var a=0;a<t.length;a++)t[a].sentTime=e.formatTime(t[a].sentTime);e.linkList=t},onError:function(e){t("log","获取会话列表失败",e," at pages\\chat\\chat.vue:98")}},c,o)}}),u.connect(a,{onSuccess:function(e){t("log","连接成功, 用户 id 为",e," at pages\\chat\\chat.vue:106")},onTokenIncorrect:function(){t("log","连接失败, 失败原因: token 无效"," at pages\\chat\\chat.vue:110")},onError:function(e){var a="";switch(e){case n.default.ErrorCode.TIMEOUT:a="链接超时";break;case n.default.ConnectionState.UNACCEPTABLE_PAROTOCOL_VERSION:a="不可接受的协议版本";break;case n.default.ConnectionState.IDENTIFIER_REJECTED:a="appkey 不正确";break;case n.default.ConnectionState.SERVER_UNAVAILABLE:a="服务器不可用";break;default:a=e;break}t("log","连接失败, 失败原因: ",a," at pages\\chat\\chat.vue:131")}});var o=[n.default.ConversationType.PRIVATE],i=150;u.getInstance().getConversationList({onSuccess:function(a){t("log",a," at pages\\chat\\chat.vue:139");for(var n=0;n<a.length;n++)a[n].sentTime=e.formatTime(a[n].sentTime);e.linkList=a},onError:function(e){t("log","获取会话列表失败",e," at pages\\chat\\chat.vue:147")}},o,i)},methods:{formatTime:function(t){var e=new Date(1*t),a=(e.getFullYear(),(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-"),n=e.getDate(),c=e.getHours()+":",o=e.getMinutes();return(new Date).getTime()-t>864e5?a+n:c+o}},mounted:function(){},beforeDestroy:function(){}};e.default=i}).call(this,a("0de9")["default"])},"3cba":function(t,e,a){"use strict";a.r(e);var n=a("3c55"),c=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=c.a},"4a56":function(t,e,a){"use strict";(function(t){a("907b"),a("921b");n(a("66fd"));var e=n(a("a6ac"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},5465:function(t,e,a){},a3c7:function(t,e,a){"use strict";var n=a("5465"),c=a.n(n);c.a},a6ac:function(t,e,a){"use strict";a.r(e);var n=a("f39f"),c=a("3cba");for(var o in c)"default"!==o&&function(t){a.d(e,t,function(){return c[t]})}(o);a("a3c7");var u,r=a("f0c5"),i=Object(r["a"])(c["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);e["default"]=i.exports},f39f:function(t,e,a){"use strict";var n,c=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"b",function(){return c}),a.d(e,"c",function(){return o}),a.d(e,"a",function(){return n})}},[["4a56","common/runtime","common/vendor"]]]);
});
require('pages/chat/chat.js');
__wxRoute = 'pages/chat/chatContent/chatContent';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/chatContent/chatContent.js';

define('pages/chat/chatContent/chatContent.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/chatContent/chatContent"],{"43ce":function(t,n,e){},"45d6":function(t,n,e){"use strict";var a,o=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return c}),e.d(n,"a",function(){return a})},"4c73":function(t,n,e){"use strict";e.r(n);var a=e("765d"),o=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);n["default"]=o.a},"765d":function(t,n,e){"use strict";(function(t,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=u(e("9e92")),c=u(e("1d78"));function u(t){return t&&t.__esModule?t:{default:t}}var r=o.default.RongIMClient,s="pwe86ga5p4d36",i=o.default.ConversationType.PRIVATE,f="ZU5g/RRMEU2RUhfRT95FS0roF+1VR/NPRNBHO7cp39u44UVUi937DYiUHhlkx7cZdusSShxRe04zVZ0awUjVo2Y1rIY6tpSV",l={data:function(){return{targetId:"",linkList:[],userMsg:{name:"",portraitUri:"https://kxsx-front-pic.oss-cn-beijing.aliyuncs.com/pic/20190815/156587576839.png"}}},onLoad:function(n){var e=this,u=n.targetId;e.targetId=u,t.setNavigationBarTitle({title:u}),r.init(s,null,{protobuf:c.default}),r.setConnectionStatusListener({onChanged:function(t){switch(t){case o.default.ConnectionStatus.CONNECTED:a("log","链接成功"," at pages\\chat\\chatContent\\chatContent.vue:50");break;case o.default.ConnectionStatus.CONNECTING:a("log","正在链接"," at pages\\chat\\chatContent\\chatContent.vue:53");break;case o.default.ConnectionStatus.DISCONNECTED:a("log","断开连接"," at pages\\chat\\chatContent\\chatContent.vue:56");break;case o.default.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:a("log","其他设备登录, 本端被踢"," at pages\\chat\\chatContent\\chatContent.vue:59");break;case o.default.ConnectionStatus.DOMAIN_INCORRECT:a("log","域名不正确, 请至开发者后台查看安全域名配置"," at pages\\chat\\chatContent\\chatContent.vue:62");break;case o.default.ConnectionStatus.NETWORK_UNAVAILABLE:a("log","网络不可用, 此时可调用 reconnect 进行重连"," at pages\\chat\\chatContent\\chatContent.vue:65");break;default:a("log","链接状态为",t," at pages\\chat\\chatContent\\chatContent.vue:68");break}}}),r.setOnReceiveMessageListener({onReceived:function(t){t.content;var n=0,c=20;o.default.RongIMClient.getInstance().getHistoryMessages(i,u,n,c,{onSuccess:function(t,n){e.userMsg.name=t[0].content.targetId;for(var o=[],c=0;c<t.length;c++)o.push(t[c].content);e.linkList=o,a("log","获取历史消息成功",t," at pages\\chat\\chatContent\\chatContent.vue:92")},onError:function(t){a("log","获取历史消息失败",t," at pages\\chat\\chatContent\\chatContent.vue:96")}})}}),r.connect(f,{onSuccess:function(t){a("log","连接成功, 用户 id 为",t," at pages\\chat\\chatContent\\chatContent.vue:104")},onTokenIncorrect:function(){a("log","连接失败, 失败原因: token 无效"," at pages\\chat\\chatContent\\chatContent.vue:108")},onError:function(t){var n="";switch(t){case o.default.ErrorCode.TIMEOUT:n="链接超时";break;case o.default.ConnectionState.UNACCEPTABLE_PAROTOCOL_VERSION:n="不可接受的协议版本";break;case o.default.ConnectionState.IDENTIFIER_REJECTED:n="appkey 不正确";break;case o.default.ConnectionState.SERVER_UNAVAILABLE:n="服务器不可用";break;default:n=t;break}a("log","连接失败, 失败原因: ",n," at pages\\chat\\chatContent\\chatContent.vue:129")}});var l=0,h=20;o.default.RongIMClient.getInstance().getHistoryMessages(i,u,l,h,{onSuccess:function(t,n){e.userMsg.name=t[0].content.targetId;for(var o=[],c=0;c<t.length;c++)o.push(t[c].content);e.linkList=o,a("log",e.linkList," at pages\\chat\\chatContent\\chatContent.vue:147")},onError:function(t){a("log","获取历史消息失败",t," at pages\\chat\\chatContent\\chatContent.vue:151")}})},onUnload:function(){},mounted:function(){},methods:{},beforeDestroy:function(){var t=this.targetId;r.getInstance().clearUnreadCount(i,t,{onSuccess:function(){a("log","清除未读消息成功"," at pages\\chat\\chatContent\\chatContent.vue:172")},onError:function(t){a("log","清除未读消息数错误码"," at pages\\chat\\chatContent\\chatContent.vue:176")}})},beforeMount:function(){a("log","挂载前"," at pages\\chat\\chatContent\\chatContent.vue:181"),r.init(s,null,{protobuf:c.default})}};n.default=l}).call(this,e("6e42")["default"],e("0de9")["default"])},"7d6f":function(t,n,e){"use strict";(function(t){e("907b"),e("921b");a(e("66fd"));var n=a(e("c40b"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"7ffc":function(t,n,e){"use strict";var a=e("43ce"),o=e.n(a);o.a},c40b:function(t,n,e){"use strict";e.r(n);var a=e("45d6"),o=e("4c73");for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);e("7ffc");var u,r=e("f0c5"),s=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);n["default"]=s.exports}},[["7d6f","common/runtime","common/vendor"]]]);
});
require('pages/chat/chatContent/chatContent.js');
__wxRoute = 'pages/freeTeaching/freeTeaching';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/freeTeaching/freeTeaching.js';

define('pages/freeTeaching/freeTeaching.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/freeTeaching/freeTeaching"],{"430f":function(n,t,e){},"94b4":function(n,t,e){"use strict";e.r(t);var u=e("aa1d"),a=e("b8bd");for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);e("9a28");var r,f=e("f0c5"),o=Object(f["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);t["default"]=o.exports},"9a28":function(n,t,e){"use strict";var u=e("430f"),a=e.n(u);a.a},a7d1:function(n,t,e){"use strict";(function(n){e("907b"),e("921b");u(e("66fd"));var t=u(e("94b4"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},aa1d:function(n,t,e){"use strict";var u,a=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return c}),e.d(t,"a",function(){return u})},b8bd:function(n,t,e){"use strict";e.r(t);var u=e("cfdb"),a=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=a.a},cfdb:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},onLoad:function(){},methods:{},mounted:function(){}};t.default=u}},[["a7d1","common/runtime","common/vendor"]]]);
});
require('pages/freeTeaching/freeTeaching.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"174e":function(n,t,e){"use strict";(function(n){e("907b"),e("921b");o(e("66fd"));var t=o(e("8ac5"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"1db7":function(n,t,e){"use strict";var o,u=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"b",function(){return u}),e.d(t,"c",function(){return i}),e.d(t,"a",function(){return o})},"439b":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{msgLogin:"isMsgLogin",phone:"",yzm:"",password:"",second:""}},methods:{orderLogin:function(n){this.msgLogin="isMsgLogin"==n?"isAccountLogin":"isMsgLogin"},yzmBtn:function(){n("log",1," at pages\\login\\login.vue:61");var t=this,e=60,o=setInterval(function(){e--,0==e?(t.second="",clearInterval(o)):t.second=e},1e3)}},mounted:function(){}};t.default=e}).call(this,e("0de9")["default"])},"8ac5":function(n,t,e){"use strict";e.r(t);var o=e("1db7"),u=e("e485");for(var i in u)"default"!==i&&function(n){e.d(t,n,function(){return u[n]})}(i);e("e424");var c,r=e("f0c5"),a=Object(r["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);t["default"]=a.exports},"9ce7":function(n,t,e){},e424:function(n,t,e){"use strict";var o=e("9ce7"),u=e.n(o);u.a},e485:function(n,t,e){"use strict";e.r(t);var o=e("439b"),u=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);t["default"]=u.a}},[["174e","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/reg/reg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/reg/reg.js';

define('pages/reg/reg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reg/reg"],{"1e3d":function(n,e,t){},"47aa":function(n,e,t){"use strict";t.r(e);var o=t("bb81"),c=t.n(o);for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);e["default"]=c.a},"7cf5":function(n,e,t){"use strict";t.r(e);var o=t("8518"),c=t("47aa");for(var a in c)"default"!==a&&function(n){t.d(e,n,function(){return c[n]})}(a);t("ca98");var r,u=t("f0c5"),i=Object(u["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=i.exports},8518:function(n,e,t){"use strict";var o={"w-picker":()=>Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"46da"))},c=function(){var n=this,e=n.$createElement;n._self._c},a=[];t.d(e,"b",function(){return c}),t.d(e,"c",function(){return a}),t.d(e,"a",function(){return o})},bb81:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"46da"))},c={components:{wPicker:o},data:function(){return{gender:["a学校","b学校","c学校","d学校","e学校","f学校"],genClass:["一年级","二年级","三年级","四年级","五年级","六年级"],grade:["1班","2班","3班","4班","5班","6班"],uploadInfo:{school:"",class:"",classClass:"",province:"",city:"",area:"",region:[]}}},methods:{bindSchoolChange:function(n){this.uploadInfo.school=n.target.value},bindClassChange:function(n){this.uploadInfo.class=n.target.value},bindGradeChange:function(n){this.uploadInfo.classClass=n.target.value},toggleTab:function(){this.$refs.region.show()},bindCityChange:function(n){this.uploadInfo.region=n.checkArr},getcode:function(){},save:function(){}}};e.default=c},ca98:function(n,e,t){"use strict";var o=t("1e3d"),c=t.n(o);c.a},cf6c:function(n,e,t){"use strict";(function(n){t("907b"),t("921b");o(t("66fd"));var e=o(t("7cf5"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])}},[["cf6c","common/runtime","common/vendor"]]]);
});
require('pages/reg/reg.js');
__wxRoute = 'pages/hncjiaoxue_mulu/hncjiaoxue_mulu';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/hncjiaoxue_mulu/hncjiaoxue_mulu.js';

define('pages/hncjiaoxue_mulu/hncjiaoxue_mulu.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/hncjiaoxue_mulu/hncjiaoxue_mulu"],{"3ffc":function(n,t,u){"use strict";u.r(t);var e=u("ce1d"),c=u.n(e);for(var a in e)"default"!==a&&function(n){u.d(t,n,function(){return e[n]})}(a);t["default"]=c.a},"4f05":function(n,t,u){"use strict";var e=u("f9d7"),c=u.n(e);c.a},"97b2":function(n,t,u){"use strict";var e,c=function(){var n=this,t=n.$createElement;n._self._c},a=[];u.d(t,"b",function(){return c}),u.d(t,"c",function(){return a}),u.d(t,"a",function(){return e})},a2e8:function(n,t,u){"use strict";(function(n){u("907b"),u("921b");e(u("66fd"));var t=e(u("aa55"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,u("6e42")["createPage"])},aa55:function(n,t,u){"use strict";u.r(t);var e=u("97b2"),c=u("3ffc");for(var a in c)"default"!==a&&function(n){u.d(t,n,function(){return c[n]})}(a);u("4f05");var f,r=u("f0c5"),o=Object(r["a"])(c["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],f);t["default"]=o.exports},ce1d:function(n,t,u){},f9d7:function(n,t,u){}},[["a2e8","common/runtime","common/vendor"]]]);
});
require('pages/hncjiaoxue_mulu/hncjiaoxue_mulu.js');
__wxRoute = 'pages/Copyright/Copyright';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/Copyright/Copyright.js';

define('pages/Copyright/Copyright.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Copyright/Copyright"],{"39bc":function(n,t,u){},"5e68":function(n,t,u){"use strict";u.r(t);var e=u("dc53"),c=u("df5e");for(var r in c)"default"!==r&&function(n){u.d(t,n,function(){return c[n]})}(r);u("7880");var a,o=u("f0c5"),f=Object(o["a"])(c["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],a);t["default"]=f.exports},6777:function(n,t,u){"use strict";(function(n){u("907b"),u("921b");e(u("66fd"));var t=e(u("5e68"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,u("6e42")["createPage"])},7880:function(n,t,u){"use strict";var e=u("39bc"),c=u.n(e);c.a},a606:function(n,t,u){},dc53:function(n,t,u){"use strict";var e,c=function(){var n=this,t=n.$createElement;n._self._c},r=[];u.d(t,"b",function(){return c}),u.d(t,"c",function(){return r}),u.d(t,"a",function(){return e})},df5e:function(n,t,u){"use strict";u.r(t);var e=u("a606"),c=u.n(e);for(var r in e)"default"!==r&&function(n){u.d(t,n,function(){return e[n]})}(r);t["default"]=c.a}},[["6777","common/runtime","common/vendor"]]]);
});
require('pages/Copyright/Copyright.js');
__wxRoute = 'pages/my/shengjihuiyuan/shengjihuiyuan';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/shengjihuiyuan/shengjihuiyuan.js';

define('pages/my/shengjihuiyuan/shengjihuiyuan.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/shengjihuiyuan/shengjihuiyuan"],{"12ea":function(n,e,t){},"3edb":function(n,e,t){"use strict";t.r(e);var a=t("b824"),o=t.n(a);for(var i in a)"default"!==i&&function(n){t.d(e,n,function(){return a[n]})}(i);e["default"]=o.a},"41de":function(n,e,t){"use strict";var a=t("12ea"),o=t.n(a);o.a},a654:function(n,e,t){"use strict";t.r(e);var a=t("a866"),o=t("3edb");for(var i in o)"default"!==i&&function(n){t.d(e,n,function(){return o[n]})}(i);t("41de");var r,u=t("f0c5"),c=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=c.exports},a866:function(n,e,t){"use strict";var a={"w-picker":()=>Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"46da"))},o=function(){var n=this,e=n.$createElement;n._self._c},i=[];t.d(e,"b",function(){return o}),t.d(e,"c",function(){return i}),t.d(e,"a",function(){return a})},b824:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"46da"))},o={components:{wPicker:a},data:function(){return{sex:["男","女"],genClass:["一年级","二年级","三年级","四年级","五年级","六年级"],uploadInfo:{gender:"",birthday:"",class:"",region:[],province:"",city:"",area:""}}},methods:{bindGradeChange:function(n){this.uploadInfo.gender=n.target.value},bindBirthdayChange:function(n){this.uploadInfo.birthday=n.target.value},bindClassChange:function(n){this.uploadInfo.class=n.target.value},toggleTab:function(){this.$refs.region.show()},bindCityChange:function(n){this.uploadInfo.region=n.checkArr},save:function(){}}};e.default=o},dab2:function(n,e,t){"use strict";(function(n){t("907b"),t("921b");a(t("66fd"));var e=a(t("a654"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])}},[["dab2","common/runtime","common/vendor"]]]);
});
require('pages/my/shengjihuiyuan/shengjihuiyuan.js');
__wxRoute = 'pages/growthDiary/growthDiary';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/growthDiary/growthDiary.js';

define('pages/growthDiary/growthDiary.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/growthDiary/growthDiary"],{"0958":function(n,t,u){},"0e3e":function(n,t,u){},"5aa8":function(n,t,u){"use strict";u.r(t);var e=u("0958"),r=u.n(e);for(var a in e)"default"!==a&&function(n){u.d(t,n,function(){return e[n]})}(a);t["default"]=r.a},"609c":function(n,t,u){"use strict";u.r(t);var e=u("b257"),r=u("5aa8");for(var a in r)"default"!==a&&function(n){u.d(t,n,function(){return r[n]})}(a);u("9c08");var c,o=u("f0c5"),f=Object(o["a"])(r["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],c);t["default"]=f.exports},"9c08":function(n,t,u){"use strict";var e=u("0e3e"),r=u.n(e);r.a},b257:function(n,t,u){"use strict";var e,r=function(){var n=this,t=n.$createElement;n._self._c},a=[];u.d(t,"b",function(){return r}),u.d(t,"c",function(){return a}),u.d(t,"a",function(){return e})},f07a:function(n,t,u){"use strict";(function(n){u("907b"),u("921b");e(u("66fd"));var t=e(u("609c"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,u("6e42")["createPage"])}},[["f07a","common/runtime","common/vendor"]]]);
});
require('pages/growthDiary/growthDiary.js');
__wxRoute = 'pages/hncjiaoxue_intro/hncjiaoxue_intro';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/hncjiaoxue_intro/hncjiaoxue_intro.js';

define('pages/hncjiaoxue_intro/hncjiaoxue_intro.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/hncjiaoxue_intro/hncjiaoxue_intro"],{"16c6":function(n,t,e){"use strict";e.r(t);var u=e("f385"),r=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=r.a},"598b":function(n,t,e){"use strict";(function(n){e("907b"),e("921b");u(e("66fd"));var t=u(e("b221"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"80f8":function(n,t,e){"use strict";var u,r=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"b",function(){return r}),e.d(t,"c",function(){return c}),e.d(t,"a",function(){return u})},b088:function(n,t,e){"use strict";var u=e("e5b2"),r=e.n(u);r.a},b221:function(n,t,e){"use strict";e.r(t);var u=e("80f8"),r=e("16c6");for(var c in r)"default"!==c&&function(n){e.d(t,n,function(){return r[n]})}(c);e("b088");var a,o=e("f0c5"),f=Object(o["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);t["default"]=f.exports},e5b2:function(n,t,e){},f385:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{pictureurl:"",image:""}}};t.default=u}},[["598b","common/runtime","common/vendor"]]]);
});
require('pages/hncjiaoxue_intro/hncjiaoxue_intro.js');
__wxRoute = 'pages/my/mydiscount/mydiscount';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/mydiscount/mydiscount.js';

define('pages/my/mydiscount/mydiscount.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/mydiscount/mydiscount"],{"0865":function(t,a,e){"use strict";var i,n=function(){var t=this,a=t.$createElement;t._self._c},c=[];e.d(a,"b",function(){return n}),e.d(a,"c",function(){return c}),e.d(a,"a",function(){return i})},1721:function(t,a,e){"use strict";e.r(a);var i=e("5006"),n=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(a,t,function(){return i[t]})}(c);a["default"]=n.a},"3e0d":function(t,a,e){"use strict";e.r(a);var i=e("0865"),n=e("1721");for(var c in n)"default"!==c&&function(t){e.d(a,t,function(){return n[t]})}(c);e("f689");var o,r=e("f0c5"),d=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);a["default"]=d.exports},5006:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{total:"0",mydiscount:[],page:1,page_size:10,count:1,prv_money:0,checkboxArr:[{name:"不使用优惠券",checked:!1}],checkValue:!1,way:"",p_id:"",ct_id:"",ar_id:"",score:"",quantity:"",price:""}},onLoad:function(t){var a=this;1==t.way&&this.setData({way:1,money:t.money,prv_money:t.prv_money,p_id:t.p_id,ct_id:t.ct_id,ar_id:t.ar_id,quantity:t.quantity,price:t.price,score:t.score}),a.page=1,a.getData()},methods:{getData:function(){var a=this;a.page,a.page_size,a.studylist;if(a.count<a.page)wx.showToast({title:"暂无更多信息"});else if(1==a.way){var e=a.mydiscount.length,i=a.mydiscount;i=[{cp_id:1,name:"绝对是飞机",checked:!1,couponcondition:50,effectstart:"2019-05-12",effectend:"2016-05-12",prices:10}];for(var n=0;n<e;n++)a.price>i[n].couponcondition?i[n].if_use=!0:i[n].if_use=!1;a.mydiscount=i}else{e=a.mydiscount.length;var c=a.mydiscount;c=[{cp_id:1,name:"绝对是飞机",checked:!1,couponcondition:50,effectstart:"2019-05-12",effectend:"2016-05-12",prices:10},{cp_id:2,name:"绝对是飞机",checked:!1,couponcondition:50,effectstart:"2019-05-12",effectend:"2016-05-12",prices:10}];for(n=0;n<e;n++)c[n].if_use=!0;a.mydiscount=c}t("log",a.mydiscount," at pages\\my\\mydiscount\\mydiscount.vue:183")},checkboxChange:function(a){var e=!a.currentTarget.dataset.value,i=a.currentTarget.dataset.index,n=this.data.checkboxArr;if(n[i].checked=!n[i].checked,this.setData({checkValue:e,checkboxArr:n}),1==this.data.checkValue){if(1!=this.data.way)return;var c=a.currentTarget.dataset.if_use,o="",r=0,d=parseFloat(this.data.money)+parseFloat(this.data.prv_money)-parseFloat(r),s=d.toFixed(2);if(s<=0&&(s=.01),0==c)return;t("log","333",this.data.score," at pages\\my\\mydiscount\\mydiscount.vue:215");var u={ct_id:this.data.ct_id,p_id:this.data.p_id,ar_id:this.data.ar_id,score:this.data.score,cp_id:0,quantity:this.data.quantity};util.ajax("/api/goods/OrderMoney",u,function(t){var a=getCurrentPages(),e=a[a.length-2];e.setData({discount:o,totals:t.data.amount.toFixed(2),integral:t.data.use_integral,prv_money:r}),wx.navigateBack({delta:1})})}},confirm:function(){t("log",this.data.checkValue," at pages\\my\\mydiscount\\mydiscount.vue:263")},click:function(t){if(1==this.data.way){var a=t.currentTarget.dataset.if_use,e=t.currentTarget.dataset.discount_id,i=t.currentTarget.dataset.money,n={ct_id:this.data.ct_id,p_id:this.data.p_id,ar_id:this.data.ar_id,score:this.data.score,cp_id:e,quantity:this.data.quantity},c=parseFloat(this.data.money)+parseFloat(this.data.prv_money)-parseFloat(i),o=c.toFixed(2);o<=0&&(o=.01),0!=a&&util.ajax("/api/goods/OrderMoney",n,function(t){var a=getCurrentPages(),n=a[a.length-2];n.setData({discount:e,totals:t.data.amount.toFixed(2),integral:t.data.use_integral,prv_money:i}),wx.navigateBack({delta:1})})}}}};a.default=e}).call(this,e("0de9")["default"])},bab7:function(t,a,e){"use strict";(function(t){e("907b"),e("921b");i(e("66fd"));var a=i(e("3e0d"));function i(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("6e42")["createPage"])},ebf1:function(t,a,e){},f689:function(t,a,e){"use strict";var i=e("ebf1"),n=e.n(i);n.a}},[["bab7","common/runtime","common/vendor"]]]);
});
require('pages/my/mydiscount/mydiscount.js');
__wxRoute = 'pages/my/signature/signature';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/signature/signature.js';

define('pages/my/signature/signature.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/signature/signature"],{"14ce":function(n,t,e){"use strict";e.r(t);var u=e("4036"),c=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=c.a},1527:function(n,t,e){},4036:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{name:"梁雨淇",time:"2000-01-01",userinfo:"",second_height:0,status:3,tips:"您还没有自己的个性签名...",createtime:"1235",avatar:"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTImGnI4CvBVQ7A5qE2HaRzGnmHKQRGn29HvGNPhZNytKehEuoViaLnUmECBX4KUicWoicsibR1lwchXIQ/132"}},onLoad:function(n){}};t.default=u},"8c83":function(n,t,e){"use strict";e.r(t);var u=e("cd10"),c=e("14ce");for(var a in c)"default"!==a&&function(n){e.d(t,n,function(){return c[n]})}(a);e("9132");var r,i=e("f0c5"),o=Object(i["a"])(c["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);t["default"]=o.exports},9132:function(n,t,e){"use strict";var u=e("1527"),c=e.n(u);c.a},cd10:function(n,t,e){"use strict";var u,c=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"b",function(){return c}),e.d(t,"c",function(){return a}),e.d(t,"a",function(){return u})},d7ff:function(n,t,e){"use strict";(function(n){e("907b"),e("921b");u(e("66fd"));var t=u(e("8c83"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])}},[["d7ff","common/runtime","common/vendor"]]]);
});
require('pages/my/signature/signature.js');
__wxRoute = 'pages/my/videoGift/videoGift';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/videoGift/videoGift.js';

define('pages/my/videoGift/videoGift.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/videoGift/videoGift"],{"0edc":function(e,t,n){"use strict";(function(e){n("907b"),n("921b");a(n("66fd"));var t=a(n("7701"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"3c86":function(e,t,n){"use strict";var a=n("544a"),i=n.n(a);i.a},"544a":function(e,t,n){},7701:function(e,t,n){"use strict";n.r(t);var a=n("a352"),i=n("abd4");for(var c in i)"default"!==c&&function(e){n.d(t,e,function(){return i[e]})}(c);n("3c86");var u,o=n("f0c5"),r=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);t["default"]=r.exports},"95e9":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{dataList:[{cl_id:10,content:"1.同步最新部编版语文课程↵2.线上教学视频实现把老师请回家↵3.小学生的随身书法老师↵4. 视频动画生动有趣，内容丰富↵5.孩子减负，家长轻松",createtime:1560233365,deletetime:null,icon:"https://pic.kaifadanao.cn/20190826/ab9de66bf5b00697d378055e52e01127.jpg",is_effective:1,is_pay:null,md_id:7,money:"0.00",sort:0,title:"一年级上册",updatetime:1567740541},{cl_id:10,content:"1.同步最新部编版语文课程↵2.线上教学视频实现把老师请回家↵3.小学生的随身书法老师↵4. 视频动画生动有趣，内容丰富↵5.孩子减负，家长轻松",createtime:1560233365,deletetime:null,icon:"https://pic.kaifadanao.cn/20190826/ab9de66bf5b00697d378055e52e01127.jpg",is_effective:1,is_pay:null,md_id:7,money:"0.00",sort:0,title:"一年级上册",updatetime:1567740541}]}}};t.default=a},a352:function(e,t,n){"use strict";var a,i=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"b",function(){return i}),n.d(t,"c",function(){return c}),n.d(t,"a",function(){return a})},abd4:function(e,t,n){"use strict";n.r(t);var a=n("95e9"),i=n.n(a);for(var c in a)"default"!==c&&function(e){n.d(t,e,function(){return a[e]})}(c);t["default"]=i.a}},[["0edc","common/runtime","common/vendor"]]]);
});
require('pages/my/videoGift/videoGift.js');
__wxRoute = 'pages/my/activeCode/activeCode';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/activeCode/activeCode.js';

define('pages/my/activeCode/activeCode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/activeCode/activeCode"],{"090f":function(t,n,e){"use strict";e.r(n);var a=e("da76"),u=e("d87d");for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);e("b8a8");var o,i=e("f0c5"),r=Object(i["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);n["default"]=r.exports},"53e6":function(t,n,e){},ab7f:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{count:1,contents:"",page:1,page_size:10,cl_id:"",dataList:[{status:0,code:"ftewretywrwe"}]}},onLoad:function(t){},methods:{getData:function(){var t=this;t.dataList;t.count<t.page?wx.showToast({title:"暂无更多信息",icon:"none"}):util.ajax("/api/videopacks/codelist",{cl_id:t.cl_id},function(n){t.dataList,n.list})}}};n.default=a},ac44:function(t,n,e){"use strict";(function(t){e("907b"),e("921b");a(e("66fd"));var n=a(e("090f"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},b8a8:function(t,n,e){"use strict";var a=e("53e6"),u=e.n(a);u.a},d87d:function(t,n,e){"use strict";e.r(n);var a=e("ab7f"),u=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);n["default"]=u.a},da76:function(t,n,e){"use strict";var a,u=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",function(){return u}),e.d(n,"c",function(){return c}),e.d(n,"a",function(){return a})}},[["ac44","common/runtime","common/vendor"]]]);
});
require('pages/my/activeCode/activeCode.js');
__wxRoute = 'pages/message/message';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/message/message.js';

define('pages/message/message.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/message/message"],{1025:function(t,n,e){"use strict";e.r(n);var a=e("4b39"),u=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);n["default"]=u.a},"37b4":function(t,n,e){},"3eac":function(t,n,e){"use strict";var a,u=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",function(){return u}),e.d(n,"c",function(){return c}),e.d(n,"a",function(){return a})},"4b39":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{list:[{img:"../../static/reg/log.png",name:"客服",date:"02-02 08:32:32",abstract:"你家宝贝好棒！我看了他的写作，书法尺的作用真你家宝贝好棒！我看了他的写作，书法尺的作用真"}]}}};n.default=a},5027:function(t,n,e){"use strict";var a=e("37b4"),u=e.n(a);u.a},a393:function(t,n,e){"use strict";(function(t){e("907b"),e("921b");a(e("66fd"));var n=a(e("c734"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},c734:function(t,n,e){"use strict";e.r(n);var a=e("3eac"),u=e("1025");for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);e("5027");var r,o=e("f0c5"),i=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,"1a522644",null,!1,a["a"],r);n["default"]=i.exports}},[["a393","common/runtime","common/vendor"]]]);
});
require('pages/message/message.js');
__wxRoute = 'pages/my/follow/follow';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/follow/follow.js';

define('pages/my/follow/follow.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/follow/follow"],{"662e":function(t,e,n){"use strict";n.r(e);var u=n("994d"),r=n.n(u);for(var f in u)"default"!==f&&function(t){n.d(e,t,function(){return u[t]})}(f);e["default"]=r.a},"7e3f":function(t,e,n){},"994d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{search_txt:""}},methods:{}};e.default=u},a890:function(t,e,n){"use strict";n.r(e);var u=n("f16d"),r=n("662e");for(var f in r)"default"!==f&&function(t){n.d(e,t,function(){return r[t]})}(f);n("ee2f");var a,c=n("f0c5"),o=Object(c["a"])(r["default"],u["b"],u["c"],!1,null,"600ea062",null,!1,u["a"],a);e["default"]=o.exports},b06c:function(t,e,n){"use strict";(function(t){n("907b"),n("921b");u(n("66fd"));var e=u(n("a890"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},ee2f:function(t,e,n){"use strict";var u=n("7e3f"),r=n.n(u);r.a},f16d:function(t,e,n){"use strict";var u,r=function(){var t=this,e=t.$createElement;t._self._c},f=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return f}),n.d(e,"a",function(){return u})}},[["b06c","common/runtime","common/vendor"]]]);
});
require('pages/my/follow/follow.js');
__wxRoute = 'pages/my/fans/fans';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/fans/fans.js';

define('pages/my/fans/fans.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/fans/fans"],{"0c1c":function(n,t,e){"use strict";e.r(t);var c=e("b45b"),u=e.n(c);for(var f in c)"default"!==f&&function(n){e.d(t,n,function(){return c[n]})}(f);t["default"]=u.a},9116:function(n,t,e){"use strict";e.r(t);var c=e("ccfc"),u=e("0c1c");for(var f in u)"default"!==f&&function(n){e.d(t,n,function(){return u[n]})}(f);e("b817");var r,a=e("f0c5"),o=Object(a["a"])(u["default"],c["b"],c["c"],!1,null,"16b55a07",null,!1,c["a"],r);t["default"]=o.exports},"92fd":function(n,t,e){},b45b:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c={data:function(){return{}}};t.default=c},b817:function(n,t,e){"use strict";var c=e("92fd"),u=e.n(c);u.a},ccfc:function(n,t,e){"use strict";var c,u=function(){var n=this,t=n.$createElement;n._self._c},f=[];e.d(t,"b",function(){return u}),e.d(t,"c",function(){return f}),e.d(t,"a",function(){return c})},f11e:function(n,t,e){"use strict";(function(n){e("907b"),e("921b");c(e("66fd"));var t=c(e("9116"));function c(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])}},[["f11e","common/runtime","common/vendor"]]]);
});
require('pages/my/fans/fans.js');
__wxRoute = 'pages/userInfo/userInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/userInfo/userInfo.js';

define('pages/userInfo/userInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userInfo/userInfo"],{"145f":function(n,t,e){"use strict";var u=e("bad4"),r=e.n(u);r.a},"28b2":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}}};t.default=u},"2c58":function(n,t,e){"use strict";e.r(t);var u=e("cd37"),r=e("a31b");for(var a in r)"default"!==a&&function(n){e.d(t,n,function(){return r[n]})}(a);e("145f");var c,f=e("f0c5"),o=Object(f["a"])(r["default"],u["b"],u["c"],!1,null,"55f531a4",null,!1,u["a"],c);t["default"]=o.exports},a31b:function(n,t,e){"use strict";e.r(t);var u=e("28b2"),r=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=r.a},b253:function(n,t,e){"use strict";(function(n){e("907b"),e("921b");u(e("66fd"));var t=u(e("2c58"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},bad4:function(n,t,e){},cd37:function(n,t,e){"use strict";var u,r=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"b",function(){return r}),e.d(t,"c",function(){return a}),e.d(t,"a",function(){return u})}},[["b253","common/runtime","common/vendor"]]]);
});
require('pages/userInfo/userInfo.js');
__wxRoute = 'pages/feedback/feedback';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/feedback/feedback.js';

define('pages/feedback/feedback.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/feedback/feedback"],{"29c0":function(e,n,t){"use strict";t.r(n);var a=t("e11d"),u=t.n(a);for(var c in a)"default"!==c&&function(e){t.d(n,e,function(){return a[e]})}(c);n["default"]=u.a},"7a2d":function(e,n,t){"use strict";(function(e){t("907b"),t("921b");a(t("66fd"));var n=a(t("baff"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},"8ffd":function(e,n,t){},baff:function(e,n,t){"use strict";t.r(n);var a=t("fda5"),u=t("29c0");for(var c in u)"default"!==c&&function(e){t.d(n,e,function(){return u[e]})}(c);t("e234");var f,i=t("f0c5"),r=Object(i["a"])(u["default"],a["b"],a["c"],!1,null,"bfe3c6ea",null,!1,a["a"],f);n["default"]=r.exports},e11d:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{typeList:[{id:1,name:"产品质量"},{id:2,name:"物流速度"},{id:3,name:"售后服务"},{id:4,name:"购买流程"},{id:5,name:"优惠力度"},{id:6,name:"其他"}],activeIndex:null,content:"",qq:"",mobile:""}},methods:{selectType:function(e){this.activeIndex=e}}};n.default=a},e234:function(e,n,t){"use strict";var a=t("8ffd"),u=t.n(a);u.a},fda5:function(e,n,t){"use strict";var a,u=function(){var e=this,n=e.$createElement;e._self._c},c=[];t.d(n,"b",function(){return u}),t.d(n,"c",function(){return c}),t.d(n,"a",function(){return a})}},[["7a2d","common/runtime","common/vendor"]]]);
});
require('pages/feedback/feedback.js');
__wxRoute = 'pages/about/about';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/about/about.js';

define('pages/about/about.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/about/about"],{"01a7":function(t,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}}};n.default=e},"4c15":function(t,n,u){"use strict";var e,a=function(){var t=this,n=t.$createElement;t._self._c},c=[];u.d(n,"b",function(){return a}),u.d(n,"c",function(){return c}),u.d(n,"a",function(){return e})},8206:function(t,n,u){"use strict";var e=u("d91a"),a=u.n(e);a.a},bcd4:function(t,n,u){"use strict";(function(t){u("907b"),u("921b");e(u("66fd"));var n=e(u("f710"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,u("6e42")["createPage"])},d043:function(t,n,u){"use strict";u.r(n);var e=u("01a7"),a=u.n(e);for(var c in e)"default"!==c&&function(t){u.d(n,t,function(){return e[t]})}(c);n["default"]=a.a},d91a:function(t,n,u){},f710:function(t,n,u){"use strict";u.r(n);var e=u("4c15"),a=u("d043");for(var c in a)"default"!==c&&function(t){u.d(n,t,function(){return a[t]})}(c);u("8206");var r,o=u("f0c5"),f=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);n["default"]=f.exports}},[["bcd4","common/runtime","common/vendor"]]]);
});
require('pages/about/about.js');
__wxRoute = 'pages/assemble/assemble';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/assemble/assemble.js';

define('pages/assemble/assemble.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/assemble/assemble"],{"2cee":function(e,n,t){"use strict";t.r(n);var u=t("e0c1"),c=t("d51d");for(var r in c)"default"!==r&&function(e){t.d(n,e,function(){return c[e]})}(r);t("4bfb");var a,f=t("f0c5"),o=Object(f["a"])(c["default"],u["b"],u["c"],!1,null,"32d40f20",null,!1,u["a"],a);n["default"]=o.exports},3078:function(e,n,t){"use strict";(function(e){t("907b"),t("921b");u(t("66fd"));var n=u(t("2cee"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},"4bfb":function(e,n,t){"use strict";var u=t("8ded"),c=t.n(u);c.a},5711:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{}}};n.default=u},"8ded":function(e,n,t){},d51d:function(e,n,t){"use strict";t.r(n);var u=t("5711"),c=t.n(u);for(var r in u)"default"!==r&&function(e){t.d(n,e,function(){return u[e]})}(r);n["default"]=c.a},e0c1:function(e,n,t){"use strict";var u,c=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"b",function(){return c}),t.d(n,"c",function(){return r}),t.d(n,"a",function(){return u})}},[["3078","common/runtime","common/vendor"]]]);
});
require('pages/assemble/assemble.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

