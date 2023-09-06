import React from 'react';

const BtnPrice = (props) => {
    const {noprice, price, tarifName, link, profits} = props;

    return <div class="mw p-4 w-12 w-12 w-full my-4">
    <div class="h-full p-4 rounded-lg border-solid border-2 border-gray-300 flex flex-col relative overflow-hidden">
      <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
        <label className='text-decoration'>{noprice}</label> {price}
      </h2>
      
      <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">{tarifName}</h1>
      { profits.map(el => {
        return <p class="flex items-center justify text-gray-600 mb-2">
        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>{el}
      </p>
      }) }
      <a href={link} class="button flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 focus:outline-none hover:bg-gray-400 rounded">
        Pay Now
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
      </a>  
      {/*<p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>*/}
    </div>
  </div>
    
    /*
    <div className="flex flex-col px-3 py-3 md:w-7/12 lg:w-full relative lg:pt-[40px]">
    <div data-hk="0-0" className="px-3 pt-6 sm:pt-8 sm:px-4 pb-4 sm:pb-6 flex flex-col items-start text-left rtl:text-right gap-4 relative h-full bg-secondary border-md border-secondary rounded-md group-hover:border-accent transition-colors duration-medium p-0 px-3 pt-6 sm:pt-8 sm:px-4 pb-4 sm:pb-6">
        <a data-hk="0-0-0" data-ga-slug="Complete card" data-ga-extra-plans-selected="nordsec_bundle_complete_2y_13800_3_months_extra @ 2-year plan" className="align-bottom transition-colors ease-out focus-visible:outline-none focus-visible:shadow-focus text-primary hover:text-secondary active:text-accent-active w-full min-h-[150px] flex flex-col items-start" href="https://checkout.nordvpn.com/payment/?product_group=nordvpn&amp;nord_origin=nordvpn&amp;product_period=2_year&amp;currency=EUR&amp;step2_nav_off=true&amp;bundle_type=complete" tabIndex="-1" data-pricing-link="true">
            <div data-hk="0-0" className="inline-block rounded-full text-critical bg-critical-subtle body-xs-medium py-1 px-3 mb-2">
                <p data-hk="0-1-0-0" className="">Save 68%</p>
            </div>
            <p data-hk="0-0-0" className=" text-md md:text-lg font-medium text-primary mb-2">Complete</p>
            <p data-hk="0-0-0" className=" heading-lg text-primary mb-2"><span>€5.19<span data-hk="0-0-0" className=" body-md-medium">/mo</span></span>
            </p>
            <p data-hk="0-0-0" className=" mb-2 text-critical-subtle body-sm-medium"><span>+ 3 EXTRA months</span></p>
            <p data-hk="0-0-0" className=" text-secondary body-xs-medium"><s className="font-normal text-tertiary">€447.39</s> <span className="text-tertiary"><span className="text-primary">€140.13</span> for the first 2 years</span>
            </p>
            <p data-hk="0-0-0" className=" text-tertiary body-xs-medium">VAT may apply</p>
        </a>
        <div className="text-center w-full"><a data-hk="0-0-0" role="button" data-ga-slug="Get Complete" data-ga-extra-plans-selected="nordsec_bundle_complete_2y_13800_3_months_extra @ 2-year plan" className="box-border touch-manipulation align-bottom rounded-full transition-colors ease-out focus-visible:outline-none focus-visible:shadow-focus inline-block text-accent hover:text-primary-on-color active:text-primary-on-color hover:bg-accent active:bg-accent-active border-md border-accent active:border-accent-active mt-6 mb-4 w-full py-[11px] body-md-bold px-7" href="https://checkout.nordvpn.com/payment/?product_group=nordvpn&amp;nord_origin=nordvpn&amp;product_period=2_year&amp;currency=EUR&amp;step2_nav_off=true&amp;bundle_type=complete" data-pricing-link="true">Get Complete</a>
            <div className="flex justify-center"><span className="flex"><div className="flex"><svg viewBox="0 0 24 24" aria-label="money back" fill="currentColor" className="ltr:mr-2 rtl:ml-2 inline-block text-success-subtle" width="16" height="16" astro-icon="media:images/checkout/global/icons/24/money-back.svg"><path fillRule="evenodd" d="m12.073.003.144.02 9 2a1 1 0 0 1 .776.861L22 3v11c0 5.523-4.477 10-10 10-5.43 0-9.848-4.326-9.996-9.72L2 14V3a1 1 0 0 1 .671-.945l.112-.032 9-2c.095-.02.193-.027.29-.02zM12 4c-.6 0-1 .4-1 1v1.1c-1.7.2-3 1.6-3 3.4 0 2.1 1.6 2.9 3 3.3v3.1c-.557-.186-.942-.716-.994-1.272L10 14.5c0-.6-.4-1-1-1s-1 .4-1 1c0 1.8 1.3 3.2 3 3.4V19c0 .6.4 1 1 1s1-.4 1-1v-1.1c1.7-.2 3-1.7 3-3.4 0-2.1-1.6-2.9-3-3.3V8.1c.557.186.942.716.994 1.272L14 9.5c0 .6.4 1 1 1s1-.4 1-1c0-1.8-1.3-3.2-3-3.4V5c0-.6-.4-1-1-1zm1 9.3c.7.3 1 .6 1 1.2 0 .7-.4 1.2-1 1.4v-2.6zm-2-5.2v2.6c-.7-.3-1-.6-1-1.2 0-.7.4-1.2 1-1.4z"></path></svg></div><span data-hk="0-0-0" className=" body-md text-start text-tertiary font-medium body-xs">30-day money-back guarantee</span></span>
            </div>
        </div>
        <div className="w-full mt-6 md:hidden">
            <div className="flex items-center bg-primary rounded-sm px-3 py-2 mb-2 min-h-[52px]">
                <svg viewBox="0 0 16 16" aria-label="online security" className="ltr:mr-2 rtl:ml-2 inline-block fill-blue-600 min-w-[16px]" width="16" height="16" astro-icon="media:https://ic.nordcdn.com/v1/q_70/https://s1.nordcdn.com/nordvpn/media/1.2053.0/images/global/icons/16/online-security.svg">
                    <g clipPath="url(#astroicon:media:https://ic.nordcdn.com/v1/q_70/https://s1.nordcdn.com/nordvpn/media/1.2053.0/images/global/icons/16/online-security.svga)">
                        <path d="M14.99 5.03a.556.556 0 0 0 .82-.02c.25-.24.24-.62 0-.85C13.83 2.28 10.98 1.2 8 1.2 5.02 1.2 2.17 2.28.19 4.16a.6.6 0 1 0 .83.87C2.76 3.36 5.33 2.4 8.01 2.4c2.68 0 5.22.96 6.99 2.64l-.01-.01zM7.98 9.58c-.75 0-1.38.65-1.38 1.42 0 .77.63 1.4 1.38 1.4.75 0 1.42-.63 1.42-1.4 0-.77-.63-1.42-1.42-1.42zm3.6-3.06C10.52 5.92 9.29 5.6 8 5.6c-1.92 0-3.7.7-5.02 1.97a.6.6 0 1 0 .83.87C4.9 7.39 6.39 6.81 7.99 6.81c.99 0 1.92.24 2.76.66.2-.37.48-.69.83-.94v-.01zM15.2 10V8.8a2 2 0 0 0-2-2c-.31 0-.61.08-.87.21-.38.18-.68.48-.88.85-.15.28-.25.6-.25.95v1.2c-.44 0-.8.36-.8.8v3.2c0 .44.36.8.8.8h4c.44 0 .8-.36.8-.8v-3.2c0-.44-.36-.8-.8-.8V10zM14 10h-1.6V8.8c0-.08.02-.15.05-.23.1-.32.38-.56.73-.57h.03c.44 0 .8.36.8.8V10H14z"></path>
                    </g>
                    <defs>
                        <clipPath id="astroicon:media:https://ic.nordcdn.com/v1/q_70/https://s1.nordcdn.com/nordvpn/media/1.2053.0/images/global/icons/16/online-security.svga">
                            <path d="M0 0h16v16H0z"></path>
                        </clipPath>
                    </defs>
                </svg><span data-hk="0-0-0" className=" body-md text-start font-bold body-xs">Secure your browsing on 6 devices</span></div>
            <astro-island uid="ZDewi1" data-solid-render-id="s7" component-url="/static/AccordionWrapper.013329ff.js" component-export="AccordionWrapper" renderer-url="/static/client.0e67cc06.js" props="{}" client="visible" opts="{&quot;name&quot;:&quot;AccordionWrapper&quot;,&quot;value&quot;:true}" await-children="">
                <div data-hk="s70-0-0">
                    <astro-slot>
                        <ul>
                            <li className="Accordion__tab border-t-md border-secondary cursor-pointer pt-4 pb-5 px-1 bg-secondary first:border-t-none" data-ga-slug="Feature: Secure, high-speed VPN" data-ga-no-track="" data-ga-no-track-internal="" data-ga-extra-plans-name="nordsec_bundle_complete_2y_13800_3_months_extra">
                                <button className="Accordion__header flex w-full justify-between font-medium mb-0 open:mb-3 group transition-all focus-visible:outline-none focus-visible:shadow-focus" aria-expanded="false">
                                    <div className="flex">
                                        <svg viewBox="0 0 16 16" aria-label="tick light" className="ltr:mr-3 rtl:ml-3 mt-1 shrink-0 fill-green-600" fill="currentColor" width="16" height="16" astro-icon="media:images/global/icons/16/tick-light.svg">
                                            <path d="M14.3 2.3 5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"></path>
                                        </svg>
                                        <div className="text-start">
                                            <p data-hk="0-0-0" className=" relative body-sm text-primary font-normal underline"> Secure, high-speed VPN</p>
                                        </div>
                                    </div><span className="ltr:ml-4 rtl:mr-4 mt-0.5"><svg viewBox="0 0 16 16" aria-label="chevron-down" fill="currentColor" className="transition-transform group-open:rotate-180 text-secondary" width="16" height="16" astro-icon="media:chevron-down"><path d="M13.215 6.833 8.438 11.41c-.16.135-.31.19-.438.19a.635.635 0 0 1-.415-.167l-4.8-4.6c-.24-.228-.247-.63-.018-.848a.597.597 0 0 1 .848-.018L8 10.17l4.385-4.2a.597.597 0 0 1 .848.018c.23.215.222.617-.018.845z"></path></svg></span></button>
                                <section className="Accordion__panel overflow-hidden transition-all hidden ltr:ml-7 rtl:mr-7">
                                    <p data-hk="0-0-0" className=" text-primary body-xs"><span className="inline-block">Encrypt your internet connection, reclaim digital privacy, and access your favorite content with the fastest VPN on the market. Choose from VPN servers in 59 countries, and protect up to 6 devices at once.</span></p>
                                </section>
                            </li>
                            <li className="Accordion__tab border-t-md border-secondary cursor-pointer pt-4 pb-5 px-1 bg-secondary first:border-t-none" data-ga-slug="Feature: Malware protection" data-ga-no-track="" data-ga-no-track-internal="" data-ga-extra-plans-name="nordsec_bundle_complete_2y_13800_3_months_extra">
                                <button className="Accordion__header flex w-full justify-between font-medium mb-0 open:mb-3 group transition-all focus-visible:outline-none focus-visible:shadow-focus" aria-expanded="false">
                                    <div className="flex">
                                        <svg viewBox="0 0 16 16" aria-label="tick light" className="ltr:mr-3 rtl:ml-3 mt-1 shrink-0 fill-green-600" fill="currentColor" width="16" height="16" astro-icon="media:images/global/icons/16/tick-light.svg">
                                            <path d="M14.3 2.3 5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"></path>
                                        </svg>
                                        <div className="text-start">
                                            <p data-hk="0-0-0" className=" relative body-sm text-primary font-normal underline"> Malware protection</p>
                                        </div>
                                    </div><span className="ltr:ml-4 rtl:mr-4 mt-0.5"><svg viewBox="0 0 16 16" aria-label="chevron-down" fill="currentColor" className="transition-transform group-open:rotate-180 text-secondary" width="16" height="16" astro-icon="media:chevron-down"><path d="M13.215 6.833 8.438 11.41c-.16.135-.31.19-.438.19a.635.635 0 0 1-.415-.167l-4.8-4.6c-.24-.228-.247-.63-.018-.848a.597.597 0 0 1 .848-.018L8 10.17l4.385-4.2a.597.597 0 0 1 .848.018c.23.215.222.617-.018.845z"></path></svg></span></button>
                                <section className="Accordion__panel overflow-hidden transition-all hidden ltr:ml-7 rtl:mr-7" >
                                    <p data-hk="0-0-0" className=" text-primary body-xs"><span className="inline-block">Get warnings about unsafe sites and automatically scan all downloaded files and attachments for malware. If they’re not safe to open, they’re automatically deleted to prevent any damage to your device.</span></p>
                                </section>
                            </li>
                            <li className="Accordion__tab border-t-md border-secondary cursor-pointer pt-4 pb-5 px-1 bg-secondary first:border-t-none" data-ga-slug="Feature: Tracker and ad blocker" data-ga-no-track="" data-ga-no-track-internal="" data-ga-extra-plans-name="nordsec_bundle_complete_2y_13800_3_months_extra">
                                <button className="Accordion__header flex w-full justify-between font-medium mb-0 open:mb-3 group transition-all focus-visible:outline-none focus-visible:shadow-focus" aria-expanded="false">
                                    <div className="flex">
                                        <svg viewBox="0 0 16 16" aria-label="tick light" className="ltr:mr-3 rtl:ml-3 mt-1 shrink-0 fill-green-600" fill="currentColor" width="16" height="16" astro-icon="media:images/global/icons/16/tick-light.svg">
                                            <path d="M14.3 2.3 5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"></path>
                                        </svg>
                                        <div className="text-start">
                                            <p data-hk="0-0-0" className=" relative body-sm text-primary font-normal underline"> Tracker and ad blocker</p>
                                        </div>
                                    </div><span className="ltr:ml-4 rtl:mr-4 mt-0.5"><svg viewBox="0 0 16 16" aria-label="chevron-down" fill="currentColor" className="transition-transform group-open:rotate-180 text-secondary" width="16" height="16" astro-icon="media:chevron-down"><path d="M13.215 6.833 8.438 11.41c-.16.135-.31.19-.438.19a.635.635 0 0 1-.415-.167l-4.8-4.6c-.24-.228-.247-.63-.018-.848a.597.597 0 0 1 .848-.018L8 10.17l4.385-4.2a.597.597 0 0 1 .848.018c.23.215.222.617-.018.845z"></path></svg></span></button>
                                <section className="Accordion__panel overflow-hidden transition-all hidden ltr:ml-7 rtl:mr-7" >
                                    <p data-hk="0-0-0" className=" text-primary body-xs"><span className="inline-block">Block annoying ads, pop-ups, and banners, and stop third-party websites from tracking your online activity. Enjoy a safer, smoother, and faster browsing experience on all sites, and on every device.</span></p>
                                </section>
                            </li>
                        </ul>
                    </astro-slot>
                </div>
            </astro-island>
            <div className="flex items-center bg-primary rounded-sm px-3 py-2 mb-2 min-h-[52px] mt-2">
                <svg viewBox="0 0 16 16" aria-label="lock keyhole" className="ltr:mr-2 rtl:ml-2 inline-block fill-blue-600 min-w-[16px]" width="16" height="16" astro-icon="media:https://ic.nordcdn.com/v1/q_70/https://s1.nordcdn.com/nordvpn/media/1.2053.0/images/global/icons/16/lock-keyhole.svg">
                    <path d="M8.6 11.2c0 .333-.268.6-.6.6a.599.599 0 0 1-.6-.6V9.6a.6.6 0 1 1 1.2 0v1.6zM8 1.6a3.2 3.2 0 0 1 3.2 3.2v1.6h.8c.882 0 1.6.718 1.6 1.6v4.8c0 .882-.718 1.6-1.6 1.6H4a1.6 1.6 0 0 1-1.6-1.6V8A1.6 1.6 0 0 1 4 6.4h.8V4.8A3.2 3.2 0 0 1 8 1.6zm0 1.2a2 2 0 0 0-2 2v1.6h4V4.8a2 2 0 0 0-2-2zM4 7.6a.4.4 0 0 0-.4.4v4.8c0 .22.179.4.4.4h8c.22 0 .4-.18.4-.4V8c0-.22-.18-.4-.4-.4H4z"></path>
                </svg><span data-hk="0-0-0" className=" body-md text-start font-bold body-xs">Check for breaches and protect your passwords</span></div>
            <astro-island uid="1IliBG" data-solid-render-id="s5" component-url="/static/AccordionWrapper.013329ff.js" component-export="AccordionWrapper" renderer-url="/static/client.0e67cc06.js" props="{}" client="visible" opts="{&quot;name&quot;:&quot;AccordionWrapper&quot;,&quot;value&quot;:true}" await-children="">
                <div data-hk="s50-0-0">
                    <astro-slot>
                        <ul>
                            <li className="Accordion__tab border-t-md border-secondary cursor-pointer pt-4 pb-5 px-1 bg-secondary first:border-t-none" data-ga-slug="Feature: Cross-platform password manager" data-ga-no-track="" data-ga-no-track-internal="" data-ga-extra-plans-name="nordsec_bundle_complete_2y_13800_3_months_extra">
                                <button className="Accordion__header flex w-full justify-between font-medium mb-0 open:mb-3 group transition-all focus-visible:outline-none focus-visible:shadow-focus" aria-expanded="false">
                                    <div className="flex">
                                        <svg viewBox="0 0 16 16" aria-label="tick light" className="ltr:mr-3 rtl:ml-3 mt-1 shrink-0 fill-green-600" fill="currentColor" width="16" height="16" astro-icon="media:images/global/icons/16/tick-light.svg">
                                            <path d="M14.3 2.3 5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"></path>
                                        </svg>
                                        <div className="text-start">
                                            <p data-hk="0-0-0" className=" relative body-sm text-primary font-normal underline"> Cross-platform password manager</p>
                                        </div>
                                    </div><span className="ltr:ml-4 rtl:mr-4 mt-0.5"><svg viewBox="0 0 16 16" aria-label="chevron-down" fill="currentColor" className="transition-transform group-open:rotate-180 text-secondary" width="16" height="16" astro-icon="media:chevron-down"><path d="M13.215 6.833 8.438 11.41c-.16.135-.31.19-.438.19a.635.635 0 0 1-.415-.167l-4.8-4.6c-.24-.228-.247-.63-.018-.848a.597.597 0 0 1 .848-.018L8 10.17l4.385-4.2a.597.597 0 0 1 .848.018c.23.215.222.617-.018.845z"></path></svg></span></button>
                                <section className="Accordion__panel overflow-hidden transition-all hidden ltr:ml-7 rtl:mr-7" >
                                    <p data-hk="0-0-0" className=" text-primary body-xs"><span className="inline-block">Sync and backup passwords across all your devices automatically. Access them in an encrypted password vault (digital password safe) from anywhere — whether it’s a browser extension or the app.</span></p>
                                </section>
                            </li>
                            <li className="Accordion__tab border-t-md border-secondary cursor-pointer pt-4 pb-5 px-1 bg-secondary first:border-t-none" data-ga-slug="Feature: Data breach scanner" data-ga-no-track="" data-ga-no-track-internal="" data-ga-extra-plans-name="nordsec_bundle_complete_2y_13800_3_months_extra">
                                <button className="Accordion__header flex w-full justify-between font-medium mb-0 open:mb-3 group transition-all focus-visible:outline-none focus-visible:shadow-focus" aria-expanded="false">
                                    <div className="flex">
                                        <svg viewBox="0 0 16 16" aria-label="tick light" className="ltr:mr-3 rtl:ml-3 mt-1 shrink-0 fill-green-600" fill="currentColor" width="16" height="16" astro-icon="media:images/global/icons/16/tick-light.svg">
                                            <path d="M14.3 2.3 5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"></path>
                                        </svg>
                                        <div className="text-start">
                                            <p data-hk="0-0-0" className=" relative body-sm text-primary font-normal underline"> Data Breach Scanner</p>
                                        </div>
                                    </div><span className="ltr:ml-4 rtl:mr-4 mt-0.5"><svg viewBox="0 0 16 16" aria-label="chevron-down" fill="currentColor" className="transition-transform group-open:rotate-180 text-secondary" width="16" height="16" astro-icon="media:chevron-down"><path d="M13.215 6.833 8.438 11.41c-.16.135-.31.19-.438.19a.635.635 0 0 1-.415-.167l-4.8-4.6c-.24-.228-.247-.63-.018-.848a.597.597 0 0 1 .848-.018L8 10.17l4.385-4.2a.597.597 0 0 1 .848.018c.23.215.222.617-.018.845z"></path></svg></span></button>
                                <section className="Accordion__panel overflow-hidden transition-all hidden ltr:ml-7 rtl:mr-7" >
                                    <p data-hk="0-0-0" className=" text-primary body-xs"><span className="inline-block">Check if your passwords, email addresses, or credit card details have appeared in a data breach (and how it might have happened). Get tailored recommendations, so it doesn’t happen again.</span></p>
                                </section>
                            </li>
                        </ul>
                    </astro-slot>
                </div>
            </astro-island>
            <div className="flex items-center bg-primary rounded-sm px-3 py-2 mb-2 min-h-[52px] mt-2">
                <svg viewBox="0 0 16 16" aria-label="file shield" className="ltr:mr-2 rtl:ml-2 inline-block fill-blue-600 min-w-[16px]" width="16" height="16" astro-icon="media:https://ic.nordcdn.com/v1/q_70/https://s1.nordcdn.com/nordvpn/media/1.2053.0/images/global/icons/16/file-shield.svg">
                    <path d="M2.378 13.2h6.19c.275.36.602.703.987 1.01-.225.122-.482.19-.755.19H2.4a1.6 1.6 0 0 1-1.6-1.6V3.2a1.6 1.6 0 0 1 1.6-1.6h4.138c.425 0 .83.169 1.13.469l2.265 2.264c.3.3.467.705.467 1.13v1.312l-1.2.48V5.6h-2a.8.8 0 0 1-.8-.8v-2h-4a.4.4 0 0 0-.4.4v9.6c0 .22.18.4.4.4h-.022zm9-5.957a.596.596 0 0 1 .444 0l3 1.2A.603.603 0 0 1 15.2 9c0 1.582-.647 4.22-3.37 5.355a.61.61 0 0 1-.46 0C8.648 13.22 8 10.582 8 9a.57.57 0 0 1 .378-.557l3-1.2zm.222 1.202v4.697c1.705-.824 2.285-2.474 2.385-3.764L11.6 8.445z"></path>
                </svg><span data-hk="0-0-0" className=" body-md text-start font-bold body-xs">Safely store and share 1 TB of files</span></div>
            <astro-island uid="1Oeix6" data-solid-render-id="s6" component-url="/static/AccordionWrapper.013329ff.js" component-export="AccordionWrapper" renderer-url="/static/client.0e67cc06.js" props="{}" client="visible" opts="{&quot;name&quot;:&quot;AccordionWrapper&quot;,&quot;value&quot;:true}" await-children="">
                <div data-hk="s60-0-0">
                    <astro-slot>
                        <ul>
                            <li className="Accordion__tab border-t-md border-secondary cursor-pointer pt-4 pb-5 px-1 bg-secondary first:border-t-none" data-ga-slug="Feature: 1 TB cloud storage" data-ga-no-track="" data-ga-no-track-internal="" data-ga-extra-plans-name="nordsec_bundle_complete_2y_13800_3_months_extra">
                                <button className="Accordion__header flex w-full justify-between font-medium mb-0 open:mb-3 group transition-all focus-visible:outline-none focus-visible:shadow-focus" aria-expanded="false">
                                    <div className="flex">
                                        <svg viewBox="0 0 16 16" aria-label="tick light" className="ltr:mr-3 rtl:ml-3 mt-1 shrink-0 fill-green-600" fill="currentColor" width="16" height="16" astro-icon="media:images/global/icons/16/tick-light.svg">
                                            <path d="M14.3 2.3 5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"></path>
                                        </svg>
                                        <div className="text-start">
                                            <p data-hk="0-0-0" className=" relative body-sm text-primary font-normal underline"> 1 TB cloud storage</p>
                                        </div>
                                    </div><span className="ltr:ml-4 rtl:mr-4 mt-0.5"><svg viewBox="0 0 16 16" aria-label="chevron-down" fill="currentColor" className="transition-transform group-open:rotate-180 text-secondary" width="16" height="16" astro-icon="media:chevron-down"><path d="M13.215 6.833 8.438 11.41c-.16.135-.31.19-.438.19a.635.635 0 0 1-.415-.167l-4.8-4.6c-.24-.228-.247-.63-.018-.848a.597.597 0 0 1 .848-.018L8 10.17l4.385-4.2a.597.597 0 0 1 .848.018c.23.215.222.617-.018.845z"></path></svg></span></button>
                                <section className="Accordion__panel overflow-hidden transition-all hidden ltr:ml-7 rtl:mr-7" >
                                    <p data-hk="0-0-0" className=" text-primary body-xs"><span className="inline-block">Secure any type of files with end-to-end encryption and keep them handy in a private, zero-knowledge cloud. Easy to sync across your devices and safely share with others.</span></p>
                                </section>
                            </li>
                            <li className="Accordion__tab border-t-md border-secondary cursor-pointer pt-4 pb-5 px-1 bg-secondary first:border-t-none" data-ga-slug="Feature: Next-generation file encryption" data-ga-no-track="" data-ga-no-track-internal="" data-ga-extra-plans-name="nordsec_bundle_complete_2y_13800_3_months_extra">
                                <button className="Accordion__header flex w-full justify-between font-medium mb-0 open:mb-3 group transition-all focus-visible:outline-none focus-visible:shadow-focus" aria-expanded="false">
                                    <div className="flex">
                                        <svg viewBox="0 0 16 16" aria-label="tick light" className="ltr:mr-3 rtl:ml-3 mt-1 shrink-0 fill-green-600" fill="currentColor" width="16" height="16" astro-icon="media:images/global/icons/16/tick-light.svg">
                                            <path d="M14.3 2.3 5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"></path>
                                        </svg>
                                        <div className="text-start">
                                            <p data-hk="0-0-0" className=" relative body-sm text-primary font-normal underline"> Next-generation file encryption</p>
                                        </div>
                                    </div><span className="ltr:ml-4 rtl:mr-4 mt-0.5"><svg viewBox="0 0 16 16" aria-label="chevron-down" fill="currentColor" className="transition-transform group-open:rotate-180 text-secondary" width="16" height="16" astro-icon="media:chevron-down"><path d="M13.215 6.833 8.438 11.41c-.16.135-.31.19-.438.19a.635.635 0 0 1-.415-.167l-4.8-4.6c-.24-.228-.247-.63-.018-.848a.597.597 0 0 1 .848-.018L8 10.17l4.385-4.2a.597.597 0 0 1 .848.018c.23.215.222.617-.018.845z"></path></svg></span></button>
                                <section className="Accordion__panel overflow-hidden transition-all hidden ltr:ml-7 rtl:mr-7" >
                                    <p data-hk="0-0-0" className=" text-primary body-xs"><span className="inline-block">Make use of next-generation ciphers and proven cryptography algorithms to keep your files, identity data, and digital signatures safe on your devices and the cloud.</span></p>
                                </section>
                            </li>
                        </ul>
                    </astro-slot>
                </div>
            </astro-island>
        </div>
        <div className="w-full mt-6 hidden md:block">
            <div className="flex items-center bg-primary rounded-sm px-3 py-2 mb-2 min-h-[52px]">
                <svg viewBox="0 0 16 16" aria-label="online security" className="ltr:mr-2 rtl:ml-2 inline-block fill-blue-600 min-w-[16px]" width="16" height="16" astro-icon="media:https://ic.nordcdn.com/v1/q_70/https://s1.nordcdn.com/nordvpn/media/1.2053.0/images/global/icons/16/online-security.svg">
                    <g clipPath="url(#astroicon:media:https://ic.nordcdn.com/v1/q_70/https://s1.nordcdn.com/nordvpn/media/1.2053.0/images/global/icons/16/online-security.svga)">
                        <path d="M14.99 5.03a.556.556 0 0 0 .82-.02c.25-.24.24-.62 0-.85C13.83 2.28 10.98 1.2 8 1.2 5.02 1.2 2.17 2.28.19 4.16a.6.6 0 1 0 .83.87C2.76 3.36 5.33 2.4 8.01 2.4c2.68 0 5.22.96 6.99 2.64l-.01-.01zM7.98 9.58c-.75 0-1.38.65-1.38 1.42 0 .77.63 1.4 1.38 1.4.75 0 1.42-.63 1.42-1.4 0-.77-.63-1.42-1.42-1.42zm3.6-3.06C10.52 5.92 9.29 5.6 8 5.6c-1.92 0-3.7.7-5.02 1.97a.6.6 0 1 0 .83.87C4.9 7.39 6.39 6.81 7.99 6.81c.99 0 1.92.24 2.76.66.2-.37.48-.69.83-.94v-.01zM15.2 10V8.8a2 2 0 0 0-2-2c-.31 0-.61.08-.87.21-.38.18-.68.48-.88.85-.15.28-.25.6-.25.95v1.2c-.44 0-.8.36-.8.8v3.2c0 .44.36.8.8.8h4c.44 0 .8-.36.8-.8v-3.2c0-.44-.36-.8-.8-.8V10zM14 10h-1.6V8.8c0-.08.02-.15.05-.23.1-.32.38-.56.73-.57h.03c.44 0 .8.36.8.8V10H14z"></path>
                    </g>
                    <defs>
                        <clipPath id="astroicon:media:https://ic.nordcdn.com/v1/q_70/https://s1.nordcdn.com/nordvpn/media/1.2053.0/images/global/icons/16/online-security.svga">
                            <path d="M0 0h16v16H0z"></path>
                        </clipPath>
                    </defs>
                </svg><span data-hk="0-0-0" className=" body-md text-start font-bold body-xs">Secure your browsing on 6 devices</span></div>
            <div className="flex py-2">
                <svg viewBox="0 0 16 16" aria-label="tick light" fill="currentColor" className="fill-green-600 ltr:mr-3 rtl:ml-3 mt-1 shrink-0" width="16" height="16" astro-icon="media:images/global/icons/16/tick-light.svg">
                    <path d="M14.3 2.3 5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"></path>
                </svg>
                <div>
                    <div className="flex flex-col xl:flex-row">
                        <button data-hk="0-0-0" data-ga-slug="Modal open: Feature: Secure, high-speed VPN" data-ga-extra-plans-name="nordsec_bundle_complete_2y_13800_3_months_extra" className="align-bottom transition-colors ease-out focus-visible:outline-none focus-visible:shadow-focus text-primary hover:text-secondary active:text-accent-active underline relative body-sm text-start" data-modal-open="modal-2djbgf-SecurehighspeedVPN">Secure, high-speed VPN</button>
                    </div>
                </div>
            </div>
            <div className="flex py-2">
                <svg viewBox="0 0 16 16" aria-label="tick light" fill="currentColor" className="fill-green-600 ltr:mr-3 rtl:ml-3 mt-1 shrink-0" width="16" height="16" astro-icon="media:images/global/icons/16/tick-light.svg">
                    <path d="M14.3 2.3 5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"></path>
                </svg>
                <div>
                    <div className="flex flex-col xl:flex-row">
                        <button data-hk="0-0-0" data-ga-slug="Modal open: Feature: Malware protection" data-ga-extra-plans-name="nordsec_bundle_complete_2y_13800_3_months_extra" className="align-bottom transition-colors ease-out focus-visible:outline-none focus-visible:shadow-focus text-primary hover:text-secondary active:text-accent-active underline relative body-sm text-start" data-modal-open="modal-2djbgf-Malwareprotection">Malware protection</button>
                    </div>
                </div>
            </div>
            <div className="flex py-2">
                <svg viewBox="0 0 16 16" aria-label="tick light" fill="currentColor" className="fill-green-600 ltr:mr-3 rtl:ml-3 mt-1 shrink-0" width="16" height="16" astro-icon="media:images/global/icons/16/tick-light.svg">
                    <path d="M14.3 2.3 5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"></path>
                </svg>
                <div>
                    <div className="flex flex-col xl:flex-row">
                        <button data-hk="0-0-0" data-ga-slug="Modal open: Feature: Tracker and ad blocker" data-ga-extra-plans-name="nordsec_bundle_complete_2y_13800_3_months_extra" className="align-bottom transition-colors ease-out focus-visible:outline-none focus-visible:shadow-focus text-primary hover:text-secondary active:text-accent-active underline relative body-sm text-start" data-modal-open="modal-2djbgf-Trackerandadblocker">Tracker and ad blocker</button>
                    </div>
                </div>
            </div>
            <div className="flex items-center bg-primary rounded-sm px-3 py-2 mb-2 min-h-[52px] mt-2">
                <svg viewBox="0 0 16 16" aria-label="lock keyhole" className="ltr:mr-2 rtl:ml-2 inline-block fill-blue-600 min-w-[16px]" width="16" height="16" astro-icon="media:https://ic.nordcdn.com/v1/q_70/https://s1.nordcdn.com/nordvpn/media/1.2053.0/images/global/icons/16/lock-keyhole.svg">
                    <path d="M8.6 11.2c0 .333-.268.6-.6.6a.599.599 0 0 1-.6-.6V9.6a.6.6 0 1 1 1.2 0v1.6zM8 1.6a3.2 3.2 0 0 1 3.2 3.2v1.6h.8c.882 0 1.6.718 1.6 1.6v4.8c0 .882-.718 1.6-1.6 1.6H4a1.6 1.6 0 0 1-1.6-1.6V8A1.6 1.6 0 0 1 4 6.4h.8V4.8A3.2 3.2 0 0 1 8 1.6zm0 1.2a2 2 0 0 0-2 2v1.6h4V4.8a2 2 0 0 0-2-2zM4 7.6a.4.4 0 0 0-.4.4v4.8c0 .22.179.4.4.4h8c.22 0 .4-.18.4-.4V8c0-.22-.18-.4-.4-.4H4z"></path>
                </svg><span data-hk="0-0-0" className=" body-md text-start font-bold body-xs">Check for breaches and protect your passwords</span></div>
            <div className="flex py-2">
                <svg viewBox="0 0 16 16" aria-label="tick light" fill="currentColor" className="fill-green-600 ltr:mr-3 rtl:ml-3 mt-1 shrink-0" width="16" height="16" astro-icon="media:images/global/icons/16/tick-light.svg">
                    <path d="M14.3 2.3 5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"></path>
                </svg>
                <div>
                    <div className="flex flex-col xl:flex-row">
                        <button data-hk="0-0-0" data-ga-slug="Modal open: Feature: Cross-platform password manager" data-ga-extra-plans-name="nordsec_bundle_complete_2y_13800_3_months_extra" className="align-bottom transition-colors ease-out focus-visible:outline-none focus-visible:shadow-focus text-primary hover:text-secondary active:text-accent-active underline relative body-sm text-start" data-modal-open="modal-2djbgf-Crossplatformpasswordmanager">Cross-platform password manager</button>
                    </div>
                </div>
            </div>
            <div className="flex py-2">
                <svg viewBox="0 0 16 16" aria-label="tick light" fill="currentColor" className="fill-green-600 ltr:mr-3 rtl:ml-3 mt-1 shrink-0" width="16" height="16" astro-icon="media:images/global/icons/16/tick-light.svg">
                    <path d="M14.3 2.3 5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"></path>
                </svg>
                <div>
                    <div className="flex flex-col xl:flex-row">
                        <button data-hk="0-0-0" data-ga-slug="Modal open: Feature: Data breach scanner" data-ga-extra-plans-name="nordsec_bundle_complete_2y_13800_3_months_extra" className="align-bottom transition-colors ease-out focus-visible:outline-none focus-visible:shadow-focus text-primary hover:text-secondary active:text-accent-active underline relative body-sm text-start" data-modal-open="modal-2djbgf-Databreachscanner">Data Breach Scanner</button>
                    </div>
                </div>
            </div>
            <div className="flex items-center bg-primary rounded-sm px-3 py-2 mb-2 min-h-[52px] mt-2">
                <svg viewBox="0 0 16 16" aria-label="file shield" className="ltr:mr-2 rtl:ml-2 inline-block fill-blue-600 min-w-[16px]" width="16" height="16" astro-icon="media:https://ic.nordcdn.com/v1/q_70/https://s1.nordcdn.com/nordvpn/media/1.2053.0/images/global/icons/16/file-shield.svg">
                    <path d="M2.378 13.2h6.19c.275.36.602.703.987 1.01-.225.122-.482.19-.755.19H2.4a1.6 1.6 0 0 1-1.6-1.6V3.2a1.6 1.6 0 0 1 1.6-1.6h4.138c.425 0 .83.169 1.13.469l2.265 2.264c.3.3.467.705.467 1.13v1.312l-1.2.48V5.6h-2a.8.8 0 0 1-.8-.8v-2h-4a.4.4 0 0 0-.4.4v9.6c0 .22.18.4.4.4h-.022zm9-5.957a.596.596 0 0 1 .444 0l3 1.2A.603.603 0 0 1 15.2 9c0 1.582-.647 4.22-3.37 5.355a.61.61 0 0 1-.46 0C8.648 13.22 8 10.582 8 9a.57.57 0 0 1 .378-.557l3-1.2zm.222 1.202v4.697c1.705-.824 2.285-2.474 2.385-3.764L11.6 8.445z"></path>
                </svg><span data-hk="0-0-0" className=" body-md text-start font-bold body-xs">Safely store and share 1 TB of files</span></div>
            <div className="flex py-2">
                <svg viewBox="0 0 16 16" aria-label="tick light" fill="currentColor" className="fill-green-600 ltr:mr-3 rtl:ml-3 mt-1 shrink-0" width="16" height="16" astro-icon="media:images/global/icons/16/tick-light.svg">
                    <path d="M14.3 2.3 5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"></path>
                </svg>
                <div>
                    <div className="flex flex-col xl:flex-row">
                        <button data-hk="0-0-0" data-ga-slug="Modal open: Feature: 1 TB cloud storage" data-ga-extra-plans-name="nordsec_bundle_complete_2y_13800_3_months_extra" className="align-bottom transition-colors ease-out focus-visible:outline-none focus-visible:shadow-focus text-primary hover:text-secondary active:text-accent-active underline relative body-sm text-start" data-modal-open="modal-2djbgf-1TBcloudstorage">1 TB cloud storage</button>
                    </div>
                </div>
            </div>
            <div className="flex py-2">
                <svg viewBox="0 0 16 16" aria-label="tick light" fill="currentColor" className="fill-green-600 ltr:mr-3 rtl:ml-3 mt-1 shrink-0" width="16" height="16" astro-icon="media:images/global/icons/16/tick-light.svg">
                    <path d="M14.3 2.3 5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"></path>
                </svg>
                <div>
                    <div className="flex flex-col xl:flex-row">
                        <button data-hk="0-0-0" data-ga-slug="Modal open: Feature: Next-generation file encryption" data-ga-extra-plans-name="nordsec_bundle_complete_2y_13800_3_months_extra" className="align-bottom transition-colors ease-out focus-visible:outline-none focus-visible:shadow-focus text-primary hover:text-secondary active:text-accent-active underline relative body-sm text-start" data-modal-open="modal-2djbgf-Nextgenerationfileencryption">Next-generation file encryption</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> */
}

export default BtnPrice;
