import { keyframes } from 'styled-components';

export default {
   fadeIn: keyframes`
      0% {
         opacity: 0;
      }
   `,

   fadeOut: keyframes`
      100% {
         opacity: 0;
      }
   `,

   menuOpen: keyframes`
      0% {
         opacity: 0;
         transform: translateY(5%);
      }
   `,

   menuClose: keyframes`
      100% {
         opacity: 0;
         transform: translateY(-5%);
      }
   `,

   dropdownOpen: keyframes`
      0% {
         opacity: 0;
         transform: translateY(-10%);
      }
   `,

   dropdownClose: keyframes`
      100% {
         opacity: 0;
         transform: translateY(-10%);
      }
   `,
};
