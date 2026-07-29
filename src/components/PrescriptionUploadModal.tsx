import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { X, Upload, Send, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';

interface PrescriptionUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrescriptionUploadModal: React.FC<PrescriptionUploadModalProps> = ({
  isOpen,
  onClose
}) => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [fileSelected, setFileSelected] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [sentSuccess, setSentSuccess] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileSelected(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendPrescription = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedText = 
`${BUSINESS_INFO.name}

Hello,
Prescription Upload & Fulfillment Request

Patient Name:
${patientName || 'Not specified'}

Phone Number:
${phone || 'Not specified'}

Prescription File:
${fileSelected ? fileSelected.name : 'Attached in chat'}

Special Dosage Notes:
${notes || 'Please verify prescription and assemble medicines.'}`;

    const encodedText = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-5 sm:p-6 relative shadow-2xl my-6">
        
        <button
          onClick={onClose}
          id="prescription-modal-close-btn"
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5 pr-8">
          <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Quick Prescription Upload
            </h2>
            <p className="text-xs text-slate-500">
              Send prescription directly to Raj Pharma Pharmacist
            </p>
          </div>
        </div>

        {sentSuccess ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Transferring to WhatsApp...
            </h3>
            <p className="text-xs text-slate-500">
              Please attach/send your prescription image in the opened WhatsApp chat window.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSendPrescription} className="space-y-4">
            
            {/* File Upload Box */}
            <div className="border-2 border-dashed border-emerald-500/40 rounded-2xl p-5 bg-emerald-50/40 dark:bg-emerald-950/20 text-center relative hover:border-emerald-500 transition-colors">
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 flex items-center justify-center">
                  <Upload className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  {fileSelected ? fileSelected.name : 'Tap to choose prescription image / PDF'}
                </span>
                <span className="text-[11px] text-slate-500">
                  Clear photo of doctor's handwritten or printed rx
                </span>
              </div>
            </div>

            {filePreview && (
              <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center gap-3">
                <img 
                  src={filePreview} 
                  alt="Prescription preview" 
                  className="w-12 h-12 object-cover rounded-lg border border-slate-300"
                  referrerPolicy="no-referrer"
                />
                <div className="text-xs text-slate-700 dark:text-slate-300 truncate">
                  <span className="font-semibold block truncate">{fileSelected?.name}</span>
                  <span className="text-[10px] text-emerald-600">Ready for WhatsApp dispatch</span>
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Patient Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Anil Kumar"
                value={patientName}
                onChange={e => setPatientName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 9608285053"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Special Instructions (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Require 1 month full course"
                value={notes}
                onChange={e => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <button
              type="submit"
              id="send-rx-whatsapp-btn"
              className="w-full py-3 px-4 rounded-xl bg-[#0A8F6A] hover:bg-[#08795A] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Submit Prescription via WhatsApp</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
