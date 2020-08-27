(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"ue/2":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return O}));var a=n("wx14"),o=n("zLVn"),l=(n("q1tI"),n("7ljp")),r=n("013z"),c=(n("qKvR"),{}),b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},s=b("Tabs"),i=b("Tab"),p=b("Row"),m=b("Column"),u=b("InlineNotification"),h={_frontmatter:c},d=r.a;function O(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)(d,Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Helm charts are stored in a repository. For development purposes, you can use a local repository to use Helm along with Minikube. This runbook uses ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://chartmuseum.com/"}),"ChartMuseum")," as the local repository."),Object(l.b)("p",null,"A Helm chart is a collection of files that describe a related set of Kubernetes resources. Helm charts are the recommended way to distribute deployments on Kubernetes clusters."),Object(l.b)("p",null,"Use ChartMuseum to develop, test, and deploy locally before you distribute the charts. For more information, see ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://helm.sh/docs/intro/"}),"Introduction to Helm"),"."),Object(l.b)("h2",null,"Installing ChartMuseum in a Docker® container"),Object(l.b)("p",null,"ChartMuseum can run in a Docker container by using the ",Object(l.b)("inlineCode",{parentName:"p"},"docker run")," command when the docker container is created."),Object(l.b)("p",null,"Take the following steps:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Start a Docker container that is accessible locally on port 8080:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"docker run --rm -d --name chartmuseum \\\n  -p 8080:8080 \\\n  -e DEBUG=true \\\n  -e STORAGE=local \\\n  -e STORAGE_LOCAL_ROOTDIR=/tmp/charts \\\n  chartmuseum/chartmuseum:v0.12.0\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Run the ",Object(l.b)("inlineCode",{parentName:"li"},"docker logs")," command to view the Chart Museum logs:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"docker logs chartmuseum\n")),Object(l.b)("h3",null,"Testing ChartMuseum connectivity"),Object(l.b)("p",null,"Run the following command to test connectivity. ",Object(l.b)("inlineCode",{parentName:"p"},"127.0.0.1")," is the localhost IP address."),Object(l.b)(s,{mdxType:"Tabs"},Object(l.b)(i,{label:"Mac/Linux",mdxType:"Tab"},Object(l.b)(p,{mdxType:"Row"},Object(l.b)(m,{mdxType:"Column"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl http://127.0.0.1:8080/index.yaml\n"))))),Object(l.b)(i,{label:"Windows",mdxType:"Tab"},Object(l.b)(p,{mdxType:"Row"},Object(l.b)(m,{mdxType:"Column"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell"}),"Invoke-RestMethod http://$(minikube ip):8080/index.yaml\n# OR\nInvoke-RestMethod http://$(docker-machine ip):8080/index.yaml\n")))))),Object(l.b)(u,{mdxType:"InlineNotification"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," On Windows, the Docker Engine can run in a dedicated ",Object(l.b)("inlineCode",{parentName:"p"},"docker-machine"),", or can be reused from the Minikube VM")),Object(l.b)("p",null,"You will see something like the following example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nentries: {}\ngenerated: "2019-06-17T10:55:37Z"\nserverInfo: {}\n')),Object(l.b)("h2",null,"Provisioning charts"),Object(l.b)("p",null,"When ChartMuseum is running, you can copy the compressed ",Object(l.b)("inlineCode",{parentName:"p"},"tgz")," files that are produced by Helm, or by using the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chartmuseum/helm-push"}),"Helm Push")," plugin (recommended approach)."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"helm plugin install https://github.com/chartmuseum/helm-push\n")),Object(l.b)(u,{mdxType:"InlineNotification"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," On Windows, the Helm Push plugin must be installed from a Git Bash window.")),Object(l.b)("p",null,"Creating the chart files is covered later in the runbook when you run the ",Object(l.b)("inlineCode",{parentName:"p"},"helm package")," command. For more information, see ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/spm-kubernetes/04-deployment/hc_preparation"}),"Preparing Helm Charts"),"."),Object(l.b)("h2",null,"Configure Helm to access the local repository"),Object(l.b)("p",null,"To use ChartMuseum as a repository, you must configure Helm to point to it. Run the following command:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"helm repo add local-development http://127.0.0.1:8080/\n")),Object(l.b)("p",null,"Verify the list of repositories by running the following command:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"helm repo list\n")),Object(l.b)("p",null,"The helm repo list command also returns the ",Object(l.b)("inlineCode",{parentName:"p"},"local-development")," repository that you added when you ran the ",Object(l.b)("inlineCode",{parentName:"p"},"helm repo add")," command."),Object(l.b)("p",null,"When the repository is added, run the following command to refresh the Helm index:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"helm repo update\n")))}O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-01-prereq-chartmuseum-mdx-1bdc04adc1c27e5aba5a.js.map