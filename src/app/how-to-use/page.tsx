"use client";

import Image from 'next/image';
import { FaDownload, FaMousePointer, FaPalette, FaSave, FaMagic, FaPrint } from 'react-icons/fa';
import StepCard from '@/components/StepCard';

export default function HowToUse() {
    return (
        <div>
            {/* Hero Section */}
            <section className="gradient-bg py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#424242]">
                        كيفية استخدام <span className="text-[#FF8A65]">تكس بينت</span>
                    </h1>
                    <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                        دليل بسيط وسهل لمساعدتك على استخدام برنامج تكس بينت مع طفلك
                    </p>
                    <div className="relative w-full max-w-3xl mx-auto">
                        <Image
                            src="/tux-paint-usage-hero.png"
                            alt="Tux Paint Usage Guide"
                            width={800}
                            height={400}
                            className="rounded-xl shadow-xl tux-shadow"
                        />
                    </div>
                </div>
            </section>

            {/* Installation Steps */}
            <section className="py-12 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title">خطوات تثبيت البرنامج</h2>

                    <div className="space-y-6">
                        <StepCard
                            icon={<FaDownload size={24} />}
                            step={1}
                            title="تحميل البرنامج"
                            description="قم بزيارة الموقع الرسمي لبرنامج تكس بينت (Tux Paint) على tuxpaint.org وانقر على زر التحميل واختر الإصدار المناسب لنظام التشغيل الخاص بك (ويندوز، ماك، لينكس)."
                        />

                        <StepCard
                            icon={<FaMousePointer size={24} />}
                            step={2}
                            title="تثبيت البرنامج"
                            description="بعد اكتمال التحميل، قم بتشغيل ملف التثبيت واتبع التعليمات البسيطة لإكمال عملية التثبيت. اختر اللغة العربية إذا كنت ترغب في ذلك."
                        />

                        <StepCard
                            icon={<FaMousePointer size={24} />}
                            step={3}
                            title="تشغيل البرنامج"
                            description="بعد اكتمال التثبيت، يمكنك تشغيل البرنامج من قائمة ابدأ أو من اختصار سطح المكتب الذي تم إنشاؤه."
                        />
                    </div>
                </div>
            </section>

            {/* Interface Guide */}
            <section className="py-12 md:py-24 bg-[#F5F5F5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title">دليل واجهة البرنامج</h2>

                    <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            <div className="lg:w-1/2">
                                <Image
                                    src="/tux-paint-interface.png"
                                    alt="Tux Paint Interface Guide"
                                    width={600}
                                    height={400}
                                    className="rounded-xl shadow-md"
                                />
                            </div>

                            <div className="lg:w-1/2">
                                <h3 className="text-2xl font-bold mb-4 text-[#424242]">مكونات الواجهة الرئيسية</h3>
                                <ul className="list-disc mr-6 space-y-3 text-gray-600">
                                    <li><span className="font-bold text-[#FF8A65]">شريط الأدوات الأيسر:</span> يحتوي على أدوات الرسم الأساسية مثل الفرشاة، الأختام، الأشكال، النص وغيرها.</li>
                                    <li><span className="font-bold text-[#4FC3F7]">لوحة الألوان السفلية:</span> تحتوي على مجموعة متنوعة من الألوان للاختيار من بينها.</li>
                                    <li><span className="font-bold text-[#FFB74D]">منطقة الرسم المركزية:</span> المساحة البيضاء الكبيرة حيث يمكن للطفل الرسم والإبداع.</li>
                                    <li><span className="font-bold text-[#AED581]">شريط الأدوات الأيمن:</span> يعرض خيارات إضافية للأداة المحددة حاليًا.</li>
                                    <li><span className="font-bold text-[#BA68C8]">شريط القوائم العلوي:</span> يحتوي على أزرار لفتح رسم جديد، حفظ، طباعة، وإنهاء البرنامج.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-6 text-center text-[#424242]">كيفية استخدام الأدوات الأساسية</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <div className="w-12 h-12 bg-[#FFF9C4] rounded-full flex items-center justify-center text-[#FF8A65] mb-4">
                                <FaPalette size={24} />
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-[#424242]">أدوات الرسم</h4>
                            <p className="text-gray-600 mb-4">اضغط على أيقونة الفرشاة في الشريط الأيسر، ثم اختر نوع الفرشاة من الشريط الأيمن. حدد لونًا من لوحة الألوان ثم ارسم في منطقة الرسم المركزية.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <div className="w-12 h-12 bg-[#FFF9C4] rounded-full flex items-center justify-center text-[#4FC3F7] mb-4">
                                <FaMagic size={24} />
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-[#424242]">المؤثرات السحرية</h4>
                            <p className="text-gray-600 mb-4">اضغط على أيقونة العصا السحرية، ثم اختر المؤثر المطلوب من الشريط الأيمن. حرك المؤشر فوق منطقة الرسم لتطبيق المؤثر.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <div className="w-12 h-12 bg-[#FFF9C4] rounded-full flex items-center justify-center text-[#FFB74D] mb-4">
                                <FaSave size={24} />
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-[#424242]">حفظ الرسومات</h4>
                            <p className="text-gray-600 mb-4">انقر على زر الحفظ في الشريط العلوي. اختر اسمًا للملف أو استخدم الاسم التلقائي، ثم انقر على زر &quot;حفظ&quot;.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <div className="w-12 h-12 bg-[#FFF9C4] rounded-full flex items-center justify-center text-[#AED581] mb-4">
                                <FaPrint size={24} />
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-[#424242]">طباعة الرسومات</h4>
                            <p className="text-gray-600 mb-4">انقر على زر الطباعة في الشريط العلوي. تأكد من تشغيل الطابعة وتوصيلها، ثم انقر على &quot;طباعة&quot; في نافذة الطباعة.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tips Section */}
            <section className="py-12 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title">نصائح لاستخدام البرنامج مع الأطفال</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="text-2xl font-bold mb-4 text-[#424242]">للأطفال الصغار (3-6 سنوات)</h3>
                            <ul className="list-disc mr-6 space-y-2 text-gray-600">
                                <li>ابدأ مع أدوات بسيطة مثل الفرشاة والأختام</li>
                                <li>قم بتفعيل الأصوات لمساعدتهم على فهم الواجهة</li>
                                <li>شجعهم على استكشاف الألوان والأشكال المختلفة</li>
                                <li>ساعدهم في البداية على استخدام الماوس أو شاشة اللمس</li>
                                <li>احتفل بإبداعاتهم مهما كانت بسيطة</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="text-2xl font-bold mb-4 text-[#424242]">للأطفال الأكبر سنًا (7-12 سنة)</h3>
                            <ul className="list-disc mr-6 space-y-2 text-gray-600">
                                <li>شجعهم على استخدام المؤثرات السحرية المتقدمة</li>
                                <li>علمهم كيفية حفظ ومشاركة أعمالهم</li>
                                <li>قدم لهم تحديات بسيطة مثل رسم قصة مصورة</li>
                                <li>اشرح لهم كيفية استخدام طبقات الرسم المختلفة</li>
                                <li>اسمح لهم باستكشاف القوالب والأدوات المتقدمة</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Tutorial Section */}
            <section className="py-12 md:py-24 bg-[#F5F5F5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="section-title">شاهد دليل الاستخدام المصور</h2>
                    <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                        شاهد الفيديو التوضيحي لفهم كيفية استخدام برنامج تكس بينت بشكل أفضل
                    </p>

                    <div className="relative w-full max-w-3xl mx-auto bg-white p-3 rounded-2xl shadow-lg overflow-hidden">
                        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                            <div className="w-full h-[400px] bg-gray-200 rounded-xl flex items-center justify-center">
                                <p className="text-gray-500">فيديو توضيحي (قريبًا)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 