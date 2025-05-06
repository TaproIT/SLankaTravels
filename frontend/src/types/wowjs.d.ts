 
declare module "wow.js" {
  export default class WOW {
    constructor(options?: {
      boxClass?: string; // Class for elements to animate
      animateClass?: string; // Animation CSS class
      offset?: number; // Distance to start animation (px)
      mobile?: boolean; // Enable animations on mobile
      live?: boolean; // Keep checking for new elements
      scrollContainer?: string | null; // Optional scroll container selector
      resetAnimation?: boolean; // Reset animation after it ends
    });

    init(): void;
    sync(): void;
  }
}

