"use client";

import EntryServiceBanner from "@/app/components/EntryServiceBanner";
import ContactInfoSection from "@/app/components/layout/ContactInfoSection";
import MakeRequestSection from "@/app/components/layout/MakeRequestSection";
import { useModal } from "@/app/components/modal/useModal";
import PassportVisaFormModal from "./components/PassportVisaFormModal";
import Image from "next/image";

export default function RealEstatePage() {
  const { show } = useModal();

  return (
    <div className="px-4 md:px-8">
      <EntryServiceBanner
        title="Passport, Visa and Documents"
        description={
          <ul className="list-unstyled about-two__list my-6 space-y-1 text-gray-700 !mt-0 !mb-0">
            <li className="!text-base">
              <i className="fa fa-check-circle text-[#dbb481] mr-2" />
              ED Visa
            </li>
            <li className="!text-base">
              <i className="fa fa-check-circle text-[#dbb481] mr-2" />
              DTV Visa
            </li>
            <li className="!text-base">
              <i className="fa fa-check-circle text-[#dbb481] mr-2" />
              Retirement Visa
            </li>
            <li className="!text-base">
              <i className="fa fa-check-circle text-[#dbb481] mr-2" />
              N-LA Visa
            </li>
          </ul>
        }
        image="/images/services/passport-visa-docs.webp"
      />

      <div className="my-10">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-x-6">
          <div className="space-y-2 pb-6 border-b border-gray-200">
            <h3 className="text-lg underline">PJ to PJ သက်တမ်းတိုး</h3>
            <ul>
              <li>မှတ်ပုံတင် ရှေ့ နောက် </li>
              <li>အိမ်ထောင်စု ရှေ့ နောက် </li>
              <li>Passport </li>
              <li>Visa </li>
              <li>Work Permit </li>
              <li>Photo 2&quot;</li>
              <li>ဝင်ငွေ အခွန်‌စာရွက်</li>
            </ul>
            <div className="font-medium text-primary">
              မှတ်ချက်။ ။ဝင်ငွေအခွန် တစ်လလျှင် ฿150 နှုန်း
              ကျသင့်သလောက်ဆောင်ရမည်။ စာအုပ်သက်တမ်းကုန်တဲ့သူတွေအတွက် ဒဏ်ကြေး
              ฿3,650 ကျသင့်ပါမည်။
            </div>
            <div className="font-medium text-primary">
              မှတ်ချက်။ ။အဝင်တုံး အထွက်တုံး မရှိသူများကျသင့်ငွေ
              သီးသန့်တွက်‌ပေးပါမည်။
            </div>
          </div>

          <div className="w-[1px] bg-gray-200" />

          <div className="space-y-2 pb-6 border-b border-gray-200">
            <h3 className="text-lg underline">Passport CI to PJ ပြောင်း</h3>
            <ul>
              <li>မှတ်ပုံတင် ရှေ့ နောက်</li>
              <li>အိမ်ထောင်စု ရှေ့ နောက်</li>
              <li>Passport CI</li>
              <li>Visa</li>
              <li>Work Permit</li>
              <li>Photo 2&quot;</li>
              <li>ဝင်ငွေ အခွန်‌စာရွက်</li>
            </ul>
            <div className="font-medium text-primary">
              မှတ်ချက်။ ။ ဝင်ငွေခွန် တစ်လလျှင် ฿150 နှုန်း
              ကျသင့်သလောက်ဆောင်ရမည်။ CI ရုံးသို့ စာအုပ်လျှောက်လျှင်တစ်ကြိမ်၊
              စာအုပ်ထုတ်လျှင်တစ်ကြိမ်လာရမည်။
            </div>
          </div>

          <div className="space-y-2 py-6 border-b border-gray-200">
            <h3 className="text-lg underline">
              Passport အပျောက် အမြန်လုပ်ပေးခြင်း
            </h3>
            <ul>
              <li>လိုအပ်သည့်မိတ္ထူများ</li>
              <li>ရဲစခန်း ထောက်ခံစာ</li>
              <li>ဘာသာပြန်</li>
              <li>သံရုံး ထောက်ခံစာ</li>
              <li>မှတ်ပုံတင် အိမ်ထောင်စု</li>
              <li>သံရုံး ချိန်းဆိုစာရွက်</li>
            </ul>
            <div className="font-medium text-primary">
              မှတ်ချက်။ ။ Passport အပျောက်သီးသန့်လိုက်ပေးပါသည်။
            </div>
            <div className="font-medium text-primary">
              မှတ်ချက်။ ။ အဝင်တုံး အထွက်တုံး မရှိသူများကျသင့်ငွေ
              သီးသန့်တွက်‌ပေးပါမည်။
            </div>
          </div>

          <div className="w-[1px] bg-gray-200" />

          <div className="space-y-2 py-6 border-b border-gray-200">
            <h3 className="text-lg underline">Passport CI to CI ပြောင်း</h3>
            <ul>
              <li>မှတ်ပုံတင် ရှေ့ နောက်</li>
              <li>အိမ်ထောင်စု ရှေ့ နောက်</li>
              <li>Passport CI</li>
              <li>Visa</li>
              <li>Work Permit</li>
              <li>Photo 2&quot;</li>
              <li>ဝင်ငွေ အခွန်‌စာရွက်</li>
            </ul>
            <div className="font-medium text-primary">
              မှတ်ချက်။ ။ ဝင်ငွေခွန် တစ်လလျှင် ฿150 နှုန်း
              ကျသင့်သလောက်ဆောင်ရမည်။
            </div>
          </div>

          <div className="space-y-2 py-6 border-b border-gray-200">
            <h3 className="text-lg underline">
              သူဌေးပြောင်းအတွက် လိုအပ်သည်များ
            </h3>
            <ul>
              <li>Passport</li>
              <li>Visa</li>
              <li>Work Permit</li>
              <li>Resignation letter</li>
              <li>သူဌေးစာရွက်စာတမ်း လိုအပ်သည်များ</li>
              <li>မှတ်ပုံတင်</li>
              <li>အိမ်ထောင်စု</li>
              <li>ကုမ္ပဏီစာရွက်စာတမ်း</li>
            </ul>
            <div className="font-medium text-primary">
              မှတ်ချက်။ ။ ရက်ပေါင်း ၆၀ ကျော်အလုပ်ထွက်ထားသူများ သူဌေးပြောင်းအတွက်
              လုပ်ပေးပါသည်။
            </div>
          </div>

          <div className="w-[1px] bg-gray-200" />

          <div className="space-y-2 py-6 border-b border-gray-200">
            <h3 className="text-lg underline">
              Passport CI စာအုပ်ပြုလုပ်ရန် လိုအပ်သည်များ
            </h3>
            <ul>
              <li>မှတ်ပုံတင် ရှေ့နောက်</li>
              <li>အိမ်ထောင်စု ရှေ့ နောက်</li>
              <li>Name List</li>
              <li>Receipt Work Permit</li>
              <li>Work Permit</li>
              <li>Photo 2&quot;</li>
            </ul>
            <div className="font-medium text-primary">
              မှတ်ချက်။ ။ ဝင်ငွေခွန် တစ်လလျှင် ฿150 နှုန်း
              ကျသင့်သလောက်ဆောင်ရမည်။
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <Image
          src="/images/services/passport-visa-docs-services.jpg"
          alt=""
          width={1583}
          height={2107}
        />
      </div>

      <ContactInfoSection />

      <MakeRequestSection
        requestDescription="Need help with passport or visa services? Whether it's a renewal, replacement, or a special visa like NoLA, DTB, or ED — submit your enquiry now and let us assist you."
        onRequestClick={() => show(<PassportVisaFormModal />)}
        buttonLabel="Get Enquiry Now"
      />
    </div>
  );
}
