(function() {

    'use strict'

    const _h = document.getElementById('h')
    const _m = document.getElementById('m')
    const _s = document.getElementById('s')

    function clock() {

        let today = new Date()

        let h = today.getHours()
        let m = today.getMinutes()
        let s = today.getSeconds()

        _h.textContent = h < 10 ? `0${h}` : h
        _m.textContent = m < 10 ? `0${m}` : m
        _s.textContent = s < 10 ? `0${s}` : s

    }

    clock()
    setInterval(clock, 1000)

})()