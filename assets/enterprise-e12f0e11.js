import{_ as e,r as a,a as l,u as t,o as s,w as n,c as i,d as o,e as r,f as c,g as d,h as u,F as v,i as p,j as f,k as m,l as h,E as y,m as g,n as w,p as k,q as x,s as b,t as _,v as C,x as z,y as I,z as T,A as F,B as L,C as M,D as V,G as H,H as A,I as S,J as j,K as D,L as U}from"./index-63ac60c9.js";import{v as P}from"./el-loading-2f9cb83f.js";import{a as B,E as O,b as N,F as E,_ as J,c as K,d as R}from"./api-481ed534.js";const q=e=>(F("data-v-178d5b52"),e=e(),L(),e),G={class:"knowledge flex flex-col"},Y={class:"top flex justify-end y-center mb-35"},$={class:"left"},Q={class:"right flex"},W=q((()=>c("div",{class:"finger flex y-center"},[c("img",{class:"w-14 mr-10",src:J,alt:"",srcset:""}),z(" 新建文档 ")],-1))),X=q((()=>c("img",{class:"w-14 mr-10",src:M,alt:"",srcset:""},null,-1))),Z=["onClick"],ee=["onClick"],ae=["onClick"],le={key:1,class:"detail p-50"},te=["innerHTML"],se={key:2,class:"searchList flex"},ne={class:"left"},ie={class:"w-500 ellipsis txt-bold size-20 mb-10"},oe=["onClick"],re=["innerHTML"],ce={key:0,class:"mt-10"},de=["innerHTML"],ue={key:1,class:"full-width h-500 flex-center size-20"},ve={key:0,class:"right"},pe=q((()=>c("div",{class:"txt-bold size-20 flex y-center"},[c("img",{class:"w-23 mr-10",src:K,alt:"",srcset:""}),z(" AI搜索 ")],-1))),fe={class:"content p-y-20"},me={class:"mb-20"},he=q((()=>c("h5",{class:"txt-bold p-x-25 size-16 mb-10"},"标题",-1))),ye=["innerHTML"],ge={key:1,class:"full-width"},we=q((()=>c("h5",{class:"txt-bold p-x-25 size-16 m-y-10"},"来源",-1))),ke=["onClick"],xe={key:1,class:"full-width"},be={class:"dialog-footer"},_e=e({__name:"enterprise",setup(e){const F=a([{name:"企业知识库",path:0}]),L=a("table"),M=l({file:"",folderId:0});l({pageNo:1,pageSize:10});const J=a(0),K=a("详情");async function q(e){if(e.contentType)return _e(e.id);F.value.push({name:e.name,path:e.id}),M.folderId=e.id,Ie()}const _e=async e=>{F.value.push({name:"详情",path:e}),L.value="detail",null==je||je.close(),Ye.value=!0;const a=new FormData;a.append("file",""),a.append("fileId",e),a.append("searchContent",Me.value);const{data:l}=await B.viewFile(a,"company").catch((e=>{Ye.value=!1}));K.value=l,Ye.value=!1},Ce=l({loading:!1,list:[]}),ze=[{prop:"name",label:"名称",showOverflowTooltip:!0,type:"icon",width:"500"},{prop:"createUser",label:"所有者"},{prop:"createTime",label:"创建日期"},{label:"操作",type:"operation",align:"center"}],Ie=async()=>{Ce.loading=!0;const e=new FormData;e.append("file",M.file),e.append("folderId",M.folderId);const a=await B.getFiles(e,"company").catch((e=>{Ce.loading=!1}));Ce.loading=!1,Ce.list=a.data.files?a.data.folders.concat(a.data.files):a.data.folders};function Te(e){Ce.size=e,Ie()}function Fe(e){Ce.start=e,Ie()}Ie();const Le=a(""),Me=a(""),Ve=a(""),He=a([]),Ae=a(""),Se=a(!1);let je=null;const De=t();s((()=>{null==je||je.close(),je=null})),n((()=>De.state.searchOperation),(e=>{Me.value=De.state.searchVal,Pe("search")}));const Ue=a(""),Pe=async(e="search",a=!0)=>{if(!Me.value)return y.warning("请输入搜索的内容！");if(-1===F.value.findIndex((e=>"搜索列表"===e.name))&&F.value.push({name:"搜索列表",path:"search"}),L.value=e,!a)return;Ye.value=!0,Ue.value=e;const l=new FormData;Le.value=Me.value,l.append("file",""),l.append("searchContent",Me.value),l.append("folderId",M.folderId),"search"!==e&&(Ve.value="",Oe(l));const{data:t}=await B.searchFiles(l,"company").catch((e=>{Ye.value=!1}));J.value=null==t?void 0:t.total,He.value=null==t?void 0:t.searchResults,Ye.value=!1},Be=a([]);const Oe=async e=>{Se.value=!0,async function(e,a){const l=await fetch(e,{method:"POST",headers:{Authorization:V()||"Basic dnNvYzp2c29jMjAyMg"},body:a});if(!l.ok)return sendMsgLoad.value=!1,void(chatList.value[chatList.value.length-1].content="发送失败，请重试！");const t=l.body.getReader();for(;;){const{value:e,done:a}=await t.read();if(a){Se.value=!1;break}const l=new TextDecoder("utf-8").decode(e);let s=/^event:(.+)\nid:(.+)\ndata:(.+)/gm.exec(l);if(!s)return Se.value=!1;const[,n,i,o]=s;if("add"===n){const e=JSON.parse(o).content;Ve.value=e}else"error"===n&&(Se.value=!1)}}(`${H}/file/company/smartFileSse`,e)},Ne=a(!1),Ee=a("file"),Je=a(0),Ke=(e,a,l)=>{if(!a)return Ne.value=!0,Ee.value=l,void("file"!==l&&(Je.value=e.id,qe()));const t=new FormData;t.append("name",e.name),t.append("fileId",e.id),A.confirm("您确定要删除改文件吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{await B.removeFile(t,"company"),y({type:"success",message:"删除成功！"}),Ie()}))},Re=a([]),qe=async()=>{const e=await B.getAssistants({});Re.value=e.data},Ge=()=>{Ae.value="",Ne.value=!1},Ye=a(!1),$e=async()=>{if("file"===Ee.value){if(!Ae.value)return y.warning("请输入文件夹名字");Ye.value=!0,await(async()=>{const e=new FormData;e.append("name",Ae.value),e.append("parentId",M.folderId),await B.addFolder(e,"company").catch((e=>{Ye.value=!1,Ge()}))})(),Ie()}else{if(!Ae.value)return y.warning("请选择知识助理");Ye.value=!0,await(async()=>{let e={assistantId:Ae.value,fileId:Je.value};await B.relateToAssistant(e).catch((e=>{Ye.value=!1,Ge()}))})()}Ye.value=!1,Ge()};return(e,a)=>{const l=R,t=O,s=g,n=i("plus"),y=S,V=w,H=i("search"),A=k,B=i("MoreFilled"),J=x,De=b,Oe=_,Je=U,qe=j,Qe=N,We=P;return o(),r("div",G,[c("div",Y,[c("div",$,[d(t,{separator:">"},{default:u((()=>[(o(!0),r(v,null,C(F.value,((e,a)=>(o(),p(l,{key:e.path,onClick:l=>((e,a)=>{a!==F.value.length-1&&(F.value=F.value.slice(0,a+1),null==je||je.close(),"搜索列表"!==e.name?(L.value="table",Me.value="",M.folderId=e.path,Ie()):Pe(Ue.value,!1))})(e,a)},{default:u((()=>[c("span",{class:D([a!==F.value.length-1?"finger":"txt-bold"])},T(e.name),3)])),_:2},1032,["onClick"])))),128))])),_:1})]),c("div",Q,["detail"===L.value?(o(),r(v,{key:0},[d(s,{type:"primary",class:"w-80",size:"large"},{default:u((()=>[z("编辑")])),_:1}),d(s,{type:"primary",class:"w-80",size:"large",plain:""},{default:u((()=>[z("保存")])),_:1})],64)):(o(),r(v,{key:1},["table"===L.value?(o(),p(V,{key:0,placement:"bottom-start","show-arrow":!1,trigger:"hover"},{reference:u((()=>[d(s,{class:"w-150",size:"large",plain:""},{default:u((()=>[d(y,{class:"mr-8"},{default:u((()=>[d(n)])),_:1}),z(" 新建文档 ")])),_:1})])),default:u((()=>[d(E,{uploadParams:{folderId:M.folderId},onFileUploadFinish:Ie,fileSize:!1,"file-type":!1,uploadPath:"/file/company/upload",isShowTip:!1},{button:u((()=>[W])),_:1},8,["uploadParams"]),c("div",{onClick:a[0]||(a[0]=e=>Ke("",0,"file")),class:"finger flex y-center mt-10"},[X,z(" 新建文件夹 ")])])),_:1})):f("",!0),d(A,{placeholder:"请输入内容",onKeyup:a[1]||(a[1]=m((e=>Pe("search")),["enter"])),clearable:"",size:"large",class:"m-x-10 w-180",modelValue:Me.value,"onUpdate:modelValue":a[2]||(a[2]=e=>Me.value=e)},{prefix:u((()=>[d(y,{class:"el-input__icon"},{default:u((()=>[d(H)])),_:1})])),_:1},8,["modelValue"]),d(s,{type:"primary",size:"large",onClick:a[3]||(a[3]=e=>Pe("search"))},{default:u((()=>[z("搜索")])),_:1}),d(s,{type:"primary",loading:Se.value,size:"large",onClick:a[4]||(a[4]=e=>Pe("searchAi")),plain:""},{default:u((()=>[z("AI搜索")])),_:1},8,["loading"])],64))])]),"table"===L.value?h((o(),p(J,{key:0,tableMaxHeight:"800px",pageShow:!1,onHandleClick:q,"table-mode":ze,"record-data":Ce.list,"operation-width":"135px","record-total":Ce.total,"record-size":Ce.size,"record-start":Ce.start,onPageChange:Fe,onSizeChange:Te},{operation:u((({row:e,index:l})=>[d(V,{placement:"bottom-start",class:"w-100","show-arrow":!1,trigger:"hover"},{reference:u((()=>[d(y,{class:"finger",onClick:a[5]||(a[5]=I((()=>{}),["stop"]))},{default:u((()=>[d(B)])),_:1})])),default:u((()=>[e.contentType?(o(),r("div",{key:0,onClick:a=>Ke(e,0,l),class:"finger flex y-center mb-10"}," 添加到知识助理 ",8,Z)):f("",!0),c("div",{onClick:a=>Ke(e,0,"file"),class:"finger flex y-center mb-10"}," 重命名 ",8,ee),c("div",{onClick:a=>Ke(e,1),class:"finger flex y-center"}," 删除 ",8,ae)])),_:2},1024)])),_:1},8,["record-data","record-total","record-size","record-start"])),[[We,Ce.loading]]):"detail"===L.value?h((o(),r("div",le,[d(De,{ref:"scrollbar",height:"700px",always:""},{default:u((()=>[c("p",{style:{"white-space":"pre-wrap"},innerHTML:K.value},null,8,te)])),_:1},512)])),[[We,Ye.value]]):(o(),r("div",se,[h((o(),r("div",ne,[d(Oe,{class:"item",effect:"dark",content:Le.value,placement:"bottom-end"},{default:u((()=>[c("div",ie," 所有与"+T(Le.value)+"相关的结果 ",1)])),_:1},8,["content"]),d(De,{class:"list",ref:"scrollbar",height:"700px",always:""},{default:u((()=>[He.value.length?(o(!0),r(v,{key:0},C(He.value,(e=>{var a;return o(),r("div",{class:"row finger",onClick:a=>_e(e._id),key:e._id},[c("div",{class:"tit",innerHTML:e.title},null,8,re),(null==(a=e.content)?void 0:a.length)?(o(),r("div",ce,[(o(!0),r(v,null,C(e.content.slice(0,2),(e=>(o(),r("div",{key:e},[c("p",{innerHTML:e},null,8,de)])))),128))])):f("",!0)],8,oe)})),128)):(o(),r("div",ue," 暂无数据 "))])),_:1},512)])),[[We,Ye.value]]),"searchAi"===L.value?(o(),r("div",ve,[pe,c("div",fe,[c("div",me,[he,d(De,{class:"p-x-25","max-height":"450px",always:""},{default:u((()=>[Ve.value?(o(),r("div",{key:0,style:{"white-space":"pre-wrap"},innerHTML:Ve.value},null,8,ye)):(o(),r("div",ge,"正在思考中..."))])),_:1})]),c("div",null,[we,d(De,{class:"p-x-25","max-height":"150px",always:""},{default:u((()=>{var e;return[(null==(e=Be.value)?void 0:e.length)?(o(!0),r(v,{key:0},C(Be.value,((e,a)=>(o(),r("div",{onClick:a=>_e(e.doc_id),style:{"text-decoration-line":"underline",color:"rgba(96, 98, 102, 1)"},class:"mb-10 flex y-center finger",key:e.doc_id},T(a+1)+"."+T(e.doc_title),9,ke)))),128)):(o(),r("div",xe,"暂无数据"))]})),_:1})])])])):f("",!0)])),d(Qe,{modelValue:Ne.value,"onUpdate:modelValue":a[8]||(a[8]=e=>Ne.value=e),title:""+("file"===Ee.value?"名称":"加入知识助理"),width:"400px"},{footer:u((()=>[c("span",be,[d(s,{onClick:Ge},{default:u((()=>[z("取消")])),_:1}),d(s,{loading:Ye.value,type:"primary",onClick:$e},{default:u((()=>[z(" 提交 ")])),_:1},8,["loading"])])])),default:u((()=>["file"===Ee.value?(o(),p(A,{key:0,size:"large",placeholder:"请输入文件夹名字",modelValue:Ae.value,"onUpdate:modelValue":a[6]||(a[6]=e=>Ae.value=e)},null,8,["modelValue"])):(o(),p(qe,{key:1,size:"large",placeholder:"请选择知识助理",modelValue:Ae.value,"onUpdate:modelValue":a[7]||(a[7]=e=>Ae.value=e)},{default:u((()=>[(o(!0),r(v,null,C(Re.value,(e=>(o(),p(Je,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]))])),_:1},8,["modelValue","title"])])}}},[["__scopeId","data-v-178d5b52"]]);export{_e as default};