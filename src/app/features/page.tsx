import Image from 'next/image';
import {
    FaPalette, FaMagic, FaLightbulb, FaLock, FaGlobeAmericas, FaSmile,
    FaImages, FaVolumeUp, FaDesktop, FaLaptop, FaTabletAlt, FaHandPointer
} from 'react-icons/fa';
import FeatureCard from '@/components/FeatureCard';

export default function Features() {
    return (
        <div>
            {/* Hero Section */}
            <section className="gradient-bg py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#424242]">
                        مميزات برنامج <span className="text-[#FF8A65]">تكس بينت</span>
                    </h1>
                    <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                        اكتشف الميزات الرائعة التي تجعل برنامج تكس بينت خيارًا مثاليًا للأطفال
                    </p>
                    <div className="relative w-full max-w-3xl mx-auto">
                        <Image
                            src="/tux-paint-features-hero.png"
                            alt="Tux Paint Features"
                            width={800}
                            height={400}
                            className="rounded-xl shadow-xl tux-shadow"
                        />
                    </div>
                </div>
            </section>

            {/* Main Features */}
            <section className="py-12 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title">المميزات الرئيسية</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<FaPalette size={24} />}
                            title="أدوات رسم متنوعة"
                            description="فرش، أختام، أشكال، وأدوات متعددة تناسب كافة الاحتياجات الإبداعية للأطفال."
                            color="bg-[#FF8A65]"
                        />

                        <FeatureCard
                            icon={<FaMagic size={24} />}
                            title="مؤثرات سحرية"
                            description="مؤثرات خاصة ممتعة مثل التموج، التشويش، الألوان المتدرجة وغيرها."
                            color="bg-[#4FC3F7]"
                        />

                        <FeatureCard
                            icon={<FaLightbulb size={24} />}
                            title="سهل التعلم"
                            description="واجهة بديهية مصممة خصيصًا للأطفال مع تعليمات صوتية وبصرية مساعدة."
                            color="bg-[#FFB74D]"
                        />

                        <FeatureCard
                            icon={<FaLock size={24} />}
                            title="آمن للأطفال"
                            description="بيئة آمنة بدون إعلانات أو مشتريات داخل التطبيق أو مخاطر عبر الإنترنت."
                            color="bg-[#AED581]"
                        />

                        <FeatureCard
                            icon={<FaGlobeAmericas size={24} />}
                            title="متعدد اللغات"
                            description="متوفر بأكثر من 100 لغة مما يجعله مناسبًا للأطفال من مختلف أنحاء العالم."
                            color="bg-[#BA68C8]"
                        />

                        <FeatureCard
                            icon={<FaSmile size={24} />}
                            title="مؤثرات صوتية ممتعة"
                            description="يحتوي على مؤثرات صوتية مرحة تتفاعل مع أدوات الرسم لتجربة ممتعة."
                            color="bg-[#4DD0E1]"
                        />
                    </div>
                </div>
            </section>

            {/* Additional Features */}
            <section className="py-12 md:py-24 bg-[#F5F5F5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title">مميزات إضافية</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<FaImages size={24} />}
                            title="مكتبة أختام متنوعة"
                            description="مجموعة واسعة من الأختام الجاهزة المصنفة حسب الفئات لتسهيل الوصول إليها."
                            color="bg-[#F06292]"
                        />

                        <FeatureCard
                            icon={<FaVolumeUp size={24} />}
                            title="إرشادات صوتية"
                            description="أصوات إرشادية تساعد الأطفال الصغار على استخدام البرنامج بسهولة."
                            color="bg-[#7986CB]"
                        />

                        <FeatureCard
                            icon={<FaDesktop size={24} />}
                            title="متوافق مع أنظمة متعددة"
                            description="يعمل على ويندوز، ماك، لينكس، وأنظمة أخرى."
                            color="bg-[#9575CD]"
                        />

                        <FeatureCard
                            icon={<FaLaptop size={24} />}
                            title="خفيف على الأجهزة"
                            description="يعمل على الأجهزة ذات المواصفات المنخفضة مما يجعله متاحًا للجميع."
                            color="bg-[#4DB6AC]"
                        />

                        <FeatureCard
                            icon={<FaTabletAlt size={24} />}
                            title="دعم شاشات اللمس"
                            description="متوافق مع أجهزة اللمس مما يسهل استخدامه على الأجهزة اللوحية."
                            color="bg-[#FF8A65]"
                        />

                        <FeatureCard
                            icon={<FaHandPointer size={24} />}
                            title="سهولة الحفظ والمشاركة"
                            description="حفظ وطباعة الرسومات ومشاركتها بسهولة."
                            color="bg-[#4FC3F7]"
                        />
                    </div>
                </div>
            </section>

            {/* Tools Showcase */}
            <section className="py-12 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title">أدوات الرسم المتنوعة</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="text-2xl font-bold mb-4 text-[#424242]">فرش وأدوات متنوعة</h3>
                            <ul className="list-disc mr-6 space-y-2 text-gray-600">
                                <li>أقلام بأحجام مختلفة وألوان متعددة</li>
                                <li>فرش بتأثيرات متنوعة (ألوان مائية، طباشير، رش)</li>
                                <li>أدوات هندسية لرسم الأشكال</li>
                                <li>أداة ملء الألوان وأداة التدرج اللوني</li>
                                <li>أداة النص لإضافة كتابات للرسومات</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="text-2xl font-bold mb-4 text-[#424242]">أختام وأشكال جاهزة</h3>
                            <ul className="list-disc mr-6 space-y-2 text-gray-600">
                                <li>أختام للحيوانات والنباتات والكائنات المختلفة</li>
                                <li>رموز وأشكال تعبيرية متنوعة</li>
                                <li>أشكال هندسية ثنائية وثلاثية الأبعاد</li>
                                <li>إمكانية تغيير حجم ودوران الأختام</li>
                                <li>إمكانية إضافة أختام مخصصة</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="text-2xl font-bold mb-4 text-[#424242]">المؤثرات السحرية</h3>
                            <ul className="list-disc mr-6 space-y-2 text-gray-600">
                                <li>مؤثر التموج والتشويش</li>
                                <li>مؤثر عكس الألوان وتعديل السطوع</li>
                                <li>مؤثرات الظل والتدرج اللوني</li>
                                <li>مؤثر الفسيفساء والبكسلة</li>
                                <li>مؤثرات الأنماط والتكرار</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="text-2xl font-bold mb-4 text-[#424242]">تخصيص البرنامج</h3>
                            <ul className="list-disc mr-6 space-y-2 text-gray-600">
                                <li>إمكانية تغيير لغة البرنامج</li>
                                <li>خيارات لتعديل حجم الفرش والأدوات</li>
                                <li>ضبط مستوى الصوت أو إيقافه</li>
                                <li>تخصيص ألوان الواجهة</li>
                                <li>إعدادات مخصصة للآباء والمعلمين</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 