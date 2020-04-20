(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"908Y":function(e,r,a){"use strict";a.r(r),a.d(r,"_frontmatter",(function(){return s})),a.d(r,"default",(function(){return d}));a("E5k/"),a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("q1tI");var n=a("7ljp"),t=a("013z"),o=a("dj4F");a("qKvR");function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s={},l=function(e){return function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",r)}},b=l("AnchorLinks"),i=l("AnchorLink"),c={_frontmatter:s},u=t.a;function d(e){var r=e.components,a=function(e,r){if(null==e)return{};var a,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,["components"]);return Object(n.b)(u,p({},c,a,{components:r,mdxType:"MDXLayout"}),Object(n.b)(o.a,{name:"Ryan Hay",lastUpdated:"April 2020",readTimeMinutes:"3",mdxType:"ArticleDetails"}),Object(n.b)(b,{mdxType:"AnchorLinks"},Object(n.b)(i,{mdxType:"AnchorLink"},"Install Aspera Proxy"),Object(n.b)(i,{mdxType:"AnchorLink"},"Configure the Server for use with Aspera Proxy"),Object(n.b)(i,{mdxType:"AnchorLink"},"Configure Aspera Proxy"),Object(n.b)(i,{mdxType:"AnchorLink"},"Example Proxy Config")),Object(n.b)("h2",null,"Install Aspera Proxy"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Provision a CentOS 7 machine (Debian is also supported)"),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",p({parentName:"li"},{href:"https://downloads.asperasoft.com/en/downloads/42"}),"Download")," Aspera Proxy to the host"),Object(n.b)("li",{parentName:"ol"},"As root install Aspera Proxy: ",Object(n.b)("inlineCode",{parentName:"li"},"rpm -ivh ibm-aspera-proxy-1.4.4.174906-linux-64.rpm"))),Object(n.b)("h2",null,"Configure the Server for use with Aspera Proxy"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Create the user xfer: ",Object(n.b)("inlineCode",{parentName:"p"},"adduser xfer"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Add ‘",Object(n.b)("a",p({parentName:"p"},{href:"./asperaIdDsaPub.md"}),"aspera_id_dsa.pub"),"’ to ‘/home/xfer/.ssh/authorized_keys’"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",p({parentName:"pre"},{className:"language-shell"}),'command="/bin/aspshell -t",no-agent-forwarding,no-port-forwarding,no-X11-forwarding,no-pty ssh-dss AAAAB3NzaC1kc3MAAACBAOQpAcPqbjIjGCOx7Lo+fLjppxlcRGwkfLnin8GpcjJiRU4CQSkqC9PepNM2bKRZbDii84/X4OLVz/YWlhyWVxOmGRZxLyUDuPTXaZQR5xdq9eM88bSLe3m+0HzEvLfeRDd72/38vCHTFxF+5rR3lR8XCikEgBe8kCvcHqtqmzz5AAAAFQC8LMnqrMdxKJQmglVyX/utXHiaaQAAAIA+g+0Q/jLMcbZe1zEJ9dpvi73MTrA/Ph48m3RROfd9S+dCYlPuLQpUJGveDYfY5kxYXXbLSNSrxAG5nayjcId57tbVWYB1s3sXFz5zJX2cTrNRGoBo/K3ZsT6uAzWk/otBRjGAPfEp2/Vkb6QMgMR/pTeieNwpuYDpyTFPoZq+gAAAAIEAobapDv5p2foH+cG5K07sIFD9r0RD7uKJnlqjYAXzFc8U76wXKgu6WXup2ac0Co+RnZp7Hsa9G+E+iJ6poI9pOR08XTdPly4yDULNST4PwlfrbSFT9FVhzkWfpOvAUc8fkQAhZqv/PE6VhFQ8w03Z8GpqXx7b3NvBR+EfIx368Ko= Aspera public access\ncommand="/bin/aspshell -t",no-agent-forwarding,no-port-forwarding,no-X11-forwarding,no-pty ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDgVtYAGrv/GSypo1IlauFMjDCawMoRQAvLO71Tc5KwlrAFRXklcTRZ2QXsiDHssh0KTVjmNSy7FXccMlJCXMATyXeR3sjY2Jdck3NWE89KFIaSp/+A6AFYv6rJqpq8axbHmBuQA7GRbOShWt15tZ0axWCP0sRr0291bDr9uWbgkFS0ljr53839AOZ9ebWcNWpAavB9FU5RMPwmYm2hhvhKM7S0qaq30gN3HmrERcNf3MenKXSuTp6hKO00D8ohWS5SJPsjut6O/aV4d66L3VD6PmN+JdxWrzzNWX7syvQd/W7ppfw2Z/Su8xh2nUC09G7ON3j6rlKX4Rk3jYgOM0i1y8VwCPnY2+DdRWyqwOFZlv5tmZVIYkC8UdhRu3hdImnnuDvHDL88g/CaEzuOGYLoMVtRH82gaoQY4n7jyJk4inc4d9i8Jknl6JtOPfc5peHRmHjnSupvuHaAs4aZp0waid/F4UyI0mCfIKe+/VbxyOZn9m4b38XCMoTyfEmjS7s59RhxfK7JEdzJC1lpWD93bZ/J6jzMzDJfJpN4cDISY9p3hLfR1M1tulF44scv56n38XDyzktj6dqa1P/hJOgOWhnsRe8TaiwdEA6EEqHwUEp2sSnLNnk5jfQetni3evzai4Ly58DKY+E31l5M60+CC2dMcHEJvF/5AqJmoPjOzQ== Aspera public access\n'))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Add ‘Port 33001’ to ‘/etc/ssh/sshd_config’")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Restart SSHD: ",Object(n.b)("inlineCode",{parentName:"p"},"systemctl restart sshd"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Copy the Aspera Proxy license file to ‘/opt/aspera/proxy/etc/aspera-license’")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Change the xfer users shell to the secure aspshell: ",Object(n.b)("inlineCode",{parentName:"p"},"chsh -s /bin/aspshell xfer"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Create the file ‘/etc/sudoers.d/aspera_rproxy’ with the following content:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",p({parentName:"pre"},{className:"language-bash"}),"Defaults:xfer !requiretty\nDefaults:xfer secure_path = /sbin:/bin:/usr/sbin:/usr/bin\nxfer ALL = NOPASSWD: /sbin/iptables-restore\n")))),Object(n.b)("h2",null,"Configure Aspera Proxy"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Enable reverse proxy mode:\n",Object(n.b)("inlineCode",{parentName:"p"},'/opt/aspera/proxy/bin/asconfigurator -x "set_server_data;rproxy_enabled,true"'))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Disbale UDP port reuse:\n",Object(n.b)("inlineCode",{parentName:"p"},'./asconfigurator -x "set_server_data;rproxy_rules_rule_udp_port_reuse,false"'))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Set the reverse proxy rule to route traffic to the TCP proxy of the CP4I cluster:\n",Object(n.b)("inlineCode",{parentName:"p"},'./asconfigurator -x "set_server_data;rproxy_rules_rule_host,{aspera-tcp-proxy-address}:33001"')))),Object(n.b)("h2",null,"Example Proxy Config"),Object(n.b)("pre",null,Object(n.b)("code",p({parentName:"pre"},{className:"language-xml"}),"<?xml version='1.0' encoding='UTF-8'?>\n<CONF version=\"2\">\n    <server>\n        <rproxy>\n            <enabled>true</enabled>\n            <rules>\n                <rule>\n                    <udp_port_reuse>false</udp_port_reuse>\n                    <squash_user>xfer</squash_user>\n                    <keyfile>/opt/aspera/proxy/etc/asperaweb_id_dsa.openssh</keyfile>\n                    <host>{aspera-tcp-proxy-address}:33001</host>\n                    <bind_source_address>{proxy_internal_interface}</bind_source_address>\n                </rule>\n            </rules>\n        </rproxy>\n    </server>\n</CONF>\n")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-cp-4-i-guides-aspera-proxy-cp-4-i-index-mdx-b3ba42a0f6fe0e89d123.js.map