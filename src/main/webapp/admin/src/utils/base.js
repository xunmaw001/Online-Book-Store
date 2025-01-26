const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm56x05/",
            name: "ssm56x05",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm56x05/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "图书在线商城的设计与实现"
        } 
    }
}
export default base
