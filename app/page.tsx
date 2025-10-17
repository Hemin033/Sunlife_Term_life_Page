'use client'

import { useState } from 'react'
import Image from 'next/image'
import { IoMdWalk } from 'react-icons/io'
import { MdDirectionsRun } from 'react-icons/md'
import { GiWeightLiftingUp } from 'react-icons/gi'
import { FaDollarSign, FaShieldAlt, FaHeart, FaUsers, FaCalendarAlt, FaCog, FaChartLine, FaExchangeAlt, FaPlus, FaLaptop, FaHandHoldingHeart, FaUserMd } from 'react-icons/fa'
import { AiOutlineDollar, AiOutlineHeart, AiOutlineCalendar, AiOutlinePlus, AiOutlineLaptop, AiOutlineSwap } from 'react-icons/ai'
import { BsShield, BsPeople, BsGraphUp } from 'react-icons/bs'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'

export default function Home() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null)
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [showOTPVerification, setShowOTPVerification] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [otp, setOTP] = useState(['', '', '', '', '', ''])
  const [phoneNumber, setPhoneNumber] = useState('')
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    gender: '',
    dateOfBirth: '',
    occupation: '',
    smokerStatus: '',
    province: '',
    coverageAmount: 0
  })

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index)
  }

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault()
    // Store phone number for OTP verification
    setPhoneNumber(formData.phoneNumber)
    // Hide lead form and show OTP verification
    setShowLeadForm(false)
    setShowOTPVerification(true)
  }

  const handleOTPChange = (index: number, value: string) => {
    const newOTP = [...otp]
    // Only allow numbers
    if (value.match(/^[0-9]$/)) {
      newOTP[index] = value
      setOTP(newOTP)
      // Auto-focus next input
      if (index < 5 && value !== '') {
        const nextInput = document.getElementById(`otp-${index + 1}`)
        nextInput?.focus()
      }
    } else if (value === '') {
      // Allow backspace
      newOTP[index] = ''
      setOTP(newOTP)
      // Auto-focus previous input
      if (index > 0) {
        const prevInput = document.getElementById(`otp-${index - 1}`)
        prevInput?.focus()
      }
    }
  }

  const handleVerifyOTP = () => {
    // Here you would verify the OTP
    console.log('Verifying OTP:', otp.join(''))
    setShowOTPVerification(false)
    setShowThankYou(true)
  }

  const handleResendOTP = () => {
    // Here you would trigger OTP resend
    console.log('Resending OTP to:', phoneNumber)
    // Reset OTP inputs
    setOTP(['', '', '', '', '', ''])
  }

  return (
    <main>
      {/* Lead Form Modal */}
      {showLeadForm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '20px',
          overflowY: 'auto'
        }}>
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '20px',
            padding: '40px',
            maxWidth: '750px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
          }}>
            {/* Close Button */}
            <button
              onClick={() => setShowLeadForm(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                fontSize: '28px',
                cursor: 'pointer',
                color: '#6b7280',
                padding: '8px',
                lineHeight: 1
              }}
            >
              ×
            </button>

            {/* Form Header */}
            <h2 style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#1f2937',
              marginBottom: '8px',
              textAlign: 'center'
            }}>
              Get started today
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#6b7280',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              Complete the quick form below to find out how affordable life insurance can be — and get an expert Sun Life licensed advisor to help you find choosing the right plan for your family.
            </p>
            <p style={{
              fontSize: '14px',
              color: '#6b7280',
              marginBottom: '32px',
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              <strong>Free of charge and with no obligation.</strong>
            </p>

            {/* Form */}
            <form onSubmit={handleSubmitLead}>
              {/* Full Name */}
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '22px', marginBottom: '24px', alignItems: 'center' }}>
                <label style={{ fontWeight: 700, fontSize: '16px', color: '#1f2937' }}>
                  Full Name <span style={{ color: '#013946' }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Smith"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: '15px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Phone Number */}
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '22px', marginBottom: '24px', alignItems: 'center' }}>
                <label style={{ fontWeight: 700, fontSize: '16px', color: '#1f2937' }}>
                  Phone Number <span style={{ color: '#013946' }}>*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(555) 123-4567"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: '15px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Email Address */}
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '22px', marginBottom: '24px', alignItems: 'center' }}>
                <label style={{ fontWeight: 700, fontSize: '16px', color: '#1f2937' }}>
                  Email Address <span style={{ color: '#013946' }}>*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="John.smith@gmail.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: '15px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Gender */}
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '22px', marginBottom: '24px', alignItems: 'center' }}>
                <label style={{ fontWeight: 700, fontSize: '16px', color: '#1f2937' }}>
                  Gender <span style={{ color: '#013946' }}>*</span>
                </label>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    type="button"
                    onClick={() => handleInputChange('gender', 'Man')}
                    style={{
                      flex: 1,
                      padding: '14px',
                      fontSize: '15px',
                      border: `2px solid ${formData.gender === 'Man' ? '#0086ae' : '#d1d5db'}`,
                      borderRadius: '8px',
                      backgroundColor: formData.gender === 'Man' ? '#e0f2fe' : '#fff',
                      color: '#1f2937',
                      cursor: 'pointer',
                      fontWeight: 600
                    }}
                  >
                    Man
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInputChange('gender', 'Woman')}
                    style={{
                      flex: 1,
                      padding: '14px',
                      fontSize: '15px',
                      border: `2px solid ${formData.gender === 'Woman' ? '#0086ae' : '#d1d5db'}`,
                      borderRadius: '8px',
                      backgroundColor: formData.gender === 'Woman' ? '#e0f2fe' : '#fff',
                      color: '#1f2937',
                      cursor: 'pointer',
                      fontWeight: 600
                    }}
                  >
                    Woman
                  </button>
                </div>
              </div>

              {/* Date of Birth */}
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '22px', marginBottom: '24px', alignItems: 'start' }}>
                <div>
                  <label style={{ fontWeight: 700, fontSize: '16px', color: '#1f2937', display: 'block' }}>
                    Date of Birth <span style={{ color: '#013946' }}>*</span>
                  </label>
                  <p style={{ fontSize: '13px', color: '#6b7280', margin: '4px 0 0 0' }}>
                    Your premium depends on your age.
                  </p>
                </div>
                <input
                  type="text"
                  required
                  maxLength={10}
                  placeholder="MM/DD/YYYY"
                  value={formData.dateOfBirth}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, '');
                    if (value.length <= 8) {
                      // Format as MM/DD/YYYY
                      if (value.length >= 4) {
                        value = value.slice(0, 2) + '/' + value.slice(2, 4) + '/' + value.slice(4);
                      } else if (value.length >= 2) {
                        value = value.slice(0, 2) + '/' + value.slice(2);
                      }
                      handleInputChange('dateOfBirth', value);
                    }
                  }}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: '15px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Smoker Status */}
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '22px', marginBottom: '24px', alignItems: 'start' }}>
                <div>
                  <label style={{ fontWeight: 700, fontSize: '16px', color: '#1f2937', display: 'block' }}>
                    Smoker Status
                  </label>
                  <p style={{ fontSize: '13px', color: '#6b7280', margin: '4px 0 0 0' }}>
                    Includes tobacco, e-cigarettes, and vaping in the past 12 months.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    type="button"
                    onClick={() => handleInputChange('smokerStatus', 'Non-smoker')}
                    style={{
                      flex: 1,
                      padding: '14px',
                      fontSize: '15px',
                      border: `2px solid ${formData.smokerStatus === 'Non-smoker' ? '#0086ae' : '#d1d5db'}`,
                      borderRadius: '8px',
                      backgroundColor: formData.smokerStatus === 'Non-smoker' ? '#e0f2fe' : '#fff',
                      color: '#1f2937',
                      cursor: 'pointer',
                      fontWeight: 600
                    }}
                  >
                    Non-smoker
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInputChange('smokerStatus', 'Smoker')}
                    style={{
                      flex: 1,
                      padding: '14px',
                      fontSize: '15px',
                      border: `2px solid ${formData.smokerStatus === 'Smoker' ? '#0086ae' : '#d1d5db'}`,
                      borderRadius: '8px',
                      backgroundColor: formData.smokerStatus === 'Smoker' ? '#e0f2fe' : '#fff',
                      color: '#1f2937',
                      cursor: 'pointer',
                      fontWeight: 600
                    }}
                  >
                    Smoker
                  </button>
                </div>
              </div>

              {/* Province */}
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '22px', marginBottom: '24px', alignItems: 'center' }}>
                <label style={{ fontWeight: 700, fontSize: '16px', color: '#1f2937' }}>
                  Province
                </label>
                <select
                  value={formData.province}
                  onChange={(e) => handleInputChange('province', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: '15px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    outline: 'none',
                    backgroundColor: '#fff',
                    cursor: 'pointer'
                  }}
                >
                  <option value="">Select Province</option>
                  <option value="AB">Alberta</option>
                  <option value="BC">British Columbia</option>
                  <option value="MB">Manitoba</option>
                  <option value="NB">New Brunswick</option>
                  <option value="NL">Newfoundland and Labrador</option>
                  <option value="NS">Nova Scotia</option>
                  <option value="ON">Ontario</option>
                  <option value="PE">Prince Edward Island</option>
                  <option value="QC">Quebec</option>
                  <option value="SK">Saskatchewan</option>
                </select>
              </div>

              {/* Coverage Amount */}
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '22px', marginBottom: '24px', alignItems: 'center' }}>
                <label style={{ fontWeight: 700, fontSize: '16px', color: '#1f2937' }}>
                  Coverage Amount
                </label>
                <input
                  type="text"
                  placeholder="$500,000"
                  value={formData.coverageAmount > 0 ? `$${formData.coverageAmount.toLocaleString()}` : ''}
                  onChange={(e) => {
                    const numValue = e.target.value.replace(/[$,]/g, '')
                    if (!isNaN(Number(numValue))) {
                      handleInputChange('coverageAmount', parseInt(numValue) || 0)
                    }
                  }}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: '15px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Occupation */}
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '22px', marginBottom: '32px', alignItems: 'center' }}>
                <label style={{ fontWeight: 700, fontSize: '16px', color: '#1f2937' }}>
                  Occupation
                </label>
                <input
                  type="text"
                  placeholder="Enter your occupation"
                  value={formData.occupation}
                  onChange={(e) => handleInputChange('occupation', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: '15px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '18px',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#fff',
                  backgroundColor: '#013946',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  transition: 'background-color 0.3s ease'
                }}
              >
                Submit Request
              </button>

              {/* Form Disclaimer */}
              <div style={{
                backgroundColor: '#f9fafb',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '16px',
                marginTop: '24px'
              }}>
                <p style={{
                  fontSize: '13px',
                  color: '#4b5563',
                  margin: '0 0 8px 0',
                  fontWeight: '500',
                  textAlign: 'center'
                }}>
                  By submitting this form, you agree to be contacted by a licensed advisor to discuss your Sun Life term life insurance options.
                </p>
                <p style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  margin: '0',
                  fontStyle: 'italic',
                  textAlign: 'center'
                }}>
                  Your information is secure, confidential and used only to assist with your insurance inquiry.
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* OTP Verification Modal */}
      {showOTPVerification && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '20px',
            padding: '40px',
            maxWidth: '400px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#1f2937',
              marginBottom: '12px'
            }}>
              Verify Your Number
            </h2>
            <p style={{
              fontSize: '14px',
              color: '#6b7280',
              marginBottom: '24px'
            }}>
              An OTP has been sent to {phoneNumber}
            </p>
            
            <div style={{
              display: 'flex',
              gap: '8px',
              justifyContent: 'center',
              marginBottom: '24px'
            }}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOTPChange(index, e.target.value)}
                  style={{
                    width: '40px',
                    height: '40px',
                    textAlign: 'center',
                    fontSize: '18px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#013946'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              ))}
            </div>

            <button
              onClick={handleVerifyOTP}
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: '#013946',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                marginBottom: '16px'
              }}
            >
              Verify
            </button>

            <p style={{
              fontSize: '14px',
              color: '#6b7280'
            }}>
              Didn't receive the code? <button
                onClick={handleResendOTP}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#013946',
                  cursor: 'pointer',
                  fontWeight: 500
                }}
              >
                Resend OTP (42s)
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {showThankYou && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '20px',
            padding: '40px',
            maxWidth: '500px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              backgroundColor: '#013946',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#1f2937',
              marginBottom: '16px'
            }}>
              Thank You!
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#6b7280',
              lineHeight: 1.5,
              marginBottom: '24px'
            }}>
              A Sun Life licensed advisor will get in touch with you shortly.
            </p>
            <button
              onClick={() => setShowThankYou(false)}
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: '#013946',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
              position: 'absolute',
              top: '-8%',
              left: '0',
              zIndex: '10',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '0px'
            }}>
              <Image
                src="/Sun-Life-Financial-Logo.png"
                alt="Sun Life Financial Logo"
                width={520}
                height={156}
                style={{
                  width: 'auto',
                  height: '156px',
                  filter: 'drop-shadow(2px 2px 4px rgba(255, 255, 255, 0.8))'
                }}
              />
              <h1 style={{
                color: '#013946',
                fontSize: '58px',
                fontWeight: '700',
                textAlign: 'left',
                maxWidth: '600px',
                textShadow: '2px 2px 4px rgba(255, 255, 255, 0.8)',
                lineHeight: '1.1',
                letterSpacing: '-0.5px',
                margin: '0',
                marginTop: '-30px'
              }}>
                Plan today,<br />
                Protect tomorrow<br />
                with Sun Life
              </h1>
            </div>
            <Image
              src="/HEader-4.png"
              alt="Sun Life Insurance - Protect Your Family's Future"
              width={1920}
              height={677}
              priority
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '1920px',
                margin: '0 auto',
                display: 'block',
                marginTop: '20px'
              }}
            />
          {/* Hero CTAs - Positioned below text */}
          <div style={{
            position: 'absolute',
            top: '90%',
            left: '0',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '0',
            flexWrap: 'wrap'
          }}>
            <button 
              onClick={() => setShowLeadForm(true)}
              className="btn btn-primary"
              style={{
                minWidth: '200px',
                fontSize: '20px',
                fontWeight: 600,
                padding: '16px 32px',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                backgroundColor: '#FFB800',
                color: '#1A1A1A',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
            >
              GET QUOTE
            </button>
          </div>
        </div>
      </section>

      {/* What is Sun Life Insurance */}
      <section className="section section-white">
        <div className="vitality-intro">
          <h2>Protect what matters most with Sun Life</h2>
          <p>
            Secure your family's future with reliable coverage. Sun Life offers flexible life insurance options designed to safeguard your loved ones, pay off debts, and preserve your legacy — all with reliable coverage from one of Canada's most established insurers.
            <br /><br />
            Whether you're looking for affordable term coverage or lifetime protection that builds value, Sun Life makes it easy to find the right plan for your needs and budget.
          </p>
        </div>
      </section>

      {/* Active Lifestyle Benefits */}
      <section className="section section-white" style={{ paddingTop: '60px' }}>
        <div className="benefits-section">
          <div className="benefits-image" style={{ flex: '0 0 45%' }}>
            <Image
              src="/mid-image-2-.png"
              alt="Family enjoying quality time together"
              width={500}
              height={594}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '12px',
                objectFit: 'cover',
                maxHeight: '594px'
              }}
            />
          </div>
          <div className="benefits-content">
            <h3>Why Canadians choose Sun Life insurance</h3>
            
            <div style={{ marginTop: '32px', marginBottom: '20px' }}>
              <ul className="benefits-list">
                <li><strong>Financial security for your loved ones</strong><br />
                Your family receives a tax-free benefit to cover debts, income loss, or future goals.</li>
                
                <li><strong>Flexible plans for every life stage</strong><br />
                Choose from term, permanent, or participating life insurance options that evolve with your needs.</li>
                
                <li><strong>Affordable and customizable</strong><br />
                Find a plan that fits your budget — with coverage starting at just a few dollars a day.</li>
                
                <li><strong>Expert guidance, no pressure</strong><br />
                Get a free consultation with a licensed advisor who helps you understand your options and choose confidently.</li>
                
                <li><strong>Trusted by millions of Canadians</strong><br />
                With 150+ years of experience, Sun Life is one of Canada&#39;s most reliable and respected life insurance providers.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>




      {/* Insurance Answers Section */}
      <section className="section section-white">
          <div style={{
          backgroundColor: '#FFF8E0',
          borderRadius: '16px',
          padding: '24px 30px',
          display: 'flex',
          alignItems: 'center',
          gap: '60px',
          maxWidth: '1200px',
            margin: '0 auto'
          }}>
          <div style={{
            flex: '1',
            maxWidth: '500px'
          }}>
            <Image
              src="/CTA-NEW-.png"
              alt="Ready to get your Sun Life quote"
              width={500}
              height={400}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px'
              }}
            />
              </div>
          <div style={{ flex: '1' }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#1f2937',
              marginBottom: '20px',
              lineHeight: 1.2,
              textAlign: 'left'
            }}>
              Ready to get your Sun Life quote?
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#4a5568',
              lineHeight: 1.6,
              marginBottom: '32px',
              textAlign: 'left'
            }}>
              Get personalized quotes from our licensed advisors in minutes. No obligation, just expert guidance to help you choose the right coverage.
            </p>
            <button
              onClick={() => setShowLeadForm(true)}
              style={{
              backgroundColor: '#013946',
              color: 'white',
                  border: 'none',
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: 600,
              borderRadius: '8px',
                  cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              minWidth: '200px'
            }}>
              GET MY QUOTE
              </button>
          </div>
        </div>
      </section>

      {/* Term Life Insurance Products */}
      <section className="section section-white" style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="centered-underlined-heading" style={{ marginBottom: '40px', fontSize: '32px', fontWeight: 700, color: '#2d3748', lineHeight: 1.3, textAlign: 'center' }}>
            Sun Life term life insurance products
          </h2>
          
          <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '33px',
            marginTop: '20px'
          }}>
            {/* SunTerm Card */}
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '0',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ 
                height: '200px',
                position: 'relative',
                overflow: 'hidden'
              }}>
          <Image
                  src="/Sun-term-.png"
                  alt="SunTerm Life Insurance"
                  fill
            style={{
                    objectFit: 'cover'
            }}
          />
        </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 700, 
                  color: '#1f2937', 
                  marginBottom: '12px',
                  marginTop: 0
                }}>
                  SunTerm
                </h3>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#4a5568', 
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Comprehensive, renewable coverage up to $15 million, with robust rider options and conversion to permanent life insurance available.
                </p>
                </div>
              </div>

            {/* SunSpectrum Term Card */}
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '0',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ 
                height: '200px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <Image
                  src="/SunSpectrum-Term.png"
                  alt="SunSpectrum Term Life Insurance"
                  fill
                style={{
                    objectFit: 'cover'
                  }}
                />
                  </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 700, 
                  color: '#1f2937', 
                  marginBottom: '12px',
                  marginTop: 0
                }}>
                  SunSpectrum Term
                </h3>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#4a5568', 
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Affordable premiums, streamlined features, and coverage up to $15 million.
                </p>
                </div>
              </div>

            {/* SunLife Go Card */}
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '0',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ 
                height: '200px',
                position: 'relative',
                overflow: 'hidden'
              }}>
          <Image
                  src="/SunLife-Go-&-SunLife-Go-Simplified-.png"
                  alt="SunLife Go Life Insurance"
                  fill
            style={{
                    objectFit: 'cover'
            }}
          />
                  </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 700, 
                  color: '#1f2937', 
                  marginBottom: '12px',
                  marginTop: 0
                }}>
                  SunLife Go & SunLife Go Simplified
                </h3>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#4a5568', 
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Easy to apply for, no-medical-exam online policies with coverage up to $1 million—ideal for fast, basic protection needs.
                </p>
                  </div>
                </div>
              </div>
        </div>
      </section>


      {/* Enjoy Exclusive Benefits */}
      <section className="section section-white">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="centered-underlined-heading" style={{ fontSize: '32px', fontWeight: 700, color: '#2d3748', marginBottom: '40px', lineHeight: 1.3, textAlign: 'center' }}>
            Enjoy exclusive benefits
          </h2>

          <div style={{
              display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '33px',
            marginTop: '20px'
          }}>
            {/* Affordable Premiums */}
            <div style={{
              textAlign: 'left'
            }}>
              <div style={{
                display: 'flex',
              alignItems: 'center',
                justifyContent: 'flex-start',
                marginBottom: '16px',
                fontSize: '32px',
                color: '#013946'
              }}>
                <AiOutlineDollar />
                  </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#1f2937',
                marginBottom: '10px',
                marginTop: 0
              }}>
                Affordable Premiums
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: 1.6,
                margin: 0
              }}>
                Get substantial coverage at a fraction of the cost of permanent insurance, especially when you&#39;re young and healthy.
              </p>
                  </div>

            {/* Financial Protection */}
            <div style={{
              textAlign: 'left'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginBottom: '16px',
                fontSize: '32px',
                color: '#013946'
              }}>
                <BsShield />
                </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#1f2937',
                marginBottom: '10px',
                marginTop: 0
              }}>
                Financial Protection
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: 1.6,
                margin: 0
              }}>
                Ensure your family can maintain their lifestyle and meet financial obligations if you&#39;re no longer there to provide.
          </p>
        </div>

            {/* Peace of Mind */}
            <div style={{
              textAlign: 'left'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginBottom: '16px',
                fontSize: '32px',
                color: '#013946'
              }}>
                <AiOutlineHeart />
          </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#1f2937',
                marginBottom: '10px',
                marginTop: 0
              }}>
                Peace of Mind
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: 1.6,
                margin: 0
              }}>
                Focus on living your life knowing your family&#39;s financial future is secure during critical years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost of Term Insurance */}
      <section className="section section-white">
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
            display: 'grid',
            gridTemplateColumns: '45% 50%',
            gap: '60px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div>
              <h2 style={{ 
                fontSize: '32px', 
                fontWeight: 700, 
                color: '#2d3748', 
                marginBottom: '24px', 
                textAlign: 'left', 
                lineHeight: 1.3,
                position: 'relative',
                paddingBottom: '16px'
              }}>
                Cost of term insurance in Canada
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '60px',
                  height: '4px',
                  background: '#013946'
                }}></span>
              </h2>
              <p style={{ 
                fontSize: '17px', 
                color: '#4a5568', 
                lineHeight: 1.5,
                marginTop: '0',
                marginBottom: '0'
              }}>
                Your life insurance premium depends on factors like age, gender, coverage amount, term length, and overall health — but term life coverage is often more affordable than you might think.
                <br />
                Sun Life makes it easy and accessible to protect your family's financial future with flexible, budget-friendly options.
                <br />
                Here are some sample rates — your exact cost will vary based on your coverage and term.
                <br />
                A licensed Sun Life advisor can help you find the right plan for your needs and budget — at no cost.
              </p>
            </div>

            <div style={{
              flex: '0 0 50%'
            }}>
              <table style={{
              width: '100%', 
              borderCollapse: 'collapse',
              backgroundColor: '#fff',
              borderRadius: '6px',
              overflow: 'hidden',
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#FFF8E0' }}>
                  <th style={{ 
                    padding: '12px', 
                    textAlign: 'left', 
                    fontWeight: 700, 
                    fontSize: '15px', 
                    color: '#1f2937',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    Age range
                  </th>
                  <th style={{ 
                    padding: '12px', 
                    textAlign: 'left', 
                    fontWeight: 700, 
                    fontSize: '15px', 
                    color: '#1f2937',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    Premiums (female)
                  </th>
                  <th style={{ 
                    padding: '12px', 
                    textAlign: 'left', 
                    fontWeight: 700, 
                    fontSize: '15px', 
                    color: '#1f2937',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    Premiums (male)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '16px', fontSize: '16px', color: '#1f2937' }}>20s</td>
                  <td style={{ padding: '16px', fontSize: '16px', color: '#1f2937', fontWeight: '600' }}>$29.10</td>
                  <td style={{ padding: '16px', fontSize: '16px', color: '#1f2937', fontWeight: '600' }}>$47.33</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                  <td style={{ padding: '16px', fontSize: '16px', color: '#1f2937' }}>30s</td>
                  <td style={{ padding: '16px', fontSize: '16px', color: '#1f2937', fontWeight: '600' }}>$54.12</td>
                  <td style={{ padding: '16px', fontSize: '16px', color: '#1f2937', fontWeight: '600' }}>$76.70</td>
                </tr>
                <tr>
                  <td style={{ padding: '16px', fontSize: '16px', color: '#1f2937' }}>40s</td>
                  <td style={{ padding: '16px', fontSize: '16px', color: '#1f2937', fontWeight: '600' }}>$136.23</td>
                  <td style={{ padding: '16px', fontSize: '16px', color: '#1f2937', fontWeight: '600' }}>$212.48</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                  <td style={{ padding: '16px', fontSize: '16px', color: '#1f2937' }}>50s</td>
                  <td style={{ padding: '16px', fontSize: '16px', color: '#1f2937', fontWeight: '600' }}>$298.45</td>
                  <td style={{ padding: '16px', fontSize: '16px', color: '#1f2937', fontWeight: '600' }}>$425.67</td>
                </tr>
                <tr>
                  <td style={{ padding: '16px', fontSize: '16px', color: '#1f2937' }}>60s</td>
                  <td style={{ padding: '16px', fontSize: '16px', color: '#1f2937', fontWeight: '600' }}>$587.92</td>
                  <td style={{ padding: '16px', fontSize: '16px', color: '#1f2937', fontWeight: '600' }}>$789.34</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section - Get Quote */}
      <section className="section section-white">
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          backgroundColor: '#FFF8E0',
          padding: '35px 45px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '33px',
          flexWrap: 'wrap'
        }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              fontWeight: 700, 
              color: '#2d3748', 
              marginBottom: '12px',
              lineHeight: 1.3,
              textAlign: 'left'
            }}>
              Ready to protect your family with Sun Life?
            </h2>
            <p style={{ 
              fontSize: '18px', 
              color: '#4a5568', 
              margin: 0,
              lineHeight: 1.7,
              textAlign: 'left'
            }}>
              Get your personalized Sun Life quote in minutes!
            </p>
          </div>
          <div>
            <button
              onClick={() => setShowLeadForm(true)}
              className="btn btn-primary"
              style={{
                minWidth: '200px',
                fontSize: '16px',
                padding: '16px 40px',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#013946'
              }}
            >
              GET QUOTE
            </button>
          </div>
        </div>
      </section>

      {/* Sun Life Term Life Features */}
      <section className="section section-white">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="centered-underlined-heading" style={{ 
            fontSize: '32px', 
            fontWeight: 700, 
            color: '#2d3748', 
            marginBottom: '40px', 
            textAlign: 'center',
            lineHeight: 1.3 
          }}>
            Sun Life term life features at a glance
          </h2>

          {/* Features Grid */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '26px',
            marginTop: '20px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Level Premiums */}
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '24px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)'
            }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
                 justifyContent: 'center',
                 fontSize: '24px',
                 color: '#013946',
                 flexShrink: 0
               }}>
                 <BsGraphUp />
               </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1f2937', marginBottom: '4px', marginTop: 0 }}>
                  Level premiums
                </h3>
                <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: 1.5, margin: 0 }}>
                  Your payments stay the same for your full term.
                </p>
              </div>
            </div>

            {/* Flexible Terms */}
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '24px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)'
            }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
                 justifyContent: 'center',
                 fontSize: '24px',
                 color: '#013946',
                 flexShrink: 0
               }}>
                 <AiOutlineCalendar />
               </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1f2937', marginBottom: '4px', marginTop: 0 }}>
                  Flexible terms
                </h3>
                <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: 1.5, margin: 0 }}>
                  Choose 10, 15, 20, or 30 years.
                </p>
              </div>
            </div>

            {/* High Coverage Limits */}
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '24px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)'
            }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
                 justifyContent: 'center',
                 fontSize: '24px',
                 color: '#013946',
                 flexShrink: 0
               }}>
                 <BsShield />
               </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1f2937', marginBottom: '4px', marginTop: 0 }}>
                  High coverage limits
                </h3>
                <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: 1.5, margin: 0 }}>
                  Options from $50,000 up to $15 million.
                </p>
              </div>
            </div>

            {/* Convertible */}
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '24px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)'
            }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
                 justifyContent: 'center',
                 fontSize: '24px',
                 color: '#013946',
                 flexShrink: 0
               }}>
                 <AiOutlineSwap />
               </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1f2937', marginBottom: '4px', marginTop: 0 }}>
                  Convertible
                </h3>
                <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: 1.5, margin: 0 }}>
                  Switch to permanent life insurance until age 75 (on select plans).
                </p>
              </div>
            </div>

            {/* Customizable Riders */}
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '24px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)'
            }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
                 justifyContent: 'center',
                 fontSize: '24px',
                 color: '#013946',
                 flexShrink: 0
               }}>
                 <AiOutlinePlus />
               </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1f2937', marginBottom: '4px', marginTop: 0 }}>
                  Customizable riders
                </h3>
                <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: 1.5, margin: 0 }}>
                  Add options like disability waiver, accidental death, and child coverage.
                </p>
              </div>
            </div>

            {/* Digital & Advisor-Assisted */}
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '24px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)'
            }}>
             <div style={{
                 display: 'flex',
              alignItems: 'center',
                 justifyContent: 'center',
                 fontSize: '24px',
                 color: '#013946',
                 flexShrink: 0
               }}>
                 <AiOutlineLaptop />
               </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1f2937', marginBottom: '4px', marginTop: 0 }}>
                  Digital & advisor-assisted
                </h3>
                <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: 1.5, margin: 0 }}>
                  Apply online or with a licensed Sun Life advisor.
                </p>
              </div>
            </div>

            {/* Living Benefit */}
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '24px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)'
            }}>
             <div style={{
                 display: 'flex',
              alignItems: 'center',
                 justifyContent: 'center',
                 fontSize: '24px',
                 color: '#013946',
                 flexShrink: 0
               }}>
                 <FaHandHoldingHeart />
            </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1f2937', marginBottom: '4px', marginTop: 0 }}>
                  Living benefit
                </h3>
                <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: 1.5, margin: 0 }}>
                  Early payout available if diagnosed with a terminal illness (on select plans).
                </p>
          </div>
        </div>

            {/* Renewable Coverage */}
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '24px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)'
            }}>
             <div style={{
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 fontSize: '24px',
                 color: '#013946',
                 flexShrink: 0
               }}>
                 <BsGraphUp />
               </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1f2937', marginBottom: '4px', marginTop: 0 }}>
                  Renewable Coverage
                </h3>
                <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: 1.5, margin: 0 }}>
                  Easily extend your protection at the end of your term, no new medical exam required.
                </p>
              </div>
            </div>

            {/* Wellness Resources */}
            <div style={{ 
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
          borderRadius: '12px',
              padding: '24px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)'
            }}>
             <div style={{
          display: 'flex',
          alignItems: 'center',
                 justifyContent: 'center',
                 fontSize: '24px',
                 color: '#013946',
                 flexShrink: 0
               }}>
                 <FaUserMd />
          </div>
          <div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1f2937', marginBottom: '4px', marginTop: 0 }}>
                  Wellness resources
                </h3>
                <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: 1.5, margin: 0 }}>
                  Personalized health support (e.g., diabetes management tools).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQs */}
      <section className="faq-section">
        <h2 style={{ textAlign: 'center' }}>FAQs</h2>
            <p className="faq-subtitle">Everything you need to know about Sun Life term life insurance.</p>
        <div className="faq-list">
          <div className={`faq-item ${activeFAQ === 0 ? 'active' : ''}`} onClick={() => toggleFAQ(0)}>
            <div className="faq-question">
                  <span>What is term life insurance?</span>
              <span>{activeFAQ === 0 ? '−' : '+'}</span>
            </div>
            {activeFAQ === 0 && (
              <div className="faq-answer">
                    Term life insurance provides coverage for a specific period. If you pass away during the term, your beneficiaries receive a tax-free payout to help replace lost income or cover expenses.
              </div>
            )}
          </div>
          
          <div className={`faq-item ${activeFAQ === 1 ? 'active' : ''}`} onClick={() => toggleFAQ(1)}>
            <div className="faq-question">
                  <span>What types of term life insurance does Sun Life offer?</span>
              <span>{activeFAQ === 1 ? '−' : '+'}</span>
            </div>
            {activeFAQ === 1 && (
              <div className="faq-answer">
                    Sun Life offers four main term life products: SunTerm, SunSpectrum Term, SunLife Go, and SunLife Go Simplified. Each varies by coverage limit, application process, and available riders.
              </div>
            )}
          </div>

          <div className={`faq-item ${activeFAQ === 2 ? 'active' : ''}`} onClick={() => toggleFAQ(2)}>
            <div className="faq-question">
                  <span>Can I convert my Sun Life term policy to permanent insurance?</span>
              <span>{activeFAQ === 2 ? '−' : '+'}</span>
            </div>
            {activeFAQ === 2 && (
              <div className="faq-answer">
                    Yes, most Sun Life term life insurance policies allow conversion to permanent insurance—whole life or universal—until age 75, providing you greater long-term flexibility.
              </div>
            )}
          </div>

          <div className={`faq-item ${activeFAQ === 3 ? 'active' : ''}`} onClick={() => toggleFAQ(3)}>
            <div className="faq-question">
                  <span>How much does Sun Life term life insurance cost?</span>
              <span>{activeFAQ === 3 ? '−' : '+'}</span>
            </div>
            {activeFAQ === 3 && (
              <div className="faq-answer">
                    Premiums depend on age, gender, health, term length, and coverage amount. As an example, a healthy 35-year-old non-smoker might pay about $35/month for $500,000 of coverage over 20 years.
              </div>
            )}
          </div>

          <div className={`faq-item ${activeFAQ === 4 ? 'active' : ''}`} onClick={() => toggleFAQ(4)}>
            <div className="faq-question">
                  <span>What rider options are available with Sun Life term life insurance?</span>
              <span>{activeFAQ === 4 ? '−' : '+'}</span>
            </div>
            {activeFAQ === 4 && (
              <div className="faq-answer">
                    You can customize your policy with riders such as accidental death, child coverage, disability waiver of premium, or guaranteed insurability, depending on your chosen product.
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Footer Disclaimer */}
      <footer style={{
        backgroundColor: '#f9fafb',
        borderTop: '1px solid #e5e7eb',
        padding: '40px 20px',
        marginTop: '80px'
      }}>
        <div style={{
          width: '100%',
          padding: '0 40px'
        }}>
            <p style={{
              fontSize: '11px',
              color: '#6b7280',
              lineHeight: '1.8',
              margin: '0 0 16px 0',
              textAlign: 'center'
            }}>
              Disclaimer: This website is operated by Policy Advisor, an independent insurance broker. We are not directly affiliated with or endorsed by Sun Life Financial. All product names, logos, and brands are property of their respective owners. The information provided on this site is for general informational purposes only and should not be considered as professional insurance advice. Insurance products and their features may vary based on your location and individual circumstances. For specific details about Sun Life insurance products, please consult with a licensed Sun Life advisor.
            </p>
            <p style={{
              fontSize: '11px',
              color: '#6b7280',
              margin: '0',
              textAlign: 'center',
              borderTop: '1px solid #e5e7eb',
              paddingTop: '16px'
            }}>
              © 2024 Policy Advisor. All rights reserved.
            </p>
          </div>
      </footer>
    </main>
  )
}

