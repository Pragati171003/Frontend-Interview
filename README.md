# CA Monk - Professional Blog Application

A high-performance, feature-rich blog platform built with a modern frontend stack. This application implements a **Master-Detail architecture**, full **CRUD synchronization**, and persistent user state management.

##  Submission Overview

In response to the CA Monk Frontend Developer Intern challenge, I have developed a robust application that exceeds the baseline requirements. My focus was on **Technical Excellence**, **User Experience (UX)**, and **Architecture Scalability**.

### Key Competitive Advantages of This Implementation:
- **Zero-State Loss**: Implemented LocalStorage to persist user profiles.
- **URL Synchronization**: Article selection is synced with URL parameters for deep-linking support.
- **Resilient Engineering**: Integrated a global Error Boundary and image fallback logic.
- **Validated Inputs**: Comprehensive form validation with character counters.
- **Professional Testing**: A suite of unit and logic tests using Vitest.

---

## Implemented Features

### 1. Advanced Master-Detail Interface
- **Master List**: A scrollable sidebar with categorical icons, real-time relative timestamps (e.g., "2 minutes ago"), and active state indicators.
- **Sticky Navigation**: Sidebar remains fixed while the article content scrolls, providing a seamless reading experience.
- **Detail View**: High-fidelity article rendering including dynamic cover images, reading time calculations, and multi-category support.

### 2. TanStack Query State Management
- **Efficient Data Fetching**: Optimized GET requests for the full list and specific IDs.
- **Smart Mutations**: POST requests for new blogs include automatic **Query Invalidation**, ensuring the UI updates instantly without a page refresh.
- **Perceived Performance**: Integrated custom shadcn Skeletons for a "zero-flicker" loading experience.

### 3. Dynamic User Profiles
- **Profile Management**: A dedicated `/profile` route where users can edit their Name, Role, Location, and Bio.
- **Automatic Authorship**: When creating a blog, the system automatically injects the active profile's name and professional title into the metadata.
- **Dynamic Avatars**: Integrated Dicebear API to generate unique user avatars based on the profile name.

### 4. Enterprise-Grade Reliability
- **Error Boundaries**: Component-level crash protection to handle unexpected UI errors gracefully.
- **Form Validation**: Prevents submission of empty titles, invalid image URLs, or overly short content.
- **Image Fallbacks**: Robust `onError` handling that replaces broken image links with branded placeholders.

---

## Tech Stack & Commands Used

### Core Frameworks
- **React 18**: Using functional components and modern hooks.
- **TypeScript**: Strict-mode typing for enhanced code reliability.
- **Vite**: Ultra-fast build tool and development server.

### Libraries & Dependencies
I manually integrated the following libraries to satisfy and exceed the project requirements:

```bash
# Data Fetching & State Management
npm install @tanstack/react-query 

# Routing & Navigation
npm install react-router-dom

# UI Components & Styling
npm install lucide-react date-fns
npx shadcn@latest init
npx shadcn@latest add button card input badge skeleton dialog toast textarea label

# Testing Framework (Dev Dependencies)
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```
---
##  Project Architecture

The project follows a modular **Feature-Based** folder structure to ensure scalability, separation of concerns, and ease of maintenance.

```text
src/
├── __tests__/        # Logic and component unit tests
├── components/
│   ├── ui/           # shadcn base UI components
│   ├── BlogDetail    # Dynamic article viewer
│   ├── BlogList      # Master sidebar list
│   ├── Header        # Global navigation & modal control
│   └── ErrorBoundary # UI crash protection
├── hooks/            # Custom TanStack hooks (useBlogs, useCreateBlog)
├── pages/            # Route-level views (Home, Profile)
├── types/            # Global TypeScript interfaces
├── test/             # Test environment setup and mock data
└── lib/              # Utility functions (cn, tailwind-merge)
```

## Quality Assurance (Testing)

I have implemented a comprehensive testing suite using **Vitest** and **React Testing Library** to ensure the application is reliable and handles edge cases effectively. Currently, the project maintains **8/8 passing tests** covering critical application paths.

### How to Run Tests:
```bash
npm run test
```

### Test Coverage Detail:
- **Rendering**: Validates that the brand identity (Header/Footer), navigation links, and primary UI structures are present in the DOM.
- **Interactivity**: Ensures that user actions, such as clicking a sidebar card, correctly trigger state changes and dynamic data fetch requests.
- **Logic & Edge Cases**: Verifies that the `BlogDetail` component handles `undefined` states gracefully and displays appropriate fallback messages when no blog is selected.
- **Data Integrity**: Checks that data fetched from the Mock API (or mock data files) maps correctly to the UI components, ensuring authors, roles, and content are displayed accurately.

---

##  Installation & Running Locally

Follow these steps to set up the project environment on your local machine:

1.  **Clone the fork:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/Frontend-Interview.git
    cd Frontend-Interview
    ```

2.  **Install all dependencies:**
    ```bash
    npm install
    ```

3.  **Start the Mock API (Required for Data):**
    ```bash
    npm run server
    ```
    *The JSON Server will start on `http://localhost:3001`. The frontend relies on this for all blog data storage and retrieval.*

4.  **Start the React Application:**
    ```bash
    npm run dev
    ```
    *The Vite development server will run on `http://localhost:5173`.*

---

##  Design Philosophy & Responsiveness

The user interface ensures a premium experience regardless of the user's device.

-   **Desktop (High-Resolution)**: Features a side-by-side **Master-Detail view** with a sticky sidebar. This allows users to browse the list while reading content without losing their scroll position.
-   **Tablet & Small Laptops**: Implements balanced spacing and reduced font scales to maximize screen real estate while maintaining readability.
-   **Mobile Devices**: Switches to a single-column vertical stack. I optimized touch targets for buttons and forms and ensured the sidebar handles overflow gracefully.

**Technical Styling:**
Using **Tailwind CSS**, I implemented dynamic typography scales (e.g., `text-4xl md:text-[64px]`) and fluid layouts. This ensures that the professional aesthetic of the CA Monk brand is maintained across all device classes.

---
