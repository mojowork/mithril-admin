import './layout.less'

const Layout = {
  view: (vnode) => (
    <div className='container'>
      {vnode.children}
    </div>
  )
}

export default Layout