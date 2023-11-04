import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types";

type InitialState = {
  products: Product[];
  curProduct: Product;
  isLoading: boolean;
  error: string;
};

const initialState: InitialState = {
  products: [],
  curProduct: <Product>{},
  isLoading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
});

export const fetchSingleProduct = createAsyncThunk(
  "fetchSingleProduct",
  async (id: number) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return response.json();
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.products = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "fetch error";
      })
      .addCase(fetchSingleProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchSingleProduct.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.isLoading = false;
          state.curProduct = action.payload;
        }
      )
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "fetch error";
      });
  },
});

export default productSlice;
