// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",

//     // Or if using `src` directory:
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   darkMode: ["class"],
//   theme: {
//   	extend: {
//   		container: {
//   			center: true,
//   			padding: '2rem',
//   			screens: {
//   				'2xl': '1400px'
//   			}
//   		},
//   		colors: {
//   			border: 'hsl(var(--border))',
//   			input: 'hsl(var(--input))',
//   			ring: 'hsl(var(--ring))',
//   			background: 'hsl(var(--background))',
//   			foreground: 'hsl(var(--foreground))',
//   			destructive: {
//   				DEFAULT: 'hsl(var(--destructive))',
//   				foreground: 'hsl(var(--destructive-foreground))'
//   			},
//   			muted: {
//   				DEFAULT: 'hsl(var(--muted))',
//   				foreground: 'hsl(var(--muted-foreground))'
//   			},
//   			accent: {
//   				DEFAULT: 'hsl(var(--accent))',
//   				foreground: 'hsl(var(--accent-foreground))'
//   			},
//   			popover: {
//   				DEFAULT: 'hsl(var(--popover))',
//   				foreground: 'hsl(var(--popover-foreground))'
//   			},
//   			card: {
//   				DEFAULT: 'hsl(var(--card))',
//   				foreground: 'hsl(var(--card-foreground))'
//   			},
//   			sidebar: {
//   				DEFAULT: 'hsl(var(--sidebar-background))',
//   				foreground: 'hsl(var(--sidebar-foreground))',
//   				primary: 'hsl(var(--sidebar-primary))',
//   				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
//   				accent: 'hsl(var(--sidebar-accent))',
//   				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
//   				border: 'hsl(var(--sidebar-border))',
//   				ring: 'hsl(var(--sidebar-ring))'
//   			},
//   			customgreys: {
//   				primarybg: '#1B1C22',
//   				secondarybg: '#25262F',
//   				darkGrey: '#17181D',
//   				darkerGrey: '#3d3d3d',
//   				dirtyGrey: '#6e6e6e'
//   			},
//   			primary: {
//   				'50': '#fdfdff',
//   				'100': '#f7f7ff',
//   				'200': '#ececff',
//   				'300': '#ddddfe',
//   				'400': '#cacafe',
//   				'500': '#b3b3fd',
//   				'600': '#9898fd',
//   				'700': '#7878fc',
//   				'750': '#5a5be6',
//   				'800': '#0404be',
//   				'900': '#020255',
//   				'950': '#010132',
//   				DEFAULT: 'hsl(var(--primary))',
//   				foreground: 'hsl(var(--primary-foreground))'
//   			},
//   			secondary: {
//   				'50': '#fcfefe',
//   				'100': '#f3fbfa',
//   				'200': '#e5f7f4',
//   				'300': '#d0f1ec',
//   				'400': '#b6e9e1',
//   				'500': '#96dfd4',
//   				'600': '#70d3c4',
//   				'700': '#44c5b2',
//   				'800': '#227064',
//   				'900': '#123933',
//   				'950': '#0c2723',
//   				DEFAULT: 'hsl(var(--secondary))',
//   				foreground: 'hsl(var(--secondary-foreground))'
//   			},
//   			white: {
//   				'50': '#d2d2d2',
//   				'100': '#ffffff'
//   			},
//   			tertiary: {
//   				'50': '#E9B306'
//   			},
//   			chart: {
//   				'1': 'hsl(var(--chart-1))',
//   				'2': 'hsl(var(--chart-2))',
//   				'3': 'hsl(var(--chart-3))',
//   				'4': 'hsl(var(--chart-4))',
//   				'5': 'hsl(var(--chart-5))'
//   			}
//   		},
//   		borderRadius: {
//   			lg: 'var(--radius)',
//   			md: 'calc(var(--radius) - 2px)',
//   			sm: 'calc(var(--radius) - 4px)'
//   		},
//   		keyframes: {
//   			'accordion-down': {
//   				from: {
//   					height: '0'
//   				},
//   				to: {
//   					height: 'var(--radix-accordion-content-height)'
//   				}
//   			},
//   			'accordion-up': {
//   				from: {
//   					height: 'var(--radix-accordion-content-height)'
//   				},
//   				to: {
//   					height: '0'
//   				}
//   			}
//   		},
//   		animation: {
//   			'accordion-down': 'accordion-down 0.2s ease-out',
//   			'accordion-up': 'accordion-up 0.2s ease-out'
//   		},
//   		fontFamily: {
//   			sans: [
//   				'var(--font-dm-sans)'
//   			]
//   		},
//   		fontSize: {
//   			xs: [
//   				'0.75rem',
//   				{
//   					lineHeight: '1rem'
//   				}
//   			],
//   			sm: [
//   				'0.875rem',
//   				{
//   					lineHeight: '1.25rem'
//   				}
//   			],
//   			md: [
//   				'1rem',
//   				{
//   					lineHeight: '1.5rem'
//   				}
//   			],
//   			lg: [
//   				'1.125rem',
//   				{
//   					lineHeight: '1.75rem'
//   				}
//   			],
//   			xl: [
//   				'1.25rem',
//   				{
//   					lineHeight: '1.75rem'
//   				}
//   			],
//   			'2xl': [
//   				'1.5rem',
//   				{
//   					lineHeight: '2rem'
//   				}
//   			]
//   		}
//   	}
//   },
//   plugins: [require("tailwindcss-animate"), "prettier-plugin-tailwindcss"],
// };

// -------------------------------------------------CUSTOM THEME--------------------------------------------------------
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },

        // 🔁 Changed greys for a different look
        customgreys: {
          primarybg: "#18181C",
          secondarybg: "#23242A",
          darkGrey: "#121317",
          darkerGrey: "#363636",
          dirtyGrey: "#5f5f5f",
        },

        // 🔁 Fresh shade for primary
        primary: {
          "50": "#f5f8ff",
          "100": "#e0e7ff",
          "200": "#c0d0ff",
          "300": "#99b3ff",
          "400": "#7198ff",
          "500": "#4f7eff",
          "600": "#2e65ff",
          "700": "#144dff",
          "750": "#103fe0",
          "800": "#0b32c2",
          "900": "#06218b",
          "950": "#03124d",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        // 🔁 Fresh tone for secondary
        secondary: {
          "50": "#f6fdfa",
          "100": "#e3f9f0",
          "200": "#c4f3e0",
          "300": "#9decd0",
          "400": "#6de2bc",
          "500": "#39d6a5",
          "600": "#1ac394",
          "700": "#0fa57e",
          "800": "#0d7059",
          "900": "#084132",
          "950": "#05291f",
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        // 👇 White thoda tint kiya
        white: {
          "50": "#eaeaea",
          "100": "#ffffff",
        },

        // 🔁 Yellowish tertiary to orange-y
        tertiary: {
          "50": "#F4A300",
        },

        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        md: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), "prettier-plugin-tailwindcss"],
};
