import { Check, ChevronDown, X } from 'lucide-react'
import React, { useState } from 'react'
export default function HeroSection() {
    // Type definitions
    interface FormData {
        firstName: string
        lastName: string
        country: string
        countryCode: string
        phone: string
        email: string
        experience: string
        acceptTerms: boolean
    }

    interface FormErrors {
        [key: string]: string
    }

    interface Country {
        name: string
        code: string
    }

    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        country: '',
        countryCode: '',
        phone: '',
        email: '',
        experience: '',
        acceptTerms: false,
    })

    const [errors, setErrors] = useState<FormErrors>({})
    const [showDropdown, setShowDropdown] = useState<boolean>(false)
    const [showExperienceDropdown, setShowExperienceDropdown] =
        useState<boolean>(false)
    const [showToast, setShowToast] = useState<boolean>(false)

    const countries: Country[] = [
        { name: 'Cyprus', code: '+357' },
        { name: 'United Kingdom', code: '+44' },
        { name: 'Germany', code: '+49' },
        { name: 'United States', code: '+1' },
        { name: 'France', code: '+33' },
    ]

    const experienceOptions: string[] = [
        'No experience',
        'Less than 1 year',
        '1-2 years',
        '3-5 years',
        'More than 5 years',
    ]

    const validateEmail = (email: string): boolean => {
        const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required'
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required'
        }

        if (!formData.country) {
            newErrors.country = 'Country is required'
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required'
        } else if (!/^\d{7,15}$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address'
        }

        if (!formData.experience) {
            newErrors.experience = 'Experience level is required'
        }

        if (!formData.acceptTerms) {
            newErrors.acceptTerms = 'You must accept the terms and conditions'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: '',
            }))
        }
    }

    const handleCountrySelect = (country: Country): void => {
        setFormData((prev) => ({
            ...prev,
            country: country.name,
            countryCode: country.code,
        }))
        setShowDropdown(false)

        // Clear country error
        if (errors.country) {
            setErrors((prev) => ({
                ...prev,
                country: '',
            }))
        }
    }

    const handleExperienceSelect = (experience: string): void => {
        setFormData((prev) => ({
            ...prev,
            experience,
        }))
        setShowExperienceDropdown(false)

        // Clear experience error
        if (errors.experience) {
            setErrors((prev) => ({
                ...prev,
                experience: '',
            }))
        }
    }

    const handleSubmit = (): void => {
        if (validateForm()) {
            console.log('Form submitted:', formData)
            setShowToast(true)
            setTimeout(() => setShowToast(false), 3000)

            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                country: '',
                countryCode: '',
                phone: '',
                email: '',
                experience: '',
                acceptTerms: false,
            })
        }
    }

    return (
        <div className="min-h-screen  bg-cover bg-center bg-[url('/hero/image-main.png')] px-2 lg:px-0 pb-20 ">
            <div className="flex  items-center justify-center  min-h-screen">
                <div className="flex flex-col">
                    <h1 className="bg-gradient-to-r from-[#FCD678] via-[#FCD678] to-[#BC8C2F] inline-block text-transparent bg-clip-text font-bold text-7xl">
                        Lorem ipsum dolor
                    </h1>
                    <p className="text-center font-bold text-7xl text-white">
                        sit amet tosik 
                    </p>
                    <div className="bg-white rounded-[10px] p-10 mt-8">
                        <h2 className="text-black font-bold text-2xl text-center">
                            Lorem ipsum dolor sit amet
                        </h2>
                        <div className="w-full mt-10">
                            <div className="space-y-6">
                                {/* First Name & Last Name */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${
                                                errors.firstName
                                                    ? 'border-red-500'
                                                    : 'border-gray-300'
                                            }`}
                                        />
                                        {errors.firstName && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.firstName}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${
                                                errors.lastName
                                                    ? 'border-red-500'
                                                    : 'border-gray-300'
                                            }`}
                                        />
                                        {errors.lastName && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.lastName}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Country & Phone */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="relative">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowDropdown(!showDropdown)
                                            }
                                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all flex items-center justify-between ${
                                                errors.country
                                                    ? 'border-red-500'
                                                    : 'border-gray-300'
                                            }`}
                                        >
                                            <span
                                                className={
                                                    formData.country
                                                        ? 'text-gray-800'
                                                        : 'text-gray-500'
                                                }
                                            >
                                                {formData.country || 'Country'}
                                            </span>
                                            <ChevronDown className="h-5 w-5 text-gray-400" />
                                        </button>

                                        {showDropdown && (
                                            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-xl mt-1 shadow-lg z-10 max-h-60 overflow-y-auto">
                                                {countries.map((country) => (
                                                    <button
                                                        key={country.name}
                                                        type="button"
                                                        onClick={() =>
                                                            handleCountrySelect(
                                                                country
                                                            )
                                                        }
                                                        className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                                                    >
                                                        {country.name} (
                                                        {country.code})
                                                    </button>
                                                ))}
                                            </div>
                                        )}

                                        {errors.country && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.country}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            value={formData.countryCode}
                                            placeholder="Code"
                                            readOnly
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-600"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${
                                                errors.phone
                                                    ? 'border-red-500'
                                                    : 'border-gray-300'
                                            }`}
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.phone}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Email & Experience */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${
                                                errors.email
                                                    ? 'border-red-500'
                                                    : 'border-gray-300'
                                            }`}
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div className="relative">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowExperienceDropdown(
                                                    !showExperienceDropdown
                                                )
                                            }
                                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all flex items-center justify-between ${
                                                errors.experience
                                                    ? 'border-red-500'
                                                    : 'border-gray-300'
                                            }`}
                                        >
                                            <span
                                                className={
                                                    formData.experience
                                                        ? 'text-gray-800'
                                                        : 'text-gray-500'
                                                }
                                            >
                                                {formData.experience ||
                                                    'Experience'}
                                            </span>
                                            <ChevronDown className="h-5 w-5 text-gray-400" />
                                        </button>

                                        {showExperienceDropdown && (
                                            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-xl mt-1 shadow-lg z-10">
                                                {experienceOptions.map(
                                                    (option) => (
                                                        <button
                                                            key={option}
                                                            type="button"
                                                            onClick={() =>
                                                                handleExperienceSelect(
                                                                    option
                                                                )
                                                            }
                                                            className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                                                        >
                                                            {option}
                                                        </button>
                                                    )
                                                )}
                                            </div>
                                        )}

                                        {errors.experience && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.experience}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Terms & Conditions */}
                                <div className="flex items-start space-x-3">
                                    <div className="relative">
                                        <input
                                            type="checkbox"
                                            name="acceptTerms"
                                            checked={formData.acceptTerms}
                                            onChange={handleInputChange}
                                            className="sr-only"
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    acceptTerms:
                                                        !prev.acceptTerms,
                                                }))
                                            }
                                            className={`w-5 h-5 border-2 rounded transition-all flex items-center justify-center ${
                                                formData.acceptTerms
                                                    ? 'bg-green-500 border-green-500'
                                                    : errors.acceptTerms
                                                    ? 'border-red-500'
                                                    : 'border-gray-300'
                                            }`}
                                        >
                                            {formData.acceptTerms && (
                                                <Check className="h-3 w-3 text-white" />
                                            )}
                                        </button>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-700">
                                            I have read and accepted the{' '}
                                            <a
                                                href="#"
                                                className="text-red-500 hover:text-red-600 transition-colors"
                                            >
                                                Privacy Policy
                                            </a>{' '}
                                            and{' '}
                                            <a
                                                href="#"
                                                className="text-red-500 hover:text-red-600 transition-colors"
                                            >
                                                Terms and Conditions
                                            </a>
                                        </p>
                                        {errors.acceptTerms && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.acceptTerms}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                >
                                    JOIN NOW
                                </button>
                            </div>

                            {/* Toast Notification */}
                            {showToast && (
                                <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center space-x-2 z-50">
                                    <Check className="h-5 w-5" />
                                    <span>Form submitted successfully!</span>
                                    <button
                                        onClick={() => setShowToast(false)}
                                        className="ml-2 text-white hover:text-gray-200"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
