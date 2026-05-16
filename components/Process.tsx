"use client";

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  "Property Buyer or Seller have to visit our office with old Registry photo copy.",
  "Write-down latest Ward No. or Patwari Halka No. of that Property.",
  "Provide us all details and Selling Price of that Property.",
  "We will put all property details at MPIGR Portal for fee calculation.",
  "We will provide you computer generated 'Fee Calculation' page.",
  "You have to provide us all registry related documents as per the requirement.",
  "We will create a profile at MPIGR Portal for E-Registry of Property with Buyer and Seller Details.",
  "We will create a sell deed and give that to buyer and seller for final approval.",
  "Buyer or Seller have to pay us Stamp Fee + Registration Fee + Our Fee.",
  "We will upload the final Sale Deed at MPIGR Portal, pay the Stamp Fee.",
  "We will provide final computer generated Declaration page for Buyer, Seller and Two Witness.",
  "We will scan and upload Declaration page and then pay Registration Fees.",
  "We will book SLOT for final E-Registry process at Registry Office.",
  "Buyer and Seller have to present at Registry Office with Two Witness for final registry at SLOT Booking time."
];

const Process = () => {
  return (
    <section className="section">
      <div className="container grid grid-2" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem', alignItems: 'start' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>How We Do Property E-Registry?</h2>
          <div className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {steps.map((step, index) => (
              <div key={index} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ minWidth: '24px', height: '24px', borderRadius: '50%', background: 'var(--primary)', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold' }}>
                  {index + 1}
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass" style={{ padding: '2.5rem', borderRadius: '1rem', background: 'var(--primary)', color: 'var(--white)', position: 'sticky', top: '100px' }}>
          <h3 style={{ color: 'var(--white)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Ask for a Call Back</h3>
          <p style={{ marginBottom: '2rem', opacity: 0.9 }}>Need expert advice? Leave your number and we'll call you back shortly.</p>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input 
              type="text" 
              placeholder="Your Name" 
              style={{ padding: '0.75rem', borderRadius: '0.25rem', border: 'none', background: 'rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} 
            />
            <input 
              type="tel" 
              placeholder="Phone Number" 
              style={{ padding: '0.75rem', borderRadius: '0.25rem', border: 'none', background: 'rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} 
            />
            <button className="btn btn-accent" style={{ width: '100%' }}>REQUEST CALL</button>
          </form>

          <div style={{ marginTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
            <h4 style={{ color: 'var(--white)', fontSize: '1.125rem' }}>Visit Our Office</h4>
            <p style={{ opacity: 0.8, fontSize: '0.875rem' }}>
              Vipin Consultancy<br />
              Bhopal, Madhya Pradesh<br />
              MP Nagar, Zone-1
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
