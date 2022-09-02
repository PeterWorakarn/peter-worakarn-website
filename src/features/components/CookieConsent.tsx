import React, { useEffect } from 'react'
import 'vanilla-cookieconsent/src/cookieconsent.js'
import 'vanilla-cookieconsent/src/cookieconsent.css'
import { TCookieData } from '../../constant-enum-type/cc-cookie';
import { useRecoilValue } from 'recoil';
import { BioState } from '../../store';

type CookieConsentProps = {
  consentHandler: (value: TCookieData) => void;
}

const CookieConsent: React.FC<CookieConsentProps> = (props) => {
  const bio = useRecoilValue(BioState);

  useEffect(() => {
    if (typeof window !== undefined) {
      const cc = window.initCookieConsent();

      cc.run({
        current_lang: 'en',
        autoclear_cookies: false,                   // default: false
        page_scripts: true,                        // default: false

        // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
        // delay: 0,                               // default: 0
        // auto_language: '',                      // default: null; could also be 'browser' or 'document'
        // autorun: true,                          // default: true
        // force_consent: false,                   // default: false
        // hide_from_bots: false,                  // default: false
        // remove_cookie_tables: false             // default: false
        // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
        // cookie_expiration: 182,                 // default: 182 (days)
        // cookie_necessary_only_expiration: 182   // default: disabled
        // cookie_domain: location.hostname,       // default: current domain
        // cookie_path: '/',                       // default: root
        // cookie_same_site: 'Lax',                // default: 'Lax'
        // use_rfc_cookie: false,                  // default: false
        // revision: 0,                            // default: 0

        // onFirstAction: function (user_preferences, cookie) {
        //   // callback triggered only once on the first accept/reject action
        // },

        onAccept: function (cookie: TCookieData) {
          // callback triggered on the first accept/reject action, and after each page load
          props.consentHandler(cookie);
        },

        onChange: function (cookie: TCookieData, changed_categories: any) {
          props.consentHandler(cookie);
          // callback triggered when user changes preferences after consent has already been given
          if (!cc.allowedCategory('analytics')) {
            document.cookie = `_ga_3JCBS3B628=; path=/; domain=${location.hostname
              }; expires=' + ${new Date(
                0,
              ).toUTCString()}`;
            document.cookie = `_ga=; path=/; domain=${location.hostname
              }; expires=' + ${new Date(
                0,
              ).toUTCString()}`;
          }
        },

        languages: {
          'en': {
            consent_modal: {
              title: 'We use cookies!',
              description: 'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
              primary_btn: {
                text: 'Accept all',
                role: 'accept_all'              // 'accept_selected' or 'accept_all'
              },
              secondary_btn: {
                text: 'Reject all',
                role: 'accept_necessary'        // 'settings' or 'accept_necessary'
              }
            },
            settings_modal: {
              title: 'Cookie preferences',
              save_settings_btn: 'Save settings',
              accept_all_btn: 'Accept all',
              reject_all_btn: 'Reject all',
              close_btn_label: 'Close',
              cookie_table_headers: [
                { col1: 'Name' },
                { col2: 'Domain' },
                { col3: 'Expiration' },
                { col4: 'Description' }
              ],
              blocks: [
                {
                  title: 'Cookie usage 📢',
                  description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="/privacy-policy" class="cc-link">privacy policy</a>.'
                }, {
                  title: 'Strictly necessary cookies',
                  description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                  toggle: {
                    value: 'necessary',
                    enabled: true,
                    readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                  },
                  cookie_table: [             // list of all expected cookies
                    {
                      col1: 'cc_cookie',
                      col2: 'peter-o.tech',
                      col3: '180 days',
                      col4: `Set by the Cookie Consent plugin, this cookie is used to record the user consent for the cookies.`,
                      is_regex: true
                    },
                  ]
                }, {
                  title: 'Performance and Analytics cookies',
                  description: 'These cookies allow the website to remember the choices you have made in the past',
                  toggle: {
                    value: 'analytics',     // your cookie category
                    enabled: false,
                    readonly: false
                  },
                  cookie_table: [             // list of all expected cookies
                    {
                      col1: '^_ga',       // match all cookies starting with "_ga"
                      col2: 'google.com',
                      col3: '2 years',
                      col4: `The _ga cookie, installed by Google Analytics, calculates visitor, session and campaign data and also keeps track of site usage for the site's analytics report. The cookie stores information anonymously and assigns a randomly generated number to recognize unique visitors.`,
                      is_regex: true
                    },
                    {
                      col1: '_ga_3JCBS3B628',
                      col2: 'google.com',
                      col3: '1 minute',
                      col4: `A variation of the _gat cookie set by Google Analytics and Google Tag Manager to allow website owners to track visitor behaviour and measure site performance. The pattern element in the name contains the unique identity number of the account or website it relates to.`,
                    }
                  ]
                }, {
                  title: 'Advertisement and Targeting cookies',
                  description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                  toggle: {
                    value: 'targeting',
                    enabled: false,
                    readonly: false
                  }
                }, {
                  title: 'More information',
                  description: `For any queries in relation to our policy on cookies and your choices, please<a class= "cc-link" href="mailto:worakarn.oun@gmail.com" > contact us</a>.`,
                }
              ]
            }
          }
        }
      });
    }
  }, []);

  return <button
    data-cc="c-settings"
    className="cc-link cc-reconsent fixed left-2 bottom-4 rounded-full p-1 grid place-items-center w-10 h-10 shadow-sm border border-gray-50 bg-white">
    <img src="/icons/cookie.svg" alt="cookie" />
  </button>;
}

export default CookieConsent
