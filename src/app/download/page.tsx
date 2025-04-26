"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaWindows, FaApple, FaLinux, FaDownload, FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Download() {
    const [showMessage, setShowMessage] = useState(false);

    // Function to handle the launch button click
    const handleLaunchClick = () => {
        // Check if we're in development or production
        const isLocalDev = typeof window !== 'undefined' &&
            (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

        if (isLocalDev) {
            // In development, try to launch via API
            fetch('/api/tuxpaint/run', {
                method: 'GET'
            }).then(response => {
                if (response.ok) {
                    alert('تم تشغيل برنامج تكس بينت بنجاح.');
                } else {
                    setShowMessage(true);
                }
            }).catch(err => {
                console.error(err);
                setShowMessage(true);
            });
        } else {
            // In production, show download message
            setShowMessage(true);
        }
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="gradient-bg py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#424242]">
                        تحميل وتشغيل <span className="text-[#FF8A65]">تكس بينت</span>
                    </h1>
                    <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                        قم بتحميل وتثبيت برنامج تكس بينت أو تشغيله مباشرة إذا كان مثبتاً بالفعل
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <motion.button
                            className="btn-primary flex items-center gap-2 text-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleLaunchClick}
                        >
                            <FaPlay /> تشغيل تكس بينت
                        </motion.button>
                        <Link href="#download-section">
                            <motion.button
                                className="px-6 py-3 bg-white text-[#FF8A65] border border-[#FF8A65] rounded-full font-bold shadow-md hover:bg-gray-50 flex items-center gap-2 text-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaDownload /> تحميل البرنامج
                            </motion.button>
                        </Link>
                    </div>

                    {showMessage && (
                        <div className="mt-6 p-4 bg-yellow-100 text-yellow-800 rounded-lg max-w-2xl mx-auto">
                            <p className="font-medium">يجب أن يكون برنامج Tux Paint مثبتاً على جهازك لتشغيله.</p>
                            <p className="mt-2">إذا لم يكن البرنامج مثبتاً بعد، يمكنك تحميله من قسم التحميل أدناه.</p>
                            <p className="mt-2">بعد التثبيت، استخدم قائمة البرامج على جهازك لتشغيل Tux Paint.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Launch Instructions */}
            <section className="py-12 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title">تشغيل البرنامج</h2>

                    <div className="bg-white p-8 rounded-2xl shadow-md">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="lg:w-1/2">
                                <h3 className="text-2xl font-bold mb-4 text-[#424242]">كيفية تشغيل برنامج تكس بينت</h3>
                                <p className="text-gray-600 mb-6">
                                    بعد تثبيت برنامج تكس بينت على جهازك، يمكنك تشغيله بإحدى الطرق التالية:
                                </p>
                                <ul className="list-disc mr-6 space-y-2 text-gray-600">
                                    <li>من قائمة &quot;ابدأ&quot; في ويندوز، ابحث عن &quot;Tux Paint&quot;</li>
                                    <li>انقر على أيقونة البرنامج على سطح المكتب إن وجدت</li>
                                    <li>في نظام ماك، افتح مجلد التطبيقات وابحث عن Tux Paint</li>
                                    <li>في لينكس، استخدم قائمة التطبيقات أو أدخل الأمر <code dir="ltr">tuxpaint</code> في الطرفية</li>
                                </ul>
                            </div>

                            <div className="lg:w-1/2">
                                <Image
                                    src="/tux-painter-run.png"
                                    alt="Launch Tux Paint"
                                    width={500}
                                    height={300}
                                    className="rounded-xl shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Download Section */}
            <section id="download-section" className="py-12 md:py-24 bg-[#F5F5F5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title">تحميل البرنامج</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        إذا لم يكن البرنامج مثبتًا على جهازك، يمكنك تحميله من الروابط التالية حسب نظام التشغيل لديك.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            className="bg-white p-6 rounded-2xl shadow-md text-center"
                            whileHover={{ y: -5 }}
                        >
                            <div className="w-16 h-16 mx-auto bg-[#F0F8FF] rounded-full flex items-center justify-center text-[#0078D7] mb-4">
                                <FaWindows size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-[#424242]">ويندوز</h3>
                            <p className="text-gray-600 mb-6">
                                متوافق مع ويندوز 7/8/10/11
                            </p>
                            <a
                                href="https://tuxpaint.org/download/windows/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-block"
                            >
                                تحميل لويندوز
                            </a>
                        </motion.div>

                        <motion.div
                            className="bg-white p-6 rounded-2xl shadow-md text-center"
                            whileHover={{ y: -5 }}
                        >
                            <div className="w-16 h-16 mx-auto bg-[#F5F5F7] rounded-full flex items-center justify-center text-[#555555] mb-4">
                                <FaApple size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-[#424242]">ماك</h3>
                            <p className="text-gray-600 mb-6">
                                متوافق مع ماك OS X 10.9 وأحدث
                            </p>
                            <a
                                href="https://tuxpaint.org/download/mac/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-block"
                            >
                                تحميل لماك
                            </a>
                        </motion.div>

                        <motion.div
                            className="bg-white p-6 rounded-2xl shadow-md text-center"
                            whileHover={{ y: -5 }}
                        >
                            <div className="w-16 h-16 mx-auto bg-[#F7F7F7] rounded-full flex items-center justify-center text-[#333333] mb-4">
                                <FaLinux size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-[#424242]">لينكس</h3>
                            <p className="text-gray-600 mb-6">
                                متوافق مع معظم توزيعات لينكس
                            </p>
                            <a
                                href="https://tuxpaint.org/download/linux/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-block"
                            >
                                تحميل للينكس
                            </a>
                        </motion.div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-600 mb-4">
                            لتحميل البرنامج لأنظمة أخرى أو للحصول على إصدارات سابقة، يرجى زيارة:
                        </p>
                        <a
                            href="https://tuxpaint.org/download/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#FF8A65] font-bold hover:underline"
                        >
                            الموقع الرسمي لتكس بينت
                        </a>
                    </div>
                </div>
            </section>

            {/* Installation Instructions */}
            <section className="py-12 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title">تعليمات التثبيت</h2>

                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="text-xl font-bold mb-4 text-[#424242]">تثبيت على ويندوز</h3>
                            <ol className="list-decimal mr-6 space-y-2 text-gray-600">
                                <li>بعد اكتمال التحميل، انقر نقرًا مزدوجًا على ملف التثبيت (tuxpaint-X.X.XX-windows-installer.exe)</li>
                                <li>إذا ظهرت رسالة أمان من ويندوز، انقر على &quot;تشغيل&quot;</li>
                                <li>اتبع تعليمات المثبت، واختر اللغة العربية إذا كنت ترغب في ذلك</li>
                                <li>اختر موقع التثبيت (يفضل ترك الإعدادات الافتراضية)</li>
                                <li>انقر على &quot;تثبيت&quot; وانتظر حتى اكتمال العملية</li>
                                <li>انقر على &quot;إنهاء&quot; لإكمال التثبيت</li>
                            </ol>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="text-xl font-bold mb-4 text-[#424242]">تثبيت على ماك</h3>
                            <ol className="list-decimal mr-6 space-y-2 text-gray-600">
                                <li>بعد اكتمال التحميل، افتح ملف DMG الذي تم تنزيله</li>
                                <li>اسحب أيقونة Tux Paint إلى مجلد التطبيقات</li>
                                <li>عند تشغيل البرنامج لأول مرة، انقر بزر الماوس الأيمن على الأيقونة واختر &quot;فتح&quot;</li>
                                <li>انقر على &quot;فتح&quot; في نافذة التأكيد</li>
                            </ol>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="text-xl font-bold mb-4 text-[#424242]">تثبيت على لينكس</h3>
                            <ol className="list-decimal mr-6 space-y-2 text-gray-600">
                                <li>في معظم توزيعات لينكس، يمكنك تثبيت البرنامج من مدير الحزم الخاص بالتوزيعة</li>
                                <li>في أوبنتو/دبيان: <code dir="ltr">sudo apt-get install tuxpaint</code></li>
                                <li>في فيدورا: <code dir="ltr">sudo dnf install tuxpaint</code></li>
                                <li>أو قم بتثبيت الحزمة التي قمت بتحميلها باستخدام مدير الحزم في نظامك</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* Troubleshooting */}
            <section className="py-12 md:py-24 bg-[#F5F5F5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title">استكشاف الأخطاء وإصلاحها</h2>

                    <div className="bg-white p-6 rounded-2xl shadow-md">
                        <h3 className="text-xl font-bold mb-4 text-[#424242]">مشاكل شائعة وحلولها</h3>

                        <div className="space-y-4">
                            <div>
                                <h4 className="font-bold text-[#424242]">البرنامج لا يعمل بعد النقر على زر التشغيل</h4>
                                <p className="text-gray-600">
                                    تأكد من أن البرنامج مثبت بشكل صحيح على جهازك. يجب تثبيت البرنامج أولاً قبل محاولة تشغيله من خلال الموقع.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#424242]">رسالة خطأ أثناء التثبيت</h4>
                                <p className="text-gray-600">
                                    تأكد من تشغيل المثبت بصلاحيات المسؤول (Administrator). على ويندوز، انقر بزر الماوس الأيمن على ملف التثبيت واختر &quot;تشغيل كمسؤول&quot;.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#424242]">واجهة البرنامج ليست باللغة العربية</h4>
                                <p className="text-gray-600">
                                    بعد تشغيل البرنامج، يمكنك تغيير اللغة من إعدادات البرنامج. انقر على أيقونة الإعدادات واختر اللغة العربية من القائمة.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#424242]">للمزيد من المساعدة</h4>
                                <p className="text-gray-600">
                                    إذا واجهت أي مشاكل أخرى، يمكنك زيارة{' '}
                                    <a
                                        href="https://tuxpaint.org/docs/help/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#FF8A65] hover:underline"
                                    >
                                        صفحة المساعدة الرسمية
                                    </a>{' '}
                                    أو التواصل مع فريق الدعم الفني.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 