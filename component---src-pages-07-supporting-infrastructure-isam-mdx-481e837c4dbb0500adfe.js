(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{dMLQ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return m}));var n,o=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),c=a("013z"),s=(a("qKvR"),{}),p=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),l={_frontmatter:s},b=c.a;function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(b,Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"IBM Secuity Access Manager"),Object(i.b)("p",null,"IBM® Cúram Social Program Management (SPM) can be integrated with ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.ibm.com/ie-en/marketplace/access-management/details"}),"IBM Security Access Manager")," (ISAM) to enable single sign-on (SSO) authentication.\nSSO authentication enables users to access multiple secure applications by authenticating once with a single user name and password."),Object(i.b)("p",null,"If a user authenticates to an SSO system, they are no longer prompted for credentials when they access any of the other applications that are configured to work with the SSO system."),Object(i.b)("p",null,"SSO systems usually maintain the user accounts on a lightweight directory application protocol (LDAP) server. If user accounts are stored in one location, it is easier for system administrators to safeguard the accounts.\nAlso, it is easier for users to reset one account password for multiple applications."),Object(i.b)("p",null,"For an overview of ISAM as well as procurement options, please visit ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.ibm.com/ie-en/marketplace/access-management"}),"IBM Marketplace"),".\nThe following guide provides the steps required to configure SPM on a Kubernetes environment for integration with ISAM.\nFor steps covering the configuration of ISAM itself, please review the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://community.ibm.com/community/user/security/viewdocument/access-manager-federation-cookbook-1?CommunityKey=e7c36119-46d7-42f2-97a9-b44f0cc89c6d&tab=librarydocuments"}),"Federation Cookbook"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," The version of ISAM used for the following examples is 9.0.7."),Object(i.b)("h3",null,"ISAM integration with SPM"),Object(i.b)("p",null,"To integrate with SPM, we will need to:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Retrieve the federation metadata XML file from ISAM server, either via management console or via RESTful call to API."),Object(i.b)("p",{parentName:"li"},"For steps on using the console please review the ",Object(i.b)("inlineCode",{parentName:"p"},"Federation Cookbook"),".\nFor steps on using the API please review the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSPREK_9.0.7/com.ibm.isam.doc/develop/rapi/index.html"}),"RESTful Web service documentation"),".\nThis document will use the latter."),Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"RESTful Web service documentation")," provides a library of the available Web services that can be used to interact with your ISAM server with tools such as curl.\nThe information provided in the request section of each Web service can be used to construct a curl command."),Object(i.b)("p",{parentName:"li"},"To export the meta-data for a specific federation, the documentation (located under ",Object(i.b)("inlineCode",{parentName:"p"},"Secure: Federation -> Manage: -> Federations: -> Export a federation"),") gives an example of:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"GET https://{appliance_hostname}/iam/access/v8/federations/{federation_id}/metadata\n")),Object(i.b)("p",{parentName:"li"},"and lists the accepted headers as:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"Accept:application/json\nAuthorization: Basic\n")),Object(i.b)("p",{parentName:"li"},"The corresponding curl command would be formatted as follows:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"curl --location --request GET 'https://{appliance_hostname}/iam/access/v8/federations/{federation_id}/metadata' \\\n--header 'Authorization: Basic {token}'\n")),Object(i.b)("p",{parentName:"li"},"The above curl command will return the federation metadata XML file in the response body.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Install the federation metadata file as a configmap into namespace."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"kubectl --namespace ${NAMESPACE} create configmap $releaseName-federated-metadata-cm --from-file=${federationMetadataFile}\n")),Object(i.b)(p,{mdxType:"InlineNotification"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Note:")," ${NAMESPACE} refers to the namespace being used for the install and ${federationMetadataFile} refers to the XML file returned from the previous step."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Enable ISAM by toggling the following properties in the override values file injected through Helm during deployment:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml",metastring:"path=apps-values.yaml",path:"apps-values.yaml"}),"---\nglobal:\n  isam:\n    enabled: true\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Return to the helm chart prepartion page and continue the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/spm-kubernetes/04-deployment/hc_preparation"}),"installation of of SPM")),Object(i.b)(p,{mdxType:"InlineNotification"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Note:")," The ",Object(i.b)("inlineCode",{parentName:"p"},"curamAuthFilter")," defined within the ",Object(i.b)("inlineCode",{parentName:"p"},"helm-charts/apps/templates/configmaps/configmap-isam.yaml")," resource may need expansion to handle customisations.\nThis should be reviewed by your security architect."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"After the completion of the helm install, complete the federation steps.\nDetailed instructions for the following steps can be found in the ",Object(i.b)("inlineCode",{parentName:"p"},"Federation Cookbook"),"."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"First, add the Service Provider Signer Certificate to the ISAM server's trust store.\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Next import the Service Provider XML to ISAM server."),Object(i.b)("p",{parentName:"li"},"This XML can be obtained from ",Object(i.b)("inlineCode",{parentName:"p"},"https://<hostname>/ibm/saml20/defaultSP/samlmetadata"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Reload the applicances on the ISAM server."))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-07-supporting-infrastructure-isam-mdx-481e837c4dbb0500adfe.js.map