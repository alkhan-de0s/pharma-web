import React from 'react';
import { Link } from "@/i18n/navigation";
import { useTranslations } from 'next-intl';
import Container from '@/shared/components/Container';
import Image from 'next/image';

const Footer: React.FC = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <Container classname="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-4">
            
              <Image
              src="/logo/logo.png" alt="Renessans Pharma" width={150} height={100}
              />
            </div>
            <p className="text-gray-600 text-sm mb-4">
              {t('company-description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors" aria-label={t('facebook')}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
             
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-gray-900 font-semibold mb-4">{t('navigation')}</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">{t('home')}</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">{t('about-us')}</Link></li>
              <li><Link href="/products" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">{t('products')}</Link></li>
              <li><Link href="/gallery" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">{t('gallery')}</Link></li>
              <li><Link href="/partners" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">{t('partners')}</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-gray-900 font-semibold mb-4">{t('services')}</h4>
            <ul className="space-y-2">
              <li><Link href="/certificates" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">{t('certificates')}</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-gray-900 font-semibold mb-4">{t('contact-us')}</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-4 h-4 text-gray-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-600 text-sm">
                  {t('address')}
                </p>
              </div>
         
              <div className="flex items-center">
                <svg className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:info@renessanspharma.az" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  {t('email')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-gray-50 border-t border-gray-200">
        <Container classname="py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-gray-500 text-sm">
              {t('copyright',{date:new Date().getFullYear()})}
            </p>
    
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;