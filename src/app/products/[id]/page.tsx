// src/app/products/[id]/page.tsx
import { getProduct } from '@/lib/api';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import ProductDetails from '@/components/ProductDetails';
import { Metadata } from 'next';

type ProductPageParams = {
  params: Promise<{
    id: string;
  }>;
};


export default async function ProductPage({ 
  params 
}: ProductPageParams) {
  const { id } = await params

  const product = await getProduct(id || '');

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: product.name, href: `/products/${product.id}` }]} />
          <ProductDetails product={product} />
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata(
  { params }: ProductPageParams
): Promise<Metadata> {
  const { id } = await params
  const product = await getProduct(id || '');

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found'
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{
        url: new URL(product.image, baseUrl).toString()
      }]
    }
  };
}