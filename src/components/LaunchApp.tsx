"use client"
import { useState } from "react";

export const LaunchApp = () => {
    const [launchStatus, setLaunchStatus] = useState('');

    const launchApp = async () => {
        // First, check if running locally (development environment)
        const isLocalDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

        if (isLocalDev) {
            // If in development, try to use the API
            try {
                const response = await fetch('/api/tuxpaint/run', {
                    method: 'GET'
                });

                if (response.ok) {
                    setLaunchStatus('success');
                    setTimeout(() => setLaunchStatus(''), 5000);
                    return;
                }

                // If API fails, show error with download options
                setLaunchStatus('error');
            } catch (error) {
                console.error('Error launching Tux Paint:', error);
                setLaunchStatus('error');
            }
        } else {
            // In production, show download options
            setLaunchStatus('download');
        }
    };

    return (
        <>
            <button
                onClick={launchApp}
                className="rounded-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 font-medium transition-colors text-xl flex items-center gap-2"
            >
                <span>تشغيل البرنامج الآن</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
            </button>

            {
                launchStatus === 'success' && (
                    <div className="mt-3 p-2 bg-green-100 text-green-800 rounded-md">
                        جاري تشغيل برنامج تكس بينت...
                    </div>
                )
            }

            {
                launchStatus === 'error' && (
                    <div className="mt-3 p-2 bg-red-100 text-red-800 rounded-md">
                        لم نتمكن من تشغيل البرنامج. يرجى التأكد من أنه مثبت على جهازك.
                        <div className="mt-2 text-sm">
                            يمكنك تحميل البرنامج من الروابط أدناه:
                            <div className="flex flex-col gap-2 mt-2">
                                <a href="https://tuxpaint.org/download/windows/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">تحميل للويندوز</a>
                                <a href="https://tuxpaint.org/download/macos/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">تحميل لنظام ماك</a>
                                <a href="https://tuxpaint.org/download/linux/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">تحميل للينكس</a>
                            </div>
                        </div>
                    </div>
                )
            }

            {
                launchStatus === 'download' && (
                    <div className="mt-3 p-2 bg-yellow-100 text-yellow-800 rounded-md">
                        لتشغيل برنامج Tux Paint، يجب تثبيته أولاً على جهازك. يمكنك تحميله من الروابط التالية:
                        <div className="flex flex-col gap-2 mt-2">
                            <a href="https://tuxpaint.org/download/windows/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">تحميل للويندوز</a>
                            <a href="https://tuxpaint.org/download/macos/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">تحميل لنظام ماك</a>
                            <a href="https://tuxpaint.org/download/linux/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">تحميل للينكس</a>
                        </div>
                        <div className="mt-2">
                            بعد التثبيت، يمكنك تشغيل البرنامج من قائمة البرامج على جهازك.
                        </div>
                    </div>
                )
            }
        </>
    );
}


