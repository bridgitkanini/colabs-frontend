/** @type {import('tailwindcss').Config} */
import shadcnTailwindPlugin from "./src/components/lib/shadcn-tailwind-config";
export default {
   darkMode: ["class"],
   content: ["./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            sidebar: {
               DEFAULT: 'oklch(var(--sidebar-background))',
               foreground: 'oklch(var(--sidebar-foreground))',
               primary: 'oklch(var(--sidebar-primary))',
               'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
               accent: 'oklch(var(--sidebar-accent))',
               'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
               border: 'oklch(var(--sidebar-border))',
               ring: 'oklch(var(--sidebar-ring))'
            }
         }
      }
   },
   plugins: [
      require("daisyui"),
      require("tailwindcss-animate"),
      shadcnTailwindPlugin,
   ],

   daisyui: {
      themes: [
         {
            light: {

               "color-scheme": "light",
               'primary': '#1eb854',
               'primary-focus': '#188c40',
               'primary-content': '#241f31',
               'secondary': '#20d55f',
               'secondary-focus': '#18aa4b',
               'secondary-content': '#000000',
               'accent': '#d99330',
               'accent-focus': '#b57721',
               'accent-content': '#000000',
               'neutral': '#deddda',
               'neutral-focus': '#c0bfbc',
               'neutral-content': '#000000',
               'base-100': '#ffffff',
               'base-200': '#cfebe3',
               'base-300': '#83b395',
               'base-content': '#000000',
               "success": "#00a96e",
               "error": "#ff5861",
               "info": "#00b5ff",
               "warning": "#ffbe00",
               "--animation-btn": ".25s",
               "--animation-input": ".2s",
               "--border-btn": "1px",
               "--btn-focus-scale": ".95",
               "--rounded-badge": "1.9rem",
               "--rounded-box": "1rem",
               "--rounded-btn": ".5rem",
               "--tab-border": "1px",
               "--tab-radius": ".5rem"
            },
            dark: {
               "color-scheme": "dark",
               "primary": "#1eb854",
               "primary-content": "#000000",
               "secondary": "#1db88e",
               "secondary-content": "#000c07",
               "accent": "#1db8ab",
               "accent-content": "#000c0b",
               "neutral": "#19362d",
               "neutral-content": "#cdd3d1",
               "base-100": "#171212",
               "base-200": "#140f0f",
               "base-300": "#110c0d",
               "base-content": "#cbc9c9",
               "success": "#00a96e",
               "error": "#852e32",
               "info": "#00b5ff",
               "warning": "#ffbe00",
               "--animation-btn": ".25s",
               "--animation-input": ".2s",
               "--border-btn": "1px",
               "--btn-focus-scale": ".95",
               "--rounded-badge": "1.9rem",
               "--rounded-box": "1rem",
               "--rounded-btn": ".5rem",
               "--tab-border": "1px",
               "--tab-radius": ".5rem"
            }
         }

      ]
   },
};




