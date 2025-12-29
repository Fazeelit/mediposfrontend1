// app/authservice/page.jsx
"use client";

import axios from "axios";
import { toast } from "react-hot-toast";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://mediposbackend.onrender.com/api";

/**
 * Generic API request function
 */
export async function apiRequest(
  endpoint,
  {
    method = "GET",
    data = null,
    headers = {},
    includeAuth = false,
    formData = false,
    successMessage = null,
    timeout = 30 * 60 * 1000, // 30 minutes
    params = null,
    onUploadProgress = null,
  } = {}
) {
  try {
    let finalHeaders = { ...headers };

    // ---------------------------------------------------------
    // Handle Content-Type logic
    // ---------------------------------------------------------
    if (formData) {
      // VERY IMPORTANT: Do NOT set Content-Type here
      // Browser will generate correct boundary
      delete finalHeaders["Content-Type"];
    } else if (data && typeof data === "object") {
      finalHeaders["Content-Type"] = "application/json";
      data = JSON.stringify(data);
    }

    // ---------------------------------------------------------
    // Authorization Header
    // ---------------------------------------------------------
    if (includeAuth && typeof window !== "undefined") {
      const token = localStorage.getItem("authToken");
      if (token) finalHeaders["Authorization"] = `Bearer ${token}`;
    }

    // ---------------------------------------------------------
    // Create Request URL
    // ---------------------------------------------------------
    const url = `${BASE_URL}${endpoint.startsWith("/") ? endpoint : "/" + endpoint}`;

    console.log("API Request:", {
      url,
      method,
      sendingFormData: formData,
      headers: finalHeaders,
      params,
      data,
    });

    // ---------------------------------------------------------
    // Axios Config
    // ---------------------------------------------------------
    const config = {
      url,
      method: method.toUpperCase(),
      headers: finalHeaders,
      timeout,
      maxBodyLength: Infinity,
      maxContentLength: Infinity,
    };

    if (params) config.params = params;

    if (typeof onUploadProgress === "function") {
      config.onUploadProgress = onUploadProgress;
    }

    // Attach body only for non-GET/HEAD
    if (!["GET", "HEAD"].includes(config.method)) {
      config.data = data;
    }

    // ---------------------------------------------------------
    // Make Request
    // ---------------------------------------------------------
    const response = await axios(config);

    // ---------------------------------------------------------
    // Success Toast
    // ---------------------------------------------------------
    const msg = successMessage || response.data?.message;
    if (msg && typeof window !== "undefined") {
      toast.success(msg);
    }

    return response.data;
  } catch (error) {
    console.error("API Request Error:", error);

    const errorMessage =
      error.response?.data?.message ||
      error.response?.data?.error ||
      (error.code === "ECONNABORTED"
        ? "Request timed out. Please try again."
        : null) ||
      (error.message?.includes("Network Error")
        ? "Network error — check your internet connection."
        : null) ||
      error.message ||
      "Something went wrong";

    if (typeof window !== "undefined") toast.error(errorMessage);

    throw new Error(errorMessage);
  }
}
