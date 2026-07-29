import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { WhatsAppOrderFormData } from '../types';
import { X, Send, Phone, Upload, CheckCircle2, FileText, AlertCircle } from 'lucide-react';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ''
}) => {
  const [formData, setFormData] = useState<WhatsAppOrderFormData>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: 'Paliganj, Bihar',
    medicineName: prefilledMedicine,
    hasPrescription: false,
    prescriptionFileName: '',
    message: '',
    preferredDeliveryTime: 'Immediate'
  });

  const [prescriptionPreview, setPrescriptionPreview] = useState<string | null>(null);
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePrescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        hasPrescription: true,
        prescriptionFileName: file.name
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPrescriptionPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const prescriptionStatus = formData.hasPrescription ? 'Yes (Attached/Sending in Chat)' : 'No';

    // Construct exact prefilled formatted message
    const formattedText = 
`${BUSINESS_INFO.name}

Hello,
Medical Order Inquiry

Customer Name:
${formData.customerName || 'Not specified'}

Phone:
${formData.mobileNumber || 'Not specified'}

Medicine Required:
${formData.medicineName || 'As per prescription / general inquiry'}

Address:
${formData.address || 'Paliganj'}

Prescription:
${prescriptionStatus}

Preferred Delivery Time:
${formData.preferredDeliveryTime}

Message:
${formData.message || 'Please confirm availability and total price.'}`;

    const encodedText = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
    setCopiedSuccess(true);
    setTimeout(() => {
      setCopiedSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-5 sm:p-6 relative shadow-2xl my-8 animate-in fade-in zoom-in-95">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          id="whatsapp-modal-close-btn"
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5 pr-8">
          <div className="w-12 h-12 rounded-xl bg-[#0A8F6A] text-white flex items-center justify-center shrink-0 shadow-md">
            <Send className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              WhatsApp Medicine Order
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {BUSINESS_INFO.name} • {BUSINESS_INFO.formattedPhone}
            </p>
          </div>
        </div>

        {copiedSuccess ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Opening WhatsApp...
            </h3>
            <p className="text-xs text-slate-500 max-w-xs mx-auto">
              Your order message has been formatted and transferred to WhatsApp chat with Raj Pharma.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSendWhatsApp} className="space-y-4">
            
            {/* Customer Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Customer Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ramesh Kumar"
                value={formData.customerName}
                onChange={e => setFormData({ ...formData, customerName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            {/* Mobile Number & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9608285053"
                  value={formData.mobileNumber}
                  onChange={e => setFormData({ ...formData, mobileNumber: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  placeholder="e.g. name@example.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
            </div>

            {/* Delivery Address */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Delivery Address / Village in Paliganj <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Chandhos Road, Purani Bazar, Paliganj"
                value={formData.address}
                onChange={e => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            {/* Medicine Required */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Medicine Name(s) Required <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={2}
                placeholder="e.g. Paracetamol 650mg (1 strip), Dolo 650, Baby Diapers Size M"
                value={formData.medicineName}
                onChange={e => setFormData({ ...formData, medicineName: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            {/* Upload Prescription */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Upload Doctor Prescription (Optional)
              </label>
              <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-3 bg-slate-50/50 dark:bg-slate-800/50 text-center relative hover:bg-slate-100/50 transition-colors">
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handlePrescriptionChange}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <div className="flex flex-col items-center justify-center gap-1">
                  <Upload className="w-5 h-5 text-emerald-600" />
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    {formData.hasPrescription ? `Attached: ${formData.prescriptionFileName}` : 'Click or Drag & Drop prescription photo'}
                  </span>
                  <span className="text-[11px] text-slate-400">JPG, PNG, PDF up to 10MB</span>
                </div>
              </div>
              {prescriptionPreview && (
                <div className="mt-2 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-50 dark:bg-emerald-950/40 p-2 rounded-lg">
                  <FileText className="w-4 h-4 shrink-0" />
                  <span className="truncate">Prescription image selected successfully</span>
                </div>
              )}
            </div>

            {/* Preferred Delivery Time */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Pickup / Delivery Time
              </label>
              <select
                value={formData.preferredDeliveryTime}
                onChange={e => setFormData({ ...formData, preferredDeliveryTime: e.target.value as any })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
              >
                <option value="Immediate">Immediate / Urgent Pickup</option>
                <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
              </select>
            </div>

            {/* Special Instructions */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Additional Notes / Message
              </label>
              <input
                type="text"
                placeholder="e.g. Please confirm if generic alternative is available."
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="submit"
                id="submit-whatsapp-order-btn"
                className="w-full py-3 px-4 rounded-xl bg-[#0A8F6A] hover:bg-[#08795A] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                id="modal-direct-call-btn"
                className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call Now</span>
              </a>
            </div>

            <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
              <AlertCircle className="w-3 h-3 text-emerald-500" />
              <span>We respond to WhatsApp medicine orders within 5-10 minutes.</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
