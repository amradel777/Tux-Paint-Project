import Image from 'next/image';
import BenefitCard from '@/components/BenefitCard';
import SectionTitle from '@/components/SectionTitle';
import GradientBorder from '@/components/GradientBorder';
import GradientDivider from '@/components/GradientDivider';
import { FaUniversity, FaLanguage, FaCalculator } from 'react-icons/fa';

export default function Benefits() {
    return (
        <div>
            {/* Hero Section */}
            <section className="gradient-bg py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#424242]">
                        فوائد برنامج <span className="text-[#FF8A65]">تكس بينت</span> للأطفال
                    </h1>
                    <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                        اكتشف كيف يساعد برنامج تكس بينت في تنمية مهارات طفلك بطريقة ممتعة وتفاعلية
                    </p>
                    <GradientBorder borderType="orange-yellow" className="max-w-3xl mx-auto">
                        <Image
                            src="/Graphic-Design-for-Kids-A-Creative-Journey-for-Young-Minds.webp"
                            alt="Tux Paint Benefits for Children"
                            width={800}
                            height={400}
                            className="w-full h-auto"
                        />
                    </GradientBorder>
                </div>
            </section>

            <GradientDivider color="primary" direction="center" height="medium" />

            {/* Main Benefits */}
            <section className="py-12 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle color="from-[#FF8A65]">
                        الفوائد التعليمية والتنموية
                    </SectionTitle>

                    <div className="space-y-16">
                        <BenefitCard
                            title="تنمية الإبداع والخيال"
                            description="يساعد برنامج تكس بينت على تحفيز الإبداع والخيال لدى الأطفال من خلال توفير أدوات رسم متنوعة ومؤثرات سحرية ممتعة. يمكن للأطفال استكشاف عالم الألوان والأشكال بحرية تامة، مما يعزز قدراتهم على التعبير عن أنفسهم وأفكارهم بطرق إبداعية مختلفة."
                            image="/tux-creativity.webp"
                        />

                        <BenefitCard
                            title="تطوير المهارات الحركية الدقيقة"
                            description="استخدام الماوس أو شاشة اللمس للرسم والتلوين يساعد في تنمية المهارات الحركية الدقيقة لدى الأطفال. التحكم في حركة اليد والأصابع أثناء الرسم والتلوين داخل حدود معينة يعزز التنسيق بين العين واليد، وهي مهارة مهمة للكتابة والأنشطة اليومية."
                            image="/tux-motor-skills.jpg"
                            reverse={true}
                        />

                        <BenefitCard
                            title="تعزيز مهارات حل المشكلات"
                            description="عندما يستخدم الأطفال برنامج تكس بينت، فإنهم يتعلمون التفكير المنطقي وحل المشكلات. مثلاً، كيفية دمج الألوان للحصول على لون جديد، أو كيفية استخدام أدوات معينة لتحقيق تأثير معين. هذه المهارات تنتقل إلى مجالات أخرى من حياتهم وتساعدهم على التفكير بشكل إبداعي."
                            image="/tux-problem-solving.webp"
                        />

                        <BenefitCard
                            title="تعلم استخدام التكنولوجيا بشكل إيجابي"
                            description="يساعد البرنامج الأطفال على تعلم استخدام التكنولوجيا بشكل إيجابي وهادف. بدلاً من مشاهدة المحتوى، يصبح الأطفال منتجين للمحتوى الإبداعي الخاص بهم، مما يعزز الاستخدام النشط والإيجابي للأجهزة الإلكترونية."
                            image="/tux-technology.jpg"
                            reverse={true}
                        />
                    </div>
                </div>
            </section>

            <GradientDivider color="secondary" direction="right-to-left" height="thin" />

            {/* Educational Benefits */}
            <section className="py-12 md:py-24 bg-[#F5F5F5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle color="from-[#4FC3F7]">
                        الفوائد الأكاديمية
                    </SectionTitle>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <GradientBorder borderType="blue-purple">
                            <div className="p-6">
                                <div className="w-16 h-16 bg-[#FFF9C4] rounded-full flex items-center justify-center text-[#FF8A65] mb-4">
                                    <FaCalculator className="w-10 h-10" />

                                </div>
                                <h3 className="text-xl font-bold mb-2 text-[#424242]">تعزيز المهارات الرياضية</h3>
                                <p className="text-gray-600">
                                    يساعد البرنامج على تعليم الأطفال المفاهيم الرياضية الأساسية مثل الأشكال الهندسية، الأحجام، الاتجاهات المكانية، والتناظر من خلال استخدام الأشكال والأدوات الهندسية.
                                </p>
                            </div>
                        </GradientBorder>

                        <GradientBorder borderType="green-blue">
                            <div className="p-6">
                                <div className="w-16 h-16 bg-[#FFF9C4] rounded-full flex items-center justify-center text-[#4FC3F7] mb-4">
                                    <FaLanguage className="w-10 h-10" />
                                    {/* <Image

                                        src={<FaLanguage/>}
                                        alt="Language Skills"
                                        width={32}
                                        height={32}
                                    /> */}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-[#424242]">تطوير المهارات اللغوية</h3>
                                <p className="text-gray-600">
                                    يمكن للأطفال استخدام أداة النص لكتابة كلمات وجمل، مما يساعد في تعلم الحروف والكلمات. كما أن وصف الرسومات التي ينشئونها يعزز مهارات التحدث والتعبير اللغوي.
                                </p>
                            </div>
                        </GradientBorder>

                        <GradientBorder borderType="orange-yellow">
                            <div className="p-6">
                                <div className="w-16 h-16 bg-[#FFF9C4] rounded-full flex items-center justify-center text-[#FFB74D] mb-4">
                                    <FaUniversity className="w-10 h-10" />
                                    {/* <Image
                                        src="/icon-science.svg"
                                        alt="Science Skills"
                                        width={32}
                                        height={32}
                                    /> */}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-[#424242]">تعلم العلوم والطبيعة</h3>
                                <p className="text-gray-600">
                                    يمكن استخدام الأختام والرسومات لتعلم عن الحيوانات، النباتات، والظواهر الطبيعية. يساعد هذا الأطفال على فهم العالم من حولهم بطريقة مرئية وتفاعلية.
                                </p>
                            </div>
                        </GradientBorder>
                    </div>
                </div>
            </section>

            <GradientDivider color="accent" direction="center" height="medium" />

            {/* Social and Emotional Benefits */}
            <section className="py-12 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle color="from-[#FFEB3B]">
                        الفوائد الاجتماعية والعاطفية
                    </SectionTitle>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <GradientBorder borderType="orange-yellow">
                            <div className="p-6 h-full">
                                <h3 className="text-2xl font-bold mb-4 text-[#424242]">تعزيز الثقة بالنفس</h3>
                                <p className="text-gray-600 mb-4">
                                    عندما ينجح الأطفال في إنشاء رسومات وتحقيق نتائج ملموسة باستخدام البرنامج، يمكن أن يعزز ذلك ثقتهم بأنفسهم وشعورهم بالإنجاز.
                                </p>
                                <p className="text-gray-600">
                                    القدرة على حفظ وطباعة الأعمال الفنية ومشاركتها مع الآخرين تعطي الأطفال شعوراً بالفخر والإنجاز، مما يقوي الثقة بالنفس والتقدير الذاتي.
                                </p>
                            </div>
                        </GradientBorder>

                        <GradientBorder borderType="blue-purple">
                            <div className="p-6 h-full">
                                <h3 className="text-2xl font-bold mb-4 text-[#424242]">تعلم التعاون والمشاركة</h3>
                                <p className="text-gray-600 mb-4">
                                    يمكن استخدام برنامج تكس بينت كنشاط جماعي حيث يتعاون الأطفال على إنشاء رسومات معًا، مما يعزز مهارات التعاون والعمل الجماعي.
                                </p>
                                <p className="text-gray-600">
                                    مشاركة الإبداعات مع الأصدقاء والعائلة تساعد الأطفال على التواصل وتقدير تعليقات الآخرين، وهي مهارات اجتماعية مهمة.
                                </p>
                            </div>
                        </GradientBorder>

                        <GradientBorder borderType="green-blue">
                            <div className="p-6 h-full">
                                <h3 className="text-2xl font-bold mb-4 text-[#424242]">التعبير العاطفي</h3>
                                <p className="text-gray-600 mb-4">
                                    الفن هو وسيلة قوية للتعبير العاطفي. من خلال الرسم، يمكن للأطفال التعبير عن مشاعرهم وأفكارهم التي قد يصعب عليهم التعبير عنها بالكلمات.
                                </p>
                                <p className="text-gray-600">
                                    هذا يمكن أن يكون مفيدًا بشكل خاص للأطفال الذين يواجهون صعوبات في التواصل اللفظي أو الذين يعانون من القلق أو التوتر.
                                </p>
                            </div>
                        </GradientBorder>

                        <GradientBorder borderType="orange-yellow">
                            <div className="p-6 h-full">
                                <h3 className="text-2xl font-bold mb-4 text-[#424242]">الصبر والمثابرة</h3>
                                <p className="text-gray-600 mb-4">
                                    عندما يعمل الأطفال على مشاريع فنية معقدة، فإنهم يتعلمون الصبر والمثابرة. فهم يدركون أن الإبداع الجيد يستغرق وقتًا وجهدًا.
                                </p>
                                <p className="text-gray-600">
                                    هذه المهارات تنتقل إلى مجالات أخرى من حياتهم وتساعدهم على مواجهة التحديات بإيجابية ومثابرة.
                                </p>
                            </div>
                        </GradientBorder>
                    </div>
                </div>
            </section>

            <GradientDivider color="primary" direction="right-to-left" height="thin" />

            {/* Testimonials */}
            <section className="py-12 md:py-24 bg-[#F5F5F5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle color="from-[#4FC3F7]">
                        آراء المعلمين وأولياء الأمور
                    </SectionTitle>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <GradientBorder borderType="orange-yellow">
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-[#FFF9C4] rounded-full flex items-center justify-center text-[#FF8A65] mr-3">
                                        <span className="text-lg font-bold">أ</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#424242]">أحمد محمد</h3>
                                        <p className="text-gray-500 text-sm">معلم حاسب آلي</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">
                                    &quot;لاحظت تحسنًا كبيرًا في مهارات الأطفال التقنية والإبداعية بعد استخدام برنامج تكس بينت في الفصل. البرنامج سهل الاستخدام وممتع، والأطفال يحبونه كثيرًا.&quot;
                                </p>
                            </div>
                        </GradientBorder>

                        <GradientBorder borderType="blue-purple">
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-[#FFF9C4] rounded-full flex items-center justify-center text-[#4FC3F7] mr-3">
                                        <span className="text-lg font-bold">س</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#424242]">سارة العلي</h3>
                                        <p className="text-gray-500 text-sm">أم لطفلين</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">
                                    &quot;وجدت في تكس بينت بديلاً رائعًا لألعاب الفيديو. أطفالي الآن يقضون وقتًا إبداعيًا ومفيدًا على الكمبيوتر بدلاً من مجرد مشاهدة محتوى سلبي.&quot;
                                </p>
                            </div>
                        </GradientBorder>

                        <GradientBorder borderType="green-blue">
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-[#FFF9C4] rounded-full flex items-center justify-center text-[#FFB74D] mr-3">
                                        <span className="text-lg font-bold">م</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#424242]">منى الخالدي</h3>
                                        <p className="text-gray-500 text-sm">معالجة نطق</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">
                                    &quot;أستخدم تكس بينت مع الأطفال الذين لديهم صعوبات في التواصل. البرنامج يساعدهم على التعبير عن أنفسهم بطريقة غير لفظية ويبني جسرًا للتواصل.&quot;
                                </p>
                            </div>
                        </GradientBorder>
                    </div>
                </div>
            </section>
        </div>
    );
} 