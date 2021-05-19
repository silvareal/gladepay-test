import React, { useState } from "react";
import Logo from "../../assets/img/logo.png";
import { BreadCrumb, OpenNewWindow } from "../../utils/icons";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar((value) => !value);
  return (
    <div>
      {/* Top navbar section */}
      <header className="header">
        <div className="flex">
          <div className="header__breadcrumb" onClick={toggleSidebar}>
            <BreadCrumb />
          </div>
          <div className="header__brand">
            <a href="/">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
        </div>

        <div className="flex">
          <div className="header__search">
            <input
              type="text"
              title="Search Documentation"
              autoComplete="off"
            />
          </div>

          <div className="header__actions">
            <nav className="nav-links">
              <div className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </div>
              <div className="nav-item">
                <a href="/docs/" className="nav-link router-link-active">
                  Guide
                </a>
              </div>
              <div className="nav-item">
                <a href="/api/" className="nav-link">
                  API Reference
                </a>
              </div>
              <div className="nav-item">
                <div className="dropdown-wrapper">
                  <button
                    type="button"
                    aria-label="SDKs & Plugins"
                    className="dropdown-title"
                  >
                    <span className="title">SDKs &amp; Plugins</span>{" "}
                    <span className="arrow down" />
                  </button>
                  {/* <button
                  type="button"
                  aria-label="SDKs & Plugins"
                  className="mobile-dropdown-title"
                >
                  <span className="title">SDKs &amp; Plugins</span>{" "}
                  <span className="arrow right" />
                </button>{" "}
                <ul className="nav-dropdown" style={{ display: "none" }}>
                  <li className="dropdown-item">
                    <a href="/sdks/" className="nav-link">
                      SDKs
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/plugins/" className="nav-link">
                      Plugins
                    </a>
                  </li>
                </ul>
               */}
                </div>
              </div>
              <div className="nav-item">
                <a
                  href="https://glade.ng/faqs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link external"
                >
                  FAQs
                  <span>
                    <OpenNewWindow />
                    {/* <span className="sr-only">(opens new window)</span> */}
                  </span>
                </a>
              </div>
              <div className="nav-item">
                <a
                  href="https://glade.ng/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link external"
                >
                  Contact Us
                  <span>
                    <OpenNewWindow />
                    {/* <span className="sr-only">(opens new window)</span> */}
                  </span>
                </a>
              </div>
            </nav>{" "}
          </div>
        </div>
      </header>
      {/* End Top navbar section */}

      {/* Sidebar section */}
      <aside
        className="sidebar"
        style={{
          transform: `${!showSidebar ? "translateX(0)" : "translateX(-100%)"}`,
        }}
      >
        <nav className="sidebar__nav">
          <div className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </div>
          <div className="nav-item">
            <a href="/docs/" className="nav-link router-link-active">
              Guide
            </a>
          </div>
          <div className="nav-item">
            <a href="/api/" className="nav-link">
              API Reference
            </a>
          </div>
          <div className="nav-item">
            <div className="dropdown-wrapper">
              <button
                type="button"
                aria-label="SDKs & Plugins"
                className="dropdown-title"
              >
                <span className="title">SDKs &amp; Plugins</span>{" "}
                <span className="arrow down" />
              </button>{" "}
              <ul className="nav-dropdown" style={{ display: "none" }}>
                <li className="dropdown-item">
                  {/**/}{" "}
                  <a href="/sdks/" className="nav-link">
                    SDKs
                  </a>
                </li>
                <li className="dropdown-item">
                  {/**/}{" "}
                  <a href="/plugins/" className="nav-link">
                    Plugins
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-item">
            <a
              href="https://glade.ng/faqs"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link external"
            >
              FAQs
              <span>
                <OpenNewWindow />
              </span>
            </a>
          </div>
          <div className="nav-item">
            <a
              href="https://glade.ng/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link external"
            >
              Contact Us
              <span>
                <OpenNewWindow />
              </span>
            </a>
          </div>{" "}
          {/**/}
        </nav>{" "}
        <ul className="sidebar__links">
          <li>
            <section>
              <p className="sidebar__links--heading">
                <span>Guide</span> {/**/}
              </p>{" "}
              <ul className="sidebar__links--group">
                <li>
                  <a href="/docs/#account-setup" className="sidebar-link">
                    Account Setup
                  </a>
                  <ul className="sidebar-sub-headers">
                    <li>
                      <a href="/docs/#test-accounts" className="sidebar-link">
                        Test Accounts
                      </a>
                    </li>
                    <li>
                      <a href="/docs/#live-accounts" className="sidebar-link">
                        Live Accounts
                      </a>
                    </li>
                    <li>
                      <a
                        href="/docs/#using-the-glade-payment-services"
                        className="sidebar-link"
                      >
                        Using the Glade Payment Services
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/docs/#the-interface" className="sidebar-link">
                    The Interface
                  </a>
                  <ul className="sidebar-sub-headers" />
                </li>
                <li>
                  <a
                    href="/docs/#prerequisites-requirements"
                    className="active sidebar-link"
                    aria-current="page"
                  >
                    Prerequisites / Requirements
                  </a>
                  <ul className="sidebar-sub-headers">
                    <li>
                      <a
                        href="/docs/#https-requirements"
                        className="sidebar-link"
                      >
                        HTTPS requirements
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="/docs/#glade-inline-checkout"
                    className="sidebar-link"
                  >
                    Glade Inline Checkout
                  </a>
                  <ul className="sidebar-sub-headers">
                    <li>
                      <a
                        href="/docs/#embed-parameters"
                        className="sidebar-link"
                      >
                        Embed Parameters
                      </a>
                    </li>
                    <li>
                      <a
                        href="/docs/#recurring-payment"
                        className="sidebar-link"
                      >
                        Recurring Payment
                      </a>
                    </li>
                    <li>
                      <a
                        href="/docs/#installment-payment"
                        className="sidebar-link"
                      >
                        Installment Payment
                      </a>
                    </li>
                    <li>
                      <a href="/docs/#split-payment" className="sidebar-link">
                        Split Payment
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/docs/#verify-transactions" className="sidebar-link">
                    Verify Transactions
                  </a>
                  <ul className="sidebar-sub-headers" />
                </li>
                <li>
                  <a href="/docs/#refund-transactions" className="sidebar-link">
                    Refund Transactions
                  </a>
                  <ul className="sidebar-sub-headers" />
                </li>
                <li>
                  <a href="/docs/#disputes" className="sidebar-link">
                    Disputes
                  </a>
                  <ul className="sidebar-sub-headers" />
                </li>
                <li>
                  <a href="/docs/#settlements" className="sidebar-link">
                    Settlements
                  </a>
                  <ul className="sidebar-sub-headers" />
                </li>
                <li>
                  <a href="/docs/#questions" className="sidebar-link">
                    Questions?
                  </a>
                  <ul className="sidebar-sub-headers" />
                </li>
              </ul>
            </section>
          </li>
        </ul>{" "}
      </aside>
      {/* End Sidebar section */}
    </div>
  );
}
