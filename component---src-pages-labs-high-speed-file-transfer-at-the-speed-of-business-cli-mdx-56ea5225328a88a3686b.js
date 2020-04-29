(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{a2O5:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return p})),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return r}));a("E5k/"),a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("q1tI");var n=a("7ljp"),i=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p=function(){return Object(n.b)("span",null,"High Speed File Transfer at the Speed of Business")},l={},s={Title:p,_frontmatter:l},c=i.a;function r(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(c,o({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{style:{color:"red"}},"DRAFT"),Object(n.b)("h2",null,"Aspera ascp CLI"),Object(n.b)("p",null,"Aspera began as a command line tool called ",Object(n.b)("inlineCode",{parentName:"p"},"ascp"),". In this first section we will start by\nusing the ",Object(n.b)("inlineCode",{parentName:"p"},"ascp")," CLI to download a file from the Aspera hosted Demo Server."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"931px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.45833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAC9UlEQVQoz41TS2gTURSdmFqlpVpbdSFUV+JKhVaqWxVcuBHcFPwhKKIbRUFUKKgLQRe6cSOCtQpV6wdqK/UXa6UVtU1NGpNMmqRNJr/JZDKTmen83sxkrm8mtSgoeGC495137+Hdwx2CWEBvby+hKqrXydPp9C1V0UGWVVNRZBvAtnVdt20DmYAhiOKgU4dTD8uyxB/ouRsjXjyNeJ71f/cgBHUOx3NCj2QUoMRTOl2sWI8HYhbYYCXmEfLzAJoijy0ILqlUKh5BEAiO4wi/30/8FYqs9uE2MGzJeRDc6w+7MVA24VUKAKnyFPEvtK3pWXrkwKOW40f7V13p/tTqcNls4RhDsyNsiXspCPyQJBQHRVEY4ll2kGNoX5njLjl1vpGJxodPPjSQ4VCD73Ffw4GuruXE5LdSd3ymXJ6JsfG5WYGZ+KKcIP4DlYpwHsCisb8xHRkJbG6CLZdJIkeh+7IMcON2xHDGIsPa1Zo/dB0+EsEgNH39prfg2BwI2stMqHhr90YPjx35PFl07ZBnSDcSVAo9MBDA4OukS8Si+rVaQ8obCJjN09N2K6a9JAkNfn+11TSVpbX76sNCCWDgfdrto18P1QSnJqUzuawWpnPKGJVWv/reSvt/H+3i5VT99Zv31965M9kUCUP9L57jhIM8Xxovs4VhVdNGRU0fx/EjsbNTWbttk7X62GFpwyff/O6P7+Q9o77czqKldWQloSOVmG0XClbnXHJ285uRCx6KymxiGHo73sYtDMNszRdK7eOjHxoXX3D2JGrDA6wMB/VDgdA8hCPzoGE3JTyjmsmBASbkpAComizGyMQO0zSizmg/SBYMw6q6iy6IJxf20kucPuEKNiVj5vFQBMGXCdH1QsSCWjbv5kU1DDpSzWR8ble1amUcbngkA5JcrdWK0rlFwVNH1XXrV0Dz2+HKXjJKx4KBTJRKsz84UQilKCqUoTLT6blcFMexZDKxUZbl5wihOEJqsMQwwXw+P4u/fe4fxvNLfgIDXmm/we/BGwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Aspera Native Client",title:"Aspera Native Client",src:"/static/d0a97c7f8078b3b4a622da03bccc393b/dcf77/native-client.png",srcSet:["/static/d0a97c7f8078b3b4a622da03bccc393b/7fc1e/native-client.png 288w","/static/d0a97c7f8078b3b4a622da03bccc393b/a5df1/native-client.png 576w","/static/d0a97c7f8078b3b4a622da03bccc393b/dcf77/native-client.png 931w"],sizes:"(max-width: 931px) 100vw, 931px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("h2",null,"Using the ascp CLI"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Navigate back to your Terminal window and ensure you are in the ",Object(n.b)("inlineCode",{parentName:"p"},"/home/ibmuser"),"\ndirectory by running ",Object(n.b)("inlineCode",{parentName:"p"},"pwd"),".")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Execute the following command to download the file named ‘100MB’ from the Aspera Demo\nServer:"),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"ascp -O 33001 -P 33001 -l 100M aspera@demo.asperasoft.com:/aspera-test-dir-large/100MB /home/ibmuser")),Object(n.b)("p",{parentName:"li"},"When prompted for the password enter: ",Object(n.b)("inlineCode",{parentName:"p"},"demoaspera")),Object(n.b)("p",{parentName:"li"},"Note: ",Object(n.b)("inlineCode",{parentName:"p"},"-O")," sets the UDP port, ",Object(n.b)("inlineCode",{parentName:"p"},"-P")," sets the SSH port & ",Object(n.b)("inlineCode",{parentName:"p"},"-l")," sets the Target Rate"),Object(n.b)("span",o({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"5.208333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAABCAYAAADeko4lAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAPklEQVQI102KOQ6AMBDE+P8zgToQtNqrWIdAE8kjT+FtP07addP7g4igqrg74UHEXH42M/L9VQWTxX8XZCYDPsdOBfvGdwAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"CLI Download Output",title:"CLI Download Output",src:"/static/733de75c32d4792206ad9ee801307c09/3cbba/cli-download.png",srcSet:["/static/733de75c32d4792206ad9ee801307c09/7fc1e/cli-download.png 288w","/static/733de75c32d4792206ad9ee801307c09/a5df1/cli-download.png 576w","/static/733de75c32d4792206ad9ee801307c09/3cbba/cli-download.png 1152w","/static/733de75c32d4792206ad9ee801307c09/0b124/cli-download.png 1728w","/static/733de75c32d4792206ad9ee801307c09/4ea69/cli-download.png 2304w","/static/733de75c32d4792206ad9ee801307c09/261ab/cli-download.png 3726w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("p",null,"The file named ",Object(n.b)("inlineCode",{parentName:"p"},"100MB")," has now been download to the ",Object(n.b)("inlineCode",{parentName:"p"},"/home/ibmuser")," directory. You can\n",Object(n.b)("inlineCode",{parentName:"p"},"ls -lh")," to see the new file."),Object(n.b)("h2",null,"Scripting the ascp CLI"),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"ascp")," CLI is a flexible option for initiating FASP transfers. The CLI can easily be\nused in new or existing scripts to replace tools like; scp, ftp, sftp, rsync and other\nsimilar tcp based protocols to improve transfer performance and management capabilities.\nLets look at a quick example of how easy it is to use ",Object(n.b)("inlineCode",{parentName:"p"},"ascp")," in a script:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Export the password as an environment variable so the script can run without user\ninteraction:"),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"export ASPERA_SCP_PASS=demoaspera"),"."),Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Note:")," This is not compulsory however if you do not export the password you will be\nprompted for the password each time the script is executed. You also have the option of\nconfiguring SSH Key based authentication.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Execute the ",Object(n.b)("inlineCode",{parentName:"p"},"download100MB.sh")," script in the ",Object(n.b)("inlineCode",{parentName:"p"},"/home/ibmuser")," directory by running:"),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"/home/ibmuser/download100MB.sh")),Object(n.b)("span",o({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"12.152777777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAb0lEQVQI112MSxKDIBQEvf8R4xIWUQSeMWL4dpDsMlW9ma6Z6THPKK2xzuE63ns+MeJFsNZitm301jpWY3guC0pppPtSyqDVRms/pluEEIj9JMZESomc85D/uc6L8D45Xge77IgXzGpIfVdLpeTCF2A9mjkwgc9NAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"CLI Download Script",title:"CLI Download Script",src:"/static/3f6c1eef3c82b018216d9fb8b8a7f5f0/3cbba/cli-download-script.png",srcSet:["/static/3f6c1eef3c82b018216d9fb8b8a7f5f0/7fc1e/cli-download-script.png 288w","/static/3f6c1eef3c82b018216d9fb8b8a7f5f0/a5df1/cli-download-script.png 576w","/static/3f6c1eef3c82b018216d9fb8b8a7f5f0/3cbba/cli-download-script.png 1152w","/static/3f6c1eef3c82b018216d9fb8b8a7f5f0/c63e3/cli-download-script.png 1290w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",{parentName:"li"},"You will notice this time the file gets ",Object(n.b)("inlineCode",{parentName:"p"},"skipped"),". If you look at the command being run\nin the script (",Object(n.b)("inlineCode",{parentName:"p"},"cat /home/ibmuser/download100MB.sh"),") there is an additional option\nadded ",Object(n.b)("inlineCode",{parentName:"p"},"-k 1")," which tells ascp to only re-download/resume a file download if file\nattributes are different. You can read more about resume-level (-k) and other options\nwith ",Object(n.b)("inlineCode",{parentName:"p"},"man ascp"),"."))),Object(n.b)("h2",null,"Recap"),Object(n.b)("p",null,"You have just downloaded a file from the Aspera Demo Server using the Aspera ",Object(n.b)("inlineCode",{parentName:"p"},"ascp")," CLI\nboth directly and in a script."),Object(n.b)("p",null,"These download commands are simple when you know what file is available for download. What\nhappens when users are not familiar with the structure of the remote filesystem? Next up\nwe will look at improving the end-user experience using the native Aspera Client GUI."))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-labs-high-speed-file-transfer-at-the-speed-of-business-cli-mdx-56ea5225328a88a3686b.js.map