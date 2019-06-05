import './layout.less'

const Layout = {
  view: (vnode) => (
    <div className="ma-layout-container">
      <header className="ma-layout-header">
        <section className="ma-layout-brand">
          ADMIN
        </section>
        <section className="ma-layout-tools">
          <span className="ma-layout-tools-item"><i class="icon icon-2x icon-search"></i></span>
          <span className="ma-layout-tools-item"><i class="icon icon-2x icon-mail"></i></span>
          <span className="ma-layout-tools-item">
            <figure class="avatar avatar-lg">
              <img src={require('../../assets/avatar-1.png')} alt="..."/>
            </figure>
          </span>
        </section>
      </header>
      <section className="ma-layout-body">
        <aside className="ma-layout-aside">

        </aside>
        <main className="ma-layout-main">
          {vnode.children}
        </main>
      </section>
    </div>
  )
}

export default Layout