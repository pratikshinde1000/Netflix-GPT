    /** @type {import('tailwindcss').Config} */
    import defaultTheme from 'tailwindcss/defaultTheme'; // Import defaultTheme

    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          fontFamily: {
            outfit: ['Outfit', ...defaultTheme.fontFamily.sans], // Add Outfit with a fallback
          },
        },
      },
      plugins: [],
    };