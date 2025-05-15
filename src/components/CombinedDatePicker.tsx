import React, { useEffect, useRef, useState } from 'react';
import { Calendar } from 'lucide-react';

// Declare the nepali datepicker interface
declare global {
  interface HTMLInputElement {
    nepaliDatePicker: (config?: any) => void;
    value: string;
  }
}

// Declare the NepaliDateConverter which is available globally after loading the nepali datepicker script
declare global {
  interface Window {
    NepaliFunctions: {
      BS2AD: (bsDate: string) => string;
      AD2BS: (adDate: string) => string;
      ConvertDateFormat: (date: string, format: string) => string;
    };
  }
}

const CombinedDatePicker: React.FC = () => {
  const [englishDate, setEnglishDate] = useState<string>('');
  const [nepaliDate, setNepaliDate] = useState<string>('');
  const nepaliInputRef = useRef<HTMLInputElement>(null);

  // Format date to YYYY-MM-DD
  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Convert AD date to BS date
  const convertADToBS = (adDate: string): string => {
    if (!adDate) return '';
    try {
      return window.NepaliFunctions.AD2BS(adDate);
    } catch (e) {
      console.error('Error converting AD to BS:', e);
      return '';
    }
  };

  // Convert BS date to AD date
  const convertBSToAD = (bsDate: string): string => {
    if (!bsDate) return '';
    try {
      return window.NepaliFunctions.BS2AD(bsDate);
    } catch (e) {
      console.error('Error converting BS to AD:', e);
      return '';
    }
  };

  // Handle English date change
  const handleEnglishDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEnglishDate = e.target.value;
    setEnglishDate(newEnglishDate);
    
    if (newEnglishDate) {
      const bsDate = convertADToBS(newEnglishDate);
      setNepaliDate(bsDate);
      
      // Update nepali datepicker value
      if (nepaliInputRef.current) {
        nepaliInputRef.current.value = bsDate;
      }
    } else {
      setNepaliDate('');
      if (nepaliInputRef.current) {
        nepaliInputRef.current.value = '';
      }
    }
  };

  // Initialize Nepali datepicker
  useEffect(() => {
    if (nepaliInputRef.current) {
      nepaliInputRef.current.nepaliDatePicker({
        dateFormat: 'YYYY-MM-DD',
        ndpYear: true,
        ndpMonth: true,
        ndpYearCount: 10,
        onChange: function () {
          const bsDate = nepaliInputRef.current?.value || '';
          setNepaliDate(bsDate);
          
          if (bsDate) {
            const adDate = convertBSToAD(bsDate);
            setEnglishDate(adDate);
          } else {
            setEnglishDate('');
          }
        }
      });
    }
  }, []);

  return (
    <div className="space-y-6">
      <div className="relative">
        <label htmlFor="nepali-date" className="block text-sm font-medium text-gray-700 mb-1">
          Select Date
        </label>
        <div className="relative">
          <input
            ref={nepaliInputRef}
            type="text"
            id="nepali-date"
            placeholder="Select a date"
            className="block w-full rounded-lg border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none shadow-sm transition duration-150 ease-in-out"
            style={{ borderWidth: '1px' }}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">English (AD) Date</label>
          <input
            type="date"
            value={englishDate}
            onChange={handleEnglishDateChange}
            className="block w-full rounded-lg border-gray-300 bg-gray-50 py-3 px-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none shadow-sm transition duration-150 ease-in-out"
            style={{ borderWidth: '1px' }}
          />
          {englishDate && (
            <div className="text-sm text-gray-600 mt-1">
              {new Date(englishDate).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Nepali (BS) Date</label>
          <input
            type="text"
            value={nepaliDate}
            readOnly
            className="block w-full rounded-lg border-gray-300 bg-gray-50 py-3 px-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none shadow-sm transition duration-150 ease-in-out"
            style={{ borderWidth: '1px' }}
          />
          {nepaliDate && (
            <div className="text-sm text-gray-600 mt-1">
              Nepali Calendar Date
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CombinedDatePicker;