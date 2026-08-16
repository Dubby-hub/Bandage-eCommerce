import { api } from "../../../services/api";
import type { Product } from "../../../types/product";

interface DummyJsonProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand?: string;
  thumbnail: string;
  images: string[];
}

interface ProductsResponse {
  products: DummyJsonProduct[];
  total: number;
  skip: number;
  limit: number;
}

export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], number | void>({
      query: (limit = 10) => `/products?limit=${limit}`,

      transformResponse: (
        response: ProductsResponse
      ): Product[] => {
        return response.products.map((product) => ({
          id: product.id,

          title: product.title,

          category: product.category,

          image:
            product.images[0] ?? product.thumbnail,

          hoverImage:
            product.images[1] ?? product.thumbnail,

          price: product.price,

          originalPrice:
            product.discountPercentage > 0
              ? product.price /
                (1 - product.discountPercentage / 100)
              : undefined,

          discount:
            product.discountPercentage > 0
              ? Math.round(product.discountPercentage)
              : undefined,

          rating: Math.round(product.rating),

          reviewCount: Math.floor(
            product.rating * 10
          ),

          isOutOfStock: product.stock === 0,
        }));
      },

      providesTags: ["Products"],
    }),
  }),

  overrideExisting: false,
});

export const {
  useGetProductsQuery,
} = productsApi;