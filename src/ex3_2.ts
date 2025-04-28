const DISCOUNT_RATES = {
    PREMIUM: {
      HIGH_VALUE: 0.8,
      STANDARD: 0.9
    },
    REGULAR: {
      HIGH_VALUE: 0.9,
      STANDARD: 1
    },
    HIGH_VALUE_THRESHOLD: 100
  };
  
  function calculateDiscount(price: number, isPremium: boolean): number {
    const rate = isPremium 
      ? getPremiumDiscountRate(price)
      : getRegularDiscountRate(price);
      
    return price * rate;
  }
  
  function getPremiumDiscountRate(price: number): number {
    return price > DISCOUNT_RATES.HIGH_VALUE_THRESHOLD 
      ? DISCOUNT_RATES.PREMIUM.HIGH_VALUE 
      : DISCOUNT_RATES.PREMIUM.STANDARD;
  }
  
  function getRegularDiscountRate(price: number): number {
    return price > DISCOUNT_RATES.HIGH_VALUE_THRESHOLD 
      ? DISCOUNT_RATES.REGULAR.HIGH_VALUE 
      : DISCOUNT_RATES.REGULAR.STANDARD;
  }