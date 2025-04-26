import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import SectionTitle from "@/components/SectionTitle";
import GradientBorder from "@/components/GradientBorder";
import GradientDivider from "@/components/GradientDivider";
import { FaPalette, FaMagic, FaLightbulb, FaLock, FaGlobeAmericas, FaSmile } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      <GradientDivider color="primary" direction="center" height="thin" />

      {/* About Section */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle color="from-[#FF8A65]" center={false}>
            ما هو برنامج تكس بينت؟
          </SectionTitle>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <GradientBorder borderType="orange-yellow" className="h-full">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-[#424242]">برنامج رسم مصمم خصيصًا للأطفال</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    تكس بينت (Tux Paint) هو برنامج رسم مفتوح المصدر مصمم خصيصًا للأطفال من سن 3 إلى 12 عامًا. يتميز بواجهة سهلة الاستخدام وممتعة، ويتوفر بأكثر من 100 لغة حول العالم، مما يجعله أداة تعليمية وترفيهية مثالية للأطفال.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    تم تطوير البرنامج بهدف توفير بيئة آمنة وممتعة للأطفال للتعبير عن إبداعاتهم، مع أدوات رسم متنوعة ومؤثرات صوتية تفاعلية تجعل تجربة الرسم أكثر متعة وتشويقًا.
                  </p>
                </div>
              </GradientBorder>
            </div>

            <div className="md:w-1/2 order-1 md:order-2">
              <GradientBorder borderType="blue-purple" className="overflow-hidden">
                <Image
                  src="/tux-paint-interface.png"
                  alt="Tux Paint Interface"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </GradientBorder>
            </div>
          </div>
        </div>
      </section>

      <GradientDivider color="secondary" direction="right-to-left" height="medium" />

      {/* Features Section */}
      <section className="py-12 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle color="from-[#4FC3F7]">
            مميزات برنامج تكس بينت
          </SectionTitle>

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

      <GradientDivider color="accent" direction="center" height="thick" />

      {/* CTA Section */}
      <section className="py-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle color="from-[#FFEB3B]">
            جاهز لبدء المغامرة الإبداعية؟
          </SectionTitle>

          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            انضم إلى ملايين الأطفال حول العالم الذين يستمتعون بتكس بينت كل يوم!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/download" className="btn-primary">
              تشغيل البرنامج
            </Link>
            <Link href="/how-to-use" className="px-6 py-3 bg-white text-[#FF8A65] border border-[#FF8A65] rounded-full font-bold shadow-md hover:bg-gray-50">
              طريقة الاستخدام
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
