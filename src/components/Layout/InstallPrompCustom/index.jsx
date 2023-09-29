"use client"
import React, { useState, useEffect } from 'react';

// import { cookieStore.set, cookieStore.get } from 'cookies-next';

import { useCookies } from 'next-client-cookies';



import dynamic from 'next/dynamic';
const ModuleLoading = () => <p className="animate-bounce text-white font-bold">Loading...</p>;
const AddToOtherBrowser = dynamic(() => import('./AddToOtherBrowser'), { loading: () => <ModuleLoading /> });

import useUserAgent from './useGetUserAgent';

const AddToHomeScreenPromptType = 'safari' | 'chrome' | 'firefox' | 'other' | 'firefoxIos' | 'chromeIos' | 'samsung' | '';
const COOKIE_NAME = 'addToHomeScreenPrompt';

export default function AddToHomeScreen() {




    const cookieStore = useCookies()


    const [displayPrompt, setDisplayPrompt] = useState('');
    const { userAgent, isMobile, isStandalone, isIOS } = useUserAgent();

    const closePrompt = () => {
        setDisplayPrompt('');
    };

    const doNotShowAgain = () => {
        // Create date 1 year from now
        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        cookieStore.set(COOKIE_NAME, 'dontShow', { expires: date }); // Set cookie for a year
        setDisplayPrompt('');
    };

    useEffect(() => {
        const addToHomeScreenPromptCookie = cookieStore.get(COOKIE_NAME);

        if (addToHomeScreenPromptCookie !== 'dontShow') {
            // Only show prompt if user is on mobile and app is not installed
            if (isMobile && !isStandalone) {
                // if (userAgent === 'Safari') {
                //     setDisplayPrompt('safari');
                // } else if (userAgent === 'Chrome') {
                //     setDisplayPrompt('chrome');
                // } else if (userAgent === 'Firefox') {
                //     setDisplayPrompt('firefox');
                // } else if (userAgent === 'FirefoxiOS') {
                //     setDisplayPrompt('firefoxIos');
                // } else if (userAgent === 'ChromeiOS') {
                //     setDisplayPrompt('chromeIos');
                // } else if (userAgent === 'SamsungBrowser') {
                //     setDisplayPrompt('samsung');
                // } else {
                // }
            }
        } else {
        }
        setDisplayPrompt('other');
    }, [userAgent, isMobile, isStandalone, isIOS]);

    console.log(displayPrompt);
    const Prompt = () => (
        <>
            {
                {'other': <AddToOtherBrowser closePrompt={closePrompt} doNotShowAgain={doNotShowAgain} />,}[displayPrompt]
            }
        </>
    )

    return (
        <>
            {
                displayPrompt !== ''
                    ?
                    <>
                        <div
                            className="fixed top-0 left-0 right-0 bottom-0 bg-black/70 z-50"
                            onClick={closePrompt}
                        >
                            <Prompt />
                        </div>
                    </>
                    :
                    <></>
            }
        </>
    );
}
