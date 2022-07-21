let _navLi = document.querySelectorAll('#slider-nav>ul>li')
let _slider = document.getElementById('slider')
let _sliderchild = document.querySelectorAll('#slider>ul')

_navLi.forEach((item, index)=> {
    item.addEventListener('click', function() {
        navActive(item)
        sliderWork(index)
        let _src = item.getAttribute('data-background')
        document.querySelector('main').style.backgroundImage = 'url('+_src+')'
        document.querySelector('.number').innerHTML = '0' + (index + 1)
    })
    item.addEventListener('mouseenter', function() {
        size('80px')
        document.querySelector('.circle-1').style.border = '3px solid white'
    })
    item.addEventListener('mouseleave', function() {
        size('50px')
        document.querySelector('.circle-1').style.border = '2px solid white'
    })
})
function navActive(item) {
    for (i = 0; i < _navLi.length; i++) {
        _navLi[i].classList.remove('nav-active')
    }
    item.classList.add('nav-active')
}
function sliderWork(index) {
    for (i = 0; i < _navLi.length; i++) {
        _sliderchild[i].classList.remove('actived')
    }
    _sliderchild[index].classList.add('actived')
}
function size(x) {
    document.querySelector('.circle-1').style.width = x
    document.querySelector('.circle-1').style.height = x
}
document.querySelector('main').addEventListener('mousemove', function(event) {
    let x = event.clientX
    let y = event.clientY
    document.querySelector('.circle-1').style.top = y + 'px'
    document.querySelector('.circle-1').style.left = x + 'px'
    document.querySelector('.circle-2').style.top = y + 'px'
    document.querySelector('.circle-2').style.left = x + 'px'
}) 

