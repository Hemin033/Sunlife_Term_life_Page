'use client'

import { useState } from 'react'
import Image from 'next/image'
import { IoMdWalk } from 'react-icons/io'
import { MdDirectionsRun } from 'react-icons/md'
import { GiWeightLiftingUp } from 'react-icons/gi'

export default function Home() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null)
  const [showLeadForm, setShowLeadForm] = useState(false)
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
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add API call here
    alert('Thank you! We will get in touch with you shortly.')
    setShowLeadForm(false)
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
              marginBottom: '32px',
              textAlign: 'center'
            }}>
              Fill out the form and we&apos;ll get in touch with you shortly
            </p>

            {/* Form */}
            <form onSubmit={handleSubmitLead}>
              {/* Full Name */}
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '20px', marginBottom: '24px', alignItems: 'center' }}>
                <label style={{ fontWeight: 700, fontSize: '16px', color: '#1f2937' }}>
                  Full Name <span style={{ color: '#ef4444' }}>*</span>
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
                    fontSize: '16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Phone Number */}
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '20px', marginBottom: '24px', alignItems: 'center' }}>
                <label style={{ fontWeight: 700, fontSize: '16px', color: '#1f2937' }}>
                  Phone Number <span style={{ color: '#ef4444' }}>*</span>
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
                    fontSize: '16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Email Address */}
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '20px', marginBottom: '24px', alignItems: 'center' }}>
                <label style={{ fontWeight: 700, fontSize: '16px', color: '#1f2937' }}>
                  Email Address <span style={{ color: '#ef4444' }}>*</span>
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
                    fontSize: '16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Gender */}
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '20px', marginBottom: '24px', alignItems: 'center' }}>
                <label style={{ fontWeight: 700, fontSize: '16px', color: '#1f2937' }}>
                  Gender <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    type="button"
                    onClick={() => handleInputChange('gender', 'Man')}
                    style={{
                      flex: 1,
                      padding: '14px',
                      fontSize: '16px',
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
                      fontSize: '16px',
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
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '20px', marginBottom: '24px', alignItems: 'start' }}>
                <div>
                  <label style={{ fontWeight: 700, fontSize: '16px', color: '#1f2937', display: 'block' }}>
                    Date of Birth <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <p style={{ fontSize: '13px', color: '#6b7280', margin: '4px 0 0 0' }}>
                    Your premium depends on your age.
                  </p>
                </div>
                <input
                  type="text"
                  required
                  placeholder="MM/DD/YYYY"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: '16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Smoker Status */}
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '20px', marginBottom: '24px', alignItems: 'start' }}>
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
                      fontSize: '16px',
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
                      fontSize: '16px',
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
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '20px', marginBottom: '24px', alignItems: 'center' }}>
                <label style={{ fontWeight: 700, fontSize: '16px', color: '#1f2937' }}>
                  Province
                </label>
                <select
                  value={formData.province}
                  onChange={(e) => handleInputChange('province', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: '16px',
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
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '20px', marginBottom: '24px', alignItems: 'center' }}>
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
                    fontSize: '16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Occupation */}
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '20px', marginBottom: '32px', alignItems: 'center' }}>
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
                    fontSize: '16px',
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
                  backgroundColor: '#d81671',
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
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container" style={{ position: 'relative' }}>
          <Image
            src="/header.png"
            alt="Manulife Vitality - Free Apple Watch, Lower Premiums, Gift Cards"
            width={1920}
            height={400}
            priority
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '1920px',
              margin: '0 auto',
              display: 'block'
            }}
          />
          {/* Hero CTAs - Positioned below Manulife Vitality logo */}
          <div style={{
            position: 'absolute',
            bottom: '4%',
            left: '35%',
            transform: 'translateX(-50%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            padding: '0 20px',
            flexWrap: 'wrap'
          }}>
            <button 
              onClick={() => setShowLeadForm(true)}
              className="btn btn-primary"
              style={{
                minWidth: '192px',
                fontSize: '14px',
                fontWeight: 700,
                padding: '14px 38px',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              GET QUOTE NOW
            </button>
            <a 
              href="https://www.policyadvisor.com/app/schedule-meeting/?source_url=https://www.policyadvisor.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
              style={{
                minWidth: '192px',
                fontSize: '14px',
                fontWeight: 700,
                padding: '14px 38px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                height: '46px'
              }}
            >
              SCHEDULE A CALL
            </a>
          </div>
        </div>
      </section>

      {/* What is Manulife Vitality */}
      <section className="section section-white">
        <div className="vitality-intro">
          <h2>What is Manulife Vitality?</h2>
          <p>
            Manulife Vitality in Canada is a wellness program available with select Manulife life insurance policies. It goes beyond traditional insurance by rewarding you for making healthier lifestyle choices.
            <br /><br />
            You can earn Vitality Points for everyday activities, like walking, working out, getting enough sleep, or completing health assessments and screenings. As you accumulate points, you unlock rewards such as discounts from popular brands, gift cards, and even the opportunity to earn a free Apple Watch through the Vitality Active Rewards program.
          </p>
        </div>
      </section>

      {/* Active Lifestyle Benefits */}
      <section className="section section-white" style={{ paddingTop: '60px' }}>
        <div className="benefits-section">
          <div className="benefits-image">
            <Image
              src="/running-couple.jpg"
              alt="Active couple running together"
              width={600}
              height={600}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                objectFit: 'cover'
              }}
            />
          </div>
          <div className="benefits-content">
            <h3>Enjoy Exclusive Rewards</h3>
            <p className="subtitle" style={{ marginBottom: '16px' }}>Here&#39;s what you can get:</p>
            
            <div style={{ marginBottom: '20px' }}>
              <p style={{ fontSize: '18px', color: '#2d3748', marginBottom: '0' }}>
                <strong>Wearable devices:</strong> Earn a free or discounted <strong>Apple Watch, Oura Ring 4, Garmin</strong> fitness tracker
              </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <p style={{ fontSize: '18px', color: '#2d3748', marginBottom: '12px' }}>
                <strong>Discounts:</strong> Feast your eyes on these rewards from our partners!
              </p>
              <ul className="benefits-list">
                <li>Save up to <strong>$1,000/year</strong> with <strong>Expedia</strong></li>
                <li>Get a <strong>$99 Amazon</strong> gift code to use at Amazon.ca</li>
                <li>Get a <strong>free paramedical exam</strong> from <strong>ExamOne®</strong></li>
                <li>Save up to <strong>30% on Adidas®</strong> sportswear</li>
                <li><strong>$40 off a WHOOP</strong> membership and <strong>20% savings</strong> on WHOOP apparel and accessories</li>
                <li>Fitness savings from <strong>GoodLife Fitness, Orangetheory Fitness</strong> and <strong>Les Mills+</strong></li>
                <li>Save on healthy meal kits with <strong>HelloFresh</strong></li>
              </ul>
            </div>

            <div style={{ marginTop: '24px' }}>
              <p style={{ fontSize: '18px', color: '#2d3748' }}>
                <strong>Gift cards:</strong> You can win gift cards from <strong>Tim Hortons, Starbucks, Walmart, Amazon.ca,</strong> and <strong>Winners/Marshalls/Homesense</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-white">
        <div className="testimonials-section">
          <h2 style={{ textAlign: 'center' }}>What our clients say about us</h2>
          <div style={{
            backgroundColor: '#EEFCFE',
            borderRadius: '20px',
            padding: '35px 45px',
            width: '98%',
            maxWidth: '1800px',
            margin: '0 auto'
          }}>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p>
                  I couldn&#39;t get cheaper health insurance even if I tried. It was easy to apply and I got it approved within a couple of days. 
                  I would recommend it to other first time applicants like myself!
                </p>
                <p className="testimonial-author">Sanjeev M.</p>
              </div>
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p>
                  Incredible! PolicyAdvisor took the time to fully explain everything about the policy and made the application super easy. 
                  The Vitality program is a great bonus - I love earning rewards for staying healthy!
                </p>
                <p className="testimonial-author">Lisa K.</p>
              </div>
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p>
                  I was skeptical at first, but PolicyAdvisor made getting life insurance with Vitality benefits straightforward. 
                  The Apple Watch incentive was a great perk and now I&#39;m saving on premiums too!
                </p>
                <p className="testimonial-author">Mark T.</p>
              </div>
            </div>
            <div className="cta-buttons">
              <button
                onClick={() => setShowLeadForm(true)}
                className="btn btn-primary"
                style={{
                  minWidth: '260px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                Get Free Quote
              </button>
              <a href="https://www.policyadvisor.com/app/schedule-meeting/?source_url=https://www.policyadvisor.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ minWidth: '260px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>Schedule a Call</a>
            </div>
          </div>
        </div>
      </section>

      {/* Are You Manulife Vitality Ready */}
      <section className="section section-white">
        <div style={{ maxWidth: '1311px', margin: '0 auto', textAlign: 'center' }}>
          <Image
            src="/vitality-steps.png"
            alt="Manulife Vitality Steps - How to Get Started"
            width={1400}
            height={900}
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '100%'
            }}
          />
        </div>
      </section>

      {/* Reward Status Levels */}
      <section className="section section-white">
        <div className="rewards-section">
          <h2 className="centered-underlined-heading" style={{ marginBottom: '24px', fontSize: '32px', fontWeight: 700, color: '#2d3748', lineHeight: 1.3, textAlign: 'center' }}>
            Lower your insurance costs while getting healthier
          </h2>
          <p style={{ fontSize: '18px', color: '#4a5568', lineHeight: 1.4, maxWidth: '1100px', margin: '0 auto 12px', textAlign: 'left' }}>
            One of the biggest benefits of Manulife Vitality Plus is the money you save on your insurance premiums every single year.
          </p>
          <p style={{ fontSize: '18px', color: '#4a5568', lineHeight: 1.4, maxWidth: '1100px', margin: '0 auto 12px', textAlign: 'left' }}>
            In <strong>Year 1</strong>, you automatically save <strong>10%</strong> just for joining—no points required.
          </p>
          <p style={{ fontSize: '18px', color: '#4a5568', lineHeight: 1.4, maxWidth: '1100px', margin: '0 auto 24px', textAlign: 'left' }}>
            From <strong>Year 2 onwards</strong>, your savings grow based on how active you are. The more Vitality Points you earn, the higher your status level climbs, and the more you save:
          </p>
          <div style={{ maxWidth: '1265px', margin: '0 auto 48px', textAlign: 'center' }}>
            <div className="status-levels-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Bronze Status */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                <svg width="70" height="70" viewBox="0 0 64 64" fill="none">
                  <path fill="#8B6F3E" d="M60,4H48c0-2.215-1.789-4-4-4H20c-2.211,0-4,1.785-4,4H4C1.789,4,0,5.785,0,8v8c0,8.836,7.164,16,16,16
                  	c0.188,0,0.363-0.051,0.547-0.059C17.984,37.57,22.379,41.973,28,43.43V56h-8c-2.211,0-4,1.785-4,4v4h32v-4c0-2.215-1.789-4-4-4h-8
                  	V43.43c5.621-1.457,10.016-5.859,11.453-11.488C47.637,31.949,47.812,32,48,32c8.836,0,16-7.164,16-16V8C64,5.785,62.211,4,60,4z
                  	 M8,16v-4h8v12C11.582,24,8,20.414,8,16z M56,16c0,4.414-3.582,8-8,8V12h8V16z"/>
                </svg>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '22px', fontWeight: '700', color: '#000', marginBottom: '6px' }}>
                    Bronze Status
                  </div>
                  <div style={{ fontSize: '24px', color: '#333', fontWeight: '700' }} className="points-text">
                    0 points
                  </div>
                </div>
              </div>

              {/* Silver Status */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                <svg width="70" height="70" viewBox="0 0 64 64" fill="none">
                  <path fill="#C0C0C0" d="M60,4H48c0-2.215-1.789-4-4-4H20c-2.211,0-4,1.785-4,4H4C1.789,4,0,5.785,0,8v8c0,8.836,7.164,16,16,16
                  	c0.188,0,0.363-0.051,0.547-0.059C17.984,37.57,22.379,41.973,28,43.43V56h-8c-2.211,0-4,1.785-4,4v4h32v-4c0-2.215-1.789-4-4-4h-8
                  	V43.43c5.621-1.457,10.016-5.859,11.453-11.488C47.637,31.949,47.812,32,48,32c8.836,0,16-7.164,16-16V8C64,5.785,62.211,4,60,4z
                  	 M8,16v-4h8v12C11.582,24,8,20.414,8,16z M56,16c0,4.414-3.582,8-8,8V12h8V16z"/>
                </svg>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '22px', fontWeight: '700', color: '#000', marginBottom: '6px' }}>
                    Silver Status
                  </div>
                  <div style={{ fontSize: '24px', color: '#333', fontWeight: '700' }} className="points-text">
                    3,500 points
                  </div>
                </div>
              </div>

              {/* Gold Status */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                <svg width="70" height="70" viewBox="0 0 64 64" fill="none">
                  <path fill="#FFD700" d="M60,4H48c0-2.215-1.789-4-4-4H20c-2.211,0-4,1.785-4,4H4C1.789,4,0,5.785,0,8v8c0,8.836,7.164,16,16,16
                  	c0.188,0,0.363-0.051,0.547-0.059C17.984,37.57,22.379,41.973,28,43.43V56h-8c-2.211,0-4,1.785-4,4v4h32v-4c0-2.215-1.789-4-4-4h-8
                  	V43.43c5.621-1.457,10.016-5.859,11.453-11.488C47.637,31.949,47.812,32,48,32c8.836,0,16-7.164,16-16V8C64,5.785,62.211,4,60,4z
                  	 M8,16v-4h8v12C11.582,24,8,20.414,8,16z M56,16c0,4.414-3.582,8-8,8V12h8V16z"/>
                </svg>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '22px', fontWeight: '700', color: '#000', marginBottom: '6px' }}>
                    Gold Status
                  </div>
                  <div style={{ fontSize: '24px', color: '#333', fontWeight: '700' }} className="points-text">
                    7,000 points
                  </div>
                </div>
              </div>

              {/* Platinum Status */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                <svg width="70" height="70" viewBox="0 0 64 64" fill="none">
                  <path fill="#696969" d="M60,4H48c0-2.215-1.789-4-4-4H20c-2.211,0-4,1.785-4,4H4C1.789,4,0,5.785,0,8v8c0,8.836,7.164,16,16,16
                  	c0.188,0,0.363-0.051,0.547-0.059C17.984,37.57,22.379,41.973,28,43.43V56h-8c-2.211,0-4,1.785-4,4v4h32v-4c0-2.215-1.789-4-4-4h-8
                  	V43.43c5.621-1.457,10.016-5.859,11.453-11.488C47.637,31.949,47.812,32,48,32c8.836,0,16-7.164,16-16V8C64,5.785,62.211,4,60,4z
                  	 M8,16v-4h8v12C11.582,24,8,20.414,8,16z M56,16c0,4.414-3.582,8-8,8V12h8V16z"/>
                </svg>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '22px', fontWeight: '700', color: '#000', marginBottom: '6px' }}>
                    Platinum Status
                  </div>
                  <div style={{ fontSize: '24px', color: '#333', fontWeight: '700' }} className="points-text">
                    10,000 points
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p style={{ fontSize: '18px', color: '#4a5568', lineHeight: 1.4, maxWidth: '1100px', margin: '0 auto 12px', textAlign: 'left' }}>
            The best part? These savings are applied automatically to your premiums based on your earned points—no paperwork, no hassle.
          </p>
          <p style={{ fontSize: '18px', color: '#4a5568', lineHeight: 1.4, maxWidth: '1100px', margin: '0 auto 0', textAlign: 'left' }}>
            So how do you earn those points and unlock bigger savings? Let&#39;s break it down.
          </p>
        </div>
      </section>

      {/* Insurance Answers Section */}
      <section className="section section-white">
        <div className="insurance-answers">
          <div className="insurance-image">
            <Image
              src="/laptop-advisor.webp"
              alt="Licensed advisor on video call"
              width={500}
              height={400}
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '500px'
              }}
            />
          </div>
          <div className="insurance-content">
            <h2 style={{ textAlign: 'center' }} className="no-underline">Need insurance answers now?</h2>
            <p style={{ marginBottom: '24px', color: '#2d3748', fontSize: '18px', lineHeight: 1.7 }}>
              Call <strong style={{ color: '#0086ae' }}>1-888-601-9980</strong> to speak to our licensed advisors right away, or book some time with them.
            </p>
            <a href="https://www.policyadvisor.com/app/schedule-meeting/?source_url=https://www.policyadvisor.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ minWidth: '260px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              SCHEDULE A CALL
            </a>
          </div>
        </div>
      </section>

      {/* Complete Guide to Earning Points */}
      <section className="section section-white">
        <div style={{
          backgroundColor: '#EEFCFE',
          borderRadius: '20px',
          padding: '35px 45px',
          width: '100%',
          maxWidth: '1140px',
          margin: '0 auto'
        }}>
          <h2 className="centered-underlined-heading" style={{ fontSize: '32px', fontWeight: 700, color: '#2d3748', marginBottom: '20px', lineHeight: 1.3, textAlign: 'center' }}>
            Your complete guide to earning Vitality points
          </h2>
          <p style={{ fontSize: '18px', color: '#4a5568', lineHeight: 1.6, marginBottom: '25px', textAlign: 'left' }}>
            Manulife Vitality rewards you for making healthy choices. From daily activities like walking and sleeping to annual health screenings and preventive care, there are countless ways to rack up points. The more points you earn, the higher your Vitality Status (Bronze, Silver, Gold, Platinum)—unlocking better rewards and bigger insurance savings. Here&#39;s your breakdown of how to maximize your points and reach your health goals while earning valuable rewards.
          </p>
          
          {/* Points Table */}
          <div style={{ overflowX: 'auto', marginTop: '20px' }}>
            <table className="points-table" style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              backgroundColor: '#fff',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#e5e7eb' }}>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: 700, fontSize: '16px', color: '#374151', borderBottom: '2px solid #d1d5db' }}>Points</th>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: 700, fontSize: '16px', color: '#374151', borderBottom: '2px solid #d1d5db' }}>Activity</th>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: 700, fontSize: '16px', color: '#374151', borderBottom: '2px solid #d1d5db' }}>Frequency</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>100</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Certification (First-aid, CPR training) with proof upload</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Once per year</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>200</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Dental screening</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Once per year</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>200</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Flu shot</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Once per year</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>200</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Pap smear</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>As recommended</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>200</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Colorectal screening</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>As recommended</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>200</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Mammogram</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>As recommended</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>200</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Skin cancer screening</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Once per year</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>400</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>COVID-19 vaccination</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Up to twice yearly</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>500</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Meditation using compatible app (15+ min sessions)</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Up to 10 points/day</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>500</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Complete Vitality Health Review (VHR)</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Once per year</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>700</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Online nutrition and health education courses</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>As available</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>900</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Healthy sleep: 7-9 hours tracked nightly</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Up to 5 points/day</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>1,000</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Non-smoker declaration</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Once per year</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>1,040</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Weekly goals check-in via the app</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>20 points/week × 52 weeks</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>1,500</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Participation in athletic events or sports leagues</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Per event/season</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>4,500</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Vitality Check health screening or ExamOne/Dynacare paramedical exam</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Once per year</td>
                </tr>
                <tr>
                  <td style={{ padding: '16px', fontSize: '16px', color: '#1f2937', fontWeight: 700 }}>Up to 6,000</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Physical activity tracked daily (steps, exercise duration, heart rate)</td>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#1f2937', textAlign: 'left' }}>Up to 30 points/day based on intensity</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Daily Points You Can Earn */}
      <section className="section section-white">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 className="centered-underlined-heading" style={{ fontSize: '32px', fontWeight: 700, color: '#2d3748', marginBottom: '30px', textAlign: 'center', lineHeight: 1.3 }}>
            Daily points you can earn
          </h2>
          
          {/* Workout Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px' }}>
            {/* Standard Workout */}
            <div style={{ 
              backgroundColor: '#EEFCFE', 
              borderRadius: '24px', 
              padding: '30px 25px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <MdDirectionsRun size={80} color="#d81671" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#1f2937', marginBottom: '8px' }}>Standard Workout</h3>
              <p style={{ fontSize: '18px', color: '#4a5568', margin: 0 }}>Earn 20 points</p>
            </div>

            {/* Advanced Workout */}
            <div style={{ 
              backgroundColor: '#EEFCFE', 
              borderRadius: '24px', 
              padding: '30px 25px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <GiWeightLiftingUp size={80} color="#d81671" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#1f2937', marginBottom: '8px' }}>Advanced Workout</h3>
              <p style={{ fontSize: '18px', color: '#4a5568', margin: 0 }}>Earn 30 points</p>
            </div>
          </div>

          {/* Body Copy */}
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <p style={{ fontSize: '18px', color: '#4a5568', lineHeight: 1.7, marginBottom: '20px' }}>
              <strong style={{ color: '#1f2937' }}>Standard workouts earn you 20 points per day.</strong> This is where most active members fall, hitting a solid daily routine. Qualify by walking 10,000-14,999 steps per day, exercising at 60% or more of your maximum heart rate for 30-44 minutes, burning 200-299 calories during a workout, or working out at a fitness club for 30 minutes or more.
            </p>
            <p style={{ fontSize: '18px', color: '#4a5568', lineHeight: 1.7, marginBottom: '0' }}>
              <strong style={{ color: '#1f2937' }}>Advanced workouts earn you the maximum 30 points per day.</strong> For the fitness enthusiasts and dedicated athletes, this level recognizes your commitment. Reach this by walking 15,000+ steps per day, exercising at 60% or more of your maximum heart rate for 45 minutes or more, or burning 300+ calories during a workout.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Get Quote */}
      <section className="section section-white">
        <div style={{ 
          maxWidth: '1100px', 
          margin: '0 auto',
          backgroundColor: '#EEFCFE',
          padding: '35px 45px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '30px',
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
              Looking for an affordable life insurance policy?
            </h2>
            <p style={{ 
              fontSize: '18px', 
              color: '#4a5568', 
              margin: 0,
              lineHeight: 1.7,
              textAlign: 'left'
            }}>
              Get the lowest quotes at PolicyAdvisor!
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
                justifyContent: 'center'
              }}
            >
              GET QUOTE
            </button>
          </div>
        </div>
      </section>

      {/* Partner Discounts Section */}
      <section className="section section-white">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 className="centered-underlined-heading" style={{ 
            fontSize: '32px', 
            fontWeight: 700, 
            color: '#2d3748', 
            marginBottom: '24px', 
            textAlign: 'center',
            lineHeight: 1.3 
          }}>
            Exclusive access to premium partner discounts
          </h2>
          <p style={{ 
            fontSize: '18px', 
            color: '#4a5568', 
            lineHeight: 1.6, 
            marginBottom: '30px',
            textAlign: 'left'
          }}>
            When you get Manulife Vitality through PolicyAdvisor, you unlock exclusive access to premium partners offering savings and rewards across multiple categories. From fitness equipment and activewear to healthy meal services, travel bookings, entertainment, and wellness products, these partnerships are designed to support your healthy lifestyle while saving you money. These aren&#39;t just generic offers—they&#39;re valuable savings that can add up to hundreds or even thousands of dollars per year. As your insurance advisors, we&#39;ll help you understand which partner benefits align best with your lifestyle, ensuring you maximize every reward opportunity available through your Manulife Vitality membership.
          </p>

          {/* Partner Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', 
            gap: '18px',
            marginTop: '20px'
          }}>
            {/* Apple Watch */}
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <Image
                src="/manulife-vitality-thumbnail-Apple-Watch.png"
                alt="Apple Watch"
                width={260}
                height={174}
                style={{
                  width: '260px',
                  height: '174px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>

            {/* Adidas */}
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <Image
                src="/manulife-vitality-thumbnail-adidas.svg"
                alt="Adidas"
                width={260}
                height={174}
                style={{
                  width: '260px',
                  height: '174px',
                  objectFit: 'contain',
                  marginBottom: '16px',
                  display: 'block'
                }}
              />
            </div>

            {/* Amazon */}
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <Image
                src="/manulife-vitality-thumbnail-amazon.svg"
                alt="Amazon"
                width={260}
                height={174}
                style={{
                  width: '260px',
                  height: '174px',
                  objectFit: 'contain',
                  marginBottom: '16px',
                  display: 'block'
                }}
              />
            </div>

            {/* ExamOne */}
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <Image
                src="/manulife-vitality-thumbnail-Exam-One.png"
                alt="ExamOne"
                width={260}
                height={174}
                style={{
                  width: '260px',
                  height: '174px',
                  objectFit: 'contain',
                  marginBottom: '16px',
                  display: 'block'
                }}
              />
            </div>

            {/* Expedia */}
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <Image
                src="/manulife-vitality-thumbnail-Expedia.svg"
                alt="Expedia"
                width={260}
                height={174}
                style={{
                  width: '260px',
                  height: '174px',
                  objectFit: 'contain',
                  marginBottom: '16px',
                  display: 'block'
                }}
              />
            </div>

            {/* Garmin */}
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <Image
                src="/manulife-vitality-thumbnail-Garmin.png"
                alt="Garmin"
                width={260}
                height={174}
                style={{
                  width: '260px',
                  height: '174px',
                  objectFit: 'contain',
                  marginBottom: '16px',
                  display: 'block'
                }}
              />
            </div>

            {/* GoodLife Fitness */}
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <Image
                src="/manulife-vitality-thumbnail-Goodlife.png"
                alt="GoodLife Fitness"
                width={260}
                height={174}
                style={{
                  width: '260px',
                  height: '174px',
                  objectFit: 'contain',
                  marginBottom: '16px',
                  display: 'block'
                }}
              />
            </div>

            {/* HelloFresh */}
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <Image
                src="/manulife-vitality-thumbnail-HelloFresh.png"
                alt="HelloFresh"
                width={260}
                height={174}
                style={{
                  width: '260px',
                  height: '174px',
                  objectFit: 'contain',
                  marginBottom: '16px',
                  display: 'block'
                }}
              />
            </div>

            {/* Les Mills+ */}
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <Image
                src="/manulife-vitality-thumbnail-lesmills.svg"
                alt="Les Mills+"
                width={260}
                height={174}
                style={{
                  width: '260px',
                  height: '174px',
                  objectFit: 'contain',
                  marginBottom: '16px',
                  display: 'block'
                }}
              />
            </div>

            {/* Oura Ring */}
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <Image
                src="/manulife-vitality-thumbnail-Oura-Ring.svg"
                alt="Oura Ring"
                width={260}
                height={174}
                style={{
                  width: '260px',
                  height: '174px',
                  objectFit: 'contain',
                  marginBottom: '16px',
                  display: 'block'
                }}
              />
            </div>

            {/* Orangetheory Fitness */}
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <Image
                src="/manulife-vitality-thumbnail-orangetheory-fitness.svg"
                alt="Orangetheory Fitness"
                width={260}
                height={174}
                style={{
                  width: '260px',
                  height: '174px',
                  objectFit: 'contain',
                  marginBottom: '16px',
                  display: 'block'
                }}
              />
            </div>

            {/* WHOOP */}
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <Image
                src="/manulife-vitality-thumbnail-whoop.svg"
                alt="WHOOP"
                width={260}
                height={174}
                style={{
                  width: '260px',
                  height: '174px',
                  objectFit: 'contain',
                  marginBottom: '16px',
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Need Help Banner */}
      <section style={{ padding: '0 20px', marginTop: '40px', marginBottom: '40px' }}>
        <div style={{ 
          maxWidth: '1140px', 
          margin: '0 auto',
          backgroundColor: '#1a2b4a',
          padding: '30px 45px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '30px',
          flexWrap: 'wrap'
        }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              fontWeight: 700, 
              color: '#fff', 
              marginBottom: '12px',
              lineHeight: 1.3,
              textAlign: 'left'
            }}>
              Need help?
            </h2>
            <p style={{ 
              fontSize: '18px', 
              color: '#e5e7eb', 
              margin: 0,
              lineHeight: 1.7,
              textAlign: 'left'
            }}>
              Call us at <strong style={{ color: '#fff' }}>1-888-601-9980</strong> or book some time with our licensed experts.
            </p>
          </div>
          <div>
            <a href="https://www.policyadvisor.com/app/schedule-meeting/?source_url=https://www.policyadvisor.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ 
              minWidth: '220px',
              fontSize: '16px',
              padding: '16px 40px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              SCHEDULE A CALL
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faq-section">
        <h2 style={{ textAlign: 'center' }}>FAQs</h2>
        <p className="faq-subtitle">Everything you need to know about the product.</p>
        <div className="faq-list">
          <div className={`faq-item ${activeFAQ === 0 ? 'active' : ''}`} onClick={() => toggleFAQ(0)}>
            <div className="faq-question">
              <span>What is Manulife Vitality?</span>
              <span>{activeFAQ === 0 ? '−' : '+'}</span>
            </div>
            {activeFAQ === 0 && (
              <div className="faq-answer">
                Manulife Vitality is a wellness program included with eligible Manulife life and health insurance policies. 
                It rewards you for healthy choices with points that unlock savings, gift cards, premium discounts, and wellness rewards.
              </div>
            )}
          </div>
          
          <div className={`faq-item ${activeFAQ === 1 ? 'active' : ''}`} onClick={() => toggleFAQ(1)}>
            <div className="faq-question">
              <span>How does the Manulife Vitality program work?</span>
              <span>{activeFAQ === 1 ? '−' : '+'}</span>
            </div>
            {activeFAQ === 1 && (
              <div className="faq-answer">
                When you join, you earn Vitality Points for activities like walking, working out, getting health screenings, 
                and completing a health review. Your points determine your Vitality Status—from Bronze to Platinum—which unlocks greater rewards and insurance premium savings.
              </div>
            )}
          </div>

          <div className={`faq-item ${activeFAQ === 2 ? 'active' : ''}`} onClick={() => toggleFAQ(2)}>
            <div className="faq-question">
              <span>How much can I save on my premiums?</span>
              <span>{activeFAQ === 2 ? '−' : '+'}</span>
            </div>
            {activeFAQ === 2 && (
              <div className="faq-answer">
                Members enjoy an automatic 10% premium discount in their first year on eligible Manulife life insurance with the Vitality program. 
                Starting in year two, you can save up to 15% off your premiums if you reach Platinum status, with savings depending on your annual activity and health participation.
              </div>
            )}
          </div>

          <div className={`faq-item ${activeFAQ === 3 ? 'active' : ''}`} onClick={() => toggleFAQ(3)}>
            <div className="faq-question">
              <span>How does PolicyAdvisor make applying for Manulife Vitality easier?</span>
              <span>{activeFAQ === 3 ? '−' : '+'}</span>
            </div>
            {activeFAQ === 3 && (
              <div className="faq-answer">
                PolicyAdvisor makes choosing Manulife Vitality simple with expert Canadian insurance guidance, online quotes, and easy applications. 
                Our advisors help you compare rates, understand program features, and complete your policy setup so you can start earning rewards and premium savings with no added fees.
              </div>
            )}
          </div>

          <div className={`faq-item ${activeFAQ === 4 ? 'active' : ''}`} onClick={() => toggleFAQ(4)}>
            <div className="faq-question">
              <span>Does PolicyAdvisor charge a fee for helping me with Manulife Vitality?</span>
              <span>{activeFAQ === 4 ? '−' : '+'}</span>
            </div>
            {activeFAQ === 4 && (
              <div className="faq-answer">
                No—PolicyAdvisor&#39;s service is completely free. You&#39;ll pay no extra charges, and our licensed advisors work directly with Manulife 
                to help you secure the best coverage and discounts available.
              </div>
            )}
          </div>

          <div className={`faq-item ${activeFAQ === 5 ? 'active' : ''}`} onClick={() => toggleFAQ(5)}>
            <div className="faq-question">
              <span>How can I get started with Manulife Vitality through PolicyAdvisor?</span>
              <span>{activeFAQ === 5 ? '−' : '+'}</span>
            </div>
            {activeFAQ === 5 && (
              <div className="faq-answer">
                You can get a free quote from PolicyAdvisor in minutes, apply for an eligible Manulife policy, and receive expert support through every step. 
                Once your coverage is active, PolicyAdvisor helps you activate your Manulife Vitality account so you can start earning points, rewards, and savings immediately.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

