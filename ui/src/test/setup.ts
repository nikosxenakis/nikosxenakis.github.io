import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

/**
 * Storage is installed unconditionally rather than only when it looks missing.
 * jsdom 30 under Vitest 4 exposes no window.localStorage at all, while some Node
 * versions expose a stub that is present but has no working methods, so a
 * truthiness guard passes and then `clear()` throws. Always owning the
 * implementation keeps tests identical across local and CI runtimes.
 */
const store = new Map<string, string>();
const memoryStorage: Storage = {
  get length() {
    return store.size;
  },
  clear: () => store.clear(),
  getItem: (key: string) => (store.has(key) ? store.get(key)! : null),
  key: (index: number) => [...store.keys()][index] ?? null,
  removeItem: (key: string) => {
    store.delete(key);
  },
  setItem: (key: string, value: string) => {
    store.set(key, String(value));
  },
};

for (const target of [globalThis, window]) {
  try {
    Object.defineProperty(target, "localStorage", {
      value: memoryStorage,
      configurable: true,
      writable: true,
    });
  } catch {
    // A non-configurable localStorage is reported by the assertion below,
    // rather than surfacing as a confusing failure inside every test.
  }
}

if (typeof localStorage?.clear !== "function") {
  throw new Error("Test setup could not install a usable localStorage");
}

// jsdom implements neither of these, and several components depend on them.
if (!window.matchMedia) {
  window.matchMedia = ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  })) as typeof window.matchMedia;
}

if (!window.IntersectionObserver) {
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
    root = null;
    rootMargin = "";
    thresholds = [];
  } as unknown as typeof window.IntersectionObserver;
}

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  localStorage.clear();
});
