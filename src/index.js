import { Routes, DefaultRoute } from './routes'

/* Import global app styles here */
import 'spectre.css/dist/spectre.css'
import 'spectre.css/dist/spectre-icons.css'
import './index.less'

/* Wire up mithril app to DOM */
const $root = document.querySelector('#app')
m.route($root, DefaultRoute, Routes)