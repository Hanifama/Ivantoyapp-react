module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      widht:{
        150:"150px",
        190:"190px",
        225:"225px",
        275:"275px",
        300:"300rem",
        340:"340px",
        375:"375px",
        350:"350px",
        460:"460px",
        656:"656px",
        880:"880px",
        508:"508px",
      },
      height:{
        80:"80px",
        150:"150px",
        225:"300px",
        300:"300px",
        340:"340px",
        370:"370px",
        420:"420px",
        510:"510px",
        600:"600px",
        650:"650px", 
        685:"685px",
        800:"800px",
        "90vh":"90vh",
      },
      minWidht:{
        210:"210px",
        350:"350px",
        620:"620px",
      },
      screen:{
        sm:"640px",
        md:"768px",
        lg:"1024px",
        xl:"1280px",
        "2xl":"1536px",
      },
      colors:{
        headingColor:"#052c4ef3",
        textColor:"#515151",
        cartNumbg:"#e80013",
        primary:"#f5f3f3",
        black:"#000",
        cardOverlay:"rgba(256,256,256,0.4)",
        card:"rgba(256,256,256,0.8)",
        lighttextGray:"#9cac0ab",
        cartBg: "#282a2c",
        cartItem: "#2e3033",
        cartTotal: "#343739",


      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}