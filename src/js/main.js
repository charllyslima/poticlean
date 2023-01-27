// Load Styles
import '../scss/main.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";
import 'animate.css';

// Loading bootstrap with optional features
initBootstrap({
    tooltip: true,
    popover: true,
    toasts: true,
});

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(elm => {
    elm.addEventListener('click', e => {
        document.querySelectorAll('.nav-link').forEach(el => {
            el.classList.remove('active');
        })

        if (e.target.classList.contains('nav-link')) {
            e.target.classList.toggle('active');
        }
    })
})

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8,
    });
}

window.initMap = initMap;

const types = document.querySelectorAll('.type-gallery');
const items = document.querySelectorAll('.item');
types.forEach(elm => {
    elm.addEventListener('click', e => {
        types.forEach(el => {
            el.classList.remove('active');
        })
        e.target.classList.add('active');
        const filter = e.target.getAttribute('data-filter').toUpperCase();
        items.forEach(el => {
            const type = el.getAttribute('data-type').toUpperCase();
            if (filter !== '*') {
                if (type === filter) {
                    if (el.classList.contains('animate__zoomOut')) {
                        el.classList.remove('d-none');
                        el.classList.add('animate__zoomIn');
                        el.classList.remove('animate__zoomOut');
                    }
                } else {
                    el.classList.add('animate__zoomOut');
                    setTimeout(() => {
                        el.classList.add('d-none');
                    },750)
                }
            } else {
                el.classList.remove('d-none');
                if (el.classList.contains('animate__zoomOut')) {
                    el.classList.add('animate__zoomIn');
                    el.classList.remove('animate__zoomOut');
                }
            }
        })
    });
})