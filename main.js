//设置2秒后停止加载画面
window.setTimeout(
    function(){
        siteWelcome.classList.remove('active')
    },1500
)

//向下滑动时导航栏改变样式

window.onscroll = function(){
    if(window.scrollY>0){
        siteNav.classList.add('sticky')
    }else{
        siteNav.classList.remove('sticky')
    }
}

window.onload = function(){
    //二级菜单
    let liTags  =  document.querySelectorAll('.nav>ul>li')
    for(let i=0;i<liTags.length;i++){
        liTags[i].onmouseenter = function(x){
            x.currentTarget.classList.add('active')
        }
        liTags[i].onmouseleave = function(x){
            x.currentTarget.classList.remove('active')
        }
    }

    //自动滚动到想要的位置
    let aTags = document.querySelectorAll('.nav>ul>li>a')
    for(let i=0;i<aTags.length;i++){
        aTags[i].onclick = function(x){
            x.preventDefault()
            let a = x.currentTarget
            let href= a.getAttribute('href')
            let element = document.querySelector(href)
            let top = element.offsetTop
            window.scrollTo(0,top-60)
        }
    }
}
 
