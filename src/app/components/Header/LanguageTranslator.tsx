// "use client";

// import { useEffect, useState } from "react";

// const GoogleTranslate = () => {
//   const [isScriptLoaded, setIsScriptLoaded] = useState(false);

//   useEffect(() => {
//     const addScript = () => {
//       if (!isScriptLoaded) {
//         const script = document.createElement("script");
//         script.src =
//           "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//         script.type = "text/javascript";
//         script.async = true;
//         document.body.appendChild(script);

//         script.onload = () => {
//           setIsScriptLoaded(true);
//         };
//       }
//     };

//     (window as any).googleTranslateElementInit = () => {
//       new (window as any).google.translate.TranslateElement(
//         {
//           pageLanguage: "en", 
//           includedLanguages: "en,hi,fr,es,de",
//           layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
//           autoDisplay: false, 
//         },
//         "google_translate_element"
//       );
//     };

//     addScript();

//     return () => {
//       const existingScript = document.querySelector('script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]');
//       if (existingScript) {
//         document.body.removeChild(existingScript);
//       }
//     };
//   }, [isScriptLoaded]);

//   return (
//     <div className="flex justify-center items-center mt-6">
//       <div className="text-center">
       
//         <div
//           id="google_translate_element"
//           className="inline-block bg-white shadow-md rounded-md p-2 mt-4"
//           style={{
//             border: "1px solid #ccc",
//             borderRadius: "8px",
//             cursor: "pointer",
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default GoogleTranslate;
