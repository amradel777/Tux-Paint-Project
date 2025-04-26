"use client"
import { useState } from "react";

export const LaunchApp = () => {

    const [launchStatus, setLaunchStatus] = useState('');

    const launchApp = async () => {
        try {

            // Fallback to Node.js method
            try {
                const response = await fetch('/api/tuxpaint/run', {
                    method: 'GET'
                });
                if (response.ok) {
                    setLaunchStatus('success');
                    setTimeout(() => setLaunchStatus(''), 5000);
                    return;
                }
            } catch (nodeError) {
                console.log('Node.js launch failed:', nodeError);
            }

            // Fallback to Python method
            try {
                const response = await fetch('/api/launch-tuxpaint-py', {
                    method: 'POST'
                });
                if (response.ok) {
                    setLaunchStatus('success');
                    setTimeout(() => setLaunchStatus(''), 5000);
                    return;
                }
            } catch (pyError) {
                console.log('Python launch failed:', pyError);
            }

            // All methods failed
            setLaunchStatus('error');
        } catch (error) {
            setLaunchStatus('error');
            console.error('خطأ في تشغيل البرنامج:', error);
        }
    }



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
                            يمكنك أيضاً تشغيل البرنامج عبر:
                            <ul className="list-disc list-inside mr-4">
                                <li>فتح موجه الأوامر وتشغيل: tuxpaint</li>
                                <li>تشغيل ملف Python: python -m tuxpaint</li>
                            </ul>
                        </div>
                    </div>
                )
            }

            {
                launchStatus === 'protocol-error' && (
                    <div className="mt-3 p-2 bg-yellow-100 text-yellow-800 rounded-md">
                        يبدو أن متصفحك لا يدعم تشغيل البرنامج مباشرة. يرجى:
                        <ul className="list-disc list-inside mr-4 mt-2">
                            <li>تثبيت برنامج Tux Paint على جهازك</li>
                            <li>تشغيله يدوياً من قائمة ابدأ</li>
                            <li>أو استخدام أحد الروابط أعلاه لتحميل البرنامج</li>
                        </ul>
                    </div>
                )
            }
        </>
    );
}


