import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import checkbox from './components/checkbox'
import iconbutton from './components/iconButton'
import swiper from './components/swiper'
import loading from './components/loading'
import button from './components/button'
import progress from './components/progress'
import Switch from './components/switch'
import field from './components/field'
import cell from './components/cell'
import tab from './components/tab'
import navBar from './components/navBar'
import loadmore from './components/loadmore'
import list from './components/list'
import imagePreview from './components/image-preview'
import lazyload from './components/lazyload'
import toast from './components/toast'
import dialog from './components/dialog'
import layout from './components/layout'
import badge from './components/badge'
import noticeBar from './components/notice-bar'
import pagination from './components/pagination'
import search from './components/search'
import count from './components/count'
import stepper from './components/stepper'
import popup from './components/popup'
import range from './components/range'
import infiniteScroll from './components/infinite-scroll'
import picker from './components/picker'
import area from './components/area'

Vue.use(Router)
const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/checkbox',
  name: 'checkbox',
  component: checkbox
}, {
  path: '/iconbutton',
  name: 'iconbutton',
  component: iconbutton
}, {
  path: '/swiper',
  name: 'swiper',
  component: swiper
}, {
  path: '/loading',
  name: 'loading',
  component: loading
}, {
  path: '/button',
  name: 'button',
  component: button
},
{
  path: '/progress',
  name: 'progress',
  component: progress
},
{
  path: '/switch',
  name: 'switch',
  component: Switch
},
{
  path: '/field',
  name: 'field',
  component: field
},
{
  path: '/cell',
  name: 'cell',
  component: cell
},
{
  path: '/tab',
  name: 'tab',
  component: tab
},
{
  path: '/navBar',
  name: 'navBar',
  component: navBar
},
{
  path: '/loadmore',
  name: 'loadmore',
  component: loadmore
},
{
  path: '/list',
  name: 'list',
  component: list
},
{
  path: '/imagePreview',
  name: 'imagePreview',
  component: imagePreview
},
{
  path: '/lazyload',
  name: 'lazyload',
  component: lazyload
},
{
  path: '/toast',
  name: 'toast',
  component: toast
},
{
  path: '/dialog',
  name: 'dialog',
  component: dialog
},
{
  path: '/layout',
  name: 'layout',
  component: layout
},
{
  path: '/badge',
  name: 'badge',
  component: badge
},
{
  path: '/noticeBar',
  name: 'noticeBar',
  component: noticeBar
},
{
  path: '/pagination',
  name: 'pagination',
  component: pagination
},
{
  path: '/search',
  name: 'search',
  component: search
},
{
  path: '/count',
  name: 'count',
  component: count
},
{
  path: '/stepper',
  name: 'stepper',
  component: stepper
},
{
  path: '/popup',
  name: 'popup',
  component: popup
},
{
  path: '/range',
  name: 'range',
  component: range
},
{
  path: '/infiniteScroll',
  name: 'infiniteScroll',
  component: infiniteScroll
},
{
  path: '/picker',
  name: 'picker',
  component: picker
},
{
  path: '/area',
  name: 'area',
  component: area
}]

export default new Router({
  routes: routes
})
