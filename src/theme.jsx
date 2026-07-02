import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            backgroundColor: "#ffffff",
            color: "#2563EB",
            paddingTop: "16px",
            paddingBottom: "16px",
            borderRadius: "1rem",
            fontWeight: "bold",
            fontSize: "1.125rem",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)", // shadow-2xl
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            transition: "all 0.2s ease",
          },
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            "&:hover": {
              backgroundColor: "#ffffff",
              boxShadow: "0 20px 25px -5px rgba(0,0,0,0.2)", // shadow-xl
              transform: "scale(1.02)",
            },
          },
        },
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            backgroundColor: "linear-gradient(to right, #2563EB, #1E40AF)",
            color: "#ffffff",
            paddingTop: "16px",
            paddingBottom: "16px",
            borderRadius: "1rem",
            fontWeight: "bold",
            fontSize: "1.125rem",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)", // shadow-2xl
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            transition: "all 0.2s ease",
          },
        },
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            "&:hover": {
              boxShadow: "0 10px 15px rgba(0,0,0,0.2)",
            },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            backgroundColor: "#ffffff",           // bg-white
            border: "2px solid #D1D5DB",          // border-2 border-gray-300
            color: "#374151",                     // text-gray-700
            paddingTop: "16px",                  // py-4
            paddingBottom: "16px",
            borderRadius: "0.75rem",             // rounded-xl
            fontWeight: 600,                     // font-semibold

            display: "flex",                     // flex
            alignItems: "center",               // items-center
            justifyContent: "center",           // justify-center
            gap: "0.75rem",                     // gap-3

            boxShadow: "0 4px 6px rgba(0,0,0,0.1)", // shadow-md
            transition: "all 0.2s ease",        // transition-all

            "&:hover": {
              backgroundColor: "#F9FAFB",       // hover:bg-gray-50
              border: "2px solid #9CA3AF",      // hover:border-gray-400
              boxShadow: "0 10px 15px rgba(0,0,0,0.15)", // shadow-lg
            },
          },
        },
        {
          props: { variant: "outlined", color: 'secondary' },
          style: {
            backgroundColor: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(8px)",
            border: "2px solid white",
            color: "white",
            padding: "16px",
            borderRadius: "1rem",
            fontWeight: "bold",
            fontSize: "1.125rem",
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            transition: "all 0.2s",
          },
        },
        {
          props: { variant: "outlined", color: 'secondary' },
          style: {
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.3)",
              transform: "scale(1.02)",
            },
          },
        },
        {
          props: { variant: "text", color: "info" },
          style: {
            color: "#4B5563",              // text-gray-600
            fontSize: "0.875rem",          // text-sm
            transition: "color 0.2s ease", // transition-colors

            "&:hover": {
              color: "#111827",            // text-gray-900
              backgroundColor: "transparent", // evita fondo gris de MUI
            },
          },
        }
      ],
    },
  },
})

export default theme
