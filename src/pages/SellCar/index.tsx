import { useMemo, useState } from 'react';

const steps = [
  { id: 'details', label: 'Vehicle Details' },
  { id: 'description', label: 'Vehicle Description' },
  { id: 'photos', label: 'Upload Photos' },
  { id: 'auction', label: 'Auction Settings' },
  { id: 'review', label: 'Review & Publish' }
];

export const SellCarPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stepContent = useMemo(() => {
    switch (steps[activeStep].id) {
      case 'details':
        return (
          <div className="grid gap-4 md:grid-cols-2">
            {['Year', 'Make', 'Model', 'Mileage', 'Transmission', 'Fuel type'].map((label) => (
              <label key={label} className="text-xs uppercase tracking-[0.3em] text-secondaryText">
                {label}
                <input className="mt-2 w-full rounded-2xl border border-border bg-secondaryBg/70 px-4 py-3 text-sm text-white" />
              </label>
            ))}
          </div>
        );
      case 'description':
        return (
          <label className="text-xs uppercase tracking-[0.3em] text-secondaryText">
            Vehicle Description
            <textarea className="mt-2 h-32 w-full rounded-3xl border border-border bg-secondaryBg/70 px-4 py-3 text-sm text-white" />
          </label>
        );
      case 'photos':
        return (
          <div className="grid gap-3 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex flex-col gap-2 rounded-2xl border border-border p-3 text-center text-sm text-secondaryText">
                <div className="flex h-24 items-center justify-center rounded-2xl border border-dashed border-border text-secondaryText">
                  Upload photo {index + 1}
                </div>
                <span className="text-[0.6rem] uppercase tracking-[0.4em]">Pexels recommended</span>
              </div>
            ))}
          </div>
        );
      case 'auction':
        return (
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { label: 'Starting bid', type: 'number' },
              { label: 'Reserve price', type: 'number' },
              { label: 'Auction duration (hrs)', type: 'number' }
            ].map((field) => (
              <label key={field.label} className="text-xs uppercase tracking-[0.3em] text-secondaryText">
                {field.label}
                <input type={field.type} className="mt-2 w-full rounded-2xl border border-border bg-secondaryBg/70 px-4 py-3 text-sm text-white" />
              </label>
            ))}
          </div>
        );
      case 'review':
        return (
          <div className="space-y-3 text-sm text-secondaryText">
            <p>- Confirm vehicle details and images.</p>
            <p>- Review bidding parameters.</p>
            <p>- Ready to publish to the Azure + Java pipeline.</p>
          </div>
        );
      default:
        return null;
    }
  }, [activeStep]);

  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-[0.4em] text-secondaryText">Sell a Car</p>
        <h2 className="text-2xl font-semibold tracking-[0.3em] text-white">Create a premium listing</h2>
      </header>
      <div className="glass-card space-y-6 p-6">
        <div className="flex flex-wrap gap-3">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={`rounded-full border px-4 py-2 text-[0.6rem] uppercase tracking-[0.4em] ${
                activeStep === index ? 'border-primaryAccent text-primaryAccent' : 'border-border text-secondaryText'
              }`}
            >
              {step.label}
            </button>
          ))}
        </div>
        {stepContent}
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-secondaryText">
          <span>Step {activeStep + 1} of {steps.length}</span>
          <div className="flex gap-3">
            <button
              disabled={activeStep === 0}
              onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
              className="rounded-full border border-border px-4 py-2 text-white disabled:opacity-40"
            >
              Back
            </button>
            <button
              onClick={() => setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))}
              className="btn-accent"
            >
              {activeStep === steps.length - 1 ? 'Publish' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
