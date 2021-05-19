import React from "react";
import Layout from "../../components/Layout";
import { OpenNewWindow } from "../../utils/icons";
import CheckoutGif from "../../assets/img/cardpayment.gif";

export default function Guide() {
  return (
    <Layout>
      <main className="content-container">
        <div className="main-content">
          <h1 id="guide">
            <a href="#guide" className="header-anchor">
              #
            </a>{" "}
            Guide
          </h1>

          <h2 id="account-setup">
            <a href="#account-setup" className="header-anchor">
              #
            </a>{" "}
            Account Setup
          </h2>

          <h3 id="test-accounts">
            <a href="#test-accounts" className="header-anchor">
              #
            </a>{" "}
            Test Accounts
          </h3>
          <ul>
            <li>
              Test API Credentials<br></br> <code>Merchant ID: GP0000001</code>
              <br></br> <code>Merchant Key: 123456789</code>
            </li>
          </ul>

          <h3 id="live-accounts">
            <a href="#live-accounts" className="header-anchor">
              #
            </a>{" "}
            Live Accounts
          </h3>

          <ul>
            <li>
              Sign up for a live account here:{" "}
              <a
                href="https://glade.ng"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://glade.ng
                <span>
                  <OpenNewWindow />
                </span>
              </a>
              You can start accepting realtime payments with your live account.
              Create one now. Your API Credentials are in{" "}
              <em>
                <code>Merchant Credentials</code>
              </em>{" "}
              on the dashboard.
            </li>
          </ul>

          <div class="custom-block warning">
            <p class="custom-block-title">NOTE</p>{" "}
            <p>Your Merchant Key should not be shared with a third party.</p>
          </div>

          <h3 id="using-the-glade-payment-services">
            <a href="#using-the-glade-payment-services" class="header-anchor">
              #
            </a>{" "}
            Using the Glade Payment Services
          </h3>
          <p>
            The Glade inline checkout is the simplest and easiest way to start
            accepting payments on your platform. This payment solution provides
            a secure and convenient flow for users. Payments are processed on
            the go without having to navigate customers to another page to
            complete their transactions.
          </p>
          <h2 id="the-interface">
            <a href="#the-interface" class="header-anchor">
              #
            </a>{" "}
            The Interface
          </h2>

          <p>
            <img src={CheckoutGif} alt="The Interface" />
          </p>

          <h2 id="prerequisites-requirements">
            <a href="#prerequisites-requirements" class="header-anchor">
              #
            </a>{" "}
            Prerequisites / Requirements
          </h2>
          <p>Pass the following with the header request made to the endpoint</p>

          <ol>
            <li>
              <p>
                Check our{" "}
                <a
                  href="http://glade.ng/policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  acceptable use policy
                  <span>
                    <OpenNewWindow />
                  </span>
                </a>{" "}
                if you have any questions about your business and its
                acceptability please send an email to{" "}
                <a href="mailto:support@glade.ng">support@glade.ng</a>. The team
                is available to provide feedback on any inquiry.
              </p>
            </li>{" "}
            <li>
              <p>
                Get familiar with our API by reading these pages in the API
                Overview section: Introduction, Payment Collection and Money
                Transfer.
              </p>
            </li>
          </ol>

          <div class="custom-block tip">
            <p class="custom-block-title">NOTE</p>{" "}
            <p>
              You need to provide a business CAC Certificate or National
              Identification (International Passport, Driving Licence, or
              National Identity Card) and then fill all the required details for
              your account to be activated and ready to receive payment.
            </p>
          </div>

          <h3 id="https-requirements">
            <a href="#https-requirements" class="header-anchor">
              #
            </a>{" "}
            HTTPS requirements
          </h3>
          <p>
            All requests to using the Checkout are made via a secure HTTPS
            connection. However, in order to protect yourself from certain forms
            of man-in-the-middle attacks, you must serve the page containing the
            payment form over HTTPS. e.g https://yourdomain.com/paymentpage
          </p>

          <p>
            If you are not familiar with setting up SSL certificates follow this
            guide to setup on a free SSL certificate your server to enable a
            secure HTTPS connection.
          </p>

          <h2 id="glade-inline-checkout">
            <a href="#glade-inline-checkout" class="header-anchor">
              #
            </a>{" "}
            Glade Inline Checkout
          </h2>

          <p>
            The Inline Checkout solution provides quick access the API into any
            website, CMS, App or Platform. It requires an addon embed script.
          </p>

          <div class="custom-block warning">
            <p class="custom-block-title">NOTE</p>{" "}
            <p>
              We recommend you don't cache the script in your project to avoid
              breaking changes when an update is introduced.
            </p>
          </div>

          <p>
            <strong>Live Inline Script</strong>
          </p>
        </div>
      </main>
    </Layout>
  );
}
