import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {
  render() {
    return (
      <div>

        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="themes/index3.html" className="brand-link">
            <img src="themes/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
            <span className="brand-text font-weight-light">AdminLTE 3</span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img src="themes/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User" />
              </div>
              <div className="info">
                <a href="fake_url" className="d-block">Alexander Pierce</a>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                {/* <li className="nav-item has-treeview">
                  <a href="fake_url" className="nav-link">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                      Dashboard
                    <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to=''>
                        <a href="dashboard" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Dashboard v1</p>
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a href="themes/index2.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Dashboard v2</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="themes/index3.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Dashboard v3</p>
                      </a>
                    </li>
                  </ul>
                </li> */}
                {/* <Link to='widget'>
                  <li className="nav-item">
                    Widget
                    </li>
                </Link> */}
                <li className="nav-item">
                  <Link to='/'>
                    <div className="nav-link">
                      <i className="nav-icon fas fa-th" />
                      <p>
                        Home
                      <span className="right badge badge-danger">New</span>
                      </p>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='widget'>
                    <div className="nav-link">
                      <i className="nav-icon fas fa-th" />
                      <p>
                        Widgets
                      <span className="right badge badge-danger">New</span>
                      </p>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/shop'>
                    <div className="nav-link">
                      <i className="nav-icon fas fa-th" />
                      <p>
                        Shop
                      <span className="right badge badge-danger">New</span>
                      </p>
                    </div>
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to='shop'>
                    <a href="/shop" className="nav-link">
                      <i className="nav-icon fas fa-th" />
                      <p>
                        Shop
                      <span className="right badge badge-danger">New</span>
                      </p>
                    </a>
                  </Link>
                </li> */}
                {/* <li className="nav-item has-treeview">
                  <a href="fake_url" className="nav-link">
                    <i className="nav-icon fas fa-copy" />
                    <p>
                      Layout Options
              <i className="fas fa-angle-left right" />
                      <span className="badge badge-info right">6</span>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="../layout/top-nav.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Top Navigation</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../layout/top-nav-sidebar.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Top Navigation + Sidebar</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../layout/boxed.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Boxed</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../layout/fixed-sidebar.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Fixed Sidebar</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../layout/fixed-topnav.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Fixed Navbar</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../layout/fixed-footer.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Fixed Footer</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../layout/collapsed-sidebar.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Collapsed Sidebar</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-treeview">
                  <a href="fake_url" className="nav-link">
                    <i className="nav-icon fas fa-chart-pie" />
                    <p>
                      Charts
              <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="../charts/chartjs.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>ChartJS</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../charts/flot.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Flot</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../charts/inline.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Inline</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-treeview">
                  <a href="fake_url" className="nav-link">
                    <i className="nav-icon fas fa-tree" />
                    <p>
                      UI Elements
              <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="../UI/general.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>General</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../UI/icons.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Icons</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../UI/buttons.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Buttons</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../UI/sliders.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Sliders</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../UI/modals.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Modals &amp; Alerts</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../UI/navbar.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Navbar &amp; Tabs</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../UI/timeline.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Timeline</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../UI/ribbons.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Ribbons</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-treeview">
                  <a href="fake_url" className="nav-link">
                    <i className="nav-icon fas fa-edit" />
                    <p>
                      Forms
              <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="../forms/general.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>General Elements</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../forms/advanced.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Advanced Elements</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../forms/editors.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Editors</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../forms/validation.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Validation</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-treeview">
                  <a href="fake_url" className="nav-link">
                    <i className="nav-icon fas fa-table" />
                    <p>
                      Tables
              <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="../tables/simple.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Simple Tables</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../tables/data.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>DataTables</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../tables/jsgrid.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>jsGrid</p>
                      </a>
                    </li>
                  </ul>
                </li> */}

              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>

      </div>
    )
  }
}
