'use client'

import React, { useEffect, useState } from 'react'
import {
  Eye,
  Sparkles,
  Truck,
  ShieldCheck,
  Leaf,
  Star,
  Mail,
  Phone,
  MapPin,
  X,
  CheckCircle2,
  Zap,
  ArrowRight,
} from 'lucide-react'

interface CustomFields {
  badge: string
  features: string[]
  imageUrl: string
  description: string
  category: string
  stock: number
}

export interface ProductItem {
  id: string
  tenantId: string
  title: string
  price: number
  status?: string
  customFields?: CustomFields
  createdAt: string
}

const initialProducts: ProductItem[] = [
  {
    id: '62dbdc3e-0c09-477d-87b0-e8d732c5f9d4',
    tenantId: '325a3964-b84d-494f-8859-d3fe929d263f',
    title: 'Ethiopian Yirgacheffe Natural',
    price: 24,
    status: 'ACTIVE',
    customFields: {
      badge: 'Single Origin',
      features: [],
      imageUrl:
        'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
      description:
        'Delicate floral aroma with tasting notes of jasmine, blueberry jam, and candied bergamot.',
      category: 'Whole Bean',
      stock: 100,
    },
    createdAt: new Date().toISOString(),
  },
  {
    id: '9957b17e-0ed2-4652-a8a1-276de6c81410',
    tenantId: '325a3964-b84d-494f-8859-d3fe929d263f',
    title: 'Midnight Espresso Reserve',
    price: 22.5,
    status: 'ACTIVE',
    customFields: {
      badge: 'Barista Choice',
      features: [],
      imageUrl:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
      description:
        'Velvety dark chocolate and toasted almond notes with a thick, golden crema for rich espresso.',
      category: 'Espresso',
      stock: 80,
    },
    createdAt: new Date().toISOString(),
  },
  {
    id: '9204a9f5-d559-48b4-bc69-4e2f3a4fc0f5',
    tenantId: '325a3964-b84d-494f-8859-d3fe929d263f',
    title: 'Precision Ceramic Pour-Over Dripper',
    price: 45,
    status: 'ACTIVE',
    customFields: {
      badge: 'Crafted',
      features: [],
      imageUrl:
        'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80',
      description:
        'Handcrafted Japanese ceramic brewer with spiral interior ribs for optimal extraction speed.',
      category: 'Brew Gear',
      stock: 35,
    },
    createdAt: new Date().toISOString(),
  },
]

export default function Home() {
  const [products, setProducts] = useState<ProductItem[]>(initialProducts)
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(
    null
  )

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products')
        if (!res.ok) throw new Error('Network response was not ok')
        const data: ProductItem[] = await res.json()
        setProducts(data)
      } catch (err) {
        console.error('Failed to fetch products:', err)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className="font-sans antialiased">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-2">
        <span>🚀 Launching soon: Get 20% off on all first orders!</span>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 backdrop-blur-md bg-white/70 border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
              A
            </div>
            <span className="font-semibold text-xl">another Testing</span>
          </div>
          <div className="space-x-6">
            <a href="#products" className="text-gray-700 hover:text-indigo-600">
              Products
            </a>
            <a href="#why" className="text-gray-700 hover:text-indigo-600">
              Why Choose Us
            </a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto p-8 md:p-16"
      >
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            The Future of Tech Gear
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Experience boundary-pushing audio precision, smart ergonomics, and
            aerospace-grade accessories designed for performance.
          </p>
          <a
            href="#products"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Explore Collection
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80"
            alt="Hero"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </section>

      {/* Stats Counter */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">1,200+</h3>
            <p className="text-gray-600">Products</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">500+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">99%</h3>
            <p className="text-gray-600">Positive Reviews</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">24/7</h3>
            <p className="text-gray-600">Support</p>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section id="products" className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Featured Collection
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <img
                  src={product.customFields?.imageUrl}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="inline-block bg-indigo-600 text-white text-xs px-2 py-0.5 rounded">
                    {product.customFields?.badge}
                  </span>
                  <h3 className="mt-2 font-semibold">{product.title}</h3>
                  <p className="text-indigo-600 font-bold">
                    ${product.price.toFixed(2)}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {product.customFields?.features.map((f, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-200 text-xs px-2 py-0.5 rounded"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="mt-4 inline-flex items-center px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="p-6 flex flex-col md:flex-row">
              <img
                src={selectedProduct.customFields?.imageUrl}
                alt={selectedProduct.title}
                className="w-full md:w-1/2 h-64 object-cover rounded-md"
              />
              <div className="md:ml-6 mt-4 md:mt-0 flex-1">
                <h3 className="text-2xl font-semibold">
                  {selectedProduct.title}
                </h3>
                <p className="text-indigo-600 font-bold text-xl mt-2">
                  ${selectedProduct.price.toFixed(2)}
                </p>
                <p className="mt-4 text-gray-700">
                  {selectedProduct.customFields?.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {selectedProduct.customFields?.features.map((f, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
                  <Mail className="h-4 w-4 mr-1" />
                  Inquire
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Why Choose Us */}
      <section id="why" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <ShieldCheck className="h-8 w-8 text-indigo-600" />
              <div