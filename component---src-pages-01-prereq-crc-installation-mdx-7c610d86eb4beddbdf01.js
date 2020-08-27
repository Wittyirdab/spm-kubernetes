(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{e8vO:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return O}));var a=n("wx14"),o=n("zLVn"),c=(n("q1tI"),n("7ljp")),r=n("013z"),l=(n("qKvR"),{}),i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},s=i("InlineNotification"),b=i("Tabs"),p=i("Tab"),u=i("Row"),d=i("Column"),m={_frontmatter:l},h=r.a;function O(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)(h,Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",null,"What is CRC?"),Object(c.b)("p",null,"CodeReady Containers (CRC) is a minimal, preconfigured OpenShift 4.1 or newer cluster that is designed to run on your local workstation as a development environment for OpenShift.\nFor more information, see ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/code-ready/crc"}),"CodeReady Containers"),"."),Object(c.b)("p",null,"Similar to Minikube in concept, CRC provides a cloud like environment locally to create and deploy an OpenShift cluster for development and testing purposes."),Object(c.b)("p",null,"This page covers some common CRC operations, including deploying SPM to the CRC environment. You will use the helm charts produced in ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/spm-kubernetes/04-deployment/hc_deployment"}),"Preparing Helm charts"),"."),Object(c.b)("p",null,"For a full getting started guide for CRC, see ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://access.redhat.com/documentation/en-us/red_hat_codeready_containers/1.8/html/getting_started_guide/index"}),"Getting Started Guide CodeReady Containers")),Object(c.b)(s,{mdxType:"InlineNotification"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note:"),"  SPM does not provide official support of OpenShift. All the references to OpenShift and CRC should be considered as an Early Adopter Release.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"System Requirements"),":"),Object(c.b)("p",null,"You can find detailed system requirements in the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://code-ready.github.io/crc/#minimum-system-requirements_gsg"}),"CRC Getting Started Guide"),".\nCRC must be able to allocate a minimum of 9GB RAM to its VM.\nYour workstation should have at least 16GB to operate, some workloads may require more."),Object(c.b)("h2",null,"Installing CRC"),Object(c.b)("p",null,"Create an account at ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.redhat.com/"}),"RedHat Cloud"),".\nCreate a ",Object(c.b)("inlineCode",{parentName:"p"},"$CRC_HOME")," folder to use for the purposes of the installation.\nDownload the installation archive from ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://cloud.redhat.com/openshift/install/crc/installer-provisioned"}),"latest release")," to ",Object(c.b)("inlineCode",{parentName:"p"},"$CRC_HOME")," and extract the archive.\nOn the same page, download your pull secret to ",Object(c.b)("inlineCode",{parentName:"p"},"$CRC_HOME"),". At the time of writing the ",Object(c.b)("inlineCode",{parentName:"p"},"latest release")," is ",Object(c.b)("inlineCode",{parentName:"p"},"1.13.0"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"tar -xvf crc-macos-amd64.tar.xz\n")),Object(c.b)(s,{mdxType:"InlineNotification"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note:"),"  You have two options, add the binary to the ",Object(c.b)("inlineCode",{parentName:"p"},"PATH")," environment variable, or move it to ",Object(c.b)("inlineCode",{parentName:"p"},"/usr/local/bin/"),".")),Object(c.b)(b,{mdxType:"Tabs"},Object(c.b)(p,{label:"Add to the PATH",mdxType:"Tab"},Object(c.b)(u,{mdxType:"Row"},Object(c.b)(d,{mdxType:"Column"},Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"export PATH=$CRC_HOME/crc-macos-1.10.0-amd64:$PATH"))))),Object(c.b)(p,{label:"/usr/bin/local ",mdxType:"Tab"},Object(c.b)(u,{mdxType:"Row"},Object(c.b)(d,{mdxType:"Column"},Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"mv $CRC_HOME/crc-macos-1.10.0-amd64/crc /usr/local/bin")))))),Object(c.b)("p",null,"Whichever option you choose, you should now have crc in your executable path, to test this run the following command:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"crc version\n")),Object(c.b)("p",null,"The output should be similar to the following:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"crc version: 1.10.0+9025021\nOpenShift version: 4.4.3 (embedded in binary)\n")),Object(c.b)("h2",null,"Setting up CRC"),Object(c.b)("p",null,"The first step is to configure the prerequisites for the OpenShift cluster, including taking control of your hosts and resolver files to provide access to the CRC cluster.\nTo do this run the following command, providing the workstation administrator password as required.\nThis procedure also creates the ~/.crc directory if it does not already exist."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"crc setup\n")),Object(c.b)("p",null,"Now that the basic configuration is complete, edit the configuration to change the memory limit and add the path to the pull secret file downloaded previously."),Object(c.b)("p",null,"To set the CPUs to 6, run the following command:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"crc config set memory 32768\ncrc config set cpus 6\ncrc config set pull-secret-file $CRC_HOME/pull-secret.txt\n")),Object(c.b)(s,{mdxType:"InlineNotification"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note:"),"  While CRC’s minimum memory allocation requirement is 8GB, only a single replica SPM deployment can be achieved using this.\nYou should allocate as many resources as are available.\nThe greater the workload the greater the memory and processor requirements.\nAny changes to the crc config require you to delete the cluster and start a new one.")),Object(c.b)("p",null,"You can always check the configured options of ’crc’, run the following command:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"crc config view\n")),Object(c.b)("p",null,"After setup is complete, start the cluster with 6 CPUs, run the following command:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"crc start\n")),Object(c.b)("p",null,"This outputs something similar to the following:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'level=info msg="Checking if oc binary is cached"\n...\n...\n...\nlevel=info msg="To access the cluster, first set up your environment by following \'crc oc-env\' instructions"\nlevel=info msg="Then you can access it by running \'oc login -u developer -p developer https://api.crc.testing:6443\'"\nlevel=info msg="To login as an admin, run \'oc login -u kubeadmin -p YourPassWordHere https://api.crc.testing:6443\'"\n...\n...\n')),Object(c.b)("p",null,"Note the ",Object(c.b)("inlineCode",{parentName:"p"},"kubeadmin")," and ",Object(c.b)("inlineCode",{parentName:"p"},"developer")," credentials for later use."),Object(c.b)(s,{mdxType:"InlineNotification"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note:"),"  For the rest of the guide you can substitute the credentials you received when you started your cluster for $KUBEADMN_PSWD and $KUBEDEVEL_PSWD.\nAlternatively, these credentials are returned by the ",Object(c.b)("inlineCode",{parentName:"p"},"crc console --credentials")," command.\nThis guide uses $KUBEDEVEL_PSWD and $KUBEADMN_PSWD environment variables.\nYou may find it convenient to to the same, so you can copy and paste commands without having to switch values:"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"export KUBEADMN_PSWD=yourKubeAdminPassword")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"export KUBEDEVEL_PSWD=yourKubeDeveloperPassword"))),Object(c.b)("p",null,"Next, set up the OpenShift Client ",Object(c.b)("inlineCode",{parentName:"p"},"oc"),", which is used to administer the CRC cluster:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"crc oc-env\neval $(crc oc-env)\n")),Object(c.b)("p",null,"If required you can stop the cluster:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"crc stop\n")),Object(c.b)("p",null,"Or delete the cluster:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"crc delete\n")),Object(c.b)("h2",null,"Creating a CRC project"),Object(c.b)("p",null,"Create a project for the SPM deployment, again use an environment variable for your convenience when following the guide."),Object(c.b)("p",null,"Create the environment variable, you can set to value to anything you like, but it should consist of lower case alphanumeric characters or ’-’, and must start and end with an alphanumeric character (e.g. ‘my-name’,  or ‘123-abc”):"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'export releasename="spm-deploy"\n')),Object(c.b)("p",null,"Login as kubeadmin:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"oc login -u kubeadmin -p $KUBEADMN_PSWD https://api.crc.testing:6443\n")),Object(c.b)("p",null,"Create the project:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"oc adm new-project $releasename\n")),Object(c.b)("p",null,"Switch kubernetes context to the new project:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"kubectl config set-context --current --namespace $releasename\n")),Object(c.b)("h2",null,"Deployment Process"),Object(c.b)("p",null,"Creation of a Security Context Constraint (SCC).\nThis SCC allows DB2 and MQ images to run as they require certain permissions, which are by default blocked in OpenShift."),Object(c.b)("p",null,"You can find a shell script to configure the SCC located at ",Object(c.b)("inlineCode",{parentName:"p"},"$SPM_HOME/helm-charts/spm/prereqs"),".\nApply the policy by running the following script:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"cd $SPM_HOME/helm-charts/spm/prereqs\n./createSCC.sh -n $releasename\n")),Object(c.b)("p",null,"Enable the Image Registry default route:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'oc patch configs.imageregistry.operator.openshift.io/cluster --type merge -p \'{"spec":{"defaultRoute":true}}\'\n\n')),Object(c.b)("p",null,"Add relevant roles to user:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"oc get pods -n openshift-image-registry\noc policy add-role-to-user registry-viewer kube:admin\noc adm policy add-cluster-role-to-user registry-viewer kube:admin\n")),Object(c.b)(s,{mdxType:"InlineNotification"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note:"),"  This step overwrites any existing policy that has the same name."),Object(c.b)("p",null,"If policy already exists, add system:serviceaccount:${releasename}:default to the users array in the policy by editing the policy YAML or by running the following command:"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"oc adm policy add-scc-to-user spm-dev-scc -z system:serviceaccount:${releasename}:default"))),Object(c.b)("p",null,"You can verify that the SCC for SPM has been created:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get scc\nNAME               AGE\nanyuid             1d\nhostaccess         1d\nhostmount-anyuid   1d\nhostnetwork        1d\nnode-exporter      1d\nnonroot            1d\nprivileged         1d\nrestricted         1d\nspm-dev-scc        1m\n")))}O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-01-prereq-crc-installation-mdx-7c610d86eb4beddbdf01.js.map